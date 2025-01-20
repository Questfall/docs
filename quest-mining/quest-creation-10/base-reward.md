---
icon: arrow-up-wide-short
---

# Base Reward

In Questfall, anyone can create a quest and publish it to the Quest Feed so that other users can complete it. However, this allows for all kinds of abuse and manipulation, such as Sybil attacks, DDoS attacks, spamming, and scamming.

To protect the system from all of these threats, every published quest should have a Base Reward that requires the burning of Silver. And since Silver can only be earned by burning Gold or through proper moderation, in order to publish a quest, an author should first earn Silver by providing value to the entire community.

{% hint style="info" %}
This puts creators who want to monetize their content for free on an equal footing with projects that have marketing budgets.
{% endhint %}

In this way, publishing a quest requires that a certain amount of Base Reward be purchased with Silver. This Base Reward determines how many mining points users will receive for completing the quest, based on their individual mining power.

The Base Reward also directly affects a quest's position in the feed, since it is sorted based on the rewards users can earn. So if an author offers the highest Base Reward for the quest, it will be the first quest in the feed visible to everyone on the platform.

{% hint style="info" %}
While the quest reward will vary for different users based on their individual mining power, the order of the quests, sorted by reward, will remain the same for each user and will depend solely on the Base Rewards.
{% endhint %}

The Base Reward can range from 1 to 1000, and each additional point in the Base Reward costs more Silver. For the most basic scenario, where a new author with no reputation publishes the quest for one day, the amount of Silver required for different Base Reward levels are as follows:

<table><thead><tr><th width="156">Base Reward</th><th width="141" align="right">Silver</th><th width="116" align="right">USD</th></tr></thead><tbody><tr><td>1</td><td align="right">100</td><td align="right">$0.1</td></tr><tr><td>10</td><td align="right">10,000</td><td align="right">$10</td></tr><tr><td>100</td><td align="right">1,000,000</td><td align="right">$1,000</td></tr><tr><td>1000</td><td align="right">100,000,000</td><td align="right">$100,000</td></tr></tbody></table>

{% hint style="info" %}
The basic formula for the amount of Silver required for a given Base Reward is:\
$$Silver=(10*BaseReward)^{2}$$
{% endhint %}

The quest can be activated for a specific period of time: from 1 to 30 days, and each day the quest is active, the Base Reward remains the same. However, the authors must pay for each day, but the amount of Silver required to maintain the Base Reward decreases by 10% for each subsequent day.

For example, publishing the quest with the Base Reward of 1 for the author with zero reputation for 10 days will cost 652 Silver:

<table><thead><tr><th width="98">Day</th><th width="141" align="right">Silver per Day</th><th width="133" align="right">Silver Total</th></tr></thead><tbody><tr><td>1</td><td align="right">100</td><td align="right">100</td></tr><tr><td>2</td><td align="right">90</td><td align="right">190</td></tr><tr><td>3</td><td align="right">81</td><td align="right">271</td></tr><tr><td>4</td><td align="right">73</td><td align="right">344</td></tr><tr><td>5</td><td align="right">66</td><td align="right">410</td></tr><tr><td>6</td><td align="right">59</td><td align="right">469</td></tr><tr><td>7</td><td align="right">53</td><td align="right">522</td></tr><tr><td>8</td><td align="right">48</td><td align="right">570</td></tr><tr><td>9</td><td align="right">43</td><td align="right">613</td></tr><tr><td>10</td><td align="right">39</td><td align="right">652</td></tr></tbody></table>

{% hint style="info" %}
The amount of Silver required for a given Base Reward and a given number of days is:\
$$Silver=(10*BaseReward)^{2}*\sum_{n=1}^{days}0.9^{n-1}$$
{% endhint %}

Besides increasing discount for each subsequent day there is another discount based on the author repuatation. Each point in reputation gives 10% discount for the final price. An author with reputation 1 will have a 10% discount, while the author with repuation of 9 will have a 90% discount.

<table><thead><tr><th width="82" align="center">Rew</th><th width="72" align="center">Days</th><th width="84" align="right">Rep 0</th><th width="87" align="right">Rep 1</th><th width="88" align="right">Rep 3</th><th width="88" align="right">Rep 5</th><th width="85" align="right">Rep 7</th><th width="79">Rep 9</th></tr></thead><tbody><tr><td align="center">5</td><td align="center">10</td><td align="right">16,283</td><td align="right">14,655</td><td align="right">11,398</td><td align="right">8,142</td><td align="right">4,885</td><td>1,628</td></tr><tr><td align="center">10</td><td align="center">5</td><td align="right">40,951</td><td align="right">36,856</td><td align="right">28,666</td><td align="right">20,476</td><td align="right">12,285</td><td>4,095</td></tr><tr><td align="center">10</td><td align="center">10</td><td align="right">65,132</td><td align="right">58,619</td><td align="right">45,593</td><td align="right">32,566</td><td align="right">19,540</td><td>6,513</td></tr></tbody></table>

{% hint style="info" %}
The final formula that determines the cost of publishing a quest is as follows:\
$$Silver=(10*BaseReward)^{2}*\sum_{n=1}^{days}0.9^{n-1}*(1-\frac{Reputation}{10})$$
{% endhint %}

As a result, authors with a high reputation can set a much higher Base Reward for their quests for the same amount of Silver, and get many more completions. And since the number of completions plays a crucial role in the distribution of author rewards at the end of the week, high reputation allows authors to earn more for less Silver.

However, in order to maintain a high reputation while earning QFT from quests, authors will be forced to create quests that are highly rated by the community. Otherwise, a poorly rated quest with many completions can drag down an author's reputation.
