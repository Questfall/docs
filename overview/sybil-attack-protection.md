---
icon: shield-check
---

# Sybil attack protection

Although the concept of mining is more advanced than any approach in the real economy, in practice it is quite difficult to implement it outside the Proof of Work consensus in such a way that playing by the rules is the most profitable strategy.

While a hash to connect the newly created block to the existing chain in Bitcoin is just a protection measure and does not bring any value to the world, there is no problem to verify it mathematically.&#x20;

But if we take something that we humans find meaningful as a value for mining (pictures, stories, quests, puzzles, etc.), it will be almost impossible for a computer to estimate its quality. Especially if we consider the amount of effort that went into creating the value as one of the main parameters.

{% hint style="info" %}
Perhaps in the future AI will evolve to the point where it can become an infallible judge, but that will be another story, far from the decentralised systems.
{% endhint %}

Malicious actors can generate thousands of very low quality fakes per second, and if the system that distributes the rewards for mining can't distinguish good value from bad, it will reward every item the same, making faking a profitable strategy. Eventually, there will be so many fakes that the reward for each value generated will be too small to justify the effort required by the rules.

One of the most common solutions tried in recent years to prevent the generation of fakes is to prove that a user is human. This can be thought of as a one-off CAPTCHA. From various KYC systems with confirmation in the form of NFT, to all sorts of pedometers and tappers on mobile devices.

However, none of these approaches have been successful. A phone or NFT allows a user to automate the necessary actions or scale the mining power across many accounts, as each is a one-time cost. Furthermore, KYC accounts are sold in bundles for pennies, while building a farm of thousands of phones is not difficult or expensive these days.

As a result, no matter how good the mining is, there is currently no solution other than Proof of Work to protect it from malicious actors. So today's teams prefer to take the easy way out and mint all the tokens for themselves and then sell them to the crowd.

{% hint style="info" %}
Selling the entire supply of tokens is anything but innovative. At the dawn of the stock market more than 150 years ago, anyone could issue their own securities and sell them to the public through newspaper advertisements.
{% endhint %}

However, crypto projects should be about innovation and driving progress, so our Team has implemented the solution, at least for the case of quest mining. And the first thing we need to do is to move the quality assessment from the computer to the real users.

In Questfall, users can participate in community moderation by voting on each other's quest completions to distinguish between fake quest completions and real ones. This shifts the problem of protecting the system from the quality of the completion to the binary result of the vote (good or bad).

In fact, we are talking about a community consensus on each of the completions, and like any other consensus, if it costs nothing to vote, it is vulnerable to [Sybil attacks](https://en.wikipedia.org/wiki/Sybil\_attack). Specifically, a Sybil attack is possible if each vote has the same weight of 1 and there is no limit to the number of accounts that can be registered. So if a user has 5 accounts, the total weight of all his votes is 5. In this way, a malicious actor can gain any vote weight by creating as many accounts as needed.

To protect the system from such attacks, Questfall uses the concept of levels, through which users can advance if they vote in line with the majority of other voters. More specifically, if they vote the same as the majority, users are rewarded - they gain XP which allows them to level up, otherwise they are punished - the amount of XP needed to get to the next level increases.

User levels are used to weight the consensus majority, which means that votes are not equal - the higher the level, the more weight a user vote has. In other words, the more correctly a user votes, the more power he gains. This makes it impossible for a large number of new accounts to be registered and used to manipulate the voting results, as high level users will protect the voting from abuse and as a result such new accounts will be punished.

{% hint style="info" %}
For other measures to protect consensus, see the [Community Moderation](../quest-mining/community-moderation.md) article.
{% endhint %}

In this way, progressing through the levels requires two key resources: intelligence and access to third-party platforms where the majority of quest completions are published. And while these resources are considered free when checking completions by hand, there is an ongoing cost when moderating by code.

Firstly, such a moderation bot needs to access the content of a completion on third-party platforms (like X, Youtube, Facebook, Discord, etc). But these platforms ban bots to prevent DDoS attacks and content parsing. For example, there is only one official way to access tweets with the code - [a paid API](https://developer.x.com/en/docs/x-api/getting-started/about-x-api).

Then this bot will have to score the completion somehow - if it scores wrong, it will be penalised, so it will need the help of a pretty smart AI to vote correctly (which may still not work).

{% hint style="info" %}
We would like to emphasise that this is not some artificial restriction we are putting in place for defensive reasons. Moderators add real value to the system because centralised moderation, if implemented as part of Questfall's functionality, will be very expensive not only to implement (if at all possible) but also to run. And this enormous cost plays a defensive role against bots.
{% endhint %}

Since moderation consumes limited resources (either effort or money), XP can also be considered a limited resource, but only as a means of protecting consensus, with no value in itself. In other words, users will not moderate just for XP if it does not give them an advantage in mining.

However, increasing mining power with level is a bad idea because if a fixed reward is given to all miners based on their mining power, there is an opportunity for abuse. As there are no restrictions on who can become a miner, a malicious actor could register many new accounts and clone completions on all of them, increasing his total mining power to any point using only first level accounts.

To solve this problem, we need to consider that users will form a pyramid - the number of users will decrease with each level. This happens because the higher the level, the more resources a user should have spent to reach it.

To take advantage of this, Questfall splits the global mining reward into fixed parts, one for each user level. This means that the reward for a given level does not depend on the activity of other levels. As a result, competition decreases as a user progresses through the levels.&#x20;

{% hint style="info" %}
The rewards for each level only depend on the number of levels with active miners. So any user can level up to the point where he can open a new level as the top user and mine the full reward without any competition. Read more in the [User Rewards](../quest-mining/user-rewards.md) article.
{% endhint %}

So if a good miner is not getting paid enough for his efforts because of bots (or any other reason), all he has to do is level up by adding value to the system in the form of moderation or QFT burning.

In addition, the percentage of bots will decrease with each level, as XP cannot be earned with code without ongoing costs, and it is therefore more profitable to invest money in a particular account to level it and earn with less competition than to compete with own bots.
