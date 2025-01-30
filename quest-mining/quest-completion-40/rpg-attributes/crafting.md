---
icon: hammer
---

# Crafting

Crafting involves three types of actions: breaking down items (scrapping), increasing the level of items (upgrading), and making items rarer (evolving). All three aspects of crafting benefit from investing stat points in the Crafting attribute.

### Scrap for Essence

Any RPG item can be disassembled for Essence. The higher the level and rarity of the item, the more Essence is gained from disassembling it.

{% hint style="info" %}
Since Essence does not take up inventory space, disassembling items is one of the ways to free up inventory.
{% endhint %}

In fact, since level and rarity make up the weight of the item, the amount of Essence gained from a disassembled item is directly determined by its weight. The heavier the item, the more Essence it will yield. Another parameter that affects the amount of Essence gained from items is the Crafting attribute.

{% hint style="info" %}
The amount of Essence the item will yield is calculated using the formula below: $$Essence=Weight_{item}*\sqrt{Crafting_{user}+1}$$
{% endhint %}

This way, a user with a Crafting of 0 will gain 100 Essence from an item weighing 100 grams, while a user with a Crafting of 48 will gain 700 grams from the same item.

### Upgrade with Essence

Users can upgrade their items up to their own level, so if Alice is level 50, she can also upgrade her clothes up to level 50. As a result, when users level up, they need to upgrade all of their items, except for higher-level items purchased from the market, in order to have maximum performance.

{% hint style="info" %}
In Questfall v.1, only clothing has levels that can be increased, but in [future versions](../../../roadmap/future-versions.md), new types of items will appear that have levels, such as [Warriors](../../../roadmap/future-versions.md#warfare).
{% endhint %}

Items can only be upgraded with Essence, the only source of which is the item scrap. This creates a constant demand for low level or weak items. The amount of Essence required to upgrade a particular item is determined by the current and target levels, the rarity, and the Crafting attribute.

{% hint style="info" %}
The amount of Essence required to upgrade an item to the next (k+1) level: $$Essence=\frac{10*Level_{k}*Rarity}{\sqrt{Crafting+1}}$$

The more general formula, which implies that the user will use the same amount of Essence upgrading level by level or several levels at once, is as follows:\
$$Essence=\frac{5*(Level_n-Level_k+1)*(Level_n+Level_k-1)*Rarity}{\sqrt{Crafting+1}}$$
{% endhint %}

In general, if the Crafting attribute is 0, in order to upgrade an item, it is necessary to scrap the item of the same rarity and level (or many weaker items). Therefore, the Crafting attribute is crucial for leveling many items with limited number of items to scrap. as it noticeably increase the efficiency of Essence usage.

### Evolve with Gems



### Evolve by Merging



boosts the yield of Essence, gives an advantage when trading and obtaining Glyphs;
