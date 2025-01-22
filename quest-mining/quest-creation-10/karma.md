---
icon: heart
---

# Karma

One of the key attributes of any [Author Space](workshop.md) is its Reputation, which gives users confidence when choosing quests to complete and, more importantly, provides a discount on the [Quest Bounty](quest-bounty.md).

Author Reputation can range from 0 for new Author Spaces to 10, and the only source of Reputation is the quest rating votes, also ranging from 0 to 10, that users must cast when completing a quest.

{% hint style="info" %}
Users are motivated to give honest quest ratings because they are rewarded or penalized with additional mining power depending on how far their estimate is from the average final rating. Learn more in [Mining Power](../quest-completion-40/mining-power.md).
{% endhint %}

Reputation is calculated based on league-based vote segmentation, similar to how [moderation consensus](../community-moderation/consensus.md) works, which prevents any kind of manipulation or abuse since it requires control over many accounts in all leagues.

To better understand how Reputation is calculated, let us look at a specific example. Consider an imaginary Author Space called Sphinx, which specializes in puzzles.

Upon creation, Sphinx will have zero Reputation, but after the first quest is posted, users who complete it will be forced to vote for its rating. Let's say there are four active leagues in Questfall, and the first quest received the following rating votes:

| League |   |   |
| ------ | - | - |
|        |   |   |
|        |   |   |
|        |   |   |















## Reputation

IMAGE OF AUTHOR REPUTATION

Each author in Questfall has a **Reputation Score** ranging from 1 to 10, which results from the **Ratings** users have given to the author's quests. The reputation score reflects the community's opinion about the general quality of the author's quests.

For the author, the reputation score works as a multiplier for the Silver price of promotion. The higher the reputation the cheaper it is to promote quests through burning Silver.

***

Each user rating on a quest influences the author's reputation based on:

* **The Rating** – What rating from 1-10 the user gives to the author's quest.
* **The Vote Weight** – Each vote is weighted differently based on the user’s level.

This results in a moving average type formula that considers all the votes given to the author through time. The closer the vote is to the current moment the higher influence it has on the Author's Reputation.

{% hint style="info" %}
The final author reputation score is calculated based on this formula:

**New reputation = (Prev Reputation \* x + Vote) / x**

**x** = Variable based on the total number of users and average user level.
{% endhint %}

***

## Ratings

The quality of the author's quest is reflected in the **Rating** users give to it and this incentivizes authors to focus on producing high-quality quests valued by the community.

To finalize the completion of a quest, each user must rate the quest from 1 to 10. The ratings are weighted by user level and will directly impact the author's **Reputation Score**.

{% hint style="info" %}
The weight of the users' vote increases linearly with the level. Each level increases the vote weight by one. For example, a level 30 user has a vote weight of 30.
{% endhint %}

To prevent users from making multiple accounts flooding high ratings on a self-made low-value quest, a certain number of votes and vote weight are needed for the voting to be valid.

***

### Average Rating

**IMAGE OF AVERAGE RATING CURVE**

To encourage the giving of fair ratings on a quest and to prevent rating manipulation, the user is incentivized to vote close to the **Average Rating**. Users gain or lose a small % of mining efficiency based on how close one voted to the average of all votes. The closer the user votes for the average, the more mining efficiency one gains, and the farther, the likelier it is to get the maximum mining efficiency penalty. If the user votes on the neutral zone the mining efficiency stays unchanged.

{% hint style="info" %}
With each quest voting the user can gain or lose up to 0.2% of mining efficiency.
{% endhint %}

The maximum mining efficiency bonus user can reach by voting is limited based on the level. With each level, the potential maximum mining efficiency bonus increases by 0.1%. Regardless of the level, there is no limit to the negative mining efficiency one can have by voting continuously out of the average.

{% hint style="info" %}
For example, level 40 users can have a maximum +4% mining efficiency bonus from voting.
{% endhint %}

### Reputation as Multiplier

The **Author’s Reputation** works as a **Multiplier** for the promotional weight of the burned Silver. The higher the reputation the less Silver needs to be burned for reaching the same promotional potential. To increase the reputation the authors are motivated to create high-quality quests valued by the community.

Each Author starts with the reputation of 1. This means that the Silver cost ratio for promotion is 1/1, if you burn 1000 Silver its effect on promotion is 1000 points. As the author’s reputation gets higher the multiplier increases and real promotional cost decreases, for example, if the author's reputation is 5, 1000 silver results in 5000 points.

The author’s reputation stays in 1 until there are enough completions on the author’s quests. On the launch of Questfall, the author must reach 10k weighed votes to have their reputation adjusted. This number will increase with the platform's growth as it is automatically adjusted by the accepted votes given by users throughout the week.
