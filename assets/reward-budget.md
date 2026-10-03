---
icon: coins
---

# Unified Reward Budget

The reward economy uses one weekly budget. Gold is the current reward currency;
QFT rewards will become available after the token launches.
Program scoring is independent of the budget source and payout currency.

Gold Freezing is active. With the QFT-based baseline split,
the enabled weights total 74:

| Active program | QFT weight | Baseline Gold share with Freezing |
| --- | ---: | ---: |
| Weekly miners | 40 | 40/74 ≈ 54.05% |
| Weekly authors | 10 | 10/74 ≈ 13.51% |
| Seasonal miners | 11.2 | 11.2/74 ≈ 15.14% |
| Seasonal authors | 2.8 | 2.8/74 ≈ 3.78% |
| Referrals | 5 | 5/74 ≈ 6.76% |
| Gold Freezing | 5 | 5/74 ≈ 6.76% |

Before Freezing, the five enabled weights total 69. Admin may configure all six
Gold allocations, including Freezing, independently of the target QFT weights.
Admins enter whole Gold amounts; percentages are calculated automatically from
the weekly total. Editing a program's allocation updates the total; editing the
total scales all allocations using their current proportions. Allocations retain
their exact entered amounts when saved. Existing
five-program plans retain their relative split of 69/74, with 5/74 for Freezing,
until replaced with explicit six-program shares. Reset to QFT baseline restores
the proportions in the table. The
[dated settings snapshot](economy-settings.md#reward-budget) records actual
period totals and allocations. A selected future week is a plan, not a guarantee.

Disabled allocations do not reserve Gold. Integer allocation uses largest remainders with stable program-ID ties;
all of the weekly total is assigned, including very small budgets.

## Periods And Administration

Admin configures the default total and allocation proportions from a future week
or overrides a single future week. Reset to QFT baseline redistributes the total
into whole Gold amounts using the target weights. At Monday 00:00 UTC,
the week's total and allocations are fixed. Changes cannot alter an already
opened week.

The Admin planner shows currently frozen principal and estimates the selected
week's average return as `freezing allocation / current frozen principal`.
It also shows Gold per 1,000 frozen Gold and simple
`APR = weekly return × 365 / 7`, without compounding or previous-week carry.
These are planning estimates; individual rewards use multipliers and time-weighted
points, and future deposits or unlocks change the actual return.

A weekly program pays from its new allocation plus its own previous unallocated
amount. An empty program carries its full pool; carry remains inside that program
and is displayed separately from the new contribution. Whole Gold is accounted
for as pending/paid rewards, seasonal accumulation or carry.

Seasonal allocations are credited at week opening to the UTC calendar quarter
containing that Monday. They are not prorated when a week crosses a quarter boundary.
A calendar quarter is not a fixed twelve-week period. Opening or settling a period
again cannot add its contribution twice. Missed periods are processed in order so
carry and quarter boundaries remain consistent.

## Transition

The production snapshot schedules the unified budget from **2026-W41**,
Monday **5 October 2026 at 00:00 UTC**. Its selected total is **138,000 Gold**,
still planned rather than opened; Admin can revise a future week. The already
open 2026-W40 week finishes under its original terms. The starting total before Freezing is approximately 1.725 times the old
weekly miner pool and is selected using the integer allocator to preserve that
miner amount exactly. Adding Freezing to future weeks redistributes this fixed
total; it does not increase it. The one-time midweek launch supplement is
described in [Gold Freezing](../infrastructure/gold-freezing.md#funding-and-activation).

The current season's already promised miner and author pools are retained as
initial balances. New seasonal contributions are added on top. Future seasons
start from program carry and their weekly contributions, without inheriting the
old manually promised seasonal pool again.

Historical payouts and claimable rewards are never recalculated.
A later QFT transition preserves historical Gold obligations;
it does not rename balances or silently convert pending claims. Author Space
rewards remain withdrawable by their owner through the existing separate flow.
