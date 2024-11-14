---
icon: check-double
---

# Moderation

One of the unique features of Questfall is its completely decentralized moderation which allows the community to decide the validity of quest completions and reports. This system allows anyone to participate in moderation and by design is still protected from abuse.

Moderating provides users with the **energy** that is needed for **leveling (XP)** and **quest promotion**. As moderation is the only free source of energy there will always be enough users willing to do it.

### Types of Moderations

There are **three types of moderation** in the system:

1.**Witnessing** – Users vote if the link content is equal to the screenshot provided by the user completing the quest.

This is the first step of making sure the quest completion is valid. Witnessing is needed to make sure that there is unchangeable information to vote for in the approving state. 

2.**Approving** – Users vote if the quest is done correctly.

Based on the completion terms and extra information provided by the author moderators vote if the quest should be accepted or declined.

3.**Reported quest or completion** – Users vote if the reported quest or completion breaks community rules.

Reported quests or completions go to moderation only if there are enough reports in it. The reporters either win or lose energy based on the moderation voting result. If a reported quest or completion is voted to be against the community rules the user responsible for it gets a high penalty. 

### Voting principles

The moderation voting is designed in a way that it rewards real users and penalizes those trying to abuse or automate the system.

The following principles apply to the moderation voting:

**Vote weight**

The weight of a user's vote is directly correlated to his level. This makes it impossible for many new accounts to be registered and used to manipulate voting results.

This means that high-level users, who are most interested in the platform's stability and success, have a great deal of influence in moderation.

**Binary voting**

Each item moderated is voted on using the binary options yes/no. The votes have different weights and a winning majority is calculated based on the vote weights. 

Users who voted with the majority are rewarded with energy and those who voted with the minority lose or do not get energy. 

**Reward balance**

Guessing the right answers is a losing strategy as the average penalty for wrong answers is double the reward for the right answers. 

{% hint style="info" %}
Energy rewards is different for each type of moderation when voting with majority or minority.
Witness: +10/0 | Approve: 0/-20 | reported quests +10/-20 (also for the reporter)
{% endhint %}

The user receives the reward or punishment when the moderation is fully settled.

**Randomly assigned moderations**

Users can't choose specific items to vote on when moderating - the system assigns them randomly. This prevents the same automated vote from being cast from many accounts.

Specific moderation can be bypassed only by spending energy. 

The system keeps a balance by providing users with different types of moderation and an equal amount of right/wrong answers.

**Fake moderations**

Along with the real problems that need moderation system generates fakes, that should not pass moderation. Since the system knows what should be the correct vote it can punish malicious voters and reward good ones independent of who is the majority. In other words, such fakes are used as honeypots.

{% hint style="info" %}
In fake moderation, the quest information is mixed in such a way that humans can recognize it being a non-valid completion but bots can’t. 
{% endhint %}

Fake quests allow the system to keep a 50/50 balance between right and wrong answers so the user can’t succeed by accepting every moderation. 

---

The most important parameter that characterises a user in Questfall is his level. The higher a user's level, the greater his mining power and voting weight in the community consensus. This means that high-level users, who are most interested in the stability and success of the platform, have a great deal of influence.



To protect the system from such abuse, community moderation is based on voting, with the following rules:

1. Each item to be moderated is voted on using the binary options (yes/no, good/bad, etc). The votes have different weights and a winning majority is calculated based on the vote weights.
2.
3. The weight of a user's vote is directly correlated to his level. This makes it impossible for a large number of new accounts to be registered and used to manipulate voting results.
4. Users can't choose specific items to vote on when moderating - the system assigns them randomly. This prevents the same automated vote being cast from many accounts.
5. Along with the real problems that need moderation system generates fakes, that should not pass moderation. Since the system knows what should be the correct vote it can punish malicious voters and reward good ones independent of who is the majority. In other words such fakes are used as honeypots.
6. If a user votes As a result of moderation voting the majority wins (gains XP) and minority loses (the amount of XP needed to reach the next levels increases). It is assumed that the majority cast votes properly, since the weights of the votes increases with user level and many low level users can't brake the voting.
7. The amount of XP that is used as reward is less than the amount of XP that is used for punishement. This makes a random voting a losing strategy, since the amount of XP to get to the next level will grow after many iterations.&#x20;



{% hint style="info" %}
There will be other issues to vote on. For example, with Egregore Voting, the community will decide whether a quest is appropriate when it is reported. See the [Egregore Voting](broken-reference) article for more details.
{% endhint %}



One of the most important achievements of human civilization has been to resolve conflicts without bloodshed. This is achieved through the involvement of an outside authority whose decision is accepted by both sides of the conflict as the source of truth.&#x20;

{% hint style="info" %}
It could be a court, a mafia patron, a boss or a priest. In the absence of such authority, only fear can prevent the parties from resorting to violence, as was the case during the Cold War.
{% endhint %}

While scientists worked hard on the theory of the consensus problem, Bitcoin became the first practical solution where the authority to resolve conflicts became a network of equal peer nodes. This was the first time in history that authority was a decentralized system, where the source of truth was the consensus of the majority, where everyone could defend their own interests at the expense of their computing power.

{% hint style="info" %}
Democracy can also be seen as a consensus of majority, but it can easily be abused or broken.
{% endhint %}

The Proof of Work is intended to be the source of truth on a single matter - which chain is canonical and it can be seen as a voting process where each vote has a different weight depending on the hash power of the node. This prevents Sybil attacks, as the vote weights are limited by the computing power of the participants, so splitting does not give an attacker an advantage.

{% hint style="info" %}
By limiting the real-world resources used as vote weights, Sybil attacks evolve into a 51% attack, meaning that an attacker must have more resources than the majority to abuse consensus.
{% endhint %}

There will be many issues in Questfall that require a source of truth, such as: challenge validation, quest moderation, completion approval, and so on. The decision on any particular issue will be reached by a vote of the community, the consensus of which will be based on the following rules:

1. When users vote, they spend their Humanity, which is earned through random challenges, and is therefore a real-world limitation that can't be faked (at least on a large scale). This prevents Sybil attacks, as splitting Humanity between different accounts still requires the same amount of work to earn.
2. In return for their votes, users receive Experience, which helps them level up in RPG style. These levels act as voting weights, giving the most engaged and involved users more voting power to protect the consensus from being abused by many newly created accounts. This will also make it more profitable in the long run to put effort into one account, as higher levels will earn more from mining.
3. Only those users whose votes are close to the majority (voting result) will receive Experience. This creates an effect of "average recursion", where it is more profitable for a user to vote not for his own opinion, but for his estimate of the final vote result. This works pretty well when the vote is binary (like yes/no, good/bad, etc), but it will also work in the case of ratings, since all users who play by the rules will vote almost the same way, while malicious voters will spend their Humanity for nothing because their votes will be too far from the final result to be rewarded.

Consensus based on voting using such principles allows not only to prevent Sybil attacks, but even 51% attacks. Users will spend Humanity to participate in the consensus, and the decision on each case will be heavily influenced by high-level users. This means that in order to abuse the system, a cheater should first gain Humanity, then spend it on voting rather than mining, gain Experience by voting properly, and then when he has leveled up, he will have to compete with other high levels to break a system, while he could earn a lot by mining.

{% hint style="info" %}
In other words, by the time users have the power to influence the voting results, they are heavily invested in the system and have an advantage over newcomers, so it is in their best interest to make the system work as it should.
{% endhint %}

This is the same as putting every penny earned from Bitcoin mining into an ASIC farm and hoping that one day it will have enough hash power for a 51% attack, allowing the blockchain to be completely rewritten. But unlike Bitcoin, where computing power can be bought, high levels in Questfall can only be earned by performing valuable actions and constantly proving that a user is human.

