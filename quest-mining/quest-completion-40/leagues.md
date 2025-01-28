---
icon: chart-pyramid
---

# Leagues

In Questfall, the weekly [rewards](rewards.md) for miners are segmented based on user progression. However, if such segmentation were based on [levels](levels.md), then when a top user reached a new highest level in the system, everyone would start earning less because the reward pool would be split into more parts.

Since progress through the levels will be quite fast (at least in the beginning), the rewards for existing segments would also decrease rapidly. To slow down the process of segmentation, Questfall introduces the concept of leagues, in which users of levels within a certain range are grouped together.

To protect the system from Sybil attacks, the first 9 levels (the range of 1-9 levels) are considered the Hall, which is not a league and therefore does not have weekly rewards. Therefore the first league starts at level 10 and ends at level 19, containing a range of 9 levels, and each subsequent league contains an additional 5 levels.&#x20;

<table><thead><tr><th width="132">Name</th><th width="114" align="center">Start Level</th><th width="111" align="center">End Level</th><th width="121" align="center">Range Size</th></tr></thead><tbody><tr><td>Hall</td><td align="center">1</td><td align="center">9</td><td align="center">9</td></tr><tr><td>League I</td><td align="center">10</td><td align="center">19</td><td align="center">9</td></tr><tr><td>League II</td><td align="center">20</td><td align="center">34</td><td align="center">14</td></tr><tr><td>League III</td><td align="center">35</td><td align="center">54</td><td align="center">19</td></tr><tr><td>League IV</td><td align="center">55</td><td align="center">79</td><td align="center">24</td></tr><tr><td>League V</td><td align="center">80</td><td align="center">109</td><td align="center">29</td></tr><tr><td>League VI</td><td align="center">110</td><td align="center">144</td><td align="center">34</td></tr><tr><td>League VII</td><td align="center">145</td><td align="center">184</td><td align="center">39</td></tr><tr><td>League VIII</td><td align="center">185</td><td align="center">229</td><td align="center">44</td></tr><tr><td>League IX</td><td align="center">230</td><td align="center">279</td><td align="center">49</td></tr><tr><td>League X</td><td align="center">280</td><td align="center">334</td><td align="center">54</td></tr><tr><td>...</td><td align="center"></td><td align="center"></td><td align="center"></td></tr></tbody></table>

{% hint style="info" %}
Since there is no cap on user level, the number of leagues in the system can theoretically be infinite.
{% endhint %}

Leagues not only drastically slow down the appearance of new segments, but also add an internal dynamic. The higher the league, the greater the level difference between users at the bottom of the league and those at the top.

While attribute points lose value with each new point due to the growing base, even small advantages become valuable again as the range size increases with leagues. This applies not only to attribute points, but also to all other RPG items.

As a result, users are motivated both to advance within the league and to enter the next league, even though they will be at the bottom of the league again, because the overall competition will decline.
