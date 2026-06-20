---
icon: dice-d8
---

# RPG System

Questfall's RPG system turns quest activity into character progression, item demand, and player strategy.

At a high level, the live loop is:

```text
complete quests
-> earn character progress, Mining rewards, and Chest Shards
-> open lootboxes
-> receive clothing items
-> equip, sell, scrap, or level up those items
-> improve future questing, crafting, trading, stamina, and luck outcomes
```

## What Is Live Now

| Area | Live gameplay |
| --- | --- |
| Character attributes | Players level up and spend attribute points across six attributes. |
| Clothing | Lootboxes create clothing with rarity, level, weight, Aspect, perks, set, and origin. |
| Equipment | Clothing can be equipped, unequipped, sold, scrapped, and levelled up. |
| Marketplace | Items can be listed and sold. Trading affects fees and active listing slots. |
| Mining rewards | Mining affects quest reward power, Flow, moderation priority, and Chest Shard rolls. |
| Stamina | Quest actions spend stamina. Reserve, Recovery, Efficiency, and Relief affect how long and how comfortably a player can keep acting. |
| Luck | Luck affects Common Lootbox turns, shard completion, bonus lootboxes, lucky rewards, and lucky discounts. |

Some model surfaces are intentionally present before their public feature is launched. For example, Potions, Gems, item rarity evolution, Gold auctions, and liquidity-program rewards belong to the broader RPG economy, but they should be treated as planned systems unless their own product surface is live.

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

Characters start with one point in every attribute. Each new character level gives `5` more attribute points. Spending a point in an attribute improves all five traits inside that attribute, so broad build choices matter.

## Item Power

Clothing is the live tradeable item type. A clothing item can matter because of:

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
