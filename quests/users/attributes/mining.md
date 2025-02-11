---
icon: pickaxe
---

# Mining

The Mining attribute increases parameters that make it easier to earn from completing quests.

It increases Mining Power, which boosts the rewards for completed quests, and Stamina Reserve, which allows a user to complete more quests in one session.

***

### Mining Power

Mining Power is defined as a percentage and increases the reward for each quest completed, as it is used as one of the multipliers for the [Quest Bounty](../../authors/quest-bounty.md) set by the author. For example, if the author has set the Bounty to 100 and the user has 25% Mining Power, then the quest reward for that particular user will be 125 Mining Points.

{% hint style="info" %}
This does not take into account the [Mining Boost](../#mining-boost) parameter that can be gained by properly voting for new quest ratings.
{% endhint %}

Mining Power starts at 0% and increases by 1% with each point of the Mining attribute. So if a user invests 40 points in Mining, his Mining Power will be 40%. In addition to the Mining attribute, Mining Power can also be increased by equipping [clothing](../items/clothing.md) with the appropriate effects.

***

### Stamina Reserve

Stamina is consumed when a user completes a quest and is automatically restored over time. It acts as a rate limiter, preventing bots from completing thousands of quests per second and overloading the Questfall server.

In addition to its technical utility, stamina is part of an RPG system. A first-level character starts with a Stamina Reserve of 1000, and each point in the Mining attribute increases the Stamina Reserve linearly by 1000.

{% hint style="info" %}
The rate at which stamina regenerates over time is determined by the [Recovery](recovery.md) attribute.
{% endhint %}

Stamina consumption is directly affected by the total weight of the clothing worn. The heavier the clothing, the more stamina is consumed.&#x20;

When not equipped, each quest consumes 10 stamina and each gram of equipped clothing increases the stamina required to complete a quest by 0.05. This forces the user to invest points in the Mining attribute, as the clothing becomes heavier upon leveling up.

{% hint style="info" %}
For example, if the equipped clothing weighs 5 kg, the amount of stamina consumed per quest will be: \
$$Stamina_{charged}=10+5000*0.05=260$$.
{% endhint %}
