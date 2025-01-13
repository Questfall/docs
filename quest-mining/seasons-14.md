---
icon: calendar-clock
---

# Seasons (14%)

While the concept of mining is fair enough, new users will find themselves in a weak position as Questfall becomes more popular, because dedicated veterans will have a huge advantage over newcomers, either through user level or author reputation.

In order to allow new users to compete with existing veterans on an equal footing, Questfall implements seasons, each of which lasts twelve weeks, or an average of three months. During the season, 14% of each weekly issue of QFT goes into the seasonal reward pool.

{% hint style="info" %}
Approximately 168% of the average weekly issue is collected in this way over the course of a season.
{% endhint %}

At the end of each season, the accumulated reward pool is divided between the users who complete quests and the authors who create them. The split between users and authors is the same as the weekly rewards: 80% goes to users and 20% goes to authors.&#x20;

However, the way in which the rewards are divided between these two groups is different from how it works for weekly rewards. The seasonal reward distribution is based on the leaderboards, one for users and one for authors.

The user leaderboard is based on the total base reward received. In other words, this leaderboard is created without taking into account the individual mining power of the users. This means that the users who complete the most quests will receive the most rewards.

The author leaderboard is based on the average rating of the quests created during the season. However, authors will have to create at least 12 quests per season to be eligible for the leaderboard. This way, popular authors will not have an edge, and at the same time, authors will be motivated to create at least one quest per week.

The reward distribution mechanism is the same for both users and authors - the top 10% of each leaderboard is eligible for rewards, while the remaining 90% is not.

{% hint style="info" %}
This is necessary for protection against Sybil attacks.
{% endhint %}

Rewards are distributed linearly to these 10% of places on each leaderboard, so the lowest rewarded place gets one share, the next place gets two shares, and so on up to the 1st place on the leaderboard.

For example, if there are 1000 users in the leaderboard, the top 100 will be rewarded in such a way that the 1st user will get x100 more reward than the 100th, while the 101st and below will get no reward. If there are 2000 users, the 1st user will get x200 more reward than the 200th. And so on.

{% hint style="info" %}
This mechanic applies to each leaderboard individually, distributing each leaderboard's share of the seasonal reward pool.
{% endhint %}

As a result, the concept of seasons adds another dimension to the competition in the long run, allowing the most diligent and dedicated users to earn regardless of their previous history in Questfall.

This approach also allows for seasonal collaborations with other projects, which not only brings additional rewards to users, but also encourages QFT burning, as to become a Questfall Season Partner, a third-party team must burn QFT.
