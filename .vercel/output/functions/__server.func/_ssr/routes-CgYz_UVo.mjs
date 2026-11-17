import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as House, c as BookOpen, i as Menu, n as Wheat, o as HeartPulse, s as Handshake, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CgYz_UVo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var meta = {
	edition: "Public release",
	date: "16 November 2026",
	scope: "Protocol security, operational resilience, Genesis integrity and production readiness",
	purpose: "Communicate engineering priorities without exposing sensitive infrastructure details",
	posture: "Production readiness remains under evidence-led review"
};
var principles = [
	{
		title: "Safety before availability",
		body: "The system must fail safely rather than continue under uncertain consensus or writer ownership."
	},
	{
		title: "One authoritative writer",
		body: "Recovery and restart procedures must prevent overlapping writer generations."
	},
	{
		title: "Genesis integrity",
		body: "Initialization must be deterministic, verifiable and consistent with the approved zero-state design."
	},
	{
		title: "Least privilege",
		body: "Infrastructure, operations, governance and signing responsibilities should be appropriately separated."
	},
	{
		title: "Evidence over assertion",
		body: "Every critical security claim must be supported by reproducible evidence."
	},
	{
		title: "Recoverability by design",
		body: "Backups, restoration procedures and incident response must be validated before they are relied upon."
	},
	{
		title: "Responsible disclosure",
		body: "Public reporting should communicate progress without revealing exploitable infrastructure details."
	}
];
var domains = [
	{
		stages: "01–15",
		domain: "Foundational platform review",
		focus: "Host and service configuration, process model, filesystem boundaries, permissions and operational baseline."
	},
	{
		stages: "16–20",
		domain: "Monitoring, incident response and trust",
		focus: "Independent monitoring, incident handling, governance permissions, software supply chain and host-compromise resilience."
	},
	{
		stages: "21–27",
		domain: "Operational resilience",
		focus: "Compound failures, resource exhaustion, time integrity, network identity, privacy, compatibility and infrastructure independence."
	},
	{
		stages: "28–32",
		domain: "Protocol and economic security",
		focus: "Consensus safety, state transitions, cryptographic controls, partition recovery and economic attack surfaces."
	},
	{
		stages: "33–39",
		domain: "Application and platform protection",
		focus: "RPC and API security, release integrity, storage consistency, OS hardening, multi-failure validation, common-mode risk and data protection."
	},
	{
		stages: "40–48",
		domain: "Governance and adversarial assurance",
		focus: "Crisis governance, independent audit, finding prioritization, attack-chain analysis, degraded consensus, validator identity, flooding and concurrency."
	},
	{
		stages: "49–56",
		domain: "Integrity, recovery and release decision",
		focus: "Silent corruption, source authenticity, key custody, disaster recovery, production gate, insider threats, integrated validation and final release assessment."
	}
];
var workstreams = [
	{
		priority: "Critical",
		name: "Consensus and writer exclusivity",
		outcome: "Demonstrate that conflicting writer generations cannot operate concurrently and that consensus safety is preserved under failure."
	},
	{
		priority: "Critical",
		name: "Validator lifecycle and recovery",
		outcome: "Prove safe startup, partial-failure cleanup, process fencing and controlled recovery."
	},
	{
		priority: "Critical",
		name: "Genesis and handoff integrity",
		outcome: "Verify zero-state invariants, predecessor integrity, proof authenticity and required approvals."
	},
	{
		priority: "Critical",
		name: "Anti-rollback and anti-equivocation",
		outcome: "Prevent stale recovery states and conflicting validator signatures from being accepted."
	},
	{
		priority: "High",
		name: "Key custody and governance",
		outcome: "Demonstrate separation of duties, independent approval and controlled key lifecycle."
	},
	{
		priority: "High",
		name: "Software supply-chain assurance",
		outcome: "Bind reviewed source, dependencies, build outputs and deployed release through verifiable provenance."
	},
	{
		priority: "High",
		name: "Monitoring and incident response",
		outcome: "Detect critical failures independently and preserve trustworthy evidence."
	},
	{
		priority: "High",
		name: "Backup and disaster recovery",
		outcome: "Maintain independent backups and prove restoration in an isolated environment."
	},
	{
		priority: "Medium",
		name: "Network, resource and API resilience",
		outcome: "Apply bounded resource use, authenticated communication and secure public and administrative interfaces."
	},
	{
		priority: "Medium",
		name: "Privacy and audit integrity",
		outcome: "Protect sensitive data and preserve reliable security-event records."
	}
];
var genesis = [
	"Genesis is designed as a zero-state starting point, not as a container for historical transaction blocks.",
	"The approved model retains height zero and an empty block table; the first operational block is expected at height one.",
	"Initialization, predecessor validation, activation evidence and final sealing must be verified as one coherent cryptographic process.",
	"Signing authority should be separated from infrastructure administration and protected by independent approval controls.",
	"Genesis wallet material, private keys and recovery secrets must never be included in public reports or repositories."
];
var resilience = [
	"Monitoring should operate independently of the primary production host and detect loss of quorum, conflicting state, writer conflicts, stale finality, resource exhaustion and backup failures.",
	"Backups should be encrypted, access-controlled, independently stored and protected against unauthorized modification.",
	"Restoration must first occur in an isolated environment, with state integrity, release provenance and anti-rollback controls verified before any production reconnection.",
	"Recovery procedures should define measurable Recovery Point Objectives and Recovery Time Objectives.",
	"Incident response should preserve evidence, define decision authority and prevent automatic recovery from worsening an uncertain state."
];
var assurance = [
	"Maintain a complete inventory of security-relevant source files, dependencies, build inputs and runtime artifacts.",
	"Use reproducible or independently verifiable builds wherever feasible.",
	"Require independent review of release manifests, cryptographic commitments and deployment parity.",
	"Test upgrade, downgrade and rollback paths without weakening anti-rollback protections.",
	"Engage an independent reviewer to assess critical findings and the evidence package before production approval."
];
var decisions = [
	{
		id: "GO",
		meaning: "Approve the release candidate.",
		basis: "All critical gates evidenced; residual risks documented and accepted; independent review completed."
	},
	{
		id: "CONDITIONAL GO",
		meaning: "Approve with bounded, explicitly accepted exceptions.",
		basis: "No unresolved critical safety issue. Exceptions have owners, limits and expiry."
	},
	{
		id: "HOLD",
		meaning: "Pause pending evidence or remediation.",
		basis: "Required proof is incomplete or important operational assumptions remain unverified.",
		current: true
	},
	{
		id: "NO-GO",
		meaning: "Reject the current release candidate.",
		basis: "A critical safety condition is violated or cannot be acceptably mitigated."
	}
];
var waves = [
	{
		name: "Preserve",
		work: "Confirm a read-only baseline and preserve current state and evidence.",
		evidence: "Approved baseline inventory and evidence manifest."
	},
	{
		name: "Resolve design gaps",
		work: "Complete design and code review for critical integrity and recovery issues.",
		evidence: "Reviewed implementation plan and complete change set."
	},
	{
		name: "Isolated validation",
		work: "Run controlled tests for locks, process lifecycle, proof integrity, Genesis invariants and rollback resistance.",
		evidence: "Reproducible test reports with defined pass and fail criteria."
	},
	{
		name: "Cryptographic approval",
		work: "Finalize release hashes and complete required approval and signing procedures.",
		evidence: "Independently verified signatures and commitments."
	},
	{
		name: "Operational resilience",
		work: "Validate monitoring, independent backup, restoration and incident response.",
		evidence: "Successful isolated recovery drill and tested alert paths."
	},
	{
		name: "Independent review",
		work: "Have an independent reviewer validate critical evidence and residual risks.",
		evidence: "Documented review and finding disposition."
	},
	{
		name: "Release decision",
		work: "Evaluate all gates and authorize or defer the release.",
		evidence: "Formal GO, HOLD or NO-GO decision."
	}
];
var nav = [
	{
		href: "#overview",
		label: "Overview"
	},
	{
		href: "#solidarity",
		label: "Solidarity"
	},
	{
		href: "#principles",
		label: "Principles"
	},
	{
		href: "#programme",
		label: "Programme"
	},
	{
		href: "#workstreams",
		label: "Work"
	},
	{
		href: "#gates",
		label: "Gates"
	},
	{
		href: "#roadmap",
		label: "Roadmap"
	}
];
var pillars = [
	"Food security",
	"Healthcare",
	"Education",
	"Support for families",
	"Humanitarian relief"
];
var amun_mark_default = "/assets/amun-mark-veIh1z_9.jpg";
var solidarity_default = "/assets/solidarity-C4MSOiLn.jpg";
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-gold/30 bg-paper/95 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-2xl font-semibold tracking-wide text-ink",
						children: "AmunChain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden text-xs uppercase tracking-widest text-ink-soft sm:inline",
						children: "Layer 0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Sections",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "px-3 py-2 text-sm text-ink-soft transition-colors duration-200 hover:text-ink",
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://x.com/AmunChainTech",
						className: "hidden h-11 items-center border border-gold/40 px-4 text-sm text-gold transition-colors duration-200 hover:bg-gold hover:text-night sm:inline-flex",
						children: "@AmunChainTech"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold lg:hidden",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			id: "mobile-nav",
			className: "border-t border-ink/10 bg-paper px-5 py-3 lg:hidden",
			"aria-label": "Sections",
			children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				className: "flex h-11 items-center text-base text-ink",
				onClick: () => setOpen(false),
				children: item.label
			}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://x.com/AmunChainTech",
				className: "flex h-11 items-center text-base text-gold",
				children: "@AmunChainTech"
			})]
		}) : null]
	});
}
var priorities = [
	"All",
	"Critical",
	"High",
	"Medium"
];
var pillarIcons = [
	Wheat,
	HeartPulse,
	BookOpen,
	House,
	Handshake
];
function SectionLabel({ index, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-8 max-w-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-widest text-gold",
			children: index
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 font-serif text-4xl font-medium leading-none text-ink md:text-5xl",
			children: title
		})]
	});
}
function HomePage() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [priority, setPriority] = (0, import_react.useState)("All");
	const [gate, setGate] = (0, import_react.useState)("HOLD");
	const [wave, setWave] = (0, import_react.useState)(0);
	const filteredDomains = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLowerCase();
		if (!needle) return domains;
		return domains.filter((item) => `${item.stages} ${item.domain} ${item.focus}`.toLowerCase().includes(needle));
	}, [query]);
	const filteredWork = workstreams.filter((item) => priority === "All" || item.priority === priority);
	const activeGate = decisions.find((item) => item.id === gate) ?? decisions[2];
	const activeWave = waves[wave];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-seal focus:px-4 focus:py-2 focus:text-ink",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-gold/25 bg-seal text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-5 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium uppercase tracking-widest text-gold",
						children: "Hold"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink/80",
						children: "Working posture while critical evidence is completed. This page is a public roadmap, not a certification."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-medium uppercase tracking-widest text-gold",
									children: ["Public engineering overview · ", meta.date]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 font-serif text-5xl font-medium leading-none text-ink md:text-7xl",
									children: "Security & operational readiness."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-lg text-ink-soft",
									children: "AmunChain is a constitutional Layer 0. This edition summarises the security review themes and the forward action plan — without sensitive infrastructure detail."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col gap-3 sm:flex-row",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#solidarity",
											className: "inline-flex h-12 items-center justify-center bg-gold px-5 text-sm font-medium text-night transition-colors duration-200 hover:bg-ink hover:text-night",
											children: "Solidarity fund"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#programme",
											className: "inline-flex h-12 items-center justify-center border border-gold/50 px-5 text-sm text-gold transition-colors duration-200 hover:bg-gold hover:text-night",
											children: "Read the programme"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/docs/amunchain-security-roadmap.pdf",
											className: "inline-flex h-12 items-center justify-center border border-gold/40 px-5 text-sm text-ink transition-colors duration-200 hover:border-gold",
											children: "Download the public PDF"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "md:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "border border-gold/30 bg-seal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: amun_mark_default,
									alt: "AmunChain seal: a gold falcon set inside a triangular mark",
									className: "aspect-square w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "flex items-end justify-between gap-4 border-t border-gold/25 px-5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-widest text-gold",
										children: "Current posture"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-4xl leading-none text-ink",
										children: "HOLD"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-40 text-right text-xs text-ink/70",
										children: "Functional tests are not, by themselves, proof of production resilience."
									})]
								})]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "solidarity",
						className: "scroll-mt-20 border-b border-gold/25",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: "border border-gold/30 md:col-span-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: solidarity_default,
									alt: "AmunChain Social Solidarity Fund: a gold mark above a night city, with support offered to a family",
									className: "w-full"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium uppercase tracking-widest text-gold",
										children: "Social Solidarity Fund"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-serif text-7xl leading-none text-gold",
										children: "25%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 font-serif text-4xl font-medium leading-none text-ink md:text-5xl",
										children: "Technology should serve humanity."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-ink-soft",
										children: "AmunChain believes technology should serve humanity. We propose dedicating 25% of distributable net profits to supporting the poor and the vulnerable through the AmunChain Social Solidarity Fund."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-serif text-2xl text-gold",
										children: "Building more than blockchain. Building a future with purpose."
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mx-auto grid max-w-6xl grid-cols-2 gap-px border-t border-gold/25 bg-gold/25 md:grid-cols-5",
							children: pillars.map((name, index) => {
								const Icon = pillarIcons[index];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "bg-paper px-4 py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "text-gold",
										size: 22,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-ink",
										children: name
									})]
								}, name);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "overview",
						className: "scroll-mt-20 border-y border-ink/10 bg-paper-2/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl gap-px bg-ink/10 px-0 md:grid-cols-4",
							children: [
								["Edition", meta.edition],
								["Date", meta.date],
								["Scope", meta.scope],
								["Purpose", meta.purpose]
							].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-paper px-5 py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-gold",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-ink",
									children: value
								})]
							}, label))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "01 — Executive overview",
								title: "Evidence before a readiness claim."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 md:grid-cols-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ink-soft md:col-span-7",
									children: "The programme focuses on consensus integrity, validator operations, Genesis initialization, software releases, key governance, monitoring and disaster recovery. Fifty-six work stages are consolidated into a practical roadmap. Previously reported functional-test results are kept distinct from source-level review, operational observation and validation that is still outstanding."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-4 border-l border-gold/50 pl-5 text-sm md:col-span-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium text-ink",
											children: "Constitutional Layer 0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-ink-soft",
											children: "Security, governance and verifiable operation before ecosystem expansion."
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium text-ink",
											children: "Named public work"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-ink-soft",
											children: "Genesis, FORGE and ERP."
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-medium text-ink",
											children: "C404"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-ink-soft",
											children: "The community token is in a strategic freeze while the long-term foundation is built. This site is not an investment solicitation."
										})] })
									]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "principles",
						className: "scroll-mt-20 mx-auto max-w-6xl px-5 py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "02 — Engineering principles",
							title: "How decisions are constrained."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-2",
							children: principles.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "bg-paper p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-3xl leading-none text-gold",
										children: String(index + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-serif text-2xl font-medium text-ink",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-ink-soft",
										children: item.body
									})
								]
							}, item.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "programme",
						className: "scroll-mt-20 border-y border-ink/10 bg-seal text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium uppercase tracking-widest text-gold",
									children: "03 — Consolidated review coverage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "max-w-xl font-serif text-4xl font-medium leading-none text-ink md:text-5xl",
										children: "Fifty-six stages. Coverage, not a pass list."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block w-full md:max-w-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Filter domains"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: query,
											onChange: (event) => setQuery(event.target.value),
											placeholder: "Filter domains",
											className: "h-12 w-full border border-ink/20 bg-seal-2 px-4 text-sm text-ink placeholder:text-ink/40"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-2xl text-sm text-ink/70",
									children: "The list describes review coverage and planned assurance. It does not imply that every item has passed independent testing."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-10 divide-y divide-ink/10 border-y border-ink/10",
									children: [filteredDomains.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif text-3xl text-gold md:col-span-2",
												children: item.stages
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-medium text-ink md:col-span-4",
												children: item.domain
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-ink/70 md:col-span-6",
												children: item.focus
											})
										]
									}, item.stages)), filteredDomains.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "py-8 text-sm text-ink/70",
										children: "No domain matches that filter."
									}) : null]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "workstreams",
						className: "scroll-mt-20 mx-auto max-w-6xl px-5 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "04 — Priority workstreams",
								title: "What must be shown, not asserted."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 flex flex-wrap gap-2",
								role: "group",
								"aria-label": "Filter by priority",
								children: priorities.map((item) => {
									const selected = priority === item;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": selected,
										onClick: () => setPriority(item),
										className: selected ? "h-11 border border-gold bg-gold px-4 text-sm font-medium text-night" : "h-11 border border-ink/15 px-4 text-sm text-ink hover:border-gold",
										children: item
									}, item);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "divide-y divide-ink/10 border-y border-ink/10",
								children: filteredWork.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid gap-2 py-5 md:grid-cols-12 md:gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium uppercase tracking-widest text-gold md:col-span-2",
											children: item.priority
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-medium text-ink md:col-span-4",
											children: item.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-ink-soft md:col-span-6",
											children: item.outcome
										})
									]
								}, item.name))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-ink/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "border-b border-ink/10 px-5 py-12 md:border-b-0 md:border-r",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium uppercase tracking-widest text-gold",
											children: "05 — Genesis"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 font-serif text-3xl font-medium text-ink",
											children: "Zero-state, then height one."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 space-y-4 text-sm text-ink-soft",
											children: genesis.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "border-t border-ink/10 pt-4",
												children: item
											}, item))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "border-b border-ink/10 px-5 py-12 md:border-b-0 md:border-r",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium uppercase tracking-widest text-gold",
											children: "Resilience"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 font-serif text-3xl font-medium text-ink",
											children: "Recover only after proof."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 space-y-4 text-sm text-ink-soft",
											children: resilience.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "border-t border-ink/10 pt-4",
												children: item
											}, item))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "px-5 py-12",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium uppercase tracking-widest text-gold",
											children: "Release assurance"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 font-serif text-3xl font-medium text-ink",
											children: "Provenance before approval."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 space-y-4 text-sm text-ink-soft",
											children: assurance.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "border-t border-ink/10 pt-4",
												children: item
											}, item))
										})
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "gates",
						className: "scroll-mt-20 mx-auto max-w-6xl px-5 py-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "06 — Release readiness",
								title: "Four decisions. One working posture."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-8 max-w-2xl text-ink-soft",
								children: "HOLD is a release-control decision. It should not be read as a statement that previously reported functional testing failed."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 md:grid-cols-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-2 md:col-span-5",
									role: "listbox",
									"aria-label": "Release decisions",
									children: decisions.map((item) => {
										const selected = item.id === gate;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											role: "option",
											"aria-selected": selected,
											onClick: () => setGate(item.id),
											className: selected ? "flex h-14 items-center justify-between border border-gold bg-gold px-4 text-left font-medium text-night" : "flex h-14 items-center justify-between border border-ink/15 px-4 text-left text-ink hover:border-gold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: item.id
											}), "current" in item && item.current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: selected ? "text-xs uppercase tracking-widest text-night/70" : "text-xs uppercase tracking-widest text-gold",
												children: "Current"
											}) : null]
										}, item.id);
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "border border-ink/10 bg-paper-2/50 p-6 md:col-span-7 md:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs uppercase tracking-widest text-gold",
											children: "Meaning"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-4xl font-medium text-ink",
											children: activeGate.id
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-ink",
											children: activeGate.meaning
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 text-xs uppercase tracking-widest text-gold",
											children: "Minimum basis"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-ink-soft",
											children: activeGate.basis
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "roadmap",
						className: "scroll-mt-20 border-t border-ink/10 bg-paper-2/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "07 — Execution sequence",
								title: "Seven waves to a decision."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 md:grid-cols-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "md:col-span-5",
									children: waves.map((item, index) => {
										const selected = index === wave;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setWave(index),
											"aria-current": selected ? "step" : void 0,
											className: selected ? "flex w-full items-baseline gap-4 border-l-2 border-gold py-3 pl-4 text-left" : "flex w-full items-baseline gap-4 border-l border-ink/15 py-3 pl-4 text-left text-ink-soft hover:text-ink",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-serif text-2xl text-gold",
												children: String(index + 1).padStart(2, "0")
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: selected ? "font-medium text-ink" : "",
												children: item.name
											})]
										}) }, item.name);
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "border border-ink/10 bg-paper p-6 md:col-span-7 md:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs uppercase tracking-widest text-gold",
											children: ["Wave ", String(wave + 1).padStart(2, "0")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-4xl font-medium text-ink",
											children: activeWave.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-ink",
											children: activeWave.work
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-8 text-xs uppercase tracking-widest text-gold",
											children: "Exit evidence"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-ink-soft",
											children: activeWave.evidence
										})
									]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "notice",
						className: "scroll-mt-20 mx-auto max-w-6xl px-5 py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "08 — Disclosure",
							title: "Say what is known. Withhold what can be exploited."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 text-sm text-ink-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Public updates should focus on engineering objectives, validation methodology, governance principles and verified milestones. Sensitive implementation details, infrastructure identifiers, access paths, cryptographic secrets and unremediated exploit-enabling information stay with authorized reviewers." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Statements about completed tests should be supported by dated evidence and the artifact version. Security status may change as remediation and independent validation progress." })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "border border-ink/15 p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl text-ink",
										children: "Important notice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-ink-soft",
										children: "This is a roadmap and a summary of review coverage. It is not a formal security certification, penetration-test report, protocol proof, financial or investment recommendation, or a guarantee of uninterrupted operation."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://x.com/AmunChainTech",
										className: "mt-6 inline-flex h-12 items-center text-sm text-gold underline decoration-gold/40 underline-offset-4",
										children: "Follow the public record on X"
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-gold/25 bg-seal text-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl",
						children: "AmunChain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-sm text-ink/70",
						children: "Building with security, verifiability and responsible transparency."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs uppercase tracking-widest text-ink/50",
						children: ["Public edition · ", meta.date]
					})]
				})
			})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
