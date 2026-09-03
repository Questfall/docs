---
icon: rectangle-ad
---

# Voting Principles

The moderation voting is designed in a way that it rewards real
users and penalizes those trying to abuse or automate the system.

The following principles apply to the moderation voting:

* **Vote weight** - The weight of a user's vote is directly
correlated to his level. This makes it impossible for many new
accounts to be registered and used to manipulate voting results.

This means that high-level users, who are most interested in the
platform's stability and success, have a great deal of influence in
moderation.

* **Binary voting** - Each item moderated is voted on using the
binary options yes/no. The votes have different weights and a
winning majority is calculated based on the vote weights. 

Users who voted with the majority are rewarded with energy and
those who voted with the minority lose or do not get energy. 

* **Reward balance** - Guessing the right answers is a losing
strategy as the average penalty for wrong answers is double the
reward for the right answers. 

{% hint style="info" %}
Energy rewards is different for each type of moderation when voting
with majority or minority.
Witness: +10/0 | Approve: 0/-20 | reported quests +10/-20 (also for
the reporter)
{% endhint %}

The user receives the reward or punishment when the moderation is
fully settled.

* **Randomly assigned moderations** - Users can't choose specific
items to vote on when moderating - the system assigns them
randomly. This prevents the same automated vote from being cast
from many accounts.

Specific moderation can be bypassed only by spending energy. 

The system balances canonical Approve/Reject outcomes globally and independently
for Witness and Judge. It does not enforce a personal pattern for a moderator.

* **Control moderations** - Once a real Witness or Judge case reaches
consensus, its immutable evidence can become a limited control reference.
Since the canonical answer is already known, the vote settles immediately
without waiting for a new majority. These control assignments are honeypots.

{% hint style="info" %}
Controls use already settled real evidence. They have the same public payload
as an ordinary assignment and expose no source identifiers or control flags.
{% endhint %}

For each type, the scheduler uses the last 100 settled real votes and inserts
the missing canonical outcome with a dynamic probability. A `90/10` window
uses `44.4%` controls, `100/0` uses at most `50%`, and `50/50` uses none.

* * *
