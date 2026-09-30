---
icon: flask-round-potion
---

# Potions

Stamina Potions are consumable inventory items with six rarities and no levels.
The complete cycle is implemented locally; production availability follows the
application/backend release.

## Acquisition

Only **Common Boxes** can contain potions. The current saved setting gives each item
card an independent **1% potion / 99% clothing** roll. Admin can change this
chance and the rarity frequencies in **System → Lootboxes**. Cards earned through the
Cards trait use the same roll. Uncommon through Mythical Boxes always give
clothing, so potions never replace their equipment rewards. A saved revision
affects newly generated openings; existing card sessions keep their saved contents.

The potion branch has its own rarity distribution, independent of clothing.
Values below match the [dated settings snapshot](../../../assets/economy-settings.md#lootboxes-and-potions):

| Rarity | Frequency | Base restore (% of Maximum Stamina) | Weight | Merge Essence fee |
| --- | ---: | ---: | ---: | ---: |
| Common F | 1 | 10% | 100 g | 10 |
| Uncommon E | 2.5 | 30% | 174 g | 20 |
| Rare D | 6.25 | 90% | 241 g | 40 |
| Epic C | 15.625 | 270% | 303 g | 80 |
| Legendary B | 39.0625 | 810% | 362 g | 160 |
| Mythical A | 97.65625 | 2430% | 419 g | — |

**Frequency** has the same direction in both branches: larger values make a
rarity less likely. Potion frequencies support decimals; their conditional chance
is `(1 / frequency) / sum(1 / frequency)` across enabled rarities. A potion
frequency of `0` disables that rarity. The values above preserve the original
weight ratio `3125:1250:500:200:80:32`. Conditional chances are approximately 60.25%,
24.10%, 9.64%, 3.86%, 1.54%, and 0.62%. Multiply by the current Common-box
potion chance for the chance per won item card. Clothing rarity frequencies are
also configurable in the same Admin screen and apply above each box's rarity floor.
Admin shows only Common Box as the shared configuration. Higher boxes exclude
lower clothing rarities and recalculate their chances from the same settings;
there are no separate editable policies per box. Clothing frequencies retain
their existing positive-integer scale and integer ticket calculation.

New policy revisions store `potion_frequencies`. Historical revisions with
`potion_weights` are read as `maximum_weight / weight` (zero stays disabled),
preserving their probabilities and leaving the original records intact.
The item distribution is not the number of boxes earned per quest:
shard collection, Cards, and bonus-box rewards remain their existing mechanics.

## Consumption and Absorption

Drinking consumes one owned potion from inventory and restores:

```text
ceil(Maximum Stamina × base_restore_percent / 100 × (1 + Absorption_bonus / 100))
```

The server quotes the actual amount for the current character. Drinking is allowed
only while current Stamina is **strictly below 100%**. At 100% or during overflow,
the potion stays in inventory and the server rejects consumption, including a
request made with an earlier quote. One allowed drink can still restore the full
amount beyond Maximum Stamina. Above the maximum, ordinary recovery pauses and overflow
loses **25% of Maximum Stamina per hour**. Quest actions also spend overflow.
There is no extra cap on the potion's effect.

One Mythical potion from empty gives 24.3 reserves before Absorption. With no
further actions, its overflow lasts **93.2 hours**. Storing the potion avoids
starting this decay; drinking it creates an incentive to use the recovered Stamina.

## Merging

The current saved recipe merges two owned Stamina Potions of the same rarity into one of the
next rarity. Admin **Crafting → Merge** can configure the count (2–100), separately
for every rarity transition and independently from Gems and Dice. The result always has three times the power of one source
potion: **50% more than the combined inputs** at the default count of two.
Changing the count does not scale the result or the base Essence fee. The table's Essence fee is multiplied by the current Merging remaining
cost percentage, then rounded up. No random Luck discount applies to potion merging.

At the default count of two, from Common ingredients total base fees are 10 / 40 / 120 / 320 / 800 Essence for
E / D / C / B / A, using 2 / 4 / 8 / 16 / 32 Common potions respectively. Drops of
higher-rarity ingredients shorten that chain. These totals exclude the price of
the ingredients and include no Merging discount.

Potions have no levels, equipment slot, Aspect, perks, Upgrade, Evolve or Scrap.
A potion listed on the Marketplace must first be cancelled before it can be
consumed or merged. Merging and consumption are atomic: retrying cannot consume
the same ingredient or potion twice.

## Marketplace and balance

All potion rarities trade for Gold through the ordinary item Marketplace,
including its existing slots, fees and proceeds claims. Inventory displays Potions,
Gems and Dice together in **Consumables**, with separate stacks by type and rarity.
QFT trading remains separate future work.

There is no fixed Gold ↔ Essence ↔ Stamina exchange rate. A Common Box costs
100 Gold, but may give clothing or a potion; free boxes also come through existing
reward sources. The value of the ingredients, the player's Maximum Stamina,
Absorption, Merging and overflow actually used all affect the effective cost.

Per 1000 **won Common-box item cards**, the expected outputs are 990 clothes and
10 potions. Drinking those potions directly supplies about 5.982 full reserves
before Absorption. Pooling every ingredient into Mythicals gives a theoretical
16.878 reserves for 348.034 base merge Essence. Pooling assumes fractional expected
counts across a large population, available Essence and full use of the effect;
it is not a guaranteed individual return or a free supply per quest.

A new unequipped character has 2208 Stamina, recovers 4.6/min and pays a base
32 per valid quest attempt. The continuous-rate estimate at one attempt/minute is
81 minutes. A discrete simulation with the first submission at time zero and
integer recovery between submissions reaches the first blocked attempt at minute
78. Both meet the beginner 1–2 hour target. Higher-level equipment increases pressure; Efficiency, Relief,
Reserve, Recovery, Absorption and potion purchases remain meaningful choices.
The 1–2 hour target is a starting-character anchor, not a cap imposed on all builds.

Runtime values: `questfall-pocketbase/src/catalog/potions.imba` and
`src/rpg/system-values.imba`. Reproduce the economic anchors with
`bun run balance:potions` in the backend repository.
