---
icon: backpack
---

# Inventory

Inventory controls how comfortably a character can carry clothing, change equipment, and use higher-level gear.

## Live Status

All five Inventory traits and their formulas are part of the current character model. Levitation, Overlevel, Capacity, and Exemption are already calculated in normal play.

Equipping cost is visible and fully calculated, but charging Essence for equipping is intentionally disabled until the equipment economy is activated. Inventory overload is also informational for now: the interface shows it, but actions are not blocked by it yet.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Levitation

**Status:** Live.

Makes carried items count as lighter while they are in inventory. It does not reduce equipped weight for stamina; Stamina Relief handles that.

**How it resolves.** Exemption first ignores the heaviest carried items. For every item still counted, mastery and direct flat reductions subtract grams, direct percent reductions apply next, and the Levitation curve reduces what remains. The curve keeps at least 10% of the post-grant weight.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat item weight reduction | Subtracts grams from each counted carried item before percent reductions. | -100 g to -200 g | -300 g to -400 g | -500 g to -600 g | -700 g to -800 g | -900 g to -1 kg |
| Carried item weight reduction | Reduces the remaining carried item weight before the trait reduction. | +1% to +2% | +3% to +4% | +5% to +6% | +7% to +8% | +9% to +10% |

### Mastery Start Values

Every completed mastery rank also subtracts `100 g` from every counted item.

| Mastery | Trait value at start | Weight remaining after trait | Mastery reduction per item |
| --- | ---: | ---: | ---: |
| Guest | `1` | 100% | 0 g |
| Novice | `25` | 84% | 100 g |
| Apprentice | `100` | 73% | 200 g |
| Adept | `300` | 64% | 300 g |
| Specialist | `1,000` | 55% | 400 g |
| Expert | `3,000` | 49% | 500 g |
| Master | `10,000` | 43% | 600 g |
| Grandmaster | `30,000` | 38% | 700 g |
| Wizard | `100,000` | 34% | 800 g |
| Mystic | `300,000` | 31% | 900 g |
| Immortal | `1,000,000` | 28% | 1 kg |
| Absolute | `3,000,000` | 26% | 1.1 kg |

After Absolute, every new decimal mastery rank adds another `100 g`.

### Examples

**Example 1.** `20 kg` counted item, Specialist Levitation, one maximum A flat grant `-1 kg`

Calculation: `(20 - 0.4 mastery - 1 grant) x 55%`.

Result: `10.23 kg` counted weight.

**Example 2.** `20 kg` counted item, Specialist Levitation, one A percent grant `+10%`

Calculation: `(20 - 0.4 mastery) x 90% x 55%`.

Result: `9.70 kg` counted weight.

## Equipping

**Status:** Formula and interface ready; Essence charging intentionally deferred.

Reduces the Essence cost of equipping clothing. Unequipping is free. Replacing clothing is one equip operation, so only the new item has a price.

**How it resolves.** Mastery and direct flat grants reduce the base equip cost first. Direct percent grants and then the Equipping trait reduce what remains. Final calculated cost cannot go below 1 Essence.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat equip cost reduction | Subtracts Essence from the base equip cost. | -1 Essence | -2 Essence | -3 Essence | -4 Essence | -5 Essence |
| Equip cost reduction | Reduces the base equip cost by percent before the trait reduction. | +1% to +3% | +4% to +6% | +7% to +9% | +10% to +12% | +13% to +15% |

### Mastery Start Values

Every completed mastery rank subtracts `1 Essence` from the base price.

| Mastery | Trait value at start | Cost remaining after trait | Mastery base reduction |
| --- | ---: | ---: | ---: |
| Guest | `1` | 100% | 0 Essence |
| Novice | `25` | 84% | 1 Essence |
| Apprentice | `100` | 73% | 2 Essence |
| Adept | `300` | 64% | 3 Essence |
| Specialist | `1,000` | 55% | 4 Essence |
| Expert | `3,000` | 49% | 5 Essence |
| Master | `10,000` | 43% | 6 Essence |
| Grandmaster | `30,000` | 38% | 7 Essence |
| Wizard | `100,000` | 34% | 8 Essence |
| Mystic | `300,000` | 31% | 9 Essence |
| Immortal | `1,000,000` | 28% | 10 Essence |
| Absolute | `3,000,000` | 26% | 11 Essence |

### Examples

**Example 1.** Rare (D) level `10` item, Specialist Equipping, one A flat grant `-5 Essence`

Calculation: `(7 - 4 mastery - 5 grant) x 55%`, with the final minimum.

Result: `1 Essence` calculated equip cost.

**Example 2.** Rare (D) level `10` item, Specialist Equipping, one A percent grant `+15%`

Calculation: `(7 - 4 mastery) x 85% x 55%`, rounded up.

Result: `2 Essence` calculated equip cost.

## Overlevel

**Status:** Live.

Lets a character use more of a high-level item before fully matching the item level.

**How it resolves.** Mastery and flat grants subtract levels from the raw item-level gap. Percent grants and then the Overlevel curve reduce the remainder. Level Fit scales the useful item power: Aspect, terminal perks, direct grants, and booster sources. Item weight, rarity, slot, set, and origin are not reduced.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat level-gap reduction | Subtracts levels from the item-level gap. | -1 level | -2 levels | -3 levels | -4 levels | -5 levels |
| Percent level-gap reduction | Reduces the remaining item-level gap before Overlevel applies. | +1% to +2% | +3% to +4% | +5% to +6% | +7% to +8% | +9% to +10% |

### Mastery Start Values

Every completed mastery rank also subtracts `1 level` from each concrete item gap.

| Mastery | Trait value at start | Gap reduction from trait | Mastery gap reduction |
| --- | ---: | ---: | ---: |
| Guest | `1` | 0% | 0 levels |
| Novice | `25` | 16% | 1 level |
| Apprentice | `100` | 27% | 2 levels |
| Adept | `300` | 36% | 3 levels |
| Specialist | `1,000` | 45% | 4 levels |
| Expert | `3,000` | 51% | 5 levels |
| Master | `10,000` | 57% | 6 levels |
| Grandmaster | `30,000` | 62% | 7 levels |
| Wizard | `100,000` | 66% | 8 levels |
| Mystic | `300,000` | 69% | 9 levels |
| Immortal | `1,000,000` | 72% | 10 levels |
| Absolute | `3,000,000` | 74% | 11 levels |

An overleveled item that grants Overlevel receives only its current Level Fit. The model resolves this iteratively, so an item can partially help itself but never starts with its full bonus.

### Examples

**Example 1.** Character level `10`, item level `20`, Specialist Overlevel, one A flat grant `-5 levels`

Calculation: `(10 - 4 mastery - 5 grant) x 55%`.

Result: `0.55` levels remain; Level Fit is `97.25%`.

**Example 2.** Character level `10`, item level `20`, Specialist Overlevel, one maximum A percent grant `-10%`

Calculation: `(10 - 4 mastery) x 90% x 55%`.

Result: `2.97` levels remain; Level Fit is `85.15%`.

## Capacity

**Status:** Live.

Increases the total carried weight limit of the inventory.

**How it resolves.** The Capacity trait creates the base weight limit. Mastery adds `5 kg` per completed rank, flat grants are added next, and percent grants scale the whole total.

Overload is calculated and displayed, but it does not block inventory or crafting actions yet.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat inventory limit | Adds carrying weight directly. | +5 kg to +10 kg | +11 kg to +20 kg | +21 kg to +30 kg | +31 kg to +40 kg | +41 kg to +50 kg |
| Inventory limit percent | Scales the base-plus-flat carrying limit. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | Base capacity | Mastery capacity | Total before grants |
| --- | ---: | ---: | ---: | ---: |
| Guest | `1` | 5 kg | 0 kg | 5 kg |
| Novice | `25` | 14.62 kg | 5 kg | 19.62 kg |
| Apprentice | `100` | 23.21 kg | 10 kg | 33.21 kg |
| Adept | `300` | 33.47 kg | 15 kg | 48.47 kg |
| Specialist | `1,000` | 50 kg | 20 kg | 70 kg |
| Expert | `3,000` | 72.11 kg | 25 kg | 97.11 kg |
| Master | `10,000` | 107.72 kg | 30 kg | 137.72 kg |
| Grandmaster | `30,000` | 155.36 kg | 35 kg | 190.36 kg |
| Wizard | `100,000` | 232.08 kg | 40 kg | 272.08 kg |
| Mystic | `300,000` | 334.72 kg | 45 kg | 379.72 kg |
| Immortal | `1,000,000` | 500 kg | 50 kg | 550 kg |
| Absolute | `3,000,000` | 721.12 kg | 55 kg | 776.12 kg |

### Examples

**Example 1.** Specialist Capacity, one A flat grant `+50 kg`

Calculation: `50 kg base + 20 kg mastery + 50 kg grant`.

Result: `120 kg` inventory limit.

**Example 2.** Specialist Capacity, one A percent grant `+25%`

Calculation: `(50 kg base + 20 kg mastery) x 125%`.

Result: `87.5 kg` inventory limit.

## Exemption

**Status:** Live.

Ignores the heaviest carried items before inventory weight is counted.

**How it resolves.** The trait determines how many heavy items are ignored. Direct grants add more ignored items. Ignored items are removed before Levitation is applied.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Ignored heavy items | Adds more of the heaviest carried items to the ignored set. | +1 to +2 items | +3 to +4 items | +5 to +6 items | +7 to +8 items | +9 to +10 items |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `1` | 0 ignored heavy items |
| Novice | `25` | 1 ignored heavy item |
| Apprentice | `100` | 2 ignored heavy items |
| Adept | `300` | 3 ignored heavy items |
| Specialist | `1,000` | 4 ignored heavy items |
| Expert | `3,000` | 5 ignored heavy items |
| Master | `10,000` | 6 ignored heavy items |
| Grandmaster | `30,000` | 7 ignored heavy items |
| Wizard | `100,000` | 8 ignored heavy items |
| Mystic | `300,000` | 9 ignored heavy items |
| Immortal | `1,000,000` | 10 ignored heavy items |
| Absolute | `3,000,000` | 11 ignored heavy items |

### Examples

**Example 1.** Specialist Exemption, one maximum D grant `+4 items`

Calculation: `4 + 4`.

Result: `8` heaviest carried items ignored.

**Example 2.** Specialist Exemption, one maximum A grant `+10 items`

Calculation: `4 + 10`.

Result: `14` heaviest carried items ignored.
