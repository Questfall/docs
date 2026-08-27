---
icon: pickaxe
---

# Quest Completion (40%)

In Questfall, users will not have to grind quests for nothing or wait for rewards that will never arrive. The [mining approach](../../overview/quest-mining.md) ensures that the system fairly rewards miners with [QFT](../../assets/qft.md) for their weekly work in completing quests.

Quest completion is considered the most important activity on the platform, and as such, the largest portion of the weekly QFT issue (40%) is dedicated to rewarding it.

{% hint style="info" %}
In fact, more than half (51.2% to be exact) of the weekly QFT issue is used to reward users for completing quests, as an additional 11.2% is used for special [seasonal rewards](../seasons.md).
{% endhint %}

The [weekly reward pool](../creation/rewards.md) is divided among the [leagues](leagues.md), where users are grouped by [level](levels.md) and compete for their share of the league reward. Competition within each league is based on the Mining Score that users earn by the end of the week by completing quests.

Each time a quest is successfully completed, the user is rewarded with a certain number of Mining Points, depending on a quest-specific Quest Bounty parameter and user-specific Mining Power, Flow, and Mining Boost parameters.

{% hint style="info" %}
The formula for calculating the reward for a given quest is as follows:\
$$MiningPoints=floor(QuestBounty*(1+\frac{MiningPower}{100})*FlowMultiplier*MiningBoost)$$
{% endhint %}

Mining Power is a bonus percentage. Therefore `0% Mining Power` produces a
`x1.00` multiplier and preserves the complete base Quest Bounty; it does not
reduce the reward to zero.

The amount of Mining Points earned throughout the week results in an individual weekly Mining Score for each user. And the league reward pool is distributed according to each user's share of the league's total Mining Score.

{% hint style="info" %}
The individual Mining Score is simply the total number of Mining Points earned by the user during the week.
{% endhint %}

In addition to Mining Points, completed quests can also create Chest Shard rolls. The frequency of those rolls is controlled by the [Mining](rpg-attributes/mining.md) trait `Loot`, while the chance to receive a missing piece instead of a duplicate is controlled by the [Luck](rpg-attributes/luck.md) trait `Shards`.&#x20;

Chest Shards, like a mosaic puzzle, make up a weekly set whose size can vary. The initial product target is roughly 10 to 20 pieces, but the reward definition may supply a different non-empty piece pool. When a user collects a full set of shards, they are rewarded with a free loot box. Therefore, the more quests a user completes in a week, the more free loot boxes they will open.

***

### Quest Bounty

The Quest Bounty is set by the quest author in the range of 1 to 1000 by burning Silver and serves as the basis for calculating the reward for completing a quest, thus determining the order in which quests appear in the [global feed](../../overview/global-feed.md).&#x20;

{% hint style="info" %}
Although users will see individual rewards for the same quests in the feed, the order of the feed will remain the same for everyone, because all the [Quest Bounties](../creation/quest-bounty.md) are multiplied by the constant made up of user-specific parameters.
{% endhint %}

While the Quest Bounty concept assumes that it is the same for everyone, and therefore the order of quests in the feed is also the same, this is not always the case.&#x20;

The system may increase the effective Quest Bounty for a new [unrated quest](../creation/karma.md) assigned to a small rotating set of users, thus motivating them to attempt the quest and vote on its rating. A user can hold at most four such assignments, each as a one-hour Top-10 visibility lease. An expired unvoted lease can be offered again after a six-hour cooldown, with unseen users preferred. Ordinary Feed completions are never treated as rating votes.

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

On the first structurally valid attempt at a quest specifically assigned for rating, users must choose one of eleven values (ranging from 0 to 10). The vote is recorded even if the answer itself is rejected: rating measures the quest experience, while Quest Bounty and Mining Points still require a correct completion. The vote cannot be changed, and later retries do not show the rating control. The control is never shown for ordinary completions. After the system collects the selected league and Hall quorums, the final quest rating is calculated from their weighted segment averages.

{% hint style="info" %}
For more details on the final rating results, see the author's [Karma](../creation/karma.md) article.
{% endhint %}

In most cases, the comparison rating is fractional. Mining Boost uses that exact value rather than rounding it to an integer:

$$\Delta Boost = 0.002 - 0.001 \times |Vote - ComparisonRating|$$

An exact match therefore adds `0.002` (`0.2%`), and every full rating point of distance lowers the adjustment by `0.001` (`0.1%`). Fractional distances produce proportional results: for example, a distance of `0.4` adds `0.0016`. Adjustments are stored to the nearest `0.0001` of Mining Boost. To prevent a voter from moving the target toward their own answer, canonical voters are compared with a leave-one-out consensus calculated without their own vote. If removing a lone vote leaves no independent comparison at all, that vote produces no Boost change.

If another miner fills the segment quorum while the overall rating round is still open, an already issued assignment may submit a late non-canonical vote. That vote is excluded from the rating distribution and receives its Boost adjustment only when consensus is published. Once the final rating is published, the round accepts no new votes and applies no new Boost changes. An unvoted assignment remains redeemable until its original expiry and keeps the promised completion reward, but no longer asks for a rating.

After publication, every authenticated voter can click a rating-distribution bar in their rating history to see the names and avatars of the canonical users counted in that bar. Voter identities and the distribution remain hidden while the round is open.

To motivate users to vote for edge cases (0 and 10), a vote of `0` receives `+0.003` when the comparison rating is between `0` and `1`, and a vote of `10` receives `+0.003` when it is between `9` and `10`.&#x20;

While the Mining Boost parameter cannot go negative, it can go to zero, which cancels out the amount of Mining Points a user can earn from any quest.

On the other hand, Mining Boost is capped, and the upper limit increases by 0.01 with each level. Thus, a level 100 user can have a maximum Mining Boost of 2, but to achieve this, a miner would have to have rated a lot of quests in line with the majority.

As a result, correct estimating of quest rating becomes one of the key factors for the success of quest miners in the long run.&#x20;

{% hint style="info" %}
Even if a user avoids unrated quests and takes no risks, the higher the league, the more he will underperform against those who keep their Mining Boost as high as possible.
{% endhint %}

***

### Loot Boxes

Lootboxes are the live source of RPG clothing items. Common Lootboxes can currently be opened with Gold. Collecting a full weekly Chest Shard set will also award a Common Lootbox once quest-completion shard rewards are connected.

{% hint style="info" %}
A user can collect a full weekly set of Chest Shards an unlimited number of times during a week. Next week, however, a new set will be released, making any unused shards from the previous week obsolete.
{% endhint %}

Lootbox rarity is a floor. A Common Lootbox creates Common or better clothing. A higher-rarity lootbox creates clothing at that rarity or better.

Common Lootboxes use a turn-based card opening. The [Luck Cards](rpg-attributes/luck.md#cards) trait increases the number of turns, which creates more chances to receive item cards before the opening ends.

Higher-rarity lootboxes do not use the Common card flow. They open directly and create one clothing item at their rarity floor or higher.

{% hint style="info" %}
The [Luck](rpg-attributes/luck.md) attribute matters both for Common Lootbox openings and for completing Chest Shard sets.
{% endhint %}
