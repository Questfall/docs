---
icon: box
---

# Inventory

Users store their unused RPG items in their inventory, which can hold any number of items, but has a weight limit.

If a user's inventory is overloaded, the user will not be able to perform actions that result in the acquisition of new items, such as opening loot boxes, making purchases from the in-game marketplace, or bringing in an item from NFT.

To empty inventory, any RPG item can be scrapped for Essence, or a user can put items up for sale on the in-game marketplace, or take rarer (C,B,A) items out of inventory as NFT to the blockchain wallet.

{% hint style="info" %}
The count of available marketplace slots is limited, while to withdraw an item as NFT a fee should be paid in Gold. It costs 100 Gold ($1) to withdraw a C item, 300 Gold ($3) to withdraw a B item, and 900 Gold ($9) to withdraw an A item.
{% endhint %}

The weight limit of the newly created character is 1 kg, and it can be further increased by adding more attribute points to the Inventory attribute - each point increases the limit by 1 kg. For example, if the Inventory attribute has 15 points, the weight limit will be 15 kg.&#x20;

{% hint style="info" %}
The formula for the inventory weight limit is as follows: $$WeightLimit_{grams}=1000*(Inventory+1)$$
{% endhint %}

Each point in the Inventory attribute causes the weight limit to grow linearly, while the [weight of items](../rpg-items/) grows as a root of the level, i.e. more slowly. Therefore, as the inventory grows, each new item takes up a smaller percentage of the total weight limit.

As a result, users are motivated to increase their inventory weight limit not only to hold more rare and high-level items, which weigh more, but also to be able to hold a larger total number of items.
