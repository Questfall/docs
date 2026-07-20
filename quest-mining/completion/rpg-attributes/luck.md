---
icon: clover
---

# Luck

Luck controls shard targeting, Common Lootbox turns, bonus lootboxes, lucky activation, and lucky reward strength.

## Implementation Status

Boxes and Cards are connected to Common Lootbox openings. Chance and Bonus are connected to supported marketplace, crafting, and character-leveling actions. Shards is fully modelled, but becomes actionable when quest-completion shard rewards are connected.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Shards

**Status:** Modelled. Activates when quest-completion shard rewards are connected.

Makes missing shard pieces more likely when shard rewards are rolled.

**How it resolves.** The trait creates missing-shard weight. Every reached mastery rank adds `20 percentage points` to that weight multiplier, and direct grants add their percentage points alongside mastery. An already-owned piece keeps weight `2`, so Guest characters are intentionally more likely to receive duplicates as a puzzle fills. Duplicate shards can always appear; this is a weight, not a guarantee. A puzzle may contain any number of pieces, with the initial product target expected to be roughly `10` to `20`.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Missing shard weight | Increases the weight of missing shard pieces. | +50% to +100% | +101% to +175% | +176% to +250% | +251% to +325% | +326% to +400% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | x1 missing shard weight |
| Novice | `25` | x3.14 missing shard weight |
| Apprentice | `100` | x5.6 missing shard weight |
| Adept | `300` | x8.86 missing shard weight |
| Specialist | `1,000` | x14.4 missing shard weight |
| Expert | `3,000` | x22.16 missing shard weight |
| Master | `10,000` | x35.2 missing shard weight |
| Grandmaster | `30,000` | x53.18 missing shard weight |
| Wizard | `100,000` | x83.2 missing shard weight |
| Mystic | `300,000` | x124.1 missing shard weight |
| Immortal | `1,000,000` | x192 missing shard weight |
| Absolute | `3,000,000` | x283.67 missing shard weight |

### Examples

**Example 1.** Specialist Shards, one D grant `+175%`

Calculation: base `x8`, then `+80%` from four mastery ranks and `+175%` from the grant.

Result: `x28.4` missing shard weight.

**Example 2.** Specialist Shards, one A grant `+400%`

Calculation: base `x8`, then `+80%` from four mastery ranks and `+400%` from the grant.

Result: `x46.4` missing shard weight.

## Boxes

**Status:** Live.

Adds a chance to receive one extra higher-rarity lootbox when opening a Common Lootbox.

**How it resolves.** The trait creates the base chance. Every reached mastery rank adds `0.25 percentage points`, and direct grants add their percentage points alongside mastery. The final chance is capped at `30%`. If it triggers, the bonus-box rarity is rolled separately, with each next rarity 5x less likely. Only Common Lootbox openings roll Boxes, so the higher-rarity reward cannot trigger another Boxes reward.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Extra higher-rarity lootbox chance | Adds percentage points to the bonus lootbox chance. | +0.5 pp | +1 pp | +1.5 pp | +2 pp | +2.5 pp |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 1% extra higher-rarity lootbox chance |
| Novice | `25` | 3.75% extra higher-rarity lootbox chance |
| Apprentice | `100` | 5.81% extra higher-rarity lootbox chance |
| Adept | `300` | 7.43% extra higher-rarity lootbox chance |
| Specialist | `1,000` | 9% extra higher-rarity lootbox chance |
| Expert | `3,000` | 10.28% extra higher-rarity lootbox chance |
| Master | `10,000` | 11.46% extra higher-rarity lootbox chance |
| Grandmaster | `30,000` | 12.41% extra higher-rarity lootbox chance |
| Wizard | `100,000` | 13.29% extra higher-rarity lootbox chance |
| Mystic | `300,000` | 14.02% extra higher-rarity lootbox chance |
| Immortal | `1,000,000` | 14.7% extra higher-rarity lootbox chance |
| Absolute | `3,000,000` | 15.28% extra higher-rarity lootbox chance |

### Examples

**Example 1.** Specialist Boxes, one D grant `+1 pp`

Calculation: `8% trait chance + 1 pp` from four mastery ranks `+ 1 pp` from the grant.

Result: `10%` extra higher-rarity lootbox chance.

**Example 2.** Specialist Boxes, one A grant `+2.5 pp`

Calculation: `8% trait chance + 1 pp` from four mastery ranks `+ 2.5 pp` from the grant.

Result: `11.5%` extra higher-rarity lootbox chance.

## Chance

**Status:** Live.

Controls how often Luck activates on actions that support lucky effects.

**How it resolves.** The trait creates activation weight and converts it into chance. Every reached mastery rank adds `10%` activation weight, and direct grants add their percentages alongside mastery before the final chance is derived. The result approaches but never reaches `50%`; this is an asymptote, not a hard cap.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Luck activation weight | Increases activation weight before final chance is calculated. | +25% to +50% | +51% to +75% | +76% to +100% | +101% to +125% | +126% to +150% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 1% Luck activation chance |
| Novice | `25` | 10.51% Luck activation chance |
| Apprentice | `100` | 18.13% Luck activation chance |
| Adept | `300` | 24.11% Luck activation chance |
| Specialist | `1,000` | 29.65% Luck activation chance |
| Expert | `3,000` | 33.8% Luck activation chance |
| Master | `10,000` | 37.29% Luck activation chance |
| Grandmaster | `30,000` | 39.79% Luck activation chance |
| Wizard | `100,000` | 41.86% Luck activation chance |
| Mystic | `300,000` | 43.33% Luck activation chance |
| Immortal | `1,000,000` | 44.57% Luck activation chance |
| Absolute | `3,000,000` | 45.47% Luck activation chance |

### Examples

**Example 1.** Specialist Chance, one C grant `+100%` activation weight

Calculation: the base activation weight receives `+40%` from four mastery ranks and `+100%` from the grant.

Result: `35.71%` Luck activation chance.

**Example 2.** Specialist Chance, one A grant `+150%` activation weight

Calculation: the base activation weight receives `+40%` from four mastery ranks and `+150%` from the grant.

Result: `37.56%` Luck activation chance.

## Bonus

**Status:** Live.

Controls how strong lucky outcomes are after Luck activates.

**How it resolves.** The trait creates Lucky Power, and every reached mastery rank adds `2` more power before the effect splits. Reward-style outcomes add reward grants directly to that effective power. Discount-style outcomes pass the same effective power through a softer curve, then add discount grants; the final discount is capped at `75%`.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Lucky reward power | Adds percentage points to lucky reward power. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |
| Lucky discount power | Adds percentage points to lucky discount strength, subject to the 75% discount cap. | +1% | +2% | +3% | +4% | +5% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +10% reward power / 4.5% discount |
| Novice | `25` | +47% reward power / 15.99% discount |
| Apprentice | `100` | +78% reward power / 21.91% discount |
| Adept | `300` | +104% reward power / 25.49% discount |
| Specialist | `1,000` | +131% reward power / 28.35% discount |
| Expert | `3,000` | +154% reward power / 30.31% discount |
| Master | `10,000` | +176% reward power / 31.88% discount |
| Grandmaster | `30,000` | +194% reward power / 32.99% discount |
| Wizard | `100,000` | +211% reward power / 33.92% discount |
| Mystic | `300,000` | +225% reward power / 34.62% discount |
| Immortal | `1,000,000` | +238% reward power / 35.21% discount |
| Absolute | `3,000,000` | +249% reward power / 35.67% discount |

### Examples

**Example 1.** Specialist Bonus, one A reward grant `+25 pp`

Calculation: `123%` trait power `+ 8 pp` from four mastery ranks `+ 25 pp` from the grant.

Result: `156%` lucky reward power.

**Example 2.** Specialist Bonus, one A discount grant `+5 pp`

Calculation: `131` effective Lucky Power becomes a `28.35%` base discount, then the grant adds `5 pp`.

Result: `33.35%` lucky discount rate.

## Cards

**Status:** Live.

Increases the number of turns in Common Lootbox openings.

**How it resolves.** Every opening starts with one turn. The Cards trait then adds a smooth fractional number of expected turns, approaching `+6` from the trait itself. Every reached mastery rank separately adds `+0.15` expected turns. The trait is the main source of additional turns, while mastery is a smaller permanent reward for reaching each rank. Mastery keeps growing after Absolute, so Cards has no hard total-turn cap. Direct grants scale all earned turns but never the starter turn.

The final expected number is split into guaranteed turns and one possible extra turn. For example, `4.73` means `4` guaranteed turns and a `73%` chance of receiving a fifth turn. This roll happens once when the Common Lootbox opening is created.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Common Lootbox expected turns | Increases expected turns before guaranteed and extra-turn resolution. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 1 turn |
| Novice | `25` | 1 guaranteed + 88.5% for one extra |
| Apprentice | `100` | 2 guaranteed + 63.3% for one extra |
| Adept | `300` | 3 guaranteed + 27.8% for one extra |
| Specialist | `1,000` | 3 guaranteed + 94.8% for one extra |
| Expert | `3,000` | 4 guaranteed + 53.0% for one extra |
| Master | `10,000` | 5 guaranteed + 10.0% for one extra |
| Grandmaster | `30,000` | 5 guaranteed + 58.3% for one extra |
| Wizard | `100,000` | 6 guaranteed + 4.6% for one extra |
| Mystic | `300,000` | 6 guaranteed + 44.1% for one extra |
| Immortal | `1,000,000` | 6 guaranteed + 82.0% for one extra |
| Absolute | `3,000,000` | 7 guaranteed + 14.9% for one extra |

### Examples

**Example 1. Specialist Cards, one low A grant at `+21%`.**

At Specialist, the trait contributes `2.348` expected turns and four mastery ranks contribute `0.6`. Together, that is `2.948` earned turns in addition to the starter turn.

Apply the direct grant only to the earned turns: `1 + 2.948 x 121% = 4.567` expected turns.

Result: the opening receives `4` guaranteed turns and a `56.7%` chance for one extra turn.

**Example 2. Specialist Cards, one high A grant at `+25%`.**

Start from the same `2.948` earned turns and keep the starter turn outside the multiplier.

Calculation: `1 + 2.948 x 125% = 4.685` expected turns.

Result: the opening receives `4` guaranteed turns and a `68.5%` chance for one extra turn.
