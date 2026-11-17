import { useMemo, useState } from "react";
import { BookOpen, Handshake, HeartPulse, House, Wheat } from "lucide-react";
import {
  assurance,
  decisions,
  domains,
  genesis,
  meta,
  pillars,
  principles,
  resilience,
  waves,
  workstreams,
  type Priority,
} from "@/data/programme";
import mark from "@/assets/amun-mark.jpg";
import solidarity from "@/assets/solidarity.jpg";
import { SiteHeader } from "@/components/site-header";

const priorities: Array<"All" | Priority> = ["All", "Critical", "High", "Medium"];

const pillarIcons = [Wheat, HeartPulse, BookOpen, House, Handshake] as const;

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs font-medium uppercase tracking-widest text-gold">{index}</p>
      <h2 className="mt-2 font-serif text-4xl font-medium leading-none text-ink md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export function HomePage() {
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState<(typeof priorities)[number]>("All");
  const [gate, setGate] = useState<(typeof decisions)[number]["id"]>("HOLD");
  const [wave, setWave] = useState(0);

  const filteredDomains = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return domains;
    return domains.filter((item) =>
      `${item.stages} ${item.domain} ${item.focus}`.toLowerCase().includes(needle),
    );
  }, [query]);

  const filteredWork = workstreams.filter(
    (item) => priority === "All" || item.priority === priority,
  );
  const activeGate = decisions.find((item) => item.id === gate) ?? decisions[2];
  const activeWave = waves[wave];

  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-seal focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />

      <div className="border-b border-gold/25 bg-seal text-ink">
        <p className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-5 py-3 text-sm">
          <span className="font-medium uppercase tracking-widest text-gold">Hold</span>
          <span className="text-ink/80">
            Working posture while critical evidence is completed. This page is a public
            roadmap, not a certification.
          </span>
        </p>
      </div>

      <main id="main">
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              Public engineering overview · {meta.date}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-medium leading-none text-ink md:text-7xl">
              Security & operational readiness.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              AmunChain is a constitutional Layer 0. This edition summarises the security
              review themes and the forward action plan — without sensitive infrastructure
              detail.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#solidarity"
                className="inline-flex h-12 items-center justify-center bg-gold px-5 text-sm font-medium text-night transition-colors duration-200 hover:bg-ink hover:text-night"
              >
                Solidarity fund
              </a>
              <a
                href="#programme"
                className="inline-flex h-12 items-center justify-center border border-gold/50 px-5 text-sm text-gold transition-colors duration-200 hover:bg-gold hover:text-night"
              >
                Read the programme
              </a>
              <a
                href="/docs/amunchain-security-roadmap.pdf"
                className="inline-flex h-12 items-center justify-center border border-gold/40 px-5 text-sm text-ink transition-colors duration-200 hover:border-gold"
              >
                Download the public PDF
              </a>
            </div>
          </div>

          <aside className="md:col-span-5">
            <figure className="border border-gold/30 bg-seal">
              <img
                src={mark}
                alt="AmunChain seal: a gold falcon set inside a triangular mark"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="flex items-end justify-between gap-4 border-t border-gold/25 px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold">Current posture</p>
                  <p className="font-serif text-4xl leading-none text-ink">HOLD</p>
                </div>
                <p className="max-w-40 text-right text-xs text-ink/70">
                  Functional tests are not, by themselves, proof of production resilience.
                </p>
              </figcaption>
            </figure>
          </aside>
        </section>

        <section id="solidarity" className="scroll-mt-20 border-b border-gold/25">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:py-20">
            <figure className="border border-gold/30 md:col-span-6">
              <img
                src={solidarity}
                alt="AmunChain Social Solidarity Fund: a gold mark above a night city, with support offered to a family"
                className="w-full"
              />
            </figure>
            <div className="md:col-span-6">
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                Social Solidarity Fund
              </p>
              <p className="mt-3 font-serif text-7xl leading-none text-gold">25%</p>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-none text-ink md:text-5xl">
                Technology should serve humanity.
              </h2>
              <p className="mt-5 text-ink-soft">
                AmunChain believes technology should serve humanity. We propose dedicating 25%
                of distributable net profits to supporting the poor and the vulnerable through
                the AmunChain Social Solidarity Fund.
              </p>
              <p className="mt-4 font-serif text-2xl text-gold">
                Building more than blockchain. Building a future with purpose.
              </p>
            </div>
          </div>
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px border-t border-gold/25 bg-gold/25 md:grid-cols-5">
            {pillars.map((name, index) => {
              const Icon = pillarIcons[index];
              return (
                <li key={name} className="bg-paper px-4 py-5">
                  <Icon className="text-gold" size={22} aria-hidden="true" />
                  <p className="mt-3 text-sm text-ink">{name}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          id="overview"
          className="scroll-mt-20 border-y border-ink/10 bg-paper-2/60"
        >
          <div className="mx-auto grid max-w-6xl gap-px bg-ink/10 px-0 md:grid-cols-4">
            {[
              ["Edition", meta.edition],
              ["Date", meta.date],
              ["Scope", meta.scope],
              ["Purpose", meta.purpose],
            ].map(([label, value]) => (
              <div key={label} className="bg-paper px-5 py-6">
                <p className="text-xs uppercase tracking-widest text-gold">{label}</p>
                <p className="mt-2 text-sm text-ink">{value}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-6xl px-5 py-10">
            <SectionLabel index="01 — Executive overview" title="Evidence before a readiness claim." />
            <div className="grid gap-8 md:grid-cols-12">
              <p className="text-ink-soft md:col-span-7">
                The programme focuses on consensus integrity, validator operations, Genesis
                initialization, software releases, key governance, monitoring and disaster
                recovery. Fifty-six work stages are consolidated into a practical roadmap.
                Previously reported functional-test results are kept distinct from source-level
                review, operational observation and validation that is still outstanding.
              </p>
              <ul className="space-y-4 border-l border-gold/50 pl-5 text-sm md:col-span-5">
                <li>
                  <span className="block font-medium text-ink">Constitutional Layer 0</span>
                  <span className="text-ink-soft">
                    Security, governance and verifiable operation before ecosystem expansion.
                  </span>
                </li>
                <li>
                  <span className="block font-medium text-ink">Named public work</span>
                  <span className="text-ink-soft">Genesis, FORGE and ERP.</span>
                </li>
                <li>
                  <span className="block font-medium text-ink">C404</span>
                  <span className="text-ink-soft">
                    The community token is in a strategic freeze while the long-term foundation
                    is built. This site is not an investment solicitation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="principles" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-16">
          <SectionLabel index="02 — Engineering principles" title="How decisions are constrained." />
          <ol className="grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
            {principles.map((item, index) => (
              <li key={item.title} className="bg-paper p-6">
                <p className="font-serif text-3xl leading-none text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="programme" className="scroll-mt-20 border-y border-ink/10 bg-seal text-ink">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-xs font-medium uppercase tracking-widest text-gold">
              03 — Consolidated review coverage
            </p>
            <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="max-w-xl font-serif text-4xl font-medium leading-none text-ink md:text-5xl">
                Fifty-six stages. Coverage, not a pass list.
              </h2>
              <label className="block w-full md:max-w-xs">
                <span className="sr-only">Filter domains</span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Filter domains"
                  className="h-12 w-full border border-ink/20 bg-seal-2 px-4 text-sm text-ink placeholder:text-ink/40"
                />
              </label>
            </div>
            <p className="mt-4 max-w-2xl text-sm text-ink/70">
              The list describes review coverage and planned assurance. It does not imply that
              every item has passed independent testing.
            </p>
            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {filteredDomains.map((item) => (
                <li
                  key={item.stages}
                  className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
                >
                  <p className="font-serif text-3xl text-gold md:col-span-2">{item.stages}</p>
                  <h3 className="font-medium text-ink md:col-span-4">{item.domain}</h3>
                  <p className="text-sm text-ink/70 md:col-span-6">{item.focus}</p>
                </li>
              ))}
              {filteredDomains.length === 0 ? (
                <li className="py-8 text-sm text-ink/70">No domain matches that filter.</li>
              ) : null}
            </ul>
          </div>
        </section>

        <section id="workstreams" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-16">
          <SectionLabel index="04 — Priority workstreams" title="What must be shown, not asserted." />
          <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter by priority">
            {priorities.map((item) => {
              const selected = priority === item;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setPriority(item)}
                  className={
                    selected
                      ? "h-11 border border-gold bg-gold px-4 text-sm font-medium text-night"
                      : "h-11 border border-ink/15 px-4 text-sm text-ink hover:border-gold"
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {filteredWork.map((item) => (
              <li key={item.name} className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
                <p className="text-xs font-medium uppercase tracking-widest text-gold md:col-span-2">
                  {item.priority}
                </p>
                <h3 className="font-medium text-ink md:col-span-4">{item.name}</h3>
                <p className="text-sm text-ink-soft md:col-span-6">{item.outcome}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-ink/10">
          <div className="mx-auto grid max-w-6xl md:grid-cols-3">
            <article className="border-b border-ink/10 px-5 py-12 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                05 — Genesis
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-ink">
                Zero-state, then height one.
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-ink-soft">
                {genesis.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="border-b border-ink/10 px-5 py-12 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                Resilience
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-ink">
                Recover only after proof.
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-ink-soft">
                {resilience.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="px-5 py-12">
              <p className="text-xs font-medium uppercase tracking-widest text-gold">
                Release assurance
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-ink">
                Provenance before approval.
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-ink-soft">
                {assurance.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="gates" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-16">
          <SectionLabel index="06 — Release readiness" title="Four decisions. One working posture." />
          <p className="mb-8 max-w-2xl text-ink-soft">
            HOLD is a release-control decision. It should not be read as a statement that
            previously reported functional testing failed.
          </p>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="grid gap-2 md:col-span-5" role="listbox" aria-label="Release decisions">
              {decisions.map((item) => {
                const selected = item.id === gate;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => setGate(item.id)}
                    className={
                      selected
                        ? "flex h-14 items-center justify-between border border-gold bg-gold px-4 text-left font-medium text-night"
                        : "flex h-14 items-center justify-between border border-ink/15 px-4 text-left text-ink hover:border-gold"
                    }
                  >
                    <span className="font-medium">{item.id}</span>
                    {"current" in item && item.current ? (
                      <span
                        className={
                          selected
                            ? "text-xs uppercase tracking-widest text-night/70"
                            : "text-xs uppercase tracking-widest text-gold"
                        }
                      >
                        Current
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
            <article className="border border-ink/10 bg-paper-2/50 p-6 md:col-span-7 md:p-8">
              <p className="text-xs uppercase tracking-widest text-gold">Meaning</p>
              <h3 className="mt-2 font-serif text-4xl font-medium text-ink">{activeGate.id}</h3>
              <p className="mt-4 text-ink">{activeGate.meaning}</p>
              <p className="mt-6 text-xs uppercase tracking-widest text-gold">Minimum basis</p>
              <p className="mt-2 text-sm text-ink-soft">{activeGate.basis}</p>
            </article>
          </div>
        </section>

        <section id="roadmap" className="scroll-mt-20 border-t border-ink/10 bg-paper-2/40">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <SectionLabel index="07 — Execution sequence" title="Seven waves to a decision." />
            <div className="grid gap-8 md:grid-cols-12">
              <ol className="md:col-span-5">
                {waves.map((item, index) => {
                  const selected = index === wave;
                  return (
                    <li key={item.name}>
                      <button
                        type="button"
                        onClick={() => setWave(index)}
                        aria-current={selected ? "step" : undefined}
                        className={
                          selected
                            ? "flex w-full items-baseline gap-4 border-l-2 border-gold py-3 pl-4 text-left"
                            : "flex w-full items-baseline gap-4 border-l border-ink/15 py-3 pl-4 text-left text-ink-soft hover:text-ink"
                        }
                      >
                        <span className="font-serif text-2xl text-gold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={selected ? "font-medium text-ink" : ""}>{item.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
              <article className="border border-ink/10 bg-paper p-6 md:col-span-7 md:p-8">
                <p className="text-xs uppercase tracking-widest text-gold">
                  Wave {String(wave + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-4xl font-medium text-ink">{activeWave.name}</h3>
                <p className="mt-4 text-ink">{activeWave.work}</p>
                <p className="mt-8 text-xs uppercase tracking-widest text-gold">Exit evidence</p>
                <p className="mt-2 text-sm text-ink-soft">{activeWave.evidence}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="notice" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-16">
          <SectionLabel index="08 — Disclosure" title="Say what is known. Withhold what can be exploited." />
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-sm text-ink-soft">
              <p>
                Public updates should focus on engineering objectives, validation methodology,
                governance principles and verified milestones. Sensitive implementation details,
                infrastructure identifiers, access paths, cryptographic secrets and unremediated
                exploit-enabling information stay with authorized reviewers.
              </p>
              <p>
                Statements about completed tests should be supported by dated evidence and the
                artifact version. Security status may change as remediation and independent
                validation progress.
              </p>
            </div>
            <aside className="border border-ink/15 p-6">
              <h3 className="font-serif text-2xl text-ink">Important notice</h3>
              <p className="mt-3 text-sm text-ink-soft">
                This is a roadmap and a summary of review coverage. It is not a formal security
                certification, penetration-test report, protocol proof, financial or investment
                recommendation, or a guarantee of uninterrupted operation.
              </p>
              <a
                href="https://x.com/AmunChainTech"
                className="mt-6 inline-flex h-12 items-center text-sm text-gold underline decoration-gold/40 underline-offset-4"
              >
                Follow the public record on X
              </a>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/25 bg-seal text-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-3xl">AmunChain</p>
            <p className="mt-2 max-w-md text-sm text-ink/70">
              Building with security, verifiability and responsible transparency.
            </p>
          </div>
          <p className="text-xs uppercase tracking-widest text-ink/50">
            Public edition · {meta.date}
          </p>
        </div>
      </footer>
    </div>
  );
}
