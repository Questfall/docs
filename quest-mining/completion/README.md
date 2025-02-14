---
icon: pickaxe
---

# Quest Completion (40%)

In Questfall, users will not have to grind quests for nothing or wait for rewards that will never arrive. The [mining approach](broken-reference) ensures that the system fairly rewards miners with [QFT](../../assets/qft.md) for their weekly work in completing quests.

Quest completion is considered the most important activity on the platform, and as such, the largest portion of the weekly QFT issue (40%) is dedicated to rewarding it.

{% hint style="info" %}
In fact, more than half (51.2% to be exact) of the weekly QFT issue is used to reward users for completing quests, as an additional 11.2% is used for special [seasonal rewards](../seasons.md).
{% endhint %}

The [weekly reward pool](../creation/rewards.md) is divided among the [leagues](leagues.md), where users are grouped by [level](levels.md) and compete for their share of the league reward. Competition within each league is based on the Mining Score that users earn by the end of the week by completing quests.

Each time a quest is successfully completed, the user is rewarded with a certain number of Mining Points, depending on a quest-specific Quest Bounty parameter and user-specific Mining Power and Mining Boost parameters.

{% hint style="info" %}
The formula for calculating the reward for a given quest is as follows:\
$$MiningPoints=QuestBounty*(1+\frac{MiningPower}{100})*MiningBoost$$
{% endhint %}

The amount of Mining Points earned throughout the week results in an individual weekly Mining Score for each user. And the league reward pool is distributed according to each user's share of the league's total Mining Score.

{% hint style="info" %}
The individual Mining Score is simply the total number of Mining Points earned by the user during the week.
{% endhint %}

In addition to Mining Points, users also receive a random Chest Shard for each quest they complete.&#x20;

Chest Shards, like a mosaic puzzle, make up a weekly set of up to 100 pieces, and when a user collects a full set of shards, they are rewarded with a free loot box. Therefore, the more quests a user completes in a week, the more free loot boxes they will open.

***

### Quest Bounty

The Quest Bounty is set by the quest author in the range of 1 to 1000 by burning Silver and serves as the basis for calculating the reward for completing a quest, thus determining the order in which quests appear in the [global feed](../../overview/global-feed.md).&#x20;

{% hint style="info" %}
Although users will see individual rewards for the same quests in the feed, the order of the feed will remain the same for everyone, because all the [Quest Bounties](../creation/quest-bounty.md) are multiplied by the constant made up of user-specific parameters.
{% endhint %}

While the Quest Bounty concept assumes that it is the same for everyone, and therefore the order of quests in the feed is also the same, this is not always the case.&#x20;

The system may increase the Quest Bounty for a new [unrated quest](../creation/karma.md) to several random users, thus motivating them to complete the quest and vote on its rating.

{% hint style="info" %}
The Quest Bounty will also change if the quest allows multiple attempts. For example, if a quest allows five retries, each failed attempt will reduce the Quest Bounty by 20%.
{% endhint %}

Quest Bounties will be driven mainly by competition between authors trying to get as many completions for their quests as possible, and will increase as the platform becomes more popular.

However, such competition will not benefit miners, as Bounties will increase for everyone. As a result, the distribution of rewards will continue to be determined primarily by the number of quests completed from the top of the feed, as well as individual Mining Power and Mining Boost.

***

### Mining Power

Mining Power is one of the many parameters that define the character of the RPG system in Questfall. It is defined in percent with an initial value of 0% and can only be increased by the RPG mechanics and can never be negative.

Mining Power can be increased by investing the attribute points gained with each new level into the [Mining](rpg-attributes/mining.md) attribute or by equipping [clothing](rpg-items/items.md) with the appropriate effects.

However, Mining Power is not the only character parameter that can be improved with attribute points or clothing, as there are many other stats that can provide an advantage in various areas.&#x20;

{% hint style="info" %}
Although Questfall will launch with a limited number of attributes and RPG item types, many more will be added in [future releases](../../roadmap/future-versions.md).
{% endhint %}

Thus, a user must develop a character with a limited amount of resources according to the chosen personal strategy, which may not focus on Mining Power at all.

***

### Mining Boost

The Mining Boost parameter is used to incentivize users to vote correctly when estimating the rating of unrated quests. Its initial value is 1, and it increases or decreases depending on the accuracy of users' quest rating votes.

When users complete unrated quests, they must choose one of eleven values (ranging from 0 to 10) to rate the quest. After the system collects enough votes, the final quest rating is calculated based on the community consensus.

{% hint style="info" %}
For more details on the final rating results, see the author's [Karma](../creation/karma.md) article.
{% endhint %}

In most cases, the final rating will be a fraction, but it can always be rounded to a whole number. For example, a final rating of 5.7 will be rounded to 6, a final rating of 8.9 will be rounded to 9, and so on.

The system will reward users based on how far their vote is from this rounded final value. Those who match the rounded rating will have their Mining Boost parameter increased by 0.0002. Each step away will decrease the reward by 0.0001, so after two steps it becomes a penalty.

To motivate users to vote for edge cases (0 and 10), if the final result is close to the edge (0, 1 or 9, 10), those who voted for 0 or 10 will be rewarded with +0.0003 to Mining Boost.&#x20;

<table><thead><tr><th width="106">Rating</th><th width="104" align="center">0.1</th><th width="104" align="center">1.2</th><th width="100" align="center">2.3</th><th width="100" align="center">3.4</th></tr></thead><tbody><tr><td>0</td><td align="center"><mark style="color:orange;"><strong>+0.0003</strong></mark></td><td align="center"><strong>+0.0003</strong></td><td align="center">0.0000</td><td align="center">-0.0001</td></tr><tr><td>1</td><td align="center">+0.0002</td><td align="center"><mark style="color:orange;">+0.0002</mark></td><td align="center">+0.0001</td><td align="center">0.0000</td></tr><tr><td>2</td><td align="center">+0.0001</td><td align="center">+0.0001</td><td align="center"><mark style="color:orange;">+0.0002</mark></td><td align="center">+0.0001</td></tr><tr><td>3</td><td align="center">0.0000</td><td align="center">0.0000</td><td align="center">+0.0001</td><td align="center"><mark style="color:orange;">+0.0002</mark></td></tr><tr><td>4</td><td align="center">-0.0001</td><td align="center">-0.0001</td><td align="center">0.0000</td><td align="center">+0.0001</td></tr><tr><td>5</td><td align="center">-0.0002</td><td align="center">-0.0002</td><td align="center">-0.0001</td><td align="center">0.0000</td></tr><tr><td><strong>6</strong></td><td align="center">-0.0003</td><td align="center">-0.0003</td><td align="center">-0.0002</td><td align="center">-0.0001</td></tr><tr><td>7</td><td align="center">-0.0004</td><td align="center">-0.0004</td><td align="center">-0.0003</td><td align="center">-0.0002</td></tr><tr><td>8</td><td align="center">-0.0005</td><td align="center">-0.0005</td><td align="center">-0.0004</td><td align="center">-0.0003</td></tr><tr><td>9</td><td align="center">-0.0006</td><td align="center">-0.0006</td><td align="center">-0.0005</td><td align="center">-0.0004</td></tr><tr><td>10</td><td align="center">-0.0007</td><td align="center">-0.0007</td><td align="center">-0.0006</td><td align="center">-0.0005</td></tr></tbody></table>

While the Mining Boost parameter cannot go negative, it can go to zero, which cancels out the amount of Mining Points a user can earn from any quest.

On the other hand, Mining Boost is capped, and the upper limit increases by 0.01 with each level. Thus, a level 100 user can have a maximum Mining Boost of 2, but to achieve this, a miner would have to have rated a lot of quests in line with the majority.

As a result, correct estimating of quest rating becomes one of the key factors for the success of quest miners in the long run.&#x20;

{% hint style="info" %}
Even if a user avoids unrated quests and takes no risks, the higher the league, the more he will underperform against those who keep their Mining Boost as high as possible.
{% endhint %}

***

### Loot Boxes

All RPG items except Gems are released into circulation through loot boxes, which can be opened by either spending 100 Gold ($1) or collecting a full weekly set of Chest Shards.

{% hint style="info" %}
A user can collect a full weekly set of Chest Shards an unlimited number of times during a week. Next week, however, a new set will be released, making any unused shards from the previous week obsolete.
{% endhint %}

By default, a loot box offers a single item based on a chance that depends on the rarity and level of the item. The higher the rarity or level, the lower the chance of receiving the item.

And while users can't increase their odds of getting rarer items, they can get more than one item from a single loot box, providing the space needed for the chances of rarer items to work.

The process of opening loot boxes is turn-based, and while users only have one turn by default, the higher a character's Luck attribute, the more turns a user will have when opening a loot box.&#x20;

{% hint style="info" %}
The [Luck](rpg-attributes/luck.md) attribute plays a crucial role not only in opening loot boxes, but also in collecting shards.
{% endhint %}

To illustrate the mechanics, here is an example for a user with 4 turns:

* **Turn 1**: The user is dealt 4 cards face down and must blindly choose one. All four cards contain items, so the user is guaranteed to receive an item after the first turn.
* **Turn 2**: The user is dealt 4 more cards. One card is a "finish" card, which ends the opening process, while the remaining three are item cards, which give the user one more item and continue the opening into the next turn.
* **Turn 3**: The user is dealt another 4 cards. This time, 2 out of the 4 cards are finish cards. Choosing a finish card will end the opening, leaving the user with two items won in previous turns.
* **Turn 4**: The user is dealt 4 cards for the last time. Only 1 card contains an item, while the other 3 are finish cards. Since a hypothetical fifth turn would consist entirely of finish cards, this is the last turn. If the user selects a finish card, he will end the loot box opening with a total of 3 items. But if the user selects the item card, he will receive 4 items in total.
