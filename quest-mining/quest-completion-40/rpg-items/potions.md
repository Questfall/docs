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

<table><thead><tr><th width="95" align="center">Rarity</th><th width="87" align="center">Effect</th><th width="88" align="center">Weight </th><th width="110" align="center">Drop Rate</th><th width="113" align="center">Scrapping</th><th width="117" align="center">Evolving</th></tr></thead><tbody><tr><td align="center">F</td><td align="center">+10%</td><td align="center">100g</td><td align="center"><span class="math">\frac{1}{22}</span></td><td align="center">+11es</td><td align="center">-</td></tr><tr><td align="center">E</td><td align="center">+20%</td><td align="center">174g</td><td align="center"><span class="math">\frac{1}{222}</span></td><td align="center">+14es</td><td align="center">2xF+10es</td></tr><tr><td align="center">D</td><td align="center">+40%</td><td align="center">241g</td><td align="center"><span class="math">\frac{1}{2,222}</span></td><td align="center">+19es</td><td align="center">2xE+30es</td></tr><tr><td align="center">C</td><td align="center">+80%</td><td align="center">303g</td><td align="center"><span class="math">\frac{1}{22,222}</span></td><td align="center">+26es</td><td align="center">2xD+60es</td></tr><tr><td align="center">B</td><td align="center">+160%</td><td align="center">362g</td><td align="center"><span class="math">\frac{1}{222,222}</span></td><td align="center">+35es</td><td align="center">2xC+100es</td></tr><tr><td align="center">A</td><td align="center">+320%</td><td align="center">419g</td><td align="center"><span class="math">\frac{1}{2,222,222}</span></td><td align="center">+46es</td><td align="center">2xB+150es</td></tr></tbody></table>

The potion adds the full amount provided by the effect to the reserve, which can be overfilled. This means that the amount of stamina in the reserve can be larger than its nominal size.

For example, if a user has a reserve size of 10,000 and only has 4,000 stamina left, a C-rarity potion that adds 80% of the reserve will add 8,000 stamina. This will result in 12,000 stamina in the reserve.

{% hint style="info" %}
However, to prevent automation by gaining a huge amount of stamina before running a bot, a potion can only be consumed when the reserve is half empty.
{% endhint %}
