---
icon: box-open-full
---

# RPG Items

There are several types of RPG items in Questfall, and each of them plays an important role in the user's overall performance, depending on the strategy chosen.

{% hint style="info" %}
Although there are only three types of RPG items in Questfall v.1, there will be more in [future releases](../../../roadmap/future-versions.md). For example, elixirs, spellbooks, mana potions and warriors are already scheduled to be implemented.
{% endhint %}

* [Clothing](../items.md) enhances every aspect of a character, from mining power to marketplace fees.
* [Potions](potions.md) allow users to instantly restore resources that are replenished over time, such as stamina.&#x20;
* [Gems](gems.md) allow users to increase the rarity of other RPG items that have levels, such as clothing.

Every RPG item in Questfall has a rarity - the rarer the item, the more powerful it is. In addition to rarity, some types of items are levelable, or have levels that can be upgraded. While level-less items (potions, gems) are consumed when used, levelable items (clothing) can be used and then sold for use by someone else.

All items except Gems are initially issued from loot boxes, which can be obtained for free by completing quests or purchased with [Gold](../../../assets/gold-in-game.md). And until the item is used, it adds a certain amount of weight to the user's inventory, depending on its level (if applicable) and rarity tier.

{% hint style="info" %}
The weight of levelable items is calculated using the following formula:\
$$Weight=100*Rarity^2*\sqrt{Level}$$

For level-less items, the weight is calculated using the following formula: $$Weight=100*Rarity^3$$
{% endhint %}

***

### Loot Boxes

While Gems are released into circulation through the [Liquidity Program](../../../infrastructure/liquidity-providers.md), all other RPG items are initially created through loot boxes, which can be opened by either spending 100 Gold ($1) or collecting a full weekly set of Chest Shards.

{% hint style="info" %}
As quests are completed, users receive random Chest Shards that, like a mosaic puzzle, make up a weekly set of up to 100 pieces. The [Luck](../rpg-attributes/luck.md) attribute increases the chance of receiving missing shards needed to complete another set, many of which can be collected over the course of a week.
{% endhint %}

By default, a loot box offers a single item based on a chance that depends on the rarity and level of the item. The higher the rarity or level, the lower the chance of receiving the item.

However, for every 10 points of Luck, a user increases the chance of getting one more item from the loot box. To illustrate, here is an example for a user with 30 Luck (3 extra turns, for a total of 4):

* **Turn 1**: The user is dealt 4 cards face down and must blindly choose one. All four cards contain items, so the user is guaranteed to receive an item after the first turn.
* **Turn 2**: The user is dealt 4 more cards. One card is a "finish" card, which ends the opening process, while the remaining three are item cards, which give the user one more item and continue the opening into the next turn.
* **Turn 3**: The user is dealt another 4 cards. This time, 2 out of the 4 cards are finish cards. Choosing a finish card will end the opening, leaving the user with two items won in previous turns.
* **Turn 4**: The user is dealt 4 cards for the last time. Only 1 card contains an item, while the other 3 are finish cards. Since a hypothetical fifth turn would consist entirely of finish cards, this is the last turn. If the user selects a finish card, he will end the loot box opening with a total of 3 items. But if the user selects the item card, he will receive 4 items in total.

As a result, the maximum number of items a user can potentially receive from a single loot box is equal to the number of turns granted by their Luck attribute. However, the actual number of items received will depend on the user's actual fortune.

This way, the Luck attribute does not directly affect the chance of getting rarer items, it just increases the chance of getting more items from a single loot box. However, this actually makes it more likely that a rarer item will be obtained because there is more room for chance to work.

***

### Item Rarity

The rarity of an item literally means how rare it is, so the rarer the item, the lower the chance of getting it from loot boxes. And since rarer items tend to be more powerful, they should also be more expensive on the marketplace.

Every RPG item in Questfall falls into one of six rarity tiers:

* Common (F);
* Uncommon (E);
* Rare (D);
* Epic (C);
* Legendary (B);
* Mythical (A).

{% hint style="info" %}
In formulas that use rarity, Common is considered 1, Uncommon is considered 2, and so on up to Mythical, which is considered 6.
{% endhint %}

Unlike many common RPG systems, Questfall allows users to [evolve](../rpg-attributes/crafting.md#evolving) the rarity tier of items. Items without levels (potions, gems) can only be evolved by merging multiple identical items. Levelable items (clothing), on the other hand, can only be evolved by consuming gems.

{% hint style="info" %}
In [future versions](../../../roadmap/future-versions.md), several new types of RPG items will be implemented, but these two evolution principles will remain the same.
{% endhint %}

Low rarity items (F,E,D) are traded on the [marketplace](../../../infrastructure/marketplace.md) for Gold and could not be taken out of the system as NFT. In contrast, higher rarity items (C,B,A) are traded for QFT and can be transferred to the chain as NFT. This approach allows users who focus on crafting and trading strategies to extract value from the system apart from mining.

***

### Item Level

Users can [upgrade](../rpg-attributes/crafting.md#upgrading) RPG items that have levels up to their own [level](../levels.md). This way, as users progress through levels, they can upgrade the items they use to make them more powerful.

Users can also use items that are above their own level if they get them from loot boxes or buy them from the marketplace. In this case, however, the item's power will be reduced in proportion to the level gap.

{% hint style="info" %}
In Questfall v.1, only clothing has levels, but more levelable items, such as warriors, will be added later.
{% endhint %}

Leveling up an item requires Essence - a non-tradable resource that can only be obtained by [scrapping](../rpg-attributes/crafting.md#scrapping) other RPG items. With each level, an item becomes not only more powerful, but also heavier, draining more stamina when equipped or consuming the inventory weight limit.

{% hint style="info" %}
This approach creates a constant demand for weak, low level, or common items because they can be salvaged to improve favorite items.
{% endhint %}

Rarity is very important when leveling up an item, as it determines how much the item will increase in power with each subsequent level. For example, if a user increases the rarity of a level 10 item from F to E, the power gained with those first 10 levels will be fixed forever. The new power increase due to the higher rarity will only be applied starting with the next level.

In this way, identical high-level items can have very different power depending on the level at which their rarity was evolved. In other words, users can either ruin items by evolving them late, or they can craft a perfect item by evolving its rarity while it is still at the first level.
