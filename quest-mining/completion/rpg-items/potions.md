---
icon: flask-round-potion
---

# Potions

Potions are a planned RPG item type. They are not part of the current live item loop yet.

## Current Status

| Surface | Status |
| --- | --- |
| Potion drops from lootboxes | Not live |
| Potion consumption | Not live |
| Potion merging | Not live |
| Potion marketplace strategy | Planned |

The current live lootbox item loop is centered on [Clothing](items.md).

## Intended Role

Potions are intended to become consumable items. Their business role is to turn time-based resources, such as stamina, into an item economy:

* players can store resource recovery as items;
* crafters can potentially improve or merge consumables;
* traders can sell consumables to players who value active sessions;
* Stamina Absorption can become useful once stamina potions exist.

## Stamina Potions

The first planned potion type is the Stamina Potion.

Intended behavior:

* restores stamina when consumed;
* scales by rarity;
* can interact with the Stamina [Absorption](../rpg-attributes/stamina.md#absorption) trait;
* may create overcap stamina if the restore amount goes above Maximum Stamina.

Until potions are live, players should not expect potion drops, potion consumption, or potion-based marketplace demand in the current system.
