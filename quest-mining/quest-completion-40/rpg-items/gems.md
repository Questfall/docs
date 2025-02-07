---
icon: gem
---

# Gems

Level-less items, such as [potions](potions.md), of the same type and rarity are identical, so their evolution can be implemented as a simple merging. However, items with levels, such as [clothing](../items.md), are quite unique, and it is almost impossible to find two similar items.

To evolve such items, users need Gems, which are only issued as a reward for participating in the [Liquidity Program](../../../infrastructure/liquidity-providers.md), so they cannot be found in loot boxes. In that sense, Gems are special.

In all other respects, Gems are just like any other level-less items, such as potions. They can be [scrapped](../rpg-attributes/crafting.md#scrapping), sold on the on the [marketplace](../../../infrastructure/marketplace.md) for [Gold](../../../assets/gold-in-game.md) (F,E,D) or [QFT](../../../assets/questfall-tokens-qft.md) (C,B,A), their rarity can be [evolved](../rpg-attributes/crafting.md#evolving) through merging, and they take up [inventory](../rpg-attributes/inventory.md) space.

<table><thead><tr><th width="94" align="center">Rarity</th><th width="91" align="center">Weight </th><th width="107" align="center">Scrapping</th><th width="115" align="center">Evolving</th></tr></thead><tbody><tr><td align="center">F</td><td align="center">100g</td><td align="center">+11es</td><td align="center">-</td></tr><tr><td align="center">E</td><td align="center">373g</td><td align="center">+14es</td><td align="center">4xF+10es</td></tr><tr><td align="center">D</td><td align="center">806g</td><td align="center">+19es</td><td align="center">4xE+30es</td></tr><tr><td align="center">C</td><td align="center">1,393g</td><td align="center">+26es</td><td align="center">4xD+60es</td></tr><tr><td align="center">B</td><td align="center">2,128g</td><td align="center">+35es</td><td align="center">4xC+100es</td></tr><tr><td align="center">A</td><td align="center">3,009g</td><td align="center">+46es</td><td align="center">4xB+150es</td></tr></tbody></table>

{% hint style="info" %}
Scrapping and evolving values in the table are calculated for a Crafting attribute of 0, where 11es means 11 Essence. Weight is calculated based on: $$Density=Rarity^{-1.1}$$.
{% endhint %}

To evolve a rarity of an item, a user needs a Gem of the same rarity tier. For example, to evolve an item's rarity from F to E, a Gem F is required. To evolve item's rarity from E to D, a Gem E is needed. And so on.

{% hint style="info" %}
In addition to Gems, Essence is also [required](../rpg-attributes/crafting.md#evolving) to evolve the rarity tier.
{% endhint %}

A-rarity Gems are not used for evolving, as rarity tier A is the highest possible tier. Instead, a user can use them to reset any of the item's fixed effects to the desired one.

Since users only need Essence and Gems of the same rarity, they only need Gold to craft C-rarity items that can be sold for QFT, thus extracting in-game value from the system to the blockchain. In fact, because Gems themselves can be evolved through merging, items of any rarity can be crafted using only Gold.

***

### Gem Issuance

Although Gems can be purchased on the marketplace, they are initially created as a reward for participating in the Liquidity Program. In this program, users provide liquidity to the official swapping pool and then burn the LP tokens they receive. In return, they receive QFT and Gems.

While QFTs are awarded proportionally based on users' mining results, Gems are indivisible items that are distributed based on a leaderboard mechanic that prevents manipulation by multiple accounts.

{% hint style="info" %}
Learn more about QFT distribution in the [Liquidity Program](../../../infrastructure/liquidity-providers.md) article.
{% endhint %}

Every user who participates in the Liquidity Program during a week earns Gem Points, which are used to create the leaderboard. The amount of Gem Points earned depends on three factors: the amount of LP tokens burned for the program, the value of the [Crafting](../rpg-attributes/crafting.md) attribute, and how early in the week the LP tokens were burned.

{% hint style="info" %}
The amount of Gem Points earned per LP token burned: \
$$GPoints=LP*\sqrt{Crafting+1}*(1+e^{2*10^{-5}*(Second-3*10^5)})^{-1}$$
{% endhint %}

In this way, a user with higher Crafting who burns liquidity at the beginning of a new week will receive more points than a user who burns the same amount of LP tokens in the middle of the week, or who has a lower Crafting attribute.

The time factor discourages last-minute tampering, making it much more costly, especially for newly created accounts with a Crafting of 0. This allows users who really earn from crafting to get Gems without any hassle.

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
* It increases the value of the Crafting attribute.
* It prevents last-minute tampering.
