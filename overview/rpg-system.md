---
icon: dice-d20
---

# RPG System

As shown in previous articles, Deflationary Mining has many advantages that cannot be achieved with more conventional approaches. However, it is still not a silver bullet because it creates new challenges to overcome as the main advantage of deflation becomes its main weakness.

On the one hand, deflation makes any asset a good investment because of its potential price increase, but on the other hand, if that increase is realized, it pushes up the real cost of using the system when payments are denominated in the currency that gets stronger over time.

{% hint style="info" %}
This can be clearly seen in the examples of BTC or ETH - as the price of blockchain cryptocurrencies rises, the fees denominated in them become very expensive in dollars.
{% endhint %}

This problem can be easily solved by introducing another token for payments. In this case, two distinct functions of money - store of value and medium of exchange - which for some reason are always combined in one currency, are assigned to different assets.

While a store of value must be deflationary to fulfil its function, the medium of exchange should not be too volatile so that prices do not fluctuate too much relative to other goods and services in the economy.

In Questfall, deflationary QFT is the main store of value, while Gold (a dollar-based in-game currency) is used to pay into the system for mining bonuses, leveling up, or quest promotions. As a result, system prices are set in dollars and are independent of the price of QFT.

However, this introduces another problem: since QFT tokens are burned when Gold is issued, there is nothing left on the chain to be returned in exchange for Gold when a user wants to withdraw it. In other words, there's no liquidity pool to back up user withdrawals.

{% hint style="info" %}
Standalone stablecoin liquidity pools, which are typically used to support withdrawals, create demand and add value to the stablecoins themselves, not the system. Such pools are also a prime target for hackers, who can drain the liquidity completely, making in-game assets worthless.
{% endhint %}

However, beyond liquidity pools, there are two other ways to extract value from the system.

The first is direct and simple - mining itself. In Questfall, this approach is implemented by using a portion of the weekly QFT issue to buy back and burn Gold from users in a system auction.

Another approach is much more complex - NFT trading. It assumes that the role of liquidity pools, which in the case of NFTs are nonexistent, is filled by a marketplace. And the more active the trading, the greater the speed and efficiency with which users can monetize their NFTs. In other words, the demand for NFTs should be high.

To create a constant demand for NFTs, Questfall implements an RPG system that fits like a glove with the user levels used as a defence against Sybil attacks.

At the heart of the RPG system in Questfall, as in most games, is the character that represents the user. The character has a number of attributes that set default values for the size of its mana store, the maximum amount of stamina it can have, the possible weight of its inventory, and others.

Users can level up their characters through moderation or by burning Gold. Both actions benefit the entire system and the community. With each new level, users receive free attribute points that can be used to customize their character according to their chosen strategy.

In addition to character level and attributes, in-game items play an important role in a character's performance:

* Clothing that can be equipped to the character;
* Elixirs, which provide various bonuses to the character;
* Spellbooks, which allow a character to learn spells;
* Potions that replenish a character's mana or stamina;
* Toolsets needed to increase the rarity tier of clothing.

These items can only be minted through loot boxes, which can be opened for free as a reward for completing quests, or by burning Gold. When minted, each RPG item (except Potions) is one of six rarity tiers:

* Common (F);
* Uncommon (E);
* Rare (D);
* Epic (C);
* Legendary (B);
* Mythical (A).

Unlike many common RPG systems, Questfall allows users to increase the rarity of their items through crafting by destroying other items. This is a key aspect of the system, as common items (F, E, D) can only be traded in-game for Gold, while the more rare items (C, B, A) are traded on-chain as NFTs.&#x20;

{% hint style="info" %}
Questfall will have two separate marketplaces: in-game, where items are traded for Gold, and on-chain, where NFTs are traded for QFT.
{% endhint %}

In this way, a user can craft a rarer item by utilizing more accessible items purchased with Gold, and then withdraw it as an NFT that can be sold on the blockchain marketplace for QFT. This opens the door for extracting value from the system (exchanging in-game Gold for QFT) through NFT trading.

In addition to common activities such as mining, crafting, and trading, the efficiency of which can be improved through items, Questfall also features magic, which can have a significant impact on a user's strategy, as spells learned from Spellbooks are applied to the system itself rather than to a character.

{% hint style="info" %}
Spells are, in a sense, official hacks and can do almost anything in the system, from increasing the mining point reward for a particular quest to changing the website background color for everyone on the platform.
{% endhint %}

Of course, this is just the big picture, and there are many more nuances to how Questfall's RPG system works. Fortunately, we have a number of articles that cover every aspect of the RPG system in detail. For an overview, the main takeaway is that the RPG system brings many great benefits to the platform.

* **Crafting enables the extraction of Gold.** By separating craftable rarity tiers into two groups - one that can be traded in-game for Gold, and another that can be traded on-chain as NFTs - Questfall creates a bridge for extracting value from the system.
* **RPG makes mining more interesting.** There are several aspects of character development that can be improved: crafting, mining, trading, and magic. This will allow users to master their skills and create individual, complex strategies beyond the basic quest grinding.
* **RPG significantly increases trading activity.** Since users can't progress in all areas at the same rate, some will focus on mining while others will focus on crafting. This is similar to the situation where there are merchants to whom the user pays part of his income to get better equipment than his competitors.
* **Gold gains a lot more utility.** Without the RPG system, Gold is only needed for quest promotion or leveling up. However, item rarity tiers and crafting assume that trade and loot boxes that can be opened with Gold play a crucial role in the miners' competition.
* **User levels gain value.** With each level, characters become more powerful and specific, allowing users to not only advance to higher leagues, but also to crystallise their play style and mining strategy.
