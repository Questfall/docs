---
icon: hammer
---

# Crafting

Crafting involves three types of actions: breaking down items (scrapping), increasing the level of items (upgrading), and making items rarer (evolving). All three aspects of crafting benefit from investing stat points in the Crafting attribute.

## Scrapping

Any RPG item can be disassembled for Essence. The higher the level and rarity of the item, the more Essence is gained from disassembling it.

{% hint style="info" %}
Since Essence does not take up inventory space, disassembling items is one of the ways to free up inventory.
{% endhint %}

In fact, since level and rarity make up the weight of the item, the amount of Essence gained from a disassembled item is directly determined by its weight. The heavier the item, the more Essence it will yield. Another parameter that affects the amount of Essence gained from items is the Crafting attribute.

{% hint style="info" %}
The amount of Essence the item will yield is calculated using the formula below: $$Essence=Weight_{item}*(Crafting_{user}+1)^{0.5}$$
{% endhint %}

This way, a user with a Crafting of 0 will gain 100 Essence from an item weighing 100 grams, while a user with a Crafting of 48 will gain 700 grams from the same item.

## Upgrading

Users can upgrade their items up to their own level, so if Alice is level 50, she can also upgrade her clothes up to level 50. As a result, when users level up, they need to upgrade all of their items, except for higher-level items purchased from the market, in order to have maximum performance.

{% hint style="info" %}
In Questfall v.1, only clothing has levels that can be increased, but in [future versions](../../../roadmap/future-versions.md), new types of items will appear that have levels, such as [Warriors](../../../roadmap/future-versions.md#warfare).
{% endhint %}

Items can only be upgraded with Essence, the only source of which is the item scrap. This creates a constant demand for low level or weak items. The amount of Essence required to upgrade a particular item is determined by the current and target levels, the rarity, and the Crafting attribute.

{% hint style="info" %}
The amount of Essence required to upgrade an item to the next level: $$Essence_{k->k+1}=10*Level_{k}*Rarity*(Crafting+1)^{-0.5}$$

The more general formula, which implies that the user will use the same amount of Essence upgrading level by level or several levels at once, is as follows:\
$$Essence_{k->n}=5*(Level_n-Level_k)*(Level_n+Level_k-1)*Rarity*(Crafting+1)^{-0.5}$$
{% endhint %}

In general, if the Crafting attribute is 0, in order to upgrade an item, it is necessary to scrap the item of the same rarity and level (or many weaker items). Therefore, the Crafting attribute is crucial for leveling many items with limited number of items to scrap. as it noticeably increase the efficiency of Essence usage.

## Evolution

In Questfall, there are two main ways to increase the rarity of an item, depending on its type. If items do not have levels, they can only be evolved by merging several equal items. If items have levels and can be upgraded, they can only be evolved by consuming Gems.&#x20;

{% hint style="info" %}
In Questfall v.1, [clothing](../items.md) can only be evolved using Gems, while [potions](../rpg-items/potions.md) can be evolved by merging two identical bottles. In [future versions](../../../roadmap/future-versions.md), several new types of RPG items will be implemented, but these two evolution principles will remain the same.
{% endhint %}

In both cases, a user will also need Essence to cover the difference between the weights of the current rarity level and the new one.

{% hint style="info" %}
The Essence needed to evolve is calculated by the formula: $$Essence=(Weight_{rarity_{k+1}}-Weight_{rarity_{k}})*(Crafting+1)^{-0.5}$$
{% endhint %}

Evolving through merging only requires common RPG items that can be obtained from [loot boxes](../loot-boxes.md), and the Crafting attribute only reduces the amount of Essence.&#x20;

However, for evolving an item with levels a user would need a Gem of the current item rarity. For example, to evolve boots from rarity E to rarity D, a user would need a Gem of rarity E.&#x20;

{% hint style="info" %}
In this way, users can buy items and Gems of the same rarity on the marketplace with Gold, evolve them, and when an item reaches rarity C, it can be extracted as NFT and sold on the chain for QFT.
{% endhint %}

Initially, Gems can only be obtained by participating in the [Liquidity Program](../../../infrastructure/liquidity-providers.md), where each Crafting point increases the chances of obtaining more rare Gems.
