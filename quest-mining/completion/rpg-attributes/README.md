---
icon: chart-simple
---

# RPG Attributes

Attributes are the player's build choices. They decide what kind of character the player is creating: miner, trader, crafter, stamina-heavy quester, luck-focused opener, or some hybrid.

Characters start at level `1` with one point in each attribute. Every new level gives `5` attribute points to spend. One point in an attribute improves all five traits inside that attribute.

| Attribute | Main player benefit | Traits |
| --- | --- | --- |
| [Inventory](inventory.md) | Carry more, swap gear cheaper, use higher-level items better. | Levitation, Equipping, Overlevel, Capacity, Exemption |
| [Mining](mining.md) | Earn more from quests and receive more Chest Shard rolls. | Priority, Flow, Focus, Power, Loot |
| [Crafting](crafting.md) | Get more Essence and level up useful clothing cheaper. | Scrapping, Leveling, Merging, Rarity, Quality |
| [Trading](trading.md) | Pay lower marketplace fees, convert Gold better, list more items. | Fee, Bid, Liquidity, Conversion, Slots |
| [Stamina](stamina.md) | Perform more actions and handle heavier equipment. | Efficiency, Absorption, Reserve, Recovery, Relief |
| [Luck](luck.md) | Improve random outcomes and lucky bonuses. | Shards, Boxes, Chance, Bonus, Cards |

## How Items Affect Attributes

Items can improve a character in several different ways:

| Item effect | What it means for the player |
| --- | --- |
| Aspect | Adds broad power to one attribute, improving all five traits inside it. |
| Attribute grant | Adds more broad power to one attribute. |
| Trait terminal perk | Adds power to one concrete trait, such as Mining Loot or Trading Slots. |
| Direct grant | Improves one final system output directly, such as marketplace slots or stamina recovery. |
| Booster perk | Amplifies another perk on another equipped item. |

## Trait Values And Grants

The detailed attribute pages separate two different kinds of item power:

| Power type | Generated range | How it behaves |
| --- | --- | --- |
| Trait terminal perk | Base seed by rarity: E `+1`, D `+2`, C `+3`, B `+4`, A `+5`; the final value also depends on item level, roll quality, and condition factor. | Adds to one concrete trait value, so it moves the character along the mastery tables. |
| Attribute grant | E `+40` to `+60`, D `+80` to `+120`, C `+120` to `+180`, B `+160` to `+240`, A `+200` to `+300`. | Adds broad power to one attribute, helping all five traits inside it. |
| Direct grant | Each trait has its own E-A range on its attribute page. | Does not increase the trait value; it modifies the final system value after the trait is calculated. |
| Booster perk | F `+10%` to `+15%`, E `+15%` to `+25%`, D `+25%` to `+40%`, C `+40%` to `+65%`, B `+65%` to `+100%`, A `+100%` to `+160%`. | Amplifies another perk on another equipped item when its target condition matches. |

Equipped items above the character's own level still work, but useful item effects can be reduced by [Inventory Overlevel](inventory.md#overlevel). Item weight is not reduced by Overlevel, so wearing a very heavy high-level item early can still hurt stamina use.

## Live And Planned Traits

Most traits already affect live gameplay. Some traits are part of the broader model but their public feature is not live yet. Those traits can still appear in the build model and item system, but players should not treat them as active strategy until the connected feature launches.

The individual attribute pages call this out directly.
