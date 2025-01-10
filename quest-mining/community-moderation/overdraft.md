---
icon: piggy-bank
---

# Overdraft

To prevent the profitability of blind or random voting, which can be automated by bots to level many accounts at once, the system will reward or penalize moderators with [Silver](../../assets/Silver-in-game.md) based on how their vote matches the final consensus.&#x20;

If it matches, the moderator is rewarded. If it does not, the moderator is penalized. And, apparently, the [incentives](incentives.md) are balanced so that, on average, the penalties of random voting outweigh the rewards, making it a losing strategy.

{% hint style="info" %}
If moderators can be punished, they will be forced to vote from the perspective of the majority, not from their personal point of view. For example, you may not personally like a movie, but you think that the majority will like it. How would you vote?
{% endhint %}

However, punishing moderators creates a problem. Moderation should be open and free for good moderators, because they add value to the community through their work. But a new amateur moderator with zero Silver can make a mistake and be penalized on the very first vote.

In order to apply this penalty and allow such an unfortunate moderator to continue, Questfall implements a Silver overdraft - the Silver balance can go negative. This way, new users can practice their moderation skills, go negative, and then earn their Silver back by voting correctly.

{% hint style="info" %}
Giving new accounts a starting amount of Silver instead of an overdraft approach is a bad idea because users can spend this initial amount of Silver on leveling or quest promotion and will not be able to moderate.
{% endhint %}

The ability to have an unlimited negative Silver balance assumes that users can vote badly endlessly. They will not earn anything that way, on the contrary, they will completely drown their Silver balance, making an account a waste. But it is still a threat. An attacker can train AI this way, or just add entropy and load to the system.

To limit bad moderators, participation in community moderation requires a user to have a balance of at least -1,000 Silver.&#x20;

This will force users who have received many moderation penalties, or a few large ones for other actions, to either buy Silver with Gold, or create a new account, as they will not be able to earn Silver through moderation if their balance goes below -1,000 Silver.

{% hint style="info" %}
Although there is no limit on Silver overdraft, in practice it is limited since all actions that have rewards and penalties in Silver require some bare minimum.
{% endhint %}
