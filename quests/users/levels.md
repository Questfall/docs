---
icon: stairs
---

# Levels

In Questfall, level is a key characteristic of users who complete quests, which heavily influences many aspects of the quest mining:

* Level determines which [league](leagues.md) a user belongs to, allowing a higher level user to mine [rewards](../authors/rewards.md) with less competition.&#x20;
* Each level grants one attribute point, which can be used to improve any of a [character's attributes](attributes/).&#x20;
* The level of [clothing](items/clothing.md) items is limited by the user's level, so progressing through the levels allows for clothing upgrades.
* Level increases the weight of a user's vote in [community moderation](../moderators/) decisions and [quest ratings](../authors/karma.md).

{% hint style="info" %}
When a user advances to the next level, resources that can be replenished with potions, such as stamina, are fully restored.
{% endhint %}

While in most RPGs it is common to earn XP for leveling up directly, in Questfall there is an intermediate asset - [Silver](../../assets/silver.md) - which allows to buy XP. This is because community moderation, which is rewarded with Silver, can be used not only by users who complete quests, but also by indie authors who want to promote their quests and be rewarded for doing so.

As a result, the model is a bit more complex than in most RPG systems, as there are two ways to get Silver (burning Gold or community moderation) and two ways to spend it (either paying for XP or paying for [Quest Bounties](../authors/quest-bounty.md)).

{% hint style="info" %}
When miners buy XP or authors pay for Quest Bounties, the Silver is burned.
{% endhint %}

### Leveling Up

Newly registered users start at level 1, and to advance to higher levels, they must gain XP by burning Silver. Each level requires more XP than the previous one, specifically, to get to level 2, a user would need 1000 XP, and with each subsequent level, the amount of XP required would increase by 1000 XP.

{% hint style="info" %}
The amount of XP required to advance to the next level can be calculated using the following formula:\
$$XP_{level}=1000*(Level-1)$$
{% endhint %}

<table><thead><tr><th width="97" align="center">Level</th><th width="106" align="center">XP Level</th></tr></thead><tbody><tr><td align="center">2</td><td align="center">1,000</td></tr><tr><td align="center">3</td><td align="center">2,000</td></tr><tr><td align="center">4</td><td align="center">3,000</td></tr><tr><td align="center">5</td><td align="center">4,000</td></tr></tbody></table>

Since each level requires more XP than the previous one, the total XP required to reach higher levels from the first level increases exponentially.

{% hint style="info" %}
To calculate the total amount of XP needed to reach a given level from level 1, the following formula can be used:\
$$XP_{total}=1000*\frac{Level^2-Level}{2}$$
{% endhint %}

<table><thead><tr><th width="97" align="center">Level</th><th width="138" align="right">XP Total</th></tr></thead><tbody><tr><td align="center">2</td><td align="right">1,000</td></tr><tr><td align="center">5</td><td align="right">10,000</td></tr><tr><td align="center">10</td><td align="right">45,000</td></tr><tr><td align="center">25</td><td align="right">300,000</td></tr><tr><td align="center">50</td><td align="right">1,225,000</td></tr><tr><td align="center">100</td><td align="right">4,950,000</td></tr><tr><td align="center">250</td><td align="right">31,125,000</td></tr><tr><td align="center">500</td><td align="right">124,750,000</td></tr></tbody></table>

### Purchasing XP

Although the increasing amount of XP needed to reach each next level is common to all RPG systems, this approach motivates users to level up multiple accounts at once if possible. In other words, the diminishing return on invested XP provokes Sybil attacks.

In Questfall, to prevent such a threat, XP can only be obtained with Silver, and the price decreases for each XP purchased during a week.

{% hint style="info" %}
The protection is based on a simple mathematical inequality:\
$$(a+b)^p>a^p+b^p$$, if p>1
{% endhint %}

The decrease in the XP price means that the more XP a user buys in a week, the lower the average price will be. This also motivates users to burn as much Silver as possible over the course of a week.

{% hint style="info" %}
Users can pay for XP not only in Silver, but also in Gold or QFT, but under the hood, QFT is converted to Gold, while Gold is converted to Silver to be burned immediately for XP.
{% endhint %}

For example, the first 1000 Silver will return 200 XP, another 1000 Silver during the week will return an additional 228 XP, another 1000 Silver will return 240 XP, and so on. At the beginning of a new week, the XP price will be reset and the user will start again with 200 XP for 1000 Silver.

{% hint style="info" %}
The amount of XP that can be purchased for a given amount of Silver during a week can be calculated using the following formula:\
$$XP=0.1*Silver_{week}^{1.1}$$
{% endhint %}

<table><thead><tr><th width="139">Silver</th><th width="118" align="right">USD equiv.</th><th width="117" align="right">XP</th><th width="139" align="right">XP per Silver </th></tr></thead><tbody><tr><td>100</td><td align="right">$0.1</td><td align="right">16</td><td align="right">0.16</td></tr><tr><td>1,000</td><td align="right">$1</td><td align="right">200</td><td align="right">0.20</td></tr><tr><td>10,000</td><td align="right">$10</td><td align="right">2,512</td><td align="right">0.25</td></tr><tr><td>100,000</td><td align="right">$100</td><td align="right">31,623</td><td align="right">0.32</td></tr><tr><td>1,000,000</td><td align="right">$1,000</td><td align="right">398,107</td><td align="right">0.40</td></tr><tr><td>10,000,000</td><td align="right">$10,000</td><td align="right">5,011,872</td><td align="right">0.50</td></tr></tbody></table>

As a result, not only does spreading resources across accounts become a losing strategy, but users are also motivated to spend as much Silver as possible to level up. For example, one of the winning strategies will be to accumulate Silver and then spend it all at once.

{% hint style="info" %}
Spending $1000 on a new account will get the user to level 28, while splitting it in half between two different accounts will get them both to level 19. This will put a single user in League II, while two accounts will end up in League I.
{% endhint %}
