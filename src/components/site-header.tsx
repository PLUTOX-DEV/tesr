import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data/programme";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-semibold tracking-wide text-ink">
            AmunChain
          </span>
          <span className="hidden text-xs uppercase tracking-widest text-ink-soft sm:inline">
            Layer 0
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://x.com/AmunChainTech"
            className="hidden h-11 items-center border border-gold/40 px-4 text-sm text-gold transition-colors duration-200 hover:bg-gold hover:text-night sm:inline-flex"
          >
            @AmunChainTech
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-ink/10 bg-paper px-5 py-3 lg:hidden"
          aria-label="Sections"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex h-11 items-center text-base text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://x.com/AmunChainTech"
            className="flex h-11 items-center text-base text-gold"
          >
            @AmunChainTech
          </a>
        </nav>
      ) : null}
    </header>
  );
}
