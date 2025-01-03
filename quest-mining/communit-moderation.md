---
icon: shield-check
---

# Communit Moderation

Moderating activity in Questfall is an important part of the platform, as it helps define fair rewards for miners based on the quality of their quest completions. This is a very hard problem for computers to solve, so moderation also serves as a [defense against Sybil attacks](../overview/sybil-defence.md), which is very important for keeping mining fair.

Completions of many types of quests are very hard to estimate algorithmically, because they can be of any kind of content on any availble platform in the internet. Not only the quality of completion should met some minimum requierments to quality, which is entirely the question of human perception, but also popular platforms such as X, Facebook or Youtube fight with automatic access to prevent DDoS attacks and content scarping.



## Rewards and punisments

Moderation is the primary and only free source of **Silver** which is needed for XP and quest promotion.

The Silver Reward for voting with or against the majority is unique for each type of moderation:

* Witness +10/0
* Approve 0/-20
* Reported Quests +10/-20 (also for the reporter)

As the system assignes moderations randomly in re-defined portions, each user must moderate all types. To increase the Silver count, the user must be able to vote with the majority on all different types of moderation. Guessing the right answers is a losing strategy as the average penalty for wrong answers is double the reward for the right answers.

The user receives the reward or punishment when the moderation is fully settled. Usually this takes from minutes to hours.

## Types of voting

There are **three types of moderation** in the system.

### Witnessing

Users vote if the link content is equal to the screenshot provided by the user completing the quest.

This is the first step of making sure the quest completion is valid. Witnessing is needed to make sure that there is unchangeable information to vote for in the approving state.

### Approving

Users vote if the quest is done correctly.

Based on the completion terms and extra information provided by the author moderators vote if the quest should be accepted or declined.

### Reported Quests or Completions

Users vote if the reported quest or completion breaks community rules.

Reported quests or completions go to moderation only if there are enough reports in it. The reporters either win or lose silver based on the moderation voting result. If a reported quest or completion is voted to be against the community rules the user responsible for it gets a high penalty.

## Majority wins

One of the Questfall's unique features is its completely decentralized **Moderation** which allows the community to decide the validity of quest completions and reports. This system allows anyone to participate in moderation and is, by design, is still protected from abuse.

Moderating provides users with the **Silver** needed for **Leveling (XP)** and **Quest Promotion**. As moderation is the primary and only free source of silver, there will always be enough users willing to do it.

{% hint style="info" %}
The moderation voting is designed in a way that it rewards real users and penalizes those trying to abuse or automate the system.
{% endhint %}

## Binary Voting

The System uses a **Binary Voting** - each moderation is voted on using the binary options yes/no. The votes have different weights and a winning majority is calculated based on the vote weights.

Users who voted with the majority are rewarded with Silver and those who voted with the minority lose or do not get Silver.

The weight of a user's vote is directly correlated to his level and increases by one with each level. This makes it impossible for many new accounts to be registered and used to manipulate voting results.

{% hint style="info" %}
high-level users, who are most interested in the platform's stability and success, have a great deal of influence in moderation.
{% endhint %}

## System fakes

Along with the real problems that need moderation system generates **Fakes**, that should not pass moderation.

With fakes, the system keeps a balance by providing users with different types of moderation and an equal amount of right/wrong answers. This prevents users from succeeding by accepting every moderation, as the majority of real submissions are expected to be acceptable answers.

Users can't choose specific items to vote on when moderating as the system assigns them randomly and bypassing a moderation costs Silver. This prevents the same automated vote from being cast from many accounts.

Since the system knows what should be the correct vote it can punish malicious voters and reward good ones independent of who is the majority. In other words, such fakes are used as honeypots.

{% hint style="info" %}
In fake moderation, the quest information is mixed in such a way that humans can recognize it being a non-valid completion but bots can’t.
{% endhint %}

### Reporting of Quests

To make the platform a safe and enjoyable environment, users can report quests seen as inappropriate or breaking the server rules.

Users can be motivated to report quests not only cause of their goodwill but also because of a Silver reward. The system rewards users for valid reports and punishes them for wrong ones.

The reporting of quests works as follows:

1. The user reports a quest they consider breaking the server rules.
2. This report goes to moderators for voting. Reported quests are prioritized over every other moderation for fast results.
3. Moderators vote yes/no if this quest breaks server rules and should be removed from the platform. If the majority (weighted by user level) vote yes, the quest is removed, the reporter earns a Silver reward, and the quest creator is punished heavily. If moderators vote no, the reporter loses Silver. Moderators earn by voting with the majority.

To prevent abusing of the reporting system, only users above a certain level can report quests on the platform.
