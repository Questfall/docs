---
icon: heart
---

# Karma

One of the key attributes of any [Workspace](workspaces.md) is its Karma, which gives users confidence in the quests they choose to complete and, more importantly, provides an exponential discount on the [Quest Bounty](quest-bounty.md).

Karma can range from 0 for a new Workspace to 10 for a Workspace with an excellent history, and the only source of Karma is final quest ratings, which also range from 0 to 10.

When a new Feed quest is published, it initially has no consensus rating. The system assigns it to selected users, raises its effective Bounty when necessary, and inserts it into a random Top-10 position for those users. A rating from 0 to 10 is required on the selected user's first structurally valid attempt, whether the answer is accepted or rejected. The vote is then immutable, and retries do not ask for another rating. Ordinary quest completions neither ask for nor record a rating, so users cannot choose a convenient quest and coordinate votes across accounts.

{% hint style="info" %}
Similarly, Google collects initial statistics by showing new sites on the first page when random users search for keyword phrases.
{% endhint %}

Users are motivated to vote correctly because they are rewarded or penalized with [Mining Boost](../completion/#mining-boost) depending on how far their rating estimate is from the final consensus.

### Balanced league consensus

The rating committee is built from users who are verified and were active during the previous 24 hours. If one to three league segments are available, the committee uses all of them; with four to six segments it uses three; with seven or more it uses five.

Selected segments are ordered from the highest league down. Their minimum quorums are `1 / 3 / 5 / 7 / 9`, with every further segment also requiring 9 votes. Hall always requires at least 3 votes. The system chooses segments by the lowest projected outstanding rating work per active miner. This keeps higher leagues from being flooded merely because their votes are trusted.

Within each selected segment, all canonical votes contribute to one segment average, even when more votes than the minimum quorum have already arrived. Every real league average has weight `1`; the entire Hall average has weight `0.25`, regardless of the number of Hall accounts. The final rating is the weighted average of these segment averages.

For example, if League I averages `8.0` and Hall averages `4.0`, the final rating is:

$$\frac{8*1+4*0.25}{1+0.25}=7.2$$

{% hint style="info" %}
Users cannot choose rating assignments. The system serves older open rounds before new unrated quests, prioritizes Bounty within each queue, and safely randomizes equal candidates.
{% endhint %}

Each user can hold up to four active rating assignments. The one-hour assignment is a Top-10 visibility lease, not a permanent exclusion. If it expires without a vote, the same assignment may be offered to that user again after a six-hour cooldown while its round still needs the user's segment; users who have not seen the quest are preferred. The same assignment record is reused, so reissuing never creates a second vote. A segment receives a small logarithmic reserve of parallel assignments, capped at eight, so the first submitted votes can fill its quorum without concentrating all work on a few miners.

When a segment reaches its quorum, its remaining active copies are removed from rating rotation. While the overall round is still open, a miner who already received one of those copies may submit a late non-canonical vote: it does not change the consensus rating, but receives its Mining Boost adjustment when the round closes. Once the final rating is published, no new vote or Boost adjustment is accepted. The miner may still finish an unvoted copy before its original expiry and keeps the promised Bounty. A selected segment that has received no votes for 24 hours may be replaced by a less loaded segment; a segment that already has a canonical vote is never replaced.

{% hint style="info" %}
Existing open rounds adopt this strategy when they are next claimed, voted on, or finalized. Their stored votes remain valid and use the participant level captured when the vote was recorded. Closed rounds are immutable and are never reopened or recalculated.
{% endhint %}

In other words, quest ratings are a solid basis for calculating Karma. Therefore, Karma is built solely on quest ratings by consuming them using the 10% weighting.

{% hint style="info" %}
More specifically, Karma is updated when a new quest is rated according to the following formula:

$$Karma_n=0.9*Karma_{n-1}+0.1*QuestRating_n$$
{% endhint %}

As a result of this approach to Karma calculation, it is updated exactly once when a quest first reaches consensus and reacts quickly to changes in the quality of the author's quests.&#x20;

This also means that new authors only need to create 10 quests to get a fair estimate of their Karma and the corresponding Bounty discount, without having to invest much in the beginning.
