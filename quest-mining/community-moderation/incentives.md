---
icon: sack
---

# Incentives

The core mechanics of Questfall community moderation are based on the idea that rather than securing every possible vote, malicious voting should be a losing strategy over many iterations, so that the most profitable strategy for a moderator in the long run is to play by the rules.

Voting topics are not the same in terms of potential harm to users, so the rewards and penalties for different types of voting are different. In general, however, the penalties outweigh the rewards, making any random or blind voting by bots a losing strategy.

{% hint style="info" %}
This article only discusses community voting incentives. Punishments or rewards for users based on moderation results (e.g., punishing the author of a reported quest that moderators deem malicious) are described in the [Community Moderation](./) article.
{% endhint %}

To make voting more meaningful, moderators should be able to bypass a topic if they are having trouble making a decision. Otherwise, their vote adds no value to the system. As a result, moderators have at least three options when validating each topic: approve, reject, and bypass.

{% hint style="info" %}
External quest completions have a fourth action available to moderators - they can report a completion if it is obviously malicious. In this case, voting on the completion will be paused until a report is moderated.
{% endhint %}

However, such a bypass should not be infinitely free, otherwise the idea of a system-assigned topic fails, since users can loop through all topics until they get to the one they want.

In Questfall, the cost of the first bypass is free, while each subsequent bypass costs one Silver more until the maximum cost of -5 Silver is reached. As a result, it is still more profitable to bypass a topic than to vote blindly.&#x20;

{% hint style="info" %}
After a vote is cast on any voting topic except witnessing, the bypass cost returns to zero.
{% endhint %}

The witnessing voting topic is a special case because it has no penalty. This not only means that this type of topic can always be bypassed for free, but also implies that there should be a balance between witnessing and judging topics.

Therefore, to get a witnessing topic, a user should either vote on a judging topic first, or pay at least 25 Silver for bypassing in advance.

<table><thead><tr><th width="213">Voting Topic</th><th width="112" align="center">Reward</th><th width="111" align="center">Penalty</th><th width="161" align="center">Max Bypass Cost</th></tr></thead><tbody><tr><td><a data-footnote-ref href="#user-content-fn-1">Completion Validation</a></td><td align="center"></td><td align="center"></td><td align="center"></td></tr><tr><td><ul><li><a data-footnote-ref href="#user-content-fn-2">Witnessing</a></li></ul></td><td align="center">+10 Silver</td><td align="center">0</td><td align="center">0</td></tr><tr><td><ul><li><a data-footnote-ref href="#user-content-fn-3">Judging</a></li></ul></td><td align="center">0</td><td align="center">-30 Silver</td><td align="center">-5 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-4">Whitelisting Domain</a></td><td align="center">+20 Silver</td><td align="center">-40 Silver</td><td align="center">-5 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-5">Domain Report</a></td><td align="center">+30 Silver</td><td align="center">-50 Silver</td><td align="center">-5 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-6">Completion Report</a></td><td align="center">+40 Silver</td><td align="center">-60 Silver</td><td align="center">-5 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-7">Quest Report</a></td><td align="center">+50 Silver</td><td align="center">-70 Silver</td><td align="center">-5 Silver</td></tr></tbody></table>

There is another way to bypass a topic for free. All a moderator needs to do is wait for the voting to reach a consensus. When the voting is over, the moderator will be assigned a new topic to vote on.

{% hint style="info" %}
This is not dangerous, because if consensus is reached on this particular topic, all other topics in the system are likely to be voted on as well.
{% endhint %}

As a result of the incentive mechanism and the overall voting process, in order to earn Silver, moderators must try to predict what the consensus outcome will be.&#x20;

Since bad actors have multidirectional interest vectors, the majority of moderators will assume that the consensus is reached by good voters, and will be motivated to vote accordingly.

{% hint style="info" %}
This acts as a canonical self-fulfilling prophecy.
{% endhint %}

[^1]: Quest completions published on third-party platforms, which can theoretically be changed by the author at any time.



    Learn more in the [Witnessing](witnessing.md) article.

[^2]: Vote on whether or not the screenshot matches the content of the link.

[^3]: Judging whether the quest is completed or not based on the completion screenshot.

[^4]: Confirmation through a vote that the domain is trusted enough to be added to the system's whitelist.

[^5]: Voting on whether the whitelisted domain has become risky and should be removed from the system's whitelist.

[^6]: Vote on whether a quest completion reported by a moderator is obviously malicious or not.

[^7]: Voting on potentially harmful quests reported by users.
