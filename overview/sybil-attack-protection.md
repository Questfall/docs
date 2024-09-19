---
icon: shield-check
---

# Sybil attack protection

Although the concept of mining is more advanced than any approach in the real economy, in practice it is quite difficult to implement it outside the Proof of Work consensus in such a way that playing by the rules is the most profitable strategy.

While a hash to link the newly created block to the existing chain in Bitcoin is only a protection measure and has no value to the world, it is easy to verify mathematically and impossible to forge.

But if we take something that we humans find meaningful as a value for mining (pictures, stories, quests, puzzles, etc.), it will be almost impossible for a computer to estimate its quality, which represents the amount of effort and skill that went into creating it.

{% hint style="info" %}
Perhaps in the future AI will evolve to the point where it can become an infallible judge, but that will be another story, far from the decentralised systems.
{% endhint %}

This makes it possible to generate tons of very low quality fakes and get rewarded for them, because the algorithm can't distinguish between good and bad quality and rewards every item the same. This makes counterfeiting a profitable strategy, and eventually there will be so many fakes that the reward for each item will be too small to justify the effort required to create a high quality item.

One of the most common solutions tried in recent years to prevent the generation of fakes is to prove that a user is human. This can be thought of as a one-off CAPTCHA. From various KYC systems with confirmation in the form of NFT, to all sorts of pedometers and tappers on mobile devices.

However, none of these approaches have been successful. A phone or NFT allows a user to automate the necessary actions or scale the mining power across many accounts, as each is a one-time cost. Furthermore, KYC accounts are sold in bundles for pennies, while building a farm of thousands of phones is not difficult or expensive these days.

As a result, no matter how good the mining is, there is currently no solution other than Proof of Work to protect it from malicious actors. So today's teams prefer to take the easy way out and mint all the tokens for themselves and then sell them to the crowd.

{% hint style="info" %}
Selling the entire supply of tokens is anything but innovative. At the dawn of the stock market more than 150 years ago, anyone could issue their own securities and sell them to the public through newspaper advertisements.
{% endhint %}

However, crypto projects should be about innovation and driving progress, so our Team has implemented the solution, at least for the case of quest mining. And the first thing we need to do is to move the quality assessment from the computer to the real users.

In Questfall, users can participate in community moderation by voting on each other's quest completions to distinguish between fake quest completions and real ones. This shifts the problem of protecting the system from the quality of the completion to the binary result of the vote.

In fact, we are talking about a community consensus on each of the completions, and like any other consensus, if it costs nothing to vote, it is vulnerable to [Sybil attacks](https://en.wikipedia.org/wiki/Sybil\_attack). Specifically, a Sybil attack is possible if each vote has the same weight of 1 and there is no limit to the number of accounts that can be registered. So if a user has 5 accounts, the total weight of all his votes is 5. In this way, a malicious actor can gain any vote weight by creating as many accounts as needed.

To protect the system from such attacks, Questfall uses the concept of [levels](../user-mining/levels.md), through which users can advance if they vote in line with the majority of other voters. More specifically, if they vote the same as the majority, users are rewarded - they gain XP which allows them to level up, otherwise they are punished - the amount of XP needed to get to the next level increases.

User levels are in turn used to weight the consensus majority, which means that votes are not equal - the higher the level, the more weight a user vote has. In other words, the more correctly a user votes, the more power he gains. This makes it impossible for a large number of new accounts to be registered and used to manipulate the voting results, as high level users will protect the voting from abuse and as a result such new accounts will be punished.

{% hint style="info" %}
For other measures to protect consensus, see the [Levels](../user-mining/levels.md) article.
{% endhint %}

In this way, progressing through the levels requires two key resources: intelligence and access to third-party platforms where the majority of quest completions are published. And while these resources are considered free when checking completions by hand, there is an ongoing cost when moderating by code.

Firstly, such a moderation bot needs to access the content of a completion on third-party platforms (like X, Youtube, Facebook, Discord, etc). But these platforms ban bots to prevent DDoS attacks and content parsing. For example, there is only one official way to access tweets with the code - [a paid API](https://developer.x.com/en/docs/x-api/getting-started/about-x-api).

Then this bot will have to score the completion somehow - if it scores wrong, it will be penalised, so it will need the help of a pretty smart AI to vote correctly (which may still not work).

{% hint style="info" %}
We would like to emphasise that moderators add real value to the system because centralised moderation, if implemented as part of Questfall, will be very expensive not only to implement (if at all possible) but also to run. And this high cost plays a defensive role against abuse of the system.
{% endhint %}

Since moderation consumes limited resources (either effort or money), XP can also be considered a limited resource, but only as a means of protecting consensus, with no value in itself. In other words, users will not moderate just for XP if it does not give them an advantage in mining.

However, increasing mining power with level is a bad idea because if a fixed reward is given to all miners based on their mining power, there is an opportunity for abuse. As there are no restrictions on who can become a miner, a malicious actor could register many new accounts and clone completions on all of them, increasing his overall mining power by any amount using only first level accounts.

To solve this problem, we need to consider that users will form a pyramid - the number of users will decrease with each level. This happens because the higher the level, the more resources a user should have spent to reach it.

To take advantage of this, the global mining reward will be divided into fixed portions that will be distributed to different [leagues ](../user-mining/leagues.md)that group users of different level ranges. This means that the reward for a particular league does not depend on the activity in other leagues. As a result, competition decreases as a user progresses through levels and therefore leagues.

{% hint style="info" %}
The rewards for each league only depend on the number of leagues with active miners. So any user can level up to the point where he can open a new league as the top user and mine the full reward without any competition.
{% endhint %}

So if a good miner is not getting paid enough for his efforts because of bots (or any other reason), all he has to do is level up and enter the higher league by adding value to the system in the form of moderation or QFT burning.

This approach also reduces the motivation for bad actors to level up many accounts at once. Since XP cannot be earned by using bots without ongoing costs, it is more profitable to invest money in a particular account to level it up, progress through leagues, and mine with less competition than to compete with own bots.
