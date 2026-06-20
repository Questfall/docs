---
icon: backpack
---

# Inventory

Inventory controls how comfortably a character can carry clothing, change equipment, and use higher-level gear.

## Live Status

All five Inventory traits are live. They affect carried weight, equip costs, and high-level item power.

## How To Read These Tables

A trait value is the total character value for that trait after character points, item Aspect, attribute grants, and trait terminal perks. Direct grants are different: they do not increase the trait value itself, but modify the final system value after the trait is read.

The rarity columns show the generated range for one direct grant on one item. Multiple grants add together unless the trait text says they multiply, such as Stamina Relief pressure reduction.

Common (F) clothing has no perk slots, so direct grant ranges start at Uncommon (E).

Rarity letters in grant tables: E = Uncommon, D = Rare, C = Epic, B = Legendary, A = Mythical.

`pp` means percentage points: `+2 pp` changes a `8%` chance into `10%`, not into `8.16%`.

## Levitation

**Status:** Live.

Makes carried items count as lighter while they are in inventory. It does not reduce equipped weight for stamina; Stamina Relief handles that.

**How it resolves.** Direct flat reduction is subtracted from each counted carried item first. Direct percent reduction is applied next. The Levitation trait then reduces the remaining counted weight, with a 10% minimum.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat item weight reduction | Subtracts grams from each counted carried item before percent reductions. | +1 kg to +2 kg | +3 kg to +4 kg | +5 kg to +6 kg | +7 kg to +8 kg | +9 kg to +10 kg |
| Carried item weight reduction | Reduces the remaining carried item weight before the trait reduction. | +1% to +2% | +3% to +4% | +5% to +6% | +7% to +8% | +9% to +10% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 100% counted weight remains |
| Novice | `25` | 84% counted weight remains |
| Apprentice | `100` | 73% counted weight remains |
| Adept | `300` | 64% counted weight remains |
| Specialist | `1,000` | 55% counted weight remains |
| Expert | `3,000` | 49% counted weight remains |
| Master | `10,000` | 43% counted weight remains |
| Grandmaster | `30,000` | 38% counted weight remains |
| Wizard | `100,000` | 34% counted weight remains |
| Mystic | `300,000` | 31% counted weight remains |
| Immortal | `1,000,000` | 28% counted weight remains |
| Absolute | `3,000,000` | 26% counted weight remains |

## Equipping

**Status:** Live.

Reduces the Essence cost of equipping or unequipping clothing.

**How it resolves.** Direct flat and percent grants reduce the base equip cost first. The Equipping trait then reduces what remains. Final equip cost cannot go below 1 Essence.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat equip cost reduction | Subtracts Essence from the base equip cost. | -1 Essence | -2 Essence | -3 Essence | -4 Essence | -5 Essence |
| Equip cost reduction | Reduces the base equip cost by percent before the trait reduction. | +1% to +3% | +4% to +6% | +7% to +9% | +10% to +12% | +13% to +15% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 100% base equip cost remains |
| Novice | `25` | 84% base equip cost remains |
| Apprentice | `100` | 73% base equip cost remains |
| Adept | `300` | 64% base equip cost remains |
| Specialist | `1,000` | 55% base equip cost remains |
| Expert | `3,000` | 49% base equip cost remains |
| Master | `10,000` | 43% base equip cost remains |
| Grandmaster | `30,000` | 38% base equip cost remains |
| Wizard | `100,000` | 34% base equip cost remains |
| Mystic | `300,000` | 31% base equip cost remains |
| Immortal | `1,000,000` | 28% base equip cost remains |
| Absolute | `3,000,000` | 26% base equip cost remains |

## Overlevel

**Status:** Live.

Lets a character use more of a high-level item before fully matching the item level.

**How it resolves.** The raw item-level gap is reduced by flat and percent grants first. Overlevel then reduces the remaining gap. Item weight, rarity, slot, set, and origin are not reduced.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat level-gap reduction | Subtracts levels from the item-level gap. | -1 level | -2 levels | -3 levels | -4 levels | -5 levels |
| Percent level-gap reduction | Reduces the remaining item-level gap before Overlevel applies. | +1% | +2% | +3% | +4% | +5% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 0% level-gap reduction |
| Novice | `25` | 16% level-gap reduction |
| Apprentice | `100` | 27% level-gap reduction |
| Adept | `300` | 36% level-gap reduction |
| Specialist | `1,000` | 45% level-gap reduction |
| Expert | `3,000` | 51% level-gap reduction |
| Master | `10,000` | 57% level-gap reduction |
| Grandmaster | `30,000` | 62% level-gap reduction |
| Wizard | `100,000` | 66% level-gap reduction |
| Mystic | `300,000` | 69% level-gap reduction |
| Immortal | `1,000,000` | 72% level-gap reduction |
| Absolute | `3,000,000` | 74% level-gap reduction |

## Capacity

**Status:** Live.

Increases the total carried weight limit of the inventory.

**How it resolves.** The Capacity trait creates the base weight limit. Flat capacity grants are added first, then percent capacity grants scale that total.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Flat inventory limit | Adds carrying weight directly. | +5 kg to +10 kg | +11 kg to +20 kg | +21 kg to +30 kg | +31 kg to +40 kg | +41 kg to +50 kg |
| Inventory limit percent | Scales the base-plus-flat carrying limit. | +3% to +5% | +6% to +10% | +11% to +15% | +16% to +20% | +21% to +25% |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 5 kg |
| Novice | `25` | 14.62 kg |
| Apprentice | `100` | 23.21 kg |
| Adept | `300` | 33.47 kg |
| Specialist | `1,000` | 50 kg |
| Expert | `3,000` | 72.11 kg |
| Master | `10,000` | 107.72 kg |
| Grandmaster | `30,000` | 155.36 kg |
| Wizard | `100,000` | 232.08 kg |
| Mystic | `300,000` | 334.72 kg |
| Immortal | `1,000,000` | 500 kg |
| Absolute | `3,000,000` | 721.12 kg |

## Exemption

**Status:** Live.

Ignores the heaviest carried items before inventory weight is counted.

**How it resolves.** The trait determines how many heavy items are ignored. Direct grants add more ignored items. Ignored items are removed before Levitation is applied.

### Direct Grant Ranges

| Direct grant | What one grant changes | E | D | C | B | A |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Ignored heavy items | Adds more of the heaviest carried items to the ignored set. | +1 item | +2 items | +3 items | +4 items | +5 items |

### Mastery Start Values

| Mastery | Trait value at start | System value without direct grants |
| --- | ---: | --- |
| Guest | `0` | 0 ignored heavy items |
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
