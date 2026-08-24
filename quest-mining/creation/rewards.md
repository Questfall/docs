---
icon: coins
---

# Rewards

To motivate authors to create interesting, educational, or fun quests that are appreciated by the community, Questfall can configure an independent weekly Author Gold pool. This pool is separate from miner rewards: an absent Author pool never blocks the miner competition.

Only accepted completions of quests published in the Quest Feed are counted. A completion stores the participant's level when it is accepted, so later level changes cannot rewrite an Author Space's result. When a pool is enabled during an already-running week, tracking begins at the returned UTC `tracking_start`; earlier completions are not backfilled.

Since quest completions are not protected from Sybil attacks, malicious actors can generate new accounts, quests, and their completions at will. For this reason, the reward distribution mechanics take into account author Karma and the number and variety of completions.

First, the entire Gold pool to be rewarded at the end of the week is segmented based on Karma bands. Each higher band receives one more share of the reward distribution. A live projection uses the Author Space's current Karma; settlement fixes the final band immutably.&#x20;

<table><thead><tr><th width="158" align="center">Karma Range</th><th width="89" align="center">Shares</th><th width="117" align="center">Percentage</th></tr></thead><tbody><tr><td align="center">0-1</td><td align="center">0</td><td align="center">0.0%</td></tr><tr><td align="center">1-2</td><td align="center">1</td><td align="center">2.2%</td></tr><tr><td align="center">2-3</td><td align="center">2</td><td align="center">4.4%</td></tr><tr><td align="center">3-4</td><td align="center">3</td><td align="center">6.7%</td></tr><tr><td align="center">4-5</td><td align="center">4</td><td align="center">8.9%</td></tr><tr><td align="center">5-6</td><td align="center">5</td><td align="center">11.1%</td></tr><tr><td align="center">6-7</td><td align="center">6</td><td align="center">13.3%</td></tr><tr><td align="center">7-8</td><td align="center">7</td><td align="center">15.6%</td></tr><tr><td align="center">8-9</td><td align="center">8</td><td align="center">17.8%</td></tr><tr><td align="center">9-10</td><td align="center">9</td><td align="center">20.0%</td></tr></tbody></table>

{% hint style="info" %}
If there are no active authors in the Karma range, its shares are set to zero and the percentage is recalculated accordingly.
{% endhint %}

Within each range, the reward pool is distributed according to the Author Space's score, which is calculated from the number of users of different levels who completed each quest. The more diverse the levels, the higher the quest score.

{% hint style="info" %}
To calculate the mining score in a way that takes into account the diversity of levels along with the number of users, the simple mathematical inequality is used:\
$$(a+b)^p<a^p+b^p$$, if 0\<p<1

More specifically, for each quest the number of users of the same level is taken to the power of ⅓, then all such bases are summed, the result is cubed, and that quest result is rounded to the nearest integer:\
$$QuestScore=round\left(\left(\sum_{n=1}^{levels}Completions_{n}^{\frac{1}{3}}\right)^{3}\right)$$

An Author Space's weekly score is the sum of its rounded quest scores. Completions from different quests are never combined before applying the formula.
{% endhint %}

This means that if a quest is completed with the same number of users, but with different levels, the mining score will be greater than if those users were all of the same level.

<table><thead><tr><th width="138">User Level</th><th width="127" align="center">Completions</th><th width="131" align="center">Base</th><th width="144" align="center">Mining Score</th></tr></thead><tbody><tr><td>Case 1</td><td align="center">781</td><td align="center">19.2</td><td align="center"><span class="math">19.2^3=7060</span></td></tr><tr><td>    Level 1 </td><td align="center">625</td><td align="center"><span class="math">625^{\frac{1}{3}}=8.6</span></td><td align="center"></td></tr><tr><td>    Level 2</td><td align="center">125</td><td align="center"><span class="math">125^{\frac{1}{3}}=5</span></td><td align="center"></td></tr><tr><td>    Level 3</td><td align="center">25</td><td align="center"><span class="math">25^{\frac{1}{3}}=2.9</span></td><td align="center"></td></tr><tr><td>    Level 4</td><td align="center">5</td><td align="center"><span class="math">5^{\frac{1}{3}}=1.7</span></td><td align="center"></td></tr><tr><td>    Level 5</td><td align="center">1</td><td align="center"><span class="math">1^{\frac{1}{3}}=1</span></td><td align="center"></td></tr><tr><td>Case 2</td><td align="center">781</td><td align="center">9.2</td><td align="center"><span class="math">9.2^3=781</span></td></tr><tr><td>    Level 1</td><td align="center">781</td><td align="center"><span class="math">781^{\frac{1}{3}}=9.2</span></td><td align="center"></td></tr></tbody></table>

As a result, the higher the author's Karma and the more diverse the users who complete the author's quests, the higher the author's reward at the end of the week. Because the reward pool is segmented by Karma ranges, the activity of low-Karma authors will not affect the earnings of more legitimate authors.

Gold is allocated only among non-empty bands, using band weights `0…9`. Inside each band it is allocated proportionally to score. Both allocation stages use the largest-remainder method with stable tie-breaking, so integer Gold totals are exact. A band-0-only competition has no positive allocation weight, leaving that pool unallocated.

## Treasury Settlement

Settlement runs after the UTC week boundary. It creates one immutable payout receipt per rewarded Author Space, records ledger and audit entries, and converts the reward at the fixed system settlement rate of `1 Gold = 10 Silver`. The resulting Silver is credited directly to the Author Space treasury.

This conversion is automatic and does not use a Character's Trading Conversion trait. Author Spaces do not receive a claimable Gold balance, and the settlement cannot be withdrawn by an owner. Replaying settlement is idempotent and never credits the treasury twice.

In addition, authors who focus on creating valuable quests can earn a large share of the configured Author rewards and use the settled Silver to fund future quests.

{% hint style="info" %}
We intentionally create a mechanic where the high Karma authors have a huge advantage over the low Karma ones, because many project teams do not care about their Karma and rewards, as their primary goal is to attract users to their website, not to entertain the public.
{% endhint %}
