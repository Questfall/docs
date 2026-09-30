---
icon: sack-dollar
---

# Gold (in-game)

Gold is an in-game currency used for practical system actions and low-rarity item trading.

## Current Utility

| Use | Status |
| --- | --- |
| Open Common Lootboxes | Live |
| Convert Gold into Silver | Live |
| Buy and sell RPG items on the marketplace | Live |
| Pay marketplace fees on Gold sales | Live |
| Reset character attribute points | 50 Gold from League II, with beginner and new-league exemptions |
| Buy Gold with native USDC on Polygon | Prepared for activation in the next release |
| Freeze personal Gold for weekly rewards | Included in the next release |
| Participate in future Gold withdrawal auctions | Planned |

## Resetting Attribute Points

Resetting returns all spent attribute points so they can be redistributed. It is always free in the Hall and League I. From the current, open League II onward, a reset costs **50 Gold**, except for one free reset in each new league. Unused free resets from earlier leagues do not accumulate. The reset screen shows the server-calculated price before confirmation.

The exemption follows the currently open league, not level alone: while League II is closed, even a Level 15+ character remains in League I and resets for free. Gold is burned only when the reset succeeds; an empty reset does not spend Gold or the free new-league reset.

## Gold And RPG Items

In the prepared RPG item loop, Gold is connected to clothing and consumables:

* players can use Gold to open Common Lootboxes;
* Common-box item cards can create clothing or Stamina Potions;
* clothing, Potions, Gems and Dice can be sold on the marketplace;
* marketplace fees burn part of the sale value;
* players can convert Gold into Silver for progression needs.

Gold purchases also generate points in the [weekly Gem leaderboard](../quest-mining/completion/rpg-items/gems.md).
Gems support clothing evolution and permanent Perfect status; Dice support perk
rerolls. [Gold Freezing](../infrastructure/gold-freezing.md) moves personal Gold
into a 15-week position with a variable weekly reward. QFT withdrawals remain
a future token-dependent feature.

## Conversion To Silver

Gold can be burned for Silver. The base rate is `10 Silver` per `1 Gold`, and the [Trading Conversion](../quest-mining/completion/rpg-attributes/trading.md#conversion) trait can improve the rate.

Author Space weekly and seasonal rewards use a distinct earnings path. Settlement creates a pending Gold reward for the Space, and the owner can later withdraw all pending Gold to their personal in-game Gold balance. These rewards are never converted into the Space treasury's Silver.

Pending rewards do not expire. When Author rewards move to QFT, any older pending Gold remains available as a separate currency balance rather than being migrated or force-credited.

## Marketplace Role

Gold is the live marketplace currency for RPG item trading. Active traders care about:

* [Trading Fee](../quest-mining/completion/rpg-attributes/trading.md#fee), which reduces burned sale fees;
* [Trading Slots](../quest-mining/completion/rpg-attributes/trading.md#slots), which increases active listing capacity;
* item fit, because clothing value depends on build needs.

Gold itself has no inventory weight.

## Temporary Purchase Offer Before QFT

A temporary USDC checkout is prepared for activation with the next production release, together with Gem rewards. Availability is shown on the **Buy Gold** page; it may be paused. Buying Gold supports Questfall’s development and growth. During this offer, packages of 5, 10, 25 and 50 USDC grant 1,000, 2,000, 5,000 and 10,000 Gold — a 50% discount from the standard $1 per 100 Gold.

Checkout accepts **native USDC on Polygon PoS only**. Create an order while signed in, then copy its saved recipient and exact six-decimal amount. The exact amount is slightly lower than the nominal package to identify the order. Transfer fees are paid separately: the full displayed amount must reach the recipient. A transfer can come from an exchange or any wallet; the payment wallet does not need to be linked to the Questfall account. The QR contains only the address, so enter the amount separately.

Gold is credited automatically after blockchain finality. Purchase history retains the original address and amount even when Questfall changes its receiving wallet. Never replace a saved order’s address with a receiver from another order. If an exchange rounds the amount or the payment is delayed, use the order’s private **Payment help** form and include the transaction hash.

Pausing sales leaves existing orders valid. When the offer permanently closes for QFT launch, new payments must stop. Payments included on-chain before closing can still be credited if detected later; later or mismatched transfers require review. Future purchasing through QFT is a separate feature.
