---
icon: scale-unbalanced-flip
---

# Consensus

#### League-based result segmentation

With binary votes, it is fairly easy to calculate the majority. However, the straightforward approach when all votes are equal opens the door to Sybil attacks. Even if the system weights votes by user level, this does not solve the problem. An attacker could still create many low-level accounts and gain the overall weight in the system needed to change the voting results.

In Questfall, to prevent vote manipulation by many low-level accounts, voting is segmented by league and individual league results are generated. Each league result has the same weight, and the final result is determined by a simple majority.

<table><thead><tr><th width="147">League</th><th width="92" align="center">Yes</th><th width="86" align="center">No</th><th width="82" align="center">Result</th></tr></thead><tbody><tr><td>1</td><td align="center">156</td><td align="center">633</td><td align="center">No</td></tr><tr><td>2</td><td align="center">142</td><td align="center">43</td><td align="center">Yes</td></tr><tr><td>3</td><td align="center">53</td><td align="center">2</td><td align="center">Yes</td></tr><tr><td>4</td><td align="center">12</td><td align="center">4</td><td align="center">Yes</td></tr><tr><td>Final</td><td align="center">363</td><td align="center">682</td><td align="center">Yes</td></tr></tbody></table>

{% hint style="info" %}
In cases where the league results are evenly split, the highest league result is given double weight.
{% endhint %}

This approach protects the results from both sides - many low-level accounts as well as a few high-level accounts won't be able to manipulate the consensus.&#x20;

To abuse a voting system, an attacker will need a majority in most leagues. This also means that protection will increase over time as more leagues are opened in Questfall.



####
