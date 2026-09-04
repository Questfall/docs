---
icon: circle-play
---

# Bypass

To make voting more meaningful, moderators should be able to bypass a topic if they are having trouble making a decision. Otherwise, their vote adds no value to the system.

As a result, moderators have at least three options when validating each topic: approve, reject, and bypass.

{% hint style="info" %}
Quest completions have a fourth action available to moderators - they can report a completion if it is obviously malicious.
{% endhint %}

However, such a bypass should not be infinitely free, otherwise the idea of a system-assigned topic fails, since users can loop through all topics until they get to the one they want.

In Questfall, the base cost of the first bypass is free, while each subsequent bypass costs one [Silver](../../assets/silver.md) more until the base cost reaches -5 Silver. The current global [moderation market multiplier](incentives.md#adaptive-moderation-market) scales that base cost, so 5 Silver is not a final economic cap during overload. As a result, it is still more profitable to bypass a topic than to vote blindly. After a vote is cast on any voting topic except witnessing, the bypass step is reset to zero.

<table><thead><tr><th width="213">Voting Topic</th><th width="161" align="center">Max Bypass Cost</th><th width="112" align="center">Reset On Vote</th></tr></thead><tbody><tr><td><a data-footnote-ref href="#user-content-fn-1">Completion Validation</a></td><td align="center"></td><td align="center"></td></tr><tr><td><ul><li><a data-footnote-ref href="#user-content-fn-2">Witnessing</a></li></ul></td><td align="center"></td><td align="center"></td></tr><tr><td><ul><li><a data-footnote-ref href="#user-content-fn-3">Judging</a></li></ul></td><td align="center">-5 Silver</td><td align="center">+</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-4">Whitelisting Domain</a></td><td align="center">-5 Silver</td><td align="center">+</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-5">Domain Report</a></td><td align="center">-5 Silver</td><td align="center">+</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-6">Completion Report</a></td><td align="center">-5 Silver</td><td align="center">+</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-7">Quest Report</a></td><td align="center">-5 Silver</td><td align="center">+</td></tr></tbody></table>

Waiting is not a free Bypass. An assignment remains with its moderator after its ten-minute reservation and after the case reaches consensus. The moderator must Vote, Bypass, Report when that action is available, or wait for an explicit system cancellation. A vote submitted after consensus is settled against the canonical answer but cannot change it.

The witnessing voting topic is a special case because it has no penalty. This not only means that this type of topic can always be bypassed for free, but also implies that there should be a balance between witnessing and judging topics.

Therefore, to get a witnessing topic, a user should either vote on a judging topic first, or prepay the current adaptive Witness price. Its base value is 25 Silver. Prepayment and switching use the server quote active when the request arrives; the visible rate refreshes in place at each shared ten-minute market boundary.

[^1]: Quest completions published on third-party platforms, which can theoretically be changed by the author at any time.



    Learn more in the [Witnessing](witnessing.md) article.

[^2]: Vote on whether or not the screenshot matches the content of the link.

[^3]: Judging whether the quest is completed or not based on the completion screenshot.

[^4]: Confirmation through a vote that the domain is trusted enough to be added to the system's whitelist.

[^5]: Voting on whether the whitelisted domain has become risky and should be removed from the system's whitelist.

[^6]: Vote on whether a quest completion reported by a moderator is obviously malicious or not.

[^7]: Voting on potentially harmful quests reported by users.
