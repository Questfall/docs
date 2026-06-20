---
icon: heart-pulse
---

# Stamina

Stamina is for players who want longer active sessions, lower action costs, faster recovery, and better tolerance for heavy equipped clothing.

## Live Status

| Trait | Status | What it changes |
| --- | --- | --- |
| Reserve | Live | Maximum stamina. |
| Recovery | Live | Stamina restored per minute. |
| Efficiency | Live | Base stamina cost of actions. |
| Relief | Live | Extra stamina pressure from equipped item weight. |
| Absorption | Planned | Future stamina restoration effects from potions. |

## Why Invest In Stamina

Stamina is the action pacing attribute. It helps players:

* perform more stamina-costing actions before resting;
* recover faster between sessions;
* make repeated actions cheaper;
* wear heavier or higher-level equipment with less stamina pressure;
* prepare for future potion-based stamina restoration.

Stamina is especially important for players who use strong heavy gear. A powerful item can increase output, but its weight can make every stamina action more expensive unless Relief can handle it.

## How Action Cost Works

A stamina action starts with a raw base cost. The live calculation then applies:

```text
raw action cost
-> Efficiency reduces the base action cost
-> equipped item weight creates pressure
-> Relief reduces that equipment pressure
-> final stamina cost is checked against current stamina
```

If the character does not have enough current stamina, the action is not available. There is no stamina overdraft.

## Reserve

Reserve increases maximum stamina.

Player impact:

* More actions can fit into one active session.
* A larger stamina bar gives more room before the player has to wait.
* Reserve also matters because Recovery is balanced around the size of the stamina pool.

Reserve grants can add flat stamina or increase the stamina bar by a percentage.

## Recovery

Recovery increases stamina restored per minute.

Player impact:

* Less waiting between active sessions.
* More value from checking back after time has passed.
* Stronger support for players who spend stamina often.

Recovery grants can add stamina per minute or increase recovery speed by a percentage.

## Efficiency

Efficiency reduces the base stamina cost of actions before equipment pressure is applied.

Player impact:

* Repeated quest actions drain less stamina.
* Efficient characters can do more with the same stamina bar.
* Efficiency is especially useful before heavy equipment pressure is added.

The base action cost cannot be reduced to zero. There is always a minimum cost before equipment pressure.

## Relief

Relief reduces the stamina pressure created by equipped item weight.

Inventory traits do not make equipped items lighter for stamina. Equipped clothing uses its equipped weight. Relief is the trait that makes heavy gear easier to use during actions.

Player impact:

* Heavy high-level clothing becomes more practical.
* Strong gear creates less stamina drag.
* Players can build around heavier items without making every action painfully expensive.

This is a key tradeoff in the system: stronger or higher-level clothing may help the build, but heavy equipment needs Stamina support.

## Absorption

Absorption is planned for future potion-based stamina restoration. It is part of the RPG model, but stamina potions are not a live public item loop yet.

Business role:

* It is intended to make stamina restoration items stronger.
* It should support players who use consumables for longer active sessions.

Until stamina potions are live, Absorption should be treated as a future-facing trait rather than a live stamina strategy.
