---
icon: snowflake
---

# QFT Freezing (5%)

Ensuring that tokens are not sold by the user for a certain period of time benefits the system by reducing the pressure to sell. To encourage this behavior, 5% of newly created QFTs will be used each week to reward those users who freeze their tokens in the system.

{% hint style="info" %}
Freezing will begin at the launch of Questfall and will continue indefinitely, reducing the total amount of QFT in circulation.
{% endhint %}

Users can only freeze their tokens for a default period of 15 weeks. After the tokens are frozen, this freeze period decreases by one every week until it is nullified, at which point users can withdraw their tokens. However, users can re-freeze their tokens back to the default 15-week period at any time while the tokens are still frozen.

The weekly reward is distributed according to each user's individual freeze power, which is calculated as the product of the number of tokens frozen and the number of weeks remaining in the freeze period.

For example, if the user has frozen 100 QFTs, his freeze power will be 1500 at the end of the first week and 1400 at the end of the second week. In other words, the multiplier used to calculate freeze power decreases by one each week: 15, 14, 13, .... 1, 0.&#x20;

This can be thought of as the reward base slowly melting away, meaning that in order to receive the maximum reward in perpetuity, users must re-freeze their tokens on a weekly basis.

{% hint style="info" %}
We use the word **freezing** because **staking** implies the possibility of losing the stake, while **locking** implies the fixed reward for a fixed period of time.
{% endhint %}

While 5% may not seem like much, the results over the course of a year look different. For example, let's assume that 10% APY is a competitive return on a deposit. Over the course of a year, 52 \* 5% = 260% of the weekly issuance will be used to pay out percentages on the frozen QFTs.

With these inputs, the amount of QFTs that it is profitable to freeze (and earn 10% annually) is 260% \* 10 = 2600% of the weekly issue. In other words, it makes sense for users to freeze half of the annual QFT issuance.

{% hint style="info" %}
Of course, these calculations are very rough, but they still show the impact of paying out 5% in one week as a return on capital.
{% endhint %}

Unlike Bitcoin, the amount of QFT, which is a deflationary token, in circulation relative to the total annual issuance will not be constantly increasing. As a result, a noticeable portion of QFTs will be taken out of circulation by freezing during its entire lifetime, not just at the beginning.
