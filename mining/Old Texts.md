
# Quest Mining

Mining, first implemented in Bitcoin, creates an economy completely different from modern capitalism by establishing a direct link between investment in the system and its development.

While high demand for a particular security on the stock market only allows the founders of a company to cash out at a profit or speculators to make money, the high price of cryptocurrency ensures the profitability of mining, attracting new miners who add more value to the system and, in the case of Proof of Work, making the blockchain more secure as a result.

{% hint style="info" %}
Here and throughout, we take mining in a more abstract sense than just brute forcing a hash in Proof of Work. By mining we mean tokenomics, where tokens with a limited total supply are periodically issued in decreasing amounts, determined by a pre-defined formula, and distributed to users according to the value they add to the system.
{% endhint %}

The mining approach has been very successful because it allows newly issued coins to be obtained for valuable actions, such as creating a new block in the chain, without having to pay for them. And if we assume that such valuable actions can actually be anything, then the concept of mining fits in perfectly with the quests.

So it's no surprise that Questfall is built around the concept of mining, which means that the system rewards users with a decreasing number of Questfall Tokens (QFT) each week for various quest and infrastructure actions.

{% hint style="info" %}
Each QFT token is issued as a user reward for valuable actions, and none are pre-minted by the Team.
{% endhint %}

Quest mining requires different activities to be rewarded, and this creates a problem because there is no way to compare, for example, creating a quest and providing liquidity to the DEX pool.&#x20;

Therefore, QFT issue is divided into pre-determined proportions between different areas. It can be thought of as different mining pools, each receiving a fixed percentage of the weekly issue and distributing rewards to users based on the comparative value they bring to the system.

{% hint style="info" %}
As the percentage split is fixed, and the QFT issue is determined by the pre-defined formula, the number of tokens allocated to each of these pools can be accurately calculated for any given week.
{% endhint %}

In Questfall, a third of the weekly issue (34%) is used to support the infrastructure:

* 1% to buy back and burn Founder NFTs;
* 5% to reward liquidity providers;
* 5% to reward QFT freezing;
* 5% to cover project costs (Team);
* 8% to cover Gold withdrawals;
* 10% to Founders.

{% hint style="info" %}
Details of the reward distribution in each of these pools can be found in the relevant articles.
{% endhint %}

The remaining two-thirds of the weekly issue (66%) is used to reward the quest miners:

* 40% to users who complete quests;
* 10% to authors who create quests;
* 16% to seasonal reward pool (11.2% to users and 4.8% to authors).

At the end of each week or season, rewards for completing quests are distributed based on a user's activity score, which acts like a personal mining power. This activity score is simply the total number of ACT points a user earns by completing quests during the period.

Each quest is worth a certain number of ACT points, which all users who complete the quest will receive as a basic reward. However, while the basic reward for the quest is the same for all users, the final number of ACT points received can be increased by individual user bonuses.

{% hint style="info" %}
Individual bonuses are based on the [RPG System](rpg-system.md).
{% endhint %}

The number of ACT points users receive as a basic reward for a given quest is based on the quest author's reputation, which is simply a moving average of the community ratings of that author's quests.&#x20;

In other words, the higher the ratings of the author's quests, the higher his reputation, and the more ACT points will be used to reward his future quests.

{% hint style="info" %}
In order to prevent malicious authors from abusing the rating system, votes are weighted differently depending on the user level. Read more in the [Ratings](../authors/ratings.md) article.
{% endhint %}

This way, authors with a higher reputation will create more rewarding quests, which will motivate users to complete them. And since the author's mining power is represented by the number of quests users complete in a week or season, an author's reward is directly affected by his reputation.

This approach makes quest quality the cornerstone of the system, as the most profitable strategy for authors is to create fun, educational or entertaining quests that are appreciated by the community, while users are motivated to complete quests created by the most diligent authors.


# Promotion

There will be no upper limit to the number of Silver an author can burn, as the maximum base mining point reward of 1000 will be an unreachable limit.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
The Reputation that is additionally applied&#x20;
{% endtab %}
{% endtabs %}

# NFT burning (1%)

Our goal is to maximise the price of NFTs over the long term. In order to achieve this, 2% of the newly created QFTs are allocated each week to the purchase of [Mining ](broken-reference)(1%) and [Founder](../assets/founder-nfts.md) (1%) NFTs from the market via auction, with the subsequent burning of these NFTs.

There will be two independent auctions each week, one for Mining NFTs and one for Founder NFTs. In these two auctions, the system will use 1% of the weekly token creation for each type of NFT to buy back NFTs offered by users. User bids will be ranked according to the price of the NFT parameter - one cent for Mining NFTs or one point for Founder NFTs.

Bought NFTs will be burned and the remaining QFTs allocated for buyback will be carried over to the next week. This means that if user bids are too high this week and the system is unable to buy even one NFT, the amount allocated for buyback will be increased at the next auction. After several such accumulations, the system is guaranteed to meet user bids.

{% hint style="info" %}
Due to the limitations of smart contracts, the maximum number of offers that can be filled each week is 50.
{% endhint %}

The buyback and burning of NFTs will begin shortly before the launch of Questfall and will continue until there are no NFTs left in circulation. This will not only ensure that the price of NFTs rises in the long term but will also increase the share of the weekly reward for each Founder who does not burn their [Founder Points](../assets/founder-nfts.md).&#x20;

{% hint style="info" %}
In fact, the last owners of each type of NFT will be able to get as many QFTs as they are willing to wait for, as the amount the system will offer for burning NFTs will increase each week.
{% endhint %}

***


The current status: <mark style="background-color:orange;">coming before Questfall v1.0</mark>&#x20;


### Activity Score

The **Activity Score** is used to distribute the rewards for quest mining. It can be thought of as a mining power that resets every reward period (one week for regular mining and three months for seasonal mining). Throughout the period, the **Activity Score** can only increase.&#x20;

Although all users who complete the same quest receive the same number of **ACT** points, the **Activity Score** is actually increased for each of them individually. The **ACT** points that a user receives play the role of a minimum base, which is multiplied by the mining efficiency. This efficiency multiplier starts at <mark style="background-color:purple;">1.01</mark>, and increases by <mark style="background-color:purple;">0.01</mark> for each point added to the **Mining** attribute.

{% hint style="info" %}
For example, if a user receives **10 ACT** points for completing a quest and has a **Mining** attribute of 30, he will actually increase his **Activity Score** by: 10+10x0.01x30) = 13.
{% endhint %}

As well as increasing the **Mining** attribute, the mining efficiency can also be increased by using clothing and elixirs with the appropriate effects .

# - Questfall Tokens (QFT)

QFT token:\
1\. No allocations, can only be mined through activities on the Questfall platform\
2\. Reward pool shared on weekly checkpoints between Creators, Users, Validators, Staking, Founders \
3\. Reward Pool = QFT issuance + QFT income\
4\. The QFT issuance decreases with each checkpoint. The decay rate is fixed to 1% for example\


Token utility:\
1\. Can be swapped for XP points to create quests on the platform\
2\. Can be staked as a user to gain extra mining power(multiplier)\
3\. Can be staked a validator \
4\. Can be staked as an investor and share a % of the QFT distribution



My take on token dynamics \
1\. Max supply: ? \
I personally want a bigger supply because of the psychological impact. Working a whole month to receive fractions of QFT will not look good. We say the QFT price will be higher in this case but still how much can 0.5 QFT be worth? It'll have to be in the hundreds. I would rather hold 100 QFT worth 10$ than 1 QFT worth 10$ \
The psychological impact is way bigger in this case. For example if i hold 100 QFT with a price of 0.1$ then making gains seemd a lot more realistic. 100% gain it's only 0.2$ . \
In the other case if i hold 1 QFT worth 10$ then making 100% gain seems unlikely. \
Another plus of bigger supply is Market CAP.  We can get in the top 500 projects a lot easier by having a larger mcap.\
\
My advice is to make the supply 100M \
Weekly issuing starting at 300k with a decay rate of 1.5% checkpoint\
\
If we only have 100 creators, 1000 users and 300 validators then without calculating any extra multiplier each will receive QFT in the hundreds. \
the more users we get the more it will dilute. \
Now imagine we get 10k active users\
If the max supply is 1-10M the dilution will be something like 0.0001  and we cannot guarantee the price will offset the dilution.\
\


#### Deflationary mining

Deflationary mining concept (the article will follow) assumes that users who add value to the system are periodically rewarded with respect to their contribution (during the period) by the issuance of the token with the limited total supply. This way such users are considered miners, and it is assumed that tokens could be obtained through mining only. To add to such a mining deflationary flavor there should be a way to burn tokens for some valuable product of the system.

In relation to Questfall project this concept applies as such:

* Questfall Token (QFT) total supply is 10 000 000, which is issued weekly by decreasing portions. The amount of QFT that will be issued any particular week could be calculated by the formula. There is no pre-minting of the QFT, which means that the only way to obtain newly issued QFT is through mining.&#x20;

{% hint style="info" %}
For more details read the [Questfall Tokens (QFT) sections](questfall-tokens-qft.md) of this documentation.
{% endhint %}

* QFTs issued each week are distributed with respect to contribution to those who has brought value to the system during the week. This means that QFT can be obtained as a reward for certain valuable actions without having to buy it.

{% hint style="info" %}
For more details read the [Mining sections](broken-reference) of this documentation.
{% endhint %}

* By burning QFT any author can obtain off-chain system Credits (at a fixed USD price), which can be used for the quest promotion to the platform users. This means that after some market saturation period the circulating supply of QFT will steadily decline.

{% hint style="info" %}
For more details read the [Credits sections ](broken-reference)of this documentation.
{% endhint %}



# QFT burning (4%)

QFT tokens can be burned for [Credits](broken-reference), which in turn can be used by users to replenish their Humanity or by authors to promote their quests. In order to increase the number of tokens burned, 4% of the newly created QFTs will be used each week to reward users who burn their QFTs for Credits during that week.

This approach creates an arbitrage by ensuring that if less than 4% of the weekly token creation is burned during a week, there is an opportunity to burn QFTs and return more than that as a reward. In effect, 4% of the weekly token creation becomes a floor that guarantees a minimum amount of QFT burned per week.&#x20;

Meanwhile, for Credits, users receive value (quest promotion or Humanity) from the system, which implies burning more than 4% of the weekly token creation.

# Promotion

Authors can also add Quest Points to their quests by burning some Credits. The minimum amount is 5 Credits (equivalent to $5), which will add the amount of Quest Points to the quest as if the author had 5 Reputation or 135 Quest Points. The more Credits are burned, the higher the imaginary Reputation will be. There will be no upper limit to the number of Credits an author can burn, as the maximum Reputation 10 will be an unreachable limit.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
The Reputation that is additionally applied&#x20;
{% endtab %}
{% endtabs %}

***

However, promoting a quest is not just about getting a certain spot in the global feed for a fee. To promote a quest, an author should spend Credits on the [Quest Points](broken-reference) that users will receive when they complete the quest. This means that promoted quests are not only more visible, but also more attractive for users to complete.

{% hint style="info" %}
Since Credits can only be obtained by burning QFT (at a fixed price of $1), promoting quests forces [QFT deflation](../overview/token-burning.md), which adds value to the entire community.
{% endhint %}

This way, the feed algorithm will push the most rated or promoted quests to the top, making quests that do not add value to the community less popular and allowing users to focus on quests that are educational, fun or offer a higher reward.

# Rewards

Rewarding quest completion by ordinary users is at the core of the quest mining concept, along with quest creation by authors. This is what makes Questfall unique, as QFTs are earned by completing quests, not by buying tokens.

That is why the biggest part equal to 40% of the weekly QFT issue is used to reward users for completing quests.&#x20;

To prevent abuse of the system by bots or multi-accounts, the distribution of rewards to users who complete quests is calculated using a few simple rules.

1. Users receive a number of Quest Points for each quest they complete, based on the author's Karma and the number of Credits the author of the quest has burned to promote it.
2. Quest Points the user receives are adjusted by the user's level, Humanity and Mining NFT (if any) to calculate Mining Power the user obtains for completing that particular quest.&#x20;
3. The fixed number of QFT tokens that can be calculated in advance for any given week is distributed to users based on their share of the total Mining Power earned by all users during the current week.

This way Quest Points earned by users are individual for each author or even each quest if it is promoted but are the same for all users who completes the same quest. On the other hand, these default amount of Quest Points for a particular quest is just the base for calculation of Mining Power which depends on individual user parameters (level, Humanity, Mining NFT).

# Reputation

Each author in Questfall has a Reputation attribute, which is essentially a moving average of the author's quest ratings. This means that Reputation range is the same as the rating range, which goes from 0 to 10 in either direction, depending on the rating of the author's latest quests.

{% tabs %}
{% tab title="Chart" %}
<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption><p>Reputation of the author depends on the rating of his quests.</p></figcaption></figure>
{% endtab %}

{% tab title="Details" %}
Reputation is calculated using the following formula:

$$
Reputation_{n}=\frac{9*Reputation_{n-1}+Rating_{n}}{10}
$$

For example, if a new author posts a quest that receives a 7.5 rating, the author's reputation will be calculated accordingly: $$\frac{9*0+7.5}{10}=0.75$$. If the author has a reputation of 5 and the new quest has a rating of 8.4, the author's reputation will increase: $$\frac{9*5+8.4}{10}=5.34$$, but if the rating is lower (say 3.4), the author's reputation will decrease: $$\frac{9*5+3.4}{10}=4.84$$.
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Because of the voting mechanic, malicious authors can't abuse the quest rating to increase their Reputation. Read more about voting process in [Consensus Voting](broken-reference) article.
{% endhint %}

# Magic

Users can use spells to gain advantages when using the platform. There are 4 dedicated spell slots that open with progression in character levels.\
\
Books can be found in lootboxes and can be traded on the marketplace. \
\
In Questfall, to learn a spell a Book is required. \
There are 6 tiers of rarity for spellbooks\
\
1\. Common(F)\
2\. Advanced or Refined(E)\
3\. Rare (D)\
4\. Legendary (C)\
5\. Epic (B)\
6\. Mythic(A)\
\
To upgrade books, users need to merge 5 books of the same type and rarity. For example, 5 common books with the same spell can merged to create an Advanced book of the same spell. This means that the rarity tier will increase same as the spell's power\
\
When learning a spell the book is consumed forever and cannot be sold back. Spells can be unlearned by simply deleting them. \
\
Intelligence is the main attribute for spells. It increases the number of spells a user can learn and the number of active spells available. \
\
Spells consume Mana. The more powerful the spell, the more mana it consumes.\
Mana is a limited resource used to cast spells. It regenerates slowly after some time. Mana capacity and regeneration can be increased by putting skill points in character attributes or by equipping certain items.\


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

# Crafting

Garment are pieces of clothing equipment used by players to increase their stats and gain an edge over other users when doing certain activities on the platform.\
\
In Questfall the Garment equipment can be obtained through lootboxes, can be bought and sold on the marketplace and it can be salvaged to obtain essence.\
\
There are 8 different garment pieces that can be equipped on the character\
\
1\. Headwear\
2\. Torso\
3\. Legwear\
4\. Footwear\
5\. Handwear\
6\. Cape\
7\. Belt\
8\. Accessories(rings, necklace, trinkets)\
\
There are 6 different rarity tiers for the garment equipment. \
Common(F)\
Advanced or Refined(E)\
Rare (D)\
Legendary (C)\
Epic (B)\
Mythic(A)\
\
Each item has stats that can be upgraded and non upgradable stats \
Common items have 1 upgradable stats\
Advanced items have 2 upgradable stats\
Rare Items have 3 upgradable stats\
Legendary items have 3 upgradable stat and 1 non upgradable\
Epic items have 3 upgradable stat and 2 non upgradable\
Mythic items have 3 upgradable stat and 3 non upgradable\
\
Salvaging gives essence based on the rarity of the item. This process can be influenced by Precision attribute which provides extra essence depending on it's level\
To lvl up items users need to spend Essence. The essence required to lvl up increases with each item level\
\
Items have weight and their storage is limited. \
\
Item Levels\
Each Garment equipment has levels. In order to equip items users need to meet the required level of the item.\
\
Equipping items\
When users equip or unequip items they need to spend essence. \
\
\
Consumable items\
Cannot be upgraded\
\
Potions\
Potions do not have rarity tiers\
There are 2 types of potions, Mana and Stamina. \
Upon consuming they regenerate their respective power. \
they can be found in loot boxes and traded on the marketplace\
\
Elixirs\
Same rarity tiers as items. \
D,E.F tiers give temporary attribute boost while C,B,A offer permanent attribute points upon consumption\

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
