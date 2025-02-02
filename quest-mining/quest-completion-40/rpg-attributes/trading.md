---
icon: scale-unbalanced
---

# Trading

The Trading attribute gives an advantage to users who have chosen a trading strategy that involves buying and selling RPG items on the marketplace for gaining Gold or QFT. As a result, this attribute gives bonuses not only for trading itself, but also for withdrawing Gold on the system's weekly auction.

***

### Marketplace Slots

Since the [marketplace](../../../infrastructure/marketplace.md) can be used to overcome the inventory weight limit by listing RPG items on the marketplace at very high prices that no one is willing to pay, there is a limit to how many items a user can list for sale on the marketplace.

A first level character starts with 1 marketplace slot, and each additional point in the Trading attribute grants a new slot.

{% hint style="info" %}
The number of available slots is calculated using the following formula:\
$$Slots=Trading+1$$
{% endhint %}

***

### Marketplace Fee

The marketplace charges a 10% fee for each trade. However, the percentage of the fee can be reduced by investing stat points in the Trading attribute.

The fee is calculated at the moment a buyer pays for an RPG item, so a seller cannot predict when it will happen and must keep items that give a reduced fee equipped permanently.

{% hint style="info" %}
The percentage of a fee is calculated using the following formula: \
$$Fee_{size}=\frac{10}{0.01*Trading+1}$$
{% endhint %}

***

### Gold Withdrawal

Gold can be withdrawn for QFT through a weekly [system auction](<../../../infrastructure/gold withdrawals.md>) based on user bids that include the amount of Gold to be burned and its dollar price. Obviously, the lower the price, the higher in the queue the bid will be.

Because the system has a limited number of QFTs to use in the auction, the entire queue will not be filled. Users can move their bids higher in the queue by increasing the Trading attribute. This is implemented through the concept of effective bids, which are actually used to sort bids in the queue.

By default, for a user with no points in the Trading attribute, the effective bid is equal to the actual Gold price. However, for each point in the Trading attribute, the effective bid decreases, aiming for 80% of the price.

{% hint style="info" %}
The effective bid is calculated using the following formula: \
$$Bid_{eff}=Bid_{actual}*(0.8+0.2*0.995^{Trading})$$
{% endhint %}

In this way, the Trading attribute allows Gold to be sold to the system for QFT at better prices that would otherwise not pass due to the competitive nature of the auction mechanics.
