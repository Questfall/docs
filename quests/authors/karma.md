---
icon: heart
---

# Karma

One of the key attributes of any [Workspace](workspaces.md) is its Karma, which gives users confidence in the quests they choose to complete and, more importantly, provides an exponential discount on the [Quest Bounty](quest-bounty.md).

Karma can range from 0 for a new Workspace to 10 for a Workspace with an excellent history, and the only source of Karma is the quest ratings, also ranging from 0 to 10, that users must vote on when completing unrated quests.

When a new quest is published, it will initially have an unrated status. Then, the system randomly selects users and increases the Bounty for that unrated quest, making it much more visible in the feed to only those selected users. To finalize the completion of such an unrated quest, each user must rate it from 0 to 10.

{% hint style="info" %}
Similarly, Google collects initial statistics by showing new sites on the first page when random users search for keyword phrases.
{% endhint %}

Users are motivated to vote correctly because they are rewarded or penalized with [Mining Boost](../users/#mining-boost) depending on how far their rating estimate is from the average, which is based on league-based vote segmentation, similar to how [moderation consensus](../moderators/consensus.md) works.

The unrated quest will receive votes from users in different leagues, and the final rating will be calculated as a simple average of the league results.

<table><thead><tr><th width="121">League</th><th width="78" align="center">Votes</th><th width="97" align="center">Average</th></tr></thead><tbody><tr><td>League 0</td><td align="center">7</td><td align="center">6.7</td></tr><tr><td>League 1</td><td align="center">5</td><td align="center">7.1</td></tr><tr><td>League 2</td><td align="center">3</td><td align="center">7.5</td></tr><tr><td>League 3</td><td align="center">1</td><td align="center">7.0</td></tr><tr><td>Total</td><td align="center">16</td><td align="center">7.08</td></tr></tbody></table>

This league-based vote segmentation provides a solid defense, as no league can outvote others, and an attacker would need to have a majority of users in all leagues to manipulate quest ratings. More importantly, the votes are very diverse, and not many voters are needed to achieve valid results.

{% hint style="info" %}
The protection works reliably because users cannot choose unrated quests to complete, as such quests are assigned by the system. Thus, an attacker cannot synchronize voting from different accounts.
{% endhint %}

This approach also implies that there are certain requirements for voting diversity, and if they are met, the quest could be considered to be ranked by community consensus. For example, such requirements could be an increasing odd number of users for each league, starting at the top. One user from the top league, three users from the league below, five from the next lower league, and so on.

{% hint style="info" %}
Depending on user feedback and overall experience, these consensus requirements will be adjusted after the launch of Questfall.
{% endhint %}

In some cases, quests may not be able to meet the consensus requirements to be rated. For example, it may be a quest that no one wants to complete, or there may be too many new quests relative to the number of active users in the system.

But more importantly, it allows the system to know with certainty that if the community consensus has been reached, it can be considered valid. And if it is not, then either the quest was not interesting enough, or the Bounty was set as low as possible, while there were many spam quests in the system.

{% hint style="info" %}
The system will prioritize quests with a higher bounty in order to rate them.
{% endhint %}

In other words, quest ratings are a solid basis for calculating Karma. Therefore, Karma is built solely on quest ratings by consuming them using the 10% weighting.

{% hint style="info" %}
More specifically, Karma is updated when a new quest is rated according to the following formula:

$$Karma_n=0.9*Karma_{n-1}+0.1*QuestRating_n$$
{% endhint %}

As a result of this approach to Karma calculation, it is updated with each new rated quest and reacts quickly to changes in the quality of the author's quests.&#x20;

This also means that new authors only need to create 10 quests to get a fair estimate of their Karma and the corresponding Bounty discount, without having to invest much in the beginning.
