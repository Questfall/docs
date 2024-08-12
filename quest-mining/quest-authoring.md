---
icon: pencil
---

# Quest authoring

&#x20;<mark style="background-color:orange;">Coming in Questfall v1.0</mark>&#x20;

Without motivation, authors create quests for no other reason than to promote their projects to the site's audience, as can be seen on the popular existing quest platforms. This leads to the majority of quests being of very low quality, like silly tasks to join the Discord community or repost a tweet in X.

On the other hand, rewards for quests that are appreciated by the community create a very different economic situation. Global system rewards, based on the mining concept, allow authors to earn without selling by providing value to the community in the form of any content.

{% hint style="info" %}
It can be anything: books, articles, lessons, music, pictures, videos and so on.
{% endhint %}

In order to achieve this, 10% of the newly created QFTs will be distributed each week to users who have created quests with an end date that week, based on the popularity and rating of the quest.

***

### Author Reputation

Each author in Questfall has a Reputation attribute, which is essentially a moving average of the author's quest ratings. This means that Reputation range is the same as the rating range, which goes from 0 to 10 in either direction, depending on the rating of the author's latest quests.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption><p>Reputation depending on the quest ratings</p></figcaption></figure>
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
Because of the voting mechanic, malicious authors can't abuse the quest rating to increase their Reputation. Read more about this in [Quest completion](quest-completion.md) article.
{% endhint %}

***

### Quest Points

Users who complete quests receive Quest Points, which are used to calculate their individual User Mining Power. The number of Quest Points is directly related to the reputation of the quest author. The higher the Reputation of an author, the more Quest Points users will receive for completing that author's quests.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
The amount of Quest Points in the quest increases exponentially (from 10 to 110) with the reputation of the author, according to the formula below:

$$
QuestPoints=10+Reptuation^{2}
$$

For example, users who complete a quest from an author with a reputation of 5.4 will each receive $$10+5.4^{2}=39.16$$ Quest Points, while a quest from an author with a reputation of 7.4 will give each user $$10+7.4^{2}=64.76$$ Quest Points.
{% endtab %}
{% endtabs %}

Authors can also add Quest Points to their quests by burning some Credits. The minimum amount is 5 Credits (equivalent to $5), which will add the amount of Quest Points to the quest as if the author had 5 Reputation or 135 Quest Points. The more Credits are burned, the higher the imaginary Reputation will be. There will be no upper limit to the number of Credits an author can burn, as the maximum Reputation 10 will be an unreachable limit.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
The Reputation that is additionally applied&#x20;
{% endtab %}
{% endtabs %}

***

### Author Mining Power

Since the ordering of quests in the global feed depends primarily on the number of Quest Points, a high reputation of authors will ensure high visibility (and as a consequence, popularity) of his quests.

Each quest has an end date when it closes. At the end of the week, the system will collect all quests that have ended during the week and calculate each quest's Mining Power as the product of the quest completions and the quest's rating.



{% hint style="info" %}
Since quest completion is moderated by the community, and quest ratings are based on a "majority wins" voting, there is no way for malicious authors to abuse the system by creating a large number of pointless quests.
{% endhint %}
