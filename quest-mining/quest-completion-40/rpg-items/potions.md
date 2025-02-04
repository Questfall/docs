---
icon: flask-round-potion
---

# Potions

Potions are designed to instantly restore resources that would otherwise take time to replenish, such as stamina. They are only dropped from loot boxes and have about a 10% chance of being found, meaning that on average, one out of every ten loot box items is a potion.

{% hint style="info" %}
In Questfall v.1, only one type of potion is introduced - the Stamina Potion. However, new potion types will be introduced in [future releases](../../../roadmap/future-versions.md), such as Mana Potions.
{% endhint %}

Potions do not have levels, but they can be one of [six rarity tiers](./#item-rarity), gaining power with each tier. Therefore, potions of the same type and rarity are identical and have exactly the same properties, defined by the potion-specific parameters:

<table><thead><tr><th width="171">Parameter</th><th width="147" align="right" valign="middle">Stamina Potion</th></tr></thead><tbody><tr><td><a data-footnote-ref href="#user-content-fn-1">Potions Share</a></td><td align="right" valign="middle">100%</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-2">Effect Factor</a></td><td align="right" valign="middle">2</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-3">Density Factor</a></td><td align="right" valign="middle"><span class="math">Rarity^{-2.2}</span></td></tr><tr><td><a data-footnote-ref href="#user-content-fn-4">Evolution Factor</a></td><td align="right" valign="middle">2</td></tr></tbody></table>

Like any other RPG item, potions can be [scrapped](../rpg-attributes/crafting.md#scrapping) for Essence or sold on the [marketplace](../../../infrastructure/marketplace.md) for [Gold](../../../assets/gold-in-game.md) (F,E,D) or [QFT](../../../assets/questfall-tokens-qft.md) (C,B,A). Users can also [evolve](../rpg-attributes/crafting.md#evolving) the rarity of potions by merging identical bottles, the number of which is determined by the evolution factor of a particular potion type.&#x20;

{% hint style="info" %}
With an evolution factor of 2, two F-rarity potions will make one E-rarity potion, two E-rarity potions will make one D-rarity potion, and so on.
{% endhint %}

***

### Stamina Potion

When consumed, a Stamina Potion will restore a percentage of the user's Stamina Reserve, depending on the rarity of the potion. The Stamina Potion of rarity F restores 10% of the total size of the Stamina Reserve, and each subsequent rarity tier doubles the effect.&#x20;

And since evolving requires two potions that have the same resultant effect, it might seem that there is no point in evolving. However, the weight increases more slowly, so an E potion, for example, has the same effect as two F potions, but takes up less inventory space.

<table><thead><tr><th width="91" align="center">Rarity</th><th width="87" align="center">Effect</th><th width="83" align="center">Weight </th><th width="105" align="center">Drop Rate</th><th width="105" align="center">Scrapping</th><th width="115" align="center">Evolving</th></tr></thead><tbody><tr><td align="center">F</td><td align="center">+10%</td><td align="center">100g</td><td align="center"><span class="math">\frac{32}{630}</span></td><td align="center">+11es</td><td align="center">-</td></tr><tr><td align="center">E</td><td align="center">+20%</td><td align="center">174g</td><td align="center"><span class="math">\frac{16}{630}</span></td><td align="center">+14es</td><td align="center">2xF+10es</td></tr><tr><td align="center">D</td><td align="center">+40%</td><td align="center">241g</td><td align="center"><span class="math">\frac{8}{630}</span></td><td align="center">+19es</td><td align="center">2xE+30es</td></tr><tr><td align="center">C</td><td align="center">+80%</td><td align="center">303g</td><td align="center"><span class="math">\frac{4}{630}</span></td><td align="center">+26es</td><td align="center">2xD+60es</td></tr><tr><td align="center">B</td><td align="center">+160%</td><td align="center">362g</td><td align="center"><span class="math">\frac{2}{630}</span></td><td align="center">+35es</td><td align="center">2xC+100es</td></tr><tr><td align="center">A</td><td align="center">+320%</td><td align="center">419g</td><td align="center"><span class="math">\frac{1}{630}</span></td><td align="center">+46es</td><td align="center">2xB+150es</td></tr></tbody></table>

{% hint style="info" %}
Scrapping and evolving values in the table are calculated for a Crafting attribute of 0, where 11es means 11 Essence.
{% endhint %}

The potion adds the full amount provided by the effect to the reserve, which can hold more than its nominal size. For example, if a user has a reserve size of 10,000 and only has 4,000 stamina left, a C-rarity potion will add 8,000 (80%). This will result in 12,000 stamina in the reserve.

{% hint style="info" %}
However, to prevent automation by gaining a huge amount of stamina before running a bot, a potion can only be consumed when the reserve is half empty.
{% endhint %}

[^1]: The average percentage of a specific potion type compared to all loot box potions.

[^2]: The multiplier that increases the effect of the potion with each rarity tier.

[^3]: The individual adjustment of the weight.

[^4]: The number of potions of the current rarity that need to be merged to make one potion of the next rarity.
