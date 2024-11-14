

# Moderation

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

# Quest points


Users who complete quests receive Quest Points, which are used to calculate their individual User Mining Power. The number of Quest Points is directly related to the reputation of the quest author. The higher the Reputation of an author, the more Quest Points users will receive for completing that author's quests.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
The amount of Quest Points in the quest increases exponentially (from 10 to 110) with the reputation of the author, according to the formula below:

$$
QuestPoints=10+Reptuation^{2}
$$

For example, users who complete a quest from an author with a reputation of 5.4 will each receive $$10+5.4^{2}=39.16$$ Quest Points, while a quest from an author with a reputation of 7.4 will give each user $$10+7.4^{2}=64.76$$ Quest Points.
{% endtab %}
{% endtabs %}
