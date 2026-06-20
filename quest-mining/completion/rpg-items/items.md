---
icon: shirt
---

# Clothing

Clothing is the live RPG item type in Questfall. It drops from lootboxes, can be equipped by the character, can be traded on the marketplace, can be scrapped for Essence, and can be levelled up with Essence.

## Why Clothing Matters

Clothing is not just a flat stat bonus. A clothing item can change a build through:

* broad attribute Aspect;
* direct attribute grants;
* concrete trait perks;
* direct grants;
* booster links to other perks;
* set and origin affinity;
* item weight and stamina pressure.

The same item can be weak in one build and strong in another.

## Slots

Each clothing item belongs to one equipment slot:

| Slot | Examples | Weight profile |
| --- | --- | --- |
| Head | helmet, hood, hat, crown, mask | Medium |
| Chest | robe, tunic, shirt, vest, breastplate | Heavy |
| Hands | gloves, gauntlets, bracers, mitts | Light |
| Legs | pants, trousers, leggings, chaps | Medium |
| Feet | boots, shoes, sandals, sabatons | Very heavy |
| Outer | cape, coat, mantle, shawl | Heavy |

Weight matters in two different places:

* carried clothing counts against [Inventory](../rpg-attributes/inventory.md);
* equipped clothing creates stamina pressure handled by [Stamina Relief](../rpg-attributes/stamina.md#relief).

Inventory traits do not reduce equipped weight for stamina. That is Relief's job.

## Rarity

Rarity controls perk slots and growth strength.

| Rarity | Letter | Aspect step per level | Perk slots |
| --- | --- | ---: | ---: |
| Common | F | `+1` | `0` |
| Uncommon | E | `+2` | `1` |
| Rare | D | `+3` | `2` |
| Epic | C | `+4` | `3` |
| Legendary | B | `+5` | `4` |
| Mythical | A | `+6` | `5` |

Higher rarity is rarer and usually more flexible because it has more perk slots. But rarity alone does not guarantee item fit.

## Level

Clothing has an item level. Level affects:

* item Aspect;
* terminal trait perk value;
* item weight.

Leveling an item increases its power, but it can also make the item heavier. If the item level is above the character level, [Overlevel](../rpg-attributes/inventory.md#overlevel) decides how much useful item power remains.

## Aspect

Every clothing item has one Aspect connected to one attribute:

* Inventory
* Mining
* Crafting
* Trading
* Stamina
* Luck

Aspect is broad power. If boots have Mining Aspect, they help all five Mining traits: Priority, Flow, Focus, Power, and Loot.

Aspect is independent of slot. Boots can have Trading Aspect, a cloak can have Luck Aspect, and gloves can have Crafting Aspect.

## Perks

Non-Common clothing has perks. Perks are what make items deeply build-specific.

| Perk type | What it does |
| --- | --- |
| Trait terminal | Adds power to one concrete trait, such as Mining Loot or Trading Slots. |
| Direct grant | Improves one final system value directly, such as marketplace slots or stamina recovery. |
| Attribute grant | Adds broad power to one attribute. |
| Booster | Boosts another perk on another equipped item. |

Some terminal perks are conditional. For example, they may only work if another equipped item has a matching slot, wear type, or Aspect. Boosters also target another item, not the item they are on.

## Set And Origin

Items have set and origin identity. When booster links connect matching items, set and origin affinity can strengthen the link.

Player impact:

* A build can become stronger when items are coordinated, not just individually strong.
* Two similar items can have different value because one fits an existing set or origin chain.
* Marketplace demand becomes more specific: players may search for a slot, Aspect, set, origin, and perk index combination.

## High-Level Items

Characters can equip items above their own level. This is allowed.

The tradeoff:

* useful item effects can be reduced by Overlevel if the item is too far ahead;
* item weight is still applied in full;
* a heavy high-level item may be powerful later but expensive to use now.

This creates a market for future growth items: a player can buy gear before they can use its full power.
