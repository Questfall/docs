---
icon: address-card
---

# Workspaces

While many creators prefer to work individually, there are also many situations where content is created by an entire team of different specialists.

For this reason, although we use the word "authors" throughout this documentation, quests do not actually belong to users, but rather to Workspaces, which serve as collaborative environments for creating and managing quests.

{% hint style="info" %}
Workspaces also act as author profiles that are visible to all users.
{% endhint %}

Each user in Questfall can only create one Workspace and automatically becomes its owner. However, since Workspaces implement the role-based permissions model, owners can define different roles with custom permissions and invite other users.&#x20;

Therefore, users can be part of an unlimited number of Workspaces to which they have been invited.

<table><thead><tr><th width="132">Roles</th><th width="460">Permissions</th></tr></thead><tbody><tr><td>Owner</td><td><ul><li>Deposit Silver to Workspace balance</li><li>Withdraw all pending rewards of one currency to the owner's personal balance</li><li>Define roles and the permissions associated with them</li></ul></td></tr><tr><td>Team</td><td><ul><li>View weekly and seasonal reward projections, pending receipts, and withdrawal history</li></ul></td></tr><tr><td>Assignable</td><td><ul><li>Create quest drafts</li><li>Publish drafts by spending Silver on the Quest Bounty</li><li>Purchase banner promotion slots with Silver</li><li>Edit the Workspace design and description</li><li>Assign roles and invite users</li></ul></td></tr></tbody></table>

To make it easier for members of a Workspace to navigate, quests are divided into four different groups based on their status:

* **Drafts.** New quests and editable working copies of previously published quests that are currently inactive.
* **Active.** Published quests that users are currently completing for a reward.
* **Banned.** Quests that were published, but got reported and then banned.
* **Ended.** Quests that are no longer active because their paid period expired.

## Feed quest lifecycle

A Feed quest keeps one stable identity throughout its lifetime, while each activation creates a separate immutable publication snapshot. An active quest cannot be edited: the Team must first unpublish it, after which its working copy appears in Drafts. An ended quest may be reactivated unchanged or opened for full editing and saved as a draft. Content may change completely between publications without changing submissions that were already started against an older snapshot.

A user who has ever successfully completed the stable quest will not receive it again. Publication-specific states such as hidden, exhausted attempts, and unsuccessful attempts reset on reactivation. An unresolved submission and an already issued rating assignment remain valid against their original publication until their original deadline, even if the quest is later unpublished or edited.

Draft, active, and ended Feed quests may be duplicated. A duplicate is a new quest with no publication history, completions, or rating and therefore starts pricing from day 1. Banned quests cannot be duplicated or reactivated. Only a draft that has never had a publication can be deleted.

The `quests_publish` permission controls activation, reactivation, extension, and unpublishing. The `drafts_manage` permission controls editing, tags, and duplication.

As a result, the Workspace implementation makes it possible to simulate the workflow of an entire magazine newsroom, if necessary. The owner can focus only on costs and profits, while hired users can handle all content-related tasks.

{% hint style="info" %}
Workspaces have separate Silver balances from their owners, and once deposited, Silver can only be used to pay for Quest Bounties and cannot be withdrawn. This is necessary to allow users to donate to their favorite authors in [future versions](../../roadmap/future-versions.md) of Questfall.
{% endhint %}

Weekly and seasonal Author rewards are separate from this treasury. They accumulate as pending currency-specific receipts, remain visible to the Team, and can only be withdrawn by the owner. A withdrawal takes every currently pending receipt of the selected currency and records the covered periods in immutable history.
