---
icon: flask-round-potion
---

# Potions

Potions are designed to instantly restore resources that would otherwise take time to replenish, such as stamina. They are only dropped from loot boxes and have about a 10% chance of being found, meaning that on average, one out of every ten loot box items is a potion.&#x20;

{% hint style="info" %}
In Questfall v.1, only one type of potion is introduced - the Stamina Potion. However, new potion types will be implemented in [future versions](../../../roadmap/future-versions.md). For example, Mana Potions.
{% endhint %}

Potions do not have levels, but they can be one of [six rarity tiers](./#item-rarity), gaining power with each tier. Therefore, potions of the same type and rarity are identical and have exactly the same properties, such as effect, essence from scrapping, or weight.

Like any other RPG item, potions can be [scrapped](../rpg-attributes/crafting.md#scrapping) for Essence or sold on the [marketplace](../../../infrastructure/marketplace.md) for [Gold](../../../assets/gold-in-game.md) (F,E,D) or [QFT](../../../assets/questfall-tokens-qft.md) (C,B,A). Users can also [evolve](../rpg-attributes/crafting.md#evolving) the rarity of potions by merging identical bottles, the number of which depends on the type of potion.

{% hint style="info" %}
For example, Stamina Potions assume that two potions are merged to evolve. Therefore, two F-rarity potions will create an E-rarity potion, two E-rarity potions will create a D-rarity potion, and so on.
{% endhint %}

***

### Stamina Potion

When consumed, a Stamina Potion will restore a percentage of the user's Stamina Reserve, depending on the rarity of the potion. The Stamina Potion of rarity F restores 10% of the total size of the Stamina Reserve, and each subsequent rarity tier doubles the effect.&#x20;

<details>

<summary>Base parameters</summary>

* Average loot box percentage: 10%
* Effect growth with each rarity: x2
* Density affecting the weight: $$Rarity^{-2.2}$$
* Merging factor for evolution: x2
* Drop rate decrease with rarity: x0.5

</details>

Since evolving requires two potions that have the same resultant effect, it might seem that there is no point in evolving. However, the weight increases more slowly, so an E potion, for example, has the same effect as two F potions, but takes up less inventory space.

<table><thead><tr><th width="94" align="center">Rarity</th><th width="87" align="center">Effect</th><th width="83" align="center">Weight </th><th width="108" align="center">Drop Rate</th><th width="105" align="center">Scrapping</th><th width="115" align="center">Evolving</th></tr></thead><tbody><tr><td align="center">F</td><td align="center">+10%</td><td align="center">100g</td><td align="center"><span class="math">\frac{32}{630}</span></td><td align="center">+11es</td><td align="center">-</td></tr><tr><td align="center">E</td><td align="center">+20%</td><td align="center">174g</td><td align="center"><span class="math">\frac{16}{630}</span></td><td align="center">+14es</td><td align="center">2xF+10es</td></tr><tr><td align="center">D</td><td align="center">+40%</td><td align="center">241g</td><td align="center"><span class="math">\frac{8}{630}</span></td><td align="center">+19es</td><td align="center">2xE+30es</td></tr><tr><td align="center">C</td><td align="center">+80%</td><td align="center">303g</td><td align="center"><span class="math">\frac{4}{630}</span></td><td align="center">+26es</td><td align="center">2xD+60es</td></tr><tr><td align="center">B</td><td align="center">+160%</td><td align="center">362g</td><td align="center"><span class="math">\frac{2}{630}</span></td><td align="center">+35es</td><td align="center">2xC+100es</td></tr><tr><td align="center">A</td><td align="center">+320%</td><td align="center">419g</td><td align="center"><span class="math">\frac{1}{630}</span></td><td align="center">+46es</td><td align="center">2xB+150es</td></tr></tbody></table>

{% hint style="info" %}
Scrapping and evolving values in the table are calculated for a Crafting attribute of 0, where 11es means 11 Essence.
{% endhint %}

The potion adds the full amount provided by the effect to the reserve, which can hold more than its nominal size. For example, if a user has a reserve size of 10,000 and only has 4,000 stamina left, a C-rarity potion will add 8,000 (80%). This will result in 12,000 stamina in the reserve.

{% hint style="info" %}
However, to prevent automation by gaining a huge amount of stamina before running a bot, a potion cannot be consumed when the reserve is full.
{% endhint %}
