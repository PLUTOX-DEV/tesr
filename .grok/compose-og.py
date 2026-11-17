#!/usr/bin/env python3
"""Compose the AmunChain share card from the photographed seal. Exact 1200×630."""

from collections import deque
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SRC = "/workspace/src/assets/amun-mark.jpg"
OUT = "/workspace/.grok/og-preview.jpg"

W, H = 1200, 630
PAPER = (244, 239, 230, 255)  # #F4EFE6
INK = (20, 32, 51, 255)  # #142033
GOLD = (110, 78, 22, 255)  # #6E4E16
RULE = (110, 78, 22, 255)

SERIF = "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf"
SERIF_REG = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"


def is_background(r, g, b):
    # Keep warm metal. Drop the near-black field outside the seal.
    if r > 78 and r >= g - 8 and r > b + 18:
        return False
    return max(r, g, b) < 58


def key_seal(path):
    src = Image.open(path).convert("RGBA")
    w, h = src.size
    px = src.load()
    seen = bytearray(w * h)
    q = deque()
    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))
    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h:
            continue
        i = y * w + x
        if seen[i]:
            continue
        seen[i] = 1
        r, g, b, _a = px[x, y]
        if not is_background(r, g, b):
            continue
        px[x, y] = (r, g, b, 0)
        q.append((x + 1, y))
        q.append((x - 1, y))
        q.append((x, y + 1))
        q.append((x, y - 1))

    # Eat the dark JPEG fringe that sits outside the gold stroke.
    for _ in range(2):
        kill = []
        for y in range(h):
            for x in range(w):
                r, g, b, a = px[x, y]
                if a == 0 or max(r, g, b) > 42:
                    continue
                clear = 0
                for dy in (-1, 0, 1):
                    for dx in (-1, 0, 1):
                        if dx == 0 and dy == 0:
                            continue
                        nx, ny = x + dx, y + dy
                        if nx < 0 or ny < 0 or nx >= w or ny >= h or px[nx, ny][3] == 0:
                            clear += 1
                if clear >= 3:
                    kill.append((x, y))
        for x, y in kill:
            r, g, b, _a = px[x, y]
            px[x, y] = (r, g, b, 0)

    bbox = src.getbbox()
    return src.crop(bbox)


def tracked_width(text, font, tracking):
    if not text:
        return 0
    return sum(font.getlength(ch) for ch in text) + tracking * (len(text) - 1)


def draw_tracked(draw, text, font, y, fill, tracking, canvas_w, x=None):
    total = tracked_width(text, font, tracking)
    if x is None:
        x = (canvas_w - total) / 2
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + tracking
    return total


def main():
    seal = key_seal(SRC)
    # Hero size: large enough to read as a thumbnail, short enough that the
    # title stays inside the middle half of a 630px card.
    target_h = 292
    scale = target_h / seal.height
    seal = seal.resize((int(seal.width * scale), target_h), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (W, H), PAPER)
    draw = ImageDraw.Draw(canvas)

    # Certificate frame: two hairlines, not a heavy border.
    inset = 36
    draw.rectangle((inset, inset, W - 1 - inset, H - 1 - inset), outline=GOLD)
    inset2 = 42
    draw.rectangle((inset2, inset2, W - 1 - inset2, H - 1 - inset2), outline=GOLD)

    title_font = ImageFont.truetype(SERIF, 78)
    tag_font = ImageFont.truetype(SERIF_REG, 20)
    title = "AMUNCHAIN"
    tag = "LAYER ZERO"
    title_track = 14
    tag_track = 8
    title_w = tracked_width(title, title_font, title_track)
    tag_w = tracked_width(tag, tag_font, tag_track)

    # Stack: seal, short gold rule, title, tagline. Group optically centered,
    # with the lettering held inside the middle half (y 158–472).
    gap_seal_rule = 18
    rule_h = 1
    gap_rule_title = 16
    # Liberation's em box includes internal leading; nudge title up into it.
    title_h = 64
    gap_title_tag = 8
    tag_h = 22
    block_h = (
        seal.height
        + gap_seal_rule
        + rule_h
        + gap_rule_title
        + title_h
        + gap_title_tag
        + tag_h
    )
    top = (H - block_h) // 2 + 4

    # Soft paper shadow so the photographed seal sits on the sheet.
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    mask = seal.split()[-1].filter(ImageFilter.GaussianBlur(10))
    shadow.paste((90, 74, 48, 70), (0, 0, seal.width, seal.height), mask)
    sx = (W - seal.width) // 2 + 0
    sy = top + 8
    canvas.alpha_composite(shadow, (sx, sy))

    seal_x = (W - seal.width) // 2
    canvas.alpha_composite(seal, (seal_x, top))

    rule_y = top + seal.height + gap_seal_rule
    rule_w = 148
    rx0 = (W - rule_w) // 2
    draw.rectangle((rx0, rule_y, rx0 + rule_w, rule_y + rule_h), fill=GOLD)

    title_y = rule_y + rule_h + gap_rule_title - 16
    draw_tracked(draw, title, title_font, title_y, INK, title_track, W)

    tag_y = title_y + title_h + gap_title_tag
    draw_tracked(draw, tag, tag_font, tag_y, GOLD, tag_track, W)

    flat = Image.new("RGB", (W, H), PAPER[:3])
    flat.paste(canvas, mask=canvas.split()[-1])
    flat.save("/workspace/.grok/og-master.png")
    flat.save(OUT, quality=92, subsampling=0)
    print("seal", seal.size, "title_w", round(title_w), "tag_w", round(tag_w))
    print("top", top, "title_y", title_y, "tag_y", tag_y, "block_end", top + block_h)
    print("saved", OUT)


if __name__ == "__main__":
    main()
