---
icon: hammer
---

# Crafting

Crafting involves three types of actions: breaking down items (scrapping), increasing the level of items (upgrading), and making items rarer (evolving).&#x20;

All three aspects of crafting benefit from investing stat points in the Crafting attribute.

***

### Scrapping

Any RPG item can be scrapped. Not only does this provide Essence for upgrading or evolving items, but since Essence has no weight, it is also one of the ways to free up inventory.

The higher the level and rarity of the item, the more Essence is gained from disassembling it.

{% hint style="info" %}
The amount of Essence gained from upgradable and level-less RPG items is calculated differently.
{% endhint %}

Another parameter that affects the amount of Essence gained from items is the Crafting attribute. The higher is the Crafting attribute the more Essence a user will gain from the same item.

For example, a user with a Crafting of 0 will gain 12 Essence from a level 10 E item. A user with a Crafting of 100 will gain 35 Essence from the same item.

{% hint style="info" %}
The amount of Essence the upgradable item will yield:\
$$Essence=floor(0.1*Rarity*Level +\sqrt{100+Crafting*Level})$$

The amount of Essence gained from the level-less item:\
$$Essence=floor(Rarity^2+\sqrt{100+Crafting*Rarity})$$
{% endhint %}

While this may not seem like much of an advantage, there are two other factors to consider.&#x20;

First, the higher the level of the item, the greater the effect. The level 100 item E will gain 30 Essence with Crafting 0, while the same item with Crafting 100 will gain 120 Essence, which is four times more, compared to three times the difference for the level 10 item.

Second, and more importantly, with more points in the Crafting attribute, not only does the amount of Essence gained from scrapping increase, but the amount of Essence needed to upgrade or evolve decreases at the same time.

***

### Upgrading

Users can upgrade their items up to their own level, so if Alice is level 50, she can also upgrade her clothes up to level 50. As a result, when users level up, they need to upgrade all of their items, except for higher level items purchased from the market or received from loot boxes, in order to have maximum performance.

{% hint style="info" %}
In Questfall v.1, only clothing has levels that can be increased, but in [future versions](../../../roadmap/future-versions.md), new types of items will appear that have levels, such as [Warriors](../../../roadmap/future-versions.md#warfare).
{% endhint %}

Items can only be upgraded with Essence, the only source of which is the item scrap. This creates a constant demand for low level or weak items. The amount of Essence required to upgrade a particular item is determined by the current and target levels, the rarity, and the Crafting attribute.

{% hint style="info" %}
The amount of Essence required to upgrade an item to the next level: $$Essence_{k−>k+1}=ceil(Rarity∗Level_k^2∗(Crafting*Level_k+100)^{−0.5})$$
{% endhint %}

In general, the higher the Crafting attribute, the greater the difference between the Essence gained from scrapping and the Essence needed to upgrade low level items. Therefore, the Crafting attribute is crucial for leveling a lot of items with a limited number of items to scrap, as it significantly increases the efficiency of the Essence usage.

***

### Evolving

In Questfall, there are two main ways to increase the rarity of an item, depending on its type. If items do not have levels, they can only be evolved by merging several equal items. If items have levels and can be upgraded, they can only be evolved by consuming Gems.&#x20;

{% hint style="info" %}
In Questfall v.1, [clothing](../items/clothing.md) can only be evolved using Gems, while [potions](../items/potions.md) can be evolved by merging two identical bottles.
{% endhint %}

While evolving by merging only requires common RPG items that can be obtained from loot boxes, evolving an item with levels would require a [Gem](../items/gems.md).

{% hint style="info" %}
Initially, Gems can only be obtained by participating in the [Liquidity Program](../../../infrastructure/liquidity-program.md), where each Crafting point increases the chances of obtaining more rare Gems.
{% endhint %}

To evolve, a user needs a Gem of the same rarity as the item to be evolved. For example, to evolve boots from rarity F to rarity E, a user would need a Gem of rarity F. In this way, users can buy items and Gems of the same rarity on the marketplace with Gold, evolve them, and when an item reaches rarity C, it can be sold for QFT.

In both cases, a user will need Essence to evolve an item, either by merging or by using a Gem. However, the amount of Essence required is calculated differently.&#x20;

The amount of Essences needed for merging depends on the rarity of the item, while for evolving with a Gem it depends on the current level of the item. Obviously, the Crafting attribute reduces the amount of Essence required to evolve an item in both cases.

{% hint style="info" %}
The Essence required for merging: \
$$Essence_{r->r+1}=5*Rarity_{r+1}*(Rarity_{r+1}-1)*(Crafting+1)^{-0.5}$$

The Essence required to evolve with a Gem:\
$$Essence_{r->r+1}=5*Level*(Level-1)*(Crafting+1)^{-0.5}$$
{% endhint %}
