---
icon: sack
---

# Incentives

Voting topics are not the same in terms of potential harm to users, so the rewards and penalties for different types of voting are different. In general, however, the penalties outweigh the rewards, making any random or blind voting by bots a losing strategy.

{% hint style="info" %}
This article only discusses community voting incentives. Punishments or rewards for users based on moderation results (e.g., punishing the author of a reported quest that moderators deem malicious) are described in the appropriate articles.
{% endhint %}

To make voting more meaningful, moderators should be able to bypass a topic if they are having trouble making a decision. Otherwise, their vote adds no value to the system. As a result, moderators have at least three options when validating each topic: approve, reject, and bypass.

{% hint style="info" %}
External quest completions have a fourth action available to moderators - they can report a completion if it is potentially harmful to other moderators. In this case, a new topic will appear, and voting on the completion itself will be paused until a report is moderated.
{% endhint %}

However, such a bypass should not be free, otherwise the idea of a system-assigned topic fails, since users can loop through all topics until they get to the one they want.&#x20;

In Questfall, the cost of bypassing is balanced so that it is more profitable to bypass a topic than to vote if a moderator is unsure, in other words, better to bypass than to vote blindly.

<table><thead><tr><th width="242">Voting topic</th><th width="132" align="center">Reward</th><th width="124" align="center">Penalty</th><th width="118" align="center">Bypass</th></tr></thead><tbody><tr><td><a data-footnote-ref href="#user-content-fn-1">Internal completions</a></td><td align="center">+10 Silver</td><td align="center">-20 Silver</td><td align="center">-1 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-2">External completions</a></td><td align="center"></td><td align="center"></td><td align="center"></td></tr><tr><td><ul><li><a data-footnote-ref href="#user-content-fn-3">Screenshot witnessing</a></li></ul></td><td align="center">+10 Silver</td><td align="center">0</td><td align="center">0</td></tr><tr><td><ul><li><a data-footnote-ref href="#user-content-fn-4">Completion validation</a></li></ul></td><td align="center">0</td><td align="center">-20 Silver</td><td align="center">-3 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-5">Whitelisted domain</a></td><td align="center">+10 Silver</td><td align="center">-20 Silver</td><td align="center">-1 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-6">Reported completion</a></td><td align="center">+20 Silver</td><td align="center">-30 Silver</td><td align="center">-1 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-7">Reported quest</a></td><td align="center">+30 Silver</td><td align="center">-40 Silver</td><td align="center">-1 Silver</td></tr></tbody></table>

[^1]: Completions that are published on Questfall itself and cannot be edited after submission.



    Will be implemented in [future releases](../../roadmap/future-versions.md).

[^2]: Quest completions published on third-party platforms, which can theoretically be changed by the author at any time.



    Learn more in the [Witnessing](witnessing.md) article.

[^3]: Vote on whether or not the screenshot matches the content of the link.

[^4]: Judging whether the quest is completed or not based on the completion screenshot.

[^5]: Confirmation through voting that the domain is trustworthy.

[^6]: Vote on whether or not quest completion is dangerous for moderators, by report from other moderators.

[^7]: Voting on potentially harmful quests reported by users.
