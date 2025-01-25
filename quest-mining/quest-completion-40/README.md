---
icon: pickaxe
---

# Quest Completion (40%)

In Questfall, users will not have to grind quests for nothing or wait for rewards that will never arrive. The [mining approach](broken-reference), combined with [deflationary tokenomics](../../overview/token-burning.md), implies that the system (not other users) fairly rewards miners for their efforts in completing quests with [QFT](../../assets/questfall-tokens-qft.md).

Since quest completion is considered the most important activity on the platform, the largest portion of the weekly QFT issue (40%) is divided evenly among the [leagues](leagues.md), where users compete against each other based on the amount of mining points they earn by completing quests during the week.

{% hint style="info" %}
In fact, more than half of the weekly QFT issue is used to reward users for completing quests, as an additional 11.2% is transferred to the seasonal reward pool each week. [Seasons](../seasons-14.md) are a special case, however, as they use a completely different reward distribution mechanism.
{% endhint %}

As a result of the league-based reward segmentation, users must perform two types of activities to earn the most from completing quests.&#x20;

First, they must vote correctly in the community moderation to earn [Silver](../../assets/Silver-in-game.md) and increase their [level](levels.md) to progress through the leagues.

{% hint style="info" %}
Learn more in the [Community Moderation](../community-moderation/) section.
{% endhint %}

Second, users must earn Mining Points by completing quests throughout the week in order to be eligible for their league's weekly reward distribution.

Each successful quest completion is rewarded with a certain amount of Mining Points, which is calculated as the product of three factors: Quest Bounty, Mining Power, and Mining Boost.&#x20;

{% hint style="info" %}
$$MiningPoints=QuestBounty*(1+\frac{MiningPower}{100})*MiningBoost$$
{% endhint %}

Unlike Quest Bounty, which is a quest parameter, Mining Power and Mining Boost are user-specific parameters, so multiple users completing the same quest will receive different amounts of Mining Points.

### Quest Bounty

The Quest Bounty is set by the quest author via the Silver burn and serves as the basis for calculating the reward for completing a quest, thus determining the order in which quests appear in the [global feed](../../overview/global-feed.md).&#x20;

{% hint style="info" %}
Although each user will see individual rewards for the same quests in the feed, the order will remain the same for everyone.
{% endhint %}

Therefore, the average Bounty size is mainly determined by the competition between authors trying to get as many completions for their quests as possible, and will increase as the platform becomes more popular.

While in most cases the system will respect the Quest Bounty amount set by the quest author, there are two situations where it may be changed.

First, the system can increase the Bounty for a new [unrated quest](../quest-creation-10/karma.md) to several random users, thus motivating them to prioritize completing this quest and voting on its rating.&#x20;

Second, if the [quest type](../quest-creation-10/) and author allow multiple attempts, the Bounty for the quest will be reduced based on the number of retries set by the author for each subsequent attempt. For example, if a quest author sets a maximum of five retries, each failed submission will reduce the Quest Bounty by 20%.

{% hint style="info" %}
Learn more in the [Quest Bounty](../quest-creation-10/quest-bounty.md) article.
{% endhint %}

### Mining Power

At the heart of Questfall is an entire RPG system, which means that each quest miner is represented by a character defined by various parameters and defaults that can be enhanced by either character [attributes](attributes.md) or RPG items such as [clothing](items.md).

{% hint style="info" %}
Although Questfall will launch with a limited number of attributes and RPG item types, many more will be added in [future releases](../../roadmap/future-versions.md).
{% endhint %}

Mining Power is one of a character's most important parameters, and can be increased by investing the attribute points gained with each new level into the Mining character attribute. In addition to Mining attribute, Mining Power can also be raised by equipping clothing with the corresponding effects.

{% hint style="info" %}
Mining Power is defined in percent with an initial value of 0% and can only be increased through the RPG system and can never go negative.
{% endhint %}

However, Mining Power is not the only character parameter that can be improved, as there are many other stats that can provide an advantage in various areas. Thus, a user must develop a character with a limited amount of resources according to the chosen personal strategy.

{% hint style="info" %}
There may be strategies that do not focus on Mining Power at all. More details on the Questfall RPG system can be found in the following articles.
{% endhint %}

### Mining Boost

The Mining Boost parameter is used to incentivize users to vote correctly when estimating the rating of unrated quests. Its initial value is 1, and it increases or decreases depending on the accuracy of users' quest rating votes.

When users complete unrated quests, they must choose one of eleven values (ranging from 0 to 10) to rate the quest. After the system collects enough votes, the final quest rating is calculated based on the community consensus.

{% hint style="info" %}
For more details on the final rating results, see the author's [Karma](../quest-creation-10/karma.md) article.
{% endhint %}

In most cases, the final rating will be a fraction, but it can always be rounded to a whole number. For example, a final rating of 5.7 will be rounded to 6, a final rating of 8.9 will be rounded to 9, and so on.

The system will reward users based on how far their vote is from this rounded final value. Those who match the rounded rating will have their Mining Boost parameter increased by 0.0002. Each step away will decrease the reward by 0.0001, so after two steps it becomes a penalty.

To motivate users to vote for edge cases (0 and 10), if the final result is close to the edge (0, 1 or 9, 10), those who voted for 0 or 10 will be rewarded with +0.0003 to Mining Boost.&#x20;

<table><thead><tr><th width="101">Rating</th><th width="87" align="center">0.1</th><th width="83" align="center">1.2</th><th width="84" align="center">2.3</th><th width="88" align="center">3.4</th><th width="83" align="center">4.1</th><th width="89" align="center">5.2</th></tr></thead><tbody><tr><td>0</td><td align="center"><mark style="color:orange;">+0.0003</mark></td><td align="center">+0.0003</td><td align="center">0.0000</td><td align="center">-0.0001</td><td align="center">-0.0002</td><td align="center">-0.0003</td></tr><tr><td>1</td><td align="center">+0.0002</td><td align="center"><mark style="color:orange;">+0.0002</mark></td><td align="center">+0.0001</td><td align="center">0.0000</td><td align="center">-0.0001</td><td align="center">-0.0002</td></tr><tr><td>2</td><td align="center">+0.0001</td><td align="center">+0.0001</td><td align="center"><mark style="color:orange;">+0.0002</mark></td><td align="center">+0.0001</td><td align="center">0.0000</td><td align="center">-0.0001</td></tr><tr><td>3</td><td align="center">0.0000</td><td align="center">0.0000</td><td align="center">+0.0001</td><td align="center"><mark style="color:orange;">+0.0002</mark></td><td align="center">+0.0001</td><td align="center">0.0000</td></tr><tr><td>4</td><td align="center">-0.0001</td><td align="center">-0.0001</td><td align="center">0.0000</td><td align="center">+0.0001</td><td align="center"><mark style="color:orange;">+0.0002</mark></td><td align="center">+0.0001</td></tr><tr><td>5</td><td align="center">-0.0002</td><td align="center">-0.0002</td><td align="center">-0.0001</td><td align="center">0.0000</td><td align="center">+0.0001</td><td align="center"><mark style="color:orange;">+0.0002</mark></td></tr><tr><td><strong>6</strong></td><td align="center">-0.0003</td><td align="center">-0.0003</td><td align="center">-0.0002</td><td align="center">-0.0001</td><td align="center">0.0000</td><td align="center">+0.0001</td></tr><tr><td>7</td><td align="center">-0.0004</td><td align="center">-0.0004</td><td align="center">-0.0003</td><td align="center">-0.0002</td><td align="center">-0.0001</td><td align="center">0.0000</td></tr><tr><td>8</td><td align="center">-0.0005</td><td align="center">-0.0005</td><td align="center">-0.0004</td><td align="center">-0.0003</td><td align="center">-0.0002</td><td align="center">-0.0001</td></tr><tr><td>9</td><td align="center">-0.0006</td><td align="center">-0.0006</td><td align="center">-0.0005</td><td align="center">-0.0004</td><td align="center">-0.0003</td><td align="center">-0.0002</td></tr><tr><td>10</td><td align="center">-0.0007</td><td align="center">-0.0007</td><td align="center">-0.0006</td><td align="center">-0.0005</td><td align="center">-0.0004</td><td align="center">-0.0003</td></tr></tbody></table>

While the Mining Boost parameter cannot go negative, it can go to zero, which cancels out the amount of Mining Points a user can earn from any quest.

On the other hand, Mining Boost is capped, and the upper limit increases by 0.01 with each level. Thus, a level 100 user can have a maximum Mining Boost of 2, but to achieve this, a miner would have to have rated a lot of quests in line with the majority.

As a result, correct estimating of quest rating becomes one of the key factors for the success of quest miners in the long run.&#x20;

{% hint style="info" %}
Even if a user avoids unrated quests and takes no risks, the higher the league, the more he will underperform against those who keep their Mining Boost as high as possible.
{% endhint %}
