---
icon: chart-simple
---

# RPG Attributes

Attributes are the player's build choices. They decide what kind of character the player is creating: miner, trader, crafter, stamina-heavy quester, luck-focused opener, or some hybrid.

Characters start at level `1` with one point in each attribute. Every new level gives `6` attribute points to spend. One point in an attribute improves all five traits inside that attribute.

| Attribute | Main player benefit | Traits |
| --- | --- | --- |
| [Inventory](inventory.md) | Carry more, swap gear cheaper, use higher-level items better. | Levitation, Equipping, Overlevel, Capacity, Exemption |
| [Mining](mining.md) | Earn more from quests and receive more Chest Shard rolls. | Priority, Flow, Focus, Power, Loot |
| [Crafting](crafting.md) | Get more Essence and level up useful clothing cheaper. | Scrapping, Leveling, Merging, Rarity, Quality |
| [Trading](trading.md) | Pay lower marketplace fees, convert Gold better, list more items. | Fee, Bid, Liquidity, Conversion, Slots |
| [Stamina](stamina.md) | Perform more actions and handle heavier equipment. | Efficiency, Absorption, Reserve, Recovery, Relief |
| [Luck](luck.md) | Improve random outcomes and lucky bonuses. | Shards, Boxes, Chance, Bonus, Cards |

## Reading The Charts

Each trait has a growth chart directly beside its explanation and tables on the attribute page. The charts use the backend formulas and include Mastery effects.

**Trait Units (TU)** are the trait's final value after character and equipment effects, not character levels or spent attribute points. The horizontal axis is logarithmic: equal distances represent equal multiplication of TU. Zero-value effects appear in the Mastery tables. The upper plotted value is a viewing limit, not a gameplay cap.

The blue curve has no direct grants. Each additional curve adds one maximum Mythical (A) direct grant independently; the curves are not a combined equipment build. Each chart states its units and any fixed example inputs. Capacity, Reserve, Recovery, and Shards also use a logarithmic vertical axis. A formula can be charted before its feature launches; check the trait's status on the same page.

## Mastery Ranks

Each trait has its own mastery rank. The rank is calculated from that trait's final value after character points, Aspect, attribute grants, terminal perks, and booster effects. A booster can therefore help a terminal perk cross a mastery threshold. Direct grants do not add trait value and cannot unlock mastery.

| Mastery | Trait value required |
| --- | ---: |
| Guest | below `25` |
| Novice | `25` |
| Apprentice | `100` |
| Adept | `300` |
| Specialist | `1,000` |
| Expert | `3,000` |
| Master | `10,000` |
| Grandmaster | `30,000` |
| Wizard | `100,000` |
| Mystic | `300,000` |
| Immortal | `1,000,000` |
| Absolute | `3,000,000` |

Every reached rank grants a permanent trait-specific reward. There is no universal mastery bonus: Levitation removes grams, Mining Power adds percentage points, Trading Slots adds slots, Cards adds fractional expected turns, and so on. The detailed attribute pages show the exact reward for each trait. A mastery reward is applied once and is not fed back into the trait value or boosted recursively.

Progress continues after Absolute. Trait values `10,000,000`, `100,000,000`, `1,000,000,000`, and each following decimal order unlock another rank and another copy of that trait's mastery reward.

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
| Attribute grant | E `+40` to `+60`, D `+80` to `+120`, C `+120` to `+180`, B `+160` to `+240`, A `+200` to `+250`. | Adds broad power to one attribute, helping all five traits inside it. |
| Direct grant | Each trait has its own E-A range on its attribute page. | Does not increase the trait value; it modifies the final system value after the trait is calculated. |
| Booster perk | F `+10%` to `+15%`, E `+15%` to `+25%`, D `+25%` to `+40%`, C `+40%` to `+65%`, B `+65%` to `+100%`, A `+100%` to `+160%`. | Amplifies another perk on another equipped item when its target condition matches. |

Equipped items above the character's own level still work, but useful item effects can be reduced by [Inventory Overlevel](inventory.md#overlevel). Item weight is not reduced by Overlevel, so wearing a very heavy high-level item early can still hurt stamina use.

## Live And Planned Traits

Some traits already affect live gameplay. Others are part of the finalized RPG model but their public feature is not live yet. Those traits can still appear in the build model and item system, but players should not treat them as active strategy until the connected feature launches.

The individual attribute pages call this out directly. The current boundaries are:

| Attribute | Connected to current gameplay | Modelled or planned limitation |
| --- | --- | --- |
| Inventory | Levitation, Overlevel, Capacity, Exemption. | Equipping does not charge Essence; overload is informational and does not block actions. |
| Mining | Flow, Focus, Power, Loot. | Priority does not affect the moderation queue yet. |
| Crafting | Scrapping, Leveling. | Merging, Rarity, Quality await their product flows. |
| Trading | Fee, Conversion, Slots. | Bid and Liquidity await auctions and Gem Points. |
| Stamina | Efficiency, Reserve, Recovery, Relief. | Absorption awaits potion consumption. |
| Luck | Shards, Boxes, Chance, Bonus, Cards. | Each effect applies only to the actions described on its trait page. |

A growth chart describes a formula even when the associated feature is not yet available; it does not change that feature's status.
