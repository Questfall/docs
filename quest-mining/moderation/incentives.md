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

## Adaptive moderation market

The values in the tables below are the **base values** and the minimum price of moderation. Questfall recalculates one global market multiplier every ten minutes. It does not create a separate market for each moderator or let the trust of one voter multiply a reward.

Capacity is measured in the same level-trust units used by consensus. Let `T24` be the trust carried by recorded real moderation votes during the previous 24 hours. Ten-minute capacity is `max(60, T24 / 144)` trust; if the 24-hour sample is empty, the last capacity is retained, with 60 trust as the bootstrap minimum.

For every open or queued case, the system subtracts already-cast vote trust from the case's fixed consensus trust requirement. The remaining amount is multiplied by the number of ten-minute windows for which the work has waited. Summing those values gives the age-weighted backlog `E`:

```text
pressure = E / capacity
multiplier = max(1, pressure ^ 0.75)
```

The first window after activation is always `1×`. Later windows have no economic multiplier cap: sustained overload can keep making moderation more valuable, while the `0.75` exponent slows the rate of growth. A single isolated Initial case requiring 6 trust therefore does not move the global price immediately; against the 60-trust bootstrap capacity, it first exceeds `1×` after roughly 100 minutes without progress.

The resulting multiplier scales every moderator-facing correct-vote reward, wrong-vote penalty, Bypass cost, and Witness prepayment. It does **not** scale reporter economics, appeal or re-review stakes, penalties applied to a reported target, or quest/workspace sanctions.

Market windows are shared server intervals aligned to `:00 / :10 / :20 / :30 / :40 / :50`. An assignment does not expire when a window ends. Its card stays in place and displays the current window's reward, penalty, Bypass cost, and Witness cost. Vote, Bypass, Witness switch, and Witness prepayment use the quote active when the server receives the request, even if the moderator clicked near a boundary. The exact quote used for a vote is stored with that vote and remains its settlement basis. Legacy votes without a quote settle at `1×`; the legacy assignment `expires` field is temporarily returned as an alias of the current pricing window end for older clients.

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

<table><thead><tr><th width="192">Domain Whitelist</th><th width="117" align="center">Base reward</th><th width="126" align="center">Base penalty</th></tr></thead><tbody><tr><td>Initiator</td><td align="center">-</td><td align="center">-500 Silver</td></tr><tr><td>Moderators</td><td align="center">+20 Silver</td><td align="center">-40 Silver</td></tr></tbody></table>

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
Moderated quest submissions spend Stamina to limit the volume of review work. The base cost is 1, adjusted by Stamina traits and equipment pressure. Automatic Question, Quiz, and Survey answer submissions do not currently spend Stamina.
{% endhint %}

Many types of quests imply that the completion can be automatically validated by the system, for example, it can be a logic puzzle with the known answer, or it can be a survey with predefined options.

However, many quests will require something to be done outside of Questfall on third-party platforms: from blockchain transactions to posting some content on one of the social media platforms.&#x20;

And these types of quest completions cannot be validated by the computer, so they should be validated by the moderators. If such a completion passes moderation, the user's mining score will increase, otherwise it will not.&#x20;

Current [Action quests](../creation/action-quests.md) use direct screenshot or platform review. Their ordinary binary reviews pay **+20 Silver** for agreement with consensus and charge **−40 Silver** for disagreement, before the adaptive market multiplier. They do not require or award Witness Credits. The first review uses the same base amounts with its additional insufficient-instructions outcome.

The Witness/Judge rules and table below apply to legacy publications that still use that two-stage flow.

{% hint style="warning" %}
Early access exception: if a moderator has no ordinary assignable case, an eligible Witness case may be issued without a Witness Credit and without prepayment. This temporary subsidy bootstraps the first `Witness -> Judge -> Witness Credits` cycle when the moderation queue is still sparse. Participant, author, and Author Space team exclusions still apply, and the case keeps its full participant and trust requirements. The exception should be removed once the active population and normal moderation flow are large enough to sustain Witness Credits without bootstrap help.
{% endhint %}

<table><thead><tr><th width="235">Quest Completion</th><th width="135" align="center">Reward</th><th width="111" align="center">Penalty</th></tr></thead><tbody><tr><td>Completing (user)</td><td align="center">Mining Points</td><td align="center">-</td></tr><tr><td>Witnessing (moderators)</td><td align="center">+10 Silver</td><td align="center">-</td></tr><tr><td>Judging (moderators)</td><td align="center">-</td><td align="center">-30 Silver</td></tr></tbody></table>

This approach means that there is no explicit penalty for a bad completion, since it is nearly impossible to distinguish bad completions based on the user's intent.

However, sometimes it is obvious that a user is trying to abuse the system and has clear malicious intent. For example, it may violate obvious platform rules, it may be offensive, or it may contain links that are dangerous to moderators.

In this case, one of the moderators can report such a completion, and if such a report is approved by the community vote, the user will be penalized, otherwise the reporter will be penalized.

{% hint style="info" %}
Voting on the completion will be paused until a report is moderated.
{% endhint %}

<table><thead><tr><th width="196">Completion Report</th><th width="138" align="center">Reward</th><th width="138" align="center">Penalty</th></tr></thead><tbody><tr><td>Reporter</td><td align="center">+1,000 Silver</td><td align="center">-2,000 Silver</td></tr><tr><td>Moderators</td><td align="center">+40 Silver</td><td align="center">-60 Silver</td></tr><tr><td>User</td><td align="center">-</td><td align="center">-10,000 Silver</td></tr></tbody></table>

## First Quest Review

[First Quest Review](first-quest-review.md), for current Action methods and supported legacy publications, pays +20/−40 Silver before the shared market multiplier and gives no Witness Credit. Later stages retain their ordinary prices. Instruction cancellation grants players max(1, floor(50% of snapshotted MP)), without Stamina, shards, seasonal or completion credit; it is separate from successful completion rewards.
