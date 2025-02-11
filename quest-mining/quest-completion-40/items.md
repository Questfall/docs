---
icon: shirt
---

# Clothing

Clothing is the core element of user performance, as a naked character will be much weaker than the same character dressed in appropriate, matching clothing.

Like all other items except [Gems](rpg-items/gems.md), clothing is initially created from loot boxes. It has a 90% drop rate, meaning that on average, 9 out of 10 items from loot boxes are clothing.

{% hint style="info" %}
The drop rate for clothing will decrease as new item types are introduced in [future versions](../../roadmap/future-versions.md) of the platform.
{% endhint %}

As with all RPG items in Questfall, each clothing item falls into one of the six [rarity tiers](rpg-items/#item-rarity), and can be [scrapped](rpg-attributes/crafting.md#scrapping) for Essence or sold on the [marketplace](../../infrastructure/marketplace.md) for [Gold](../../assets/gold-in-game.md) (F,E,D) or [QFT](../../assets/questfall-tokens-qft.md) (C,B,A).

However, there are many properties that make clothing special. And one of the most important is that clothing items can grow in power along with a character, as they have [levels](rpg-items/#item-level) that can be upgraded.

{% hint style="info" %}
Since clothing has levels, its rarity tier can only be [evolved](rpg-attributes/crafting.md#evolving) with [Gems](rpg-items/gems.md), not by merging.
{% endhint %}

Users can level clothing items up to their own level. For example, a level 30 user can level up an item from 1 level to 30. In addition to crafting, users can also obtain high-level items from the marketplace or loot boxes.&#x20;

{% hint style="info" %}
The highest possible level of an item available in loot boxes is the level of the top user in the system. Of course, the higher the level of the item, the lower the chance of getting it.
{% endhint %}

Unlike level-less items, clothing is not consumed when applied to a character. Instead, it is equipped, meaning that an item can be put on and taken off an unlimited number of times.

However, to prevent situational clothing switching, each time an item is equipped, it will cost Essence, depending on the rarity of the item.

{% hint style="info" %}
The amount of Essence required to equip the item: \
$$Cost_{essence}=10*Rarity$$
{% endhint %}

When the item is equipped, its effects are applied to the character. And there are two types of effects that an item can have.

First, each item has an aspect that adds to one of the character [attributes](rpg-attributes/). Second, depending on its rarity, the item can have up to 5 perks.&#x20;

To equip clothing, there are no rarity or level restrictions. This means that a user can equip items purchased on the marketplace or obtained from a loot box that are of a higher level than the user. For example, a level 5 user can wear level 40 boots.&#x20;

However, the power of the item's aspect is reduced proportionally, while the weight is applied in full. Since the weight of equipped items contributes to [stamina consumption](rpg-attributes/mining.md#stamina-reserve), this can be a significant limitation depending on overall character development.

{% hint style="info" %}
The power of the aspect is reduced by the formula: \
$$Aspect_{user}=min(1,\frac{Level_{user}}{Level_{item}})*Aspect_{item}$$
{% endhint %}

The only restriction on equipping clothing is introduced by another important attribute, the type. It determines which of the character's six clothing slots the item can be equipped in.

While all types of clothing have the same drop rate and are generally considered equal except for the slot they occupy, some types are heavier on average but may offer more powerful perks.&#x20;

Since the actual weight and each perk effect is determined individually on a random basis, not only will the average power vary from type to type, but some items may be more powerful relative to their weight than other items of the same type.

<table><thead><tr><th width="103">Slot</th><th width="182">Items</th><th width="151" align="center">Weight Factor</th></tr></thead><tbody><tr><td>Head</td><td>helmets, hoods, hats, crowns, masks</td><td align="center">200%-400%</td></tr><tr><td>Torso</td><td>robes, tunics, shirts, vests, breastplates</td><td align="center">400%-600%</td></tr><tr><td>Legs</td><td>pants, trousers, leggings, chaps</td><td align="center">200%-400%</td></tr><tr><td>Feet</td><td>boots, shoes, sandals, sabatons</td><td align="center">500%-700%</td></tr><tr><td>Hands</td><td>gloves, gauntlets, bracers, mittens</td><td align="center">100%-300%</td></tr><tr><td>Cloak</td><td>capes, raincoats, mantles, shawls</td><td align="center">300%-500%</td></tr></tbody></table>

{% hint style="info" %}
The base density of the clothing is $$Rarity^{-1.1}$$, and the final weight is adjusted by the individual random weight factor.
{% endhint %}

***

### Aspects

Each clothing item has an aspect that increases the power of one of the character attributes. As such, the number of aspects and their names are the same as the attributes: [Inventory](rpg-attributes/inventory.md), [Mining](rpg-attributes/mining.md), [Crafting](rpg-attributes/crafting.md), [Trading](rpg-attributes/trading.md), [Recovery](rpg-attributes/recovery.md), and [Luck](rpg-attributes/luck.md).

Despite the fact that the number of clothing slots and attributes are the same, each item's aspect is independent of its type and is randomly determined when the item is created.&#x20;

For example, boots can have a Trading aspect, a Luck aspect, or any other aspect, since there is an equal chance of getting each of the aspects on a new item.

{% hint style="info" %}
This way, a user can equip all of the same aspect clothing to increase only one character's attribute.
{% endhint %}

What makes clothing so powerful is that the effect of an aspect increases not only with each rarity tier, but also with each new item level. More specifically, the rarity determines the possible range of aspect power, while the actual power is determined individually on a random basis.

<table><thead><tr><th width="114" align="center">Rarity</th><th width="130" align="center">Min Power</th><th width="116" align="center">Max Power</th></tr></thead><tbody><tr><td align="center">F</td><td align="center">0.15</td><td align="center">0.25</td></tr><tr><td align="center">E</td><td align="center">0.30</td><td align="center">0.40</td></tr><tr><td align="center">D</td><td align="center">0.45</td><td align="center">0.55</td></tr><tr><td align="center">C</td><td align="center">0.60</td><td align="center">0.70</td></tr><tr><td align="center">B</td><td align="center">0.75</td><td align="center">0.85</td></tr><tr><td align="center">A</td><td align="center">0.90</td><td align="center">1.10</td></tr></tbody></table>

To illustrate how this works in practice, let's look at an example. Suppose a user receives first level boots of rarity F with a Crafting aspect of power 0.2. When these boots are upgraded to level 10, they give +2 to Crafting (0.2 per level).

As the boots evolve to the next level, the power of the aspect will increase. However, there are two factors to keep in mind when evolving an item.

First, the range of the aspect's power narrows. So the new aspect power of the boots could be anywhere between 0.3 and 0.35, since the original power was in the middle of the range. Suppose the new aspect power for rarity E was randomly set to 0.32. When evolving to rarity D, the range will narrow again, this time to 0.45-0.47. And so on.

{% hint style="info" %}
As a result, it is very difficult to craft item A with the maximum power of the effect. However, it can be maximized to 1.5 at any time with the Gem A.
{% endhint %}

Second, the new aspect power is only applied when upgrading to the next level. So if a user from the example above upgrades boots to level 11 with a new aspect power of 0.32, boots will give +2.32 to Crafting. In other words, the power of aspect is not retroactive.

***

### Perks

Perks are fixed effects that an item gains with each rarity level, so a rarity F item has no perks, while a rarity A item has 5 perks. The power of perks does not increase with item level and remains the same.

There is a predefined list of possible perks in the system, each with a base power. When a clothing rarity is evolved, one of the perks is randomly selected from this list. The perk's power is also randomly generated from the range specific to each clothing type.

{% hint style="info" %}
There is no way to know what future perks the item will have at higher rarity tiers.
{% endhint %}

<table><thead><tr><th width="103">Slot</th><th width="116" align="center">Min Power</th><th width="115" align="center">Max Power</th></tr></thead><tbody><tr><td>Head</td><td align="center">120%</td><td align="center">140%</td></tr><tr><td>Torso</td><td align="center">140%</td><td align="center">160%</td></tr><tr><td>Legs</td><td align="center">120%</td><td align="center">140%</td></tr><tr><td>Feet</td><td align="center">150%</td><td align="center">170%</td></tr><tr><td>Hands</td><td align="center">100%</td><td align="center">130%</td></tr><tr><td>Cloak</td><td align="center">130%</td><td align="center">150%</td></tr></tbody></table>

The heavier the average item of the type, the greater the average power of its perks. For example, the average power of a perk on a hand item is 110%, while the average power of the same perk on a torso item is 150%.

Let's say the perk "Increase Stamina Recovery Rate" has a base power of 10 stamina per minute. If the user evolves the hat and gets this perk with a power of 125%, the actual effect of the perk will be 12.5 stamina per minute.

{% hint style="info" %}
While the perks of the item are fixed from the moment they appear and there is no way to change them, users can use Gems A to maximize the power of the perks to 200%. For example, if the perk from the example above is maximized, it will result in 20 stamina per minute.
{% endhint %}

The main idea behind perks is to give items individual value to different users. While an item may seem worthless to Alice, it may be very valuable to Bob.&#x20;

In order to best accomplish this goal, perks not only improve the parameters of a character in a more granular way than attributes, but more importantly, perks can also increase the power of other perks or aspects.

This allows users to collect individual sets of clothing items that enhance each other. For example, one of the perks on the pants might be "Increase the power of the 2nd perk in the hand slot", while the gloves might have a 2nd perk "Increase the aspect of the head slot". In the ultimate case, items can gather power through a spiral with multiple coils.

As a result, the same item may perfectly match other items for one user and not add much power for another. This increases marketplace activity by orders of magnitude and makes opening loot boxes and crafting much more fun.
