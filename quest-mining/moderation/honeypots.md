---
icon: honey-pot
---

# Honeypots

Most real quest completions are expected to be valid. If, for example, 90% of real moderation outcomes are Approve, a bot can approve every assignment and be right 90% of the time without reviewing anything. At scale, that makes blind Sybil voting profitable.

Questfall counters this imbalance with control assignments, also called honeypots. Their purpose is not to test perfect attention or to ban a moderator after one mistake. They balance the economic opportunities presented by the moderation stream so that a fixed-button strategy has no favourable answer.

## Consensus references

A control assignment is based on a real Witness or Judge case that has already reached community consensus. At that point the system knows the canonical Approve or Reject outcome and stores an immutable reference containing the evidence snapshot and the users who must not receive it.

References are not created from unfinished cases, other controls, administrative decisions, or incomplete evidence snapshots. A Witness reference expires 24 hours after consensus because it concerns live external content. A Judge reference does not expire because judging uses the stored immutable evidence.

At creation, each reference receives this exposure limit:

```text
max_exposures = max(1, ceil(active_moderators_30d × 0.05))
```

An active moderator is a unique user who cast at least one moderation vote during the previous 30 days. Every assignment consumes one exposure, even if it is later bypassed or reported. The same reference is never shown twice to one moderator.

The completion author, quest owners and managers, and every moderator who participated anywhere in the source Witness/Judge chain are excluded. Exposure reservation and assignment creation happen in one database transaction.

## Global 2×2 balance

Witness and Judge are balanced independently. For the selected kind, the scheduler reads the last 100 settled real votes globally. Pending votes, controls, Bypass, and Report are excluded. Every real vote is counted after its case settles because every vote was one economic opportunity; cases are not deduplicated.

Let `G` be votes whose canonical outcome is Approve and `B` votes whose canonical outcome is Reject:

```text
if G > B: expected = Reject, p = (G − B) / (2G)
if B > G: expected = Approve, p = (B − G) / (2B)
if G = B: p = 0
```

For each normal assignment slot, the system first selects an eligible real case. It then performs a cryptographically secure roll and may replace that slot with a control of the same kind and required canonical outcome. With a `90/10` real window the probability is `44.4%`; with `100/0` it is `50%`; with `50/50` no control is needed.

If no matching reference is available, the already selected real case is issued. Controls therefore never create a queue, stop useful moderation, or appear when there is no real slot to replace.

## Assignment and settlement

Before the moderator acts, a control has the same public fields, instructions, evidence, and open progress shape as an ordinary assignment. Source case, submission and reference identifiers, raw snapshots, and control flags are not exposed.

The control uses an isolated internal case. It never enters the real queue, consensus, or later reference generation, and it cannot change the source submission, participant, quest, or case.

Because the canonical outcome is already known, a vote settles immediately with the normal completion economics. The values below are the `1×` bases; the action uses the same current server-window quote as real work:

| Assignment | Correct | Incorrect |
| --- | ---: | ---: |
| Witness | +10 Silver | 0 Silver |
| Judge | 0 Silver | -30 Silver |

A Judge control grants one Witness credit and resets the Bypass step after voting, just like an ordinary Judge vote. A Witness control consumes a credit when assigned.

Bypass is identical to ordinary moderation. Report on a control intentionally follows the same Bypass path: Witness returns its credit for free; Judge charges the Bypass cost active when the server receives the request and advances the step. It creates no report case, consumes no Stamina, and has no effect on the source user or submission. Control votes are excluded from the 24-hour trust throughput used to calculate market capacity.

Controls appear as ordinary completed votes in history and the Silver ledger. A wrong control vote creates no strike, automatic ban, or extra risk signal. Protection comes from the negative expected value of a long blind-voting sequence, not from assuming that honest moderators never make mistakes.
