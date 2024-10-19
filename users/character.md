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
For example, the **XP** required for the next level increases if the user's vote is in the minority on a particular quest completion, or if the user reports a quest that the community agrees is appropriate, and so on.
{% endhint %}

Leveling up provides several benefits to a user. As the level increases, so does the weight of a user's vote in community moderation decisions. Level also determines the league in which the user is placed, meaning that a higher-level user can mine with less competition. Finally, with each level, a user receives <mark style="background-color:purple;">2 attribute points</mark> that can be used to upgrade the character.

#### Character Attributes

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

Of course, users can make mistakes as their characters develop, so when a user joins a new league, he can redistribute attribute points once for free. However, any subsequent redistribution within that league will cost  <mark style="background-color:purple;">100 \* LeagueCount</mark>  **Gold**.

#### Stored Items

Users can store items in the character's inventory, from which items can be:

* equipped (clothing),&#x20;
* deployed (warriors),
* healed (warriors),
* consumed (potions, elixirs),&#x20;
* learned (spellbooks),
* leveled up (clothing, warriors),
* evolved to next rarity tier (clothing, spellbooks, warriors),&#x20;
* disassembled for essence (any item),&#x20;
* sold for Gold on the in-game marketplace (low-rarity items: F, E, D),
* withdrawn as NFT (high-rarity items: C, B, A).

Inventory can hold any number of items, but there is a weight limit. If a user's inventory is overloaded, the user will not be able to perform actions that result in the acquisition of new items, such as opening loot boxes, making purchases from the in-game marketplace, or bringing in an item from NFT.

The weight limit of the newly created character is <mark style="background-color:purple;">10 kg</mark> , and it can be further increased by adding more attribute points to the **Inventory** attribute - each point incrementally increases the limit by <mark style="background-color:purple;">10%</mark> .

{% hint style="info" %}
For example, if the **Inventory** attribute has 15 points, the weight limit is calculated as follows: $$10*1.1^{14} = 38kg$$
{% endhint %}

#### Clothing Slots

Clothing items are the primary means by which users can improve their characters through the various effects that items contain, from increasing the **Mining Efficiency** to adding more **Spell Slots**. The number of **Clothing Slots** is limited to six for all users and cannot be increased:

* Head (helmets, hoods, hats);
* Chest (robes, tunics, shirts, vests);
* Leg (pants, trousers);
* Feet (boots, shoes);
* Hand (gloves, gauntlets);
* Back (capes, cloaks, mantles).&#x20;

Although clothing items can be of different levels and rarities, there are no restrictions on equipping them other than type (obviously boots can't be equipped in the hand slot).

However, if the level of the item is higher than the **Character Level**, it will be downgraded (while equipped) to the **Character Level**. Additionally, stamina consumption rises as the total weight of equipped items increases. Finally, each item consumes **Essence** at the moment of equipping - the heavier the item, the more **Essence** is consumed.

#### Activity Score

The **Activity Score** is used to distribute the rewards for quest mining. It can be thought of as a mining power that resets every reward period (one week for regular mining and three months for seasonal mining). Throughout the period, the **Activity Score** can only increase.&#x20;

Users can gain **Activity Score** by earning **ACT** points, either by completing quests or by participating in warfare. When a user earns **ACT** points, they are amplified by the **Mining Efficiency** and the result is added to the current **Activity Score**.

#### Mining Efficiency

Although all users who complete the same quest receive the same number of **ACT** points, the **Activity Score** is actually increased for each of them individually. The **ACT** points that a user receives play the role of a minimum base, which is multiplied by the **Mining Efficiency**. It starts at 1, and incrementally increases by <mark style="background-color:purple;">1%</mark> for each point added to the **Mining** attribute.

{% hint style="info" %}
For example, if a user receives **10 ACT** points for completing a quest and has a **Mining** attribute of 30, he will actually increase his **Activity Score** by: $$10*1.01^{29}=13.35$$.
{% endhint %}

As well as increasing the **Mining** attribute, the **Mining Efficiency** can also be increased by using clothing and elixirs with the appropriate effects .

#### Stamina Reserve

Stamina is consumed when a user completes a quest and is automatically restored over time. It acts as a rate limiter, preventing bots from completing thousands of quests per second and overloading the Questfall server.

In addition to its technical utility, stamina is part of an RPG system because its consumption is directly affected by the total weight of the clothing worn. The heavier the clothing, the more stamina is consumed. This forces the user to invest points in the **Mining** attribute, as the clothing becomes heavier as the user progresses through the levels.

A first-level character starts with a **Stamina Reserve** of <mark style="background-color:purple;">100</mark> , and each point in the **Mining** attribute increases the **Stamina Reserve** linearly by <mark style="background-color:purple;">100</mark> . If no clothing is equipped, each quest will consume <mark style="background-color:purple;">1 stamina</mark> . However, each additional kilogram of equipped clothing will incrementally increase the stamina consumption <mark style="background-color:purple;">by 1</mark> .

{% hint style="info" %}
The first kilogram adds 1 to stamina consumption, the second kilogram adds 2, and so on. This means that if the equipped clothing weighs 5 kg, each quest will consume 1 + 1 + 2 + 3 + 4 + 5 = 16 stamina.
{% endhint %}

Another crucial parameter that affects a character's **Stamina Reserve** is the speed of its recovery. Initially, when the **Regeneration** attribute equals 1, the character restores <mark style="background-color:purple;">10 stamina per hour</mark> . With each additional point in **Regeneration**, the amount of stamina restored per hour incrementally increases <mark style="background-color:purple;">by 10%</mark> .

{% hint style="info" %}
When the Regeneration attribute is 20, a character recovers $$10*1.1^{19}=61.16$$ stamina per hour (or more than 1 stamina per minute).
{% endhint %}

As in most other RPGs, stamina can be restored instantly at any time with the Stamina Potion, which can be obtained from the loot box or purchased with **Gold** from other users in the marketplace.

#### Mana Reserve

Mana is used for magical actions such as casting spells or moving warriors around the battlefield. It recharges automatically over time or can be recharged instantly with Mana Potion.

Each spell requires a different amount of mana to cast, depending on the spell itself and its rarity, and each warrior requires a different amount of mana to move, depending on the rarity and level of the warrior.

A first-level character starts with a **Mana Reserve** of <mark style="background-color:purple;">100</mark> , and each point in the **Magic** attribute increases the **Mana Reserve** linearly by <mark style="background-color:purple;">100</mark> . Also initially, when the **Recharge** attribute equals 1, the character restores <mark style="background-color:purple;">1 mana per minute</mark> . With each point added to the **Recharge**, attribute the amount of mana restored per minute increases linearly by <mark style="background-color:purple;">1 mana</mark> .

#### Spell Slots

A user can have a limited number of active spells available for casting, determined by the **Magic** attribute. A first-level character starts with one **Spell Slot**, and each additional slot requires <mark style="background-color:purple;">10</mark> more **Magic** points than the previous one.

{% hint style="info" %}
The second slot unlocks at 10 **Magic** points, the third at 30, the fourth at 60, and so on.
{% endhint %}

#### Warriors Slots

**Warrior Slots** limit the number of warriors that can be active on the warfare map at any given moment. Defeated warriors are automatically moved to the inventory, but new warriors can be deployed immediately instead.&#x20;

A first-level character starts with <mark style="background-color:purple;">2</mark> **Warrior Slots**, and each additional point in the **Warfare** attribute adds <mark style="background-color:purple;">2</mark> more **Warrior Slots**.

#### Marketplace Slots

There are a limited number of **Marketplace Slots** where a user can place items to sell for **Gold**, otherwise the marketplace could be used to overcome the limitations imposed by the inventory weight limit.

A first-level character starts with <mark style="background-color:purple;">3</mark> **Marketplace Slots**, and each subsequent **Marketplace Slot** requires another <mark style="background-color:purple;">5</mark> points of **Crafting**. In other words, additional **Marketplace Slots** will open when **Crafting** reaches 5, then at 10, 15, and so on.

#### Gold Balance

Each character can have an unlimited amount of **Gold**. The **Gold** is stored in a special magical pouch, and its weight does not count against the inventory weight limit.

The **Gold Balance** can only be increased by burning **QFT** or selling low-rarity items on the marketplace.&#x20;

**Gold** can be spent on:&#x20;

* buying loot boxes;
* buying **XP** to level up without moderating;
* purchasing low-rarity items from other users in the marketplace;
* promoting quests by increasing the ACT reward;
* purchasing a portion of the QFT issue via auction.

#### Essence Balance

Each character can have an unlimited amount of non-tradable **Essence**, which is consumed as items are leveled or evolved. **Essence** is stored in a special magic flask, and its weight does not count against inventory weight limit.

**Essence** can only be gained by disassembling items, which contain <mark style="background-color:purple;">1</mark> **Essence** per gram of weight. However, depending on the character's **Crafting** attribute, some **Essence** will be lost during the disassembly process. A first level character will lose <mark style="background-color:purple;">90%</mark> of the **Essence** in an item when disassembling it, but each additional point of **Crafting** will gradually reduce the loss <mark style="background-color:purple;">by 1%</mark> .

{% hint style="info" %}
If a user with a **Crafting** attribute of 1 disassembles a 1 kg item, he will receive $$1000*(100-90)/100 = 100$$ **Essence**. If a user with a **Crafting** of 20 disassembles the same item, he will receive $$1000*(100-90/1.01^{19})/100=255$$ **Essence**.
{% endhint %}

**Chest Shards**

Upon every quest completion, users receive a random Chest Shard, which does not add weight to the inventory. These Chest Shards, like puzzle pieces, can form the weekly set, which can contain a varying number of shards (from 10 to 100).&#x20;

Every time a user collects a full set of shards during a week, he can open a free loot box. This way, a user can collect the set multiple times during a week, opening up several loot boxes, but at the end of the week there will be unused shards that will be burned.

Initially, a first-level character is <mark style="background-color:purple;">10</mark> times more likely to get a Chest Shard that he already has than he is to get a missing shard. This can be thought of as getting a random shard from the urn filled with single missing shards and 10 clones of each shard already collected. To increase the number of missing shards in the urn, a user can place points in the Luck attribute, each of which increases the number of missing shards <mark style="background-color:purple;">by 1</mark> .

{% hint style="info" %}
For example, if there is a set of 5 shards: A,B,C,D,E, and a user already has shards A, B, and C (the number of shards owned does not matter), then with a Luck of 5 the next shard will be randomly chosen from the imaginary urn where there are Ax10, Bx10, Cx10, Dx5, Ex5.
{% endhint %}

Thus, if the Luck attribute is 10, the probability of getting a missing shard or one already collected is the same. However, if the Luck attribute is 20, the chances of obtaining the missing shard are twice as high.

#### **Lootbox Cards**

Loot boxes are the primary source of all RPG items (such as Clothing, Potions, Elixirs, Spellbooks, and Warriors) in the system. They can be opened either by spending <mark style="background-color:purple;">100</mark> **Gold** or by collecting a full set of **Chest Shards**.

By default, a loot box provides one item, with the chance of receiving an item depending on its rarity.&#x20;

Users can increase their chances of receiving more items by placing points in their **Luck** attribute. For every <mark style="background-color:purple;">10</mark> points of **Luck**, users will receive an additional card when they open a loot box, providing additional turns with the opportunity to receive more items.

{% hint style="info" %}
The **Luck** attribute does not affect the probability of getting rarer items.
{% endhint %}

The process of opening a loot box consists of several turns, based on the number of cards provided by the **Luck** attribute. Here is an example for the user with 30 **Luck** (3 extra cards):

* **Turn 1**: The user is dealt 4 cards face down and must blindly choose one. All four cards contain items, so the user is guaranteed to receive an item after the first turn.
* **Turn 2**: The user is dealt 4 more cards. One card is a "finish" card, which ends the opening process, while the remaining three are item cards, which give the user one more item and continue the opening into the next turn.
* **Turn 3**: The user is dealt another 4 cards. This time, 2 out of the 4 cards are finish cards. Choosing a finish card will end the opening, leaving the user with two items won in previous turns.
* **Turn 4**: The user is dealt 4 cards for the last time. Only 1 card contains an item, while the other 3 are finish cards. Since a hypothetical fifth turn would consist entirely of finish cards, this is the last turn. If the user selects a finish card, he will end the loot box opening with a total of 3 items. But if the user selects the item card, he will receive 4 items in total.

As a result, the maximum number of items a user can potentially receive from a single loot box is equal to the number of cards granted by their **Luck** attribute. However, the actual number of items obtained depends on the user's choices and actual luck throughout the opening process.

#### Bonus Chances

