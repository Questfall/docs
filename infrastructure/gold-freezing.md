---
icon: snowflake
---

# Gold Freezing

Gold Freezing rehearses the weekly mechanics of [QFT Freezing](qft-freezing.md)
before QFT exists. A player freezes personal, spendable Gold and receives a
variable share of a weekly Gold reward pool. Frozen principal is never used to
pay rewards, burned, converted into QFT, or exposed to slashing. This is an
in-game reward program, not a fixed-yield deposit.

## One position and weekly power

- Each player has at most one Gold freezing position. A new position is funded
  with whole Gold from the personal spendable balance. The principal leaves
  that balance immediately and is accounted for separately. Pending Gold
  rewards and Author Space earnings must first reach the personal balance.
- During the active program, a new position starts immediately and unlocks
  exactly 15 weeks after confirmation. Its multiplier starts at 15 and falls
  by one every seven days from that timestamp: 15, 14, ..., 1, 0. There is no
  early withdrawal during an active term, except the QFT cutover.
- The player may add Gold to the same position. The new amount leaves the
  spendable balance immediately and contributes to the current week's power
  from confirmation. Every addition resets the entire principal, including
  previously frozen Gold, to 15 weeks at a 15× multiplier. The new unlock date
  is exactly 15 weeks from confirmation.
- The player may renew the position back to 15 weeks. Renewal takes effect at
  confirmation timestamp and changes the unlock date immediately. It applies
  to the entire position. When the term ends, the full principal returns to the
  personal spendable balance automatically and the position closes. No claim
  or withdrawal is required. A new position can then be created explicitly.
- Rewards do not compound automatically. Claimed Gold can be added to the
  position by an explicit action.

## Time-weighted weekly points

The reward week remains Monday 00:00 UTC through the next Monday. Points use
the principal and multiplier active during each part of the week: a later
addition or renewal never retroactively increases points already earned. A
multiplier can fall during a reward week because its seven-day boundaries follow
the position's confirmation timestamp.

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
by their share of total player power. Whole Gold is allocated by largest
remainders. Rewards do not expire; Claim transfers earned Gold to the personal
spendable balance whether or not the principal is still frozen.

Returning the principal preserves points already earned in the last partial
week. Rewards are separate from the returned principal and retain their normal
Claim flow.

## Funding and activation

The freezing program uses the existing QFT target weight of 5 in the unified
weekly Gold budget. With the currently enabled weights totaling 69, each week
with freezing enabled allocates `5 / 74` of its fixed Gold total to freezing.
The other programs' allocations shrink proportionally in unopened weeks; their
weekly total does not increase. Allocations are frozen when a week opens.
Admin may configure future weekly Gold budgets using
the existing reward-budget controls; the default freezing weight comes from
the QFT program allocation.

If the launch week already has promised rewards, its first freezing pool is a
separate, one-time supplement. It uses the canonical `5 / 74` allocation of the
already frozen weekly total, or the first configured budget when unified funding
starts next week. This exception increases the launch week's combined funding
without reducing any existing promise. The full pool is available; player points
count only from their activation or deposit timestamp to the UTC week boundary.
If the current unified week is still unopened, it includes freezing normally
and receives no duplicate supplement.
Subsequent weeks use the normal fixed-total unified allocation.

The entire freezing fund, including its own previous unallocated carry, is
distributed among eligible players according to power. There is no minimum
number of players, principal threshold, or yield cap: one player can receive
the entire fund. If no player is eligible in a week, its allocation stays in
the freezing program as carry under the unified-budget rule. It is available
to the next eligible week and is never silently assigned to another program.

## QFT cutover

Gold Freezing and QFT Freezing are separate currency programs. The cutover
will take place at a Monday 00:00 UTC boundary. New Gold positions and renewals
will close once the final Gold week is announced. That final week will settle
under its already frozen Gold rules. Every remaining Gold principal will then
return to its owner's personal Gold balance.

The Gold term may therefore end early at QFT launch. Earned Gold claims stay
claimable without expiry and are never renamed or converted to QFT. QFT Freezing starts with new, explicit QFT
deposits and its own reward currency; a Gold position never becomes a QFT
position. Any unallocated Gold freezing carry left after the final week is
closed as unused budget, not converted into QFT or paid to another program.
