---
icon: hammer
---

# Crafting

Crafting is the attribute for players who want to turn dropped items into Essence, upgrade useful clothing, and produce higher-rarity consumables for themselves or for the marketplace.

It affects five traits:

| Trait | Meaning |
| --- | --- |
| Scrapping | Increases Essence gained when items are destroyed. |
| Leveling | Reduces Essence cost when clothing levels are upgraded. |
| Merging | Reduces Essence cost when matching consumables are merged into a higher rarity. |
| Rarity | Reduces Essence cost when levelled items are upgraded with Gems. |
| Quality | Improves perk rolls when item rarity is upgraded. |

Crafting is meant to support a real production strategy. A player focused on quest mining can still upgrade and merge items, but a player focused on Crafting should be able to do the same work much more efficiently and sell the result on the marketplace.

{% hint style="info" %}
The formulas for `Scrapping`, `Leveling`, and potion-style `Merging` are the current settled model. `Rarity` and `Quality` are marked below because their exact formulas are still being finalized.
{% endhint %}

***

### Scrapping

Any RPG item can be scrapped for Essence. Essence has no weight and is used for item upgrades, so scrapping weak or unwanted items is one of the main ways to free inventory space and create crafting resources.

`Rarity` uses numeric values from `1` for Common to `6` for Mythical. Level-less items, such as potions, are treated as level `1` for scrapping.

{% hint style="info" %}
$$BaseScrapEssence=Rarity*(9+ItemLevel)$$

$$ScrappingBonus=floor(25*log_{10}(max(1,Scrapping)))$$

$$FinalScrapEssence=max(1,floor(BaseScrapEssence*(1+\frac{ScrappingBonus+ScrappingBonusGrants}{100}))+FlatScrappingGrants)$$
{% endhint %}

Base scrap Essence before traits and grants:

| Item | Base scrap Essence |
| --- | --- |
| Common level 1 | `10` |
| Common level 10 | `19` |
| Common level 100 | `109` |
| Mythical level 1 | `60` |
| Mythical level 10 | `114` |
| Mythical level 100 | `654` |

Base Scrapping bonus before item grants:

| Scrapping | Essence bonus |
| --- | --- |
| `1` | `+0%` |
| `10` | `+25%` |
| `100` | `+50%` |
| `1,000` | `+75%` |
| `10,000` | `+100%` |
| `1,000,000` | `+150%` |

Scrapping has two types of item grants:

| Item rarity | Flat Essence grant | Scrapping Bonus grant |
| --- | --- | --- |
| Uncommon | `+1..2` | `+10..20 percentage points` |
| Rare | `+3..4` | `+21..40 percentage points` |
| Epic | `+5..6` | `+41..60 percentage points` |
| Legendary | `+7..8` | `+61..80 percentage points` |
| Mythical | `+9..10` | `+81..100 percentage points` |

The base economy intentionally keeps rarity linear for Essence. Marketplace scarcity grows much faster than that, so low-rarity items should often be the most efficient source of Essence per Gold.

***

### Leveling

`Leveling` reduces the Essence cost of increasing the level of clothing and other levelled items.

The base cost is intentionally simple: upgrading an item to a target level costs `Rarity * TargetLevel` Essence before reductions.

{% hint style="info" %}
$$BaseLevelUpgradeCost=Rarity*TargetLevel$$

$$t=log_{10}(max(1,Leveling))$$

$$LevelingReduction=floor(\frac{60*t^2}{t^2+2})$$

$$FinalLevelUpgradeCost=max(Rarity,ceil(BaseLevelUpgradeCost*(1-\frac{min(90,LevelingReduction+LevelingGrants)}{100})))$$
{% endhint %}

The final cost cannot go below the item's numeric rarity. This prevents profitable upgrade-then-scrap loops, because scrapping value also grows by `Rarity` for every item level.

Total base cost from level `1` to level `L`:

{% hint style="info" %}
$$TotalLevelUpgradeCost=Rarity*(\frac{L*(L+1)}{2}-1)$$
{% endhint %}

Examples before Leveling reductions and grants:

| Upgrade path | Common | Mythical |
| --- | --- | --- |
| Level `1 -> 10` | `54 Essence` | `324 Essence` |
| Level `1 -> 50` | `1,274 Essence` | `7,644 Essence` |
| Level `1 -> 100` | `5,049 Essence` | `30,294 Essence` |

Base Leveling reduction before item grants:

| Leveling | Upgrade cost reduction |
| --- | --- |
| `1` | `0%` |
| `10` | `20%` |
| `100` | `40%` |
| `1,000` | `49%` |
| `10,000` | `53%` |
| `1,000,000` | `56%` |

Leveling grants add direct percentage points:

| Item rarity | Item Level Upgrade Cost Reduction grant |
| --- | --- |
| Uncommon | `+1 percentage point` |
| Rare | `+2 percentage points` |
| Epic | `+3 percentage points` |
| Legendary | `+4 percentage points` |
| Mythical | `+5 percentage points` |

Flat Essence discounts are not used for Leveling, because they can make low-level upgrades free or profitable to upgrade and scrap.

***

### Evolving

Questfall has two rarity upgrade paths:

1. Level-less consumables, such as potions, are evolved by merging matching items.
2. Levelled items, such as clothing, are evolved with Gems.

In Questfall v1, [potions](../rpg-items/potions.md) use the merging path. [Gems](../rpg-items/gems.md) come from the [Liquidity Program](../../../infrastructure/liquidity-program.md) and are reserved for item rarity upgrades.

***

### Merging

`Merging` reduces the Essence cost of combining matching level-less consumables into a higher rarity item.

For Stamina Potions, two matching potions are merged into one potion of the next rarity. Since marketplace rarity value is expected to grow by about `x5` per rarity tier, the missing value of the other three inputs is paid in Essence.

{% hint style="info" %}
$$MergeInputs=2$$

$$RarityMarketStep=5$$

$$CommonLevelOneScrapEssence=10$$

$$BaseMergeEssenceCost=(RarityMarketStep-MergeInputs)*CommonLevelOneScrapEssence*5^{SourceRarity-1}$$
{% endhint %}

`SourceRarity` is the numeric rarity before merging: Common `1`, Uncommon `2`, Rare `3`, Epic `4`, Legendary `5`.

Base potion merging costs before traits and grants:

| Merge | Base Essence cost |
| --- | --- |
| Common -> Uncommon | `30` |
| Uncommon -> Rare | `150` |
| Rare -> Epic | `750` |
| Epic -> Legendary | `3,750` |
| Legendary -> Mythical | `18,750` |

Merging grants reduce the base cost before the trait curve. Several grants multiply the remaining cost, so six maximum Mythical grants apply `0.5^6` and leave `1.5625%` of the base cost.

| Item rarity | Item Merge Base Cost Reduction grant |
| --- | --- |
| Uncommon | `+5..10%` |
| Rare | `+11..20%` |
| Epic | `+21..30%` |
| Legendary | `+31..40%` |
| Mythical | `+41..50%` |

After grants, the `Merging` trait reduces the remaining cost:

{% hint style="info" %}
$$t=log_{10}(max(1,Merging))$$

$$MergingReduction=floor(\frac{100*t^2}{t^2+2})$$

$$FinalMergeEssenceCost=max(1,ceil(CostAfterMergingGrants*(1-\frac{MergingReduction}{100})))$$
{% endhint %}

Base Merging reduction before item grants:

| Merging | Merge cost reduction |
| --- | --- |
| `1` | `0%` |
| `10` | `33%` |
| `100` | `66%` |
| `1,000` | `81%` |
| `10,000` | `88%` |
| `1,000,000` | `94%` |

Example total Essence cost to turn `32` Common Stamina Potions into `1` Mythical Stamina Potion:

| Build | Total Essence |
| --- | --- |
| No grants, `Merging 1` | `30,930` |
| One maximum Mythical grant, `Merging 1` | `15,465` |
| Six maximum Mythical grants, `Merging 1` | `499` |
| No grants, `Merging 10,000` | `3,454` |
| Six maximum Mythical grants, `Merging 10,000` | `79` |

This makes high-end potion production very cheap for specialized crafters, while keeping it expensive for players without Merging investment or supporting gear.

***

### Rarity

`Rarity` will reduce Essence costs when levelled items are upgraded with Gems.

{% hint style="warning" %}
The exact Rarity upgrade base cost and trait curve are still being finalized. The grant pattern is already fixed: Rarity grants reduce `Rarity Upgrade Base Cost` multiplicatively before the Rarity trait curve.
{% endhint %}

Planned Rarity grants:

| Item rarity | Rarity Upgrade Base Cost Reduction grant |
| --- | --- |
| Uncommon | `+5..10%` |
| Rare | `+11..20%` |
| Epic | `+21..30%` |
| Legendary | `+31..40%` |
| Mythical | `+41..50%` |

***

### Quality

`Quality` improves perk rolls when an item's rarity is upgraded. It is meant to bias generated values toward the upper end of the relevant rarity ranges.

{% hint style="warning" %}
The exact Quality formula is still being finalized. Quality should not increase scrap Essence and should not replace the normal rarity range rules; it should only improve rolls inside those ranges.
{% endhint %}
