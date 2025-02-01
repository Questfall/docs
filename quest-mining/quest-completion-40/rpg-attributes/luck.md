---
icon: clover
---

# Luck

increases chance of getting missing chest shards and other bonuses, adds loot box cards.

### **Chest Shards**

Upon each approved quest completion, users are rewarded with a random **Chest Shard** that does not add weight to their inventory. These shards, like puzzle pieces, make up the weekly set, which can contain a different number of shards from week to week (from 10 to 100).

Every time a user collects a full set of shards during a week, he receives a free loot box (the collected set of shards is burned). This way, a user can collect the set numerous times during a week, opening multiple loot boxes. At the end of the week, unused shards will be burned.

Thus, at any given moment, the shards are divided into two parts: shards that have already been collected in any quantity and shards that are still missing. The probability of getting collected shards and missing shards is different and is affected by the **Luck** attribute.

Initially, a first-level character receives a random **Chest Shard** from an imaginary urn, where there is <mark style="background-color:purple;">32</mark> units of each missing shard and <mark style="background-color:purple;">61</mark> units of each collected shard. As a result, the odds of getting a particular collected shard are almost 2 times greater than the odds of getting a particular missing shard.

However, for each point of **Luck**, the number of units of missing shards increases by <mark style="background-color:purple;">2</mark>, while the number of units of collected shards increases by <mark style="background-color:purple;">1</mark>. As a result, the chance of getting a particular missing shard relative to the chance of getting a particular collected shard increases from 1:2 to 2:1 with each additional point of **Luck**.

{% hint style="info" %}
For example, if there is a set of 5 shards: A,B,C,D,E, and a user already has shards of different amounts of A, B, and C, then with a **Luck** of 10 the next shard will be randomly selected from the imaginary urn containing Ax70, Bx70, Cx70, Dx50, Ex50. With a **Luck** of 50, the imaginary urn will contain Ax110, Bx110, Cx110, Dx130, Ex130.
{% endhint %}

This method of counting chances does not take into account the different number of collected and missing shards. Even if the chance of getting the single missing shard is maximum and almost 2 times higher than the chance of getting any of the 9 collected shards, it is still more likely to get one of the collected shards (9 chances out of 11) than the missing shard (2 chances out of 11).

***

### **Lootbox Cards**

Loot boxes are the primary source of all RPG items (such as Clothing, Potions, Elixirs, Spellbooks, and Warriors) in the system. They can be opened either by spending <mark style="background-color:purple;">100</mark> **Gold** or by collecting a full set of **Chest Shards**.

By default, a loot box provides one item, with the chance of receiving an item depending on its rarity.

Users can increase their chances of receiving more items by placing points in their **Luck** attribute. For every <mark style="background-color:purple;">10</mark> points of **Luck**, users will receive an additional card when they open a loot box, providing additional turns with the opportunity to receive more items.

{% hint style="info" %}
The **Luck** attribute does not directly affect the chance of getting rarer items, it only increases the chance of getting more items from a single loot box. However, this actually makes it more likely to get a rarer item because there is more room for chance to work.
{% endhint %}

The process of opening a loot box consists of several turns, based on the number of cards provided by the **Luck** attribute. Here is an example for the user with 30 **Luck** (3 extra cards):

* **Turn 1**: The user is dealt 4 cards face down and must blindly choose one. All four cards contain items, so the user is guaranteed to receive an item after the first turn.
* **Turn 2**: The user is dealt 4 more cards. One card is a "finish" card, which ends the opening process, while the remaining three are item cards, which give the user one more item and continue the opening into the next turn.
* **Turn 3**: The user is dealt another 4 cards. This time, 2 out of the 4 cards are finish cards. Choosing a finish card will end the opening, leaving the user with two items won in previous turns.
* **Turn 4**: The user is dealt 4 cards for the last time. Only 1 card contains an item, while the other 3 are finish cards. Since a hypothetical fifth turn would consist entirely of finish cards, this is the last turn. If the user selects a finish card, he will end the loot box opening with a total of 3 items. But if the user selects the item card, he will receive 4 items in total.

As a result, the maximum number of items a user can potentially receive from a single loot box is equal to the number of cards granted by their **Luck** attribute. However, the actual number of items obtained depends on the user's choices and actual luck throughout the opening process.

### Bonus Chances

Many activities in Questfall offer a chance to receive bonuses or reduce costs, such as:

* Earning 2x **Essence** when disassembling an item;
* Receiving 2 **Chest Shards** as a quest reward;
* Earning 2x **Mining Points** as a quest reward;
* Getting 2x chances to win when attacking on warfare map;
* Spending only half the **Essence** to level up or evolve an item;
* Spending only half the mana on a spell;
* Using only half the stamina for a quest;
* And many more...

Initially, the chance to win a bonus is <mark style="background-color:purple;">11</mark> in <mark style="background-color:purple;">1010</mark>. Each point of **Luck** increases the chance of winning by <mark style="background-color:purple;">1</mark> and the chance of losing by <mark style="background-color:purple;">10</mark>. Although it seems contradictory, in fact, with each point of **Luck** the probability of getting a bonus will increase from initial \~1% to unattainable maximum of 10%.

{% hint style="info" %}
For example, if **Luck** is 10 the chances of getting the bonus will be 20/1100=1.8%, while with **Luck** 50 the chance will raise to: 60/1500=4%.
{% endhint %}
