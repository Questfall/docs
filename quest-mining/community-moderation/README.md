---
icon: shield-check
---

# Community Moderation

Fair reward distribution is very important for the quest mining approach used in Questfall. However, quest completions can be any kind of content that should satisfy unpredictable quest requirements, and they can be published on any available platform on the Internet.

As a result, judging completions is a very hard (if solvable) problem for computers. Not only should the completion meet some minimum quality requirements, which is entirely a matter of human perception, but also popular platforms like X, Facebook or Youtube are fighting with automatic access to prevent DDoS attacks and content scraping.

This is why Questall relies entirely on the help of its users, which is realized in the form of community moderation and plays an important role in the overall operation of the platform. On the one hand, it helps to distribute fair rewards to miners according to their efforts and skills, and on the other hand, it serves as a [defense against Sybil attacks](../../overview/sybil-defence.md).

Since community moderation is based on consensus voting and plays such a crucial role in the system, it should be protected from all kinds of manipulation, multi-accounts, bots, and all kinds of blind and random voting. To achieve this goal, Questfall's community moderation is based on several principles that create a solid mechanic that can't be abused.

#### Binary votes

Each voting topic should have only two possible vote options - either yes or no. It can also be true or false, valid or invalid, and so on. This approach not only makes voting easy and straightforward for moderators, but also implies a binary voting result, so that each vote is either right or wrong, with no ambiguity.

{% hint style="info" %}
There may be other approaches, such as the range voting that Questfall uses for quest ratings. However, the results of such voting are not as straightforward, as the votes are right only to a certain degree.
{% endhint %}

This binary approach allows to reduce the whole quality spectrum of quest competitions and reports to the binary result - either valid or not. The same way hashes are estimated in the Bitcoin blockchain.

#### League-based result segmentation

With binary votes, it is fairly easy to calculate the majority. However, the straightforward approach when all votes are equal opens the door to Sybil attacks. Even if the system weights votes by user level, this does not solve the problem. An attacker could still create many low-level accounts and gain the overall weight in the system needed to change the voting results.

In Questfall, to prevent vote manipulation by many low-level accounts, voting is segmented by league and individual league results are generated. Each league result has the same weight, and the final result is determined by a simple majority.

<table><thead><tr><th width="147">League</th><th width="92" align="center">Yes</th><th width="86" align="center">No</th><th width="82" align="center">Result</th></tr></thead><tbody><tr><td>1</td><td align="center">156</td><td align="center">633</td><td align="center">No</td></tr><tr><td>2</td><td align="center">142</td><td align="center">43</td><td align="center">Yes</td></tr><tr><td>3</td><td align="center">53</td><td align="center">2</td><td align="center">Yes</td></tr><tr><td>4</td><td align="center">12</td><td align="center">4</td><td align="center">Yes</td></tr><tr><td>Final</td><td align="center">363</td><td align="center">682</td><td align="center">Yes</td></tr></tbody></table>

{% hint style="info" %}
In cases where the league results are evenly split, the highest league result is given double weight.
{% endhint %}

This approach protects the results from both sides - many law-level accounts as well as a few high-level accounts won't be able to manipulate the consensus.&#x20;

To abuse a voting system, an attacker will need a majority in most leagues. This also means that protection will increase over time as more leagues are opened in Questfall.

#### Assigned voting topic

Since the votes are quite diverse when segmented by league, the number of votes for a solid consensus can be much smaller than just a percentage of all moderator votes. For example, the requirement could be at least 11 votes from each of 5 leagues, for a total of 55. This will be sufficient even if there are millions of moderators in the system.

{% hint style="info" %}
Of course, these requirements will evolve over time, adjusting to the number of leagues and overall experience, as we are in uncharted territory here. For example, when Questfall launches, user levels will likely be used instead of leagues.
{% endhint %}

However, to achieve this efficiency, users should not be able to choose the topic they want to vote on - instead, the system should assign moderators from different leagues to voting topics as needed.&#x20;

This approach also provides another layer of protection. On the one hand, the full list of voting topics is sensitive data because it can be used, for example, for AI training. On the other hand, users can try to manipulate the voting results by creating many accounts and voting the same way on a given topic.&#x20;

When topics are assigned by the system, both of these threats are negated. Moderators won't get the full list of voting topics to choose from, while multi-accounts will get random topics on each of their accounts and won't be able to synchronize their votes.

#### Votes are rewarded or penalized

If users can only be rewarded and not punished for voting, then any kind of blind or random voting will be a profitable strategy that can be automated. And as a result, users will be able to level many accounts at once through bots. This will completely break the system.

Therefore, in Questfall, moderators will be rewarded or penalized with [Silver](../../assets/Silver-in-game.md) based on how their vote matches the final consensus. If it matches, the moderator is rewarded. If it does not, the moderator is penalized.

{% hint style="info" %}
Thanks to the league-based result segmentation, the majority of voters could be penalized, as shown in the table above.
{% endhint %}

This approach, where the user can either be rewarded or punished, affects the way moderators will evaluate the voting topic. They will be forced to judge it from the perspective of the majority, not from their personal point of view. Of course, if they want to earn Silver and not lose it.

{% hint style="info" %}
For example, you may not personally like a story that a user has written. However, you think that the majority will like it. How would you vote?
{% endhint %}

It is also important to note that users can have a negative Silver balance, so that new moderators can make mistakes that can be fixed without paying. This way, new users can practice their moderation skills, go negative, and then earn Silver back with proper voting.

#### Protection against user actions

If the quest completion is a piece of content published on a third-party site that can be edited by its author at any time, a user can post it as a quest completion and then change it while it is being moderated.

This can even happen without malice. For example, there may have been a mistake initially, and a user fixed it later, after moderation began. In this case, the first moderators who voted that the completion was invalid would be punished for doing their job correctly, which is obviously not fair. However, if there is no punishment, then the principle of "votes are rewarded or penalized" is violated.

This contradiction is easily resolved by splitting a single voting topic into two. And for that, the system should ask a user who completes a quest for two things: a link where the completion is published, and the screenshot of the completion.

As a result, the moderation process for such a completion could be split into two steps. First, a group of moderators would vote to approve the actual completion as shown on the screenshot. And then another set of moderators (since it will be a different voting topic) will judge the completion based on the screenshot, which could not be altered.

The key is to split the rewards accordingly. If the total reward/penalty for moderating the completion is defined as X/Y, then the reward/penalty for witnessing the screenshot mathing the completion should be X/0, while for the actual completion estimation should be 0/Y.

In other words, the screenshot vote will allow moderators to earn, while the completion vote will allow them not to lose. And while these two votes will be assigned to different moderators, there will be many of such type of completion, meaning that the system would be able to balance such split topics for each of moderators.

#### Bypass costs should be balanced

Users should not be able to freely bypass topics to vote, otherwise the idea of a system-assigned topic fails, since users can loop through all topics until they get to the one they want. Free bypassing also allows all topics to be parsed and collected, which is a potential threat to the system.

However, if there is no way for users to bypass topics that they cannot judge for some reason, they will be forced to vote blindly to continue. So there should be some way for users to lose less by bypassing than by voting blind.

In regular voting, when there is both a reward and a penalty, the cost of bypassing in Silver should be less than half the penalty to make bypassing more profitable than blind voting.

In the case of the split topics discussed earlier, the cost of bypassing the first step, where there is no penalty, should also be zero, otherwise it will be more profitable to vote blind than to bypass. But the cost of bypassing the second step should be greater than half the reward for the first step.

This way, random voting on the first step earns Silver, while the cost of bypassing the second step outweighs it. And since a moderator is assigned both steps in roughly equal proportions, there is no way to be profitable with blind or random voting over many iterations.

#### Banning a user after many failures

As mentioned above, voting data is sensitive, so there should be no way to loop through all the voting topics for free. However, since the Silver balance can be negative, this opens the door to looping through topics by bypassing and completely killing the Silver balance on a waste account.

To prevent this, Questfall has a 24 hour ban for every -5,000 negative Silver balance. In other words, the user will be banned for 24 hours when his Silver balance reaches -5,000, another ban will be applied when the balance reaches -10,000, but this time it will be 48 hours. A 72 hour ban will be applied when the balance reaches -15,000. And so on.

This way, any kind of parsing will require a huge amount of Silver to be invested in the system in order to not get banned. And that will require either QFT burning or proper moderation, both of which add value to the entire community.

#### Even odds of a win

There may be an imbalance between good completions or reports and bad ones in the system, since the majority of users will not waste their resources and efforts on malicious actions and will play by the rules.

And such an imbalance creates a critical threat to the system. For example, if 90% of all completions and reports in the system are valid and only 10% are not, malicious actors can easily create a bot that blindly approves every assigned completion, and as a result of such voting, the rewards will outweigh the penalties. Such a bot allows an attacker to automatically gain advantage on many accounts at once, which is a typical Sybil attack.

There are two ways to protect the voting mechanics from this kind of abuse.&#x20;

Either the penalties should outweigh the rewards, which means that in the example above, the rewards should be at least 10 times smaller than the penalties.

Or a system could generate fakes for the moderators to balance the odds. In Questfall we chose this approach because it is easy to implement and does not demotivate moderators with high penalties.

{% hint style="info" %}
However, voting on fakes makes a noticeable part of the moderators' work redundant. But this part will never exceed 50%, which is still much better in terms of value created for the people than a Bitcoin hash bruteforcing, where all 100% of the miners' work is done just for security reasons.
{% endhint %}

To generate a fake, the system can simply mix data from different completions. For example, it can use a different username for a valid completion, or it can pass off the completion of one quest as the completion of another.

Since the system knows what the correct vote should be, it can punish bad voters and reward good ones independently, without the need for consensus. In other words, such fakes are used as automatically generated honeypots.
