---
icon: shield-check
---

# Community Moderation

As noted in the [Sybil Defense](../../overview/sybil-defence.md) article, computers cannot properly judge quest completions because:

* completions can be any kind of content,
* completions must implement unpredictable quest requirements,
* completions must meet minimum quality criteria that are entirely a matter of human perception,
* completions can be published on any available platform on the Internet, most of which fight against automated access to prevent DDoS attacks and content scraping.

In addition to judging content, computers are very bad at risk assessment, especially when it comes to the outside world, since risk assessment in many cases is heavily based on social reputation.

{% hint style="info" %}
For example, what are the chances that Youtube will drain your crypto wallet? To the computer, however, youtube.com is just another website because it can't take into account its social reputation or your personal experience.
{% endhint %}

For this reason, Questfall relies entirely on the help of its users to solve such problems, which is implemented in the form of community [consensus](consensus.md) through voting, or in other words, community moderation.&#x20;

Community moderation is a crucial part of the platform - it protects Questfall users from scams and helps to distribute fair rewards to miners according to their efforts, by censoring three types of entities:

* [Domains](incentives.md#domains),&#x20;
* [Quests](incentives.md#quests),&#x20;
* [Completions](incentives.md#completions).

In addition, community moderation is the cornerstone of the defense against Sybil attacks used to secure mining. Therefore, the voting itself must be protected from any kind of manipulation, multi-accounts, bots, and blind/random voting. And it is.

{% hint style="info" %}
This will force moderators to vote from the majority's point of view, rather than their own personal perspective. For example, you may not personally like a movie, but you think that the majority will like it. How would you vote?
{% endhint %}

The main principle of securing the community moderation voting is that moderators are rewarded or penalized with [Silver](https://docs.questfall.xyz/assets/silver-in-game), depending on how their vote matches the final consensus. If it matches, the moderator is rewarded. If it does not, the moderator is penalized.

{% hint style="info" %}
Aside from directly burning [Gold](../../assets/gold-in-game.md) or [QFT](../../assets/questfall-tokens-qft.md), community moderation is the only way to earn Silver by adding value to the entire community through proper voting.
{% endhint %}

The [incentives](https://docs.questfall.xyz/quest-mining/community-moderation/incentives) are balanced so that, on average, the penalties of random or blind voting outweigh the rewards, making it a losing strategy. The system also generates [honeypots](honeypots.md) to balance the odds of encountering good or bad voting outcomes.

There are other safeguards, such as balancing [bypass costs](bypass.md) with rewards, and splitting completion moderation into [two phases](witnessing.md) to protect community moderation from any possible abuse.
