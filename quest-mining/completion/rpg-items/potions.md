---
icon: flask-round-potion
---

# Potions

Potions are designed to instantly restore resources that would otherwise take time to replenish, such as stamina. They are only dropped from loot boxes and have about a 10% chance of being found, meaning that on average, one out of every ten loot box items is a potion.&#x20;

{% hint style="info" %}
In Questfall v.1, only one type of potion is introduced - the Stamina Potion. However, new potion types will be implemented in [future versions](../../../roadmap/future-versions.md). For example, Mana Potions.
{% endhint %}

Potions do not have levels, but they can be one of [six rarity tiers](./#item-rarity), gaining power with each tier. Therefore, potions of the same type and rarity are identical and have exactly the same properties, such as effect, weight, evolution cost, etc.

Like any other RPG item, potions can be [scrapped](../rpg-attributes/crafting.md#scrapping) for Essence or sold on the [marketplace](../../../infrastructure/marketplace.md) for [Gold](../../../assets/gold.md) (F,E,D) or [QFT](../../../assets/qft.md) (C,B,A). Users can also [evolve](../rpg-attributes/crafting.md#evolving) the rarity of potions by merging identical bottles, the number of which depends on the type of potion.

{% hint style="info" %}
For example, Stamina Potions assume that two potions are merged to evolve. Therefore, two F-rarity potions will create an E-rarity potion, two E-rarity potions will create a D-rarity potion, and so on.
{% endhint %}

***

### Stamina Potion

When consumed, a Stamina Potion restores a percentage of the user's Maximum Stamina, depending on the rarity of the potion. The Stamina Potion of rarity F restores 10% of Maximum Stamina, and each subsequent rarity tier doubles the base effect. The final restore amount can be increased by the Stamina trait [Absorption](../rpg-attributes/stamina.md#absorption).&#x20;

Since evolving requires two potions that have the same resultant effect, it might seem that there is no point in evolving. However, the weight increases more slowly, so an E potion, for example, has the same effect as two F potions, but takes up less inventory space.

| Rarity | Effect | Weight | Drop Rate | Base Scrapping | Base Evolving |
| --- | --- | --- | --- | --- | --- |
| F | `+10%` | `100 g` | `32 / 630` | `+10 es` | `-` |
| E | `+20%` | `174 g` | `16 / 630` | `+20 es` | `2xF + 30 es` |
| D | `+40%` | `241 g` | `8 / 630` | `+30 es` | `2xE + 150 es` |
| C | `+80%` | `303 g` | `4 / 630` | `+40 es` | `2xD + 750 es` |
| B | `+160%` | `362 g` | `2 / 630` | `+50 es` | `2xC + 3,750 es` |
| A | `+320%` | `419 g` | `1 / 630` | `+60 es` | `2xB + 18,750 es` |

{% hint style="info" %}
Scrapping and evolving values in the table are base values before Crafting traits and item grants, where 10 es means 10 Essence. Drop rate assumes no other type of potion is present. Weight is calculated based on: $$Density=Rarity^{-2.2}$$.
{% endhint %}

The potion adds the full amount provided by the effect to current stamina, which can go above Maximum Stamina. For example, if a user has 10,000 Maximum Stamina and only has 4,000 stamina left, a C-rarity potion will add 8,000 (80%). This will result in 12,000 current stamina.

Stamina above the maximum is called overcap. While a player has overcapped stamina, passive Stamina Recovery does not add more stamina. Instead, the excess stamina decays over time, as described in the [Stamina](../rpg-attributes/stamina.md#overcap) attribute article.

{% hint style="info" %}
However, to prevent automation by gaining a huge amount of stamina before running a bot, a potion cannot be consumed in advance if current stamina is already at or above Maximum Stamina.
{% endhint %}
