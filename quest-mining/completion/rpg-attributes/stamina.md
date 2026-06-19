---
icon: heart-pulse
---

# Stamina

Stamina is the attribute for players who want to complete more quests before waiting, wear heavier equipment, and get more value from Stamina Potions.

It affects five traits:

| Trait | Meaning |
| --- | --- |
| Reserve | Increases maximum stamina. |
| Recovery | Restores more stamina per minute. |
| Efficiency | Reduces the base stamina cost of actions. |
| Relief | Reduces stamina pressure from equipped item weight. |
| Absorption | Makes Stamina Potions restore more stamina. |

Stamina is spent when a player performs stamina-consuming quest actions. If the player does not have enough current stamina to pay the final cost, the action is not available. There is no stamina overdraft.

{% hint style="info" %}
Stamina is a rate-limiting resource. It is meant to make automated infinite quest completion harder, while still letting active players plan around recovery, equipment weight, and potions.
{% endhint %}

***

### **Action cost**

Every stamina action starts with a base cost. `Efficiency` reduces that base cost. Equipped item weight then multiplies the reduced cost, and `Relief` reduces that equipment multiplier.

{% hint style="info" %}
$$FinalActionCost=ceil(ReducedBaseCost*(1+\frac{EquipmentLoadPressure}{100}))$$

$$ActionAvailable=CurrentStamina>=FinalActionCost$$
{% endhint %}

The base part of an action can never drop below `10%` of that action's raw base cost before equipment weight is applied.

{% hint style="info" %}
Example: an action has `100` raw base stamina cost. Even with very high Efficiency and grants, the reduced base cost cannot go below `10` before equipped weight is applied.
{% endhint %}

***

### **Reserve**

`Reserve` controls Maximum Stamina, the size of the stamina pool.

{% hint style="info" %}
$$BaseMaxStamina=floor(1000*\sqrt[3]{max(1,Reserve)})$$

$$ReservePercentBonus=floor(BaseMaxStamina*\frac{ReservePercentGrants}{100})$$

$$FinalMaxStamina=BaseMaxStamina+ReservePercentBonus+ReserveFlatGrants$$
{% endhint %}

Percent grants are applied to base Maximum Stamina first. Flat grants are added after that, so Reserve grants do not multiply each other.

Base Maximum Stamina before item grants:

| Reserve | Maximum Stamina |
| --- | --- |
| `1` | `1,000` |
| `10` | `2,154` |
| `100` | `4,641` |
| `1,000` | `10,000` |
| `10,000` | `21,544` |
| `100,000` | `46,415` |
| `1,000,000` | `100,000` |

Item grants:

| Item rarity | Stamina Reserve grant (flat) | Stamina Reserve grant (percent) |
| --- | --- | --- |
| Uncommon | `+100..250 Stamina Reserve` | `+5..10% Stamina Reserve` |
| Rare | `+251..500 Stamina Reserve` | `+11..20% Stamina Reserve` |
| Epic | `+501..1,000 Stamina Reserve` | `+21..30% Stamina Reserve` |
| Legendary | `+1,001..2,000 Stamina Reserve` | `+31..40% Stamina Reserve` |
| Mythical | `+2,001..5,000 Stamina Reserve` | `+50..60% Stamina Reserve` |

***

### **Recovery**

`Recovery` controls Stamina Recovery Per Minute.

The curve is anchored to a `4 hour` recovery window so it stays comparable to `Reserve`: when the hidden recovery capacity equals Maximum Stamina, a fully empty stamina pool refills in `4 hours`.

{% hint style="info" %}
$$BaseRecoveryCapacity=floor(1000*\sqrt[3]{max(1,Recovery)})$$

$$BaseRecoveryPerMinute=\frac{BaseRecoveryCapacity}{240}$$

$$FinalRecoveryPerMinute=BaseRecoveryPerMinute*(1+\frac{RecoverySpeedGrants}{100})+FlatRecoveryGrants$$
{% endhint %}

Recovered stamina is rounded down:

{% hint style="info" %}
$$RecoveredStamina=floor(FinalRecoveryPerMinute*\frac{ElapsedSeconds}{60})$$

$$CurrentStamina=min(FinalMaxStamina,CurrentStamina+RecoveredStamina)$$
{% endhint %}

Base recovery before item grants:

| Recovery | Stamina Recovery Per Minute |
| --- | --- |
| `1` | `4.17` |
| `10` | `8.97` |
| `100` | `19.34` |
| `1,000` | `41.67` |
| `10,000` | `89.77` |
| `100,000` | `193.40` |
| `1,000,000` | `416.67` |

Example with `46,415` Maximum Stamina:

| Recovery | Recovery speed | Full refill from zero |
| --- | --- | --- |
| `12,500` | `96.70/min` | about `8 hours` |
| `100,000` | `193.40/min` | `4 hours` |
| `800,000` | `386.80/min` | about `2 hours` |

Flat and percent Recovery grants are different grants. A flat grant adds stamina restored per minute. A percent grant increases recovery speed by percent.

| Item rarity | Stamina per minute grant | Stamina recovery speed grant |
| --- | --- | --- |
| Uncommon | `+1..2 stamina per minute` | `+5..10% stamina recovery speed` |
| Rare | `+3..5 stamina per minute` | `+11..20% stamina recovery speed` |
| Epic | `+6..10 stamina per minute` | `+21..30% stamina recovery speed` |
| Legendary | `+11..20 stamina per minute` | `+31..40% stamina recovery speed` |
| Mythical | `+21..40 stamina per minute` | `+50..60% stamina recovery speed` |

***

### **Efficiency**

`Efficiency` reduces the base stamina cost of actions before equipped item weight is applied.

{% hint style="info" %}
$$TraitReduction=min(60,floor(10*log_{10}(max(1,Efficiency))))$$

$$FinalReduction=min(90,TraitReduction+EfficiencyGrants)$$

$$ReducedBaseCost=max(ceil(RawBaseCost*0.1),ceil(RawBaseCost*(1-\frac{FinalReduction}{100}))-FlatCostGrants)$$
{% endhint %}

The trait itself can remove up to `60%` of the raw base cost. Percentage-point item grants can add more, but the final base cost cannot fall below `10%` of the raw base cost.

Base reduction before item grants:

| Efficiency | Base cost reduction |
| --- | --- |
| `1` | `0%` |
| `10` | `10%` |
| `100` | `20%` |
| `1,000` | `30%` |
| `10,000` | `40%` |
| `100,000` | `50%` |
| `1,000,000` | `60%` |

Item grants:

| Item rarity | Base stamina cost grant (percent) | Base stamina cost grant (flat) |
| --- | --- | --- |
| Uncommon | `-1% base stamina cost of actions` | `-1..2 stamina from base stamina cost` |
| Rare | `-2% base stamina cost of actions` | `-3..4 stamina from base stamina cost` |
| Epic | `-3% base stamina cost of actions` | `-5..6 stamina from base stamina cost` |
| Legendary | `-4% base stamina cost of actions` | `-7..8 stamina from base stamina cost` |
| Mythical | `-5% base stamina cost of actions` | `-9..10 stamina from base stamina cost` |

{% hint style="info" %}
Example: an action has `100` raw base cost. With `100,000` Efficiency, the base cost is reduced by `50%`, so it becomes `50` before equipped weight is applied.
{% endhint %}

***

### **Relief**

Equipped item weight increases stamina costs. `Relief` reduces that weight pressure.

Inventory weight traits do not make equipped items lighter for stamina. Equipped clothing uses its raw equipped weight.

{% hint style="info" %}
$$RawEquipmentPressure=floor(EquippedWeightKg^2)$$

$$GrantMultiplier=\prod(1-\frac{EachReliefGrant}{100})$$

$$PressureAfterGrants=RawEquipmentPressure*GrantMultiplier$$

$$ReliefPower=floor(25*(log_{10}(max(1,Relief)))^2)$$

$$EquipmentLoadPressure=ceil(\frac{PressureAfterGrants*100}{100+ReliefPower})$$

$$EquipmentMultiplier=1+\frac{EquipmentLoadPressure}{100}$$
{% endhint %}

Base equipment pressure examples before item grants and Relief:

| Equipped set | Weight | Pressure | Multiplier |
| --- | --- | --- | --- |
| Rare level 10 set, average | `19.5 kg` | `380` | `x4.80` |
| Mythical level 10 set, average | `36.5 kg` | `1,332` | `x14.32` |
| Legendary level 100 set, average | `97.9 kg` | `9,584` | `x96.84` |
| Mythical level 100 set, average | `115.4 kg` | `13,317` | `x134.17` |
| Mythical level 100 set, max | `145.5 kg` | `21,170` | `x212.70` |

Relief effect before item grants:

| Relief | Relief Power | Effect |
| --- | --- | --- |
| `1` | `0` | no reduction |
| `10` | `25` | about `19%` pressure reduction |
| `100` | `100` | `50%` pressure reduction |
| `1,000` | `225` | about `69%` pressure reduction |
| `10,000` | `400` | `80%` pressure reduction |
| `100,000` | `625` | about `86%` pressure reduction |
| `1,000,000` | `900` | `90%` pressure reduction |

Relief grants reduce stamina use from equipment before the trait curve is applied. Several grants multiply the remaining equipment pressure, so the order of grants does not matter.

| Item rarity | Stamina use from equipment grant |
| --- | --- |
| Uncommon | `-5..10% stamina use from equipment` |
| Rare | `-11..20% stamina use from equipment` |
| Epic | `-21..30% stamina use from equipment` |
| Legendary | `-31..40% stamina use from equipment` |
| Mythical | `-41..50% stamina use from equipment` |

{% hint style="info" %}
Example: a Mythical level 100 average set has `13,317` raw pressure. At `1,000,000` Relief, pressure becomes `1,332`, so the equipment multiplier is `x14.32`.

With `100` raw action cost and `1,000,000` Efficiency, the reduced base cost is `40`, so the final action cost is `ceil(40*14.32)=573` stamina.

If the player also has six maximum Mythical Relief grants, the raw pressure is multiplied by `0.5^6` before Relief. The same set has about `21` final pressure after `1,000,000` Relief, so the multiplier becomes about `x1.21`.
{% endhint %}

***

### **Absorption**

`Absorption` increases the effect of [Stamina Potions](../rpg-items/potions.md).

Stamina Potions restore a percentage of Maximum Stamina. Potion rarity decides the base restore rate:

| Potion rarity | Base restore |
| --- | --- |
| Common | `10%` |
| Uncommon | `20%` |
| Rare | `40%` |
| Epic | `80%` |
| Legendary | `160%` |
| Mythical | `320%` |

`Absorption` increases that potion effect:

{% hint style="info" %}
$$BasePotionRestore=floor(FinalMaxStamina*\frac{PotionRestoreRate}{100})$$

$$AbsorptionBonus=floor(25*log_{10}(max(1,Absorption)))$$

$$FinalPotionRestore=floor(BasePotionRestore*(1+\frac{AbsorptionBonus+PotionEffectGrants}{100}))$$
{% endhint %}

Base Absorption before item grants:

| Absorption | Stamina Potion Effect Bonus |
| --- | --- |
| `1` | `+0%` |
| `10` | `+25%` |
| `100` | `+50%` |
| `1,000` | `+75%` |
| `10,000` | `+100%` |
| `100,000` | `+125%` |
| `1,000,000` | `+150%` |

Item grants add directly to Stamina Potion effect:

| Item rarity | Stamina Potion effect grant |
| --- | --- |
| Uncommon | `+5..10% Stamina Potion effect` |
| Rare | `+11..20% Stamina Potion effect` |
| Epic | `+21..30% Stamina Potion effect` |
| Legendary | `+31..40% Stamina Potion effect` |
| Mythical | `+50..60% Stamina Potion effect` |

Example with `46,415` Maximum Stamina:

| Potion | Base restore | With `10,000` Absorption |
| --- | --- | --- |
| Common | `4,641` | `9,282` |
| Rare | `18,566` | `37,132` |
| Epic | `37,132` | `74,264` |
| Mythical | `148,528` | `297,056` |

### **Overcap**

A Stamina Potion cannot be consumed if current stamina is already at or above Maximum Stamina. If current stamina is below Maximum Stamina, the potion adds its full restore amount and may push current stamina above the maximum.

While stamina is above maximum, passive Recovery does not add stamina. Instead, only the excess stamina decays by `0.5%` per minute.

{% hint style="info" %}
$$ExcessStamina=max(0,CurrentStamina-FinalMaxStamina)$$

$$ExcessAfterDecay=floor(ExcessStamina*0.995^{ElapsedMinutes})$$

$$CurrentStamina=FinalMaxStamina+ExcessAfterDecay$$
{% endhint %}

This makes potion overcap useful for an active play session, but prevents overfilled stamina from lasting forever.

| Time without spending stamina | Excess remaining |
| --- | --- |
| `30 min` | about `86%` |
| `1 hour` | about `74%` |
| `2 hours` | about `55%` |
| `4 hours` | about `30%` |

{% hint style="info" %}
Example: a player has `46,415` Maximum Stamina and uses a potion that creates `20,717` excess stamina. After `1 hour` without spending stamina, about `15,335` excess stamina remains.
{% endhint %}
