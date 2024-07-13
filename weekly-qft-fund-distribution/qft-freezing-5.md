---
description: >-
  To reduce the number of QFTs in circulation, the system rewards users who
  freeze their tokens.
---

# 🧊 QFT freezing (5%)

Ensuring that tokens are not sold by the user for a certain period of time benefits the system. To encourage such behavior, 5% of the [weekly QFT fund](../tokenomics/questfall-tokens-qft.md) will be used to reward those users who freeze (lock) their tokens in the system for 15 weeks.

{% hint style="info" %}
We use the word _**freezing**_ because _**staking**_ implies the possibility of losing the money staked, and _**locking**_ implies the fixed reward for a fixed lock period. Freezing guarantees that the amount cannot be reduced and is much more flexible than a simple time lock.
{% endhint %}

Token freezing rewards will begin before the launch of Questfall and will continue indefinitely. This means that the number of QFTs in circulation will be reduced not only by burning tokens, but also by freezing them.



The current status: <mark style="background-color:orange;">coming before Questfall v1.0</mark>&#x20;

***

### How the freezing mechanics work

At the initial freeze, the QFT holder puts the tokens in the system for 15 weeks, and obviously the freeze period decreases by one every week. At the same time, a fixed number of QFTs, used as a reward for freezing, are distributed according to the individual freezing power of each user. This freezing power is calculated as the product of the frozen tokens and the number of weeks remaining in the freeze period.

For example, if the user has frozen 100 QFTs, his freezing power will be 1500 at the end of the first week and 1400 at the end of the second week. In other words, the multiplier used to calculate freezing power decreases by one each week: 15, 14, 13, .... 1, 0

{% hint style="info" %}
This can be seen as the frozen tokens slowly melt, reducing the reward.
{% endhint %}

To receive the maximum freezing power, a user can re-freeze tokens at any time for a maximum of 15 weeks. This means that in order to receive the maximum freezing reward in perpetuity, the user must re-freeze his tokens on a weekly basis.
