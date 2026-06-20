---
icon: clover
---

# Luck

Luck controls shard targeting, Common Lootbox turns, bonus lootboxes, lucky activation, and lucky reward strength.

## Live Status

All five Luck traits are live in current lootbox, shard, marketplace, crafting, and leveling flows.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Shards

**Status:** Live.

Makes missing shard pieces more likely when shard rewards are rolled.

**How it resolves.** The trait creates missing-shard weight. Direct grants multiply that weight upward. Duplicate shards can still appear; this is a weight, not a guarantee.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Missing shard weight | Increases the weight of missing shard pieces. | +50% to +100% | +101% to +175% | +176% to +250% | +251% to +325% | +326% to +400% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | x1 missing shard weight |
| Novice | `25` | x2.62 missing shard weight |
| Apprentice | `100` | x4 missing shard weight |
| Adept | `300` | x5.54 missing shard weight |
| Specialist | `1,000` | x8 missing shard weight |
| Expert | `3,000` | x11.08 missing shard weight |
| Master | `10,000` | x16 missing shard weight |
| Grandmaster | `30,000` | x22.16 missing shard weight |
| Wizard | `100,000` | x32 missing shard weight |
| Mystic | `300,000` | x44.32 missing shard weight |
| Immortal | `1,000,000` | x64 missing shard weight |
| Absolute | `3,000,000` | x88.65 missing shard weight |

### Examples

**Example 1.** Specialist Shards, one D grant `+175%`

Calculation: `x8 x 275%`.

Result: `x22` missing shard weight.

**Example 2.** Specialist Shards, one A grant `+400%`

Calculation: `x8 x 500%`.

Result: `x40` missing shard weight.

## Boxes

**Status:** Live.

Adds a chance to receive one extra higher-rarity lootbox when opening a Common Lootbox.

**How it resolves.** The trait chance plus direct grants is capped at 30%. If it triggers, the bonus-box rarity is rolled separately, with each next rarity 5x less likely.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Extra higher-rarity lootbox chance | Adds percentage points to the bonus lootbox chance. | +0.5 pp | +1 pp | +1.5 pp | +2 pp | +2.5 pp |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 1% extra higher-rarity lootbox chance |
| Novice | `25` | 3.5% extra higher-rarity lootbox chance |
| Apprentice | `100` | 5.31% extra higher-rarity lootbox chance |
| Adept | `300` | 6.68% extra higher-rarity lootbox chance |
| Specialist | `1,000` | 8% extra higher-rarity lootbox chance |
| Expert | `3,000` | 9.03% extra higher-rarity lootbox chance |
| Master | `10,000` | 9.96% extra higher-rarity lootbox chance |
| Grandmaster | `30,000` | 10.66% extra higher-rarity lootbox chance |
| Wizard | `100,000` | 11.29% extra higher-rarity lootbox chance |
| Mystic | `300,000` | 11.77% extra higher-rarity lootbox chance |
| Immortal | `1,000,000` | 12.2% extra higher-rarity lootbox chance |
| Absolute | `3,000,000` | 12.53% extra higher-rarity lootbox chance |

### Examples

**Example 1.** Specialist Boxes, one D grant `+1 pp`

Calculation: `8% + 1 pp`.

Result: `9%` extra higher-rarity lootbox chance.

**Example 2.** Specialist Boxes, one A grant `+2.5 pp`

Calculation: `8% + 2.5 pp`.

Result: `10.5%` extra higher-rarity lootbox chance.

## Chance

**Status:** Live.

Controls how often Luck activates on actions that support lucky effects.

**How it resolves.** The trait creates activation weight and converts it into chance. Direct grants increase the weight before the final chance is derived. The result approaches but never reaches 50%.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Luck activation weight | Increases activation weight before final chance is calculated. | +25% to +50% | +51% to +75% | +76% to +100% | +101% to +125% | +126% to +150% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 1% Luck activation chance |
| Novice | `25` | 9.74% Luck activation chance |
| Apprentice | `100` | 16.08% Luck activation chance |
| Adept | `300` | 20.86% Luck activation chance |
| Specialist | `1,000` | 25.5% Luck activation chance |
| Expert | `3,000` | 29.09% Luck activation chance |
| Master | `10,000` | 32.36% Luck activation chance |
| Grandmaster | `30,000` | 34.82% Luck activation chance |
| Wizard | `100,000` | 37.03% Luck activation chance |
| Mystic | `300,000` | 38.69% Luck activation chance |
| Immortal | `1,000,000` | 40.2% Luck activation chance |
| Absolute | `3,000,000` | 41.34% Luck activation chance |

### Examples

**Example 1.** Specialist Chance, one C grant `+100%` activation weight

Calculation: `25.5%` base chance after doubled weight.

Result: `33.77%` Luck activation chance.

**Example 2.** Specialist Chance, one A grant `+150%` activation weight

Calculation: `25.5%` base chance after 2.5x weight.

Result: `36.12%` Luck activation chance.

## Bonus

**Status:** Live.

Controls how strong lucky outcomes are after Luck activates.

**How it resolves.** Reward power can keep growing through the trait and reward grants. Discount-style bonuses use the same Bonus trait but cap at 75%.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Lucky reward power | Adds percentage points to lucky reward power. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |
| Lucky discount power | Adds percentage points to lucky discount strength, subject to the 75% discount cap. | +1% | +2% | +3% | +4% | +5% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +10% reward power / 4.5% discount |
| Novice | `25` | +45% reward power / 15.5% discount |
| Apprentice | `100` | +74% reward power / 21.3% discount |
| Adept | `300` | +98% reward power / 24.7% discount |
| Specialist | `1,000` | +123% reward power / 27.6% discount |
| Expert | `3,000` | +144% reward power / 29.5% discount |
| Master | `10,000` | +164% reward power / 31.1% discount |
| Grandmaster | `30,000` | +180% reward power / 32.1% discount |
| Wizard | `100,000` | +195% reward power / 33.1% discount |
| Mystic | `300,000` | +207% reward power / 33.7% discount |
| Immortal | `1,000,000` | +218% reward power / 34.3% discount |
| Absolute | `3,000,000` | +227% reward power / 34.7% discount |

### Examples

**Example 1.** Specialist Bonus, one A reward grant `+25 pp`

Calculation: `123% + 25 pp`.

Result: `148%` lucky reward power.

**Example 2.** Specialist Bonus, one A discount grant `+5 pp`

Calculation: `27.58% + 5 pp`.

Result: `32.58%` lucky discount rate.

## Cards

**Status:** Live.

Increases the number of turns in Common Lootbox openings.

**How it resolves.** Base turns are `floor(log10(Cards)) + 1`. Direct turn grants increase expected turns. Expected turns are then resolved into guaranteed turns and a possible extra-turn roll: the integer part is guaranteed, and the fractional part is the chance to receive one additional turn.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Common Lootbox expected turns | Increases expected turns before guaranteed and extra-turn resolution. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 1 turn |
| Novice | `25` | 2 turns |
| Apprentice | `100` | 3 turns |
| Adept | `300` | 3 turns |
| Specialist | `1,000` | 4 turns |
| Expert | `3,000` | 4 turns |
| Master | `10,000` | 5 turns |
| Grandmaster | `30,000` | 5 turns |
| Wizard | `100,000` | 6 turns |
| Mystic | `300,000` | 6 turns |
| Immortal | `1,000,000` | 7 turns |
| Absolute | `3,000,000` | 7 turns |

### Examples

**Example 1. Specialist Cards, one low A grant at `+21%`.**

Start from the mastery table: Specialist Cards gives `4` base turns.

Apply the direct grant: `4 x 121% = 4.84` expected turns.

Resolve expected turns: `floor(4.84) = 4` guaranteed turns, and the remaining `0.84` becomes an `84%` chance for one extra turn.

Result: the opening starts with `4` turns and has an `84%` chance to become `5` turns.

**Example 2. Specialist Cards, one high A grant at `+25%`.**

Start from the mastery table: Specialist Cards gives `4` base turns.

Apply the direct grant: `4 x 125% = 5.00` expected turns.

Resolve expected turns: `floor(5.00) = 5` guaranteed turns, with no fractional part left for an extra-turn roll.

Result: the opening starts with `5` guaranteed turns.
