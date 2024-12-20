---
icon: shield-check
---

# Sybil Defence

The foundation of the Proof of Work consensus is the defense against Sybil attacks, which is pretty solid because the result of mining can only have two possible states: either the generated hash to add a new block to the blockchain is valid or not. And since hashes are based on mathematics, they are impossible to falsify and can be easily verified by computers.

But if we take something that we humans find meaningful as a value for mining (pictures, stories, quests, puzzles, etc.), it will be impossible to value it in such a binary way. This is because everything outside of pure mathematics assumes a quality that is not binary and implies human desires, tastes, and fashions.

For example, an ordinary person may draw a picture of a dog that is barely distinguishable from a horse, while a professional artist will draw the same dog so that the emotion can be seen in the eyes.

And still the value of these two pictures will not be obvious. Some will say that a childish picture of a dog has a fresh view and is a masterpiece, while a photorealistic drawing has no creativity in it.&#x20;

And even if we could somehow agree on how to judge the talent, skill, and effort of the author, it will not help much. Fashions change all the time, and the quality of books, movies, clothes, cars, computers, phones, and everything else is judged differently after some time has passed. Also, the application of the work will have a great influence on the evaluation - the picture of a demon dog will not fit in a kindergarten.

As a result, no matter how good the mining concept is, there is currently no solution for fair reward distribution when the value generated is not binary (valid or not), but can be of different quality. So today's teams avoid using mining, preferring to take the easy way out and mint all the tokens for themselves and then sell them to the crowd.

{% hint style="info" %}
Selling the entire supply of tokens is anything but innovative. At the dawn of the stock market more than 150 years ago, anyone could issue their own securities and sell them to the public through newspaper advertisements.
{% endhint %}

This problem is quite difficult and has not been solved in the last 15 years of explosive development of cryptocurrencies.&#x20;

Until now...

Quest Mining assumes that users earn QFT by completing quests, which in most cases (especially for creative tasks) can be done with very different levels of effort.&#x20;

Thus, to make mining fair, a binary decision of the system (to reward a user or not) should be based on a spectrum of quality - some completions that are of a certain degree of poor quality should be considered invalid, while others should be rewarded.

But, as mentioned above, judging quality is a very hard (if solvable) problem for computers, otherwise we could implement such functionality as part of Questfall.

{% hint style="info" %}
Aside from the obvious issues of human perception of quality, there is a more technical issue with judging completions. Third-party platforms (such as X, Youtube, Facebook, Discord, etc.) on which completions are usually performed typically fight bots to prevent DDoS attacks and content parsing.
{% endhint %}

While accessing and estimating completion is expensive and hard for computers, it is easy and free for humans. And that is exactly why the task of judging competitions is perfect for anti-bot protection.

The Proof of Work consensus combines the process of mining and protection against Sybil attacks. But it is a special case. In general, these two functions can be separated, and in Questfall, miners earn QFT by completing quests, while voting on each other's completions raises their level.

These user levels play a crucial role in the distribution of mining rewards, as the reward pool is divided equally between user level groups (leagues). This way, the reward for users in the same league does not depend on the activity of other users.

This reward segmentation not only assumes that competition decreases as a user progresses through levels, but it also protects the system from Sybil attacks, since many newly created accounts will compete with each other, while more higher-level users will have their own piece of the pie to share.

In order to advance through the levels, a user should vote with the majority, since the voting mechanics are based on the majority principle. Thus, at the end of the voting process, the majority is rewarded by being able to advance in levels, while the minority is punished by being delayed in advancing in levels.

Because moderators are randomly assigned and their votes are weighted by user level, an attacker trying to break the community consensus on a particular completion would need a majority of high-level users in the entire system.

{% hint style="info" %}
This is a full analog of the 51% attack in Bitcoin.
{% endhint %}

Assuming that the majority of users in the system are good, it will be nearly impossible for a bad actor to get 51% of the votes. But this also means that most completions will be good enough to validate, and an attacker can gain levels simply by approving every completion assigned to him (since there will be too few bad completions, and the rewards will be much greater than the rare punishments).

To protect itself from such blind approval attacks, the system will generate fake votes for moderation. The main difference between the fake votes and the real ones is that the system knows the correct result for the fake votes, and will reward or punish the moderators based on this knowledge, not on the opinion of the majority.&#x20;

Furthermore, the system would adjust the amount of fake votes generated so that, on average, a moderator has an equal chance of winning or losing by blind voting. And since the punishment will be greater than the reward, blind voting will be a losing strategy.

{% hint style="info" %}
Here we have described a big picture, for more details please read [Moderating](broken-reference) section.
{% endhint %}

The described innovative separation of mining and Sybil protection into two distinct activities - content creation and its evaluation through community consensus - allows mining, for the first time, to generate real value for people.&#x20;

Moreover, while rewarding creative work has long been a challenge for decentralized systems, Questfall leverages the unique strengths of human collaboration to overcome this obstacle, paving the way for a fairer mining paradigm within the blockchain ecosystem that delivers much greater value to people.
