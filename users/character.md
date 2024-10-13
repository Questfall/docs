---
icon: person
---

# Character

In Questfall, as in most RPGs, each user is represented by a character, which is the user's avatar on the platform and through which a user performs various tasks: quest mining, completion moderation, warfare, magic, crafting, and trading.

The system is designed to balance different character traits and system resources, requiring users to carefully manage their character's development according to their individual strategy. Here's an in-depth look at the key components that make up a character.

#### Character Level

One of the most important character parameters is level. While users start as a level 1 character, they can level up by acquiring **XP** either through proper moderation (by voting with the majority) or by paying directly with **Gold** into the system.

A character's level is defined by two numbers: the level itself and the amount of **XP** required to advance to the next level. Although the level cannot be lowered, the amount of **XP** required to reach the next level can be increased if the user is penalized for going against the majority.&#x20;

{% hint style="info" %}
For example, the **XP** required for the next level increases if the user does not vote with the majority on a particular quest completion, or if the user reports a quest that the community agrees is appropriate, and so on.
{% endhint %}

Leveling up provides several benefits to a user. As the level increases, so does the weight of a user's vote in community moderation decisions. Level also determines the league in which the user is placed, meaning that a higher-level user can mine with less competition. Finally, with each level, a user receives <mark style="background-color:purple;">2 attribute points</mark> that can be used to upgrade the character.

#### Character Attributes

Attribute points, which are gained by levelling up, can be used to improve a character's attributes:

* **Mining:** increases the **Stamina Reserve**, adds to **Mining Efficiency**;
* **Regeneration**: increases the recovery rate of **Stamina Reserve**;
* **Inventory**: increases the weight limit of **Stored Items**;
* **Magic**: increases the **Mana Reserve**, adds **Spell Slots**;
* **Recharge**: increases the recharge rate of **Mana Reserve**;
* **Crafting**: reduces essence consumption for crafting, adds **Marketplace Slots**;
* **Warfare**: reduces mana consumption for warrior moves, adds **Warrior Slots**;
* **Luck**: increases **Bonus Chances**, adds lootbox cards.

Because users can allocate the points they earn to any attribute, they can focus on certain areas and gain specific benefits in those areas, customizing a character to fit their individual mining strategy.

Of course, users can make mistakes as their characters develop, so when a user joins a new league, he can redistribute attribute points once for free. However, any subsequent redistribution within that league will cost  <mark style="background-color:purple;">100 \* LeagueCount</mark>  **Gold**.

#### Stored Items

Users can store items in the character's inventory, from which items can be:

* equipped (clothing),&#x20;
* engaged (warriors),
* healed (warriors),
* consumed (potions, elixirs),&#x20;
* learned (spellbooks),
* leveled up (clothing, warriors),
* evolved to next rarity tier (clothing, spellbooks, warriors),&#x20;
* disassembled for essence (any item),&#x20;
* sold for Gold on the in-game marketplace (potions and low-rarity items: F, E, D),
* withdrawn as NFT (high-rarity items: C, B, A).

Inventory can hold any number of items, but there is a weight limit. If a user's inventory is overloaded, the user will not be able to perform actions that result in the acquisition of new items, such as opening loot boxes, making purchases from the in-game marketplace, or bringing in an item from NFT.

The weight limit of the newly created character is <mark style="background-color:purple;">10 kg</mark> , and it can be further increased by adding more attribute points to the **Inventory** attribute - each point increases the limit by <mark style="background-color:purple;">10%</mark> .

#### Clothing Slots

Clothing items are the primary means by which users can improve their characters through the various effects that items contain, from increasing the **Mining Boost** to improving the **Essence Rate**. The number of **Clothing Slots** is limited to six for all users and cannot be increased:

* Head (helmets, hoods, hats);
* Chest (robes, tunics, shirts);
* Leg (pants, trousers);
* Feet (boots, shoes);
* Hand (gloves, gauntlets);
* Back (capes, cloaks, mantles).&#x20;

Although clothing items can be of different levels and rarities, there are no restrictions on equipping them other than type - obviously boots can't be equipped in the hand slot.

However, if the level of the item is higher than the **Character Level**, it will be downgraded (while equipped) to the **Character Level**. Additionally, stamina consumption rises as the total weight of equipped items increases. Finally, each item consumes **Essence** at the moment of equipping - the heavier the item, the more **Essence** is consumed ( <mark style="background-color:purple;">**1 Essence**</mark> <mark style="background-color:purple;"></mark><mark style="background-color:purple;">per 1g</mark> ).

#### Activity Score

The **Activity Score** is used to distribute the rewards for quest mining. It can be thought of as a mining power that resets every reward period (one week for regular mining and three months for seasonal mining). Throughout the period, the **Activity Score** can only increase.&#x20;

Users can gain **Activity Score** by earning **ACT** points, either by completing quests or by participating in warfare. When a user earns **ACT** points, they are amplified by the **Mining Efficiency** and the result is added to the current **Activity Score**.

#### Mining Efficiency

Although all users who complete the same quest receive the same number of **ACT** points, the **Activity Score** is actually increased for each of them individually. The **ACT** points that a user receives play the role of a minimum base, which is multiplied by the **Mining Efficiency**. It starts at 1, and incrementally increases by <mark style="background-color:purple;">10%</mark> for each point added to the **Mining** attribute.

{% hint style="info" %}
For example, if a user receives **10 ACT** points for completing a quest and has a **Mining** attribute of 5 (one initial point and four additional attribute points), he will actually increase his **Activity Score** by: $$10*1.1^{4}=14.64$$.
{% endhint %}

As well as increasing the **Mining** attribute, the **Mining Efficiency** can also be increased by using clothing with the appropriate effects and elixirs.

#### Stamina Reserve

Stamina is consumed when a user completes a quest and is automatically restored over time. It acts as a rate limiter, preventing bots from completing thousands of quests per second and overloading the Questfall server.

In addition to its technical utility, stamina is part of an RPG system because its consumption is directly affected by the total weight of the clothing worn. The heavier the clothing, the more stamina is consumed. This forces the user to invest points in the **Mining** attribute, as the clothing becomes heavier as the user progresses through the levels.

A first-level character starts with a **Stamina Reserve** of <mark style="background-color:purple;">100</mark> , and each point in the **Mining** attribute increases the **Stamina Reserve** linearly by <mark style="background-color:purple;">100</mark> . If no clothing is equipped, each quest will consume <mark style="background-color:purple;">1 stamina</mark> . However, each additional kilogram of equipped clothing will incrementally increase the stamina consumption <mark style="background-color:purple;">by 1</mark> .

{% hint style="info" %}
The first kilogram adds 1 to stamina consumption, the second kilogram adds 2, and so on. This means that if the equipped clothing weighs 5 kg, each quest will consume 1 + 1 + 2 + 3 + 4 + 5 = 16 stamina.
{% endhint %}

Another crucial parameter that affects a character's **Stamina Reserve** is the speed of its recovery. Initially, when the **Regeneration** attribute equals 1, the character restores <mark style="background-color:purple;">10 stamina per hour</mark> . With each additional point in **Regeneration**, the amount of stamina restored per hour incrementally increases <mark style="background-color:purple;">by 10%</mark> .

{% hint style="info" %}
When the Regeneration attribute is 20, a character recovers $$10*1.1^{19}=61.16$$stamina per hour (or more than 1 stamina per minute).
{% endhint %}

#### Mana Reserve

#### Spell Slots

#### Marketplace Slots

#### Warriors Slots

#### Gold Balance

#### Essence Balance

#### Bonus Chances

