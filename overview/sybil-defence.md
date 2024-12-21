---
icon: shield-check
---

# Sybil Defence

The Proof of Work (PoW) consensus is fundamentally built to defend against Sybil attacks - in fact, this defense is its core function. PoW achieves this by relying on a binary system: the result of mining can only have two states - either the hash generated to add a new block to the blockchain is valid, or it is not. Since hashes are based on mathematics, they cannot be falsified and are easily verified by computers.

However, the situation becomes much more complex when we try to replace this binary value system with something meaningful to humans, such as images, stories, quests, or puzzles. Unlike mathematically precise calculations, human-centered products cannot be evaluated in a purely binary fashion because their value is inherently subjective, shaped by personal preferences, cultural trends, and contextual factors.

To illustrate, imagine two people drawing a dog. One might produce a simple sketch that is barely distinguishable from a horse, while the other, a skilled artist, might produce a detailed, almost photographic painting. Yet, the perceived value of these two creations could vary widely. Some may admire the amateur drawing for its charm and creativity, while dismissing the photorealistic work as lacking originality.

Even if there were a universally agreed-upon way to measure talent, skill, or effort, it would still not resolve the issue. Cultural trends and preferences evolve over time, altering how we judge art, literature, fashion, and other creative outputs. Context is also important - what is valued in one environment may be rejected in another. For example, a drawing of a demon dog might be appreciated in a horror-themed context, but considered completely inappropriate in a kindergarten setting.

As a result, despite the innovative potential of bringing human-centric value creation to mining, there is currently no effective solution for fairly distributing rewards when mining results exist along a spectrum of quality, rather than simply being valid or not. This issue has caused many projects to avoid mining entirely, preferring instead to pre-mint all tokens and sell them directly to users.

While pre-minting tokens may seem like an efficient solution, it is far from revolutionary. Historically, at the dawn of the stock market over 150 years ago, anyone could issue securities and advertise them for sale in newspapers. The cryptocurrency industry has, in a sense, returned to this earlier model - not for lack of creativity, but because solving the problem of fair reward distribution in human-centric systems is extraordinarily difficult. In 15 years of explosive cryptocurrency development, no widely accepted solution has emerged.

Until now.

In traditional PoW, mining and Sybil protection are combined into a single activity. Questfall, however, introduces a groundbreaking approach by separating these two functions.

The primary mining activity in Questfall is the completion of quests. These quests, particularly those involving creative tasks, can be completed with varying levels of effort and quality. To ensure fairness, the decision to reward the completion should be based on whether it meets a minimum quality standard.

However, as discussed earlier, judging quality is an incredibly difficult problem for computers. If machines could reliably judge creativity, effort, or skill, such functionality could be built directly into Questfall.

{% hint style="info" %}
Another challenge is posed by third-party platforms such as X, YouTube, Facebook, or Discord, where many quest completions occur. These platforms are designed to combat bots for reasons unrelated to Questfall, such as preventing DDoS attacks or content scraping.
{% endhint %}

Fortunately, while machines struggle with subjective judgments, humans excel at them. This makes human judgment not only a perfect tool for moderating quest completions, but also an effective defense against bots.

Therefore, Questfall uses community moderation as a secondary activity that serves as a Sybil protection mechanism. In other words, while PoW implements consensus on top of Sybil defense, Questfall does the opposite: Sybil defense is built upon community consensus.

By validating each other's quest completions, users progress through the levels that play a critical role in their earnings, as the global reward pool is divided equally among user level groups, or leagues. This ensures that users within the same league only compete with each other, so their rewards are not affected by the activity of users outside of their league.

This segmentation of rewards both reduces competition as users progress through the levels and protects the system from Sybil attacks. New accounts are restricted to lower level leagues where they compete with each other, while higher level users enjoy their own share of the reward pool.

In order to advance through the levels, users must vote with the majority, as Questfall’s voting mechanics are based on majority consensus. At the end of the voting process, users in the majority are rewarded with level advancement, while those in the minority are set back in their progress.

To prevent manipulation of the community consensus, Questfall introduces additional safeguards. Moderators are randomly assigned, and their voting power is weighted by their user level. This means that an attacker would have to control a majority of high-level users in the entire system in order to influence the voting results.

{% hint style="info" %}
This is analogous to the 51% attack in Bitcoin.
{% endhint %}

Since the majority of users in the system are expected to act in good faith, most completions will be of high enough quality to be validated, allowing an attacker to gain levels simply by blindly approving every completion assigned. Since the rewards for approving valid completions would outweigh the occasional penalties for approving bad ones, blind approval could become a winning strategy.

To solve this problem, Questfall includes a system that generates fake completions for the moderators. These fakes are indistinguishable from real completions, but the system knows internally which type of vote is correct. And moderators are rewarded or punished based on their accuracy in judging these fakes, not on their alignment with the majority.

The system dynamically adjusts the number of fake completions to ensure that, on average, a moderator has an equal chance of being rewarded or punished when voting blindly. Since the penalties outweigh the rewards, this strategy becomes inefficient after many iterations.

{% hint style="info" %}
For more details on the mechanics, see the [Moderating](broken-reference) section. We have only scratched the surface here.
{% endhint %}

By separating mining and Sybil protection into two separate activities - content creation and its further evaluation through community voting - Questfall achieves something unprecedented: mining protected against cheating that creates real, tangible value for people.

In addition, by leveraging the unique strengths of human collaboration, Questfall overcomes the long-standing challenge of fairly rewarding creative work in decentralized systems. This innovation not only reinvents the mining paradigm, but also paves the way for more intensive use of publicly owned money for the benefit of society.
