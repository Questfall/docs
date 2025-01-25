---
icon: pickaxe
---

# Quest Completion (40%)

In Questfall, users will not have to grind quests for nothing or wait for rewards that will never arrive. The [mining approach](broken-reference), combined with [deflationary tokenomics](../../overview/token-burning.md), implies that the system (not other users) fairly rewards miners for their efforts in completing quests with [QFT](../../assets/questfall-tokens-qft.md).

Since quest completion is considered the most important activity on the platform, the largest portion of the weekly QFT issue (40%) is divided evenly among the [leagues](leagues.md), where users compete against each other based on the amount of mining points they earn by completing quests during the week.

{% hint style="info" %}
In fact, more than half of the weekly QFT issue is used to reward users for completing quests, as an additional 11.2% is transferred to the seasonal reward pool each week. [Seasons](../seasons-14.md) are a special case, however, as they use a completely different reward distribution mechanism.
{% endhint %}

As a result of the league-based reward segmentation, users must perform two types of activities to earn the most from completing quests. First, they must vote correctly in the [community moderation](../community-moderation/) to earn [Silver](../../assets/Silver-in-game.md) and increase their [level](levels.md) to progress through the leagues. Second, they must earn mining points by completing quests throughout the week.

The amount of mining points is determined by three parameters: [Quest Bounty](../quest-creation-10/quest-bounty.md), Mining Boost, and Mining Power. Since the last two parameters are unique to each user, if multiple users complete the same quest, they will receive different amounts of mining points as a reward.

{% hint style="info" %}
Mining points earned by completing a quest can be calculated by the formula:\
$$MiningPoints=QuestBounty*MiningBoost*MiningPower$$
{% endhint %}

The Quest Bounty is set by the author through burning Silver, and in most cases it will be the same for every user in the system. However, there are two cases in which it may be different.

First, the system can increase the Bounty for a new [unrated quest](../quest-creation-10/karma.md) to several random users, thus motivating them to prioritize completing this quest and voting on its rating. Second, if the [quest type](../quest-creation-10/) and author allow multiple attempts, the Bounty for the quest will be reduced based on the number of retries set by the author for each subsequent attempt.

{% hint style="info" %}
For example, if a quest author sets a maximum of five retries, each failed submission will reduce the Quest Bounty by 20%.
{% endhint %}

Unlike the Quest Bounty, the Mining Boost parameter is individual to each user and is used to incentivize users to vote correctly when estimating the rating of unrated quests. It is initially set to 1 and can be increased or decreased depending on the accuracy of users' quest rating votes.

When estimating the quest rating, users must choose one of eleven integer values from 0 to 10. In most cases, the final result will be a fraction, but it can always be rounded to a whole number. Thus, the system will reward users who vote for this rounded final value and the two values closest to it.

For example, if the final rating is 5.7, it will be rounded to 6, and users who voted for a rating of 6 will have their Mining Boost parameter increased by 0.0002. The Mining Boost adjustment will decrease by 0.0001 for each step away from this average estimate for all other users.

<table><thead><tr><th width="114">Rating</th><th width="133" align="center">Mining Boost</th></tr></thead><tbody><tr><td>0</td><td align="center">-0.0004</td></tr><tr><td>1</td><td align="center">-0.0003</td></tr><tr><td>2</td><td align="center">-0.0002</td></tr><tr><td>3</td><td align="center">-0.0001</td></tr><tr><td>4</td><td align="center">0.0000</td></tr><tr><td>5</td><td align="center">+0.0001</td></tr><tr><td><mark style="color:orange;"><strong>6</strong></mark></td><td align="center"><mark style="color:orange;">+0.0002</mark></td></tr><tr><td>7</td><td align="center">+0.0001</td></tr><tr><td>8</td><td align="center">0.0000</td></tr><tr><td>9</td><td align="center">-0.0001</td></tr><tr><td>10</td><td align="center">-0.0002</td></tr></tbody></table>

{% hint style="info" %}
To motivate users to vote for edge cases (0 and 10), if the final result is 0,1,9,10, then those who voted 0 or 10 will be rewarded with +0.0003 to Mining Boost respectively.
{% endhint %}

While the Mining Boost cannot go negative, it can go to zero, which cancels out the amount of Mining Points a user can earn from any of the quests.

On the other hand, Mining Boost is capped, and the upper limit increases by 0.01 with each level. Thus, a level 100 user can have a maximum Mining Boost of 2, but to achieve this, a miner would have to have rated a lot of quests in line with the majority.

As a result, correct estimating of quest rating becomes one of the key factors for the success of quest miners in the long run.&#x20;

{% hint style="info" %}
Even if a user avoids unrated quests and takes no risks, the higher the league, the more he will underperform against those who keep their Mining Boost as high as possible.
{% endhint %}

While Quest Bounty depends entirely on author competition, and Mining Boost only requires a correct estimate of unrated quests, Mining Power is a completely different story, as it can be increased through the RPG mechanics that provide the competitive alternatives.

As in any RPG system, each user in Questfall is represented by a character whose performance in various areas is determined by [attributes](attributes.md). And while one of these attributes directly increases the Mining Power, other attributes also provide valuable advantages. Thus, a user must choose which area to improve when spending an attribute point gained with each new level.

In addition to attributes, the character can also be equipped with a variety of [clothing](items.md) with different effects that, like attributes, improve various aspects of the user's performance other than Mining Power.
