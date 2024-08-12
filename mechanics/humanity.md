---
icon: fingerprint
---

# User Humanity

To protect the system from abuse, every user in Questfall should spend Humanity to complete a quest or cast a vote. This way, users can choose how they want to spend their Humanity, whether it is to gain mining power this week by completing quests, or to invest in the future by levelling up through proper voting. Without Humanity, a user can do neither.

The main way to gain Humanity for any user is by completing challenges, which are a special type of quest where the answer depends on the account.

{% hint style="info" %}
For example, writing "New York" backwards is a bad challenge because it gives the same answer for every account, whereas writing usernames backwards gives individual answers and is therefore a good challenge.
{% endhint %}

In addition to individual answers, challenges, unlike quests, are pre-moderated by the community, which assigns them a difficulty level that affects the amount of Humanity (from 1000 to 8000) that users receive for completing them.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
The Humanity earned by completing a challenge is calculated according to the following formula, depending on the difficulty of the challenge:

$$
Humanity=(10+ChallengeDifficulty)^{3}
$$

Since the difficulty of a challenge can range from 0 to 10, the Humanity range is 1000 to 8000.
{% endtab %}
{% endtabs %}

Each quest costs 15 Humanity to complete, and each vote costs 1 Humanity to cast. In this way, a user can complete quests ranging from 67 for the easiest challenge to 532 for the hardest, which should be enough for a full day of quest mining.

{% hint style="info" %}
Humanity can be thought of as stamina in RPGs. The main difference is that Humanity can be negative.
{% endhint %}

Challenges are randomly assigned, but users can bypass the current challenge and move on to the next one for 1,000 Humanity. As Humanity can be negative, bypassing many challenges will prevent a user from mining QFT or leveling up, forcing him to regain Humanity.

Users can also report the current challenge to bypass it, and if the community vote decides that the report is valid and it is impossible to complete a challenge, it will be deactivated, and the reporter will receive 10,000 Humanity as a reward. If the community decides that the report is not valid, the reporter will be punished by having his Humanity reduced by the same 10,000.

Another way to avoid challenges and gain Humanity is to burn 5 Credits and get 10,000 Humanity in return. In this way, a user brings value to the entire community by burning QFT for Credits, and as QFT is a limited resource, there is no threat of a Sybil attack.

