---
icon: coins
---

# Rewards

Users who complete quests receive Quest Points, which are used to calculate their individual User Mining Power. The number of Quest Points is directly related to the reputation of the quest author. The higher the Reputation of an author, the more Quest Points users will receive for completing that author's quests.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
The amount of Quest Points in the quest increases exponentially (from 10 to 110) with the reputation of the author, according to the formula below:

$$
QuestPoints=10+Reptuation^{2}
$$

For example, users who complete a quest from an author with a reputation of 5.4 will each receive $$10+5.4^{2}=39.16$$ Quest Points, while a quest from an author with a reputation of 7.4 will give each user $$10+7.4^{2}=64.76$$ Quest Points.
{% endtab %}
{% endtabs %}
