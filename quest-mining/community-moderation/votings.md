---
icon: square-check
---

# Votings

#### Binary votes

Each voting topic should have only two possible vote options - either yes or no. It can also be true or false, valid or invalid, and so on. This approach not only makes voting easy and straightforward for moderators, but also implies a binary voting result, so that each vote is either right or wrong, with no ambiguity.

{% hint style="info" %}
There may be other approaches, such as the range voting that Questfall uses for quest ratings. However, the results of such voting are not as straightforward, as the votes are right only to a certain degree.
{% endhint %}

This binary approach allows to reduce the whole quality spectrum of quest competitions and reports to the binary result - either valid or not. The same way hashes are estimated in the Bitcoin blockchain.

#### Assigned voting topic

Since the votes are quite diverse when segmented by league, the number of votes for a solid consensus can be much smaller than just a percentage of all moderator votes. For example, the requirement could be at least 11 votes from each of 5 leagues, for a total of 55. This will be sufficient even if there are millions of moderators in the system.

{% hint style="info" %}
Of course, these requirements will evolve over time, adjusting to the number of leagues and overall experience, as we are in uncharted territory here. For example, when Questfall launches, user levels will likely be used instead of leagues.
{% endhint %}

However, to achieve this efficiency, users should not be able to choose the topic they want to vote on - instead, the system should assign moderators from different leagues to voting topics as needed.&#x20;

This approach also provides another layer of protection, since when topics are assigned by the system, there is no way to synchronize an attack on a given vote from many accounts. Multi-accounts will get random topics on each of their accounts, and will not be able to vote collectively on a given topic.



#### Bypass costs should be balanced

Users should not be able to freely bypass topics to vote, otherwise the idea of a system-assigned topic fails, since users can loop through all topics until they get to the one they want.

However, if there is no way for users to bypass topics that they cannot judge for some reason, they will be forced to vote blindly to continue. So there should be some way for users to lose less by bypassing than by voting blind.

In regular voting, when there is both a reward and a penalty, the cost of bypassing in Silver should be less than half the penalty to make bypassing more profitable than blind voting.

In the case of the split topics discussed earlier, the cost of bypassing the first step, where there is no penalty, should also be zero, otherwise it will be more profitable to vote blind than to bypass. But the cost of bypassing the second step should be greater than half the reward for the first step.

This way, random voting in the second step is either penalized half the time, or the moderator pays a bypass cost, both of which outweigh the possible earnings in the first step. And since a moderator gets roughly equal proportions of both steps, there is no way to be profitable with blind or random voting over many iterations.
