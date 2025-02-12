---
icon: dice-d8
---

# RPG System

As shown in previous articles, Deflationary Mining has many advantages that cannot be achieved with more conventional approaches. However, it is still not a silver bullet because it creates new challenges to overcome as the main advantage of deflation becomes its main weakness.

On the one hand, deflation makes any asset a good investment because of its potential price increase, but on the other hand, if that increase is realized, it pushes up the real cost of using the system when payments are denominated in the currency that gets stronger over time.

{% hint style="info" %}
This can be clearly seen in the examples of BTC or ETH - as the price of blockchain cryptocurrencies rises, the fees denominated in them become very expensive in dollars.
{% endhint %}

This problem can be easily solved by introducing another token for payments. In this case, two distinct functions of money - store of value and medium of exchange - which for some reason are always combined in a single currency, are instead assigned to different assets.

While a store of value must be deflationary to fulfil its function, the medium of exchange should not be too volatile so that prices do not fluctuate too much relative to other goods and services in the economy.

In Questfall, deflationary [QFT](../assets/qft.md) is the main store of value, while [Gold](../assets/gold.md) (a dollar-based in-game currency) is used to pay into the system for mining bonuses, leveling up, or quest promotions. As a result, system prices are set in dollars and are independent of the price of QFT.

However, this introduces another problem: since QFT tokens are burned when Gold is issued, there is nothing left on the chain to be returned in exchange for Gold when a user wants to withdraw it. In other words, there's no liquidity pool to back up user withdrawals.

{% hint style="info" %}
Standalone liquidity pools, which are typically used to support withdrawals, are a prime target for hackers, who can drain the liquidity completely, leaving in-game assets worthless.
{% endhint %}

However, beyond liquidity pools, there are two other ways to extract value from the system.

The first is direct and simple - mining itself. In Questfall, this approach is implemented by using a portion of the weekly QFT issue to buy back and burn Gold from users in a [system auction](<../infrastructure/gold withdrawals.md>).

Another approach is much more complex - trading. It assumes that the role of liquidity pools is filled by a [marketplace](../infrastructure/marketplace.md). And the more active the trading, the greater the speed and efficiency with which users can monetize their goods. In other words, demand should be high.

To create a constant demand, Questfall implements an RPG system that fits like a glove to the user levels that are part of the protection against Sybil attacks.

The heart of the RPG system in Questfall is the character that represents the user. The character has a number of attributes that set the default values for stamina reserve, possible inventory weight, etc.

Users can level up their characters through proper community moderation voting or by burning Gold, both of which benefit the entire community. With each new level, users receive free attribute points that can be used to customize their character according to their chosen strategy.

But more important to extracting value from the system are in-game items, which create a trade opportunity and, along with attributes, play an important role in a character's performance:

* Clothing enhances character;
* Potions replenish stamina;
* Gems are used in crafting.

All RPG items (except Gems) can only be minted through loot boxes, which can be opened for free as a reward for completing quests, or by burning Gold. When minted, each RPG item is one of six rarity tiers:

* Common (F);
* Uncommon (E);
* Rare (D);
* Epic (C);
* Legendary (B);
* Mythical (A).

Unlike many common RPG systems, Questfall allows users to increase the rarity of certain item types by destroying other items, or in other words, by crafting.&#x20;

Rarity tiers are a key aspect of the system, as common items (F, E, D) can only be traded for Gold, while the more rare items (C, B, A) are traded for QFT.

{% hint style="info" %}
Both of these rarity groups will be traded on the Questfall [marketplace](../infrastructure/marketplace.md).
{% endhint %}

In this way, a user can craft a rarer item using more accessible items purchased with Gold, and then withdraw it as NFT or sell it for QFT. This enables the user to extract value from the system through trading (exchanging in-game Gold for QFT).

{% hint style="info" %}
There are many ideas for further development of the RPG system, read more in the [Future Versions](../roadmap/future-versions.md) article.
{% endhint %}

Of course, this is just the big picture, and there are many more nuances to how Questfall's RPG system works. Fortunately, we have a number of articles that cover every aspect of the RPG system in detail. For an overview, the main takeaway is that the RPG system brings many great benefits to the platform.

* **Crafting enables the extraction of Gold.** By separating craftable rarity tiers into two groups - one that is traded for Gold, and another that is traded for QFT - Questfall creates a distinct mechanic for extracting value from the system.
* **RPG makes mining more interesting.** There are several types of activities that interact with each other and can be developed: crafting, mining, trading. This will allow users to master their skills and create individual, complex strategies beyond the basic quest grinding.
* **RPG significantly increases trading activity.** Since users cannot progress in all areas at the same rate, some will focus on mining while others will focus on crafting or trading. This is similar to how manufacturers and merchants provide better equipment that increases efficiency.
* **Gold gains a lot more utility.** Outside of the RPG system, Gold is only used for quest promotion or leveling up. However, item rarity tiers and crafting assume that trade and loot boxes that can be opened with Gold play a crucial role in the miners' competition.
* **User levels gain value.** With each level, characters become more powerful and specific, allowing users to not only advance to higher leagues, but also to crystallize their play style and mining strategy to gain an edge over users in the same league.
