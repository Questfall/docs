---
icon: coins
---

# Rewards

There is no way to protect quest completion from multiple accounts and bots. For example, a user could register several accounts and use a bot to clone the completion of a quest with a common answer on all of them.

In Questfall, to protect legitimate miners from such abuse and to keep mining fair, the total weekly reward pool, made up of 40% of the weekly [QFT](../../assets/questfall-tokens-qft.md) issue, is divided equally among the [leagues](leagues.md) that had at least one active miner during the week.

{% hint style="info" %}
In Questfall, an additional 11.2% of weekly QFT issue is used for [seasonal rewards](../seasons-14.md). Overall, more than half (51.2%) of QFT issuance is used to reward quest completion.
{% endhint %}

For example, let's say 25,000 QFTs are issued at the end of the week and there are 5 active leagues in the system. In this case, the total reward pool for miners will be 10,000 QFTs and each of the leagues will receive 2,000 QFTs to reward users based on their share of the league's total Mining Score.

{% hint style="info" %}
The league's Mining Score is simply the sum of its members' individual Mining Scores:$$MiningScore_{league}=\sum_{n=0}^{users}MiningScore_{user_n}$$
{% endhint %}

<table><thead><tr><th width="130">League</th><th width="129" align="center">Reward Pool</th></tr></thead><tbody><tr><td>League I</td><td align="center">2,000 QFT</td></tr><tr><td>League II</td><td align="center">2,000 QFT</td></tr><tr><td>League III</td><td align="center">2,000 QFT</td></tr><tr><td>League IV</td><td align="center">2,000 QFT</td></tr><tr><td>League V</td><td align="center">2,000 QFT</td></tr></tbody></table>

For example, if Alice is a member of League III and her individual Mining Score is 5,000 while the league's total Mining Score is 50,000, she will receive one-tenth of the reward pool, or 200 QFT.

{% hint style="info" %}
The user reward is calculated according to the following formula:\
$$RewardUser=RewardLeague*\frac{MiningScore_{user}}{MiningScore_{league}}$$
{% endhint %}

### Individual Mining Score

[Mining Points](./) earned by a user during a week result in an individual Mining Score, which is reset at the end of each week after rewards are distributed.&#x20;

However, an individual user's Mining Score is not simply the sum of the Mining Points earned during the week. For better protection, it is calculated as the sum of the Mining Point exponents.

{% hint style="info" %}
Individual Mining Score is calculated as follows:\
$$MiningScore_{member}=\sum_{n=0}^{quests}MiningPoints_{quest_n}^{1.1}$$
{% endhint %}

This approach means that completing two quests with a [Bounty](../quest-creation-10/quest-bounty.md) of 50 will result in a higher Mining Score than completing one quest with a Bounty of 100. This simultaneously motivates miners to choose quests with the highest rewards and to complete as many quests as possible.
