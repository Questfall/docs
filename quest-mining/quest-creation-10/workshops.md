---
icon: address-card
---

# Workshops

While many creators like to work alone, there are also many situations where content is produced by an entire team of different specialists.

For this reason, although we use the word "authors" throughout this documentation, quests do not actually belong to users, but rather to Workshops, which serve as collaborative environments for creating and managing quests.

{% hint style="info" %}
Workshops also act as author profiles that are visible to all users.
{% endhint %}

Each user in Questfall can only create one Workshop and automatically becomes its owner. However, since Workshops implement the role-based permissions model, owners can define different roles with custom permissions and invite other users. Therefore, users can be part of an unlimited number of Workshops to which they have been invited.

<table><thead><tr><th width="132">Roles</th><th width="501">Permissions</th></tr></thead><tbody><tr><td>Owner</td><td><ul><li>Deposit Silver to Workshop balance</li><li>Claim and withdraw QFT rewards received by Workshop</li><li>Define roles and the permissions associated with them</li></ul></td></tr><tr><td>Assignable</td><td><ul><li>Create quest drafts</li><li>Publish drafts by spending Silver on the Quest Bounty</li><li>Purchase banner promotion slots with Silver</li><li>Edit the Workshop design and description</li><li>Assign roles and invite users</li></ul></td></tr></tbody></table>

To make it easier for members of an Workshop to navigate, quests are divided into four different groups based on their status:

* **Drafts.** Drafts of new quests that have not yet been published.
* **Active.** Published quests that users are currently completing for a reward.
* **Banned.** Quests that were published, but got reported and then banned.
* **Ended.** Quests that are no longer active, as they have expired.

As a result, the Workshop implementation makes it possible to simulate the workflow of an entire magazine newsroom, if necessary. The owner can focus only on costs and profits, while hired users can handle all content-related tasks.

{% hint style="info" %}
Workshops have separate Silver balances from their owners, and once deposited, Silver can only be used to pay for Quest Bounties and cannot be withdrawn. This is necessary to allow users to donate to their favorite authors in [future versions](../../roadmap/future-versions.md) of Questfall.
{% endhint %}
