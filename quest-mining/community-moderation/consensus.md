---
icon: scale-unbalanced-flip
---

# Consensus

In community moderation, each vote has only two possible options - moderators can either agree or disagree with the submission. This binary approach reduces the entire quality spectrum of user submissions, such as quest completions or reports, to the binary result - either valid or not.

{% hint style="info" %}
The same way hashes are estimated in the Bitcoin blockchain.
{% endhint %}

Binary choices also make voting easy and straightforward for moderators, and imply a binary validity of their votes, since they either agree or disagree with the consensus result, and are therefore either right or wrong, with no ambiguity.

{% hint style="info" %}
There are other approaches, such as the range voting that Questfall uses for [quest ratings](../quest-creation-10/karma.md). However, votes in such ratings are only right to a certain degree.
{% endhint %}

With binary votes, it is fairly easy to calculate the majority. However, the straightforward approach when all votes are equal opens the door to Sybil attacks. Even if the system weights votes by user level, this does not solve the problem. An attacker could still create many low-level accounts and gain the overall weight in the system needed to change the voting results.

In Questfall, to prevent vote manipulation by many low-level accounts, voting is segmented by league and individual league results are generated. Each league result has the same weight, and the final result is determined by a simple majority.

<table><thead><tr><th width="147">League</th><th width="92" align="center">Yes</th><th width="86" align="center">No</th><th width="82" align="center">Result</th></tr></thead><tbody><tr><td>1</td><td align="center">156</td><td align="center">633</td><td align="center">No</td></tr><tr><td>2</td><td align="center">142</td><td align="center">43</td><td align="center">Yes</td></tr><tr><td>3</td><td align="center">53</td><td align="center">2</td><td align="center">Yes</td></tr><tr><td>4</td><td align="center">12</td><td align="center">4</td><td align="center">Yes</td></tr><tr><td>Final</td><td align="center">363</td><td align="center">682</td><td align="center">Yes</td></tr></tbody></table>

{% hint style="info" %}
In cases where the league results are evenly split, the highest league is given double weight.
{% endhint %}

This approach protects the results from both sides - many low-level accounts as well as a few high-level accounts will not be able to manipulate the consensus, since an attacker would need a majority in most leagues to abuse a voting system.&#x20;

{% hint style="info" %}
This also means that the protection will increase over time as more leagues are opened in Questfall.
{% endhint %}

Since the votes are quite diverse when segmented by league, the number of votes for a solid consensus can be much smaller than just a percentage of all moderator votes. For example, the requirement could be at least 11 votes from each of 5 leagues, for a total of 55. This will be sufficient even if there are millions of moderators in the system.

{% hint style="info" %}
Of course, these requirements will evolve over time, adjusting to the number of leagues and overall experience, as we are in uncharted territory here. For example, when Questfall launches, user levels will likely be used instead of leagues.
{% endhint %}

However, to achieve this efficiency, users should not be able to choose the topic they want to vote on - instead, the system should assign moderators from different leagues to voting topics as needed.

This also provides another layer of protection, because when topics are assigned by the system, there is no way for multiple accounts to synchronize an attack on a given vote, since each account is given an unpredictable topic.

{% hint style="info" %}
Depending on the number of completions and active moderators, it should take anywhere from a few minutes to a few hours to reach a consensus. After that, moderators will be rewarded or penalized based on their vote, according to the voting topic [incentives](incentives.md).
{% endhint %}
