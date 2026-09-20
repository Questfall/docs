---
icon: chart-line
---

# Trait Charts

Every RPG trait has a growth chart on its attribute page. The charts are generated from the same backend functions that calculate character effects, using direct-grant values from the item catalog.

| Attribute | Charts |
| --- | --- |
| [Inventory](inventory.md) | [Levitation](inventory.md#levitation), [Equipping](inventory.md#equipping), [Overlevel](inventory.md#overlevel), [Capacity](inventory.md#capacity), [Exemption](inventory.md#exemption) |
| [Mining](mining.md) | [Priority](mining.md#priority), [Flow](mining.md#flow), [Focus](mining.md#focus), [Power](mining.md#power), [Loot](mining.md#loot) |
| [Crafting](crafting.md) | [Scrapping](crafting.md#scrapping), [Leveling](crafting.md#leveling), [Merging](crafting.md#merging), [Rarity](crafting.md#rarity), [Quality](crafting.md#quality) |
| [Trading](trading.md) | [Fee](trading.md#fee), [Bid](trading.md#bid), [Liquidity](trading.md#liquidity), [Conversion](trading.md#conversion), [Slots](trading.md#slots) |
| [Stamina](stamina.md) | [Efficiency](stamina.md#efficiency), [Absorption](stamina.md#absorption), [Reserve](stamina.md#reserve), [Recovery](stamina.md#recovery), [Relief](stamina.md#relief) |
| [Luck](luck.md) | [Shards](luck.md#shards), [Boxes](luck.md#boxes), [Chance](luck.md#chance), [Bonus](luck.md#bonus), [Cards](luck.md#cards) |

## Interactive Explorer

[Download the interactive trait explorer](../../../.gitbook/assets/trait-charts/explorer.html) and open the HTML file in a browser. It includes all 30 traits, works offline, and needs no account or installation.

Choose an attribute and a trait, switch between early progression and the long-term range, and move across a curve to inspect its sampled values. The slider provides the same inspection with a keyboard. Each trait also has a table of values at Mastery thresholds. Luck Bonus has separate plots for reward power and discount rate.

The images on the attribute pages remain readable without JavaScript or the explorer.

## How To Read The Curves

- **Trait Units (TU)** are the final value of the selected trait after character and item effects that contribute trait power. They are not character levels or spent attribute points.
- **No direct grants · with Mastery** is the complete trait effect, including its Mastery rewards. Steps can come from Mastery thresholds and from integer rounding.
- Each additional colored curve adds **one maximum Mythical (A) direct grant**, named in its legend. The curves are independent examples, not a loadout that stacks all of the grants. The example uses the grant at full effect; an under-levelled item can contribute less.
- Conversion also shows its **curve without Mastery**, so the smooth trait contribution and the Mastery steps can be compared directly.
- **Higher is better** applies to rewards, capacity, probabilities and useful effects. **Lower is better** applies to costs, remaining requirements and weight pressure. The metric and units are printed above each plot.
- The horizontal axis is **logarithmic**, from 1 to 1 billion TU. Equal horizontal distances represent equal multiplication of TU. Zero cannot appear on a log axis; starting and zero-value cases remain in the existing Mastery tables.
- Capacity, Reserve, Recovery and Shards also use a **logarithmic vertical axis** because their outputs span several orders of magnitude. All other vertical axes are linear.

The highest plotted TU value is a viewing limit, not a gameplay cap. Mastery continues beyond Absolute at each subsequent decimal threshold.

## Scenarios And Rounding

When a result depends on another input, the chart states a fixed example: a 20 kg carried item for Levitation, a specific character/item level pair for Overlevel, a fixed Essence investment for Scrapping, and so on. Such a chart illustrates that scenario rather than every possible item or build.

Probabilities, rates, expected values and whole-number payouts are different quantities. For example, Conversion plots Silver per Gold before payout rounding; Loot and Cards plot expectations rather than guaranteed counts. Shards plots relative selection weight, not a probability. Lucky effects assume a proc occurred and do not multiply by the chance of that proc.

Curves are sampled from the backend across the TU range, with extra samples on both sides of every Mastery threshold. Readouts show sampled values; use the actual action quote for a transaction. Rates preserve backend rounding, and numeric display may round further for readability.

These charts document the checked-in RPG implementation. A formula can exist before its gameplay feature is enabled; the status and explanation on each attribute page still apply. The graphs are saved snapshots and refresh when documentation is regenerated, not when a player changes their build.
