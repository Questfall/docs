---
icon: coins
---

# Rewards

There is no way to protect quest completion from multiple accounts and bots. For example, a user could register several accounts and use a bot to clone the completion of a quest with a common answer on all of them.

In Questfall, to protect legitimate miners from such abuse and to keep mining fair, the total weekly reward pool, made up of 40% of the weekly [QFT](../../assets/questfall-tokens-qft.md) issue, is divided equally among the [leagues](leagues.md) that had at least one active miner during the week.

{% hint style="info" %}
An additional 11.2% of weekly QFT issue is used for [seasonal rewards](../seasons-14.md). Overall, more than half (51.2%) of QFT issuance is used to reward quest completion.
{% endhint %}

For example, let's say 25,000 QFTs are issued at the end of the week and there are 5 active leagues in the system. In this case, the total reward pool for miners will be 10,000 QFTs and each of the leagues will receive 2,000 QFTs to reward users based on their share of the league's total Mining Score.

{% hint style="info" %}
The league's Mining Score is the sum of its members' scores: \
$$MiningScore_{league}=\sum_{}^{}MiningScore_{user_i}$$

The user's Mining Score is the total number of Mining Points:$$MiningScore_{user}=\sum_{}^{}MiningPoints_{quest_i}$$\

{% endhint %}

<table><thead><tr><th width="130">League</th><th width="129" align="center">Reward Pool</th></tr></thead><tbody><tr><td>League I</td><td align="center">2,000 QFT</td></tr><tr><td>League II</td><td align="center">2,000 QFT</td></tr><tr><td>League III</td><td align="center">2,000 QFT</td></tr><tr><td>League IV</td><td align="center">2,000 QFT</td></tr><tr><td>League V</td><td align="center">2,000 QFT</td></tr></tbody></table>

Let's say Alice is a member of League III and her individual Mining Score is 5,000 while the league's total Mining Score is 50,000. In this case, Alice will receive one-tenth of the reward pool, or 200 QFT.

{% hint style="info" %}
The user reward is calculated according to the following formula:\
$$QFT_{user}=\frac{0.4*QFT_{week}}{Leagues}*\frac{MiningScore_{user}}{MiningScore_{league}}$$
{% endhint %}

As a result, this approach to rewarding users for completing quests, while allowing them to try to cheat the system with multiple accounts, is a losing strategy because there are two factors that determine the final reward: the league and the Mining Score. And while gaining Mining Score can be automated, level and league progression cannot.

Therefore, malicious actors will not be able to get through the Hall to Leagues for free - they will have to spend either money or effort. This provides a solid defense against Sybil attacks and makes the rewards in Questfall as fair as possible.
