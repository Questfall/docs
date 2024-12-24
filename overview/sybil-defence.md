---
icon: shield-check
---

# Sybil Defence

Mining is a groundbreaking concept that has exploded the cryptocurrency space in the last decade, but it has one caveat that makes it quite difficult to implement in practice. And that is the fair distribution of rewards according to the value created by users.

While the hash generated under the Proof of Work (PoW) consensus has no value to humans and is only needed to join the newly created block to the existing chain, its quality is easily verified by computers and is binary (either valid or not), with no way to get a valid hash by bypassing the calculations required for that.

This makes a blockchain based on PoW a fair system, since the most profitable strategy is to follow the rules, and there are no workarounds to abuse them and gain advantage, for example through Sybil attacks.

{% hint style="info" %}
Named after a woman with dissociative identity disorder, Sybil attacks are based on creating a large number of pseudonymous identities to gain a disproportionate share of the rewards of influence in the system. In other words, multi-accounts.
{% endhint %}

However, implementing fair mining outside of PoW, especially when the mining results are supposed to create value for humans rather than computers, seems like an impossible challenge.

The problem is that anything meaningful to humans, such as images, stories, quests, or puzzles, cannot be measured in a purely mathematical way, because their value is inherently subjective, shaped by personal preferences, cultural trends, and contextual factors.

To illustrate this, imagine two people drawing a dog. One might produce a simple sketch that is almost indistinguishable from a horse, while the other, a skilled artist, might produce a detailed, almost photographic painting.&#x20;

Yet the perceived value of these two creations could be very different. Some might admire the amateur drawing for its charm and creativity, while dismissing the photorealistic work as lacking originality.

{% hint style="info" %}
If we can't say which image is better and reward them equally, it encourages Sybil attacks, where an attacker creates multiple accounts to produce low-quality images and claim a larger share of the rewards, discouraging genuine effort.
{% endhint %}

Even if there were a universally agreed-upon way to measure talent, skill, or effort, it would not solve the problem. Cultural trends and preferences evolve over time, changing the way we judge art, literature, fashion, and other creative output.

Context is also important - what is valued in one environment may be rejected in another. For example, a drawing of a demon dog might be appreciated in a horror-themed context, but considered completely inappropriate in a kindergarten setting.

{% hint style="info" %}
Modern AIs will not help much because they are trained and do not really have their own opinion. As a result, it only takes one type of content to be misjudged, so the system can be abused and become completely broken.
{% endhint %}

Therefore, despite the potential of mining to create value for humans, a computer system cannot be used to distribute rewards because such a system, to remain fair, would have to take into account a spectrum of quality that is only a matter of human perception.

And if we take quality out of the equation, mining becomes worthless, since it will be much more efficient for users to put as little effort as possible into producing low quality results that are of no value to others.

This problem has caused most crypto projects to avoid mining completely, preferring instead to pre-mint all tokens and sell them directly to users. In this way, the cryptocurrency industry has returned to historical practices, similar to the early days of the stock market over 150 years ago, when anyone could issue securities and advertise them for sale in newspapers.

This happens precisely because of the problem of fair reward distribution under human-centric mining, and it is so difficult that it has not been solved in 15 years of explosive cryptocurrency development... Until now.

{% hint style="info" %}
Although the solution may not seem that complex once you know it, we spent several years getting it right.
{% endhint %}

Questfall faces a full-blown quality problem because quest mining assumes that users mine QFT by completing different tasks, many of which are creative, meaning that users' completions can vary widely.&#x20;

As a result, it is impossible to create an algorithm that can judge the quality of every possible type of completion in order to avoid rewarding bad completions that do not meet minimum quality requirements.

{% hint style="info" %}
Another challenge is that many quests are completed on third-party platforms like X, YouTube, Facebook, or Discord, which restrict automated access to combat DDoS attacks and content scraping.
{% endhint %}

But when the computer system cannot solve a problem that is trivial to humans, there is a simple solution - it must rely on the users for help. And that is exactly what Questfall does by introducing a community consensus vote for each quest completion, or in other words, community moderation.

{% hint style="info" %}
If mining in traditional PoW consists of a single rewarded activity, in Questfall there are two: quest completion and community moderation.
{% endhint %}

While quest completion directly mines QFT, community moderation enables progression through user levels, which play a critical role in miners' earnings as the global mining reward pool is divided equally among user level groups, or leagues.

This league-based reward segmentation makes the rewards for users in each league independent of mining activity in other leagues. It also ensures that users in a higher league will earn larger rewards due to less competition (but of course they will have to put in a lot of effort in community moderation to get there).

The key to defending against Sybil attacks is that community moderation cannot be automated, so all users have an equal opportunity to level up, which is limited by human nature itself. Therefore, users who focus on a single account will consistently outlevel those who spread their efforts across multiple accounts.

As a result, while it is possible to automate quest completion with bots that replicate the required actions across multiple accounts, it is a losing strategy. On the one hand, an attacker cannot maintain many high-level accounts, and on the other - low-level bots are forced to compete with each other for segmented reward within the lowest league, leaving users in higher leagues unaffected.

{% hint style="info" %}
While PoW implements consensus on top of Sybil defense, Questfall does the opposite: Sybil defense is built upon community consensus.
{% endhint %}

Of course, a key factor in making such a level-based Sybil defense robust is the voting mechanism, which should be based on rules that prevent manipulation and abuse.

In Questfall, not only is the winning majority rewarded after the vote, but the losing minority is also punished. More specifically, the majority is rewarded with a level advancement, while those in the minority are set back in their progress.

In order to prevent vote manipulation, Questfall implements additional security measures. Moderators are randomly assigned and their voting power is weighted by their user level. This means that an attacker would have to control a majority of high-level users in the entire system in order to influence the voting results for a particular quest completion.

{% hint style="info" %}
This is analogous to the 51% attack in Bitcoin.
{% endhint %}

However, this is still not enough. Since the majority of users in the system are expected to be good, most completions will be of high enough quality to be validated, allowing an attacker to gain levels simply by blindly approving every completion assigned: a few occasional penalties for approving bad completions won't outweigh the rewards for approving the good majority.

To solve this problem, Questfall includes a system that generates fake completions for the moderators. These fake completions are indistinguishable from the real ones for users, but the system knows internally which type of vote is correct and rewards or punishes moderators accordingly.

The system dynamically adjusts the number of fake completions to ensure that, on average, a moderator has an equal chance of getting a good or bad completion. Since the penalties are greater than the rewards, any kind of blind or random voting becomes a losing strategy over many iterations.

{% hint style="info" %}
For more details on the community consensus mechanics, see the [Moderating](broken-reference) section. We have barely scratched the surface here.
{% endhint %}

By introducing user levels with reward segmentation, as well as separating mining and Sybil protection into two distinct activities - one for earning cryptocurrency and another for leveling up - Questfall achieves something unprecedented: fair mining that creates real, tangible value for people.

This overcomes the long-standing challenge of fairly rewarding creative work in decentralized systems by leveraging the unique strengths of human collaboration. This innovation not only reboots the mining paradigm, but also paves the way for more intensive use of publicly owned money for the benefit of the majority.
