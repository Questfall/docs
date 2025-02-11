---
icon: piggy-bank
---

# Overdraft

While moderators can both earn and lose [Silver](../../assets/silver.md) by voting in community moderation, punishing them creates a problem.

Moderation should be open and free for good moderators because they add value to the community through their work. But a new amateur moderator will have zero Silver and can make a mistake that will result in a penalty on the very first try.

In order to apply this penalty and allow such an unfortunate moderator to continue, Questfall implements a Silver overdraft - the Silver balance can go negative. This way, new users can practice their moderation skills, go negative, and then earn their Silver back by voting correctly.

{% hint style="info" %}
Giving new accounts a starting amount of Silver instead of an overdraft approach is a bad idea because users can spend this initial amount of Silver on [leveling](../completion/levels.md) or [Quests Bounty](../creation/quest-bounty.md) and will not be able to moderate.
{% endhint %}

The ability to have an unlimited negative Silver balance assumes that users can vote badly endlessly. They will not earn anything that way, on the contrary, they will completely drown their Silver balance, making an account a waste.&#x20;

But it is still a threat. An attacker can train AI this way, or just add entropy and load to the system. Therefore, in order to limit bad moderators, there is a threshold of -1,000 Silver for participation in community moderation.

This will force users who have received many moderation penalties, or a few large ones for other actions, to either buy Silver with [Gold](../../assets/gold.md) and [QFT](../../assets/qft.md), or create a new account, as they will not be able to earn Silver through moderation if their balance goes below -1,000 Silver.

{% hint style="info" %}
Although there is no limit to the amount of negative Silver a user can have, in practice it is limited because only moderation and quest completion have overdrafts, and all other actions that can lose Silver require a positive balance. So a user can't perform actions that are infinitely penalized.
{% endhint %}
