---
icon: scale-unbalanced-flip
---

# Consensus

In community moderation, each vote has only two possible options - moderators can either agree or disagree with the submission. This binary approach reduces the entire quality spectrum of user submissions, such as quest completions or reports, to the binary result - either valid or not.

{% hint style="info" %}
The same way hashes are estimated in the Bitcoin blockchain.
{% endhint %}

Binary choices also make voting easy and straightforward for moderators, and imply a binary validity of their votes, since they either agree or disagree with the consensus result, and are therefore either right or wrong, with no ambiguity.

{% hint style="info" %}
There are other approaches, such as the range voting that Questfall uses for [quest ratings](../creation/karma.md). However, votes in such ratings are only right to a certain degree.
{% endhint %}

### Level trust

Consensus uses a continuous trust weight based on the moderator's level. It does not use leagues, so manually opening or closing a league has no effect on moderation or quest-rating consensus.

$$Trust=\sqrt{\max(1,\lfloor Level\rfloor)}$$

The implementation stores this as fixed-point units using `round(1000 × trust)`. Levels `1 / 4 / 9 / 16` therefore contribute `1 / 2 / 3 / 4` trust. The square root gives developed accounts more influence while making each additional level progressively less powerful.

The level and trust weight are captured when an assignment is issued. A later level change cannot change an open ballot. Rewards and penalties remain per vote and are never multiplied by an individual moderator's trust weight. Trust also measures the global amount of unfinished work for adaptive pricing, but only as an aggregate backlog relative to aggregate ten-minute capacity.

### Fixed requirements

The active pool contains verified users seen during the previous 24 hours, after removing everyone excluded from the case. Each case has two independent minimums: a minimum number of participants and a minimum sum of trust. Both conditions use `≥` and must be true. The size of the active pool does not change either minimum; it only determines whether enough eligible people and trust are currently available to open the case.

The launch policy is:

| Scenario | Minimum participants | Minimum trust |
| --- | ---: | ---: |
| Rating | 2 | 6 |
| Moderation Initial / Review | 2 | 6 |
| Appeal I | 4 | 18 |
| Final Appeal | 7 | 54 |

Witnessing, judging, domain proposals, reports, and re-reviews all use the Initial profile. Appeals use their stronger profile and exclude every moderator who voted in an earlier decision in the same chain.

### Decision and tie-break

For example, Initial consensus can reach its `2 users + 6 trust` minimums with two level-9 users (`3 + 3 trust`) or six level-1 users (`1 × 6 trust`). One level-36 user contributes all `6 trust` but still cannot decide alone because the two-user minimum remains unmet.

After both minimums are met, the result is the weighted majority of approve trust versus reject trust. If the two totals are exactly equal, only ballots at the highest captured level are considered. Their simple majority decides the result because all ballots at that level have the same trust weight. If that strongest level is also evenly split, the case stays open and receives another vote.

A case that cannot currently form its minimum active pool remains queued. An open case that stops receiving enough trust remains open and is marked as stalled for administrators. Requirements never weaken on a timer.

Open and queued cases both contribute their remaining required trust to the adaptive moderation market. Participant shortage does not invent extra economic work: only the missing trust is counted, and already-cast votes reduce it immediately. Unfinished work becomes more urgent once per ten-minute window, while active assignments do not reduce the backlog until their votes are actually recorded.

### Immutable policy snapshots

Administrators manage the three moderation tiers and the rating profile in **Security → Consensus**. The square-root curve itself is fixed as `sqrt-level-v1`; only minimum participants and minimum trust can change. Every save creates an append-only policy revision with an audit diff.

New rating rounds and moderation cases capture the current revision and both minimums. An open decision keeps its minimums and participant snapshots even after administrators save another revision. A queued case also remembers its revision and opens only when the eligible active pool can supply both minimums.

Users should not be able to choose the topic they want to vote on - instead, the system assigns moderation cases as needed.

This also provides another layer of protection, because when topics are assigned by the system, there is no way for multiple accounts to synchronize an attack on a given vote, since each account is given an unpredictable topic.

After consensus, every real ballot receives the same canonical outcome and is added to its kind's settled-vote balance window. A complete real Witness or Judge case also becomes an immutable, exposure-limited honeypot reference. Honeypot votes remain separate: their answer is already known, so they settle immediately and never feed consensus or create more references.
