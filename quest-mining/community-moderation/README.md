---
icon: shield-check
---

# Community Moderation

Moderating activity in Questfall is an important part of the platform, as it helps define the rewards for miners based on the quality of their quest completions. This is a very hard problem for computers to solve, so moderation also serves as a [defense against Sybil attacks](../../overview/sybil-defence.md), which is very important for keeping mining fair.

Completions of unpredictable quest types are very difficult to estimate algorithmically, because they can be any type of content on any available platform on the Internet. Not only should the completion meet some minimum quality requirements, which is entirely a matter of human perception, but also popular platforms like X, Facebook or Youtube are fighting with automatic access to prevent DDoS attacks and content scraping.

However, humans can easily verify any quest completion or report. For this reason, the quest completion and reporting process in Questfall relies entirely on community voting, or community moderation.

In order to prevent manipulation of the vote and to defend it from multi-accounts and bots, Questfall's community moderation voting is based on several principles that create a solid voting protection.

#### Binary votes

Each voting topic should have only two possible vote options - either yes or no. It can also be true or false, valid or invalid, and so on. This approach makes voting easy for moderators, and as a result of such binary mechanics, voters will always be divided into majority and minority.

{% hint style="info" %}
There may be other approaches, such as the range voting that Questfall uses for quest ratings. However, the outcomes of such votings are not as straightforward, since the voting results in an average instead of a majority.
{% endhint %}

#### Random voting topic

Users should not be able to choose the topic they want to vote on, otherwise they will be able to create many accounts and vote the same way on a given topic.

#### No free bypass

Users should not be able to freely bypass the system-assigned voting topic, otherwise the idea of a random topic fails, since users can loop through all the topics until they get to the one they want. However, there should be a way for moderators to bypass certain topics that they are not sure about and do not want to risk.

In Questfall, moderators can bypass the topic by paying a certain amount of Silver, depending on the type of topic, which is less than the potential loss of an invalid vote.

#### Majority wins, minority loses

The votes have different weights and a winning majority is calculated based on the vote weights.

Users who voted with the majority are rewarded with Silver and those who voted with the minority lose or do not get Silver.

#### League-based votes segmentation

To prevent voting manipulation with many low-level accounts the final voting result is gathered from individual results of majority votes from the users of the same league. Each legue result is equal, except the cases when an even number of leagues results&#x20;



#### Even odds of a win

Along with the real problems that need moderation system generates **Fakes**, that should not pass moderation.

With fakes, the system keeps a balance by providing users with different types of moderation and an equal amount of right/wrong answers. This prevents users from succeeding by accepting every moderation, as the majority of real submissions are expected to be acceptable answers.

Users can't choose specific items to vote on when moderating as the system assigns them randomly and bypassing a moderation costs Silver. This prevents the same automated vote from being cast from many accounts.

Since the system knows what should be the correct vote it can punish malicious voters and reward good ones independent of who is the majority. In other words, such fakes are used as honeypots.

{% hint style="info" %}
In fake moderation, the quest information is mixed in such a way that humans can recognize it being a non-valid completion but bots can’t.
{% endhint %}



#### Protection against user actions



#### Banning a user after many failures

