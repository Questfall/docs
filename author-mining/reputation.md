---
icon: heart
---

# Reputation

Each author in Questfall has a Reputation attribute, which is essentially a moving average of the author's quest ratings. This means that Reputation range is the same as the rating range, which goes from 0 to 10 in either direction, depending on the rating of the author's latest quests.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption><p>Reputation of the author depends on the rating of his quests.</p></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
Reputation is calculated using the following formula:

$$
Reputation_{n}=\frac{9*Reputation_{n-1}+Rating_{n}}{10}
$$

For example, if a new author posts a quest that receives a 7.5 rating, the author's reputation will be calculated accordingly: $$\frac{9*0+7.5}{10}=0.75$$. If the author has a reputation of 5 and the new quest has a rating of 8.4, the author's reputation will increase: $$\frac{9*5+8.4}{10}=5.34$$, but if the rating is lower (say 3.4), the author's reputation will decrease: $$\frac{9*5+3.4}{10}=4.84$$.
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Because of the voting mechanic, malicious authors can't abuse the quest rating to increase their Reputation. Read more about voting process in [Consensus Voting](broken-reference) article.
{% endhint %}

