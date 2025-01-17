---
icon: user-plus
---

# Referral Program (5%)

Marketing is one of the most important factors for the success of any project, especially in the case of Questfall, where the tokenomics is mainly based on user activity.&#x20;

While most of the platform mechanics are aimed at user retention, the Questfall Referral Program is aimed at marketing activities to attract and engage new users.

{% hint style="info" %}
This referral program will be launched together with Questfall, so it is not affiliated with [IFE](../roadmap/initial-funding-event.md), which has its own referral program.
{% endhint %}

In order to carry out the referral program, 5% of the weekly QFT issue will be used to reward users from both sides: ambassadors, who attract audience, and new users, who apply referral code when signing up in the system.

The mining power used to distribute the weekly program rewards is calculated based on the amount of [Silver](../assets/Silver-in-game.md) the user burns during the week to level up.&#x20;

{% hint style="info" %}
For example, if Bob used Alice's referral code to join the platform, both his and Alice's mining power will increase as Bob progresses through the levels over the course of a week.
{% endhint %}

In this way, the interests of both parties are aligned to achieve the main goal of the referral program - ambassadors are motivated to bring new active users to the platforms, while users are incentivized to use the referral codes by receiving additional rewards for their activity.

{% hint style="info" %}
This will encourage users to look for referral codes when they get the Questfall link, for example from a search engine. This will increase the value of the Questfall community, where new users looking for a referral code and ambassadors can meet.
{% endhint %}

However, there are two issues that should be addressed to prevent abuse and make the program sustainable. And the availability of this referral program, which is open to everyone, is the first issue.

There is no need to get the ambassador role from the team. Every user in the system will have a referral code from the beginning and will be able to become an ambassador by spreading the word about Questfall and getting referrals that way.

This is a threat because it allows users to create fake accounts to increase their share of the rewards offered by the program, which is a typical [Sybil attack](../overview/sybil-defence.md).

To solve this problem and protect the referral program from fake account manipulation, mining power is calculated as an exponent of the amount of Silver burned for leveling up. This will discourage fake accounts, because if a user burns Silver on multiple accounts, his mining power will be less than if he burns the same amount on a single account.

{% hint style="info" %}
This is due to the simple mathematical inequality: $$(a+b)^{p}>a^{p}+b^{p}$$, where the exponent does not have to be much greater than one: p = 1.1 will be sufficient.&#x20;

While a referrer's mining power is based on the amount of Silver he burns, an ambassador's mining power is the difference between two parts of inequality:$$AMB=(REF_{1}+REF_{2})^{1.1}-REF_{1}^{1.1}-REF_{2}^{1.1}$$
{% endhint %}

This exponent approach not only protects against Sybil attacks, but also motivates users to burn as much Silver as possible, as each additional unit increases mining power non-linearly.

<table><thead><tr><th width="180">Accounts</th><th width="140" align="right">Burned Silver</th><th width="136" align="right">Mining Power</th><th width="108" align="right">Increase</th></tr></thead><tbody><tr><td>Multiple accounts</td><td align="right">111,110,000</td><td align="right">708,481,415</td><td align="right">637.64%</td></tr><tr><td>    Ambassador</td><td align="right"></td><td align="right">23,082,929</td><td align="right"></td></tr><tr><td>        Referrer 1</td><td align="right">10,000</td><td align="right">25,119</td><td align="right">251.19%</td></tr><tr><td>        Referrer 2</td><td align="right">100,000</td><td align="right">316,228</td><td align="right">316.23%</td></tr><tr><td>        Referrer 3</td><td align="right">1,000,000</td><td align="right">3,981,072</td><td align="right">398.11%</td></tr><tr><td>        Referrer 4</td><td align="right">10,000,000</td><td align="right">50,118,723</td><td align="right">501.19%</td></tr><tr><td>        Referrer 5</td><td align="right">100,000,000</td><td align="right">630,957,344</td><td align="right">630.96%</td></tr><tr><td>Single account</td><td align="right">111,110,000</td><td align="right">708,481,415</td><td align="right">637.64%</td></tr></tbody></table>

The second problem that arises is that new users will get a smaller share of the program's rewards over time, since higher levels will have far more resources and thus generate most of the total mining power due to the exponential nature of the formula.

To solve this problem and make the program sustainable over time, the mining power will decrease as the user burns more Silver. In other words, as the user progresses through the levels, his reward in the referral program will decrease.

{% hint style="info" %}
The final formula for calculating the mining power is as follows:\
$$MPOW=S_{week}^{1.1}*2*(1+e^{10^{-7}*S_{total}})^{-1}$$
{% endhint %}

This approach assumes that the user needs to create a new account to reset the mining power, but it makes no sense to switch from the high-level main account just for the referral program rewards.

As a result, ambassadors will be forced to constantly recruit new users to keep their earnings high, as the mining power of previously recruited users will slowly decrease.
