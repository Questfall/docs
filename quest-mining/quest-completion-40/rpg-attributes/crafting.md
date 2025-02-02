---
icon: hammer
---

# Crafting

Crafting involves three types of actions: breaking down items (scrapping), increasing the level of items (upgrading), and making items rarer (evolving). All three aspects of crafting benefit from investing stat points in the Crafting attribute.

***

### Scrapping

Any RPG item can be disassembled for Essence. The higher the level and rarity of the item, the more Essence is gained from disassembling it.

{% hint style="info" %}
Since Essence does not take up inventory space, disassembling items is one of the ways to free up inventory.
{% endhint %}

Another parameter that affects the amount of Essence gained from items is the Crafting attribute. The higher is the Crafting attribute the more Essence a user will gain from the same item.

For example, a user with a Crafting of 0 will gain 200 Essence from a level 10 E item. A user with a Crafting of 100 will gain 317 Essence from the same item.

{% hint style="info" %}
The amount of Essence the item will yield is calculated using the formula below: $$Essence=10*Rarity*Level*(Crafting+1)^{0.1}$$
{% endhint %}

While this may not seem like much of an advantage, there are two other factors to consider. First, the higher the level of the item, the greater the absolute difference. The level 100 item E will gain 3172 Essence with Crafting 100, which is 1172 more than with Crafting 0.

Second, and more importantly, with more points in the Crafting attribute, not only does the amount of Essence gained from scrapping increase, but the amount of Essence needed to upgrade or evolve decreases at the same time.

***

### Upgrading

Users can upgrade their items up to their own level, so if Alice is level 50, she can also upgrade her clothes up to level 50. As a result, when users level up, they need to upgrade all of their items, except for higher-level items purchased from the market, in order to have maximum performance.

{% hint style="info" %}
In Questfall v.1, only clothing has levels that can be increased, but in [future versions](../../../roadmap/future-versions.md), new types of items will appear that have levels, such as [Warriors](../../../roadmap/future-versions.md#warfare).
{% endhint %}

Items can only be upgraded with Essence, the only source of which is the item scrap. This creates a constant demand for low level or weak items. The amount of Essence required to upgrade a particular item is determined by the current and target levels, the rarity, and the Crafting attribute.

{% hint style="info" %}
The amount of Essence required to upgrade an item to the next level: $$Essence_{k−>k+1}=10∗Rarity∗Level_k∗(Crafting+1)^{−0.1}$$

The more general formula, which implies that the user will use the same amount of Essence upgrading level by level or several levels at once, is as follows: $$Essence_{k−>n}=5∗(Level_n−Level_k)∗(Level_n+Level_k−1)∗Rarity∗(Crafting+1)^{−0.1}$$
{% endhint %}

In general, if the Crafting attribute is 0, it is necessary to scrap an item of the same rarity and level in order to level up an item by one level. Therefore, the Crafting attribute is crucial for leveling many items with a limited number of items to scrap, as it noticeably increases the efficiency of Essence usage.

***

### Evolving

In Questfall, there are two main ways to increase the rarity of an item, depending on its type. If items do not have levels, they can only be evolved by merging several equal items. If items have levels and can be upgraded, they can only be evolved by consuming Gems.&#x20;

{% hint style="info" %}
In Questfall v.1, [clothing](../items.md) can only be evolved using Gems, while [potions](../rpg-items/potions.md) can be evolved by merging two identical bottles. In [future versions](../../../roadmap/future-versions.md), several new types of RPG items will be implemented, but these two evolution principles will remain the same.
{% endhint %}

While evolving by merging only requires common RPG items that can be obtained from [loot boxes](../loot-boxes.md), evolving an item with levels would require a [Gem](../rpg-items/gems.md). Initially, Gems can only be obtained by participating in the [Liquidity Program](../../../infrastructure/liquidity-providers.md), where each Crafting point increases the chances of obtaining more rare Gems.

To evolve, a user needs a Gem of the same rarity as the item to be evolved. For example, to evolve boots from rarity F to rarity E, a user would need a Gem of rarity F.

{% hint style="info" %}
In this way, users can buy items and Gems of the same rarity on the marketplace with Gold, evolve them, and when an item reaches rarity C, it can be sold for QFT.
{% endhint %}

In both cases, a user will need Essence to evolve an item, either by merging or by using a Gem. However, the amount of Essence required is calculated differently.&#x20;

The amount of Essences needed for merging depends on the rarity of the item, while for evolving with a Gem it depends on the current level of the item. Obviously, the Crafting attribute reduces the amount of Essence required to evolve an item in both cases.

{% hint style="info" %}
The Essence required for merging: \
$$Essence_{r->r+1}=5*Rarity_{r+1}*(Rarity_{r+1}-1)*(Crafting+1)^{-0.5}$$

The Essence required to evolve with a Gem:\
$$Essence_{r->r+1}=5*Level*(Level-1)*(Crafting+1)^{-0.5}$$
{% endhint %}
