---
icon: shield-check
---

# Sybil Defence

The concept of mining assumes that the system fairly rewards users for the value they create. While there is no problem for a computer to verify whether or not the hash in the Proof of Work consensus is valid, and each miner will need the same amount of computation to generate it, the situation becomes much more complex when we try to reward users fairly for the value they create for other people rather than computers.

{% hint style="info" %}
The key word here is "fairly". In a fair system, the most profitable strategy is to follow the rules. The challenge, however, is that the system can sometimes be abused, and users can gain an advantage without technically breaking the rules. This abuse often takes the form of Sybil attacks, where users create multiple accounts or use bots to gain an advantage and thus receive a greater reward for less value they create, making the system unfair.
{% endhint %}

The problem is that anything meaningful to humans, such as images, stories, quests, or puzzles, cannot be measured in a purely mathematical way, because their value is inherently subjective, shaped by personal preferences, cultural trends, and contextual factors.

To illustrate this, imagine two people drawing a dog. One might produce a simple sketch that is barely distinguishable from a horse, while the other, a skilled artist, might produce a detailed, almost photographic painting. Yet, the perceived value of these two creations could vary widely. Some may admire the amateur drawing for its charm and creativity, while dismissing the photorealistic work as lacking originality.

Even if there were a universally agreed-upon way to measure talent, skill, or effort, it would still not resolve the issue. Cultural trends and preferences evolve over time, altering how we judge art, literature, fashion, and other creative outputs. Context is also important - what is valued in one environment may be rejected in another. For example, a drawing of a demon dog might be appreciated in a horror-themed context, but considered completely inappropriate in a kindergarten setting.

Therefore, despite the innovative potential of human-centric value creation in mining, a computer system cannot be used for reward distribution, because to be fair, rewards should be based on a quality spectrum that is only a matter of human perception. And if we take quality out of the equation, mining becomes worthless, since it will be much more efficient for users to put as little effort as possible into producing low quality results that are of no value to others.

This problem has caused most crypto projects to avoid mining completely, preferring instead to pre-mint all tokens and sell them directly to users. And while pre-minting tokens is a workable solution to some extent, it is far from revolutionary. Historically, at the dawn of the stock market over 150 years ago, anyone could issue securities and advertise them for sale in newspapers.&#x20;

The cryptocurrency industry has returned to this earlier model precisely because of the problem of fair reward distribution under human-centric mining. The problem is so hard that in 15 years of explosive cryptocurrency development, no widely accepted solution has emerged.

Until now.

Questfall faced the same problem, since Quest Mining assumes that users mine QFT by completing various tasks, many of which are creative. However, as mentioned above, the computer system would not be able to distribute rewards fairly, since completions can be of different quality, some of which are so low that they should not be rewarded.

{% hint style="info" %}
Besides the quality estimation problem, another challenge for implementing such functionality directly in Questfall is the third-party platforms like X, YouTube, Facebook or Discord where many quests are completed. These platforms fight against automated access to prevent DDoS attacks or content scraping.
{% endhint %}

But if the computer system cannot solve a problem that is simple for humans, it must rely on the users for help. This means that if mining in traditional PoW consists of a single rewarded activity, in Questfall there are two: completing quests and validating the completions of others through community consensus voting.&#x20;

The key consistency factor is how rewards are distributed based on the results of the two mining activities. While completing quests directly mines QFT, validating completions enables progression through levels, which plays a critical role in the miner's earnings because the global reward pool is divided equally among user level groups, or leagues. Simply put, users in the same league only compete with each other, and their rewards are not affected by the activity of users outside of their league.

This reward segmentation by user levels ensures fair mining. On the one hand, as users progress through the levels, they can earn higher rewards for the same effort, as competition within each league decreases. On the other hand, user levels serve as a robust defense against Sybil attacks, since the correct voting in the community consensus cannot be automated or manipulated.

{% hint style="info" %}
While PoW implements consensus on top of Sybil defense, Questfall does the opposite: Sybil defense is built upon community consensus.
{% endhint %}

The main mechanic behind community consensus on quest completion is that the majority wins, while the minority loses. More specifically, the winning majority is rewarded with a level advancement, while those in the minority are set back in their progress.

In order to prevent manipulation of the vote, Questfall introduces additional security measures. Moderators are randomly assigned and their voting power is weighted by their user level. This means that an attacker would have to control a majority of high-level users in the entire system in order to influence the voting results for a particular quest completion.

{% hint style="info" %}
This is analogous to the 51% attack in Bitcoin.
{% endhint %}

However, this is not enough. Since the majority of users in the system are expected to be good, most completions will be of high enough quality to be validated, allowing an attacker to gain levels simply by blindly approving every completion assigned. Since the rewards for approving many valid completions would outweigh the few occasional penalties for bad ones, blind approval could become a winning strategy.

To solve this problem, Questfall includes a system that generates fake completions for the moderators. These fakes are indistinguishable from real completions, but the system knows internally which type of vote is correct. And moderators are rewarded or punished based on their accuracy in judging these fakes, not on their alignment with the majority.

The system dynamically adjusts the number of fake completions to ensure that, on average, a moderator has an equal chance of being rewarded or punished when voting blindly. Since the penalties are larger than the rewards, this strategy becomes inefficient with many iterations.

{% hint style="info" %}
For more details on the community consensus mechanics, see the [Moderating](broken-reference) section. We have barely scratched the surface here.
{% endhint %}

By introducing user levels with reward segmentation, as well as separating mining and Sybil protection into two distinct activities - one for earning cryptocurrency and another for leveling up - Questfall achieves something unprecedented: fair mining that creates real, tangible value for people.

This overcomes the long-standing challenge of fairly rewarding creative work in decentralized systems by leveraging the unique strengths of human collaboration. This innovation not only reboots the mining paradigm, but also paves the way for more intensive use of publicly owned money for the benefit of society.
