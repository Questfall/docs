---
icon: user-plus
---

# Referral Program (5%)

Marketing is one of the most important factors for the success of any project, especially in the case of Questfall, where the tokenomics is mainly based on user activity.&#x20;

While most of the Questfall mechanics are aimed at user retention, the Referral Program is aimed at marketing activities to attract and engage new users.

{% hint style="info" %}
This referral program will be launched together with Questfall, so it is not affiliated with [IFE](../roadmap/initial-funding-event.md), which has its own referral program.
{% endhint %}

In order to carry out the program, 5% of the weekly QFT issue will be used to reward users from both sides: ambassadors, who attract audience, and new users, who apply referral code when signing up in the system.

The weekly program rewards are distributed according to the user's individual mining score, which is calculated based on the amount of [Silver](../assets/silver.md) the user burns during the week to level up. For example, if Bob used Alice's referral code to join the platform, both his and Alice's mining score will increase as Bob progresses through the levels over the course of a week.

{% hint style="info" %}
The mining score is calculated as the product of the base, which depends on the amount of Silver burned during the week, and the personal mining power:\
$$MSCORE=BASE*MPOWER$$
{% endhint %}

In this way, the interests of both parties are aligned to achieve the main goal of the referral program - ambassadors are motivated to bring new active users to the platforms, while users are incentivized to use the referral codes by receiving additional rewards for their activity.

{% hint style="info" %}
This will encourage users to look for referral codes when they get the Questfall link, for example from a search engine, and increase the value of the Questfall community, where new users looking for a referral code and ambassadors can meet.
{% endhint %}

However, there are two issues that should be addressed to prevent abuse and make the program sustainable. And the availability of this referral program, which is open to everyone, is the first issue.

There is no need to get the ambassador role from the team. Every user in the system will have a referral code from the beginning and will be able to become an ambassador by spreading the word about Questfall and getting referrals that way.

This is a threat because it allows users to create fake accounts to increase their share of the rewards offered by the program, which is a classic [Sybil attack](../overview/sybil-defense.md).

To solve this issue and protect the referral program from fake account manipulation, the base for calculating the mining score will be an exponent of the amount of Silver burned for leveling up.

{% hint style="info" %}
The simple mathematical inequality of the exponent protects against Sybil attacks:\
$$(a+b)^{p}>a^{p}+b^{p}$$, if p>1.

The exponent does not have to be much greater than one (p = 1.1 will be sufficient):\
$$BASE=S_{week}^{1.1}$$
{% endhint %}

This will discourage fake accounts, because if a user burns Silver on multiple accounts, his mining score will be less than if he burns the same amount on a single account.

{% hint style="info" %}
While a referrer's mining score is based on the amount of Silver he burns, an ambassador's mining score is based on the difference between two parts of the inequality:\
$$MSCORE_{ambassador}=(\sum_{n=0}^{refs}MSCORE_{referrer_n})^{1.1}-\sum_{n=0}^{refs}MSCORE_{referrer_n}^{1.1}$$
{% endhint %}

This exponent approach not only protects against Sybil attacks, but also motivates users to burn as much Silver as possible, as each additional unit increases the mining score in a non-linear fashion, assuming mining power remains the same (which is equal to 1 in the table below).

<table><thead><tr><th width="180">Accounts</th><th width="140" align="right">Burned Silver</th><th width="132" align="right">Mining Score</th><th width="104" align="right">Increase</th></tr></thead><tbody><tr><td>Multiple accounts</td><td align="right">111,110,000</td><td align="right">708,481,415</td><td align="right">637.64%</td></tr><tr><td>    Ambassador</td><td align="right"></td><td align="right">23,082,929</td><td align="right"></td></tr><tr><td>        Referrer 1</td><td align="right">10,000</td><td align="right">25,119</td><td align="right">251.19%</td></tr><tr><td>        Referrer 2</td><td align="right">100,000</td><td align="right">316,228</td><td align="right">316.23%</td></tr><tr><td>        Referrer 3</td><td align="right">1,000,000</td><td align="right">3,981,072</td><td align="right">398.11%</td></tr><tr><td>        Referrer 4</td><td align="right">10,000,000</td><td align="right">50,118,723</td><td align="right">501.19%</td></tr><tr><td>        Referrer 5</td><td align="right">100,000,000</td><td align="right">630,957,344</td><td align="right">630.96%</td></tr><tr><td>Single account</td><td align="right">111,110,000</td><td align="right">708,481,415</td><td align="right">637.64%</td></tr></tbody></table>

The second problem that arises is that with a straightforward approach, new users will get a smaller and smaller share of the program's rewards over time, since higher levels will have far more resources and thus generate most of the total mining score due to the exponential nature of the base formula.

To solve this problem and make the program sustainable over time, the mining power will decrease as the user burns more Silver. In other words, as the user progresses through the levels, his reward in the referral program will decrease.

{% hint style="info" %}
Mining power decreases based on the total amount of Silver burned from the start of an account using the formula:\
$$MPOWER=max(1-10^{-8}*S_{total},0)$$
{% endhint %}

This approach assumes that the user needs to create a new account to reset the mining power, but it makes no sense to switch from the high-level main account just for the referral program rewards.

As a result, ambassadors will be forced to constantly recruit new users to keep their earnings high, as the mining score of previously recruited users will slowly decrease.

{% hint style="info" %}
The final formula for calculating the mining score is as follows:\
$$MSCORE=S_{week}^{1.1}*max(1-10^{-8}*S_{total},0)$$
{% endhint %}
