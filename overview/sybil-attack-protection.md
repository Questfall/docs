---
icon: shield-check
---

# Sybil attack protection

In Bitcoin, obtaining the hash needed to link the newly created block to the chain requires many calculations that cannot be faked (otherwise such a hack could be used to create much more efficient computers). This is what makes Proof of Work a fair consensus - the system does not reward users for fakes.

However, without the use of Proof of Work, such a logic of system operation is difficult (if not impossible) to achieve. For example, if mining power represents the number of quests completed, such completions can be easily manipulated because the system is not smart enough to distinguish the quality of such completions.

{% hint style="info" %}
Perhaps in the future AI will evolve to the point where it can correctly judge all user actions and content, but for now the algorithm behind the system blindly uses a set of rules and the numbers given as input to distribute the reward among the miners.
{% endhint %}

The problem is that if it's possible to sell a fake into the system, the real value, which is relatively expensive, can't compete with the cheap fakes. In the end, only fakes will be added to the system, as the reward will not compensate for the generation of real value.

One of the common solutions that has been tried many times in recent years to prevent such counterfeiting is to build mining around the limits of human nature itself. From various KYC systems with confirmation in the form of NFT, to all sorts of pedometers and tappers on mobile devices.

However, none of these approaches have been successful because, in the long run, they are all open to abuse. KYC accounts are sold in bundles for pennies, while farms of thousands of phones fake the required actions on a massive scale. So, today's teams prefer to take the easy way out and mint all the tokens for themselves at once and then sell them to the crowd.

{% hint style="info" %}
This is actually nothing new. At the dawn of the stock market more than 150 years ago, anyone could issue their own securities and sell them to the public through newspaper advertisements. And until the government started to regulate the securities market, it had much bigger ups, downs and scams than the modern crypto market.
{% endhint %}

The core problem is that developers are trying to solve the same problem as Proof of Work (not rewarding fakes), but unlike the constant expenditure of a limited resource (electricity) to create value, such proofs of humanity are based on a one-off cost.

In addition, there is no solid mechanism to distinguish fakes, so users can automate the necessary actions if they already have a phone or NFT, or massively scale mining power with many accounts, since they do not need constant spending to generate value.

In Questfall we are solving a slightly different problem: the system shouldn't reward bad users for the fake value at the expense of good users. Although the goal seems almost the same, it allows to implement a solid protection against system abuse using two key concepts: **Community Moderation** and **User Levels**.

Community Moderation is used to solve the problem of distinguishing between fake and real quest completions. It is essentially a user vote, the results of which are used as input into the system that rewards miners for completing quests.

As well as helping the system to distribute rewards fairly, community moderation has another very important aspect - although validating quest completion can easily be done by hand for free, automating it with code requires ongoing costs.

For example, many types of completion (for example, if the quest is to draw something) can only be validated using AI, and that's quite expensive. But even if Questfall had its own LLM running on free servers, it wouldn't solve the problem, because such an AI moderator would have to access the content on other platforms. And those platforms ban bots to prevent DDoS attacks. For example, there is only one official way to access tweets with the code - [a paid API](https://developer.x.com/en/docs/x-api/getting-started/about-x-api).

{% hint style="info" %}
While users can't validate completions with code for free (otherwise the system could do it itself), they can try to manipulate the moderation process to pass off the fake completion as real. This is why the voting rules are not so simple - read more about this in the [Community Moderation](../quest-mining/community-moderation.md) article.
{% endhint %}

Community Moderation can therefore be used not only to distinguish between real and fake completions, but also as a solid defence against bots. To take advantage of this, users who participate in community moderation and properly validate completions earn XP, which is used to increase their level, making mining more profitable for them.

This approach assumes no restrictions on the mining process, only a different level of competition depending on the level of user. This means that multiple accounts and bots can be used to scale mining power during quest mining.

But the leveling system protects good users from being influenced by bad ones, because users form a pyramid with their levels. The higher the level, the fewer users will have it. So it is possible that there will be a lot of bots on the first level, but the higher the level of the user, the fewer competitors there will be on the same level of the pyramid, including bots.

Crucially, the rewards for different levels are fixed and do not depend on the number of users at other levels. So tenth level users will only be competing with each other for a fixed reward that does not depend on the number or mining power of first level users (or bots).

{% hint style="info" %}
This approach can be compared to the independent sections of a submarine. Read the article about [User rewards](../quest-mining/user-rewards.md) for more details.
{% endhint %}
