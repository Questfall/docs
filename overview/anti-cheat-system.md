# 🛡️ Anti-cheat system

Despite its simplicity and versatility, the concept of mining requires a condition that is rather difficult to fulfil. The system shouldn't reward users for the fake value they claim to have created.

It can be said that a system without intelligence buys users' resources according to certain rules based on competition, and if it is possible to sell a fake to the system, cheaters will flood the entire system with it, while users who add real value will receive only a tiny fraction of the system's reward. Eventually this will be the end of the system.

This is why mining has not progressed much beyond the Proof of Work consensus, although there have been many attempts in recent years to implement fair mining by proving that a user is human: from various KYC systems with confirmation in the form of NFT, to all sorts of pedometers and tappers on mobile devices. However, none of these approaches have been successful because, in the long run, they are all open to abuse.

{% hint style="info" %}
KYC accounts are sold in bundles for pennies, while farms of thousands of phones fake the required actions on a massive scale.
{% endhint %}

So today's teams prefer to mint all the tokens for themselves at once and then sell them to the crowd, which is actually nothing new. At the dawn of the stock market more than 150 years ago, anyone could issue their own securities and sell them to the public through newspaper advertisements. And until the state started to regulate the securities market, there were much bigger ups and downs compared to the modern crypto market.

However, the difficulty of the task does not mean that we have to give up and go back to where our great-grandparents came from. In fact, our Team has developed two solutions to the problem of proving that a user is human.

The first is the online tournament, which lasts a few minutes and requires everyone to join the multiplayer game at the same time. But there are two main problems with this approach.

Firstly, it is inconvenient for users who live in different time zones and may be sleeping or working in the office when the tournament is running.&#x20;

Secondly, there are cheats for most online multiplayer games where players do not even earn real money. When money is on the table, many will try to take it by hacking the system. To prevent cheating in such a multiplayer tournament, the game code should be protected from fast hacks by [polymorphism ](https://en.wikipedia.org/wiki/Polymorphic\_code)or [obfuscation](https://en.wikipedia.org/wiki/Obfuscation\_\(software\)). In other words, the game code should be different for each tournament. So, a hacker will not have enough time to crack it before the tournament ends, and if he does crack it later, he will not be able to use the cheat the next time. This is quite a complex technical task, but it's suggestive of the idea of variability protection, which is used in our second approach to proving humanity.

While everyone is trying to implement some silver bullet like calculating a hash in Bitcoin, the variety of tasks to prove humanity is a protection in itself (like a different game code for each tournament). So even if one type of such activity is hacked and automated, it does not help much because there are hundreds more that follow in an unpredictable way.

In Questfall, we call these activities that prove you are human _**challenges**_, which are actually just a special kind of quest. The idea is that anyone can create challenges for others, and the task can be anything. By doing challenges, users earn _**humanity**_, which allows them to mine more - it is used as a multiplier when calculating _**quest power**_. Without challenges, users will still be able to complete quests, but they will not earn much because of the empty humanity. Moreover, humanity is consumed while doing quests, so users will need to do challenges regularly to keep their quest power multiplier high.

{% hint style="info" %}
Humanity can be thought of as stamina in RPGs. In addition to challenges, humanity can be increased by burning Questfall Token (QFT), which adds value to the entire community and makes the system healthier. This approach can be compared to the cost of electricity when mining Bitcoin.&#x20;
{% endhint %}

Challenges cannot be bypassed and are randomly assigned, so the first account's challenge might be to draw a picture, the second to solve a logic problem and the third to sing a song. Each of these tasks can be automated with modern AI, but not all of them at once, especially those that need to be done in the real world.

{% hint style="info" %}
This approach will work against bots, but robots with AI will be able to overcome challenges in the future because they will be able to perform tasks in the real world. But while there is no way to tell the difference between humans and robots remotely, robots can still be considered as mining farms, as they will be expensive and would not be able to work under many accounts at once.
{% endhint %}

To prevent abuse of the system by challenge creators, all challenges will be moderated by the crowd before they become active. This brings us to a new problem - multi-accounts, or Sybil attacks in scientific terms.
