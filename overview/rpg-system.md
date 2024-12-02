---
icon: dice-d20
---

# RPG System

[Deflationary tokenomics](token-burning.md) is the best economic approach, but it is still not a silver bullet because it creates new challenges to overcome, as the main advantage of deflation becomes its main weakness.

On the one hand, deflation makes any asset a good investment because of its potential price increase, but on the other hand, if that increase is realised, it pushes up the real cost of using the system when payments are denominated in the currency that gets stronger over time.

{% hint style="info" %}
This can be clearly seen in the examples of BTC or ETH - as the price of blockchain cryptocurrencies rises, the fees denominated in them become very expensive in dollars.
{% endhint %}

This problem can be easily solved by introducing another token for payments. In this case, two different functions of money, which for some reason are always combined in one currency (store of value and medium of exchange), are assigned to different assets.

While a store of value must be deflationary to fulfil its function, the medium of exchange should not be too volatile so that prices do not fluctuate too much relative to other goods and services in the economy.

In Questfall, deflationary QFT is the main store of value, while Gold (a dollar-based in-game currency) is used to pay into the system for mining bonuses, leveling up, or quest promotions. As a result, system prices are set in dollars and are independent of the price of QFT.

However, this introduces another problem: since QFT tokens are burned when Gold is issued, there is nothing left on the chain to be returned in exchange for Gold when a user wants to withdraw it. In other words, there's no liquidity pool to back up user withdrawals, so the Gold can't be withdrawn.

{% hint style="info" %}
Stablecoin liquidity pools, which are typically used to support withdrawals, create demand and add value to the stablecoins themselves, not the system. Such pools are also a prime target for hackers, who can drain the liquidity completely, making in-game assets worthless.
{% endhint %}

However, beyond liquidity pools, there are two other ways to extract value from the system.&#x20;

The first is straightforward and simple - mining itself. In Questfall, this approach is implemented by using a portion of the weekly QFT issue (8%) to buy back and burn Gold from users in a system auction.

Another approach is much more complex - NFT trading. It assumes that the role of liquidity pools (which, in the case of NFTs, are nonces) is filled by a marketplace. And the more active the trading, the greater the speed and efficiency with which users can monetise their NFTs. In other words, demand for NFTs should be high.

To create a constant demand for NFTs, Questfall implements an RPG system that fits like a glove with the user levels used as a defence against Sybil attacks.

{% hint style="info" %}
In this article, we will be looking at the big picture, rather than going into the details of the RPG stats, which may change as Questfall develops.
{% endhint %}

At the heart of the RPG system in Questfall, as in most games, is the character that represents the user. The character has a number of attributes that set default values for the size of its mana store, the maximum amount of stamina it can have, the possible weight of its inventory, and others.

Users can level up their characters by earning experience (XP points) through moderation or by buying with Gold (which is burned). Both of these actions benefit the entire system and therefore the community.

With each new level, users receive free attribute points, which can be spent on customising their character according to their chosen strategy.

In addition to character level and attributes, in-game items such as clothing, potions, elixirs and spellbooks play an important role in a character's performance. These items can only be obtained from loot boxes, which can be opened for free as a reward for completing quests, or by paying one Gold.

While potions do not have rarity tiers, other items (clothing, elixirs and spellbooks) can have one of the six rarity tiers:

* Common (F);
* Uncommon (E);
* Rare (D);
* Epic (C);
* Legendary (B);
* Mythical (A).

Furthermore, more rare items of clothing or spellbooks can be created by crafting. While spellbooks only consume other spellbooks during crafting, clothing consumes Essence, which can be gained by disassembling any item and is not tradable. This creates a constant demand for items of any rarity.

While potions and more accessible items (F, E, D) can only be traded in-game for Gold, the more rare items (C, B, A) are traded on-chain as NFTs. In this way, a user can craft a rarer item using more accessible items purchased with Gold, and then withdraw it as an NFT that can be sold on the blockchain marketplace for QFT.

{% hint style="info" %}
Questfall will have two separate marketplaces: in-game, where items are traded for Gold, and on-chain, where NFTs are traded for QFT.
{% endhint %}

As well as clothing and consumables (potions and elixirs) that improve the performance of miners by increasing their stats, there are also magic spells that can have a major impact on mining strategy.

Spells can be thought of as official hacks and can do almost anything in the system, from increasing the mining point reward of a particular quest to freezing the stamina bar so that it is not spent.

{% hint style="info" %}
A separate article is dedicated to the [magic system](../users/magic.md).
{% endhint %}

Of course, there are many more details about how Questfall's RPG system works, and one article is not enough to describe them all. The main takeaway for now is that the RPG system brings many benefits to the platform by making quest mining more personal.

**Mining becomes more interesting**. There are several aspects of character development that can be improved: crafting, mining, moderation and magic. This will allow users to master their skills and create individual, complex strategies beyond the basic quest grinding.

**Trade activity increases significantly**. Since users can't progress in all areas at the same rate, some will focus on mining, while others will focus on crafting. This is similar to the situation where there are suppliers to whom the user pays part of his income to get better equipment than his competitors.

**Gold gains a lot more utility**. Without the RPG system, Gold is only needed to promote quests or level up. However, item rarity tiers and crafting assume that trading and loot boxes that can be opened with Gold play a crucial role in the miners' competition.

**User levels gain in value**. With each new level, characters become more powerful and individual, allowing users to crystallise their play style and mining strategy.

