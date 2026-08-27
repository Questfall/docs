---
icon: calendar-clock
---

# Seasons (14%)

While the concept of mining is fair enough, new users will find themselves in a weak position as Questfall becomes more popular, because dedicated veterans will have a huge advantage over newcomers, either through [user level](completion/levels.md) or [author karma](creation/karma.md).

In order to allow new users to compete with existing veterans on an equal footing, Questfall implements seasons, each of which lasts twelve weeks, or an average of three months. During the season, 14% of each weekly issue of QFT goes into the seasonal reward pool.

{% hint style="info" %}
Approximately 168% of the average weekly issue is collected this way over the course of a season.
{% endhint %}

At the end of each season, the accumulated reward pool is divided between the users who complete quests and the authors who create them. The split between users and authors is the same as the weekly rewards: 80% goes to users and 20% goes to authors.&#x20;

However, the way in which the rewards are divided between these two groups is different from how it works for weekly rewards. The seasonal reward distribution is based on the leaderboards, one for users and one for authors.

The user leaderboard is based on the total [Quest Bounties](creation/quest-bounty.md) received. In other words, this leaderboard is created without taking into account the individual [mining power](completion/#mining-power) and [mining boost](completion/#mining-boost).

Seasonal Quest Bounty starts accumulating from a user's first accepted feed quest. However, a user enters the seasonal payout leaderboard only after reaching Level 5 and League I, with both email and wallet verified. Until then, the score remains accumulated but unranked. Eligibility is checked again at season settlement, so Hall and incomplete-identity accounts cannot change the payout denominator.

The Author Space leaderboard uses Feed quests that were both published and received their final consensus rating within the same UTC calendar quarter. Retroactive ratings do not move quests into another season. An Author Space needs at least 12 such quests to qualify.

Spaces are sorted by average final rating, then by the greater number of rated quests, then by stable Author Space ID. Below 12 quests, the product may show an explicitly conditional projection that assumes the current average rating remains unchanged through quest 12.

The Quest Completion leaderboard protects the launch-stage competition from becoming winner-takes-all. If there are ten or fewer eligible miners, all of them are rewarded. Otherwise at least ten places are rewarded; once a rounded-down top 10% is greater than ten, that larger number becomes the reward cutoff. In compact form, the number of base reward places is `min(eligible miners, max(10, floor(eligible miners × 10%)))`.

{% hint style="info" %}
The minimum keeps early seasons competitive, while the percentage cutoff becomes the Sybil-control layer after the eligible audience grows. League I and verified email and wallet remain the entry requirements before an account affects the payout denominator.
{% endhint %}

Quest Completion rewards are distributed linearly across these places: the lowest base reward place gets one Rank Share, the next gets two, and so on up to first place. Miners with the same seasonal Quest Bounty share the sum of the Rank Shares occupied by their tied positions equally. If a tie crosses the cutoff, the complete tied group is rewarded and splits the remaining cutoff shares.

For example, if there are 1000 users in the leaderboard, the top 100 will be rewarded in such a way that the 1st user will get x100 more reward than the 100th, while the 101st and below will get no reward. If there are 2000 users, the 1st user will get x200 more reward than the 200th. And so on.

{% hint style="info" %}
The Author Space leaderboard keeps its separate qualification and Top-10% policy described below; its independently configured pool is not taken from the miner pool at settlement.
{% endhint %}

The Author Space season uses its own independently configured Gold pool. At settlement, integer Gold is allocated by linear Rank Shares using the largest-remainder method and stored as immutable pending receipts. Receipts from different periods accumulate without expiry; the owner can withdraw all pending rewards of one currency to their personal balance. Future QFT receipts can coexist with older pending Gold, and neither currency is converted into the Author Space Silver treasury.

As a result, the concept of seasons adds another dimension to the competition in the long run, allowing the most diligent and dedicated users to earn regardless of their previous history in Questfall.

This approach also allows for seasonal collaborations with other projects, which not only brings additional rewards to users, but also encourages QFT burning, as to become a Questfall Season Partner, a third-party team must burn QFT.
