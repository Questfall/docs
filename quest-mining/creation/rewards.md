---
icon: coins
---

# Rewards

To motivate authors to create interesting, educational, or fun quests that are appreciated by the community, Questfall can configure an independent weekly Author Gold pool. This pool is separate from miner rewards: an absent Author pool never blocks the miner competition.

Only accepted completions of quests published in the Quest Feed are counted. All publications of the same stable quest are grouped as one quest before its weekly score is calculated. A completion stores the participant's level when it is accepted, so later level changes cannot rewrite an Author Space's result. When a pool is enabled during an already-running week, tracking begins at the returned UTC `tracking_start`; earlier completions are not backfilled.

Since quest completions are not protected from Sybil attacks, malicious actors can generate new accounts, quests, and their completions at will. For this reason, the reward distribution mechanics take into account author Karma and the number and variety of completions.

First, the entire Gold pool is segmented by Karma bands through a sliding reward window. The window starts at cutoff `0` and can move right until its permanent cutoff reaches `5`. The cutoff is fixed when a week is activated, so it never changes inside that week and the live projection and final settlement always use the same snapshot.

At activation, the highest Karma band among all non-system Author Spaces determines the frontier. Official Spaces are included and a Space does not need a weekly score to move the frontier. Let `b` be that highest band and `c` the previous weekly cutoff:

$$frontier=clamp(b-4,0,5)$$

$$cutoff=min(5,max(c,min(c+1,frontier)))$$

The cutoff therefore never decreases and can advance by at most one band per week. A Space reaching band `5` opens cutoff `1` for the following week; even a Space reaching band `9` cannot make the window skip more than one step.

For an Author Space with `band=floor(Karma)`, a band below the weekly cutoff is not qualified and has weight `0`. Every band at or above the cutoff remains qualified, including bands above the main five-band window, and uses:

$$weight=band-cutoff+1$$

<table><thead><tr><th align="center">Weekly cutoff</th><th align="center">Excluded bands</th><th align="center">Example effective weights</th></tr></thead><tbody><tr><td align="center">0 (launch)</td><td align="center">None</td><td align="center">Band 0 = 1, band 5 = 6, band 9 = 10</td></tr><tr><td align="center">1</td><td align="center">Band 0</td><td align="center">Band 1 = 1, band 5 = 5, band 9 = 9</td></tr><tr><td align="center">5 (final)</td><td align="center">Bands 0–4</td><td align="center">Band 5 = 1, band 7 = 3, band 9 = 5</td></tr></tbody></table>

{% hint style="info" %}
Only non-empty qualified bands with a positive score take shares. Empty bands and bands below the cutoff receive zero, and the percentages are recalculated from the remaining effective weights. If no qualified Space has a positive score, the whole pool remains unallocated.
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

Gold is allocated among non-empty qualified bands using the effective sliding-window weights. Inside each band it is allocated proportionally to score. Both allocation stages use the largest-remainder method with stable tie-breaking, so integer Gold totals are exact. At launch cutoff `0`, a band-0-only competition has weight `1` and receives the entire configured pool.

## Settlement And Owner Withdrawal

Settlement runs after the UTC week boundary. It creates one immutable pending payout receipt per rewarded Author Space and records ledger and audit entries. The receipt keeps its original currency and amount; the Space Silver treasury is not changed.

Pending receipts from multiple weeks and seasons accumulate without expiry. All Team members can see earned, available, and previously withdrawn amounts. Only the owner can withdraw, and each operation takes all currently pending receipts of one currency into the owner's corresponding personal balance. Replaying settlement or withdrawal is idempotent and never pays the same receipt twice.

Gold and QFT receipts can coexist. When new Author rewards begin using QFT, older pending Gold remains a separate withdrawable balance and is not force-migrated.

{% hint style="info" %}
We intentionally create a mechanic where the high Karma authors have a huge advantage over the low Karma ones, because many project teams do not care about their Karma and rewards, as their primary goal is to attract users to their website, not to entertain the public.
{% endhint %}
