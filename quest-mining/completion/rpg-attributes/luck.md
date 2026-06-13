---
icon: clover
---

# Luck

Luck affects three different parts of Questfall:

* collecting Chest Shards for free Common loot boxes;
* opening Common loot boxes through the card system;
* receiving lucky bonuses and discounts during economy actions.

Luck is split into five traits:

| Trait | Meaning |
| --- | --- |
| Shards | Makes missing Chest Shards more likely to drop. |
| Intuition | Gives card checks during Common loot box opening. |
| Chance | Makes lucky bonuses happen more often. |
| Bonus | Makes lucky bonuses and lucky discounts stronger. |
| Opportunity | Gives more turns during Common loot box opening. |

RPG items can also add direct grants to these traits' final effects. Grant values depend on item rarity.

***

### **Shards**

Chest Shards work like a weekly puzzle. Each shard reward gives one puzzle piece. When all piece types are collected, the player receives a free Common loot box, one of each piece is consumed, and any duplicate pieces remain for the same weekly puzzle.

`Shards` does not decide how many shard pieces a quest gives. That is controlled by the Mining trait `Loot`. `Shards` decides which piece type is selected after a shard drop has already happened.

At the start, missing pieces are intentionally harder to hit than duplicate pieces. This creates pressure to improve `Shards`: without it, players will often collect duplicate pieces while still missing the last piece needed for the next loot box.

The system uses weights:

{% hint style="info" %}
$$MissingBias=floor(100*log_{10}(max(1,Shards)))+ShardGrants$$

$$CollectedPieceWeight=2$$

$$MissingPieceWeight=2^{MissingBias/100}$$
{% endhint %}

At low `Shards`, each already collected piece type has more weight than each missing piece type. As `Shards` grows, missing pieces become more likely. There is no point where the chance becomes exactly 100%, but very high `Shards` can make missing pieces much more likely.

For a 10-piece puzzle where the player has 9 piece types and is missing 1 piece type:

| Shards | Missing Bias | Chance that the next piece is the missing type |
| --- | --- | --- |
| `1` | `0` | `5.3%` |
| `10` | `100` | `10.0%` |
| `100` | `200` | `18.2%` |
| `1,000` | `300` | `30.8%` |
| `10,000` | `400` | `47.1%` |
| `1,000,000` | `600` | `78.0%` |

Item grants add to `Missing Bias` after the trait formula:

| Item rarity | Missing Shard Bias grant |
| --- | --- |
| Uncommon | `+5..10` |
| Rare | `+10..25` |
| Epic | `+25..50` |
| Legendary | `+50..75` |
| Mythical | `+75..100` |

{% hint style="info" %}
Example: a player has `100` Shards. The base bias is `200`. If an item adds `+80 Missing Shard Bias`, the final bias becomes `280`, so missing pieces are treated as if the player had a much stronger Shards build.
{% endhint %}

***

### **Intuition**

Common loot boxes use a card opening flow. The player chooses cards over several turns. Some cards are safe and can award items. Some cards are dead, and choosing a dead card ends the opening. Already won items are kept.

`Intuition` gives card checks before choosing. A check reveals only whether one card is `safe` or `dead`. It does not reveal item identity, rarity, market value, or any other hidden item details.

The number of checks is:

{% hint style="info" %}
$$CardChecks=floor(log_{10}(max(1,Intuition)))+1+CardCheckGrants$$
{% endhint %}

Base checks before item grants:

| Intuition | Card checks |
| --- | --- |
| `1` | `1` |
| `10` | `2` |
| `100` | `3` |
| `1,000` | `4` |
| `10,000` | `5` |
| `1,000,000` | `7` |

Item grants add fixed whole checks:

| Item rarity | Card Check grant |
| --- | --- |
| Uncommon | `+1` |
| Rare | `+2` |
| Epic | `+3` |
| Legendary | `+4` |
| Mythical | `+5` |

{% hint style="info" %}
Example: a player has `1,000` Intuition, so they receive `4` base checks. If an Epic item grants `+3 Card Checks`, the opening starts with `7` checks.
{% endhint %}

Checks make card openings easier to read, but they do not guarantee a perfect opening. A player still needs enough turns from `Opportunity`, and a checked card can only reveal safe/dead status.

***

### **Opportunity**

`Opportunity` controls how many turns a Common loot box opening can have. More turns means more chances to pick item cards before the opening ends.

Turns are stronger than checks because each successful turn can become an item. For that reason, turn grants are fixed by rarity instead of rolled from wide ranges.

{% hint style="info" %}
$$CommonTurns=floor(log_{10}(max(1,Opportunity)))+1+TurnGrants$$
{% endhint %}

Base turns before item grants:

| Opportunity | Common loot box turns |
| --- | --- |
| `1` | `1` |
| `10` | `2` |
| `100` | `3` |
| `1,000` | `4` |
| `10,000` | `5` |
| `1,000,000` | `7` |

Item grants add fixed turn counts:

| Item rarity | Common Turn grant |
| --- | --- |
| Uncommon | `+1` |
| Rare | `+2` |
| Epic | `+3` |
| Legendary | `+4` |
| Mythical | `+5` |

{% hint style="info" %}
Example: a player has `100` Opportunity, so they receive `3` base turns. A Legendary item with `+4 Common Turns` raises that opening to `7` turns.
{% endhint %}

Higher-rarity loot boxes do not use this card flow. They open immediately and mint one item at the box floor rarity or higher. `Intuition` and `Opportunity` affect Common loot boxes only.

***

### **Chance**

Some economy actions can receive a lucky bonus or lucky discount. `Chance` decides whether the lucky proc happens. It does not control how strong the proc is. Strength is controlled by `Bonus`.

The lucky proc chance is:

{% hint style="info" %}
$$BaseChance=100*(1-0.99*e^{-0.1*(log_{10}(max(1,Chance)))^{1.2}})$$

$$LuckyBonusChance=min(99.99\%,BaseChance+ChanceGrants)$$
{% endhint %}

Base chance before item grants:

| Chance | Lucky proc chance |
| --- | --- |
| `1` | `1%` |
| `10` | `10.4%` |
| `100` | `21.3%` |
| `1,000` | `31.9%` |
| `10,000` | `41.6%` |
| `100,000` | `50.3%` |
| `1,000,000` | `58.0%` |

Item grants add percentage points to the proc chance:

| Item rarity | Lucky Bonus Chance grant |
| --- | --- |
| Uncommon | `+1..2 percentage points` |
| Rare | `+3..4 percentage points` |
| Epic | `+5..6 percentage points` |
| Legendary | `+7..8 percentage points` |
| Mythical | `+9..10 percentage points` |

{% hint style="info" %}
Example: a player has `1,000` Chance, so their base lucky proc chance is `31.9%`. If items add `+14 percentage points`, the final chance becomes `45.9%`.
{% endhint %}

Lucky proc chance is capped at `99.99%`. The cap exists so lucky actions remain random even for extremely strong builds.

***

### **Bonus**

`Bonus` controls how strong a lucky proc is after `Chance` has already triggered it.

This trait produces `Lucky Bonus Power`:

{% hint style="info" %}
$$LuckyBonusPower=floor({100 \over 3}*log_{10}(max(1,Bonus))+{10 \over max(1,Bonus)})$$
{% endhint %}

Base power before action-specific item grants:

| Bonus | Lucky Bonus Power |
| --- | --- |
| `1` | `10%` |
| `10` | `34%` |
| `100` | `66%` |
| `1,000` | `100%` |
| `1,000,000` | `200%` |
| `1,000,000,000` | `300%` |

There is no hard `100%` cap on `Lucky Bonus Power`. A very strong `Bonus` build can make reward-style lucky procs larger than the base action value.

#### Reward bonuses

For reward-style actions, item grants add directly to the reward rate:

{% hint style="info" %}
$$RewardRate=LuckyBonusPower+RewardBonusGrants$$

$$BonusValue=floor(BaseReward*RewardRate/100)$$
{% endhint %}

Reward-style grants are rolled by rarity:

| Item rarity | Lucky Reward Bonus Rate grant |
| --- | --- |
| Uncommon | `+1..2 percentage points` |
| Rare | `+3..4 percentage points` |
| Epic | `+5..6 percentage points` |
| Legendary | `+7..8 percentage points` |
| Mythical | `+9..10 percentage points` |

Current reward-style lucky actions:

| Action | Lucky effect |
| --- | --- |
| XP purchase | Adds bonus XP. |
| Crafting scrap | Adds bonus Essence. |

{% hint style="info" %}
Example: a player buys `1,000` XP. Their lucky proc happens. They have `1,000` Bonus, so `Lucky Bonus Power = 100%`. They also have an Epic XP reward grant of `+6 percentage points`. The reward rate is `106%`, so the proc adds `1,060` bonus XP.
{% endhint %}

#### Discount bonuses

For discount-style actions, `Lucky Bonus Power` first creates a base discount curve. Then direct discount grants are added on top of the final discount rate:

{% hint style="info" %}
$$BaseDiscount=50\%*LuckyBonusPower/(LuckyBonusPower+100)$$

$$DiscountRate=BaseDiscount+DirectDiscountGrants$$

$$DiscountValue=floor(BaseCostOrFee*DiscountRate)$$

$$FinalCostOrFee=BaseCostOrFee-DiscountValue$$
{% endhint %}

Direct discount grants are fixed by rarity:

| Item rarity | Lucky Discount grant |
| --- | --- |
| Uncommon | `+1 percentage point` |
| Rare | `+2 percentage points` |
| Epic | `+3 percentage points` |
| Legendary | `+4 percentage points` |
| Mythical | `+5 percentage points` |

Current discount-style lucky actions:

| Action | Lucky effect |
| --- | --- |
| Crafting upgrade | Reduces Essence cost. |
| Marketplace sale fee | Reduces the Gold fee burned on sale. |

The base discount approaches `50%` but does not reach it. Direct discount grants are added on top and are felt immediately. With six Mythical discount grants, direct grants can add `+30 percentage points`, so the theoretical maximum approaches `80%`. The discount never turns into cashback.

{% hint style="info" %}
Example: a crafting upgrade costs `1,000` Essence. The lucky proc happens. The player has `1,000` Bonus, so `Lucky Bonus Power = 100%`. The base discount is `25%`. If the player also has one Mythical upgrade discount grant, it adds `+5 percentage points`, so the final discount is `30%`. The player saves `300` Essence and pays `700`.
{% endhint %}

Example discount rates:

| Lucky Bonus Power | Direct discount grants | Final discount |
| --- | --- | --- |
| `100%` | none | `25.0%` |
| `100%` | one Mythical, `+5 pp` | `30.0%` |
| `200%` | none | `33.3%` |
| `200%` | six Mythical, `+30 pp` | `63.3%` |
| `1,000%` | six Mythical, `+30 pp` | `75.5%` |

***

### **Quick Summary**

| Trait | What it improves | Where it matters |
| --- | --- | --- |
| Shards | Chance to receive missing Chest Shards instead of duplicates. | Weekly Chest Shard puzzle and free Common loot boxes. |
| Intuition | Number of safe/dead card checks. | Common loot box opening. |
| Opportunity | Number of turns. | Common loot box opening. |
| Chance | Probability that a lucky proc happens. | XP purchase, crafting, marketplace sale fee. |
| Bonus | Strength of a lucky proc after it happens. | Bonus XP, bonus Essence, upgrade discounts, marketplace fee discounts. |

`Chance` and `Bonus` work together: `Chance` answers "did the lucky proc happen?", while `Bonus` answers "how strong is the proc?".
