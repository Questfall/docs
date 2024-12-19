---
icon: heart
---

# Reputation

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

**New reputation = (Prev Reputation * x + Vote) / x**

**x** = Variable based on the total number of users and average user level.
{% endhint %}



***




