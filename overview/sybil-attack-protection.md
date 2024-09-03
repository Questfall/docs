---
icon: shield-check
---

# Sybil attack protection

Despite its simplicity and versatility, the concept of mining requires a condition that is rather difficult to fulfil: the system shouldn't reward users for the fake value they claim to have created.&#x20;

In Bitcoin, obtaining the hash needed to link the newly created block to the last block in the chain requires many calculations that cannot be emulated (otherwise such a hack could be used to create much more efficient computers).&#x20;

However, if mining power represents, for example, the number of quests completed, such completions can be easily manipulated because the system is not smart enough to distinguish the quality of such completions. It blindly uses a set of rules and the numbers given as input to distribute the reward.

The problem is that if it is possible to sell a fake into the system, cheaters will flood it with fakes, while users who add real value will receive only a tiny fraction of the system's reward. Eventually this will break the system completely.

One of the common solutions to this problem is to impose some limits on the value that can be added to the system. And the most popular approach, which has been tried many times in recent years, is to build mining around the limits of human nature itself. From various KYC systems with confirmation in the form of NFT, to all sorts of pedometers and tappers on mobile devices.

However, none of these approaches have been successful because, in the long run, they are all open to abuse. KYC accounts are sold in bundles for pennies, while farms of thousands of phones fake the required actions on a massive scale. So, today's teams prefer to take the easy way out and mint all the tokens for themselves at once and then sell them to the crowd.

{% hint style="info" %}
This is actually nothing new. At the dawn of the stock market more than 150 years ago, anyone could issue their own securities and sell them to the public through newspaper advertisements. And until the government started to regulate the securities market, it had much bigger ups, downs and scams than the modern crypto market.
{% endhint %}

The main problem with such approaches is that the defence is based on a one-off cost - there is no need to constantly spend resources to generate value for the system. Users simply need to buy a phone or obtain an NFT for each account, and then they are free to automate the mining process with bots.

Bitcoin is built on much more robust protection when users have to spend a limited resource (electricity) and are rewarded for creating value according to the rules. The core principle is that users who follow the rules are rewarded, and those who don't are punished by spending resources for nothing.

Exactly this approach is the core principle of Questfall. But it is taken much further by using two crucial concepts: Egregore Voting and User Levels.

Egregore voting is based on a very simple idea - users are rewarded for voting in line with the majority, or punished for being in the minority. This forces users to vote not for their personal opinion, but for the opinion they think the majority will have. In other words, they give their vote to Egregore.

{% hint style="info" %}
The term 'egregore' refers to a collective consciousness or thoughtform that is created when a group of people share common beliefs, emotions or intentions. Simply put, it is the 'normality' that is shared by many people and by which society lives, as we all know what is considered good or bad by current social norms.
{% endhint %}

The thing is, Egregor's view on any given issue is not set in stone - judgments of good and evil shift over time as social norms change. So in order to vote correctly (as the majority) and thus win, users need to be involved in the project community. This is similar to fashion - if you want to be stylish, you need to keep up with the latest trends.

Such a vote can't be automated, even with AI, because it's built on the knowledge that comes from being part of a society. Even AGI will never be a real part of human society, which is formed thanks to human traits that helped our ancestors survive for millions of years.

And even if in the future there is a smart enough bot that can predict the opinion of the community, such a bot will do the necessary work, as Egregore Voting plays the role of the centralised moderation department that exists in every social media platform.

Correct voting allows users to level up, as the majority will receive XP, which will allow them to level up. And for the minority, the amount of XP needed to reach the next level will increase, or in other words, those users will get further away from the next level. In this way, the more a user votes in line with the majority, the faster he will progress through the levels.

The crucial part of such votes is that they should be given to users randomly, so that they can't pick specific problems to vote for. Otherwise, malicious users will be able to vote correctly on the main account by hand, and clone their actions to many other accounts by code. On the other hand, if each account is given a different problem to vote for, it will not be possible to automate leveling through vote cloning.

And, of course, there should be enough voting going on at any given time that the likelihood of two different accounts voting on the same problem is close to zero. However, this will not be an issue as the most common type of voting will be to check quest completion, which will be many for every quest in the system.

{% hint style="info" %}
There will be other issues to vote on. For example, with Egregore Voting, the community will decide whether a quest is appropriate when it is reported. See the [Egregore Voting](../quest-mining/egregore-voting.md) article for more details.
{% endhint %}

This approach assumes no restrictions, only a different rate of progression through the levels depending on the voting results. This means that quest mining (not voting!) can be abused by cloning completions on different accounts via code, as quests can be freely chosen by users.

But the leveling system protects good users from being influenced by bad actors, because users form a pyramid with their levels. The higher the level, the fewer users will have it. So it is possible that there will be a lot of bots on the first level, but the higher the level of the user, the fewer competitors there will be on the same level of the pyramid, including bots.

In order to eliminate the influence of lower level bots on higher level users, the reward for completing quests should be divided into fixed amounts for each level of the pyramid. In other words, the reward for users of the same level should be independent of the number of such users.&#x20;

So it does not matter how many bots there are on the first level, as the reward for the tenth level will not be affected by their number. In this way, tenth level users will only be competing for a fixed reward that does not depend on what happens on other levels.

{% hint style="info" %}
Read more details in the [User rewards](../quest-mining/user-rewards.md) article.
{% endhint %}
