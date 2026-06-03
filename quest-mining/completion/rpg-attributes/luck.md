---
icon: clover
---

# Luck

The Luck attribute affects missing shard bias, Common loot box opening choices, and lucky bonus procs in several economy actions.

Luck has five gameplay parts:

| Part | Meaning |
| --- | --- |
| Shards | Bias toward missing Chest Shards when shard rewards are rolled. |
| Sense | Card checks during Common loot box opening. A check reveals only whether a card is `safe` or `dead`. |
| Fortune | Chance that a lucky proc happens. |
| Potency | Strength of a lucky proc after it happens. |
| Turns | Number of turns during Common loot box opening. Turns are calculated from the Luck attribute and can be increased by equipment/perks. |

***

### **Missing Chest Shards**

Users can earn Chest Shards from activity, and a free [loot box](../#loot-boxes) is awarded every time they collect a full set of shards. The `shards` parameter increases the chance of obtaining the missing shard needed to complete the set.

Initially, a first-level character receives a random Chest Shard from an imaginary urn, where there is 32 units of each missing shard and 61 units of each collected shard. As a result, the odds of getting a particular collected shard are almost 2 times greater than the odds of getting a particular missing shard.

However, for each point of `shards`, the number of units of missing shards increases by 2, while the number of units of collected shards increases by 1. As a result, the chance of getting a particular missing shard relative to the chance of getting a particular collected shard increases from 1:2 to 2:1 as the parameter grows.

{% hint style="info" %}
For example, if there is a set of 5 shards: A,B,C,D,E, and a user already has shards of different amounts of A, B, and C, then with a Luck of 10 the next shard will be randomly selected from the imaginary urn containing Ax70, Bx70, Cx70, Dx50, Ex50. With a Luck of 50, the imaginary urn will contain Ax110, Bx110, Cx110, Dx130, Ex130.
{% endhint %}

This method of counting chances does not take into account the different number of collected and missing shards. Even if the chance of getting the single missing shard is maximum and almost 2 times higher than the chance of getting any of the 9 collected shards, it is still more likely to get one of the collected shards (9 chances out of 11) than the missing shard (2 chances out of 11).

{% hint style="info" %}
Shard earning, shard storage, and shard completion are planned mechanics. The `shards` parameter documents the intended bias model.
{% endhint %}

***

### **Common Loot Box Opening**

Common loot boxes use a card opening flow. The backend creates a fixed deck of item cards for the opening session, the player chooses cards one turn at a time, and each successful item card turns into a dead card for later turns. The remaining item cards persist between turns, while card positions are shuffled again each turn.

The number of Common opening turns is calculated from the user's Luck attribute. Equipment and perks can add extra turns on top of that number:

{% hint style="info" %}
$$turns=max(1, floor(log10(max(1, Luck)))) + equipment\_and\_perk\_turns$$
{% endhint %}

For example, up to `99` Luck gives `1` turn, `100-999` Luck gives `2` turns, `1,000-9,999` Luck gives `3` turns, and so on. If the user also has equipment or perks that add turns, those turns are added to the result.

`sense` gives card checks before choosing:

{% hint style="info" %}
$$sense\_checks=floor(log10(max(1, sense)))$$
{% endhint %}

A check reveals only whether a card is `safe` or `dead`; it does not reveal rarity or item identity. If the player chooses a dead card, the opening ends and all already won items are kept. If the player chooses all item cards, the opening ends with all won items.

Higher-rarity loot boxes do not use this card flow. They open immediately, mint exactly one item at the box floor rarity or higher, and do not use turns or sense checks. Higher-rarity boxes are community/activity rewards, not purchasable Common boxes.

***

### **Lucky Procs**

Many activities in Questfall can receive a lucky bonus or discount. Each action defines its maximum lucky bonus, and Luck decides whether that bonus happens and how much of it is applied.

`fortune` controls the chance that a lucky proc happens. `potency` controls the portion of the action's maximum lucky bonus that is used after the proc happens.

Both parameters use the same normalized luck function. To calculate proc chance, use `fortune` as `x`. To calculate bonus strength, use `potency` as `x`.

{% hint style="info" %}
$$L(x)=1-0.99\cdot e^{-0.1\cdot(\log_{10}(\max(1,x)))^{1.2}}$$
{% endhint %}

Examples:

| `x` | `L(x)` |
| --- | --- |
| `1` | `1%` |
| `2` | `3.3%` |
| `3` | `5.0%` |
| `5` | `7.2%` |
| `10` | `10.4%` |
| `100` | `21.3%` |
| `1_000` | `31.9%` |
| `10_000` | `41.6%` |
| `100_000` | `50.3%` |
| `1_000_000` | `58.0%` |

For example, XP purchase can proc bonus XP. `fortune` decides whether the proc happens, then `potency` decides how much of the maximum XP bonus is added. The maximum XP bonus is `+100%` of the purchased XP, so a lucky purchase can award up to twice the base XP amount.

Lucky proc events:

| Action | Maximum lucky bonus | Effect |
| --- | --- | --- |
| XP purchase | `+100%` purchased XP | Lucky proc can add bonus XP. |
| Crafting scrap | `+100%` base Essence | Lucky proc can add Essence. |
| Crafting upgrade | `50%` base cost discount | Lucky proc can reduce upgrade cost. |
| Marketplace sale fee | `50%` burned fee discount | Lucky proc can reduce the burned fee. |
