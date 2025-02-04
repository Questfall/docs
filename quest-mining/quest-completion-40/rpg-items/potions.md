---
icon: flask-round-potion
---

# Potions

Potions are designed to instantly restore resources that would otherwise take time to replenish, such as stamina. They are only dropped from loot boxes and have about a 5% chance of being found, meaning that on average, one out of every twenty loot box items is a potion.

{% hint style="info" %}
In Questfall v.1, only one type of potion is introduced - the Stamina Potion. However, new potion types will be introduced in [future releases](../../../roadmap/future-versions.md), such as Mana Potions.
{% endhint %}

Potions do not have levels, but they can be one of [six rarity tiers](./#item-rarity), gaining power with each tier. Therefore, potions of the same type and rarity are identical, meaning that they have exactly the same parameters, such as weight or effect.

Users can [evolve](../rpg-attributes/crafting.md#evolving) the rarity of potions by merging identical bottles, the number of which depends on the type of potion. For example, two Stamina Potions of rarity F will make one Stamina Potion of rarity E, two Stamina Potions of rarity E will make one Stamina Potion of rarity D, and so on.

And of course, like any other RPG item, potions can be [scrapped](../rpg-attributes/crafting.md#scrapping) for Essence or sold on the [marketplace](../../../infrastructure/marketplace.md) for [Gold](../../../assets/gold-in-game.md) (F,E,D) or [QFT](../../../assets/questfall-tokens-qft.md) (C,B,A), depending on the rarity of the potion.

***

### Stamina Potion

Base parameters specific to Stamina Potions are listed in the table below:

<table><thead><tr><th width="171">Parameter</th><th width="130" align="right" valign="middle">Value</th></tr></thead><tbody><tr><td>Potions Share</td><td align="right" valign="middle">100%</td></tr><tr><td>Density Factor</td><td align="right" valign="middle"><span class="math">Rarity^{-2.2}</span></td></tr><tr><td>Evolution Factor</td><td align="right" valign="middle">2</td></tr></tbody></table>

When consumed, a Stamina Potion will restore a percentage of the user's Stamina Reserve, depending on the rarity of the potion. The Stamina Potion of rarity F restores 20% of the total size of the Stamina Reserve, and each subsequent rarity tier doubles the effect.&#x20;

And since evolving requires two potions that have the same resultant effect, it might seem that there is no point in evolving. However, the weight increases more slowly, so an E potion, for example, has the same effect as two F potions, but takes up less inventory space.

<table><thead><tr><th width="101">Rarity</th><th width="88" align="center">Effect</th><th width="85" align="center">Weight </th><th width="108" align="center">Drop Rate</th><th width="113" align="center">Scrapping</th><th width="163" align="center">Evolving Cost</th></tr></thead><tbody><tr><td>F</td><td align="center">+10%</td><td align="center">100g</td><td align="center"><span class="math">\frac{1}{22}</span></td><td align="center">+11 Ess</td><td align="center">-</td></tr><tr><td>E</td><td align="center">+20%</td><td align="center">174g</td><td align="center"><span class="math">\frac{1}{222}</span></td><td align="center">+14 Ess</td><td align="center">2 x F + 10 Ess</td></tr><tr><td>D</td><td align="center">+40%</td><td align="center">241g</td><td align="center"><span class="math">\frac{1}{2,222}</span></td><td align="center">+19 Ess</td><td align="center">2 x E + 30 Ess</td></tr><tr><td>C</td><td align="center">+80%</td><td align="center">303g</td><td align="center"><span class="math">\frac{1}{22,222}</span></td><td align="center">+26 Ess</td><td align="center">2 x D  + 60 Ess</td></tr><tr><td>B</td><td align="center">+160%</td><td align="center">362g</td><td align="center"><span class="math">\frac{1}{222,222}</span></td><td align="center">+35 Ess</td><td align="center">2 x C  + 100 Ess</td></tr><tr><td>A</td><td align="center">+320%</td><td align="center">419g</td><td align="center"><span class="math">\frac{1}{2,222,222}</span></td><td align="center">+46 Ess</td><td align="center">2 x B  + 150 Ess</td></tr></tbody></table>

The potion adds the full amount provided by the effect to the reserve, which can be overfilled. This means that the amount of stamina in the reserve can be larger than its nominal size.

For example, if a user has a reserve size of 10,000 and only has 4,000 stamina left, a C-rarity potion that adds 80% of the reserve will add 8,000 stamina. This will result in 12,000 stamina in the reserve.

{% hint style="info" %}
However, to prevent automation by gaining a huge amount of stamina before running a bot, a potion can only be consumed when the reserve is half empty.
{% endhint %}
