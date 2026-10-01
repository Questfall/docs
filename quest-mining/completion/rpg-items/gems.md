---
icon: gem
---

# Gems

Gems are individual crafting items in six rarities, earned through the active
weekly Gold-purchase competition. The program was activated before Gold sales
opened; purchases earn points only after that activation. Under the current
percentage-based policy, every qualifying weekly buyer receives one Gem.
Existing weeks retain their saved rules. The [dated settings snapshot](../../../assets/economy-settings.md#gem-leaderboard)
records the configured percentages, thresholds and scheduled rules.

## Weekly Gold Buyer Competition

Any registered account with an executed paid Gold order participates. No level,
league, verified email or connected wallet is required for points or Claim.
Only payments received on-chain at or after activation qualify, including payment
of an older order. Prior payments are not backfilled.

Weeks run Monday 00:00 UTC to the next Monday. Gold-credit time determines both
the week and the time bonus. A payment discovered late enters the week when Gold
is credited and cannot change an already completed leaderboard.

```text
Gem Points = purchased Gold × Trading Liquidity multiplier × time bonus
```

The multiplier uses the player's Trading Liquidity when Gold is credited.
Changing equipment affects future purchases only. The time bonus falls
linearly from 1.10 at Monday 00:00 to 1.00 at the end of the week. A midweek launch
uses the remaining portion of that calendar week. Each purchase is rounded once
to six decimal places before being added to the weekly total.

One buyer is one participant. Purchases add points to that account. Ties favor
the account that reached its final total earlier, then the account ID.

### Prize Fund

Under the current percentage-based policy, for `N` unique buyers there are
`N` prizes. Assign the lower two thirds, rounded up, a Common Gem; repeat with the
remaining buyers for Uncommon, Rare, Epic and Legendary. Stop when no buyers
remain. All buyers remaining after Legendary receive Mythical, the highest rarity.

```text
F = ceil(N × 2 / 3)
E = ceil((N − F) × 2 / 3)
Continue through B; A receives the remaining buyers.
```

| Buyers | Rarity unlocked | Gem weight |
| ---: | --- | ---: |
| 1 | F — Common | 100 g |
| 3 | E — Uncommon | 373 g |
| 9 | D — Rare | 806 g |
| 27 | C — Epic | 1,393 g |
| 81 | B — Legendary | 2,128 g |
| 243 | A — Mythical | 3,009 g |

Prizes are sorted from highest rarity to lowest and awarded by rank, one per
buyer. Repeated payments add points without increasing the buyer count.

| Buyers | Prizes | Composition |
| ---: | ---: | --- |
| 1 | 1 | F |
| 3 | 3 | E, F × 2 |
| 28 | 28 | C, D × 2, E × 6, F × 19 |
| 100 | 100 | B, C × 2, D × 8, E × 22, F × 67 |
| 243 | 243 | A, B × 2, C × 6, D × 18, E × 54, F × 162 |

The F–B percentages are configurable independently, each applied to the
remaining buyers and rounded up. A always receives all remaining
buyers. Percentages do not sum to 100%. Zero disables a rarity; 100% assigns
the whole remainder and prevents higher rarities. The current Two thirds
setting uses exact 2/3 fractions; Half uses 1/2 at each step.

The **No reward** row before F can exclude the bottom part of the ranking.
Its default is 0%. With a nonzero percentage, round up the excluded buyer count
first, then distribute Gems among the remaining buyers. Excluded accounts keep
their points and rank, but have no weekly Gem to claim.
For example, 20% excludes 16 of 80 buyers; the other 64 receive 43 F, 14 E,
5 D and 2 C under the Two thirds preset. Rarity thresholds become
2/4/12/34/102/304 buyers. Setting 100% awards no Gems.

Saving while disabled does not activate rewards. After activation, edits are
scheduled for next Monday 00:00 UTC and can be revised before then. This week,
past contributions and settled rewards retain their saved rules. Earlier weeks
using the Half preset retain their 1/2 allocation and thresholds 1/2/4/8/16/32.

Earlier weeks using the weighted policy retain its prize formula:
`P = min(N − 1, round(0.1 × N + 0.8 × √N))`, with no prizes below two buyers
and rarity thresholds 2/3/9/27/81/243. Its allocation and existing rewards are
preserved. Updating an active program requires scheduling the new rules for
the next Monday; historical rules and rewards are not rewritten.

Current results are provisional. Weekly settlement fixes ranks and rewards.
Winners claim their Gem from Buy Gold; claims never expire. Repeated requests
cannot create a second item. Future economy changes take effect next week and
do not change existing contributions or settled rewards.

## Inventory And Marketplace

Every Gem has a separate ID; inventory groups identical Gems by rarity.
The **Consumables** inventory category contains Gems, Dice and Potions while
keeping their stacks separate. Gems have
no level, equipped slot, Aspect or perks and never drop from lootboxes. All six
rarities can trade for Gold through the existing Marketplace fees, slots and
payout process. A listing sells one Gem from the stack. Trades appear in Tracker.
Gem merging is live as described below. Gem scrapping is not available.

## Merging Gems

The current saved recipe merges five owned Gems of the same rarity into one Gem of the next rarity.
Admin **Crafting → Merge** can set the required count independently for Gems,
Dice and Potions, and for each rarity transition (2–100). The calculator accepts a source rarity and shows the required source items and total merge operations for every higher rarity. The confirmation uses the current server recipe.
The result is guaranteed. Mythical is the highest rarity and cannot merge further.
Ingredients must be in inventory; cancel a Marketplace listing before using it.

| Merge | Base Essence fee |
| --- | ---: |
| F → E | 10 |
| E → D | 30 |
| D → C | 90 |
| C → B | 270 |
| B → A | 810 |

The fee is multiplied by the current Crafting Merging remaining-cost percentage
and rounded up. The trait reduces Essence only: the required number of
Gems does not receive a discount or Luck roll. At the default five-input recipe,
starting entirely from Common Gems, one Mythical takes
3,125 Common Gems and 14,410 Essence before discounts. Higher-rarity ingredients
shorten the chain. Max Out uses its separately configured Essence fee.

The confirmation shows the required source Gems, one resulting Gem and the
exact fee. Gems cannot be scrapped to recover merging Essence.

Merging recipes do not change the weekly prize distribution.

## Clothing Evolution: F–B

Consume one Gem matching the clothing's current rarity and the Essence cost
quoted by [Crafting Rarity](../rpg-attributes/crafting.md#rarity) to raise it by one
rarity. The item's ID, level and history survive. Existing perks retain their
types and conditions and improve within the new rarity's ranges; one valid new
perk is generated. [Crafting Quality](../rpg-attributes/crafting.md#quality)
improves rolls. Accumulated terminal values are historical and never rerolled;
only future per-level growth improves. Equipped items refresh character stats.

The quote shows the required Gem, Essence and resulting rarity. Both ingredients
are consumed together. Listed items cannot be improved.

## Mythical Gem: Max Out → ★ Perfect

One A Gem and the configured Max Out fee, currently **500 Essence**, make
**the entire clothing item permanently Perfect**. The same fee applies to every
rarity and level, without Crafting or Luck discounts.
The fee is recorded as invested Essence and follows the ordinary Scrapping
recovery rules. Both resources are consumed together.
Any rarity F–A is eligible, including Common clothing with no perks. All existing
perks and the Aspect immediately reach their full maximum at the current rarity
and level. Terminal perks receive maximum quality and step, and their accumulated
value becomes `maximum step at current rarity × level`. Grants and boosters reach
their range maximum with the existing condition multipliers; fixed bonuses stay
fixed. The Aspect becomes `current rarity step × level`.

Perk identities, order, conditions, targets and Aspect type stay unchanged, as do
item ID, level, rarity, mass, artwork and history. Max Out is the only way to earn
the permanent status: naturally perfect rolls and previous single-perk upgrades
do not grant it. A Perfect item cannot consume another A Gem for Max Out.

**Upgrade** recalculates all maxima for the new level. **Evolve** recalculates full
maxima for the new rarity, including accumulated terminal and Aspect values. Its
new perk is chosen with ordinary compatibility/probability rules but receives
maximum numeric values immediately. Crafting Quality no longer changes these
values; normal Essence and evolution Gem costs still apply. Evolving an ordinary
item retains its historical accumulation as described above.

The golden ★ appears with the rarity in Inventory, equipment, Marketplace and
Tracker. Sale, cancellation and ownership transfer preserve the status. The
confirmation previews the whole item, the consumed Mythical Gem and −500 Essence. Listed items
cannot be improved.

## Tracker And QFT Transition

One Tracker card follows each Gold order from creation through payment confirmation
and credit, including earned points and its week. A separate weekly card shows an
available reward, claimed Gem or result without a prize.

Future liquidity contributions may also earn rewards; earlier purchases and
weekly rewards will retain their original rules. Existing Gold
reward shares and the disabled Liquidity allocation are unchanged. See
[Economy Before QFT](../../../roadmap/pre-qft-economy.md).
