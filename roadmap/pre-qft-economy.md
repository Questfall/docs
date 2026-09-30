---
icon: coins
---

# Economy Before QFT

App 0.7.01 was activated on 30 September 2026 UTC (1 October in Moscow). Gold
purchases, weekly Gem rewards, Gold Freezing, consumable merging and permanent
Perfect clothing are live. The [settings snapshot](../assets/economy-settings.md)
records the refreshed production configuration, including planned future weeks.

## Purpose

Exercise the reward economy with Gold before the QFT launch: contribution
accounting, leaderboards, period settlement, claims and RPG item use. Reuse
these rules when QFT is available, with explicit changes to the contribution
source and reward currency where appropriate.

Gold remains an in-game currency. Moving future rewards to QFT does not rename
existing Gold, convert historical balances or cancel pending Gold claims.
On-chain liquidity provision, LP ownership burning and token custody still
require their own implementation and verification after QFT exists.

## Gold Purchases And Gems

A weekly competition rewards registered Gold buyers with Gems. The definitive
rules, prize formula and item uses are in [Gems](../quest-mining/completion/rpg-items/gems.md).
Gold purchases provide a temporary contribution source for testing the future
Liquidity Program's reward loop. They support project development; they are
not DEX liquidity deposits or LP ownership burns.

```text
finalized USDC payment + Gold credit (one transaction)
-> purchase contribution with Trading Liquidity snapshot
-> UTC weekly standings
-> immutable results and a non-expiring Gem claim
-> inventory, Gold Marketplace or clothing improvement
```

Registration is sufficient for points and Claim; level, league, verified email
and connected wallets are not eligibility conditions. Only on-chain receipts
at or after program activation qualify. The week is determined by Gold credit
rather than payment discovery time or order creation. No historical backfill.

The contribution source is stored separately from weekly results. A later QFT
or LP source must not recount Gold purchases, convert historical obligations,
or change settled rewards. Existing Gold payout shares and the disabled
Liquidity allocation remain separate from purchase-based Gem rewards. Gold
Freezing adds its own share to future weekly Gold allocations as described below.

## Gold Freezing

[Gold Freezing](../infrastructure/gold-freezing.md) is an implemented rehearsal for
[QFT Freezing](../infrastructure/qft-freezing.md). It uses one personal position,
a 15-week term, a remaining-week multiplier, addition or renewal that resets
the entire principal, and automatic principal return at maturity. Weekly points
integrate Gold × multiplier over actual time; later additions do not rewrite
earlier points. Rewards are claimed separately.

Freezing uses 5/74 of the future fixed weekly budget, preserving the relative
split of the other programs. A midweek launch supplement preserves rewards
already promised for that week. At QFT cutover, remaining principal returns as
Gold and existing Gold claims stay claimable; no position silently becomes QFT.

## Program Map

The percentages below describe the target QFT allocation, not current Gold
payout shares. Disabled programs are excluded from current Gold allocation;
enabling one changes other programs' shares and must be an explicit decision.

| Program | Target QFT allocation | What can be exercised before QFT |
| --- | ---: | --- |
| Weekly quest completion | 40% | Already enabled in the Gold reward policy. |
| Weekly quest creation | 10% | Already enabled in the Gold reward policy. |
| Seasons | 14% | Miner and Author Space distributions are enabled separately: 11.2% and 2.8%. |
| Referral Program | 5% | Already enabled in the Gold reward policy. |
| Liquidity Program | 5% | Purchase-based Gem rewards; actual QFT/USDC liquidity and LP burns await QFT. |
| QFT Freezing | 5% | Gold Freezing is implemented; on-chain QFT custody awaits QFT. |
| Gold Withdrawals | 5% | Auction logic can be rehearsed, but burning Gold for real QFT cannot run before QFT. Paying Gold back does not test the same economic exchange. |
| Founder NFT Burning | 1% | Auction logic can be rehearsed; real execution needs the NFT ownership/burn integration and the chosen payment asset. |
| Founders' Revenue | 10% | Allocation and claims can use Gold once the ownership source is ready; disabled in the current reward policy. |
| Project Expenses | 5% | Allocation/accounting can use Gold; disabled in the current reward policy. |

High-rarity trading for QFT is another token-dependent surface, rather than a
separate reward program. Marketplace behavior can be exercised with Gold;
QFT settlement still needs a separate release.

## Activation And Separate Work

The Gem release includes inventory, Gold Marketplace trading, clothing evolution
and permanent Perfect status for the entire clothing item. Gem activation is an
explicit release step before Gold sales open; deploying the code alone does not
enable Gem rewards. Gold Freezing activates at normal release startup. No active orders
or historical purchases are rewritten.

Gem scrapping, independent Aspect replacement, QFT payments and real liquidity
contributions remain outside this release. [Dice](../quest-mining/completion/rpg-items/dice.md)
have their own crafting rules and do not change historical mining or purchase rewards.

## References

- [Gold and temporary checkout](../assets/gold.md)
- [Gems](../quest-mining/completion/rpg-items/gems.md)
- [Liquidity Program](../infrastructure/liquidity-program.md)
- [QFT Freezing](../infrastructure/qft-freezing.md)
- [Gold Withdrawals](<../infrastructure/gold withdrawals.md>)
- [Reward program allocation](../overview/quest-mining.md)
