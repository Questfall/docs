---
icon: shirt
---

# Clothing

Clothing is the core element of user performance, as a naked character will be much weaker than the same character dressed in appropriate, matching clothing.

Like all other items except [Gems](gems.md), clothing is initially created from loot boxes. It has a 90% drop rate, meaning that on average, 9 out of 10 items from loot boxes are clothing.

{% hint style="info" %}
The drop rate for clothing will decrease as new item types are introduced in [future versions](../../../roadmap/future-versions.md) of the platform.
{% endhint %}

As with all RPG items in Questfall, each clothing item falls into one of the six [rarity tiers](./#item-rarity), and can be [scrapped](../rpg-attributes/crafting.md#scrapping) for Essence or sold on the [marketplace](../../../infrastructure/marketplace.md) for [Gold](../../../assets/gold.md) (F,E,D) or [QFT](../../../assets/qft.md) (C,B,A).

However, there are many properties that make clothing special. And one of the most important is that clothing items can grow in power along with a character, as they have [levels](./#item-level) that can be upgraded.

{% hint style="info" %}
Since clothing has levels, its rarity tier can only be [evolved](../rpg-attributes/crafting.md#evolving) with [Gems](gems.md), not by merging.
{% endhint %}

Users can level clothing items up to their own level. For example, a level 30 user can level up an item from 1 level to 30. In addition to crafting, users can also obtain high-level items from the marketplace or loot boxes.&#x20;

{% hint style="info" %}
The highest possible level of an item available in loot boxes is the level of the top user in the system. Of course, the higher the level of the item, the lower the chance of getting it.
{% endhint %}

Unlike level-less items, clothing is not consumed when applied to a character. Instead, it is equipped, meaning that an item can be put on and taken off an unlimited number of times.

However, to prevent situational clothing switching, each time an item is equipped, it costs Essence. The cost depends on item rarity, item level, and the player's [Equipping](../rpg-attributes/items.md#equipping) trait.

{% hint style="info" %}
For the exact equipment cost formula, see the [Items](../rpg-attributes/items.md#equipping) attribute article.
{% endhint %}

When the item is equipped, its effects are applied to the character. And there are two types of effects that an item can have.

First, each item has a resonance that boosts one of the character [attributes](../rpg-attributes/). Second, depending on its rarity, the item can have up to 5 perks.&#x20;

To equip clothing, there are no rarity or level restrictions. This means that a user can equip items purchased on the marketplace or obtained from a loot box that are of a higher level than the user. For example, a level 5 user can wear level 40 boots.&#x20;

However, useful item effects can be reduced when the item is too far above the character's level, while the weight is applied in full. Since equipped weight contributes to [stamina consumption](../rpg-attributes/stamina.md#relief), this can be a significant limitation depending on overall character development.

{% hint style="info" %}
The overlevel penalty affects resonance, grants, terminal perks, booster perks, and other positive system values from the item. For the exact formula, see the [Overlevel](../rpg-attributes/items.md#overlevel) trait.
{% endhint %}

The only restriction on equipping clothing is introduced by another important attribute, the type. It determines which of the character's six clothing slots the item can be equipped in.

While all types of clothing have the same drop rate and are generally considered equal except for the slot they occupy, some types are heavier on average but may offer more powerful perks.&#x20;

Since the actual weight and each perk effect is determined individually on a random basis, not only will the average power vary from type to type, but some items may be more powerful relative to their weight than other items of the same type.

<table><thead><tr><th width="103">Slot</th><th width="182">Items</th><th width="151" align="center">Weight Factor</th></tr></thead><tbody><tr><td>Head</td><td>helmets, hoods, hats, crowns, masks</td><td align="center">200%-400%</td></tr><tr><td>Torso</td><td>robes, tunics, shirts, vests, breastplates</td><td align="center">400%-600%</td></tr><tr><td>Legs</td><td>pants, trousers, leggings, chaps</td><td align="center">200%-400%</td></tr><tr><td>Feet</td><td>boots, shoes, sandals, sabatons</td><td align="center">500%-700%</td></tr><tr><td>Hands</td><td>gloves, gauntlets, bracers, mittens</td><td align="center">100%-300%</td></tr><tr><td>Cloak</td><td>capes, raincoats, mantles, shawls</td><td align="center">300%-500%</td></tr></tbody></table>

{% hint style="info" %}
The base density of the clothing is $$Rarity^{-1.1}$$, and the final weight is adjusted by the individual random weight factor.
{% endhint %}

***

### Resonance

Each clothing item has a resonance linked to one of the character attributes: [Items](../rpg-attributes/items.md), [Mining](../rpg-attributes/mining.md), [Crafting](../rpg-attributes/crafting.md), [Trading](../rpg-attributes/trading.md), [Stamina](../rpg-attributes/stamina.md), or [Luck](../rpg-attributes/luck.md).

Despite the fact that the number of clothing slots and attributes are the same, each item's resonance attribute is independent of its type and is randomly determined when the item is created.&#x20;

For example, boots can have Trading resonance, Luck resonance, or any other resonance, since there is an equal chance of getting each resonance attribute on a new item.

{% hint style="info" %}
This way, a user can equip several items with the same resonance and focus on one character attribute.
{% endhint %}

Resonance is stored as accumulated percentage points. When a level 1 item is created, its resonance value and future per-level resonance step come from its rarity:

| Rarity | Resonance step |
| --- | --- |
| Common (F) | `1` |
| Uncommon (E) | `2` |
| Rare (D) | `3` |
| Epic (C) | `4` |
| Legendary (B) | `5` |
| Mythical (A) | `6` |

When an item gains a level, its stored resonance value increases by its current step.

{% hint style="info" %}
$$ResonanceValue=ResonanceValue+ResonanceStep$$
{% endhint %}

If an item's rarity is upgraded later, the resonance already earned stays unchanged. Only future level-ups use the new rarity step.

{% hint style="info" %}
Example: Common boots start with `1%` resonance and gain `+1` resonance per level. If they reach level `10` as Common, they have `10%` stored resonance. If they are then upgraded to Rare, the stored `10%` remains, and future level-ups add `+3` resonance each.
{% endhint %}

When the character is calculated, total resonance for an attribute multiplies the base attribute score after character points and direct attribute grants:

{% hint style="info" %}
$$BaseAttribute=CharacterPoints+AttributeGrants$$

$$AttributeScore=floor(BaseAttribute*(1+\frac{TotalResonance}{100}))$$
{% endhint %}

Resonance perks can boost the stored resonance of matching items. These perks are multipliers over the item's stored resonance, not flat attribute additions.

***

### Perks

Perks are fixed effects that an item gains with each rarity level, so a rarity F item has no perks, while a rarity A item has 5 perks. The power of perks does not increase with item level, but it can improve when item rarity is upgraded.

There is a predefined list of possible perks in the system, each with rarity-based value ranges. When clothing rarity is evolved, existing perks are upgraded into the new rarity range and one new perk is randomly selected from the list. The [Quality](../rpg-attributes/crafting.md#quality) trait affects how close these rolls are to the upper edge of their ranges.

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

In order to best accomplish this goal, perks not only improve the parameters of a character in a more granular way than attributes, but more importantly, perks can also increase the power of other perks or resonance.

This allows users to collect individual sets of clothing items that enhance each other. For example, one of the perks on the pants might be "Increase the power of the 2nd perk in the hand slot", while the gloves might have a 2nd perk "Increase the resonance of the head slot". In the ultimate case, items can gather power through a spiral with multiple coils.

As a result, the same item may perfectly match other items for one user and not add much power for another. This increases marketplace activity by orders of magnitude and makes opening loot boxes and crafting much more fun.
