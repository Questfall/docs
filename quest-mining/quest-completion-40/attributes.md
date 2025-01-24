---
icon: chart-simple
---

# Attributes

However, there are other attributes that provide benefits in other areas:

* **Mining:** increases stamina reserve and its recovery rate, increases mining power;
* **Inventory**: increases the weight limit of stored items;
* **Crafting**: boosts the yield of Essence, gives an advantage when trading and obtaining Glyphs;
* **Trading**: reduces marketplace fee, gives advantage on Gold withdrawal, adds marketplace slots;
* **Luck**: increases chance of getting missing chest shards and other bonuses, adds loot box cards.

Because users can allocate the points they earn to any attribute, they can focus on certain areas and gain specific benefits in those areas, customizing a character to fit their individual mining strategy.

Of course, users can make mistakes as their characters develop, so when a user joins a new league, he can redistribute attribute points once for free. However, any subsequent redistribution within that league will cost <mark style="background-color:purple;">1000 \* League</mark> **Gold**.

{% hint style="info" %}
The Zero League is considered a tutorial and there is no cost to redistribute attribute points. In the First League, the cost of redistributing attribute points is 1000 Gold ($10), in the Second League it is 2000 ($20), and so on.
{% endhint %}





### Mining Efficiency

By increasing the personal **Mining Efficiency** bonus a user can receive more mining points from each completed quest. The base reward of a quest is multiplied by the mining efficiency % bonus the user has.

{% hint style="info" %}
For example, if the base reward for the quest is 50 mining points and the user has 100% of mining bonus, they receive 100 mining points from completing the quest.
{% endhint %}

Constant mining efficiency bonus can be increased by clothing, elixirs, rating quests, and adding points to the mining attribute. Spells and elixirs can give mining bonuses for a limited time or to a specific quest.

The **Mining Score** increases for each user individually. Although all users who complete the same quest receive the same number of **Mining Points** as a base reward, the total number of received **Mining Points** comes after it is multiplied by the mining efficiency. This efficiency multiplier starts at <mark style="background-color:purple;">1.01</mark>, and increases by <mark style="background-color:purple;">0.01</mark> for each point added to the **Mining** attribute.

{% hint style="info" %}
For example, if a user receives **10 Mining Points** for completing a quest and has a **Mining** attribute of 30, he will actually increase his **Mining Score** by: 10+10x0.01x30) = 13.
{% endhint %}

As well as increasing the **Mining** attribute, the mining efficiency can also be increased by using clothing and elixirs with the appropriate effects.



To encourage the giving of fair ratings on a quest and to prevent rating manipulation, the user is incentivized to vote close to the **Average Rating**. Users gain or lose a small % of mining efficiency based on how close one voted to the average of all votes. The closer the user votes for the average, the more mining efficiency one gains, and the farther, the likelier it is to get the maximum mining efficiency penalty. If the user votes on the neutral zone the mining efficiency stays unchanged.

{% hint style="info" %}
With each quest voting the user can gain or lose up to 0.2% of mining efficiency.
{% endhint %}

The maximum mining efficiency bonus user can reach by voting is limited based on the level. With each level, the potential maximum mining efficiency bonus increases by 0.1%. Regardless of the level, there is no limit to the negative mining efficiency one can have by voting continuously out of the average.

{% hint style="info" %}
For example, level 40 users can have a maximum +4% mining efficiency bonus from voting.
{% endhint %}

### Stamina Reserve

Stamina is consumed when a user completes a quest and is automatically restored over time. It acts as a rate limiter, preventing bots from completing thousands of quests per second and overloading the Questfall server.

In addition to its technical utility, stamina is part of an RPG system because its consumption is directly affected by the total weight of the clothing worn. The heavier the clothing, the more stamina is consumed. This forces the user to invest points in the **Mining** attribute, as the clothing becomes heavier as the user progresses through the levels.

A first-level character starts with a **Stamina Reserve** of <mark style="background-color:purple;">1000</mark>, and each point in the **Mining** attribute increases the **Stamina Reserve** linearly by <mark style="background-color:purple;">1000</mark>. If no clothing is equipped, each quest will consume <mark style="background-color:purple;">10</mark> stamina and each vote while moderating will consume <mark style="background-color:purple;">1</mark> stamina. However, each gram of equipped clothing increases the stamina required to complete a quest by <mark style="background-color:purple;">0.05</mark> and the stamina required to vote in a moderation by <mark style="background-color:purple;">0.005</mark>.

{% hint style="info" %}
If the equipped clothing weighs 5 kg, the amount of stamina consumed per quest will be: 10+5x1000x0.05=260. Per moderation vote: 1+5x1000x0.005=26.
{% endhint %}

Another crucial parameter that affects a character's **Stamina Reserve** is the speed of its recovery. Initially, when the **Regeneration** attribute equals 1, the character restores <mark style="background-color:purple;">0.2</mark> stamina per minute. With each additional point in **Regeneration**, the amount of stamina restored per minute increases by <mark style="background-color:purple;">0.2</mark>.

{% hint style="info" %}
When the Regeneration attribute is 20, a character recovers 4 stamina per minute.
{% endhint %}

As in most other RPGs, stamina can be restored instantly at any time with the Stamina Potion, which can be obtained from the loot box or purchased with **Gold** from other users in the marketplace.



### Stored Items

Users can store items in the character's inventory, from which items can be:

* equipped (Clothing),
* deployed (Warriors),
* healed (Warriors),
* consumed (Potions, Elixirs),
* learned (Spellbooks),
* leveled up (Clothing, Warriors),
* evolved to next rarity tier (Clothing, Spellbooks, Warriors),
* disassembled for essence (any item),
* sold for **Gold** on the in-game marketplace (low-rarity items: F, E, D),
* withdrawn as NFT (high-rarity items: C, B, A).

Inventory can hold any number of items, but there is a weight limit. If a user's inventory is overloaded, the user will not be able to perform actions that result in the acquisition of new items, such as opening loot boxes, making purchases from the in-game marketplace, or bringing in an item from NFT.

The weight limit of the newly created character is <mark style="background-color:purple;">1</mark> kg, and it can be further increased by adding more attribute points to the **Inventory** attribute - each point increases the limit by <mark style="background-color:purple;">1</mark> kg.

{% hint style="info" %}
For example, if the **Inventory** attribute has 15 points, the weight limit will be 15 kg.
{% endhint %}

The weight of each item is directly affected by its rarity and level, and can be calculated using the following formula: <mark style="background-color:purple;">10 \* Level \* Rarity</mark>.

{% hint style="info" %}
For example, a level 1 common (F) item weighs 10 grams. While the same item of level 10 will weight 100 grams. The 20 level Epic (C) item will weight 800 grams.
{% endhint %}
