---
icon: scale-balanced
---

# Community Cases

Questfall uses level-weighted consensus whenever a decision depends on human trust or policy judgment. The team may inspect and respond to emergencies through PocketBase Admin, but an unresolved community report does not automatically quarantine an account, Space, quest, or submission.

## What can be moderated

Community cases cover trusted-domain proposals and reports about domains, quests, completion submissions, public profiles, and Author Spaces. Every report includes a policy category and a specific explanation between 12 and 2,000 characters.

The category sets are deliberately narrow:

* Domain security: phishing, wallet drainer, malware, scam, impersonation, or another security threat.
* Quest policy: scam or phishing, illegal or harmful activity, harassment or hate, sexual content, privacy or doxxing, impersonation, spam, or another policy violation.
* Completion abuse: identity mismatch, fabricated evidence, source manipulation, a dangerous link, harassment or hate, sexual or illegal content, privacy or doxxing, or another abuse.
* Profile and Space identity: impersonation, scam or phishing, harassment or hate, sexual or illegal content, privacy or doxxing, spam, or another policy violation.

The first report for one object revision and category opens a case and costs 1 Stamina. A later matching report becomes hidden support for that case and also costs 1 Stamina. Supporters, their explanations, and the amount of support are never shown to voters. Support only advances queue priority by one hour per supporter, up to 24 hours.

## Evidence and private voting

The case keeps an immutable snapshot of the exact target revision, the applicable policy version, category, explanation, and a snapshot hash. Questfall-hosted media is copied into protected evidence storage. External evidence records its URL, host, and capture time; Questfall does not claim that an external resource has been archived.

Assignments reveal the evidence and the question appropriate to that case type. They do not reveal current vote totals, participants, reporters, supporters, previous votes, or other social signals. A completion abuse report may only be filed by a moderator currently assigned to review that completion.

Each assignment captures the moderator's level, square-root trust weight, and the current global market quote. The quote contains exact reward, penalty, Bypass, and Witness amounts and expires after ten minutes; market repricing never changes it in place. A case resolves only after both independent minimums are met: participant count and summed trust. The result is the weighted trust majority; an exact tie is decided by the majority among the highest captured level, and remains open if that tier is also tied. All rewards, penalties, stakes, and reversals are written to an append-only Silver ledger with idempotent settlement keys.

## Appeals

Each report chain can have two appeal levels:

1. **Appeal I** costs 1,000 Silver and requires at least four participants contributing at least 18 trust in total.
2. **Final Appeal** costs 10,000 Silver and requires at least seven participants contributing at least 54 trust in total.

An appeal must be opened within seven days of the preceding decision. It remains queued until the eligible active pool can supply both its fixed participant and trust requirements, and every voter from earlier decisions in that chain is excluded. The current verdict stays in effect while the case is assembling and voting. Neither queued nor open cases receive weaker requirements over time.

The appeal committee sees only the original snapshot, original reason, and policy rules. It does not see the previous verdict, the appellant's argument, support, or earlier votes. A winning appellant receives the stake back plus an equal system bonus. A losing stake is burned. After every appeal result, the target state, reporter result, voter outcomes, and financial effects are reconciled immediately to the new canonical verdict without duplicate payouts.

The owner or an existing manager may appeal a confirmed report about a quest or Space. A confirmed profile report may be appealed by that profile owner. The original reporter may appeal a rejected report. Any verified user may sponsor a domain appeal.

## Re-review after a change

Editing the target is not an appeal. A restricted profile or Space may request one active re-review only after its public moderation revision changes. The stake is 1,000 Silver. A successful re-review returns the stake and restores the public identity, but does not erase the original strike or reverse the economics of the earlier decision.

Any verified user may request a re-review of a blocked domain. Only one domain review may be active; after rejection, another attempt must wait 30 days. Re-review uses the new snapshot and the Initial consensus profile while excluding the original decision participants.

## Public identity restrictions

Profiles and Author Spaces have public `active` and `restricted` states. A restricted profile is presented to other users as **Questfall user** with standard imagery and a short system status. A restricted Space is presented as **Restricted Space** in the same way.

The owner and administrators can still see the original identity, reason, strikes, and re-review action. Accounts, Spaces, and related quests remain operational: moderation hides only the violating public identity. A confirmed profile or Space violation creates a strike but never triggers an automatic account ban.

## Domain trust

The effective domain states are `unknown`, `pending`, `safe`, `suspicious`, and `blocked`. Hostnames are normalized for case and trailing dots. Only ASCII hostnames are accepted; internationalized domains must use their explicit `xn--…` form. Single-label suffixes and the composite public suffixes maintained by Questfall, such as `com` and `co.uk`, cannot be registered as trust rules.

The initial `team-v1` catalog contains conservative rules approved by the Questfall team before community voting starts:

* Questfall: `questfall.xyz`.
* Social and publishing: `youtube.com`, `youtu.be`, `x.com`, `twitter.com`, `instagram.com`, `facebook.com`, `threads.net`, `tiktok.com`, `linkedin.com`, `reddit.com`, `bsky.app`, `medium.com`, and `substack.com`.
* Community and creator platforms: `github.com`, `discord.com`, `discord.gg`, `telegram.org`, `t.me`, `twitch.tv`, `vimeo.com`, `soundcloud.com`, and `spotify.com`.
* Shared documents: `drive.google.com`, `docs.google.com`, and `forms.gle`.
* Chain explorers: `etherscan.io`, `polygonscan.com`, `arbiscan.io`, `basescan.org`, `bscscan.com`, `solscan.io`, and `tronscan.org`.

PocketBase bootstrap inserts this initial list idempotently after reconciling the schema, while the tracked migration also covers environments where the collection already exists. Both paths skip hosts that already have a registry record. These are ordinary `moderation_domains` rows rather than a special runtime allowlist. The public catalog attributes this initial seed to **Questfall system**, while later direct administrator decisions are attributed to **Questfall team**. A restart cannot reset seeded entries, and every later community or team decision uses the same revisioned record. A seeded entry can therefore become suspicious or blocked like any other domain.

Questfall administrators have a dedicated Security workspace with Domains, Reports, and Consensus tabs. Domains is the explicit write surface: administrators can add a host or move an existing host to `safe`, `blocked`, or `suspicious`, but every team change requires a written rationale and creates an immutable resolved moderation case with the `team-v1` policy. A team change cancels active community cases based on the older revision before applying the same quest suspension or restoration effects as a community verdict. Consensus is an append-only settings surface: each change creates a new policy revision and affects only new rounds and cases.

Rules inherit to child hosts, with the most specific rule winning. For example, a blocked rule for `bad.youtube.com` overrides a safe rule for `youtube.com`. Safe means the platform or host is trusted; it is not an endorsement of every page on that host.

Safe domains are not placed into a scheduled moderation cycle. A domain case enters the shared moderation queue only through a new trust proposal, a security report, an appeal, or an eligible re-review. This keeps human attention tied to a concrete signal while preserving a path to reverse every decision.

The public catalog may show a site icon fetched by Questfall and stored in its own media bucket. This icon is presentation metadata only: fetching or refreshing it never changes the domain trust state, and a neutral fallback is used when no usable icon is available.

Safe links open directly. Unknown, pending, and suspicious links show a warning interstitial. Blocked links are blocked by both the server and client. When a domain becomes blocked, linked quests receive a separate additive moderation suspension without changing their normal quest status. They disappear from Feed, reject new submissions, and cancel pending submissions without a decision, reward, penalty, or Stamina refund. If an appeal or re-review clears the domain, an unexpired quest can return.

Conflicting changes for one domain are processed sequentially. A queued claim activates only if the domain revision it was based on is still current.

## Transparency

Users can inspect the current market multiplier, the end of its ten-minute window, their assignment's exact locked amounts and expiry, case history, decision chain, deadlines, and any appeal or re-review available to them. Public screens do not disclose queue size, raw backlog, capacity, or case-level demand. Public domain progress remains a single consensus percentage. Once voting starts, the catalog may also show the aggregate weighted split between approval and rejection, rounded to whole percentages; it never discloses participant counts, identities, levels, individual ballots, or trust totals. The public domain catalog identifies whether a domain was added by Questfall system, the Questfall team, or a community member, summarizes the active or latest decision, and shows the domain's public decision history with the source, stage, outcome, category, resulting status, aggregate split, and timestamps for each event. System seeds and team decisions are labeled explicitly and are never presented as community consensus. The admin-only Reports tab is read-only and lists only cases backed by user report records. It also shows the current adaptive price plus up to 144 ten-minute windows of internal throughput, capacity, raw and age-weighted backlog, pressure, and case count. Each row follows the latest stage of its appeal chain; the details panel exposes the report initiator and supporters, exact trust and participant requirements, ballot level snapshots, stalled or tie reason, outcomes, and immutable evidence. The Domains tab shows the current status, revision, latest decision source, rationale, and timestamp alongside the team actions.
