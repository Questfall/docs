---
icon: dice-d8
---

# RPG System

Questfall's RPG system turns quest activity into character progression, item demand, and player strategy.

At a high level, the complete product loop is:

```text
complete quests
-> earn character progress, Mining rewards, and Chest Shards
-> open lootboxes
-> receive clothing or Stamina Potions
-> equip, sell, scrap, or level up those items
-> improve future questing, crafting, trading, stamina, and luck outcomes
```

## Current Implementation

App 0.7.01 includes consumable actions and their connected traits. The
[RPG Items](../quest-mining/completion/rpg-items/README.md) page describes their
uses; the [dated production settings snapshot](../assets/economy-settings.md)
records configured prices and recipes.

| Area | Current status |
| --- | --- |
| Character attributes | Live. Players level up and spend attribute points across six attributes. |
| Clothing and equipment | Live. Lootboxes create clothing that can be equipped, unequipped, sold, scrapped, and levelled up. Equipping is free in the Hall and League I, and costs Essence from the current open League II onward. |
| Marketplace | Live. Items can be listed, sold, and claimed. Trading Fee, Conversion, and Slots are connected. |
| Crafting | Scrapping, clothing Leveling, Potion/Gem/Dice merging, Gem evolution, permanent Perfect clothing and Dice rerolls are live. Merging, Rarity and Quality affect these actions. |
| Mining rewards | Live. Power, Flow, Focus, and Loot affect quest rewards; full Chest Shard sets award Common Lootboxes. Priority gives completion submissions a snapshotted queue advantage while preserving system review precedence. |
| Stamina | Efficiency, Reserve, Recovery and Relief affect character state and spending. Valid automatic answers and Action submissions spend a base 32 Stamina adjusted by Efficiency, Relief and equipment weight; wrong answers also spend it. Invalid requests and idempotent retries do not. Reports and moderation retain a base cost of 1. Potions restore Stamina using Absorption. |
| Luck | Common Lootbox Cards and Boxes are live. Chance and Bonus support current lucky actions. Shards affects quest-completion shard selection. |

Potions, Gems, Dice and clothing evolution are live. Gold bid auctions and
on-chain liquidity contributions remain planned;
their growth charts do not imply that those actions are available.

## Character Power

Every character has six attributes:

| Attribute | What it is for |
| --- | --- |
| [Inventory](../quest-mining/completion/rpg-attributes/inventory.md) | Carrying items, changing equipment, and using higher-level gear. |
| [Mining](../quest-mining/completion/rpg-attributes/mining.md) | Earning more from quest completion and getting more shard chances. |
| [Crafting](../quest-mining/completion/rpg-attributes/crafting.md) | Turning spare items into Essence and improving clothing. |
| [Trading](../quest-mining/completion/rpg-attributes/trading.md) | Paying lower marketplace fees, converting Gold, and listing more items. |
| [Stamina](../quest-mining/completion/rpg-attributes/stamina.md) | Doing more actions before resting and wearing heavier gear. |
| [Luck](../quest-mining/completion/rpg-attributes/luck.md) | Improving random outcomes such as shards, lootboxes, and lucky bonuses. |

Characters start with one point in every attribute. Each new character level gives `6` more attribute points. Spending a point in an attribute improves all five traits inside that attribute, so broad build choices matter.

## Item Power

Clothing is equipped to improve the character. Potions, Gems and Dice are
tradeable consumables. A clothing item can matter
because of:

* **Rarity.** Higher rarity gives more perk slots and stronger growth.
* **Level.** Higher level gives more Aspect and stronger terminal perk value, but also more weight.
* **Aspect.** Broad attribute power added by the item.
* **Perks.** Direct trait power, direct grants, attribute grants, or booster links.
* **Slot.** The item can only be equipped in its clothing slot.
* **Set and origin.** Matching items can make booster links stronger.

This makes item value contextual. An item is not valuable only because it is rare; it is valuable when it fits a real build.

## Economy Link

The RPG economy works because items can be useful, scarce, and build-specific at the same time.

Spare items are not dead inventory: they can be scrapped into Essence or sold. Strong items create demand because they improve future play. Heavy items create a tradeoff because they can increase stamina pressure. Higher-level items can be worn early, but their useful power can be reduced by Overlevel if the character is not ready for them.

That is the core design: quest activity creates items, items create strategy, strategy creates trade, and trade feeds back into progression.
