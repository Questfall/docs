---
icon: gem
---

# Gems

Level-less items, such as [potions](potions.md), of the same type and rarity are identical, so their evolution can be implemented as a simple merging. However, items with levels, such as [clothing](items.md), are quite unique, and it is almost impossible to find two similar items.

To evolve such items, users need Gems, which are only issued as a reward for participating in the [Liquidity Program](../../../infrastructure/liquidity-program.md), so they cannot be found in loot boxes. In that sense, Gems are special.

In all other respects, Gems are level-less RPG items. They can be sold on the [marketplace](../../../infrastructure/marketplace.md) for [Gold](../../../assets/gold.md) (F,E,D) or [QFT](../../../assets/qft.md) (C,B,A), and they take up [inventory](../rpg-attributes/items.md) space.

| Rarity | Weight |
| --- | --- |
| F | `100 g` |
| E | `373 g` |
| D | `806 g` |
| C | `1,393 g` |
| B | `2,128 g` |
| A | `3,009 g` |

{% hint style="info" %}
Gem scrapping and Gem-to-Gem evolution are still being finalized. Essence costs for using Gems to upgrade levelled item rarity are described in the [Crafting](../rpg-attributes/crafting.md#rarity) article. Weight is calculated based on: $$Density=Rarity^{-1.1}$$.
{% endhint %}

To evolve a rarity of an item, a user needs a Gem of the same rarity tier. For example, to evolve an item's rarity from F to E, a Gem F is required. To evolve item's rarity from E to D, a Gem E is needed. And so on.

{% hint style="info" %}
In addition to Gems, Essence is also [required](../rpg-attributes/crafting.md#evolving) to evolve the rarity tier.
{% endhint %}

A-rarity Gems are not used for evolving, as rarity tier A is the highest possible tier. Instead, a user can use them to maximize the [resonance](items.md#resonance) or one of the [perks](items.md#perks) of the clothing item.

Since users need Essence and Gems of the same rarity, Gem distribution is one of the key links between crafting, marketplace demand, and the Liquidity Program.

***

### Gem Issuance

Although Gems can be purchased on the marketplace, they are initially created as a reward for participating in the Liquidity Program. In this program, users provide liquidity to the official swapping pool and then burn the LP tokens they receive. In return, they receive QFT and Gems.

While QFT rewards are awarded proportionally to each user's share of burned liquidity, Gems are indivisible items that are distributed based on a leaderboard mechanic that prevents manipulation by multiple accounts.

{% hint style="info" %}
Learn more about QFT distribution in the [Liquidity Program](../../../infrastructure/liquidity-program.md) article.
{% endhint %}

Every user who participates in the Liquidity Program during a week earns Gem Points, which are used to create the leaderboard. The amount of Gem Points earned depends on the amount of LP tokens burned for the program, how early in the week the LP tokens were burned, and the user's [Trading Liquidity](../rpg-attributes/trading.md#liquidity) power.

$$GemPoints=RawLPPoints*TimeFactor*\frac{100+GemPointsPower}{100}$$

{% hint style="info" %}
`GemPointsPower` comes from the Trading `Liquidity` trait and related item grants. QFT liquidity rewards are separate; Liquidity affects only Gem Points.
{% endhint %}

In this way, a user who specializes in the relevant liquidity strategy and burns liquidity at the beginning of a new week should receive more points than a user who burns the same amount of LP tokens later in the week.

The time factor discourages last-minute tampering, making it much more costly, especially for newly created accounts without relevant RPG investment. This allows users who really support liquidity to get Gems without unnecessary friction.

The leaderboard is based on the Gem Points earned by users during the week. To prevent Sybil attacks, the leaderboard is divided into a top and bottom section based on the average amount of Gem Points earned by the top ten users. And the bottom section of the leaderboard is not eligible for Gem rewards.

{% hint style="info" %}
The division value for the leaderboard is calculated as follows: $$Division=(\sum_{u=10}^{1}0.1*GPoints_u)^{0.5}$$
{% endhint %}

The top section of the leaderboard is divided into 21 equal slices, grouped into 6 segments, and depending on which segment the user reaches, they will receive a Gem of particular rarity.

For example, let's say the lowest ranked user in the rewards section of the leaderboard has 1,000 Gem Points, while the highest ranked user has 22,000 Gem Points. This way the rewards section of the leaderboard will be divided by $$\frac{22,000-1,000}{21}=1,000$$ Gem Points.

<table><thead><tr><th width="125" align="center">Segment</th><th width="95" align="center">Start</th><th width="93" align="center">End</th><th width="100" align="center">Gem</th></tr></thead><tbody><tr><td align="center">6 parts</td><td align="center">1,000</td><td align="center">7,000</td><td align="center">F</td></tr><tr><td align="center">5 parts</td><td align="center">7,000</td><td align="center">12,000</td><td align="center">E</td></tr><tr><td align="center">4 parts</td><td align="center">12,000</td><td align="center">16,000</td><td align="center">D</td></tr><tr><td align="center">3 parts</td><td align="center">16,000</td><td align="center">19,000</td><td align="center">C</td></tr><tr><td align="center">2 parts</td><td align="center">19,000</td><td align="center">21,000</td><td align="center">B</td></tr><tr><td align="center">1 parts</td><td align="center">21,000</td><td align="center">22,000</td><td align="center">A</td></tr></tbody></table>

{% hint style="info" %}
For example, if Alice earns 12,500 Gem Points in a week, she will receive Gem D, while Bob with 19,100 Gem Points will receive Gem B.
{% endhint %}

This approach to Gem distribution has many advantages:

* It scales, so as Questfall becomes more popular, more Gems are issued to meet the growing demand.
* It prevents Sybil attacks by not rewarding relatively small amounts of burned liquidity.
* It forces competition among users, which results in more liquidity being added.
* It increases the value of the liquidity-focused strategy.
* It prevents last-minute tampering.
