---
icon: scale-unbalanced
---

# Trading

The Trading attribute gives an advantage to users who have chosen a trading strategy that involves buying and selling RPG items on the marketplace for gaining Gold or QFT. As a result, this attribute gives bonuses not only for trading itself, but also for withdrawing Gold on the system's weekly auction.

***

### Marketplace Slots

Since the [marketplace](../../../infrastructure/marketplace.md) can be used to overcome the inventory weight limit by listing RPG items on the marketplace at very high prices that no one is willing to pay, there is a limit to how many items a user can list for sale on the marketplace.

{% hint style="info" %}
Higher rarity items can always be taken out of inventory as NFTs, but this will cost [a certain amount](../rpg-items/) of Gold.
{% endhint %}

A first level character starts with 1 marketplace slot, and each additional point in the Trading attribute grants a new slot.

{% hint style="info" %}
The number of available slots is calculated using the following formula:\
$$Slots=Trading+1$$
{% endhint %}

***

### Marketplace Fee

The marketplace charges a 10% fee for each trade. However, the percentage of the fee can be reduced by investing stat points in the Trading attribute.

{% hint style="info" %}
The percentage of a fee is calculated using the following formula: \
$$Fee_{size}=\frac{10}{0.01*Trading+1}$$
{% endhint %}

The fee is calculated at the moment a buyer pays for an RPG item, so a seller cannot predict when it will happen and must keep items that give a reduced fee equipped permanently.

***

### Gold Withdrawal

Gold can be [withdrawn](<../../../infrastructure/gold withdrawals.md>) for QFT through a weekly system auction. To do this, 5% of the QFT issue is used each week to buy back Gold from users willing to sell it.

The auction is based on users making bids - how much Gold they will burn and how many QFTs they want for it. In other words, each bid contains a QFT/Gold rate, and of course, the lower that rate is, the higher in the queue the bid will be.&#x20;

The order of bids is important because the system has a limited number of QFTs to use in the auction, and not all bids will be filled. However, users can move their bids higher in the queue by increasing the Trading attribute.&#x20;

The auction has two types of user bids: one for the real price (actual bid) and one for the sort order (effective bid). By default, for a user with no points in the Trading attribute, the effective bid is equal to the actual bid. However, for each point in the Trading attribute, the effective bid decreases, aiming for 80% of the actual bid.

{% hint style="info" %}
The effective bid is calculated using the following formula: \
$$Bid_{eff}=Bid_{real}*(0.8+0.2*0.995^{Trading})$$
{% endhint %}

In this way, the Trading attribute allows Gold to be sold to the system for QFT at better prices that would otherwise not pass due to the competitive nature of the auction mechanics.
