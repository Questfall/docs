---
icon: person
---

# Character

In Questfall, as in most RPGs, each user is represented by a character, which is the user's avatar on the platform and through which a user performs various tasks: quest mining, completion moderation, warfare, magic, crafting, and trading.

The system is designed to balance different character traits and system resources, requiring users to carefully manage their character's development according to their individual strategy. Here's an in-depth look at the key components that make up a character.

***

### Character Level

One of the most important character parameters is level. While users start as a level 1 character, they can level up by acquiring **XP** either through proper moderation (by voting with the majority) or by paying directly with **Gold** into the system.

A character's level is defined by two numbers: the level itself and the amount of **XP** required to advance to the next level. Although the level cannot be lowered, the amount of **XP** required to reach the next level can be increased if the user is penalized for going against the majority.&#x20;

{% hint style="info" %}
For example, the **XP** required for the next level increases if the user's vote is in the minority on a particular quest completion, or if the user reports a quest that the community agrees is appropriate, and so on.
{% endhint %}

Leveling up provides several benefits to a user. As the level increases, so does the weight of a user's vote in community moderation decisions. Level also determines the league in which the user is placed, meaning that a higher-level user can mine with less competition. Finally, with each level, a user receives <mark style="background-color:purple;">2</mark> attribute points that can be used to upgrade the character.

***

### Character Attributes

Attribute points, which are gained by levelling up, can be used to improve a character's attributes:

* **Mining:** increases the **Stamina Reserve**, adds to **Mining Efficiency**;
* **Regeneration**: increases the recovery rate of **Stamina Reserve**;
* **Inventory**: increases the weight limit of **Stored Items**;
* **Magic**: increases the **Mana Reserve**, adds **Spell Slots**;
* **Recharge**: increases the recharge rate of **Mana Reserve**;
* **Crafting**: increases the gain ratio of **Essence Balance**, adds **Marketplace Slots**;
* **Warfare**: adds **Warrior Slots**;
* **Luck**: increases the chances of getting missing **Chest Shards,** adds **Lootbox Cards**, increases **Bonus Chances**.

Because users can allocate the points they earn to any attribute, they can focus on certain areas and gain specific benefits in those areas, customizing a character to fit their individual mining strategy.

Of course, users can make mistakes as their characters develop, so when a user joins a new league, he can redistribute attribute points once for free. However, any subsequent redistribution within that league will cost <mark style="background-color:purple;">1000 \* LeagueCount</mark> **Gold**.

{% hint style="info" %}
The Zero League is considered a tutorial as there is no QFT reward for it. Accordingly, there is no cost to redistribute attribute points.
{% endhint %}

***

### Activity Score

The **Activity Score** is used to distribute the rewards for quest mining. It can be thought of as a mining power that resets every reward period (one week for regular mining and three months for seasonal mining). Throughout the period, the **Activity Score** can only increase.&#x20;

Although all users who complete the same quest receive the same number of **ACT** points, the **Activity Score** is actually increased for each of them individually. The **ACT** points that a user receives play the role of a minimum base, which is multiplied by the mining efficiency. This efficiency multiplier starts at <mark style="background-color:purple;">1.01</mark>, and increases by <mark style="background-color:purple;">0.01</mark> for each point added to the **Mining** attribute.

{% hint style="info" %}
For example, if a user receives **10 ACT** points for completing a quest and has a **Mining** attribute of 30, he will actually increase his **Activity Score** by: 10+10x0.01x30) = 13.
{% endhint %}

As well as increasing the **Mining** attribute, the mining efficiency can also be increased by using clothing and elixirs with the appropriate effects .

***

### Stored Items

Users can store items in the character's inventory, from which items can be:

* equipped (Clothing),&#x20;
* deployed (Warriors),
* healed (Warriors),
* consumed (Potions, Elixirs),&#x20;
* learned (Spellbooks),
* leveled up (Clothing, Warriors),
* evolved to next rarity tier (Clothing, Spellbooks, Warriors),&#x20;
* disassembled for essence (any item),&#x20;
* sold for **Gold** on the in-game marketplace (low-rarity items: F, E, D),
* withdrawn as NFT (high-rarity items: C, B, A).

Inventory can hold any number of items, but there is a weight limit. If a user's inventory is overloaded, the user will not be able to perform actions that result in the acquisition of new items, such as opening loot boxes, making purchases from the in-game marketplace, or bringing in an item from NFT.

The weight limit of the newly created character is <mark style="background-color:purple;">1</mark> kg, and it can be further increased by adding more attribute points to the **Inventory** attribute - each point increases the limit by <mark style="background-color:purple;">1</mark> kg.

{% hint style="info" %}
For example, if the **Inventory** attribute has 15 points, the weight limit will be 15 kg.
{% endhint %}

The weight of each item is directly affected by its rarity and level, and can be calculated using the following formula: $$Item (grams) = Level^{2}*Rarity$$.

{% hint style="info" %}
For example, a level 1 common (F) item weighs 1 grams. While the same item of level 10 will weight 100 grams. The 20 level Epic (C) item will weight 1.6 kg.
{% endhint %}

***

### Clothing Slots

Clothing items are the primary means by which users can improve their characters through the various effects that items contain, from increasing the **Mining Efficiency** to adding more **Spell Slots**. The number of **Clothing Slots** is limited to six for all users and cannot be increased:

* Head (helmets, hoods, hats);
* Chest (robes, tunics, shirts, vests);
* Leg (pants, trousers);
* Feet (boots, shoes);
* Hand (gloves, gauntlets);
* Back (capes, cloaks, mantles).&#x20;

Although clothing items can be of different levels and rarities, there are no restrictions on equipping them other than type (obviously boots can't be equipped in the hand slot).

However, if the level of the item is higher than the **Character Level**, it will be downgraded (while equipped) to the **Character Level**. Additionally, stamina consumption rises as the total weight of equipped items increases. Finally, each item consumes **Essence** at the moment of equipping - the heavier the item, the more **Essence** is consumed.

***

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

***

### Mana Reserve

Mana is used for magical actions such as casting spells or moving warriors around the battlefield. It recharges automatically over time or can be recharged instantly with Mana Potion.

Each spell requires a different amount of mana to cast, depending on the spell itself and its rarity, and each warrior requires a different amount of mana to move, depending on the rarity and level of the warrior.

A first-level character starts with a **Mana Reserve** of <mark style="background-color:purple;">1000</mark>, and each point in the **Magic** attribute increases the **Mana Reserve** linearly by <mark style="background-color:purple;">1000</mark>. Also initially, when the **Recharge** attribute equals 1, the character restores <mark style="background-color:purple;">1</mark> mana per minute. With each point added to the **Recharge**, attribute the amount of mana restored per minute increases by <mark style="background-color:purple;">1</mark> mana.

***

### Spell Slots

A user can have a limited number of active spells available for casting, determined by the **Magic** attribute. A first-level character starts with one **Spell Slot**, and each additional slot requires <mark style="background-color:purple;">10</mark> more **Magic** points than the previous one.

{% hint style="info" %}
The second slot unlocks at 10 **Magic** points, the third at 30, the fourth at 60, and so on.
{% endhint %}

***

### Warriors Slots

The number of **Warrior Slots** limits the count of warriors that can be active on the warfare map at any given moment. Defeated warriors are automatically moved to the inventory, but new warriors can be deployed immediately instead.&#x20;

A first-level character starts with <mark style="background-color:purple;">2</mark> **Warrior Slots**, and each additional point in the **Warfare** attribute adds <mark style="background-color:purple;">2</mark> more **Warrior Slots**.

***

### Marketplace Slots

There are a limited number of **Marketplace Slots** where a user can place items to sell for **Gold**, otherwise the marketplace could be used to overcome the limitations imposed by the inventory weight limit.

A first-level character starts with <mark style="background-color:purple;">3</mark> **Marketplace Slots**, and each subsequent **Marketplace Slot** requires another <mark style="background-color:purple;">5</mark> points of **Crafting**. In other words, additional **Marketplace Slots** will open when **Crafting** reaches 5, then at 10, 15, and so on.

***

### Gold Balance

Each character can have an unlimited amount of **Gold**, which does not add weight to the inventory. The **Gold Balance** can only be increased by burning **QFT** or selling low-rarity items on the marketplace.&#x20;

**Gold** can be spent on:&#x20;

* buying loot boxes;
* buying **XP** to level up without moderating;
* purchasing low-rarity items from other users in the marketplace;
* promoting quests by increasing the **ACT** reward;
* purchasing a portion of the QFT issue via auction.

***

### Essence Balance

Each character can have an unlimited amount of non-tradable **Essence**, which does not add weight to the inventory.&#x20;

**Essence** can only be gained by disassembling items, and the heavier the item, the more **Essence** it will contain. A first-level character can extract <mark style="background-color:purple;">0.1</mark> **Essence** per gram, but each additional point of **Crafting** increases the amount of **Essence** per gram by <mark style="background-color:purple;">0.1</mark>.

{% hint style="info" %}
While a user with a **Crafting** of 1 will receive 100 Essence for disassembling a 1 kg item, a user with a Crafting of 20 will receive 2000 **Essence** for the same item. And a user with a Crafting of 50 will receive 5000 **Essence**.
{% endhint %}

**Essence** is needed to level up items and evolve their rarity. The amount of Essence needed to be invested in the item can be calculated by the formula: $$Essence = 5*Level^{2}*Rarity$$. This approach allows to calculate any levelling or evolution of the item by subtracting the amount of Essence already invested in the item from the requirements for the final parameters.

{% hint style="info" %}
For example, a common (F) item requires 5x100x1=500 Essence to level up from level 1 to level 10. To level up this item another ten levels to level 20, it will require 5x400x1-500=1500 Essence. In order to evolve this level 20 item to uncommon rarity (E), the following amount of Essence is required: 5x400x2-2000=2000.
{% endhint %}

***

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

By default, a loot box provides one item, with the chance of receiving an item depending on its rarity.&#x20;

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

***

### Bonus Chances

Many activities in Questfall offer a chance to receive bonuses or reduce costs, such as:

* Earning 2x **Essence** when disassembling an item;
* Receiving 2 **Chest Shards** as a quest reward;
* Earning 2x **ACT** as a quest reward;
* Getting 2x chances to win when attacking on warfare map;
* Spending only half the **Essence** to level up or evolve an item;
* Spending only half the mana on a spell;
* Using only half the stamina for a quest;
* And many more...

Initially, the chance to win a bonus is <mark style="background-color:purple;">11</mark> in <mark style="background-color:purple;">1010</mark>. Each point of **Luck** increases the chance of winning by <mark style="background-color:purple;">1</mark> and the chance of losing by <mark style="background-color:purple;">10</mark>. Although it seems contradictory, in fact, with each point of **Luck** the probability of getting a bonus will increase from initial \~1% to unattainable maximum of 10%.

{% hint style="info" %}
For example, if **Luck** is 10 the chances of getting the bonus will be 20/1100=1.8%, while with **Luck** 50 the chance will raise to: 60/1500=4%.
{% endhint %}
