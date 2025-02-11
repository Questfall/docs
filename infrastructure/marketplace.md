---
icon: cart-shopping
---

# Marketplace

Many crypto projects consider popular third-party marketplaces such as OpenSea as a means of attracting an audience and selling their NFTs.

Unlike this approach, the marketplace in Questfall plays a crucial role in the overall mechanic as a means of extracting value from the system through trading, and is a necessary piece needed for various user strategies based on crafting and trading.

The main idea behind item trading in Questfall is that there are actually two marketplaces: one for trading of low rarity items (F,E,D) with Gold, and another for trading of higher rarity items (C,B,A) with QFT.

{% hint style="info" %}
Two different marketplaces are brought together under one interface.
{% endhint %}

This approach allows the value of in-game Gold to be extracted onto the blockchain by crafting higher rarity items and selling those items for QFT.

For example, a user can use Gold to purchase an item and a Gem, both of rarity D, and then consume the Gem to evolve the item to rarity C, which can be sold for QFT.

In both marketplaces, 10% of the item price is burned as a fee - Gold for lower rarity items and QFT for higher rarity items. The fee is deducted from the total amount a seller pays, so a buyer receives the price paid minus the fee.

{% hint style="info" %}
While in Questfall v.1 a seller must set a price to list an item on the marketplace, we are looking to implement auction-based pricing for both marketplaces in [future releases](../roadmap/future-versions.md).
{% endhint %}

Since items listed on the in-game marketplace do not take up inventory space, the marketplace can be used as storage space, making the inventory weight limit meaningless. To prevent such abuse, there are a finite number of marketplace slots.

A first-level character starts with 1 marketplace slot, which can be increased by adding attribute points to the character's [Trading](../quests/users/attributes/trading.md) attribute - each point opens another slot.

{% hint style="info" %}
The trading attribute also [reduces](../quests/users/attributes/trading.md#marketplace-fee) the fee a seller pays for each trade.
{% endhint %}

In summary, the entire marketplace mechanic in Questfall allows for convenient RPG item trading, which forces Gold and QFT burning, and complements crafting, enabling value extraction on the blockchain. It also makes mining much more personal, engaging, and dependent on the results of the work of others.
