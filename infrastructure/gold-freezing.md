---
icon: snowflake
---

# Gold Freezing

Gold Freezing rehearses the weekly mechanics of [QFT Freezing](qft-freezing.md)
before QFT exists. A player freezes personal, spendable Gold and receives a
variable share of a weekly Gold reward pool. Frozen principal is never used to
pay rewards, burned, converted into QFT, or exposed to slashing. This is an
in-game reward program, not a fixed-yield deposit. The product should call the
action **Freeze Gold**, matching the QFT terminology.

## One position and weekly power

- Each player has at most one Gold freezing position. A new position is funded
  with whole Gold from the personal spendable balance. The principal leaves
  that balance immediately and is accounted for separately. Pending Gold
  rewards and Author Space earnings must first reach the personal balance.
- During the active program, a new position starts immediately and unlocks
  exactly 15 weeks after confirmation. Its multiplier starts at 15 and falls
  by one every seven days from that timestamp: 15, 14, ..., 1, 0. The program
  opens automatically on the first normal backend startup with this release,
  including mid-week. Previously saved pending positions start at that opening
  without another balance debit. There is no early withdrawal during an active
  term, except the QFT cutover.
- The player may add Gold to the same position. The new amount leaves the
  spendable balance immediately and contributes to the current week's power
  from confirmation. Every addition resets the entire principal, including
  previously frozen Gold, to 15 weeks at a 15× multiplier. The new unlock date
  is exactly 15 weeks from confirmation. The popup must show the total
  principal, new term, unlock date and estimate before confirmation. Before
  activation, additions increase the pending principal with the same initial
  15-week term from the program opening.
- The player may renew the position back to 15 weeks. Renewal takes effect at
  confirmation timestamp and changes the unlock date immediately. It applies
  to the entire position. When the term ends, the full principal returns to the
  personal spendable balance automatically and the position closes. No claim
  or withdrawal is required. The minute worker processes quiet accounts;
  requests also catch up any due returns before reading or changing a position.
  A new position can then be created explicitly.
- Rewards do not compound automatically. Claimed Gold can be added to the
  position by an explicit action.

## Time-weighted weekly points

The reward week remains Monday 00:00 UTC through the next Monday. Each deposit
or renewal records a new principal/unlock segment. Earlier segments keep their
original amounts and multipliers: a later reset never retroactively increases
points already earned. A multiplier can fall during a reward week because its
seven-day boundaries follow the position's confirmation timestamp.

For each interval of unchanged principal and multiplier:

`points = frozen_gold × multiplier × interval_duration / 7 days`.

Weekly points are the sum of these intervals. They can be fractional; round
only the final Gold reward allocation. The live leaderboard shows estimated
points at the week's end, assuming no more changes. Adding Gold immediately
updates that estimate using the new total and 15× only for the time remaining.
The chart shows how these weekly estimates changed after deposits or renewals.

For example, adding 1,000 Gold halfway through a week to 1,000 Gold at 15×
produces `1,000 × 15 × ½ + 2,000 × 15 × ½ = 22,500` weekly points. A new 1,000
Gold position with one day left contributes `1,000 × 15 / 7 ≈ 2,142.86` points.

At settlement, a player's Gold reward is the week's freezing pool multiplied
by their share of total player power. Allocate whole Gold by largest remainders
with deterministic player-ID ties.
Settlement is idempotent. It creates non-expiring, separately identified Gold
claims; Claim transfers earned Gold to the personal spendable balance whether
or not the principal is still frozen.

Automatic principal returns preserve snapshots and points already earned in
the last partial week. The return, balance credit, ledger record and personal
Tracker event are atomic. The Tracker shows **Gold Freezing · Your 15-week term
ended · Gold returned to balance · +amount Gold**, with a frozen Gold cover and
no object link: personal positions do not have their own detail page.
QFT cutover uses the same return event with its own reason. Repeated probes
cannot credit the principal or emit the event twice. Rewards are separate from
the returned principal and retain their normal Claim flow.

## Funding and activation

The freezing program uses the existing QFT target weight of 5 in the unified
weekly Gold budget. With the currently enabled weights totaling 69, each week
with freezing enabled allocates `5 / 74` of its fixed Gold total to freezing.
The other programs' allocations shrink proportionally in unopened weeks; their
weekly total does not increase. Allocations are frozen when a week opens.
Admin may configure future weekly Gold budgets using
the existing reward-budget controls; the default freezing weight comes from
the QFT program allocation.

The first release activates immediately at the normal backend startup timestamp,
not at the next Monday. Schema-only and release-verification boots do not
activate it. A future opening saved by an earlier version is brought forward;
later restarts preserve the activation timestamp, positions and pools. A program
with an announced final week or completed QFT cutover is never reopened.

If the launch week already has promised rewards, its first freezing pool is a
separate, one-time supplement. It uses the canonical `5 / 74` allocation of the
already frozen weekly total, or the first configured budget when unified funding
starts next week. This exception increases the launch week's combined funding
without reducing any existing promise. The full pool is available; player points
count only from their activation or deposit timestamp to the UTC week boundary.
The fund records its source budget and activation timestamp, and activation and
funding are audited in the same transaction. If the current unified week is still
unopened, it includes freezing normally and receives no duplicate supplement.
Subsequent weeks use the normal fixed-total unified allocation.

The entire freezing fund, including its own previous unallocated carry, is
distributed among eligible players according to power. There is no minimum
number of players, principal threshold, or yield cap: one player can receive
the entire fund. If no player is eligible in a week, its allocation stays in
the freezing program as carry under the unified-budget rule. It is available
to the next eligible week and is never silently assigned to another program.

## QFT cutover

Gold Freezing and QFT Freezing are separate currency programs. Schedule the
cutover at a Monday 00:00 UTC boundary. Stop accepting new Gold positions and
renewals once the final Gold week is announced. Settle that final week under
its already frozen Gold rules. Then return every remaining Gold principal to
its owner's personal Gold balance, including positions that never reached
their first eligible week. Record each return once in the economy ledger.

The Gold term may therefore end early at QFT launch. Show this possibility
before confirmation. Earned Gold claims stay claimable without expiry and are
never renamed or converted to QFT. QFT Freezing starts with new, explicit QFT
deposits and its own reward currency; a Gold position never becomes a QFT
position. Any unallocated Gold freezing carry left after the final week is
closed as unused budget, not converted into QFT or paid to another program.

## User-facing state and accounting

The page is a weekly participation view. Show the current week's allocated Gold
pool, the player's rank and share, and the calculation
`sum of Gold × multiplier × time fraction = my weekly points`, followed by
`my power / total power × weekly freezing fund = my Gold reward`. Show the
player's one position with spendable Gold, frozen principal,
remaining multiplier and unlock date. Provide separate **Add Gold** and
**Renew to 15 weeks** actions. The Add popup provides a styled amount slider,
optional exact manual input without spinners, and Max for all spendable Gold.
Its confirmation clearly states that adding renews the entire position. The
estimated reward cannot be promised while other players can still change
their positions.

Show a public leaderboard for the current week, ranked by estimated points,
with each player's frozen Gold, multiplier, power, pool share and Gold reward.
Use a full-width chart above the leaderboard, in the Leagues chart language,
to compare the player's power and share with the whole field across weekly
estimates. Keep the player's own leaderboard row highlighted with compact
**Add Gold** / **Renew to 15 weeks** icon buttons before the Gold and multiplier
values, with custom explanatory hints. The marketing explanation belongs
in a separate entry popup; the page should prioritize the pool, position,
calculation and field. Do not advertise a guaranteed APY.

Freeze, cancel, add, renew, withdraw and cutover return must be transactional and
idempotent. The sum of spendable Gold and frozen principal must change only
through a separately recorded reward, purchase, burn, transfer, or correction;
moving Gold in or out of a position alone does not issue or destroy it.
Admin reporting should expose total frozen principal, active power, weekly
allocation, earned and claimed rewards, and principal returned at cutover.
