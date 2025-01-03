---
icon: heart
---

# Author Reputation

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
