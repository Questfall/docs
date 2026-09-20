---
icon: camera
---

# Action Quests

Action quests ask participants to do something that moderators can verify. The author chooses what the participant submits, how to identify the result, and the criteria moderators use to accept it.

## Choose The Submission Method

| Method | Participant submission | What the author must explain |
| --- | --- | --- |
| **Screenshot** | Exactly 1, 2, or 3 images, selected by the author. No result link is required. | What must be visible in each image and how to recognize a completed task. |
| **Individual link** | One public link to the participant's result. No images are submitted. | Where to look and which visible details prove completion. |
| **Confirmation only** | Confirmation that the task is finished. No images or result link are submitted. | How a moderator can find and check the result using the participant's account or wallet. |

Put links needed to perform the task in the quest description. An individual result link is a participant's evidence, not a shared destination for everyone.

Each individual result URL can be submitted only once to the same quest, across participants and publications, including after rejection or cancellation. Each participant therefore needs their own unused result link. This check compares the submitted URL; it does not resolve redirects or recognize every equivalent URL.

## Identify The Result

Identification is separate from the submission method:

| Identification | What participants provide |
| --- | --- |
| **Service username** | Their username on the service selected by the author. Selecting Questfall as the service uses their signed-in Questfall account automatically. |
| **Wallet address** | The address on the network or explorer selected by the author. Submitting it does not connect a wallet or authorize a transaction. |
| **No source account** | No external username or wallet. Available for screenshots and individual links only; the result itself must contain enough evidence to judge completion. |

Confirmation only needs an identifiable account or wallet so a moderator can find the result. An external username or address is reserved to one Questfall account when it is first submitted. If the identity is already reserved by somebody else, use an [account ownership claim](../moderation/account-claims.md).

New screenshots are labelled with the selected identity before upload. Moderators compare the label with the participant shown on the submission and the source details required by the quest. The label alone does not prove ownership of an external account. Older screenshots keep their original form and do not acquire a new label requirement.

## Write The Requirements And Moderator Guide

The public description tells participants what to do. The private **Moderator guide** tells moderators how to verify every requirement, including where to look, what must match, and which reference images to use. A confirmation-only quest still needs independently checkable evidence; pressing the completion button is not proof by itself.

For a new set of quest materials, the [First Quest Review](../moderation/first-quest-review.md) checks whether the instructions are sufficient before judging the first completion. If they are insufficient, that publication is removed and unfinished submissions receive the documented compensation. A rules violation uses the separate report process.

## Submission And Rewards

An Action quest permits one moderated attempt per participant per publication. Submission spends Stamina using a base cost of 1 modified by Stamina traits and equipment pressure. The interface shows the actual cost.

At submission, Questfall saves the promised Mining Points and shard-roll count and starts or refreshes Flow. The reward uses the Flow state that existed immediately before this submission. Changing equipment or waiting for moderation does not recalculate that saved reward.

An accepted completion receives its saved Mining Points in the week of approval. Saved shard rolls apply to the shard set active at approval, with the participant's Luck Shards effect at that time. Approval does not start Flow again. An ordinary rejection earns no completion reward and does not refund the submission's Stamina.

Current Action methods go directly to screenshot or platform review, with no separate Witness stage. After First Quest Review has established that the instructions are sufficient, later completions use ordinary binary review. These reviews have the [base incentives](../moderation/incentives.md#completions) of +20 Silver for agreement and −40 Silver for disagreement, scaled by the current moderation market, and do not use or award Witness Credits.

## Existing Publications

Participants and moderators follow the saved requirements of the publication being completed. Editing a draft does not rewrite an existing submission. Older Screenshot quests may require up to five images, and older Action quests may retain a link-plus-screenshots Witness → Judge flow or earlier identification rules.

Saving and publishing updated materials applies the new settings to that publication. A retired quest keeps its history and cannot be restarted; the author can create a new Action quest in the same Author Space.
