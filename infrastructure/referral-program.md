---
icon: user-plus
---

# Referral Program (5%)

Invite new people and earn a share of the weekly referral pool from their progress.
The base program pays the inviter only. It does not require the inviter to mine,
reach a level, buy XP or wait for a qualifying period. Existing verified users can
invite immediately. Both players also receive the milestone boxes below, independently
of the weekly Gold budget. Founder discount codes remain a separate mechanism.

## Invitation

The first valid invitation is remembered in the browser for up to 30 days. A new
account receives one inviter when its first email or wallet registration is
confirmed. Requesting an email code alone does not create an attribution.
The link cannot be changed. Existing accounts cannot add an inviter themselves;
self-referrals, repeat attribution and referral cycles are rejected or ignored.
Only direct referrals count.

## Milestone Boxes For Both Players

For every new confirmed referral, the inviter and the invited player each receive:

| Milestone | One box for each player |
| --- | --- |
| Confirmed email or wallet registration | Common Box |
| Level 5 | Uncommon Box |
| Level 8 | Rare Box |
| Level 15 | Epic Box |

Boxes are automatically added to the existing Lootboxes balance. There is no Claim;
open them in Lootboxes as usual. The inviter needs no level or activity. A signup
without an inviter does not receive these referral rewards.

Level milestones must be reached strictly before the six-calendar-month deadline.
At the exact end of the term no new boxes are awarded. A jump across several levels
awards all missing stages. Each stage is awarded once per referral, even after a
retry, login, level reset or server restart. Received rewards remain in the history
after expiration. Relations that predate this feature are not automatically enrolled.

Each participant receives an unread Tracker update with the box, its rarity and the
reason. Updates for one referral are grouped into a card with milestone history and
a link to `/referrals/`. The page shows the invited player's own progress and each
referral's received, pending or expired stages. Boxes never consume the Gold pool.

## Manual Assignment in Admin

An admin may link an existing, confirmed user who has no inviter.
Self-referrals, cycles and changing an existing link are not allowed.

The term starts when the assignment is saved, giving a full six calendar months.
Both players immediately receive Common plus the boxes for the invited player's
current level: level 8 gives Common, Uncommon and Rare; level 15 gives all four.
Later level-ups use the same rules as new registrations.

Only XP purchases made after this binding count toward the weekly score. Earlier
Silver spending, closed weeks and payouts are not recalculated.

## Weekly Score

Weeks run from Monday 00:00 UTC through Sunday. For each direct referral:

$$x_j=S_{j,week}\cdot d_j$$

Here, $S_{j,week}$ is Silver actually spent on purchasing XP during that week
after referral binding. Other Silver spending,
balances, transfers and the inviter's own purchases are excluded.

Let $t_j$ be the binding time (confirmed signup, or the explicit Admin assignment) and
$e_j$ be six calendar months later.
An invalid day at the target month end is clamped to that month's last day, retaining
the UTC time. The time-based weight is:

$$d_j(t)=\max(0,\min(1,(e_j-t)/(e_j-t_j)))$$

The page uses the current time. Final settlement uses the end of the week. Buying
more XP never renews the six-month term. An expired referral contributes zero,
even if the person remains active.

The inviter's score is:

$$Score=\left(\sum_j x_j\right)^{1.1}-\sum_j x_j^{1.1}$$

Zero or one referral with a positive contribution gives exactly zero score.
Two or more positive contributions can earn a reward. All inviters compete in
one pool; there are no referral-count leagues or personal mining multipliers.

$$Reward=Pool\cdot Score/\sum Score$$

Gold is allocated as whole units using largest remainders, with stable user-ID
ordering for ties. If every score is zero, the entire pool carries into the next
referral week. It is not burned or redistributed to another program.

The economic barrier to account splitting combines this formula with character
progression: dividing progression between characters sacrifices the benefit of
advancing one character into higher leagues. This is not an absolute guarantee
against multi-account activity.

## Funding And Claim

The target QFT weight is 5%. While five programs are active, their weights total
69 and referrals receive $5/69$ (approximately 7.25%) of each new Gold budget.
See [Unified Reward Budget](../assets/reward-budget.md). Previous referral carry
is shown separately from the new weekly contribution.

The page at `/referrals/` shows a preliminary reward, score and pool share, the
anonymous distribution of competing scores, and the inviter's share over the
week. “Your people” contains only the viewer's own referrals, with weekly Silver,
decay, weighted contribution and registration/expiry dates.

Closing a week freezes contributions, scores and pending payouts. Later activity
cannot rewrite that result. Referral rewards are available in the personal Claim
alongside weekly and seasonal miner rewards. Author Space withdrawals retain
their separate flow. Historical and pending Gold rewards remain Gold after a
future QFT transition.
