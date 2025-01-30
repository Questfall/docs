---
icon: chart-simple
---

# Attributes

The common RPG approach assumes that users are represented by a character that becomes more powerful by investing stat points gained with each new level into pre-defined character attributes.

Questfall uses the same mechanic - users gain one stat point per [level](levels.md) and can use it to improve any of the following attributes:

* **Mining**: increases Mining Power and Stamina Reserve;
* **Inventory**: increases the weight limit of stored items;
* **Crafting**: boosts the yield of Essence, gives an advantage when trading and obtaining Gems;
* **Trading**: reduces marketplace fee, gives advantage on Gold withdrawal, adds marketplace slots;
* **Regen**: increases Stamina Reserve recovery rate;
* **Luck**: increases chance of getting missing chest shards and other bonuses, adds loot box cards.

{% hint style="info" %}
There are at least two more attributes waiting to be implemented in [future versions](../../roadmap/future-versions.md) of Questfall: Magic and Warfare.
{% endhint %}

Because users can allocate stat points to any attribute, they can focus on certain areas and gain specific benefits in those areas, customizing a character to fit their individual mining strategy.

Of course, users can make mistakes as their characters evolve, so when users join a new [league](leagues.md), they can redistribute attribute points once for free. However, any subsequent redistribution within that league will cost 1000\*LeagueCount amount of [Gold](../../assets/gold-in-game.md).

{% hint style="info" %}
The Hall is considered a tutorial and there is no cost for redistributing attribute points. In League I the cost is 1000 Gold ($10), in League II it is 2000 ($20), and so on.
{% endhint %}

***

## Mining Attribute

The Mining attribute increases parameters that make it easier to earn from completing quests. It increases both Mining Power and Stamina Reserve.

#### Mining Power

Mining Power is defined as a percentage and increases the reward for each quest completed, as it is used as one of the multipliers for the [Quest Bounty](../quest-creation-10/quest-bounty.md) set by the author. For example, if the author has set the Bounty to 100 and the user has 25% Mining Power, then the quest reward for that particular user will be 125 Mining Points.

{% hint style="info" %}
This does not take into account the [Mining Boost](./#mining-boost) parameter that can be gained by properly voting for new quest ratings.
{% endhint %}

Mining Power starts at 0% and increases by 1% with each point of the Mining attribute. So if a user invests 40 points in Mining, his Mining Power will be 40%. In addition to the Mining attribute, Mining Power can also be increased by equipping [clothing](items.md) with the appropriate effects.

#### Stamina Reserve

Stamina is consumed when a user completes a quest and is automatically restored over time. It acts as a rate limiter, preventing bots from completing thousands of quests per second and overloading the Questfall server.

In addition to its technical utility, stamina is part of an RPG system. A first-level character starts with a Stamina Reserve of 1000, and each point in the Mining attribute increases the Stamina Reserve linearly by 1000.

{% hint style="info" %}
The rate at which stamina regenerates over time is determined by the Regen attribute.
{% endhint %}

Stamina consumption is directly affected by the total weight of the clothing worn. The heavier the clothing, the more stamina is consumed.&#x20;

When not equipped, each quest consumes 10 stamina and each gram of equipped clothing increases the stamina required to complete a quest by 0.05. This forces the user to invest points in the Mining attribute, as the clothing becomes heavier upon leveling up.

{% hint style="info" %}
If the equipped clothing weighs 5 kg, the amount of stamina consumed per quest will be: $$10+5000*0.05=260$$.
{% endhint %}

***

## Inventory Attribute

Users store their unused RPG items in their inventory, which can hold any number of items, but has a weight limit.

If a user's inventory is overloaded, the user will not be able to perform actions that result in the acquisition of new items, such as opening loot boxes, making purchases from the in-game marketplace, or bringing in an item from NFT.

The weight limit of the newly created character is 1 kg, and it can be further increased by adding more attribute points to the Inventory attribute - each point increases the limit by 1 kg.

{% hint style="info" %}
For example, if the Inventory attribute has 15 points, the weight limit will be 15 kg.
{% endhint %}

Users are motivated to increase their inventory weight limit not only to keep more items, but also because as a level increases, a user will have more rare and high level items, which weigh more.

{% hint style="info" %}
The weight of each item is directly affected by its rarity and level, and can be calculated using the following formula: \
$$Weight_{item}=10*Level_{item}*Rarity_{item}$$
{% endhint %}

For example, a level 1 common (F) item weighs 10 grams. While the same item of level 10 will weight 100 grams. The 20 level Epic (C) item will weight 800 grams.

***

## Crafting Attribute

Crafting involves three types of actions: disassembling items, increasing item levels (upgrading), and making the item rarer (evolving). All three of these aspects of crafting benefit from investing stat points in the Crafting attribute.

{% hint style="info" %}
In Questfall v.1, only clothing can be upgraded, while both clothing and potions can be evolved.
{% endhint %}

#### Disassemble for Essence

Any RPG item can be disassembled for Essence. The higher the level and rarity of the item, the more Essence is gained from disassembling it.

{% hint style="info" %}
Since Essence does not take up inventory space, disassembling items is one of the ways to free up inventory.
{% endhint %}

In fact, since level and rarity make up the weight of the item, the amount of Essence gained from a disassembled item is directly determined by its weight. The heavier the item, the more Essence it will yield. Another parameter that affects the amount of Essence gained from items is the Crafting attribute.

{% hint style="info" %}
The amount of Essence the item will yield is calculated using the formula below: $$Essence=Weight_{item}*\sqrt{Crafting_{user}+1}$$
{% endhint %}

For example, a user with a Crafting of 0 will gain 100 Essence from an item weighing 100 grams, while a user with a Crafting of 48 will gain 700 grams from the same item.

#### Upgrade with Essence

Users can upgrade their items up to their own level, so if Alice is level 50, she can also upgrade her clothes up to level 50. As a result, when users level up, they need to upgrade all of their items, except for higher-level items purchased from the market, in order to have maximum performance.

Items can only be upgraded with Essence, the only source of which is the disassembly of other items. This creates a constant demand for low level or weak items. The amount of Essence needed to upgrade a particular item is defined by the target level, rarity and Crafting attribute.

{% hint style="info" %}
The amount of Essence required to upgrade an item is calculated using the following formula: $$Essence=$$
{% endhint %}



#### Evolve with Gems



#### Evolve by Merging



boosts the yield of Essence, gives an advantage when trading and obtaining Glyphs;





***

## Trading Attribute

reduces marketplace fee, gives advantage on Gold withdrawal, adds marketplace slots;





***

## Regen Attribute

increases Stamina Reserve recovery rate;



Another crucial parameter that affects a character's **Stamina Reserve** is the speed of its recovery. Initially, when the **Regeneration** attribute equals 1, the character restores <mark style="background-color:purple;">0.2</mark> stamina per minute. With each additional point in **Regeneration**, the amount of stamina restored per minute increases by <mark style="background-color:purple;">0.2</mark>.

{% hint style="info" %}
When the Regeneration attribute is 20, a character recovers 4 stamina per minute.
{% endhint %}

As in most other RPGs, stamina can be restored instantly at any time with the Stamina Potion, which can be obtained from the loot box or purchased with **Gold** from other users in the marketplace.







***

## Luck Attribute

increases chance of getting missing chest shards and other bonuses, adds loot box cards.







