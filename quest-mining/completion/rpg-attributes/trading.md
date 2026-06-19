---
icon: scale-unbalanced
---

# Trading

Trading is the attribute for players who want to earn through the [marketplace](../../../infrastructure/marketplace.md), Gold conversion, Gold -> QFT auctions, and liquidity support.

It is built around five traits:

| Trait | What it improves |
| --- | --- |
| Fee | Reduces the marketplace fee paid when listed items are sold. |
| Bid | Improves queue position in weekly Gold -> QFT auctions. |
| Liquidity | Increases Gem Points earned in the Liquidity Program. |
| Conversion | Improves the Gold -> Silver conversion rate. |
| Slots | Increases active marketplace listing slots. |

***

## Fee

The marketplace charges a fee when a listed item is sold. This fee is burned. The base marketplace fee is:

$$BaseFee=30\%$$

The `Fee` trait reduces that fee. Item grants reduce the base fee first, then the trait reduction is applied to the remaining fee.

$$t=\log_{10}(\max(1, Fee))$$

$$FeeReduction=\left\lfloor\frac{100t^2}{t^2+4}\right\rfloor$$

$$FeeGrantMultiplier=\prod_i\left(1-\frac{Grant_i}{100}\right)$$

$$FinalFee=max(1\%,30\%*FeeGrantMultiplier*\frac{100-FeeReduction}{100})$$

Base `Fee` values without item grants:

| Fee trait | Fee reduction | Final marketplace fee |
| ---: | ---: | ---: |
| 1 | 0% | 30% |
| 10 | 20% | 24% |
| 100 | 50% | 15% |
| 1,000 | 69% | 9.3% |
| 10,000 | 80% | 6% |
| 100,000 | 86% | 4.2% |
| 1,000,000 | 90% | 3% |

Fee grants reduce the base fee multiplicatively:

| Item rarity | Base marketplace fee grant |
| --- | ---: |
| Uncommon | `-1..2% base marketplace fee` |
| Rare | `-3..4% base marketplace fee` |
| Epic | `-5..6% base marketplace fee` |
| Legendary | `-7..8% base marketplace fee` |
| Mythical | `-9..10% base marketplace fee` |

For example, `Fee 10,000` without grants gives a `6%` marketplace fee. With one maximum Mythical Fee grant, the base fee is first reduced from `30%` to `27%`, and the final fee becomes `5.4%`.

***

## Bid

Gold can be withdrawn for QFT through a weekly Gold -> QFT auction. A bid has an actual price, which is used for settlement if the bid is filled. The `Bid` trait does not change that real price. Instead, it creates a lower effective price for queue sorting.

Lower effective price means a better queue position.

$$BidPower=\left\lfloor25*\log_{10}(\max(1, Bid))\right\rfloor+\sum Grants$$

$$EffectiveBidPrice=ActualBidPrice*\frac{100}{100+BidPower}$$

Base `Bid` values without item grants:

| Bid trait | Bid Power | Effective price for queue sorting |
| ---: | ---: | ---: |
| 1 | 0 | 100% of actual bid |
| 10 | 25 | 80% of actual bid |
| 100 | 50 | 66.7% of actual bid |
| 1,000 | 75 | 57.1% of actual bid |
| 10,000 | 100 | 50% of actual bid |
| 100,000 | 125 | 44.4% of actual bid |
| 1,000,000 | 150 | 40% of actual bid |

Bid grants add direct Bid Power:

| Item rarity | Bid Power for Gold withdrawals grant |
| --- | ---: |
| Uncommon | `+5..10 Bid Power for Gold withdrawals` |
| Rare | `+11..20 Bid Power for Gold withdrawals` |
| Epic | `+21..30 Bid Power for Gold withdrawals` |
| Legendary | `+31..40 Bid Power for Gold withdrawals` |
| Mythical | `+41..50 Bid Power for Gold withdrawals` |

Example with an actual bid price of `$1.00`:

| Bid Power | Effective bid price |
| ---: | ---: |
| 0 | $1.00 |
| 25 | $0.80 |
| 50 | $0.67 |
| 100 | $0.50 |
| 150 | $0.40 |
| 300 | $0.25 |
| 450 | $0.18 |

This means a player with high `Bid` can offer a higher actual price while still getting a competitive queue position.

***

## Liquidity

`Liquidity` increases Gem Points in the Liquidity Program. It does not change QFT rewards from burned liquidity; those are handled by the Liquidity Program rules. The trait affects only the Gem leaderboard.

$$GemPointsPower=\left\lfloor25*\log_{10}(\max(1, Liquidity))\right\rfloor+\sum Grants$$

$$GemPoints=RawLPPoints*TimeFactor*\frac{100+GemPointsPower}{100}$$

Base `Liquidity` values without item grants:

| Liquidity trait | Gem Points Power | Gem Points multiplier |
| ---: | ---: | ---: |
| 1 | 0 | x1.00 |
| 10 | 25 | x1.25 |
| 100 | 50 | x1.50 |
| 1,000 | 75 | x1.75 |
| 10,000 | 100 | x2.00 |
| 100,000 | 125 | x2.25 |
| 1,000,000 | 150 | x2.50 |

Liquidity grants add directly to Gem Points from liquidity:

| Item rarity | Gem Points from liquidity grant |
| --- | ---: |
| Uncommon | `+5..10% Gem Points from liquidity` |
| Rare | `+11..20% Gem Points from liquidity` |
| Epic | `+21..30% Gem Points from liquidity` |
| Legendary | `+31..40% Gem Points from liquidity` |
| Mythical | `+41..50% Gem Points from liquidity` |

The time factor makes liquidity burned earlier in the week more valuable:

$$TimeFactor=\frac{1}{1+e^{0.00002*(SecondOfWeek-300000)}}$$

Approximate values:

| Moment | Time factor |
| --- | ---: |
| Week start | 0.998 |
| Day 1 | 0.986 |
| Day 2 | 0.927 |
| Day 3 | 0.693 |
| Day 3.47 | 0.500 |
| Day 4 | 0.287 |
| Day 5 | 0.067 |
| Day 6 | 0.013 |
| Day 7 | 0.002 |

The Gem leaderboard itself is described in the [Gems](../rpg-items/gems.md#gem-issuance) article.

***

## Conversion

`Conversion` improves the Gold -> Silver conversion rate. Gold is burned during conversion, and the player receives Silver.

The base rate is:

$$BaseSilverPerGold=10$$

The trait and percentage grants increase that rate. Flat grants then add exact Silver per Gold on top. The final conversion rate is capped at `100` Silver per Gold.

$$ConversionBonus=\left\lfloor25*\log_{10}(\max(1, Conversion))\right\rfloor+\sum PercentGrants$$

$$SilverPerGold=min(100,\left\lfloor10*\frac{100+ConversionBonus}{100}+\sum FlatGrants\right\rfloor)$$

$$FinalSilver=\left\lfloor GoldConverted*SilverPerGold\right\rfloor$$

Base `Conversion` values without item grants:

| Conversion trait | Conversion bonus | Silver per Gold |
| ---: | ---: | ---: |
| 1 | +0% | 10 |
| 10 | +25% | 12.5 |
| 100 | +50% | 15 |
| 1,000 | +75% | 17.5 |
| 10,000 | +100% | 20 |
| 100,000 | +125% | 22.5 |
| 1,000,000 | +150% | 25 |

Conversion has two grant types.

Flat grants are fixed by rarity:

| Item rarity | Silver per Gold grant |
| --- | ---: |
| Uncommon | `+1 Silver per Gold` |
| Rare | `+2 Silver per Gold` |
| Epic | `+3 Silver per Gold` |
| Legendary | `+4 Silver per Gold` |
| Mythical | `+5 Silver per Gold` |

Percentage grants are rolled by rarity:

| Item rarity | Gold to Silver conversion bonus grant |
| --- | ---: |
| Uncommon | `+5..10% Gold to Silver conversion bonus` |
| Rare | `+11..20% Gold to Silver conversion bonus` |
| Epic | `+21..30% Gold to Silver conversion bonus` |
| Legendary | `+31..40% Gold to Silver conversion bonus` |
| Mythical | `+41..50% Gold to Silver conversion bonus` |

Examples:

| Build | Silver per Gold |
| --- | ---: |
| Conversion 1, no grants | 10 |
| Conversion 10,000, no grants | 20 |
| Conversion 1,000,000, no grants | 25 |
| Conversion 10,000, one max Mythical percent grant and one Mythical flat grant | 30 |
| Conversion 10,000, six max Mythical percent grants and six Mythical flat grants | 80 |

***

## Slots

`Slots` increases the number of active marketplace listings a player can have at the same time. Slots are a trading capacity tool, not a hard economic bottleneck.

$$BaseMarketplaceSlots=\max(1,\left\lfloor10*\sqrt[3]{\max(0, Slots)}\right\rfloor)$$

$$FinalMarketplaceSlots=\left\lfloor BaseMarketplaceSlots*\frac{100+\sum PercentGrants}{100}\right\rfloor+\sum FlatGrants$$

Base `Slots` values without item grants:

| Slots trait | Marketplace slots |
| ---: | ---: |
| 0 | 1 |
| 1 | 10 |
| 10 | 21 |
| 100 | 46 |
| 1,000 | 100 |
| 10,000 | 215 |
| 100,000 | 464 |
| 1,000,000 | 1,000 |

Flat slot grants:

| Item rarity | Marketplace listing slots grant |
| --- | ---: |
| Uncommon | `+10..20 marketplace listing slots` |
| Rare | `+21..40 marketplace listing slots` |
| Epic | `+41..60 marketplace listing slots` |
| Legendary | `+61..80 marketplace listing slots` |
| Mythical | `+81..100 marketplace listing slots` |

Percentage slot grants:

| Item rarity | Marketplace listing slots grant |
| --- | ---: |
| Uncommon | `+5..10% marketplace listing slots` |
| Rare | `+11..25% marketplace listing slots` |
| Epic | `+26..50% marketplace listing slots` |
| Legendary | `+51..75% marketplace listing slots` |
| Mythical | `+76..100% marketplace listing slots` |

Examples:

| Build | Marketplace slots |
| --- | ---: |
| Slots 100, no grants | 46 |
| Slots 10,000, no grants | 215 |
| Slots 10,000, one max Mythical percent grant and one max Mythical flat grant | 530 |
| Slots 10,000, six max Mythical percent grants and six max Mythical flat grants | 2,105 |
| Slots 1,000,000, six max Mythical percent grants and six max Mythical flat grants | 7,600 |
