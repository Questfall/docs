---
icon: heart
---

# Karma

One of the key attributes of any [Workspace](workspaces.md) is its Karma, which gives users confidence in the quests they choose to complete and, more importantly, provides an exponential discount on the [Quest Bounty](quest-bounty.md).

Karma can range from 0 for a new Workspace to 10 for a Workspace with an excellent history, and the only source of Karma is final quest ratings, which also range from 0 to 10.

When a Feed quest is activated, the publication may receive one rating round. The system assigns its immutable publication snapshot to selected users, raises its effective Bounty when necessary, and inserts it into a random Top-10 position for those users. Extending the same active publication never creates another round. A rating from 0 to 10 is required on the selected user's first structurally valid attempt, whether the answer is accepted or rejected. A user can cast at most one canonical vote for the stable quest identity: the vote is immutable, and later publications or retries do not provide another vote. Ordinary quest completions neither ask for nor record a rating, so users cannot choose a convenient quest and coordinate votes across accounts.

{% hint style="info" %}
Similarly, Google collects initial statistics by showing new sites on the first page when random users search for keyword phrases.
{% endhint %}

Users are motivated to vote correctly because they are rewarded or penalized with [Mining Boost](../completion/#mining-boost) depending on how far their rating estimate is from the final consensus.

### Level-weighted consensus

The rating pool is built from users who are verified and were active during the previous 24 hours. Quest-rating trust is independent of manually opened leagues: opening or closing a league changes neither a user's rating weight nor the users who can receive a rating assignment.

Each vote receives a continuous trust weight based on the participant's level captured by the rating assignment:

$$VoteWeight=\sqrt{UserLevel}$$

For example, levels `1 / 4 / 9 / 16` have weights `1 / 2 / 3 / 4`. The square root makes a developed account more influential than several new accounts without allowing level growth to create an unlimited linear advantage. The final quest rating is the weighted average of all canonical votes:

$$QuestRating=\frac{\sum Rating_i*\sqrt{Level_i}}{\sum \sqrt{Level_i}}$$

A normal round has two fixed minimums: 6 trust units and at least two independent voters. One account therefore cannot publish its own opinion even when its level alone reaches the minimum trust. The size of the active pool does not change these requirements.

The formula is fixed as `sqrt-level-v1`. Administrators may revise the minimum participants and minimum summed trust in **Security → Consensus**. Every round stores both minimums with the complete policy revision when it is created, so later settings changes apply only to new rounds.

For example, a level 16 vote has weight `4` and a level 9 vote has weight `3`. Together they reach 7 trust units and can settle a round with two votes. Seven level 1 votes would carry the same total weight, although the assignment reserve normally avoids issuing unnecessary copies once enough trust is already in flight.

{% hint style="info" %}
Users cannot choose rating assignments. The system serves older open rounds before new unrated quests, prioritizes Bounty within each queue, and safely randomizes equal candidates.
{% endhint %}

Each user can hold up to four active rating assignments. The one-hour assignment is a Top-10 visibility lease, not a permanent exclusion. If it expires without a vote, the same assignment may be offered to that user again after a six-hour cooldown while its round still needs trust; users who have not seen the quest are preferred. The same assignment record is reused, so reissuing never creates a second vote. Each round receives a small adaptive reserve of parallel assignments, capped at eight. This spreads work across the active population and avoids sending every unrated quest to every high-level user.

When minimum trust and minimum voter count are reached, remaining active copies are removed from rating rotation. Once the final rating is published, no new vote or Boost adjustment is accepted. A miner may still finish a cancelled unvoted copy before its original expiry and keeps the promised Bounty, but that completion no longer asks for a rating.

If at least two votes have arrived but minimum trust is still underfilled, the round closes with the collected weighted votes after 24 hours without a new vote. This prevents a quest from remaining unrated forever when the active population changes or issued assignments are abandoned.

{% hint style="info" %}
Existing open rounds adopt this strategy during background reconciliation or when they are next claimed, voted on, or finalized. Their stored votes remain valid and use the participant level captured when the vote was recorded. For an older legacy vote that predates level snapshots, migration captures the user's current level once and then keeps that weight immutable. Closed rounds are immutable and are never reopened or recalculated.
{% endhint %}

In other words, quest ratings are a solid basis for calculating Karma. Therefore, Karma is built solely on quest ratings by consuming them using the 10% weighting.

{% hint style="info" %}
More specifically, Karma is updated when a new quest is rated according to the following formula:

$$Karma_n=0.9*Karma_{n-1}+0.1*QuestRating_n$$
{% endhint %}

The displayed quest rating is the trust-weighted average of canonical votes from all closed publication rounds. While a new round remains open, the last finalized aggregate stays visible. Each stable quest occupies exactly one chronological slot in the Workspace EWMA, ordered by the time when the quest was first rated. If a later publication changes the aggregate quest rating, that existing slot and the subsequent slots are recalculated; a reactivation never appends a second Karma event.

As a result of this approach, each independently created or duplicated quest can influence Karma once, while reusing the same quest cannot manufacture extra history.&#x20;

This also means that new authors only need to create 10 quests to get a fair estimate of their Karma and the corresponding Bounty discount, without having to invest much in the beginning.
