---
icon: pickaxe
---

# Mining

Mining is the attribute for players who want to earn more from completing quests.

It affects five traits:

| Trait | Meaning |
| --- | --- |
| Power | Increases Mining Points earned from completed quests. |
| Flow | Adds a Mining Points bonus while flow is active. |
| Focus | Keeps flow active for longer between successful mining actions. |
| Loot | Makes Chest Shard rewards more frequent after quests. |
| Priority | Moves pending quest completions higher in the community moderation queue. |

Mining Points are used for the weekly quest completion competition. Chest Shards are used to open free Common loot boxes.

{% hint style="info" %}
Weekly QFT rewards are distributed inside [leagues](../leagues.md), so miners compete against other users in their own league, not against the entire platform at once.
{% endhint %}

***

### **Quest completion flow**

A mining action starts when a user completes a quest.

Some quest types can be checked automatically. In that case, the result is accepted immediately. Other quest types require community moderation, so the completion waits in a moderation queue until it is accepted or rejected.

When a completion is accepted, the user can receive two types of mining rewards:

* Mining Points, which increase the user's weekly Mining Score;
* Chest Shard rolls, which can produce puzzle pieces for free Common loot boxes.

{% hint style="info" %}
A pending moderated completion is not lost. It simply waits for community moderation. `Priority` only affects the order in which pending completions are shown to moderators.
{% endhint %}

***

### **Mining Points**

Mining Points start from the quest's [Quest Bounty](../../creation/quest-bounty.md). The Bounty is set by the quest author and is the same base value for every user.

The final reward also depends on the player's Mining Power, Flow, and Mining Boost:

{% hint style="info" %}
$$MiningPoints=floor(QuestBounty*(1+\frac{MiningPower}{100})*FlowMultiplier*MiningBoost)$$
{% endhint %}

`MiningBoost` is not a Mining trait. It is a separate quest-rating mechanic that rewards users for correctly estimating unrated quests.

`FlowMultiplier` is `1` when flow is not active. When flow is active, it is increased by the `Flow` trait.

{% hint style="info" %}
Example: a quest has `100` Quest Bounty, the player has `1,200%` Mining Power, no active flow, and `1` Mining Boost.

$$floor(100*(1+\frac{1200}{100})*1*1)=1300$$

The player receives `1,300` Mining Points.
{% endhint %}

***

### **Power**

`Power` controls Mining Power directly. Mining Power is a percentage bonus applied to the quest's Bounty.

{% hint style="info" %}
$$BaseMiningPower=floor(Power)$$

$$FinalMiningPower=BaseMiningPower*(1+\frac{MiningPowerGrants}{100})$$
{% endhint %}

Item grants increase Mining Power multiplicatively. Multiple grants are added together first, then applied as one multiplier.

| Item rarity | Mining Power grant |
| --- | --- |
| Uncommon | `+5..10% Mining Power` |
| Rare | `+11..20% Mining Power` |
| Epic | `+21..30% Mining Power` |
| Legendary | `+31..40% Mining Power` |
| Mythical | `+50..60% Mining Power` |

Examples:

| Build | Final Mining Power |
| --- | --- |
| `1,000` Power, no grants | `1,000%` |
| `1,000` Power, one Rare `+20% Mining Power` grant | `1,200%` |
| `1,000` Power, one Mythical `+60% Mining Power` grant | `1,600%` |
| `1,000` Power, two Mythical `+60% Mining Power` grants | `2,200%` |

{% hint style="info" %}
With `100` Quest Bounty and `1,000%` Mining Power, the quest gives `1,100` Mining Points before Flow and Mining Boost.
{% endhint %}

***

### **Flow**

`Flow` increases Mining Points while flow is active.

Flow is binary. It does not grow with every consecutive quest. Either flow is active and the full Flow bonus applies, or flow is inactive and the multiplier stays at `1`.

{% hint style="info" %}
$$t=log_{10}(max(1,Flow))$$

$$BaseFlowBonus=floor(1+\frac{99*t^2}{t^2+9})$$

$$FinalFlowBonus=BaseFlowBonus+FlowBonusGrants$$

$$FlowMultiplier=1+\frac{FinalFlowBonus}{100}$$
{% endhint %}

Base Flow before item grants:

| Flow | Flow bonus | Flow multiplier |
| --- | --- | --- |
| `1` | `+1%` | `x1.01` |
| `10` | `+10%` | `x1.10` |
| `100` | `+31%` | `x1.31` |
| `1,000` | `+50%` | `x1.50` |
| `10,000` | `+64%` | `x1.64` |
| `100,000` | `+73%` | `x1.73` |
| `1,000,000` | `+80%` | `x1.80` |

The base curve approaches `+100%`, which means a strong Flow build can roughly double Mining Points while flow is active. Item grants can push the bonus above that soft limit.

| Item rarity | Flow bonus grant |
| --- | --- |
| Uncommon | `+5..10% Flow bonus` |
| Rare | `+11..20% Flow bonus` |
| Epic | `+21..30% Flow bonus` |
| Legendary | `+31..40% Flow bonus` |
| Mythical | `+41..50% Flow bonus` |

{% hint style="info" %}
Example: a player has `1,000` Flow, so the base Flow bonus is `+50%`. A Mythical item with `+50% Flow bonus` raises the final Flow bonus to `+100%`, so active flow gives `x2` Mining Points.
{% endhint %}

***

### **Focus**

`Focus` controls how long flow stays active between successful mining actions.

If the player completes another successful mining action within the Focus window, flow is active for that action. After the reward is calculated, the flow timer is refreshed.

If the player waits too long, flow expires. The next successful mining action starts a new timer, but does not receive the flow bonus itself.

{% hint style="info" %}
$$t=log_{10}(max(1,Focus))$$

$$BaseFocusMinutes=floor(1+\frac{239*t^2}{t^2+25})$$

$$FinalFocusMinutes=BaseFocusMinutes+FocusWindowGrants$$
{% endhint %}

Base Focus window before item grants:

| Focus | Flow retention window |
| --- | --- |
| `1` | `1 min` |
| `10` | `10 min` |
| `100` | `33 min` |
| `1,000` | `64 min` |
| `10,000` | `94 min` |
| `100,000` | `120 min` |
| `1,000,000` | `142 min` |

The base curve approaches `240 minutes`, or `4 hours`, but does not reach it. Item grants add direct minutes on top.

| Item rarity | Flow window grant |
| --- | --- |
| Uncommon | `+5..10 minutes Flow window` |
| Rare | `+11..20 minutes Flow window` |
| Epic | `+21..30 minutes Flow window` |
| Legendary | `+31..45 minutes Flow window` |
| Mythical | `+46..60 minutes Flow window` |

{% hint style="info" %}
Example: a player has `1,000` Focus, so the base window is `64 minutes`. A Mythical item with `+60 minutes Flow window` raises the final window to `124 minutes`.
{% endhint %}

***

### **Loot**

`Loot` controls how often completed quests create Chest Shard rolls.

It does not decide which shard piece is selected. After `Loot` creates a shard roll, the Luck trait [`Shards`](luck.md#shards) decides whether the player is more likely to receive a missing puzzle piece or another duplicate.

{% hint style="info" %}
$$BaseDropRate=floor(50*log_{10}(max(1,Loot))+\frac{10}{max(1,Loot)})$$

$$FinalDropRate=BaseDropRate+ShardDropRateGrants$$
{% endhint %}

Each `100%` gives one guaranteed shard roll. The remaining percentage is the chance to receive one extra shard roll.

{% hint style="info" %}
At `250%` final drop rate, the player receives `2` guaranteed shard rolls and has a `50%` chance to receive a third roll.
{% endhint %}

Base drop rate before item grants:

| Loot | Quest Shard Drop Rate |
| --- | --- |
| `1` | `10%` |
| `10` | `51%` |
| `100` | `100%` |
| `1,000` | `150%` |
| `10,000` | `200%` |
| `100,000` | `250%` |
| `1,000,000` | `300%` |

Item grants add directly to the final shard roll chance:

| Item rarity | Shard roll chance grant |
| --- | --- |
| Uncommon | `+5..10% shard roll chance` |
| Rare | `+11..25% shard roll chance` |
| Epic | `+26..50% shard roll chance` |
| Legendary | `+51..75% shard roll chance` |
| Mythical | `+76..100% shard roll chance` |

{% hint style="info" %}
Example: a player has `1,000` Loot, so the base drop rate is `150%`. A Mythical item with `+100% shard roll chance` raises it to `250%`: two guaranteed shard rolls and a 50% chance for a third.
{% endhint %}

***

### **Priority**

`Priority` affects quest completions that require community moderation.

Higher Priority moves a completion closer to the front of the moderation queue. It does not increase Mining Points, does not create extra Chest Shards, and does not skip moderation. Every moderated completion still needs to be checked.

{% hint style="info" %}
$$BaseCompletionModerationPriority=floor(Priority)$$

$$FinalCompletionModerationPriority=BaseCompletionModerationPriority*(1+\frac{PriorityGrants}{100})$$
{% endhint %}

Item grants increase Completion Moderation Priority multiplicatively. Multiple grants are added together first, then applied as one multiplier.

| Item rarity | Quest moderation priority grant |
| --- | --- |
| Uncommon | `+5..10% quest moderation priority` |
| Rare | `+11..20% quest moderation priority` |
| Epic | `+21..30% quest moderation priority` |
| Legendary | `+31..40% quest moderation priority` |
| Mythical | `+50..60% quest moderation priority` |

Examples:

| Build | Final Completion Moderation Priority |
| --- | --- |
| `1,000` Priority, no grants | `1,000` |
| `1,000` Priority, one Rare `+20% quest moderation priority` grant | `1,200` |
| `1,000` Priority, one Mythical `+60% quest moderation priority` grant | `1,600` |

To keep low-priority users from being stuck forever, waiting time also matters. Every `10 minutes` already spent in the moderation queue is treated like roughly `+100` Completion Moderation Priority when the queue is compared.

{% hint style="info" %}
Example: a fresh completion has `1,000` Priority. Another completion has only `10` Priority, but it has already waited `100 minutes`. The older completion receives about `+1,000` waiting advantage, so it becomes competitive with the fresh high-priority completion.
{% endhint %}

Priority matters most when there is a moderation backlog. If the community moderates everything quickly, most completions will be processed quickly regardless of Priority.

***

### **Stamina in Mining**

Mining also spends stamina.

Stamina is not a Mining trait. It is a separate character resource that limits how many quest actions a user can perform in a short time. This protects the platform from unlimited automated quest completion and makes mining pace part of character development.

In this article, stamina matters only as the cost of performing quest actions. Mining traits decide how many points and shard rolls successful completions can create, how long flow lasts, and how moderated completions are ordered.

***

### **Quick Summary**

| Trait | What it improves | Where it matters |
| --- | --- | --- |
| Power | Mining Points from Quest Bounty. | Weekly mining score and league rewards. |
| Flow | Mining Points while flow is active. | Reward streaks and active mining sessions. |
| Focus | Time allowed between successful mining actions before flow expires. | Keeping flow active without rushing every action. |
| Loot | Number of Chest Shard rolls from completed quests. | Free Common loot boxes. |
| Priority | Position in the completion moderation queue. | Moderated quest completions during backlogs. |
