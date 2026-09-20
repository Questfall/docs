# First Quest Review

Author Feed quests can launch immediately. New [Action quest](../creation/action-quests.md)
materials start with one stronger completion review. Other submissions
are saved and wait for that review to finish. Available first reviews take
priority over ordinary moderation; older first reviews are offered first.

For current Action methods (screenshot, individual link, or confirmation only),
the first submission eligible for manual review starts this case directly.
Older separate Screenshot quests follow the same direct path. A legacy Action
publication that requires both a link and screenshots keeps its Witness stage:
the first submission that passes Witness starts the first review instead of
ordinary Judge. Its Witness reviewers cannot judge that same completion. Other
legacy submissions can finish Witness while they wait for Judge.
A shortage of independent moderators does not lower the
requirements or approve anything automatically.

## Two steps, one decision

First, the moderator sees the public requirements, Moderator guide and reference
images, with this question: **Are these materials sufficient to verify every
completion requirement?** The participant and submitted proof are hidden.

“Yes” opens the completion. It records no vote and pays no reward. The moderator
then accepts or rejects the completion, and can return to the instructions
before voting. “No” opens a dialog for a specific explanation of 12–2000
characters. Confirming submits the **insufficient instructions** decision and
opens the next case. A failed submission keeps the explanation for retry.
Bypass remains available on both
steps at its ordinary cost. Reloading restores the saved step.

The instruction step uses the standard moderation card and footer: quest
requirements and Moderator guide, Bypass and Report on the left, and the
insufficient-instructions and continue actions on the right. Report addresses
the quest itself using the existing policy categories and 1 Stamina report cost.
It does not cast a vote, release the assignment, or unlock participant evidence.
Retrying the same assignment report does not charge again. Completion reports
on the evidence step retain their existing process.

The Author Space avatar, name and karma appear above the quest. The quest title
and text sit beside its cover. The author editor also calls the private document
“Moderator guide” and asks for criteria and references for every requirement.
There is exactly one final decision: insufficient instructions, completed or
not completed. Continuing to the second step does not cast a separate vote.
The completion step places the quest, evidence and Moderator guide in separate
columns on the shared moderation surface. Each evidence or guide image opens
independently at full size. A single screenshot uses the available column with
no caption or counter; thumbnail switching appears only for multiple images.

The first review uses the first appeal's quorum settings captured when the case
is created, but remains a primary case with no appeal deposit. After the minimum
number of people and trust are present, an outcome needs **more than half the
vote weight**. Exactly 50%, or a 40/35/25 split, needs more independent reviewers.
Decisions settle immediately once consensus is reached, releasing waiting
completions in the same transaction. Ordinary binary cases close at the next
shared ten-minute boundary, or earlier if every remaining active assignment
voting against the current leader still cannot change the result. Their
existing quorum and strongest-level tie rules remain unchanged; an unresolved
tie at the boundary requests more reviewers. Windows also determine prices.
The exact set of deciding votes is frozen, so
late votes cannot change the result or the reference sample.

A matching first-review vote earns **20 Silver**, and a conflicting vote costs
**40 Silver**, before the current market multiplier. Neither outcome creates
Witness Credit. Later direct Action and Screenshot reviews use the ordinary
+20/−40 Silver base amounts without Witness Credits. Legacy Witness/Judge work
keeps its own incentives. Late votes settle against the saved outcome without changing it.

## What the result changes

Accepting or rejecting the first completion establishes that the instructions
are sufficient. The first completion receives its usual result, and waiting
submissions move into ordinary binary moderation.

If insufficient instructions wins, that version is removed from publication.
The author receives the anonymous winning explanations. Future paid 24-hour
blocks are refunded at their purchase prices; a block already started is kept.
This is not a rules violation or a ban. A later corrected publication is not
removed by an older verdict. Identical rejected materials cannot be reactivated.

Unfinished submissions for the affected version are **cancelled**, with
**half the promised Mining Points, rounded down, with a minimum of 1 MP**, from
the saved reward snapshot. The compensation goes into the week in which it is
paid. A 1 MP reward therefore receives 1 MP. There is no new equipment or random bonus calculation,
no Stamina refund, and no separate Flow activation. Compensation grants no
shards, seasonal Bounty, completion credit or author completion reward. It is
not a failed attempt: the player can try a corrected new publication.

Accepted or rejected completions and settled Witness rewards are not changed.
Duplicate-proof guards receive no compensation. An active abuse report finishes
first: a confirmed report applies its usual sanctions, while a rejected report
allows instruction cancellation and compensation. Delivery acknowledgements
and compensation receipts prevent repeated payments or lost notifications.

The review belongs to the checked materials of one quest. Changing its Bounty,
duration, cover or tags does not restart it. Changing requirements, guide,
references or evidence conditions does. Identical approved materials can reuse
their result; copying to a new quest starts a new review. Versions already
published when this feature is enabled continue under the legacy rules.

## Controls and initial scope

First reviews have their own control pool. A real case becomes a reference only
when at least **80% of both vote weight and people** agree. Its instructions and
proof stay immutable, and a control uses the same two-step interface and three
answers. Existing exclusions, exposure limits and no-repeat rules apply.
Controls do not alter the source quest or player payouts.

For the last 100 settled real first-review votes, let `maxCount` be the count of
the most common answer and `total` the sample size. If that answer exceeds half,
the chance of an alternative control is `(2 × maxCount − total) / (2 × maxCount)`,
up to 50%. The least represented available alternative is selected, with random
ties; if none is available, a real case is offered. These controls use the same
20/−40 Silver base amounts and never award Witness Credit.

This first release adds no separate review of previously approved instructions,
new appeal types, or additional penalty/timer for free Bounty 1 publication.
Existing Bypass and abuse reports remain available.
