---
icon: box
---

# Items

Items is the attribute for players who want better control over inventory weight, equipment costs, and higher-level clothing.

It affects five traits:

| Trait | Meaning |
| --- | --- |
| Capacity | Increases how much weight the inventory can hold. |
| Exemption | Ignores some of the heaviest inventory items when inventory load is calculated. |
| Levitation | Makes non-ignored inventory items lighter. |
| Equipping | Reduces the Essence cost of equipping clothing. |
| Overlevel | Lets higher-level equipped items work without penalty for more levels above character level. |

The inventory is the place where unused RPG items are stored. Equipped clothing is not counted as inventory load, but its weight can still matter because equipped weight affects stamina costs during quest mining.

{% hint style="info" %}
If a user's inventory is overloaded, the user cannot perform actions that add new items to the inventory, such as opening loot boxes, buying items from the marketplace, or bringing an item from NFT into the game.
{% endhint %}

To free inventory space, an RPG item can be [scrapped](crafting.md#scrapping) for Essence, sold on the [marketplace](../../../infrastructure/marketplace.md), equipped if it is clothing, or withdrawn as an NFT when the item type and rarity support withdrawal.

RPG items can also add direct grants to final Items effects. Grant values depend on item rarity.

***

### **Inventory load**

Inventory load is calculated in a fixed order:

1. `Capacity` sets the total weight limit.
2. `Exemption` ignores the heaviest inventory items by raw weight.
3. `Levitation` reduces the weight of the remaining inventory items by percent.
4. Flat Levitation grants reduce the already reduced weight of each remaining item.
5. Each non-ignored item always keeps at least `10%` of its raw weight.

This means `Exemption` and `Levitation` support different strategies. `Exemption` is best against a small number of very heavy items. `Levitation` is best when the player carries many items.

{% hint style="info" %}
All inventory weight calculations use grams internally. User interfaces may display the same values in kilograms.
{% endhint %}

***

### **Capacity**

`Capacity` controls the inventory weight limit. It has no hard cap, but it grows with diminishing returns.

{% hint style="info" %}
$$BaseCapacity_{g}=floor(5000*\sqrt[3]{max(1,Capacity)})$$

$$PercentCapacityBonus_{g}=floor(BaseCapacity_{g}*\frac{CapacityPercentGrants}{100})$$

$$FinalCapacity_{g}=BaseCapacity_{g}+PercentCapacityBonus_{g}+CapacityFlatGrants_{g}$$
{% endhint %}

Base capacity before item grants:

| Capacity | Inventory weight capacity |
| --- | --- |
| `1` | `5.000 kg` |
| `10` | `10.772 kg` |
| `100` | `23.207 kg` |
| `1,000` | `50.000 kg` |
| `10,000` | `107.721 kg` |
| `100,000` | `232.079 kg` |
| `1,000,000` | `500.000 kg` |

Capacity has two types of item grants:

| Item rarity | Flat Capacity grant | Percent Capacity grant |
| --- | --- | --- |
| Uncommon | `+10,000..20,000 g` | `+5..10%` |
| Rare | `+21,000..40,000 g` | `+11..25%` |
| Epic | `+41,000..60,000 g` | `+26..50%` |
| Legendary | `+61,000..80,000 g` | `+51..75%` |
| Mythical | `+81,000..100,000 g` | `+76..100%` |

Percent grants apply to the base capacity first. Flat grants are added after that, so Capacity grants do not multiply each other.

{% hint style="info" %}
Example: a player has `1,000` Capacity, so the base inventory limit is `50 kg`. A Mythical item with `+100% Capacity` and `+100,000 g Capacity` raises the final limit to `200 kg`: `50 kg` base, `+50 kg` from percent, and `+100 kg` from flat grant.
{% endhint %}

***

### **Exemption**

`Exemption` ignores the heaviest carried inventory items before Levitation is applied.

Items are sorted by raw item weight. Because of that, the same items are ignored regardless of Levitation values or Levitation grants.

{% hint style="info" %}
$$BaseIgnoredItems=floor(log_{10}(max(1,Exemption)))$$

$$FinalIgnoredItems=BaseIgnoredItems+ExemptionGrants$$
{% endhint %}

Base ignored items before item grants:

| Exemption | Ignored heaviest inventory items |
| --- | --- |
| `1` | `0` |
| `10` | `1` |
| `100` | `2` |
| `1,000` | `3` |
| `10,000` | `4` |
| `1,000,000` | `6` |

Item grants add more ignored heavy items:

| Item rarity | Ignored Heavy Inventory Items grant |
| --- | --- |
| Uncommon | `+1..2` |
| Rare | `+3..4` |
| Epic | `+5..6` |
| Legendary | `+7..8` |
| Mythical | `+9..10` |

{% hint style="info" %}
Example: a player has `1,000` Exemption, so the base value is `3` ignored items. If items add `+14 Ignored Heavy Inventory Items`, the final value becomes `17`, and the 17 heaviest inventory items are ignored before Levitation is calculated.
{% endhint %}

***

### **Levitation**

`Levitation` reduces the effective weight of inventory items that were not ignored by Exemption.

It has a soft limit in the trait curve, but item grants can push the final reduction higher. Even then, a non-ignored item can never become lighter than `10%` of its raw weight.

{% hint style="info" %}
$$t=log_{10}(max(1,Levitation))$$

$$BaseWeightReduction=floor(\frac{60*t^2}{t^2+2})$$

$$FinalWeightReduction=min(90\%,BaseWeightReduction+WeightReductionGrants)$$
{% endhint %}

Base reduction before item grants:

| Levitation | Weight reduction | Effective item weight |
| --- | --- | --- |
| `1` | `0%` | `100%` |
| `10` | `20%` | `80%` |
| `100` | `40%` | `60%` |
| `1,000` | `49%` | `51%` |
| `10,000` | `53%` | `47%` |
| `1,000,000` | `56%` | `44%` |

Levitation has two types of item grants:

| Item rarity | Weight Reduction grant | Each Inventory Item Weight grant |
| --- | --- | --- |
| Uncommon | `+1 percentage point` | `-10..15 g` |
| Rare | `+2 percentage points` | `-16..30 g` |
| Epic | `+3 percentage points` | `-31..50 g` |
| Legendary | `+4 percentage points` | `-51..75 g` |
| Mythical | `+5 percentage points` | `-76..100 g` |

The final weight for each non-ignored item is:

{% hint style="info" %}
$$WeightAfterPercent_{g}=ceil(RawWeight_{g}*(1-\frac{FinalWeightReduction}{100}))$$

$$MinimumWeight_{g}=max(1,ceil(RawWeight_{g}*0.1))$$

$$EffectiveWeight_{g}=max(MinimumWeight_{g},WeightAfterPercent_{g}-FlatWeightGrants_{g})$$
{% endhint %}

{% hint style="info" %}
Example: a `1,000 g` item is not ignored by Exemption. The player has `100` Levitation, one Mythical `+5 percentage points` grant, and `-100 g` flat weight grants.

The base reduction is `40%`, the final reduction is `45%`, and the item becomes `550 g` after percent reduction. The flat grant then reduces it to `450 g`. Since the minimum is `100 g`, the final weight is `450 g`.
{% endhint %}

***

### **Equipping**

`Equipping` reduces the Essence cost paid when clothing is equipped.

The base cost depends on item rarity and item level. Item level uses a cube-root curve, so high-level items cost more to equip, but the price does not grow linearly.

{% hint style="info" %}
$$BaseEquipCost=ceil(Rarity*\sqrt[3]{max(1,ItemLevel)})$$

$$TraitCostReduction=floor(10*log_{10}(max(1,Equipping)))$$

$$FinalCostReduction=min(90\%,TraitCostReduction+CostReductionGrants)$$

$$FinalEquipCost=max(1,ceil(BaseEquipCost*(1-\frac{FinalCostReduction}{100}))-FlatCostGrants)$$
{% endhint %}

`Rarity` uses the numeric rarity value from `1` for Common to `6` for Mythical. Equipping can never be free: the final cost is always at least `1 Essence`.

Base equip cost before item grants:

| Item level | Common | Uncommon | Rare | Epic | Legendary | Mythical |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `1` | `2` | `3` | `4` | `5` | `6` |
| `10` | `3` | `5` | `7` | `9` | `11` | `13` |
| `100` | `5` | `10` | `14` | `19` | `24` | `28` |
| `1,000` | `10` | `20` | `30` | `40` | `50` | `60` |
| `10,000` | `22` | `44` | `65` | `87` | `108` | `130` |

Trait reduction before item grants:

| Equipping | Equipment Essence Cost Reduction |
| --- | --- |
| `1` | `0%` |
| `10` | `10%` |
| `100` | `20%` |
| `1,000` | `30%` |
| `10,000` | `40%` |
| `100,000` | `50%` |
| `1,000,000` | `60%` |

Equipping has two types of item grants:

| Item rarity | Cost Reduction grant | Flat Equipment Essence Cost grant |
| --- | --- | --- |
| Uncommon | `+1 percentage point` | `-1..2 Essence` |
| Rare | `+2 percentage points` | `-3..4 Essence` |
| Epic | `+3 percentage points` | `-5..6 Essence` |
| Legendary | `+4 percentage points` | `-7..8 Essence` |
| Mythical | `+5 percentage points` | `-9..10 Essence` |

{% hint style="info" %}
Example: a Mythical level 100 item has base equip cost `28 Essence`. A player with `1,000` Equipping has `30%` base reduction, so the cost becomes `20 Essence`.

If one Mythical item adds `+5 percentage points` and `-10 Essence`, the same equip action costs `9 Essence`: first percent reduction reduces the cost to `19`, then the flat grant subtracts `10`.
{% endhint %}

***

### **Overlevel**

Players can equip clothing above their character level. `Overlevel` decides how much higher the item can be before its useful effects are reduced.

If an equipped item is within the free overlevel range, it works at full strength. If it is above that range, the item still stays equipped, but its useful effects are scaled down.

{% hint style="info" %}
Overlevel affects useful item effects: resonance, grants, terminal perks, booster perks, and other positive system values from the item.

It does not reduce item weight, equipment Essence cost, rarity, slot rules, or ownership.
{% endhint %}

Overlevel Free Levels are calculated before the item-level penalty is applied. This avoids circular logic: the system first decides how high the character can effectively equip, and only then reduces other item effects above that point.

{% hint style="info" %}
$$BaseFreeLevels=floor(\frac{\sqrt[3]{max(1,Overlevel)}}{2})$$

$$RelativeFreeLevels=floor(CharacterLevel*\frac{RelativeOverlevelGrants}{100})$$

$$FinalFreeLevels=BaseFreeLevels+AbsoluteFreeLevelGrants+RelativeFreeLevels$$

$$EffectiveCharacterLevel=CharacterLevel+FinalFreeLevels$$

$$ItemPower=min(1,\frac{EffectiveCharacterLevel}{max(1,ItemLevel)})$$

$$EffectiveItemEffect=floor(RawItemEffect*ItemPower)$$
{% endhint %}

Base free levels before item grants:

| Overlevel | Free levels above character level |
| --- | --- |
| `1` | `+0` |
| `10` | `+1` |
| `100` | `+2` |
| `1,000` | `+5` |
| `10,000` | `+10` |
| `100,000` | `+23` |
| `1,000,000` | `+50` |

Overlevel has two types of item grants:

| Item rarity | Absolute Free Levels grant | Relative Free Levels grant |
| --- | --- | --- |
| Uncommon | `+1..2` | `+1..2% of character level` |
| Rare | `+3..4` | `+3..4% of character level` |
| Epic | `+5..6` | `+5..6% of character level` |
| Legendary | `+7..8` | `+7..8% of character level` |
| Mythical | `+9..10` | `+9..10% of character level` |

For a level 20 character before item grants:

| Free levels | Level 30 item | Level 50 item | Level 100 item |
| --- | --- | --- | --- |
| `0` | `66%` power | `40%` power | `20%` power |
| `5` | `83%` power | `50%` power | `25%` power |
| `10` | `100%` power | `60%` power | `30%` power |
| `50` | `100%` power | `100%` power | `70%` power |

{% hint style="info" %}
Example: a level 20 player has `1,000` Overlevel, an Epic `+6 Free Levels` grant, and a Legendary `+8% of character level` grant.

The base value is `+5` free levels. The relative grant adds `floor(20*8/100)=1` more free level. The final free level value is `12`, so the character can use items up to level `32` at full strength.

A level 50 item would work at `64%` power: `(20+12)/50`.
{% endhint %}
