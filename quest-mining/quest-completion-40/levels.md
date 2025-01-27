---
icon: stairs
---

# Levels

In Questfall, level is a key characteristic of users who complete quests. Level determines which league a user belongs to, allowing a higher level user to mine with less competition. Each level grants one attribute point, which can be used to improve any of a character's attributes. Finally, level increases the weight of a user's vote in community moderation decisions and quest ratings.

While in most RPGs it is common to earn XP for leveling up directly, in Questfall there is an intermediate asset - [Silver](../../assets/Silver-in-game.md) - which allows to buy XP. This is because community moderation, which is rewarded with Silver, can be used by indie authors who want to promote their quests and be rewarded for doing so, rather than leveling up to earn rewards for completing quests.

As a result, the model is a bit more complex than in most RPG systems, as there are two ways to get Silver - burning Gold or community moderation - and two ways to spend it - either paying for XP or paying for [Quest Bounties](../quest-creation-10/quest-bounty.md).

{% hint style="info" %}
When miners buy XP or authors pay for Quest Bounties, the Silver is burned.
{% endhint %}

### Leveling Up

Newly registered users start at level 1, and to advance to higher levels, they must gain XP by burning Silver. Each level requires more XP than the previous one, specifically, to get to level 2, a user would need 1000 XP, and with each subsequent level, the amount of XP required would increase by 1000 XP.

{% hint style="info" %}
The amount of XP required to advance to the next level can be calculated using the following formula: $$XP_{level}=1000*(Level-1)$$
{% endhint %}

<table><thead><tr><th width="97" align="center">Level</th><th width="106" align="center">XP Level</th></tr></thead><tbody><tr><td align="center">2</td><td align="center">1,000</td></tr><tr><td align="center">3</td><td align="center">2,000</td></tr><tr><td align="center">4</td><td align="center">3,000</td></tr><tr><td align="center">5</td><td align="center">4,000</td></tr></tbody></table>

Although the amount of XP required to level up increases linearly with level, the total amount of XP required to reach a given level increases exponentially. In other words, the higher the level, the faster the amount of XP required to reach it increases.

{% hint style="info" %}
To calculate the total amount of XP needed to reach a given level from level 1, the following formula can be used: $$XP_{total}=1000*\frac{Level^2-Level}{2}$$
{% endhint %}

<table><thead><tr><th width="97" align="center">Level</th><th width="123" align="center">XP Total</th></tr></thead><tbody><tr><td align="center">2</td><td align="center">1,000</td></tr><tr><td align="center">5</td><td align="center">10,000</td></tr><tr><td align="center">10</td><td align="center">45,000</td></tr><tr><td align="center">25</td><td align="center">300,000</td></tr><tr><td align="center">50</td><td align="center">1,225,000</td></tr><tr><td align="center">100</td><td align="center">4,950,000</td></tr><tr><td align="center">250</td><td align="center">31,125,000</td></tr><tr><td align="center">500</td><td align="center">124,750,000</td></tr></tbody></table>

### Purchasing XP

Silver can be obtained directly by burning Gold, which in turn is only given out for burned QFT. This way, miners with money can immediately buy any level they want. And while this is not a real threat, but rather brings value to the entire community, it is still not fair.

To make the system more balanced between effort and wallet, not only does the amount of XP required for each next level increase, but the price of XP in Silver also increases with each XP point purchased during the week.

{% hint style="info" %}
Users can pay for XP not only in Silver, but also in Gold or QFT, but under the hood, QFT is converted to Gold, while Gold is converted to Silver to be burned immediately. And since there is no specific balance where XP can be stored, every point of XP purchased is immediately spent on leveling up.
{% endhint %}

The growth of the XP price means that the more XP a user buys in a week, the higher the average price will be. This also implies that a user who progresses slowly will spend much less silver to reach the same level as a user who progresses quickly.

{% hint style="info" %}
The amount of XP that can be purchased for a given amount of Silver during a week can be calculated using the following formula: $$XP=100*\sqrt{Silver_{week}}$$
{% endhint %}

For example, if a user spends 100 Silver to buy XP, he will receive 1000 XP. However, if he spends another 100 Silver during the week, he will receive an additional 414 XP, another 100 Silver will bring 318 XP, and so on. At the beginning of a new week, the XP price will be reset and the user will receive 1000 XP for 100 Silver again.

<table><thead><tr><th width="108" align="center">Silver</th><th width="118" align="center">USD equiv.</th><th width="117" align="center">XP</th><th width="139" align="center">XP per Silver </th></tr></thead><tbody><tr><td align="center">100</td><td align="center">$0.1</td><td align="center">1,000</td><td align="center">10.00</td></tr><tr><td align="center">1,000</td><td align="center">$1</td><td align="center">3,162</td><td align="center">3.16</td></tr><tr><td align="center">10,000</td><td align="center">$10</td><td align="center">10,000</td><td align="center">1.00</td></tr><tr><td align="center">100,000</td><td align="center">$100</td><td align="center">31,623</td><td align="center">0.32</td></tr><tr><td align="center">1,000,000</td><td align="center">$1000</td><td align="center">100,000</td><td align="center">0.10</td></tr></tbody></table>

As a result, a user who distributes Silver over 10 weeks will receive the same amount of XP as a user who spends 10 times more Silver in one week.
