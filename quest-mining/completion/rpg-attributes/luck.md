---
icon: clover
---

# Luck

Luck is the attribute for players who want more value from random outcomes: better Common Lootbox openings, faster Chest Shard completion, extra lootbox chances, and stronger lucky effects during economy actions.

It is built around five traits:

| Trait | What it improves |
| --- | --- |
| Cards | Increases turns during Common Lootbox openings. |
| Shards | Makes missing Chest Shards more likely than duplicates. |
| Boxes | Adds a chance to receive an extra higher-rarity Lootbox when a Common Lootbox opening starts. |
| Chance | Makes Luck activate more often. |
| Bonus | Makes activated lucky rewards and lucky discounts stronger. |

RPG items can also add direct grants to these traits' final effects. Grant values depend on item rarity.

***

### **Cards**

Common Lootboxes use a card opening flow. Each turn lets the player choose one card. Safe cards can award items. Dead cards end the opening, but already won items are kept.

`Cards` controls how many turns a Common Lootbox opening can have. More turns means more chances to claim item cards before the opening ends.

{% hint style="info" %}
$$CommonLootboxTurns=floor(log_{10}(max(1,Cards)))+1+TurnGrants$$
{% endhint %}

Base turns before item grants:

| Cards | Common Lootbox turns |
| ---: | ---: |
| 1 | 1 |
| 10 | 2 |
| 100 | 3 |
| 1,000 | 4 |
| 10,000 | 5 |
| 1,000,000 | 7 |

Cards grants add exact extra turns:

| Item rarity | Turns in Common Lootboxes grant |
| --- | ---: |
| Uncommon | `+1 turn in Common Lootboxes` |
| Rare | `+2 turns in Common Lootboxes` |
| Epic | `+3 turns in Common Lootboxes` |
| Legendary | `+4 turns in Common Lootboxes` |
| Mythical | `+5 turns in Common Lootboxes` |

{% hint style="info" %}
Example: a player has `1,000` Cards, so they receive `4` base turns. If a Mythical item grants `+5 turns in Common Lootboxes`, the opening starts with `9` turns.
{% endhint %}

Higher-rarity Lootboxes do not use the card flow. They open immediately and mint one item at the box floor rarity or higher.

***

### **Shards**

Chest Shards work like a weekly puzzle. Each shard reward gives one puzzle piece. When all piece types are collected, the player receives a free Common Lootbox, one of each piece is consumed, and any duplicate pieces remain for the same weekly puzzle.

`Shards` does not decide how many shard pieces a quest gives. That is controlled by the Mining trait `Loot`. `Shards` decides which piece type is selected after a shard drop has already happened.

The system intentionally makes missing pieces harder to hit at low Shards. Increasing `Shards` raises Missing Shard bias, which makes incomplete sets easier to finish.

{% hint style="info" %}
$$MissingBias=floor(100*log_{10}(max(1,Shards)))+MissingShardBiasGrants$$

$$CollectedPieceWeight=2$$

$$MissingPieceWeight=2^{MissingBias/100}$$
{% endhint %}

For a 10-piece puzzle where the player has 9 piece types and is missing 1 piece type:

| Shards | Missing Bias | Chance that the next piece is the missing type |
| ---: | ---: | ---: |
| 1 | 0 | 5.3% |
| 10 | 100 | 10.0% |
| 100 | 200 | 18.2% |
| 1,000 | 300 | 30.8% |
| 10,000 | 400 | 47.1% |
| 1,000,000 | 600 | 78.0% |

Shards grants add direct Missing Shard bias:

| Item rarity | Missing Shard bias grant |
| --- | ---: |
| Uncommon | `+5..10 Missing Shard bias` |
| Rare | `+10..25 Missing Shard bias` |
| Epic | `+25..50 Missing Shard bias` |
| Legendary | `+50..75 Missing Shard bias` |
| Mythical | `+75..100 Missing Shard bias` |

{% hint style="info" %}
Example: a player has `100` Shards. The base bias is `200`. If an item adds `+80 Missing Shard bias`, the final bias becomes `280`, so missing pieces are treated as if the player had a stronger Shards build.
{% endhint %}

***

### **Boxes**

`Boxes` adds a chance to receive one extra higher-rarity Lootbox when a Common Lootbox opening starts. This is a separate reward from the items inside the Common Lootbox opening itself.

First, the system rolls whether the extra Lootbox appears. Then, if it appears, the rarity is rolled separately. Each next rarity is about 5x less likely than the previous one.

{% hint style="info" %}
$$t=log_{10}(max(1,Boxes))$$

$$ExtraLootboxChance=1\%+9\%*{t \over t+1}+BoxChanceGrants$$
{% endhint %}

Base chance before item grants:

| Boxes | Extra higher-rarity Lootbox chance |
| ---: | ---: |
| 1 | 1.00% |
| 10 | 5.50% |
| 100 | 7.00% |
| 1,000 | 7.75% |
| 10,000 | 8.20% |
| 1,000,000 | 8.71% |

Boxes grants add direct percentage points:

| Item rarity | Extra higher-rarity Lootbox chance grant |
| --- | ---: |
| Uncommon | `+0.5% extra higher-rarity Lootbox chance` |
| Rare | `+1% extra higher-rarity Lootbox chance` |
| Epic | `+1.5% extra higher-rarity Lootbox chance` |
| Legendary | `+2% extra higher-rarity Lootbox chance` |
| Mythical | `+2.5% extra higher-rarity Lootbox chance` |

If the extra Lootbox appears, its rarity is rolled with these weights:

| Bonus Lootbox | Relative weight | Approximate chance after trigger |
| --- | ---: | ---: |
| Uncommon | 625 | 80.0% |
| Rare | 125 | 16.0% |
| Epic | 25 | 3.2% |
| Legendary | 5 | 0.6% |
| Mythical | 1 | 0.1% |

***

### **Chance**

Some actions can receive a lucky reward or lucky discount. `Chance` decides whether Luck activates. It does not control how strong the lucky result is. Strength is controlled by `Bonus`.

{% hint style="info" %}
$$BaseChance=100*(1-0.99*e^{-0.1*(log_{10}(max(1,Chance)))^{1.2}})$$

$$LuckActivationChance=min(99.99\%,BaseChance+LuckActivationGrants)$$
{% endhint %}

Base chance before item grants:

| Chance | Luck activation chance |
| ---: | ---: |
| 1 | 1.0% |
| 10 | 10.4% |
| 100 | 21.3% |
| 1,000 | 31.9% |
| 10,000 | 41.6% |
| 100,000 | 50.3% |
| 1,000,000 | 58.0% |

Chance grants add percentage points to Luck activation:

| Item rarity | Luck activation chance grant |
| --- | ---: |
| Uncommon | `+1..2% Luck activation chance` |
| Rare | `+3..4% Luck activation chance` |
| Epic | `+5..6% Luck activation chance` |
| Legendary | `+7..8% Luck activation chance` |
| Mythical | `+9..10% Luck activation chance` |

Luck activation chance is capped at `99.99%`, so lucky actions remain random even for extremely strong Chance builds.

***

### **Bonus**

`Bonus` controls how strong a lucky result is after `Chance` has activated it.

There are two Bonus outputs:

| Output | Used for |
| --- | --- |
| Lucky reward power | Adds extra reward value, such as bonus XP or bonus Essence. |
| Lucky discount power | Reduces a cost or fee, such as crafting upgrade cost or marketplace sale fee. |

The shared base power is:

{% hint style="info" %}
$$LuckyBonusPower=floor({100 \over 3}*log_{10}(max(1,Bonus))+{10 \over max(1,Bonus)})$$
{% endhint %}

Base power before item grants:

| Bonus | Lucky Bonus Power |
| ---: | ---: |
| 1 | 10% |
| 10 | 34% |
| 100 | 66% |
| 1,000 | 100% |
| 1,000,000 | 200% |
| 1,000,000,000 | 300% |

#### Reward power

Reward-style actions use Lucky Bonus Power directly. Reward grants add percentage points on top, and the final reward power is capped at `900%`.

{% hint style="info" %}
$$RewardPower=min(900\%,LuckyBonusPower+RewardPowerGrants)$$

$$BonusReward=floor(BaseReward*RewardPower/100)$$
{% endhint %}

Reward grants are rolled by rarity:

| Item rarity | Lucky reward power grant |
| --- | ---: |
| Uncommon | `+1..2% lucky reward power` |
| Rare | `+3..4% lucky reward power` |
| Epic | `+5..6% lucky reward power` |
| Legendary | `+7..8% lucky reward power` |
| Mythical | `+9..10% lucky reward power` |

Current reward-style lucky actions:

| Action | Lucky effect |
| --- | --- |
| XP purchase | Adds bonus XP. |
| Crafting scrap | Adds bonus Essence. |

#### Discount power

Discount-style actions turn Lucky Bonus Power into a discount curve. Discount grants then add percentage points on top, and the final discount power is capped at `75%`.

{% hint style="info" %}
$$BaseDiscount=50\%*{LuckyBonusPower \over LuckyBonusPower+100}$$

$$DiscountPower=min(75\%,BaseDiscount+DiscountGrants)$$

$$DiscountValue=floor(BaseCostOrFee*DiscountPower/100)$$
{% endhint %}

Discount grants are fixed by rarity:

| Item rarity | Lucky discount power grant |
| --- | ---: |
| Uncommon | `+1% lucky discount power` |
| Rare | `+2% lucky discount power` |
| Epic | `+3% lucky discount power` |
| Legendary | `+4% lucky discount power` |
| Mythical | `+5% lucky discount power` |

Current discount-style lucky actions:

| Action | Lucky effect |
| --- | --- |
| Crafting upgrade | Reduces Essence cost. |
| Marketplace sale fee | Reduces the Gold fee burned on sale. |

Example discount rates:

| Lucky Bonus Power | Discount grants | Final discount |
| ---: | ---: | ---: |
| 100% | none | 25.0% |
| 100% | one Mythical, `+5%` | 30.0% |
| 200% | none | 33.3% |
| 200% | six Mythical, `+30%` | 63.3% |
| 1,000% | six Mythical, `+30%` | 75.0% cap |

***

### **Quick Summary**

| Trait | What it improves | Where it matters |
| --- | --- | --- |
| Cards | Number of turns. | Common Lootbox opening. |
| Shards | Chance to receive missing Chest Shards instead of duplicates. | Weekly Chest Shard puzzle and free Common Lootboxes. |
| Boxes | Chance to receive an extra higher-rarity Lootbox. | Starting a Common Lootbox opening. |
| Chance | Probability that Luck activates. | XP purchase, crafting, marketplace sale fee, and other lucky actions. |
| Bonus | Strength of a lucky result after activation. | Bonus XP, bonus Essence, upgrade discounts, marketplace fee discounts. |

`Chance` and `Bonus` work together: `Chance` answers "did Luck activate?", while `Bonus` answers "how strong is the lucky result?".
