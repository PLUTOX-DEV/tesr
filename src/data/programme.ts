export type Priority = "Critical" | "High" | "Medium";

export const meta = {
  edition: "Public release",
  date: "16 November 2026",
  scope:
    "Protocol security, operational resilience, Genesis integrity and production readiness",
  purpose:
    "Communicate engineering priorities without exposing sensitive infrastructure details",
  posture: "Production readiness remains under evidence-led review",
} as const;

export const principles = [
  {
    title: "Safety before availability",
    body: "The system must fail safely rather than continue under uncertain consensus or writer ownership.",
  },
  {
    title: "One authoritative writer",
    body: "Recovery and restart procedures must prevent overlapping writer generations.",
  },
  {
    title: "Genesis integrity",
    body: "Initialization must be deterministic, verifiable and consistent with the approved zero-state design.",
  },
  {
    title: "Least privilege",
    body: "Infrastructure, operations, governance and signing responsibilities should be appropriately separated.",
  },
  {
    title: "Evidence over assertion",
    body: "Every critical security claim must be supported by reproducible evidence.",
  },
  {
    title: "Recoverability by design",
    body: "Backups, restoration procedures and incident response must be validated before they are relied upon.",
  },
  {
    title: "Responsible disclosure",
    body: "Public reporting should communicate progress without revealing exploitable infrastructure details.",
  },
] as const;

export const domains = [
  {
    stages: "01–15",
    domain: "Foundational platform review",
    focus:
      "Host and service configuration, process model, filesystem boundaries, permissions and operational baseline.",
  },
  {
    stages: "16–20",
    domain: "Monitoring, incident response and trust",
    focus:
      "Independent monitoring, incident handling, governance permissions, software supply chain and host-compromise resilience.",
  },
  {
    stages: "21–27",
    domain: "Operational resilience",
    focus:
      "Compound failures, resource exhaustion, time integrity, network identity, privacy, compatibility and infrastructure independence.",
  },
  {
    stages: "28–32",
    domain: "Protocol and economic security",
    focus:
      "Consensus safety, state transitions, cryptographic controls, partition recovery and economic attack surfaces.",
  },
  {
    stages: "33–39",
    domain: "Application and platform protection",
    focus:
      "RPC and API security, release integrity, storage consistency, OS hardening, multi-failure validation, common-mode risk and data protection.",
  },
  {
    stages: "40–48",
    domain: "Governance and adversarial assurance",
    focus:
      "Crisis governance, independent audit, finding prioritization, attack-chain analysis, degraded consensus, validator identity, flooding and concurrency.",
  },
  {
    stages: "49–56",
    domain: "Integrity, recovery and release decision",
    focus:
      "Silent corruption, source authenticity, key custody, disaster recovery, production gate, insider threats, integrated validation and final release assessment.",
  },
] as const;

export const workstreams: { priority: Priority; name: string; outcome: string }[] = [
  {
    priority: "Critical",
    name: "Consensus and writer exclusivity",
    outcome:
      "Demonstrate that conflicting writer generations cannot operate concurrently and that consensus safety is preserved under failure.",
  },
  {
    priority: "Critical",
    name: "Validator lifecycle and recovery",
    outcome:
      "Prove safe startup, partial-failure cleanup, process fencing and controlled recovery.",
  },
  {
    priority: "Critical",
    name: "Genesis and handoff integrity",
    outcome:
      "Verify zero-state invariants, predecessor integrity, proof authenticity and required approvals.",
  },
  {
    priority: "Critical",
    name: "Anti-rollback and anti-equivocation",
    outcome:
      "Prevent stale recovery states and conflicting validator signatures from being accepted.",
  },
  {
    priority: "High",
    name: "Key custody and governance",
    outcome:
      "Demonstrate separation of duties, independent approval and controlled key lifecycle.",
  },
  {
    priority: "High",
    name: "Software supply-chain assurance",
    outcome:
      "Bind reviewed source, dependencies, build outputs and deployed release through verifiable provenance.",
  },
  {
    priority: "High",
    name: "Monitoring and incident response",
    outcome: "Detect critical failures independently and preserve trustworthy evidence.",
  },
  {
    priority: "High",
    name: "Backup and disaster recovery",
    outcome:
      "Maintain independent backups and prove restoration in an isolated environment.",
  },
  {
    priority: "Medium",
    name: "Network, resource and API resilience",
    outcome:
      "Apply bounded resource use, authenticated communication and secure public and administrative interfaces.",
  },
  {
    priority: "Medium",
    name: "Privacy and audit integrity",
    outcome: "Protect sensitive data and preserve reliable security-event records.",
  },
];

export const genesis = [
  "Genesis is designed as a zero-state starting point, not as a container for historical transaction blocks.",
  "The approved model retains height zero and an empty block table; the first operational block is expected at height one.",
  "Initialization, predecessor validation, activation evidence and final sealing must be verified as one coherent cryptographic process.",
  "Signing authority should be separated from infrastructure administration and protected by independent approval controls.",
  "Genesis wallet material, private keys and recovery secrets must never be included in public reports or repositories.",
] as const;

export const resilience = [
  "Monitoring should operate independently of the primary production host and detect loss of quorum, conflicting state, writer conflicts, stale finality, resource exhaustion and backup failures.",
  "Backups should be encrypted, access-controlled, independently stored and protected against unauthorized modification.",
  "Restoration must first occur in an isolated environment, with state integrity, release provenance and anti-rollback controls verified before any production reconnection.",
  "Recovery procedures should define measurable Recovery Point Objectives and Recovery Time Objectives.",
  "Incident response should preserve evidence, define decision authority and prevent automatic recovery from worsening an uncertain state.",
] as const;

export const assurance = [
  "Maintain a complete inventory of security-relevant source files, dependencies, build inputs and runtime artifacts.",
  "Use reproducible or independently verifiable builds wherever feasible.",
  "Require independent review of release manifests, cryptographic commitments and deployment parity.",
  "Test upgrade, downgrade and rollback paths without weakening anti-rollback protections.",
  "Engage an independent reviewer to assess critical findings and the evidence package before production approval.",
] as const;

export const decisions = [
  {
    id: "GO",
    meaning: "Approve the release candidate.",
    basis:
      "All critical gates evidenced; residual risks documented and accepted; independent review completed.",
  },
  {
    id: "CONDITIONAL GO",
    meaning: "Approve with bounded, explicitly accepted exceptions.",
    basis:
      "No unresolved critical safety issue. Exceptions have owners, limits and expiry.",
  },
  {
    id: "HOLD",
    meaning: "Pause pending evidence or remediation.",
    basis:
      "Required proof is incomplete or important operational assumptions remain unverified.",
    current: true,
  },
  {
    id: "NO-GO",
    meaning: "Reject the current release candidate.",
    basis:
      "A critical safety condition is violated or cannot be acceptably mitigated.",
  },
] as const;

export const waves = [
  {
    name: "Preserve",
    work: "Confirm a read-only baseline and preserve current state and evidence.",
    evidence: "Approved baseline inventory and evidence manifest.",
  },
  {
    name: "Resolve design gaps",
    work: "Complete design and code review for critical integrity and recovery issues.",
    evidence: "Reviewed implementation plan and complete change set.",
  },
  {
    name: "Isolated validation",
    work: "Run controlled tests for locks, process lifecycle, proof integrity, Genesis invariants and rollback resistance.",
    evidence: "Reproducible test reports with defined pass and fail criteria.",
  },
  {
    name: "Cryptographic approval",
    work: "Finalize release hashes and complete required approval and signing procedures.",
    evidence: "Independently verified signatures and commitments.",
  },
  {
    name: "Operational resilience",
    work: "Validate monitoring, independent backup, restoration and incident response.",
    evidence: "Successful isolated recovery drill and tested alert paths.",
  },
  {
    name: "Independent review",
    work: "Have an independent reviewer validate critical evidence and residual risks.",
    evidence: "Documented review and finding disposition.",
  },
  {
    name: "Release decision",
    work: "Evaluate all gates and authorize or defer the release.",
    evidence: "Formal GO, HOLD or NO-GO decision.",
  },
] as const;

export const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#solidarity", label: "Solidarity" },
  { href: "#principles", label: "Principles" },
  { href: "#programme", label: "Programme" },
  { href: "#workstreams", label: "Work" },
  { href: "#gates", label: "Gates" },
  { href: "#roadmap", label: "Roadmap" },
] as const;

export const pillars = [
  "Food security",
  "Healthcare",
  "Education",
  "Support for families",
  "Humanitarian relief",
] as const;
