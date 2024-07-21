---
description: >-
  The system will always have random challenges created by other users, so
  humans can periodically prove that they are not bots.
---

# 🤖 Anti-bot protection

We are serious about making Questfall a bot-free zone. This is a difficult task, as there have been many attempts in recent years to implement different approaches to prove that a user is human - from various KYC systems with confirmation in the form of NFT, to all sorts of pedometers and tappers on mobile devices. However, none of these approaches have been successful because in the long run they can all be circumvented.&#x20;

{% hint style="info" %}
KYC accounts are sold in bundles for pennies, while farms with thousands of phones fake the required actions on a massive scale.
{% endhint %}

The only approach to defending against Sybil attacks that works is the hash calculation in Proof of Work, but this is more of a race of bots, leading to competition between mining (bot) farmers. Well, these farmers are still humans, so that solves the problem - bots have no advantage because everyone is calculating the hash with code, not by hand.

{% hint style="info" %}
Proof of Stake also works, but we only consider solutions that do not use money as proof, as this kills the initial crypto spirit.
{% endhint %}

The main problem that makes it difficult to protect a system against bots is that users can change the running programs on their computers at will. There are cheats for most online multiplayer games where players do not even earn real money. When money is on the table, many will try to take it by cheating the system.

This does not mean that there is no theoretical solution, except for extensive calculations. In fact, our Team has developed two approaches. The first is the online tournament, which lasts a few minutes and requires everyone to join the multiplayer game at the same time. However, there are two main problems with this approach.

Firstly, it is inconvenient for users who live in different time zones and may be sleeping or working in the office when the tournament is running.&#x20;

Secondly, to prevent automation of such a game, its code should be protected from hacks that could be done quickly, through [polymorphism ](https://en.wikipedia.org/wiki/Polymorphic\_code)or [obfuscation](https://en.wikipedia.org/wiki/Obfuscation\_\(software\)). In other words, the game code should be different for each tournament. So, a hacker will not have enough time to crack it before the tournament ends, and if he does crack it later, he will not be able to use the cheat the next time. This is a pretty complex technical task, but it's suggestive of the idea of variability protection.

While everyone is trying to implement some silver bullet like calculating a hash in bitcoin, the variety of tasks to prove humanity is a protection in itself (like a different code of the game for each tournament). So even if one type of such activity is hacked and automated, it does not help much because there are hundreds more that follow in an unpredictable way.

In Questfall, we call these activities that prove you are human _**challenges**_, which are actually just a special kind of quest. The idea is that anyone can create challenges for others, and the task can be anything. By doing challenges, users earn _**humanity**_, which allows them to earn more - it is used as a multiplier when calculating _**quest power**_. Without challenges, users will still be able to complete quests, but they will not earn anything because of the empty humanity. Moreover, humanity is consumed while doing quests, so users will need to do challenges regularly to keep their quest power multiplier high.

{% hint style="info" %}
Humanity can be thought of as stamina in RPGs. In addition to challenges, humanity can be increased by burning Questfall Token (QFT), which adds value to the entire community and makes the system healthier. This approach can be compared to the cost of electricity when mining Bitcoin.&#x20;
{% endhint %}

Challenges cannot be bypassed and are randomly assigned, so the first account's challenge might be to draw a picture, the second to solve a logic problem and the third to sing a song. Each of these tasks can be automated with modern AI, but not all of them at once, especially those that need to be done in the real world. To prevent abusing the system by creators of challenges all of them will be moderated by the crowd before they become active.

{% hint style="info" %}
This approach will work against bots, but robots with AI will be able to overcome challenges in the future because they will be able to perform tasks in the real world. But while there is no way to tell the difference between humans and robots remotely, robots can still be considered as mining farms, as they will be expensive and would not be able to work under many accounts at once.
{% endhint %}
