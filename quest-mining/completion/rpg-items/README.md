---
icon: box-open-full
---

# RPG Items

There are several types of RPG items in Questfall, and each of them plays an important role in the user's overall performance, depending on the strategy chosen.

{% hint style="info" %}
Although there are only three types of RPG items in Questfall v.1, there will be more in [future releases](../../../roadmap/future-versions.md). For example, Elixirs, Spellbooks, Mana Potions and Warriors are already scheduled to be implemented.
{% endhint %}

* [Clothing](items.md) enhances every aspect of a character, from mining power to marketplace fees.
* [Potions](potions.md) allow users to instantly restore resources that are replenished over time, such as stamina.&#x20;
* [Gems](gems.md) allow users to increase the rarity of other RPG items that have levels, such as Clothing.

Every RPG item in Questfall has a rarity - the rarer the item, the more powerful it is. In addition to rarity, some types of items are levelable, or have levels that can be upgraded. While level-less items (Potions, Gems) are consumed when used, levelable items (Clothing) can be used and then sold for use by someone else.

All items except Gems are initially issued from loot boxes, which can be obtained for free by completing quests or purchased with [Gold](../../../assets/gold.md). And until the item is used, it adds a certain amount of weight to the user's inventory, depending on its level (if applicable), rarity tier, and individual density factor.

{% hint style="info" %}
The weight of levelable items is calculated using the following formula:\
$$Weight=100*Rarity^2*\sqrt{Level}*Density$$

For level-less items, the weight is calculated using the following formula:\
$$Weight=100*Rarity^3*Density$$
{% endhint %}

***

### Item Rarity

Every RPG item in Questfall falls into one of six rarity tiers. The rarity of an item literally means how rare it is, so the rarer the item, the lower the chance of getting it from loot boxes. And since rarer items tend to be more powerful, they should also be more expensive on the marketplace.

In general, each subsequent tier is ten times less likely to be found in a loot box. However, some types of RPG items, such as Potions, may have a different drop rate, and some types, such as Gems, are not available in loot boxes at all and have their own distribution system.

<table><thead><tr><th width="170">Rarity</th><th width="145" align="center">In Formulas</th><th width="142" align="center">Drop Rate</th></tr></thead><tbody><tr><td>Common (F)</td><td align="center">1</td><td align="center"><span class="math">\frac{9}{10}</span></td></tr><tr><td>Uncommon (E)</td><td align="center">2</td><td align="center"><span class="math">\frac{9}{100}</span></td></tr><tr><td>Rare (D)</td><td align="center">3</td><td align="center"><span class="math">\frac{9}{1,000}</span></td></tr><tr><td>Epic (C)</td><td align="center">4</td><td align="center"><span class="math">\frac{9}{10,000}</span></td></tr><tr><td>Legendary (B)</td><td align="center">5</td><td align="center"><span class="math">\frac{9}{100,000}</span></td></tr><tr><td>Mythical (A)</td><td align="center">6</td><td align="center"><span class="math">\frac{9}{1,000,000}</span></td></tr></tbody></table>

Unlike many common RPG systems, Questfall allows users to [evolve](../rpg-attributes/crafting.md#evolving) the rarity tier of items. Items without levels (Potions, Gems) can only be evolved by merging multiple identical items. Items with levels (Clothing), on the other hand, can only be evolved by consuming Gems.

{% hint style="info" %}
In [future versions](../../../roadmap/future-versions.md), several new types of RPG items will be implemented, but these two evolution principles will remain the same.
{% endhint %}

Low rarity items (F,E,D) are traded on the [marketplace](../../../infrastructure/marketplace.md) for Gold and could not be taken out of the system as NFT. In contrast, higher rarity items (C,B,A) are traded for QFT and can be transferred to the chain as NFT. This approach allows users who focus on crafting and trading strategies to extract value from the system apart from mining.

***

### Item Level

Users can [upgrade](../rpg-attributes/crafting.md#upgrading) RPG items that have levels up to their own [level](../levels.md). This way, as users progress through levels, they can upgrade the items they use to make them more powerful.

With each level, however, an item becomes not only more powerful, but also heavier, draining more stamina if equipped or consuming the inventory weight limit if not.

{% hint style="info" %}
In Questfall v.1, only Clothing has levels, but more levelable items, such as Warriors, will be added later.
{% endhint %}

In most RPGs, a user's level is a threshold that prevents them from equipping or using items of a higher level than their character. In Questfall, this is not the case, as users can use items regardless of their level.

For example, users can equip clothing above their own level that they have obtained from loot boxes or the [marketplace](../../../infrastructure/marketplace.md). However, the power of the item will be reduced in proportion to the level gap.

The core idea behind the levels in Questfall is not to create a barrier, but rather to create a constant demand for low-level items, which is achieved through Essence. This is a non-tradable resource that can only be obtained by [scrapping](../rpg-attributes/crafting.md#scrapping) other RPG items, and is required for item upgrades or evolution.

{% hint style="info" %}
For more information, see the [Crafting](../rpg-attributes/crafting.md) attribute article.
{% endhint %}

In addition to Essence, rarity also plays an important role in the leveling of items, as it determines how much the item will increase in power with each subsequent level. This is better explained with an example.

Let's say there is an item that gives +1% to an effect for rarity F and +2% for rarity E. So item F at level 10 gives +10%. When the item is evolved to the next rarity E, the bonus increases to +2% per level, but it will only apply to the next level upgrades.&#x20;

In other words, an increase in the level of an item fixes its power. So the bonus for the first 10 levels when the item was of rarity F is set in stone forever. If the item is evolved to rarity E at level 10 and further evolved to level 11, its bonus will be +12% (10% + 2%), not +22%.

In this way, identical high-level items can have very different power depending on the level at which their rarity was evolved. Therefore, users can either ruin items by evolving them late, or they can craft a perfect item by evolving its rarity while it is still at the first level.
