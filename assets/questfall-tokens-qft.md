---
icon: coins
---

# Questfall Tokens (QFT)

Questfall Token (QFT for short) is based on the Deflationary Mining model, and assumes that the system issues tokens to reward users for the value they create, while at the same time being used by users to obtain value from the system it produces.

<table data-header-hidden><thead><tr><th width="131"></th><th></th></tr></thead><tbody><tr><td><strong>Platform</strong></td><td>Polygon Blockchain</td></tr><tr><td><strong>Address</strong></td><td>Not yet implemented</td></tr><tr><td><strong>Issuing</strong></td><td>QFTs are issued in decreasing amounts at the end of each week according to a pre-determined formula for the number of tokens remaining to be issued:<span class="math">10^{9.5}/(W+10^{2.5})</span></td></tr><tr><td><strong>Burning</strong></td><td><ul><li>QFTs are burned for <a href="gold-in-game.md">Gold</a>, which in turn can be used to get benefits from the system</li><li>QFTs are burned when trading on higher rarity tiers (C,B,A), as 5% of the item's price is taken as a marketplace fee and burned</li><li>Some QFTs are locked in the liquidity pool forever because the <a href="../infrastructure/liquidity-providers.md">Liquidity Program</a> assumes that ownership of the liquidity provided is burned</li></ul></td></tr><tr><td><strong>Utility</strong></td><td><ul><li>Can be burned for <a href="gold-in-game.md">Gold</a></li><li>Can be used to buy higher rarity <a href="../mining/Items.md">RPG items</a> (C,B,A) on the marketplace</li><li>Can be used to <a href="../infrastructure/liquidity-providers.md">provide liquidity</a> in the official QFT pool</li><li>Can be <a href="../infrastructure/qft-freezing.md">frozen</a> for an extendable period for a QFT reward</li></ul></td></tr><tr><td><strong>Precision</strong></td><td>Decimal places: <span class="math">10^{70}</span></td></tr><tr><td><strong>Supply</strong></td><td>Maximum total supply: 10,000,000 QFT<br><br>The precision is sufficient to issue QFTs for billions of years, so the entire supply will never actually be issued while the sun is shining. In addition, the QFTs will be burned in huge numbers, especially when the price drops. <br>In our models, this results in a maximum circulating supply of 300,000 QFTs, which is reached in the first year, and then slowly decreases in the long term.</td></tr><tr><td><strong>Circulation</strong></td><td>Can be swapped, transferred, and burned like any other ERC-20 token</td></tr><tr><td><strong>Specifics</strong></td><td><ul><li>Weekly issuance is divided into pre-defined pools for different types of values created by users</li><li>The number of QFTs issued each week decreases</li><li>QFTs are constantly burned by users for system benefits</li><li>No tokens are pre-minted or sold by the Team</li><li>The amount of tokens to be issued and their distribution among pools is set in stone in smart contracts, the ownership of which the Team will burn</li></ul></td></tr></tbody></table>

Each week, the pre-determined number of QFTs are issued and distributed in pre-defined proportions among several pools of different activity types in which users provide comparable value.

<table><thead><tr><th width="241">Activity Type</th><th width="115" align="right">QFT Share</th></tr></thead><tbody><tr><td>Burning Founder NFTs</td><td align="right">1%</td></tr><tr><td>Liquidity Program</td><td align="right">5%</td></tr><tr><td>QFT Freezing</td><td align="right">5%</td></tr><tr><td>Project Development</td><td align="right">5%</td></tr><tr><td>Gold withdrawls</td><td align="right">8%</td></tr><tr><td>Founders</td><td align="right">10%</td></tr><tr><td>Quest Authoring</td><td align="right">13.2%</td></tr><tr><td>Quest Mining</td><td align="right">52.8%</td></tr></tbody></table>

Unlike Bitcoin, where issuance decreases every four years, the number of QFTs issued decreases with each weekly issuance.

{% embed url="https://www.desmos.com/calculator/6sjhcu9fdh" %}
Weekly issuance of QFTs
{% endembed %}

Thanks to the Deflationary Mining model, QFT is directly backed by user activity in Questfall. The fundamental reason for the rising price of QFT is not the influx of new money, but the burning of QFTs due to user competition, which may not even grow, but simply remain constant.

