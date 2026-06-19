---
icon: box
---

# Inventory

Inventory is the attribute for players who want better control over inventory weight, equipment costs, and higher-level clothing.

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
In production rules, if a user's inventory is overloaded, the user cannot perform actions that add new items to the inventory, such as opening loot boxes, buying items from the marketplace, or bringing an item from NFT into the game.
During the current internal testing release, this intake gate is temporarily disabled so the team can receive new items while testing builds. Inventory capacity and overload state are still calculated and displayed.
{% endhint %}

To free inventory space, an RPG item can be [scrapped](crafting.md#scrapping) for Essence, sold on the [marketplace](../../../infrastructure/marketplace.md), equipped if it is clothing, or withdrawn as an NFT when the item type and rarity support withdrawal.

RPG items can also add direct grants to final Inventory effects. Grant values depend on item rarity.

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

| Item rarity | Inventory weight limit grant (flat) | Inventory weight limit grant (percent) |
| --- | --- | --- |
| Uncommon | `+10..20 kg to inventory weight limit` | `+5..10% to inventory weight limit` |
| Rare | `+21..40 kg to inventory weight limit` | `+11..25% to inventory weight limit` |
| Epic | `+41..60 kg to inventory weight limit` | `+26..50% to inventory weight limit` |
| Legendary | `+61..80 kg to inventory weight limit` | `+51..75% to inventory weight limit` |
| Mythical | `+81..100 kg to inventory weight limit` | `+76..100% to inventory weight limit` |

Percent grants apply to the base capacity first. Flat grants are added after that, so Capacity grants do not multiply each other.

{% hint style="info" %}
Example: a player has `1,000` Capacity, so the base inventory limit is `50 kg`. A Mythical item with `+100% to inventory weight limit` and `+100 kg to inventory weight limit` raises the final limit to `200 kg`: `50 kg` base, `+50 kg` from percent, and `+100 kg` from flat grant.
{% endhint %}

***

### **Exemption**

`Exemption` ignores the heaviest carried inventory items before Levitation is applied.

Items are sorted by raw item weight. Because of that, the same items are ignored regardless of Levitation values or Levitation grants.

{% hint style="info" %}
$$BaseIgnoredItems=floor(\frac{\sqrt[3]{max(1,Exemption)}}{2})$$

$$FinalIgnoredItems=BaseIgnoredItems+ExemptionGrants$$
{% endhint %}

Base ignored items before item grants:

| Exemption | Ignored heaviest inventory items |
| --- | --- |
| `1` | `0` |
| `10` | `1` |
| `100` | `2` |
| `1,000` | `5` |
| `10,000` | `10` |
| `100,000` | `23` |
| `1,000,000` | `50` |

Item grants add more ignored heavy items:

| Item rarity | Heaviest items ignored in inventory grant |
| --- | --- |
| Uncommon | `+1..2 heaviest items ignored in inventory` |
| Rare | `+3..4 heaviest items ignored in inventory` |
| Epic | `+5..6 heaviest items ignored in inventory` |
| Legendary | `+7..8 heaviest items ignored in inventory` |
| Mythical | `+9..10 heaviest items ignored in inventory` |

{% hint style="info" %}
Example: a player has `1,000` Exemption, so the base value is `5` ignored items. If items add `+14 heaviest items ignored in inventory`, the final value becomes `19`, and the 19 heaviest inventory items are ignored before Levitation is calculated.
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

| Item rarity | Item weight in inventory grant | Each item in inventory grant |
| --- | --- | --- |
| Uncommon | `-1% item weight in inventory` | `-10..15 grams for each item in inventory` |
| Rare | `-2% item weight in inventory` | `-16..30 grams for each item in inventory` |
| Epic | `-3% item weight in inventory` | `-31..50 grams for each item in inventory` |
| Legendary | `-4% item weight in inventory` | `-51..75 grams for each item in inventory` |
| Mythical | `-5% item weight in inventory` | `-76..100 grams for each item in inventory` |

The final weight for each non-ignored item is:

{% hint style="info" %}
$$WeightAfterPercent_{g}=ceil(RawWeight_{g}*(1-\frac{FinalWeightReduction}{100}))$$

$$MinimumWeight_{g}=max(1,ceil(RawWeight_{g}*0.1))$$

$$EffectiveWeight_{g}=max(MinimumWeight_{g},WeightAfterPercent_{g}-FlatWeightGrants_{g})$$
{% endhint %}

{% hint style="info" %}
Example: a `1,000 g` item is not ignored by Exemption. The player has `100` Levitation, one Mythical `-5% item weight in inventory` grant, and `-100 grams for each item in inventory` flat grants.

The base reduction is `40%`, the final reduction is `45%`, and the item becomes `550 g` after percent reduction. The flat grant then reduces it to `450 g`. Since the minimum is `100 g`, the final weight is `450 g`.
{% endhint %}

***

### **Equipping**

`Equipping` reduces the Essence cost paid when clothing is equipped.

{% hint style="warning" %}
During the current internal testing release, equipment changes do not spend Essence. The Equipping value is still calculated and displayed so builds and grant text can be tested freely.
{% endhint %}

The base cost depends on item rarity and item level. Item level uses a cube-root curve, so high-level items cost more to equip, but the price does not grow linearly.

{% hint style="info" %}
$$BaseEquipCost=ceil(Rarity*\sqrt[3]{max(1,ItemLevel)})$$

$$GrantMultiplier=\prod(1-\frac{EachEquippingGrant}{100})$$

$$EquipCostAfterGrants=BaseEquipCost*GrantMultiplier$$

$$TraitCostReduction=floor(10*log_{10}(max(1,Equipping)))$$

$$FinalEquipCost=max(1,ceil(EquipCostAfterGrants*(1-\frac{TraitCostReduction}{100})))$$
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

Equipping grants reduce the base equipment cost before the trait reduction. Several grants multiply the remaining cost, so the order of grants does not matter.

| Item rarity | Essence cost to equip items grant |
| --- | --- |
| Uncommon | `-5..10% Essence cost to equip items` |
| Rare | `-11..20% Essence cost to equip items` |
| Epic | `-21..30% Essence cost to equip items` |
| Legendary | `-31..40% Essence cost to equip items` |
| Mythical | `-41..50% Essence cost to equip items` |

{% hint style="info" %}
Example: a Mythical level 100 item has base equip cost `28 Essence`. A player with `1,000` Equipping has `30%` base reduction, so the cost becomes `20 Essence`.

If one Mythical item has a maximum `-50% Essence cost to equip items` grant, it cuts the base cost to `14 Essence` before the trait. Then `1,000` Equipping applies its `30%` trait reduction, so the final cost is `10 Essence`.

Six maximum Mythical Equipping grants apply `0.5^6`, leaving only `1.5625%` of the base cost before the trait. The final cost still cannot go below `1 Essence`.
{% endhint %}

***

### **Overlevel**

Players can equip clothing above their character level. `Overlevel` decides how much higher the item can be before its useful effects are reduced.

If an equipped item is within the free overlevel range, it works at full strength. If it is above that range, the item still stays equipped, but its useful effects are scaled down.

{% hint style="info" %}
Overlevel affects useful item effects: aspect, grants, terminal perks, booster perks, and other positive system values from the item.

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

| Item rarity | Overlevel allowance grant | Character-level overlevel allowance grant |
| --- | --- | --- |
| Uncommon | `+1..2 levels of overlevel allowance` | `+1..2% character level as overlevel allowance` |
| Rare | `+3..4 levels of overlevel allowance` | `+3..4% character level as overlevel allowance` |
| Epic | `+5..6 levels of overlevel allowance` | `+5..6% character level as overlevel allowance` |
| Legendary | `+7..8 levels of overlevel allowance` | `+7..8% character level as overlevel allowance` |
| Mythical | `+9..10 levels of overlevel allowance` | `+9..10% character level as overlevel allowance` |

For a level 20 character before item grants:

| Free levels | Level 30 item | Level 50 item | Level 100 item |
| --- | --- | --- | --- |
| `0` | `66%` power | `40%` power | `20%` power |
| `5` | `83%` power | `50%` power | `25%` power |
| `10` | `100%` power | `60%` power | `30%` power |
| `50` | `100%` power | `100%` power | `70%` power |

{% hint style="info" %}
Example: a level 20 player has `1,000` Overlevel, an Epic `+6 levels of overlevel allowance` grant, and a Legendary `+8% character level as overlevel allowance` grant.

The base value is `+5` free levels. The relative grant adds `floor(20*8/100)=1` more free level. The final free level value is `12`, so the character can use items up to level `32` at full strength.

A level 50 item would work at `64%` power: `(20+12)/50`.
{% endhint %}
