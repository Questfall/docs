---
icon: bolt
---

# Stamina

Stamina controls action cost, maximum stamina, recovery, equipment pressure, and planned potion absorption.

## Live Status

Efficiency, Reserve, Recovery, and Relief are live. Absorption is planned for potion systems.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Efficiency

**Status:** Live.

Reduces the base stamina cost of actions before equipment pressure is added.

**How it resolves.** Direct rate and flat grants reduce the raw base action cost first. The Efficiency trait multiplier is applied after those grants.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Base stamina cost reduction | Reduces raw base action cost by percent before the trait multiplier. | +1% | +2% | +3% | +4% | +5% |
| Flat stamina cost reduction | Subtracts stamina from raw base action cost before the trait multiplier. | -1 stamina | -1 stamina to -2 stamina | -2 stamina to -3 stamina | -3 stamina to -4 stamina | -4 stamina to -5 stamina |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 100% raw base action cost remains |
| Novice | `25` | 89% raw base action cost remains |
| Apprentice | `100` | 80% raw base action cost remains |
| Adept | `300` | 73% raw base action cost remains |
| Specialist | `1,000` | 65% raw base action cost remains |
| Expert | `3,000` | 59% raw base action cost remains |
| Master | `10,000` | 52% raw base action cost remains |
| Grandmaster | `30,000` | 48% raw base action cost remains |
| Wizard | `100,000` | 43% raw base action cost remains |
| Mystic | `300,000` | 39% raw base action cost remains |
| Immortal | `1,000,000` | 36% raw base action cost remains |
| Absolute | `3,000,000` | 33% raw base action cost remains |

## Absorption

**Status:** Planned.

Planned trait for improving future Stamina Potion effects.

**How it resolves.** Direct Absorption grants add potion effect first. The trait then scales the remaining distance toward the 250% effect ceiling.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Stamina Potion effect | Adds percentage points to potion effect before the trait curve. | +2% to +3% | +4% to +6% | +7% to +9% | +10% to +12% | +13% to +15% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +0% potion effect |
| Novice | `25` | +30.62% potion effect |
| Apprentice | `100` | +55.56% potion effect |
| Adept | `300` | +76.18% potion effect |
| Specialist | `1,000` | +97.83% potion effect |
| Expert | `3,000` | +115.85% potion effect |
| Master | `10,000` | +133.33% potion effect |
| Grandmaster | `30,000` | +147.19% potion effect |
| Wizard | `100,000` | +160.26% potion effect |
| Mystic | `300,000` | +170.45% potion effect |
| Immortal | `1,000,000` | +180% potion effect |
| Absolute | `3,000,000` | +187.45% potion effect |

## Reserve

**Status:** Live.

Increases Maximum Stamina, letting a character perform more actions before resting or using future potions.

**How it resolves.** The Reserve trait creates the base stamina pool. Percent grants scale it; flat grants add stamina on top.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat Maximum Stamina | Adds Maximum Stamina directly. | +100 stamina to +250 stamina | +251 stamina to +500 stamina | +501 stamina to +1,000 stamina | +1,001 stamina to +2,000 stamina | +2,001 stamina to +5,000 stamina |
| Maximum Stamina percent | Scales the trait-derived stamina pool. | +2% to +3% | +4% to +6% | +7% to +9% | +10% to +12% | +13% to +15% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 2,208 Maximum Stamina |
| Novice | `25` | 2,689 Maximum Stamina |
| Apprentice | `100` | 3,246 Maximum Stamina |
| Adept | `300` | 4,105 Maximum Stamina |
| Specialist | `1,000` | 6,009 Maximum Stamina |
| Expert | `3,000` | 9,723 Maximum Stamina |
| Master | `10,000` | 18,988 Maximum Stamina |
| Grandmaster | `30,000` | 38,748 Maximum Stamina |
| Wizard | `100,000` | 91,283 Maximum Stamina |
| Mystic | `300,000` | 208,046 Maximum Stamina |
| Immortal | `1,000,000` | 526,765 Maximum Stamina |
| Absolute | `3,000,000` | 1,246,434 Maximum Stamina |

## Recovery

**Status:** Live.

Increases stamina recovered per minute.

**How it resolves.** Recovery starts from the trait-derived base reserve divided by 480. Percent grants scale recovery speed; flat grants add stamina per minute.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat stamina recovery | Adds stamina recovered per minute. | +4 stamina/min to +8 stamina/min | +12 stamina/min to +16 stamina/min | +20 stamina/min to +24 stamina/min | +28 stamina/min to +32 stamina/min | +36 stamina/min to +40 stamina/min |
| Stamina recovery speed | Scales stamina recovery speed by percent. | +2% to +3% | +4% to +6% | +7% to +9% | +10% to +12% | +13% to +15% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 4.6 stamina/min |
| Novice | `25` | 5.6 stamina/min |
| Apprentice | `100` | 6.76 stamina/min |
| Adept | `300` | 8.55 stamina/min |
| Specialist | `1,000` | 12.52 stamina/min |
| Expert | `3,000` | 20.26 stamina/min |
| Master | `10,000` | 39.56 stamina/min |
| Grandmaster | `30,000` | 80.72 stamina/min |
| Wizard | `100,000` | 190.17 stamina/min |
| Mystic | `300,000` | 433.43 stamina/min |
| Immortal | `1,000,000` | 1,097 stamina/min |
| Absolute | `3,000,000` | 2,597 stamina/min |

## Relief

**Status:** Live.

Reduces the stamina pressure created by equipped item weight.

**How it resolves.** Direct Relief grants reduce raw equipment pressure first. The Relief trait then divides the remaining pressure by its power.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Equipment pressure reduction | Reduces raw equipment stamina pressure before the trait reduction. | +2% to +3% | +4% to +6% | +7% to +9% | +10% to +12% | +13% to +15% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 100% equipment pressure remains |
| Novice | `25` | 67.57% equipment pressure remains |
| Apprentice | `100` | 50% equipment pressure remains |
| Adept | `300` | 39.53% equipment pressure remains |
| Specialist | `1,000` | 30.77% equipment pressure remains |
| Expert | `3,000` | 24.88% equipment pressure remains |
| Master | `10,000` | 20% equipment pressure remains |
| Grandmaster | `30,000` | 16.64% equipment pressure remains |
| Wizard | `100,000` | 13.79% equipment pressure remains |
| Mystic | `300,000` | 11.78% equipment pressure remains |
| Immortal | `1,000,000` | 10% equipment pressure remains |
| Absolute | `3,000,000` | 8.71% equipment pressure remains |
