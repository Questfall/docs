---
icon: clover
---

# Luck

The Luck attribute increases the number of loot boxes a user receives for free, increases the amount of items gained from the loot box, and also increases the chances of getting various bonuses.

***

### **Chest Shards**

Users earn Chest Shards for each quest they complete, and a free loot box is awarded every time they collect a full set of shards. The Luck attribute increases the chance of obtaining the missing shard needed to complete the set.

Initially, a first-level character receives a random Chest Shard from an imaginary urn, where there is 32 units of each missing shard and 61 units of each collected shard. As a result, the odds of getting a particular collected shard are almost 2 times greater than the odds of getting a particular missing shard.

However, for each point of Luck, the number of units of missing shards increases by 2, while the number of units of collected shards increases by 1. As a result, the chance of getting a particular missing shard relative to the chance of getting a particular collected shard increases from 1:2 to 2:1 with each additional point of Luck.

{% hint style="info" %}
For example, if there is a set of 5 shards: A,B,C,D,E, and a user already has shards of different amounts of A, B, and C, then with a Luck of 10 the next shard will be randomly selected from the imaginary urn containing Ax70, Bx70, Cx70, Dx50, Ex50. With a Luck of 50, the imaginary urn will contain Ax110, Bx110, Cx110, Dx130, Ex130.
{% endhint %}

This method of counting chances does not take into account the different number of collected and missing shards. Even if the chance of getting the single missing shard is maximum and almost 2 times higher than the chance of getting any of the 9 collected shards, it is still more likely to get one of the collected shards (9 chances out of 11) than the missing shard (2 chances out of 11).

***

### **Loot Box Turns**

By default, a [loot box](../rpg-items/#loot-boxes) provides one turn, with the chance of receiving an item depending on its rarity. However, users can increase their chances of receiving more items by investing stat points in their Luck attribute and increasing the number of turns they take when opening loot boxes.

All users have one turn by default, to get a second turn a user must reach 10 Luck. And for each subsequent turn, the Luck requirement increases by 5. So for the third turn, Luck should be 25, for the fourth, 45, and so on.

{% hint style="info" %}
The Luck attribute determines the number of turns:\
$$Turns=floor(\frac{-1+\sqrt{9+\frac{8}{5}*Luck}}{2})$$
{% endhint %}

This way, the Luck attribute does not directly affect the chance of getting rarer items, it just increases the chance of getting more items from a single loot box. And that actually makes it more likely to get a rarer item because there is more room for chance to work.

As a result, the maximum number of items a user can potentially receive from a single loot box is equal to the number of turns allowed by their Luck attribute. However, the actual number of items received will depend on the user's choices during the opening process or the user's actual fortune.

***

### Bonus Chances

Many activities in Questfall offer a chance to receive bonuses or reduce costs, such as:

* Earning 2x Essence when scrapping an item;
* Receiving 2 Chest Shards as a quest reward;
* Earning 2x Mining Points as a quest reward;
* Spending only half the Essence to level up or evolve an item;
* Using only half the stamina for a quest;
* And many more...

Initially, the chance to win a bonus is 11 in 1010. Each point of Luck increases the chance of winning by 1 and the chance of losing by 10. Although it seems contradictory, in fact, with each point of Luck the probability of getting a bonus will increase from initial \~1% to unattainable maximum of 10%.

{% hint style="info" %}
For example, if Luck is 10 the chances of getting the bonus will be 20/1100=1.8%, while with Luck 50 the chance will raise to: 60/1500=4%.
{% endhint %}
