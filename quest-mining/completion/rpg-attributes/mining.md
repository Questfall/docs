---
icon: pickaxe
---

# Mining

Mining controls quest reward strength, Flow behavior, moderation priority, and shard-roll output.

## Live Status

All five Mining traits are live for quest completion and reward calculations.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Priority

**Status:** Live.

Moves moderation-required quest completions higher in the review queue.

**How it resolves.** Priority adds queue advantage. Quest age still matters: every 10 minutes waiting adds 100 queue points.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat moderation priority | Adds queue priority measured as minutes of waiting advantage. | +10 min | +20 min | +30 min | +40 min | +50 min |
| Percent moderation priority | Scales the base priority from the trait. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Specialist Priority, one A flat grant `+50 min` | `40 min + 50 min` | `90 min` queue advantage |
| Specialist Priority, one A percent grant `+25%` | `40 min x 125%` | `50 min` queue advantage |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 0 min queue advantage |
| Novice | `25` | 10 min queue advantage |
| Apprentice | `100` | 20 min queue advantage |
| Adept | `300` | 30 min queue advantage |
| Specialist | `1,000` | 40 min queue advantage |
| Expert | `3,000` | 50 min queue advantage |
| Master | `10,000` | 60 min queue advantage |
| Grandmaster | `30,000` | 70 min queue advantage |
| Wizard | `100,000` | 80 min queue advantage |
| Mystic | `300,000` | 90 min queue advantage |
| Immortal | `1,000,000` | 100 min queue advantage |
| Absolute | `3,000,000` | 110 min queue advantage |

## Flow

**Status:** Live.

Increases Mining Point rewards while the player keeps completing quests inside the Focus window.

**How it resolves.** Flow gives at least a 5% active bonus. Direct Flow grants add percentage points to that active bonus.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flow bonus | Adds percentage points to the active Flow reward bonus. | +1% to +2% | +3% to +4% | +5% to +6% | +7% to +8% | +9% to +10% |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Specialist Flow, one D grant `+4 pp` | `45% + 4 pp` | `49%` active Flow bonus |
| Specialist Flow, one A grant `+10 pp` | `45% + 10 pp` | `55%` active Flow bonus |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +5% active Flow bonus |
| Novice | `25` | +16% active Flow bonus |
| Apprentice | `100` | +27% active Flow bonus |
| Adept | `300` | +36% active Flow bonus |
| Specialist | `1,000` | +45% active Flow bonus |
| Expert | `3,000` | +51% active Flow bonus |
| Master | `10,000` | +57% active Flow bonus |
| Grandmaster | `30,000` | +62% active Flow bonus |
| Wizard | `100,000` | +66% active Flow bonus |
| Mystic | `300,000` | +69% active Flow bonus |
| Immortal | `1,000,000` | +72% active Flow bonus |
| Absolute | `3,000,000` | +74% active Flow bonus |

## Focus

**Status:** Live.

Sets how long Flow stays active after a successful mining action.

**How it resolves.** Focus grows by mastery steps and caps at 720 minutes. Direct Focus grants add minutes before the cap.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flow window | Adds minutes to the active Flow window. | +5 min to +10 min | +11 min to +20 min | +21 min to +30 min | +31 min to +45 min | +46 min to +60 min |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Specialist Focus, one C grant `+30 min` | `80 min + 30 min` | `110 min` Flow window |
| Specialist Focus, one A grant `+60 min` | `80 min + 60 min` | `140 min` Flow window |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 5 min Flow window |
| Novice | `25` | 20 min Flow window |
| Apprentice | `100` | 40 min Flow window |
| Adept | `300` | 60 min Flow window |
| Specialist | `1,000` | 80 min Flow window |
| Expert | `3,000` | 100 min Flow window |
| Master | `10,000` | 120 min Flow window |
| Grandmaster | `30,000` | 140 min Flow window |
| Wizard | `100,000` | 160 min Flow window |
| Mystic | `300,000` | 180 min Flow window |
| Immortal | `1,000,000` | 200 min Flow window |
| Absolute | `3,000,000` | 220 min Flow window |

## Power

**Status:** Live.

Increases Mining Power, so the same completed quests earn more Mining Points.

**How it resolves.** The trait creates base Mining Power. Direct Power grants add a percent of that base power.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Mining Power | Increases the trait-derived Mining Power by percent. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Specialist Power, one D grant `+10%` | `45% + floor(45 x 10%)` | `49%` Mining Power |
| Specialist Power, one A grant `+25%` | `45% + floor(45 x 25%)` | `56%` Mining Power |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +0% Mining Power |
| Novice | `25` | +16% Mining Power |
| Apprentice | `100` | +27% Mining Power |
| Adept | `300` | +36% Mining Power |
| Specialist | `1,000` | +45% Mining Power |
| Expert | `3,000` | +51% Mining Power |
| Master | `10,000` | +57% Mining Power |
| Grandmaster | `30,000` | +62% Mining Power |
| Wizard | `100,000` | +66% Mining Power |
| Mystic | `300,000` | +69% Mining Power |
| Immortal | `1,000,000` | +72% Mining Power |
| Absolute | `3,000,000` | +74% Mining Power |

## Loot

**Status:** Live.

Controls how often quest rewards produce Chest Shard rolls.

**How it resolves.** Every 100% shard-roll rate gives one guaranteed shard roll. The remainder is the chance for one extra roll.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Shard roll chance | Adds percentage points to the shard-roll rate. | +5% to +10% | +11% to +20% | +21% to +30% | +31% to +40% | +41% to +50% |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Specialist Loot, one E grant `+10 pp` | `90% + 10 pp` | `1` guaranteed shard roll |
| Specialist Loot, one A grant `+50 pp` | `90% + 50 pp` | `1` guaranteed shard roll + `40%` extra roll chance |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 10% shard-roll chance |
| Novice | `25` | 30% shard-roll chance |
| Apprentice | `100` | 50% shard-roll chance |
| Adept | `300` | 70% shard-roll chance |
| Specialist | `1,000` | 90% shard-roll chance |
| Expert | `3,000` | 1 guaranteed + 10% extra shard roll |
| Master | `10,000` | 1 guaranteed + 30% extra shard roll |
| Grandmaster | `30,000` | 1 guaranteed + 50% extra shard roll |
| Wizard | `100,000` | 1 guaranteed + 70% extra shard roll |
| Mystic | `300,000` | 1 guaranteed + 90% extra shard roll |
| Immortal | `1,000,000` | 2 guaranteed + 10% extra shard roll |
| Absolute | `3,000,000` | 2 guaranteed + 30% extra shard roll |
