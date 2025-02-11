---
icon: chart-pyramid
---

# Leagues

In Questfall, the weekly [rewards](rewards.md) for miners are segmented based on user progression. However, if such segmentation were based on [levels](levels.md), then when a top user reached a new highest level in the system, everyone would start earning less because the reward pool would be split into more parts.

Since progress through the levels will be quite fast (at least in the beginning), the rewards for existing segments would also decrease rapidly. To slow down the process of segmentation, Questfall introduces the concept of leagues, in which users of levels within a certain range are grouped together.

To protect the system from Sybil attacks, the range of 1-4 levels forms the Hall, which is not a league and therefore does not have weekly rewards. The first league starts at level 5 and ends at level 14, containing a range of 10 levels, and each subsequent league contains an additional 5 levels.

<table><thead><tr><th width="132">Name</th><th width="114" align="center">Start Level</th><th width="111" align="center">End Level</th><th width="121" align="center">Range Size</th></tr></thead><tbody><tr><td>Hall</td><td align="center">1</td><td align="center">4</td><td align="center">4</td></tr><tr><td>League I</td><td align="center">5</td><td align="center">14</td><td align="center">10</td></tr><tr><td>League II</td><td align="center">15</td><td align="center">29</td><td align="center">15</td></tr><tr><td>League III</td><td align="center">30</td><td align="center">49</td><td align="center">20</td></tr><tr><td>League IV</td><td align="center">50</td><td align="center">74</td><td align="center">25</td></tr><tr><td>League V</td><td align="center">75</td><td align="center">104</td><td align="center">30</td></tr><tr><td>League VI</td><td align="center">105</td><td align="center">139</td><td align="center">35</td></tr><tr><td>League VII</td><td align="center">140</td><td align="center">179</td><td align="center">40</td></tr><tr><td>League VIII</td><td align="center">180</td><td align="center">224</td><td align="center">45</td></tr><tr><td>League IX</td><td align="center">225</td><td align="center">274</td><td align="center">50</td></tr><tr><td>League X</td><td align="center">275</td><td align="center">329</td><td align="center">55</td></tr><tr><td>...</td><td align="center"></td><td align="center"></td><td align="center"></td></tr></tbody></table>

{% hint style="info" %}
Since there is no cap on user level, the number of leagues in the system can theoretically be infinite.
{% endhint %}

Leagues not only drastically slow down the appearance of new segments, but also add an internal dynamic. The higher the league, the greater the level difference between users at the bottom of the league and those at the top.

While attribute points lose value with each new point due to the growing base, even small advantages become valuable again as the range size increases with leagues. This applies not only to attribute points, but also to all other RPG items.

As a result, users are motivated to move up in the league as well as to move up to the next league. Even though they will be at the bottom of the new league, the overall competition will decrease.

{% hint style="info" %}
Joining a new league also allows a user to reset attribute points once for free.
{% endhint %}
