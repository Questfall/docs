---
icon: feather-pointed
---

# Authoring

The number of mining points users receive as a basic reward for a given quest is based on the quest author's reputation, which is simply a moving average of the community ratings of that author's quests.

In other words, the higher the ratings of the author's quests, the higher his reputation, and the more mining points will be used to reward his future quests.

{% hint style="info" %}
In order to prevent malicious authors from abusing the rating system, votes are weighted differently depending on the user level. Read more in the [Ratings](broken-reference) article.
{% endhint %}

This way, authors with a higher reputation will create more rewarding quests, which will motivate users to complete them. And since the author's mining power is represented by the number of quests users complete in a week or season, an author's reward is directly affected by his reputation.

This approach makes quest quality the cornerstone of the system, as the most profitable strategy for authors is to create fun, educational or entertaining quests that are appreciated by the community, while users are motivated to complete quests created by the most diligent authors.

### Seasons

Each week, 16% of the total weekly issue of QFT goes to the **Seasonal Reward Pool**, and **4.8%** of this will be distributed as a reward to the most dedicated authors.

At the end of a **Season**, accumulated QFT reward is offered to a handful of authors valued by the community and those dedicated to perfecting their craft of quest creation. The authors who have collected the most author points during the 3-month long season will receive a reward at the end of the season.

As the reward accumulates over time, almost 60% of the average weekly token issue is rewarded to the most successful authors.

***

## Promotion

Authors can **promote** their quests by burning **Silver**. The more Silver is burned, the higher the base reward of a quest is, and the more visible and attractive it is to users.

**Silver** can be acquired through **Moderation** or by buying it with **Gold**.

By burning Gold the user receives 10 times the amount of Silver. For example, If 100 Gold is burned the user receives 1000 Silver.

{% hint style="info" %}
For convenience, authors can use QFT and Gold directly for promotion so that the burning of it to Silver happens automatically.
{% endhint %}

***

### Promotion Benefits

Promoting quests benefits the author, miners, and the whole system:

* **More Visibility** – The more Silver is burned for promoting a quest the higher it will appear on the quest feed. This results in more users seeing and completing the quest.
* **Reward for Miners** – The mining point reward of a quest increases as more Silver is used for promoting it. This makes the quest more attractive to miners which leads to more completions and higher ratings.
* **Author Reward** - As the weekly QFT reward for authors is calculated based on the amount of completions on the author’s quests, promoting quests directly contributes for a higher weekly reward.
* **QFT Burning** – Quest promotion contributes to deflation within the system as QFT and Gold are constantly burned to Silver for promotion.

***

### Reputation as Multiplier

The **Author’s Reputation** works as a **Multiplier** for the promotional weight of the burned Silver. The higher the reputation the less Silver needs to be burned for reaching the same promotional potential. To increase the reputation the authors are motivated to create high-quality quests valued by the community.

Each Author starts with the reputation of 1. This means that the Silver cost ratio for promotion is 1/1, if you burn 1000 Silver its effect on promotion is 1000 points. As the author’s reputation gets higher the multiplier increases and real promotional cost decreases, for example, if the author's reputation is 5, 1000 silver results in 5000 points.

The author’s reputation stays in 1 until there are enough completions on the author’s quests. On the launch of Questfall, the author must reach 10k weighed votes to have their reputation adjusted. This number will increase with the platform's growth as it is automatically adjusted by the accepted votes given by users throughout the week.

***

### Cost of Promotion

The author can choose the amount of Silver they want to burn to promote their quest. Each quest has a minimum promotional amount of 1000 Silver to prevent system abuse. There is no upper limit to how much Silver can be burned for promotion as the maximum base mining point reward of 1000 will be an unreachable limit.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
The Reputation that is additionally applied
{% endtab %}
{% endtabs %}

The author can choose the uptime for a quest from 1 to 30 days. The longer the duration of a quest the higher the total cost of the promotion. However, each subsequent day of the promotion becomes cheaper by 10%, so the longer the promotions the better the price for a single day of promotional time.

The position of the promoted quest on the global quest feed is based on the base mining points in a quest resulting from the amount of burned Silver. The higher the base mining points of a quest the higher it will be on the global quest feed and the more mining points users receive as a reward by completing the quest. The duration of a quest does not affect the quests position in the quest feed.

Within the promotion, the author can see the amount of the mining point reward within the quest and what placement in the global quest feed they will have with a chosen quest duration and burned Silver amount.

{% hint style="info" %}
This formula is used to calculate the initial price of mining points in Silver. This amount is then adjusted with the author's reputation multiplier to get the real Silver price of mining points for each user.

**x \* y = k**

* **x** - Amount of mining points (equal to 1000)
* **y** - Amount of Silver spent
* **k** - ?
{% endhint %}

***

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

***
