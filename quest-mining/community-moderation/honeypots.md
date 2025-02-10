---
icon: honey-pot
---

# Honeypots

There may be an imbalance between good completions or reports and bad ones in the system, since the majority of users will not waste their resources and efforts on malicious actions and will play by the rules. And such an imbalance creates a critical threat to the system.&#x20;

For example, if 90% of all completions and reports in the system are valid and only 10% are not, malicious actors can easily create a bot that blindly approves every assigned completion, and as a result of such voting, the rewards will outweigh the penalties.&#x20;

Such a bot allows an attacker to automatically gain advantage on many accounts at once, which is a typical Sybil attack. There are two ways to protect the voting mechanics from this kind of abuse.&#x20;

Either the penalties should outweigh the rewards even with blind approval, which means that in the example above, the penalties should be at least 10 times greater than the rewards, leaving too little room for moderators to make mistakes. Or a system could generate fakes for the moderators to balance the odds.&#x20;

In Questfall we chose the second approach because it is easy to implement and does not demotivate moderators with high penalties.

{% hint style="info" %}
However, voting on fakes makes a noticeable part of the moderators' work redundant. But the valuable work will still be greater than 50%, which is much better than hash bruteforcing in PoW, where all 100% of the miners' work is done just for security reasons.
{% endhint %}

To generate a fake, the system can simply mix data from different completions. For example, it can use a different username for a valid completion, or it can pass off the completion of one quest as the completion of another.

Since the system knows what the correct vote should be, it can punish bad voters and reward good ones independently, without the need for consensus. In other words, such fakes are used as automatically generated honeypots.

{% hint style="info" %}
Unlike consensus voting, honeypot voting rewards or penalizes immediately after a moderator votes.
{% endhint %}
