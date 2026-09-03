---
icon: glasses
---

# Witnessing

In many cases, moderators would have to vote on some content outside of Questfall, which often can be edited by the author at any time (e.g. a post on Facebook). And this is a problem.

{% hint style="info" %}
This applies to all external content, because even if a platform does not currently allow content editing, it can be changed at any time.
{% endhint %}

A user can submit a completion and then edit it while it is being moderated. As a result, the consensus result should change on the fly. This means that the first moderators who voted on the original content would be punished for doing their job correctly, which is obviously not fair.

{% hint style="info" %}
This may even happen without malice. For example, there may have been a mistake initially, and a user fixed it later, after moderation had begun.&#x20;
{% endhint %}

Penalties, however, are a key part of voting protection and cannot be removed, otherwise any kind of random voting will become a profitable strategy, and community moderation would not be able to play the role of Sybil defense.

To solve this contradiction, Questfall implements the concept of witnessing, which implies that users provide two types of information: a link to the content and a screenshot of that content.

{% hint style="info" %}
Although we implemented this approach specifically for quest completions, it can be used with any external content.
{% endhint %}

Moderators would first vote to approve that the screenshot represents the actual content posted on the third-party platform, and then make judgments, such as whether or not the quest was completed, based on the approved, immutable screenshot.

{% hint style="info" %}
Screenshots will be stored within the Questfall infrastructure to ensure that no one will be able to alter them after they are uploaded.
{% endhint %}

These two steps, witnessing a screenshot and then judging its content, are separate voting topics and are handled by different sets of moderators. They are nevertheless two sides of the same completion flow: an approved Witness case creates its Judge case.

Honeypot answer balance is global rather than personalized. Witness Approve/Reject and Judge Approve/Reject each use their own rolling window of the last 100 settled real votes. An individual moderator's short sequence remains random and is not guaranteed to contain any fixed ratio or pattern.

The main advantage of splitting an issue into two voting topics is that the incentives can be split as well - while the reward portion goes to witnessing, the penalty portion remains for judging. And since this approach does not penalize witnessing, users would not be able to punish good moderators by changing content.

{% hint style="info" %}
In short, witnessing allows moderators to earn, while judging allows them to not lose.
{% endhint %}

However, witnessing by itself is on average profitable under random voting. The globally balanced canonical answers remove the advantage of always pressing Approve or Reject, while the Judge penalty and Bypass costs make the combined long-run sequence economically negative for blind voting.
