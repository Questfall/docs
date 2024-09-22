---
icon: dice-d20
---

# RPG System

While deflation solves a lot of problems and is indeed the best economic approach (as shown in the article [Deflationary Tokenomics](deflationary-tokenomics.md)), it is still not a silver bullet because it creates new challenges to overcome as deflation's main advantage becomes its main weakness.

On the one hand, deflation makes any asset a good investment because of its potential price increase, but on the other hand, if that increase is realised, it pushes up the real cost of using the system when payments are denominated in the currency that gets stronger over time.

{% hint style="info" %}
This can be clearly seen in the examples of BTC or ETH - as the price of blockchain cryptocurrencies rises, the fees denominated in them become very expensive in dollars.
{% endhint %}

This problem can be easily solved by introducing another token for payments. In this case, two different money functions, which for some reason are usually combined in one currency (a store of value and a medium of exchange), are allocated to different assets.

While a store of value must be deflationary to fulfil its function, the medium of exchange should not be too volatile so that prices do not fluctuate too much relative to other goods and services in the economy.

In Questfall, deflationary QFT is the main store of value, while Gold (a dollar-based in-game currency) is used to pay into the system for mining bonuses or quest promotions. As a result, system prices are set in dollars and are independent of the price of QFT.

However, this introduces another problem: since QFT tokens are burned when Gold is deposited, there is nothing left on the chain to be returned in exchange for Gold when a user wants to withdraw it. In other words, there's no liquidity pool to back up user withdrawals, so the Gold can't be withdrawn.

{% hint style="info" %}
Stablecoin liquidity pools, which are typically used to support withdrawals, create demand and add value to the stablecoins themselves, not the system. Such pools are also a prime target for hackers, who can drain the liquidity completely, making in-game assets worthless.
{% endhint %}

Beyond liquidity pools and mining, there is another solution for extracting value from the system, and that is NFT trading, which assumes that the role of liquidity pools (which in the case of NFT are nonces) is filled by a marketplace. And the greater the demand for NFTs, the greater the speed and efficiency with which users can monetise them.

And this is where the RPG system comes in. It fits like a glove with the user levels used as [Sybil protection](sybil-protection.md). It increases user engagement and retention by adding complexity, increasing the role of user skill, and allowing for a variety of strategies beyond basic quest grinding. And, most importantly, it creates a constant demand for in-game items.

{% hint style="info" %}
In this article, we will be looking at the big picture, rather than going into the details of the RPG stats, which may change as Questfall develops.
{% endhint %}

At the heart of the RPG system in Questfall, as in most games, is the character that represents the user. The character has a number of attributes that set default values for the size of its mana store and its recovery rate, available energy, number of rune slots available, and others.

Users can level up their characters by earning experience points (XP) through moderation, which benefits the entire system. With each new level, users also receive free attribute points, which can be spent on customising their character according to their chosen strategy.

In addition to character level and attributes, items also play an important role in a character's abilities. When users complete quests, they will receive Materials that can only be used to create other types of items: Elixirs, Potions and, most importantly, Runes.

{% hint style="info" %}
Elixirs, Potions and Runes can also be obtained from Lootboxes.
{% endhint %}

Runes can provide passive buffs or active abilities and are divided into six rarity levels, each represented by a letter from F (common) to A (legendary). Each level of rarity increases the power of a rune, until it becomes near-ultimate at level A.

Anyone can upgrade a rune to the next level by combining five identical runes of the current level. For example, 5 F-rank runes are required to create 1 E-rank rune. Using this method, an A-rank rune requires a total of 3,125 F-rank runes.

And here is the trick that allows anyone to monetise in-game assets, including gold, through trading. While lower level runes F,E,D can be traded in-game for gold, higher level runes C,B,A can only be traded on-chain as NFTs.

In this way, a user can buy 5 D-runes with gold, create a C-rune with them, and then withdraw it as an NFT that can be sold on the marketplace for QFT.

{% hint style="info" %}
Since runes give a real advantage to miners, it is only a matter of pricing how quickly a particular high-level rune can be sold.
{% endhint %}
