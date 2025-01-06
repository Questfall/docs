---
icon: split
---

# Splits

#### Protection against user actions

If a quest requires content to be created on a website where the content can be edited by the author at any time, a user can submit a completion and then change it while it is being moderated. In this scenario, the moderators' consensus result should change on the fly.

This can even happen without malice. For example, there may have been a mistake initially, and a user fixed it later, after moderation began. In this case, the first moderators who voted that the completion was invalid would be punished for doing their job correctly, which is obviously not fair. However, if there is no punishment, then the principle of "votes are rewarded or penalized" is violated.

This contradiction is easily resolved by splitting a single voting topic into two. And for that, the system should ask a user who completes a quest for two things: a link where the completion is published, and the screenshot of the completion.

As a result, the moderation process for such a completion could be split into two steps. First, one set of moderators would vote to approve that the screenshot represents the actual completion. We call this stage witnessing. And then another set of moderators (since this will be a different voting topic) will judge whether or not the quest is completed based on the approved screenshot, which could not be altered.

The key is that the rewards should also be split. If the total reward/penalty for moderating the completion is defined as X/Y, then the reward/penalty for witnessing the screenshot should be X/0, while the reward/penalty for actually judging the completion should be 0/Y.

In other words, screenshot witnessing will allow moderators to earn, while completion judging will allow them not to lose. And while these two votes will be assigned to different moderators, there will be many such completions, meaning that the system would be able to balance such split topics for each moderator individually.
