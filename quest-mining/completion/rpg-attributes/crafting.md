---
icon: hammer
---

# Crafting

Crafting controls Essence return, item level-up costs, and planned upgrade quality systems.

## Live Status

Scrapping and Leveling are live. Merging, Rarity, and Quality are model/planned surfaces until their connected product flows launch.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Scrapping

**Status:** Live.

Increases how much Essence is returned when clothing is scrapped.

**How it resolves.** The trait gives a percent Essence bonus. Flat scrapping grants add Essence after the percent bonus.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat scrapping Essence | Adds Essence after the percentage bonus. | +1 Essence | +2 Essence | +3 Essence | +4 Essence | +5 Essence |
| Scrapping Essence bonus | Adds percentage points to Essence gained from scrapping. | +2% to +4% | +5% to +8% | +9% to +12% | +13% to +16% | +17% to +20% |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Rare (D) level `10` item, Specialist Scrapping, one A flat grant `+5 Essence` | `floor(32.7 x 160%) + 5` | `57 Essence` returned |
| Rare (D) level `10` item, Specialist Scrapping, one A bonus grant `+20 pp` | `floor(32.7 x 180%)` | `58 Essence` returned |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +0% Essence from scrapping |
| Novice | `25` | +15% Essence from scrapping |
| Apprentice | `100` | +30% Essence from scrapping |
| Adept | `300` | +45% Essence from scrapping |
| Specialist | `1,000` | +60% Essence from scrapping |
| Expert | `3,000` | +75% Essence from scrapping |
| Master | `10,000` | +90% Essence from scrapping |
| Grandmaster | `30,000` | +105% Essence from scrapping |
| Wizard | `100,000` | +120% Essence from scrapping |
| Mystic | `300,000` | +135% Essence from scrapping |
| Immortal | `1,000,000` | +150% Essence from scrapping |
| Absolute | `3,000,000` | +165% Essence from scrapping |

## Leveling

**Status:** Live.

Reduces the Essence cost of raising clothing level.

**How it resolves.** The trait and direct grants reduce level-up cost, but final cost cannot go below 2 x item rarity or 8% of base cost.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Level-up cost reduction | Adds percentage points of Essence cost reduction. | +1% to +2% | +3% to +4% | +5% to +6% | +7% to +8% | +9% to +10% |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Rare (D) item to level `10`, Specialist Leveling, no direct grant | `30 x 55%`, rounded up | `17 Essence` level-up cost |
| Rare (D) item to level `10`, Specialist Leveling, one A grant `+10 pp` | `30 x 90% x 55%`, rounded up | `15 Essence` level-up cost |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 100% level-up cost remains |
| Novice | `25` | 84% level-up cost remains |
| Apprentice | `100` | 73% level-up cost remains |
| Adept | `300` | 64% level-up cost remains |
| Specialist | `1,000` | 55% level-up cost remains |
| Expert | `3,000` | 49% level-up cost remains |
| Master | `10,000` | 43% level-up cost remains |
| Grandmaster | `30,000` | 38% level-up cost remains |
| Wizard | `100,000` | 34% level-up cost remains |
| Mystic | `300,000` | 31% level-up cost remains |
| Immortal | `1,000,000` | 28% level-up cost remains |
| Absolute | `3,000,000` | 26% level-up cost remains |

## Merging

**Status:** Planned.

Planned cost-efficiency trait for merging simple rarity-based consumables such as future Potions and Gems.

**How it resolves.** The cost keeps a 25% core. Trait and grants shrink only the reducible 75% part.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Merge cost efficiency | Shrinks the reducible part of the merge cost. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Rare (D) merge base `750 Essence`, Specialist Merging, no direct grant | `25% core + 75% reducible curve` | `434 Essence` merge cost |
| Rare (D) merge base `750 Essence`, Specialist Merging, one A grant `+25% efficiency` | `25% core + reduced 75% part` | `385 Essence` merge cost |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 100% merge cost remains |
| Novice | `25` | 83.63% merge cost remains |
| Apprentice | `100` | 72.73% merge cost remains |
| Adept | `300` | 64.97% merge cost remains |
| Specialist | `1,000` | 57.81% merge cost remains |
| Expert | `3,000` | 52.5% merge cost remains |
| Master | `10,000` | 47.83% merge cost remains |
| Grandmaster | `30,000` | 44.41% merge cost remains |
| Wizard | `100,000` | 41.41% merge cost remains |
| Mystic | `300,000` | 39.19% merge cost remains |
| Immortal | `1,000,000` | 37.21% merge cost remains |
| Absolute | `3,000,000` | 35.72% merge cost remains |

## Rarity

**Status:** Planned.

Planned cost-efficiency trait for raising rarity on level-based items, especially equipment.

**How it resolves.** The cost keeps a 20% core. Trait and grants shrink only the reducible 80% part; Gems remain the main limiter when evolution launches.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Rarity upgrade efficiency | Shrinks the reducible part of the rarity-upgrade cost. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Rare (D) level `10` rarity-upgrade base `285 Essence`, Specialist Rarity, no direct grant | `20% core + 80% reducible curve` | `171 Essence` rarity-upgrade cost |
| Rare (D) level `10` rarity-upgrade base `285 Essence`, Specialist Rarity, one A grant `+25% efficiency` | `20% core + reduced 80% part` | `149 Essence` rarity-upgrade cost |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 100% rarity-upgrade cost remains |
| Novice | `25` | 85.73% rarity-upgrade cost remains |
| Apprentice | `100` | 75.38% rarity-upgrade cost remains |
| Adept | `300` | 67.57% rarity-upgrade cost remains |
| Specialist | `1,000` | 60% rarity-upgrade cost remains |
| Expert | `3,000` | 54.14% rarity-upgrade cost remains |
| Master | `10,000` | 48.8% rarity-upgrade cost remains |
| Grandmaster | `30,000` | 44.79% rarity-upgrade cost remains |
| Wizard | `100,000` | 41.18% rarity-upgrade cost remains |
| Mystic | `300,000` | 38.46% rarity-upgrade cost remains |
| Immortal | `1,000,000` | 36% rarity-upgrade cost remains |
| Absolute | `3,000,000` | 34.13% rarity-upgrade cost remains |

## Quality

**Status:** Planned.

Planned perk-roll pressure trait for upgrades and new perk rolls.

**How it resolves.** Quality adds pressure toward the upper part of perk value ranges. Direct Quality grants add more pressure before the final bias is derived.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Perk roll quality pressure | Adds roll pressure before the quality bias curve. | +1 pressure to +2 pressure | +2 pressure to +3 pressure | +3 pressure to +4 pressure | +4 pressure to +5 pressure | +5 pressure to +6 pressure |

### Examples

| Situation | Calculation | Result |
| --- | --- | --- |
| Specialist Quality, one C grant `+4 pressure` | `37.17%` base bias with added pressure | `45.74%` roll bias |
| Specialist Quality, one A grant `+6 pressure` | `37.17%` base bias with added pressure | `49.14%` roll bias |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 0% roll bias |
| Novice | `25` | 11.64% roll bias |
| Apprentice | `100` | 21.11% roll bias |
| Adept | `300` | 28.95% roll bias |
| Specialist | `1,000` | 37.17% roll bias |
| Expert | `3,000` | 44.02% roll bias |
| Master | `10,000` | 50.67% roll bias |
| Grandmaster | `30,000` | 55.93% roll bias |
| Wizard | `100,000` | 60.9% roll bias |
| Mystic | `300,000` | 64.77% roll bias |
| Immortal | `1,000,000` | 68.4% roll bias |
| Absolute | `3,000,000` | 71.23% roll bias |
