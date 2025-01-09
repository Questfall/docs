---
icon: shield-minus
---

# Penalties

To prevent the profitability of blind or random voting, which can be automated by bots to level many accounts at once, the system will reward or penalize moderators with [Silver](../../assets/Silver-in-game.md) based on how their vote matches the final consensus. If it matches, the moderator is rewarded. If it does not, the moderator is penalized.&#x20;

{% hint style="info" %}
The incentives are balanced so that, on average, the penalties of random voting outweigh the rewards, making it a losing strategy.
{% endhint %}

If moderators can be punished, they will be forced to vote from the perspective of the majority, not from their personal point of view. Of course, if they want to earn Silver and not lose it.

{% hint style="info" %}
For example, you may not personally like a story that a user has written. However, you think that the majority will like it. How would you vote?
{% endhint %}

However, punishing moderators creates a problem. Moderation should be open and free for good moderators, because they add value to the community through their work. But a new amateur moderator with zero Silver can make a mistake and be penalized on the very first vote.

In order to apply this penalty and allow such an unfortunate moderator to continue, Questfall implements a negative Silver balance. This way, new users can practice their moderation skills, go negative, and then earn their Silver back by voting correctly.

{% hint style="info" %}
Giving new accounts a starting amount of Silver is a bad idea. Since Silver can be donated and used to promote quests, creating many accounts becomes profitable.
{% endhint %}

The ability to have an unlimited negative Silver balance assumes that users can vote badly endlessly. They will not earn anything that way, on the contrary, they will completely drown their Silver balance, making an account a waste. But it is still a threat. An attacker can train AI this way, or just add entropy and load to the system.

In general, many failures in a row is suspicious behavior, and to proactively protect the system, moderation will be blocked for users who reach a Silver balance of -1000, or for users who are wrong on 90 of their last 100 votes.

{% hint style="info" %}
To remove such a block, a user would need to deposit 20,000 Silver ($20), but since this cannot be done through moderation as it will be blocked, the only way to do so is to buy Silver with Gold. The amount of Silver that remains after the negative balance has been covered can be used to level up, for example.
{% endhint %}

Making voting mandatory when there are penalties for wrong votes will put a lot of stress on the moderators. So there should be a way for them to bypass certain topics. However, such a bypass should not be infinitely free, otherwise the idea of a system-assigned topic fails, since users can loop through all topics until they get to the one they want.

In Questfall, a moderator can bypass 10 votes per day for free, and after that, the cost of bypassing increases by 1 Silver each time. The 11th bypass will cost 1 Silver, the 15th will cost 5 Silver, and so on.
