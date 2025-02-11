---
icon: coins
---

# Rewards

To motivate authors to create interesting, educational, or fun quests that are appreciated by the community, 10% of the weekly QFT issue will be distributed to Workspaces based on their performance during the week.

Since quest completions are not protected from Sybil attacks, malicious actors can generate new accounts, quests, and their completions at will. For this reason, the reward distribution mechanics take into account author Karma and the number and variety of completions.

First, the entire bank of QFTs to be rewarded at the end of the week is segmented based on Karma levels. Each higher level of Karma receives one more share of the reward distribution.&#x20;

<table><thead><tr><th width="158" align="center">Karma Range</th><th width="89" align="center">Shares</th><th width="117" align="center">Percentage</th></tr></thead><tbody><tr><td align="center">0-1</td><td align="center">0</td><td align="center">0.0%</td></tr><tr><td align="center">1-2</td><td align="center">1</td><td align="center">2.2%</td></tr><tr><td align="center">2-3</td><td align="center">2</td><td align="center">4.4%</td></tr><tr><td align="center">3-4</td><td align="center">3</td><td align="center">6.7%</td></tr><tr><td align="center">4-5</td><td align="center">4</td><td align="center">8.9%</td></tr><tr><td align="center">5-6</td><td align="center">5</td><td align="center">11.1%</td></tr><tr><td align="center">6-7</td><td align="center">6</td><td align="center">13.3%</td></tr><tr><td align="center">7-8</td><td align="center">7</td><td align="center">15.6%</td></tr><tr><td align="center">8-9</td><td align="center">8</td><td align="center">17.8%</td></tr><tr><td align="center">9-10</td><td align="center">9</td><td align="center">20.0%</td></tr></tbody></table>

{% hint style="info" %}
If there are no active authors in the Karma range, its shares are set to zero and the percentage is recalculated accordingly.
{% endhint %}

Within each range, the reward pool is distributed according to the author's individual mining score, which is calculated based on the number of users of different levels who have completed the quest. The more diverse the levels, the higher the mining score.

{% hint style="info" %}
To calculate the mining score in a way that takes into account the diversity of levels along with the number of users, the simple mathematical inequality is used:\
$$(a+b)^p<a^p+b^p$$, if 0\<p<1

More specifically, the number of users of the same level is taken to the power of ⅓, then all such bases are summed, and the result is taken to the power of 3:\
$$MSCORE=\left(\sum_{n=1}^{levels}Completions_{n}^{\frac{1}{3}}\right)^{3}$$
{% endhint %}

This means that if a quest is completed with the same number of users, but with different levels, the mining score will be greater than if those users were all of the same level.

<table><thead><tr><th width="138">User Level</th><th width="127" align="center">Completions</th><th width="131" align="center">Base</th><th width="144" align="center">Mining Score</th></tr></thead><tbody><tr><td>Case 1</td><td align="center">781</td><td align="center">19.2</td><td align="center"><span class="math">19.2^3=7060</span></td></tr><tr><td>    Level 1 </td><td align="center">625</td><td align="center"><span class="math">625^{\frac{1}{3}}=8.6</span></td><td align="center"></td></tr><tr><td>    Level 2</td><td align="center">125</td><td align="center"><span class="math">125^{\frac{1}{3}}=5</span></td><td align="center"></td></tr><tr><td>    Level 3</td><td align="center">25</td><td align="center"><span class="math">25^{\frac{1}{3}}=2.9</span></td><td align="center"></td></tr><tr><td>    Level 4</td><td align="center">5</td><td align="center"><span class="math">5^{\frac{1}{3}}=1.7</span></td><td align="center"></td></tr><tr><td>    Level 5</td><td align="center">1</td><td align="center"><span class="math">1^{\frac{1}{3}}=1</span></td><td align="center"></td></tr><tr><td>Case 2</td><td align="center">781</td><td align="center">9.2</td><td align="center"><span class="math">9.2^3=781</span></td></tr><tr><td>    Level 1</td><td align="center">781</td><td align="center"><span class="math">781^{\frac{1}{3}}=9.2</span></td><td align="center"></td></tr></tbody></table>

As a result, the higher the author's Karma and the more diverse the users who complete the author's quests, the higher the author's reward at the end of the week. And because the reward pool is segmented by Karma ranges, the activity of low-Karma authors will not affect the earnings of more legitimate authors.

In addition, authors who focus on creating valuable quests will be able to earn a large share of the author rewards, which could be a fortune in the future, depending on the price of QFT.

{% hint style="info" %}
We intentionally create a mechanic where the high Karma authors have a huge advantage over the low Karma ones, because many project teams do not care about their Karma and rewards, as their primary goal is to attract users to their website, not to entertain the public.
{% endhint %}
