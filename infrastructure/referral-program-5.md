---
icon: user-plus
---

# Referral Program (5%)

arketing is one of the most important factors for the success of any project, especially in the case of Questfall, where the tokenomics is mainly based on user activity. While most of the mechanics described in this documentation are aimed at user retention, the Questfall Referral Program is aimed at attracting new users.

{% hint style="info" %}
This referral program will be launched together with Questfall, so it is not affiliated with [IFE](../roadmap/initial-funding-event.md), which has its own referral program.
{% endhint %}

In order to carry out the referral program, 5% of the weekly QFT issue will be used to reward users from both sides: ambassadors, who attract audience, and new users, who apply referral code when signing up in the system.

The mining power used to distribute the weekly program rewards is calculated based on the amount of [Silver](../assets/Silver-in-game.md) the user burns during the week to level up. For example, if Bob used Alice's referral code to join the platform, both his and Alice's mining power will increase as Bob advances through the levels.

In this way, the interests of both parties are aligned to achieve the main goal of the referral program - on the one hand, ambassadors are motivated to bring new active users to the platforms, and on the other hand, users are incentivized to use the referral codes by receiving additional rewards for their activity.

{% hint style="info" %}
This will encourage users to look for referral codes if, for example, they get the Questfall link from a search engine rather than through ambassador activity.
{% endhint %}

However, there are two issues that should be addressed to prevent abuse and make the program long-lasting.

The first problem is the result of the openness of this referral program, which is open to anyone. There is no need to get the ambassador role from the team, on the contrary - every user in the system will have a referral code from the very beginning and will be able to become an ambassador by spreading the word about Questfall and gaining referrals in this way.

This poses a threat because it makes it possible for users to create fake accounts in order to increase their share of the rewards offered by the program.

This is solved by the mining power calculation approach, which provides protection against fake account manipulation based on the simple mathematical inequality: $$(a+b)^{p}>a^{p}+b^{p}$$, if p > 1.

This means that if a user burns Silver on multiple accounts, his mining power will be less than if he burns the same amount of Silver on multiple accounts.

{% hint style="info" %}
The exponent should not even be big - the power of 1.1 is enough.
{% endhint %}

While mining power grows exponentially (but very slowly) with the amount of Silver burned, users are motivated to burn as much Silver as possible because each additional unit increases mining power non-linearly.



The second problem that arises is that new users will get a smaller share of the program's rewards over time, since higher levels will have far more resources and thus generate most of the total mining power due to the exponential nature of the formula.

To solve this problem and make the program sustainable over time, the mining power will decrease as the user burns more Silver. In other words, as the user progresses through the levels, his reward in the referral program will decrease.

{% hint style="info" %}
The final formula for calculating the mining power is as follows:\
$$MPOW=S_{week}^{1.1}*2*(1+e^{10^{-7}*S_{total}})^{-1}$$
{% endhint %}

On the one hand, this approach requires the user to create a new account to reset the mining ratio, while it is pointless to switch from the high-level main account just for the program rewards. On the other hand, ambassadors will not receive endless rewards if they do not attract new users.
