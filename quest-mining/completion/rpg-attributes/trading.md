---
icon: cart-shopping
---

# Trading

Trading controls seller fees, conversion, listing slots, and planned auction/liquidity surfaces.

## Live Status

Fee, Conversion, and Slots are live. Bid and Liquidity are model/planned until auction and Gem Points surfaces launch.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Fee

**Status:** Live.

Reduces the marketplace commission paid by the seller when an item sells.

**How it resolves.** The fee has a 3% core and a reducible part between 30% and 3%. Fee grants make only the reducible part shrink faster.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Marketplace fee efficiency | Shrinks the reducible part of the seller fee. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 30% seller fee |
| Novice | `25` | 25.18% seller fee |
| Apprentice | `100` | 21.69% seller fee |
| Adept | `300` | 19.05% seller fee |
| Specialist | `1,000` | 16.5% seller fee |
| Expert | `3,000` | 14.52% seller fee |
| Master | `10,000` | 12.72% seller fee |
| Grandmaster | `30,000` | 11.37% seller fee |
| Wizard | `100,000` | 10.15% seller fee |
| Mystic | `300,000` | 9.23% seller fee |
| Immortal | `1,000,000` | 8.4% seller fee |
| Absolute | `3,000,000` | 7.77% seller fee |

## Bid

**Status:** Planned.

Planned auction trait that makes the same Gold bid compete as a stronger offer.

**How it resolves.** Bid has an 80% core and a reducible 20% price part. Bid grants shrink the reducible part faster.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Auction bid efficiency | Improves the effective bid power of Gold auction offers. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +0% auction bid power |
| Novice | `25` | +3.57% auction bid power |
| Apprentice | `100` | +6.15% auction bid power |
| Adept | `300` | +8.11% auction bid power |
| Specialist | `1,000` | +10% auction bid power |
| Expert | `3,000` | +11.47% auction bid power |
| Master | `10,000` | +12.8% auction bid power |
| Grandmaster | `30,000` | +13.8% auction bid power |
| Wizard | `100,000` | +14.71% auction bid power |
| Mystic | `300,000` | +15.38% auction bid power |
| Immortal | `1,000,000` | +16% auction bid power |
| Absolute | `3,000,000` | +16.47% auction bid power |

## Liquidity

**Status:** Planned.

Planned Gem Points efficiency trait for liquidity positioning.

**How it resolves.** Liquidity uses an 80% core and a reducible 20% requirement part. Grants make the reducible part shrink faster.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Gem Points efficiency | Improves Gem Points efficiency for planned liquidity actions. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | +0% Gem Points Power |
| Novice | `25` | +3.7% Gem Points Power |
| Apprentice | `100` | +6.56% Gem Points Power |
| Adept | `300` | +8.82% Gem Points Power |
| Specialist | `1,000` | +11.11% Gem Points Power |
| Expert | `3,000` | +12.95% Gem Points Power |
| Master | `10,000` | +14.68% Gem Points Power |
| Grandmaster | `30,000` | +16.01% Gem Points Power |
| Wizard | `100,000` | +17.24% Gem Points Power |
| Mystic | `300,000` | +18.18% Gem Points Power |
| Immortal | `1,000,000` | +19.05% Gem Points Power |
| Absolute | `3,000,000` | +19.71% Gem Points Power |

## Conversion

**Status:** Live.

Improves how much Silver a player receives for each Gold converted.

**How it resolves.** The trait creates conversion pressure from 10 toward 30 Silver per Gold. Pressure grants push that curve; flat grants add exact Silver per Gold after the curve.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat Gold to Silver conversion | Adds exact Silver per Gold after the conversion curve. | +0.5 Silver/Gold | +1 Silver/Gold | +1.5 Silver/Gold | +2 Silver/Gold | +2.5 Silver/Gold |
| Conversion pressure | Adds pressure before the conversion rate is derived. | +0.5 pressure to +1 pressure | +1 pressure to +1.5 pressure | +1.5 pressure to +2 pressure | +2 pressure to +2.5 pressure | +2.5 pressure to +3 pressure |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 1 Gold -> 10 Silver |
| Novice | `25` | 1 Gold -> 12.45 Silver |
| Apprentice | `100` | 1 Gold -> 14.44 Silver |
| Adept | `300` | 1 Gold -> 16.09 Silver |
| Specialist | `1,000` | 1 Gold -> 17.83 Silver |
| Expert | `3,000` | 1 Gold -> 19.27 Silver |
| Master | `10,000` | 1 Gold -> 20.67 Silver |
| Grandmaster | `30,000` | 1 Gold -> 21.78 Silver |
| Wizard | `100,000` | 1 Gold -> 22.82 Silver |
| Mystic | `300,000` | 1 Gold -> 23.64 Silver |
| Immortal | `1,000,000` | 1 Gold -> 24.4 Silver |
| Absolute | `3,000,000` | 1 Gold -> 25 Silver |

## Slots

**Status:** Live.

Increases how many active marketplace listings a player can keep.

**How it resolves.** The trait gives base listing slots. Percent grants scale that base; flat grants add slots after scaling.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat marketplace slots | Adds active listing slots directly. | +1 slot | +2 slots | +3 slots | +4 slots | +5 slots |
| Marketplace slot percent | Scales the trait-derived base listing slots. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 1 marketplace slot |
| Novice | `25` | 11 marketplace slots |
| Apprentice | `100` | 21 marketplace slots |
| Adept | `300` | 29 marketplace slots |
| Specialist | `1,000` | 37 marketplace slots |
| Expert | `3,000` | 45 marketplace slots |
| Master | `10,000` | 52 marketplace slots |
| Grandmaster | `30,000` | 57 marketplace slots |
| Wizard | `100,000` | 62 marketplace slots |
| Mystic | `300,000` | 67 marketplace slots |
| Immortal | `1,000,000` | 70 marketplace slots |
| Absolute | `3,000,000` | 74 marketplace slots |
