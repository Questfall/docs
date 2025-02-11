---
icon: sack
---

# Incentives

The core mechanics of Questfall community moderation are based on the idea that rather than securing every possible vote, malicious voting should be a losing strategy over many iterations, so that the most profitable strategy for a moderator in the long run is to play by the rules.

Voting topics are not the same in terms of potential harm to users, so the rewards and penalties for different types of voting are different. In general, however, the penalties outweigh the rewards, making any random or blind voting by bots a losing strategy.

As a result of the incentive mechanism and the overall voting process, in order to earn [Silver](../../assets/silver.md), moderators must try to predict what the [consensus](consensus.md) outcome will be.&#x20;

Since bad actors have multidirectional interest vectors, the majority of moderators will assume that the consensus is reached by good voters, and will be motivated to vote accordingly.

{% hint style="info" %}
This acts as a canonical self-fulfilling prophecy.
{% endhint %}

***

### Domains

Links are an inherent part of quests, as they usually involve doing something outside of the quest platform.&#x20;

However, third party sites can be risky as they may advertise scams or contain wallet-drainers. To protect users from this threat, Questfall divides external links into two groups: safe and risky.

To implement this approach, the system maintains a whitelist of safe domains to which users can add new domains through community voting.

Users can automate the process of whitelisting domains, and if there were a reward for adding safe domains to the system, some users could add millions of safe sites and earn a lot of Silver, putting a huge strain on community moderation.

Therefore, since marking a domain as safe for use by quest authors has its own value, there is no reward for adding a domain to the whitelist. And if a proposed domain fails to pass moderation, there is a penalty.

{% hint style="info" %}
In addition, to avoid whitelisting millions of sites, only level 10 and above users with a positive Silver balance will be allowed to whitelist one domain per week.
{% endhint %}

<table><thead><tr><th width="192">Domain Whitelist</th><th width="117" align="center">Reward</th><th width="126" align="center">Penalty</th></tr></thead><tbody><tr><td>Initiator</td><td align="center">-</td><td align="center">-500 Silver</td></tr><tr><td>Moderators</td><td align="center">+20 Silver</td><td align="center">-40 Silver</td></tr></tbody></table>

Inclusion in the safe domain whitelist does not mean that the site will be considered safe forever. Users can report any whitelisted domain as risky, and if the community decides it is so, it will be removed from the whitelist.

When users report a whitelisted domain, they are rewarded or penalized depending on whether the community vote keeps the domain on the whitelist (penalty) or removes it (reward).

{% hint style="info" %}
Each domain report consumes stamina to protect community moderation from DDoS attacks that can be caused by generating tons of such reports.
{% endhint %}

<table><thead><tr><th width="175">Domain Report</th><th width="143" align="center">Reward</th><th width="126" align="center">Penalty</th></tr></thead><tbody><tr><td>Reporter</td><td align="center">+500 Silver</td><td align="center">-100 Silver</td></tr><tr><td>Moderators</td><td align="center">+30 Silver</td><td align="center">-50 Silver</td></tr></tbody></table>

***

### Quests

Quests can be dangerous as a means of scamming quest platform users, they can also violate platform rules or harm third parties.

To prevent malicious quests in Questfall, any user with a positive Silver balance can report a quest. However, to protect good authors from being punished by others, the quest will not be blocked immediately and will remain active during the moderation process.

{% hint style="info" %}
To ensure that quest reports are resolved as quickly as possible, voting on them will be prioritized.
{% endhint %}

If the report is approved by community moderation, the reporter will be rewarded, the author of the quest will be punished, and of course the quest itself will be disabled. Otherwise, if the report is rejected, the reporter will be punished.

Fixed rewards in Silver for quest reports can be abused by intentionally creating bad quests on one account and reporting them from another. In this way, an attacker can earn Silver on one account by drowning the Silver balance of many accounts.

However, since each quest requires Silver to publish, this threat will only appear if the reward for the report is greater than the amount of Silver paid to publish the reported quest.

For this reason, the rewards for quest reports in Questfall are not fixed and are determined by the [Quest Bounty](../creation/quest-bounty.md) - the greater the bounty, the greater the reward and penalty for the report.

<table><thead><tr><th width="157">Quest Report</th><th width="213" align="center">Reward</th><th width="209" align="center">Penalty</th></tr></thead><tbody><tr><td>Reporter</td><td align="center">+10% Silver in the quest</td><td align="center">-15% Silver in the quest</td></tr><tr><td>Moderators</td><td align="center">+50 Silver</td><td align="center">-70 Silver</td></tr><tr><td>Workspace</td><td align="center">-</td><td align="center">-10,000 Silver</td></tr></tbody></table>

***

### Completions

Users can select any quest from the [Quest Feed](../../overview/global-feed.md), complete it properly, and increase their mining score by a number of mining points depending on the [Quest Bounty](../creation/quest-bounty.md) and the user's individual parameters such as [Mining Power](../completion/#mining-power) and [Mining Boost](../completion/#mining-boost).

{% hint style="info" %}
Each completion consumes stamina to protect community moderation from DDoS attacks that can be caused by generating tons of completions.
{% endhint %}

Many types of quests imply that the completion can be automatically validated by the system, for example, it can be a logic puzzle with the known answer, or it can be a survey with predefined options.

However, many quests will require something to be done outside of Questfall on third-party platforms: from blockchain transactions to posting some content on one of the social media platforms.&#x20;

And these types of quest completions cannot be validated by the computer, so they should be validated by the moderators. If such a completion passes moderation, the user's mining score will increase, otherwise it will not.&#x20;

<table><thead><tr><th width="235">Quest Completion</th><th width="135" align="center">Reward</th><th width="111" align="center">Penalty</th></tr></thead><tbody><tr><td>Completing (user)</td><td align="center">Mining Points</td><td align="center">-</td></tr><tr><td>Witnessing (moderators)</td><td align="center">+10 Silver</td><td align="center">-</td></tr><tr><td>Judging (moderators)</td><td align="center">-</td><td align="center">-30 Silver</td></tr></tbody></table>

This approach means that there is no explicit penalty for a bad completion, since it is nearly impossible to distinguish bad completions based on the user's intent.

However, sometimes it is obvious that a user is trying to abuse the system and has clear malicious intent. For example, it may violate obvious platform rules, it may be offensive, or it may contain links that are dangerous to moderators.

In this case, one of the moderators can report such a completion, and if such a report is approved by the community vote, the user will be penalized, otherwise the reporter will be penalized.

{% hint style="info" %}
Voting on the completion will be paused until a report is moderated.
{% endhint %}

<table><thead><tr><th width="196">Completion Report</th><th width="138" align="center">Reward</th><th width="138" align="center">Penalty</th></tr></thead><tbody><tr><td>Reporter</td><td align="center">+1,000 Silver</td><td align="center">-2,000 Silver</td></tr><tr><td>Moderators</td><td align="center">+40 Silver</td><td align="center">-60 Silver</td></tr><tr><td>User</td><td align="center">-</td><td align="center">-10,000 Silver</td></tr></tbody></table>
