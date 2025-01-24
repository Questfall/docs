---
icon: shield-check
---

# Community Moderation

As noted in the [Sybil Defense](../../overview/sybil-defence.md) article, computers can't properly judge quest completions because:

* completions can be any kind of content,
* completions must implement unpredictable quest requirements,
* completions must meet minimum quality criteria that are entirely a matter of human perception,
* completions can be published on any available platform on the Internet, most of which fight against automated access to prevent DDoS attacks and content scraping.

In addition to judging content, computers are very bad at risk assessment, especially when it comes to the outside world, since risk assessment in many cases is heavily based on social reputation.

{% hint style="info" %}
For example, what are the chances that Youtube will drain your crypto wallet? To the computer, however, youtube.com is just another website because it can't take into account its social reputation or your personal experience.
{% endhint %}

For this reason, Questfall relies entirely on the help of its users to solve such problems, which is implemented in the form of community consensus through voting, or in other words, community moderation.

{% hint style="info" %}
Community moderation in Questfall is open to any user with a Silver balance greater than -1,000. Read more about this limit in the [Overdraft ](overdraft.md)article.
{% endhint %}

This makes community moderation a crucial part of the platform - it helps to distribute fair rewards to miners according to their efforts, and also protects Questfall users from scams. Therefore, voting must be protected from any kind of manipulation, multi-accounts, bots, and blind/random voting.

{% hint style="info" %}
Addressing all of these threats automatically results in a solid defense against Sybil attacks.
{% endhint %}

Community moderation protects the system and its users from abuse by censoring three types of entities: domains, quests, and completions.

### Domains

Links are an inherent part of quests, as they usually involve doing something outside of the quest platform. However, third-party sites can be risky, as they may advertise scams or contain wallet-drainers.

In order to protect users from these threats, Questfall implements many different techniques, and one of the basic ones is to distinguish external links into two groups: safe and risky.

To implement this approach, the system maintains a whitelist of safe domains that is moderated by the community. A user can add a new domain, and if it passes moderation, it will be added to the whitelist.

Inclusion in the safe domain whitelist does not mean that the site will be considered safe forever. Users can report any whitelisted domain as risky, and if the community decides it is risky, it will be removed from the whitelist.

{% hint style="info" %}
To avoid whitelisting millions of sites, only level 10 and above users with a positive Silver balance will be allowed to whitelist one domain per week.
{% endhint %}

Rewards for whitelisting domains can be exploited because adding domains can be automated with bots. And since marking a domain as safe for use by quest authors has its own value, there is no reward for adding a domain to the whitelist. However, there is a penalty if a proposed domain fails to pass moderation.

Removing domains from the whitelist is a different story. When users report a whitelisted domain, they are rewarded or penalized depending on whether the community vote keeps the domain on the whitelist (penalty) or removes it (reward).

{% hint style="info" %}
Each whitelisted domain report consumes stamina to protect community moderation from DDoS attacks that can be caused by generating tons of such reports.
{% endhint %}

<table><thead><tr><th width="243">Action</th><th width="155" align="center">Initiator Reward</th><th width="155" align="center">Initiator Penalty</th></tr></thead><tbody><tr><td><a data-footnote-ref href="#user-content-fn-1">Initial domain whitelisting</a></td><td align="center">0</td><td align="center">-500 Silver</td></tr><tr><td><a data-footnote-ref href="#user-content-fn-2">Report whitelisted domain</a></td><td align="center">+500 Silver</td><td align="center">-100 Silver</td></tr></tbody></table>

### Quests

Quests can be dangerous as a means of scamming quest platform users, they can also violate platform rules or harm third parties.

To prevent malicious quests in Questfall, any user with a positive Silver balance can report a quest, and if the report is approved by community moderation, the reporter will be rewarded, the author of the quest will be punished, and of course the quest itself will be disabled. Otherwise, if the report is rejected, the reporter will be punished.

{% hint style="info" %}
If the quest is reported, it will not be blocked immediately and will remain active during the moderation process, but voting on quest reports will be prioritized to ensure the fastest possible resolution of the report.
{% endhint %}

<table><thead><tr><th width="145">Quest Report</th><th width="214" align="center">Reporter</th><th width="135" align="center">Author Space</th></tr></thead><tbody><tr><td>Approved</td><td align="center">+10% Silver in the quest</td><td align="center">-10,000 Silver</td></tr><tr><td>Rejected</td><td align="center">-15% Silver in the quest</td><td align="center">-</td></tr></tbody></table>

Fixed rewards in Silver for quest reports can be abused by intentionally creating bad quests on one account and reporting them from another. In this way, an attacker can earn Silver on one account by drowning the Silver balance of many accounts.

However, since each quest requires Silver to publish, this threat will only appear if the reward for the report is greater than the amount of Silver paid to publish the reported quest.

For this reason, the rewards for quest reports in Questfall are not fixed and are determined by the Base Reward of the quest - the greater the Base Reward, the greater the reward and penalty for the report.

### Completions

Users can select any quest from the [Quest Feed](../../overview/global-feed.md), complete it properly, and increase their mining score by the number of mining points, which depends on the quest's [Base Reward](../quest-creation-10/quest-bounty.md) and the user's individual [Mining Power](broken-reference).

Many types of quests imply that the completion can be automatically validated by the system, for example, it can be a logic puzzle with the known answer, or it can be a survey with predefined options.

However, many quests will require something to be done outside of Questfall on third-party platforms: from blockchain transactions to posting some content on one of the social media platforms. And these types of quest completions cannot be validated by the computer, so they should be validated by the moderators.

{% hint style="info" %}
Each completion consumes stamina to protect community moderation from DDoS attacks that can be caused by generating tons of completions.
{% endhint %}

If such a completion passes moderation, the user's mining score will increase, otherwise it will not. This means that there is no explicit penalty for faking a completion, as it is almost impossible to distinguish bad completions based on the user's intent.

<table><thead><tr><th width="187">Quest Completion</th><th width="229">User</th></tr></thead><tbody><tr><td>Approved</td><td>Receives the quest reward</td></tr><tr><td>Rejected</td><td>Receives nothing</td></tr></tbody></table>

However, sometimes it is obvious that a user is trying to abuse the system and has clear malicious intentions. For example, it may be breaking obvious platform rules, or it may be offensive, or it may contain dangerous links.

In this case, one of the moderators can report such a completion, and if such a report is approved by the community vote, the user will be penalized, otherwise the reporter will be penalized.

<table><thead><tr><th width="211">Reported Completion</th><th width="155" align="center">User</th><th width="155" align="center">Moderator</th></tr></thead><tbody><tr><td>Approved</td><td align="center">-10,000 Silver</td><td align="center">+1,000 Silver</td></tr><tr><td>Rejected</td><td align="center">-</td><td align="center">-2,000 Silver</td></tr></tbody></table>

[^1]: The initiator is rewarded if the domain is whitelisted.

[^2]: The initiator is rewarded if the domain is removed from the whitelist.
