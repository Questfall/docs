---
icon: box-open-full
---

# RPG Items

RPG items are the tradeable power layer of Questfall. They make character builds personal: one item can be ordinary for one player and extremely valuable for another because of its slot, Aspect, perks, set, origin, level, and rarity.

## Release Status

Clothing and the consumable actions below are live in App 0.7.01. The
[dated production settings snapshot](../../../assets/economy-settings.md) records
the configured prices and recipes.

| Item type | Status | Current role |
| --- | --- | --- |
| [Clothing](items.md) | Live | Drops from lootboxes, can be equipped, sold, scrapped, and levelled up. |
| [Potions](potions.md) | Live | Common-box drops, Stamina recovery, merging and Gold trading. |
| [Gems](gems.md) | Live | Weekly Gold-buyer rewards, merging, clothing evolution, permanent Perfect status and Gold trading. |
| [Dice](dice.md) | Live | Scrapping rewards, perk rerolls, merging and Gold trading. |

Clothing is equipped. Consumables stay in inventory and are spent on their own actions.

## Rarity

Clothing, Potions and Gems use six rarity tiers. Dice start at Uncommon (E):

| Rarity | Letter | Item value | Clothing perk slots |
| --- | --- | ---: | ---: |
| Common | F | `1` | `0` |
| Uncommon | E | `2` | `1` |
| Rare | D | `3` | `2` |
| Epic | C | `4` | `3` |
| Legendary | B | `5` | `4` |
| Mythical | A | `6` | `5` |

Lootbox rarity is a clothing floor. A Rare Lootbox creates Rare or better clothing.
A won Common-box item card rolls clothing or a Potion using the configured drop
policy. Gems and Dice do not drop from lootboxes.

## What Makes An Item Valuable

An item can be valuable because of several independent reasons:

| Value source | Why it matters |
| --- | --- |
| Rarity | More perk slots and stronger growth. |
| Level | More Aspect and stronger terminal trait value, but also more weight. |
| Aspect | Broad attribute power for one attribute. |
| Perks | Concrete trait power, direct grants, attribute grants, or booster links. |
| Slot | The item must fit the slot a build needs. |
| Set and origin | Matching items can strengthen booster links. |
| Weight | Heavy items can be powerful but increase stamina pressure when equipped. |

This is why the marketplace is not only about rarity. A lower-rarity item with the right slot, Aspect, and perk links can be more useful to a specific build than a higher-rarity item that does not fit.

## Item Actions

Available clothing actions:

| Action | Meaning |
| --- | --- |
| Equip | Put the item into its clothing slot and apply its effects. |
| Unequip | Move equipped clothing back to inventory. |
| Sell | List the item on the marketplace. |
| Scrap | Destroy the item for Essence; E–A clothing also grants matching Dice. |
| Level up | Spend Essence to increase item level by one. |
| Evolve | Consume a matching Gem and Essence to raise clothing rarity. |
| Max Out | Consume a Mythical Gem and Essence to make the whole item permanently Perfect. |
| Reroll | Consume matching Dice and Essence to replace one perk. |

Potions restore Stamina. Potions, Gems and Dice merge into the next rarity using
their separate recipes. The common Consumables category keeps stacks separate
by kind and rarity; all three types can trade for Gold.
