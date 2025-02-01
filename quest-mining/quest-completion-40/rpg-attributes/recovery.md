---
icon: seedling
---

# Recovery

The Recovery attribute increases the speed of the recovery rate for resources that replenish over time, and while in Questfall v.1 it will only apply to the recovery rate of stamina, in [future versions](../../../roadmap/future-versions.md) it may apply to more resources, such as mana.

### Stamina Recovery Rate

The larger the Stamina Reserve, the slower it will regenerate, as the amount of stamina replenished in a minute is absolute and does not depend on the size of the Reserve.

A first level character recovers 0.2 stamina per minute, and each additional point in the Recovery attribute increases the amount of stamina restored per minute by another 0.2. For example, with a Recovery of 20, a character will regenerate 4 stamina per minute.

{% hint style="info" %}
The recovery rate of Stamina Reserve is calculated using the following formula:\
$$Stamina_{min}=0.2*(Recovery+1)$$
{% endhint %}

Of course, as in most other RPGs, stamina can be instantly restored at any time with the [Stamina Potion](../rpg-items/potions.md), which can be obtained from the loot box or purchased with Gold from other users in the marketplace.
