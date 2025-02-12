---
icon: arrow-up-wide-short
---

# Quest Bounty

In Questfall, anyone can create a quest and publish it to the Quest Feed for other users to complete. However, this opens the door to all kinds of abuse and manipulation, such as Sybil attacks, DDoS attacks, spamming, and scamming.

To protect the system from all of these threats, every published quest should have a Bounty that requires the burning of Silver. And since Silver can only be earned by burning Gold or through proper moderation, in order to publish a quest, an author should first earn Silver by providing value to the entire community.

{% hint style="info" %}
This puts creators who want to monetize their content for free on an equal footing with projects that have marketing budgets.
{% endhint %}

The Quest Bounty determines how many mining points the user will receive for completing the quest, since the quest reward is calculated as the product of the bounty and the user's personal parameters, such as individual [mining power](../completion/#mining-power) and [mining boost](../completion/#mining-boost).

The Quest Bounty also directly affects a quest's position in the feed, since it is sorted based on the rewards users can earn. So if an author offers the highest Bounty for the quest, it will be the first quest in the feed visible to everyone on the platform.

{% hint style="info" %}
Setting a relatively high Quest Bounty is the primary way to promote quests.
{% endhint %}

The Bounty can range from 1 to 1000, and each additional point in the Bounty costs more Silver. For the most basic scenario, where a new author with no Karma publishes the quest for one day, the amounts of Silver required for different Quest Bounties are as follows:

<table><thead><tr><th width="110">Bounty</th><th width="141" align="right">Silver</th><th width="116" align="right">USD Price</th></tr></thead><tbody><tr><td>1</td><td align="right">100</td><td align="right">$0.1</td></tr><tr><td>10</td><td align="right">10,000</td><td align="right">$10</td></tr><tr><td>100</td><td align="right">1,000,000</td><td align="right">$1,000</td></tr><tr><td>1000</td><td align="right">100,000,000</td><td align="right">$100,000</td></tr></tbody></table>

{% hint style="info" %}
The basic formula for the amount of Silver required for a day's Bounty is:\
$$Silver=(10*Bounty)^{2}$$
{% endhint %}

The quest can be published for a period of up to 30 days, and the number of days determines the cost of a Bounty. While the first day should be paid at full price, each subsequent day will receive a 10% incremental discount.

For example, publishing the quest with the Bounty of 1 for the author with no Karma for 10 days will cost 652 Silver:

<table><thead><tr><th width="79">Day</th><th width="106" align="right">Day Cost</th><th width="112" align="right">Total Cost</th></tr></thead><tbody><tr><td>1</td><td align="right">100 Silver</td><td align="right">100 Silver</td></tr><tr><td>2</td><td align="right">90 Silver</td><td align="right">190 Silver</td></tr><tr><td>3</td><td align="right">81 Silver</td><td align="right">271 Silver</td></tr><tr><td>4</td><td align="right">73 Silver</td><td align="right">344 Silver</td></tr><tr><td>5</td><td align="right">66 Silver</td><td align="right">410 Silver</td></tr><tr><td>6</td><td align="right">59 Silver</td><td align="right">469 Silver</td></tr><tr><td>7</td><td align="right">53 Silver</td><td align="right">522 Silver</td></tr><tr><td>8</td><td align="right">48 Silver</td><td align="right">570 Silver</td></tr><tr><td>9</td><td align="right">43 Silver</td><td align="right">613 Silver</td></tr><tr><td>10</td><td align="right">39 Silver</td><td align="right">652 Silver</td></tr></tbody></table>

{% hint style="info" %}
The amount of Silver required for a given Bounty and number of days is:\
$$Silver=(10*Bounty)^{2}*\sum_{n=1}^{days}0.9^{n-1}$$
{% endhint %}

In addition to the decreasing price for each consecutive day of publication, there is another global discount based on the author's [Karma](karma.md). Each point of Karma increases the discount exponentially from 0% to 90%.

<table><thead><tr><th width="98" align="center">Karma</th><th width="131" align="center">Discount (%)</th><th width="40"> </th><th width="94" align="center">Karma</th><th width="134" align="center">Discount (%)</th></tr></thead><tbody><tr><td align="center">1</td><td align="center">0</td><td></td><td align="center">6</td><td align="center">20</td></tr><tr><td align="center">2</td><td align="center">0</td><td></td><td align="center">7</td><td align="center">62</td></tr><tr><td align="center">3</td><td align="center">0</td><td></td><td align="center">8</td><td align="center">85</td></tr><tr><td align="center">4</td><td align="center">0</td><td></td><td align="center">9</td><td align="center">90</td></tr><tr><td align="center">5</td><td align="center">4</td><td></td><td align="center">10</td><td align="center">90</td></tr></tbody></table>

{% hint style="info" %}
The final formula that determines the cost of a Quest Bounty is:\
$$Silver=(10*Bounty)^{2}*\sum_{n=1}^{days}0.9^{n-1}*(1-\frac{0.9}{1+e^{-2(Karma-6.6)}})$$
{% endhint %}

As a result, authors with a high Karma can set a much higher Quest Bounty for the same amount of Silver and get many more completions. And since the number of completions plays a crucial role in the distribution of author rewards at the end of the week, higher Karma allows authors to earn more for less Silver.

However, in order to maintain a high Karma while earning QFT from quests, authors will be forced to create quests that are highly rated by the community. Otherwise, a poorly rated quest can drag down an author's Karma.
