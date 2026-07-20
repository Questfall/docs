---
icon: pickaxe
---

# Mining

Mining controls quest reward strength, Flow behavior, moderation priority, and shard-roll output.

## Implementation Status

All five Mining traits are fully modelled in the RPG system. Their items and
grants can exist before the corresponding platform feature is connected.
Quest reward and moderation integrations will be enabled as those product
flows are implemented.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Priority

**Status:** Modelled. Activates when the moderation flow is connected.

Moves moderation-required quest completions higher in the review queue.

**How it resolves.** Priority adds queue advantage. Inside every mastery band,
the trait grows continuously by up to 5 minutes. Reaching a new mastery rank
adds another 5-minute reward. Quest age still matters: every 10 minutes waiting
adds 100 queue points.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat moderation priority | Adds queue priority measured as minutes of waiting advantage. | +2 min | +4 min | +6 min | +8 min | +10 min |
| Percent moderation priority | Scales the base priority from the trait and mastery rewards. | +2% to +4% | +5% to +8% | +9% to +12% | +13% to +16% | +17% to +20% |

### Mastery Start Values

| Mastery | Trait value at start | At mastery start | Before next mastery |
| --- | ---: | --- | --- |
| Guest | `0` | 0 min | less than 5 min |
| Novice | `25` | 10 min | less than 15 min |
| Apprentice | `100` | 20 min | less than 25 min |
| Adept | `300` | 30 min | less than 35 min |
| Specialist | `1,000` | 40 min | less than 45 min |
| Expert | `3,000` | 50 min | less than 55 min |
| Master | `10,000` | 60 min | less than 65 min |
| Grandmaster | `30,000` | 70 min | less than 75 min |
| Wizard | `100,000` | 80 min | less than 85 min |
| Mystic | `300,000` | 90 min | less than 95 min |
| Immortal | `1,000,000` | 100 min | less than 105 min |
| Absolute | `3,000,000` | 110 min | less than 115 min |

### Examples

**Example 1.** Specialist Priority, one A flat grant `+10 min`

Calculation: `40 min + 10 min`.

Result: `50 min` queue advantage.

**Example 2.** Master Priority, one minimum A percent grant `+17%`

Calculation: `60 min x 117%`.

Result: `70.2 min` queue advantage. The percentage grant is now stronger than
the `+10 min` Mythical flat grant.

## Flow

**Status:** Modelled. Activates when quest completion rewards are connected.

Increases Mining Point rewards while the player keeps completing quests inside the Focus window.

**How it resolves.** Flow gives at least a 5% active bonus. Every mastery rank adds another `+2 percentage points`, and direct Flow grants add percentage points after mastery. Flow is binary: the full bonus applies while active, but it does not grow with the length of the chain.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flow bonus | Adds percentage points to the active Flow reward bonus. | +2 to +4 pp | +6 to +8 pp | +10 to +12 pp | +14 to +16 pp | +18 to +20 pp |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +5% active Flow bonus |
| Novice | `25` | +18% active Flow bonus |
| Apprentice | `100` | +31% active Flow bonus |
| Adept | `300` | +42% active Flow bonus |
| Specialist | `1,000` | +53% active Flow bonus |
| Expert | `3,000` | +61% active Flow bonus |
| Master | `10,000` | +69% active Flow bonus |
| Grandmaster | `30,000` | +76% active Flow bonus |
| Wizard | `100,000` | +82% active Flow bonus |
| Mystic | `300,000` | +87% active Flow bonus |
| Immortal | `1,000,000` | +92% active Flow bonus |
| Absolute | `3,000,000` | +96% active Flow bonus |

### Examples

**Example 1.** Specialist Flow, one D grant `+8 pp`

Calculation: `45% curve + 8 pp mastery + 8 pp grant`.

Result: `61%` active Flow bonus, or an active multiplier of `x1.61`.

**Example 2.** Specialist Flow, one A grant `+20 pp`

Calculation: `45% curve + 8 pp mastery + 20 pp grant`.

Result: `73%` active Flow bonus, or an active multiplier of `x1.73`.

## Focus

**Status:** Modelled. Activates when quest completion rewards are connected.

Sets how long Flow stays active after a successful mining action.

**How it resolves.** Focus grows inside every mastery range. Trait progress adds up to 10 minutes across the current range, and every achieved mastery rank adds a separate 10-minute reward. Direct Focus grants add minutes after both parts. The final window caps at 720 minutes (12 hours).

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flow window | Adds minutes to the active Flow window. | +5 min to +10 min | +11 min to +20 min | +21 min to +30 min | +31 min to +40 min | +41 min to +50 min |

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

The table shows the start of each mastery. Focus continues to grow between those starts. For example, Focus `500` gives a `64 min` window, while Focus `20,000` gives a `126 min` window.

### Examples

**Example 1.** Specialist Focus, one C grant `+30 min`

Calculation: `80 min + 30 min`.

Result: `110 min` Flow window.

**Example 2.** Specialist Focus, one A grant `+50 min`

Calculation: `80 min + 50 min`.

Result: `130 min` Flow window.

## Power

**Status:** Modelled. Activates when quest completion rewards are connected.

Increases Mining Power, so the same completed quests earn more Mining Points.

**How it resolves.** The raw trait value creates base Mining Power through a diminishing curve. Every achieved mastery rank adds 2 percentage points. Direct Power grants then increase the combined trait and mastery result. Power does not use an additional hidden mastery boost to its trait value.

Mining Power is a bonus percentage, not the complete reward multiplier. `0%`
Mining Power means `x1.00`, so the character still receives the full base Quest
Bounty. Active Flow and Mining Boost multiply that base result separately.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Mining Power | Increases the combined trait and mastery Mining Power by percent. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +0% Mining Power bonus (`x1.00`) |
| Novice | `25` | +18% Mining Power |
| Apprentice | `100` | +31% Mining Power |
| Adept | `300` | +42% Mining Power |
| Specialist | `1,000` | +53% Mining Power |
| Expert | `3,000` | +61% Mining Power |
| Master | `10,000` | +69% Mining Power |
| Grandmaster | `30,000` | +76% Mining Power |
| Wizard | `100,000` | +82% Mining Power |
| Mystic | `300,000` | +87% Mining Power |
| Immortal | `1,000,000` | +92% Mining Power |
| Absolute | `3,000,000` | +96% Mining Power |

### Examples

**Example 1.** Specialist Power, one D grant `+10%`

Calculation: `45% curve + 8 pp mastery + floor(53 x 10%)`.

Result: `58%` Mining Power.

**Example 2.** Specialist Power, one A grant `+25%`

Calculation: `45% curve + 8 pp mastery + floor(53 x 25%)`.

Result: `66%` Mining Power.

## Loot

**Status:** Modelled. Activates when quest completion shard rewards are connected.

Controls how often quest rewards produce Chest Shard rolls.

**How it resolves.** The raw trait value creates a shard-roll rate through a smooth curve. Every achieved mastery rank adds `5 percentage points`, and direct Loot grants add percentage points after mastery. Loot does not use an additional hidden mastery boost to its trait value. Every 100% gives one guaranteed shard roll; the remainder is the chance for one extra roll.

`Final rate = floor(interpolated Loot curve) + 5 pp x mastery rank + direct Loot grants.` Loot has no hard cap. After Absolute, every new decimal-order mastery rank continues both the trait curve and the mastery reward.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Shard roll chance | Adds percentage points to the shard-roll rate. | +5 to +10 pp | +11 to +20 pp | +21 to +30 pp | +31 to +40 pp | +41 to +50 pp |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 10% shard-roll chance |
| Novice | `25` | 35% shard-roll chance |
| Apprentice | `100` | 60% shard-roll chance |
| Adept | `300` | 85% shard-roll chance |
| Specialist | `1,000` | 1 guaranteed + 10% extra shard roll |
| Expert | `3,000` | 1 guaranteed + 35% extra shard roll |
| Master | `10,000` | 1 guaranteed + 60% extra shard roll |
| Grandmaster | `30,000` | 1 guaranteed + 85% extra shard roll |
| Wizard | `100,000` | 2 guaranteed + 10% extra shard roll |
| Mystic | `300,000` | 2 guaranteed + 35% extra shard roll |
| Immortal | `1,000,000` | 2 guaranteed + 60% extra shard roll |
| Absolute | `3,000,000` | 2 guaranteed + 85% extra shard roll |

### Examples

**Example 1.** Specialist Loot, one E grant `+10 pp`

Calculation: `90% curve + 20 pp mastery + 10 pp grant`.

Result: `1` guaranteed shard roll + `20%` extra roll chance.

**Example 2.** Specialist Loot, one A grant `+50 pp`

Calculation: `90% curve + 20 pp mastery + 50 pp grant`.

Result: `1` guaranteed shard roll + `60%` extra roll chance.
