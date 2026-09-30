// Export public economy values once; GitBook serves ordinary static Markdown.
import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {parseArgs} from 'node:util';
import {fileURLToPath} from 'node:url';

const root = new URL('../', import.meta.url);
const snapshot = new URL('.gitbook/assets/economy-settings.json', root);
const page = new URL('assets/economy-settings.md', root);
const keys = ['f', 'e', 'd', 'c', 'b', 'a'];
const names = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythical'];
const paths = ['/admin/crafting/settings', '/admin/crafting/merge', '/admin/lootboxes',
  '/admin/gold/gems/settings', '/admin/rewards/budget', '/admin/consensus',
  '/rpg/stamina/config'];
const fields = (value, names) => Object.fromEntries(names.map(name => {
  if (value?.[name] === undefined) throw Error(`Missing setting: ${name}`);
  return [name, value[name]];
}));
const ordered = value => Array.isArray(value) ? value.map(ordered) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, ordered(value[key])])) : value;
const equal = (a, b) => JSON.stringify(ordered(a)) === JSON.stringify(ordered(b));
const rarity = (value, order = keys) => fields(value, order);
const number = value => {
  if (!Number.isFinite(value)) throw Error('Invalid numeric setting');
  return Number(value.toFixed(6)).toLocaleString('en-US', {maximumFractionDigits: 6});
};
const cell = value => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
const table = (headers, rows) => [headers, headers.map(() => '---'), ...rows]
  .map(row => `| ${row.map(cell).join(' | ')} |`).join('\n');
const date = time => new Date(time).toISOString().replace('.000Z', ' UTC').replace('T', ' ');
const rules = value => ({...fields(value, ['version', 'distribution', 'share', 'root', 'bonus']),
  thresholds: value.thresholds.map(n => n), excluded: fields(value.excluded, ['numerator', 'denominator']),
  shares: value.shares.map(row => fields(row, ['numerator', 'denominator']))});
const resource = key => key[0].toUpperCase() + key.slice(1);
const percent = value => `${Number((value * 100).toFixed(2))}%`;

export function project(raw) {
  const crafting = raw[paths[0]].policy;
  const merge = raw[paths[1]].policy;
  const loot = raw[paths[2]].policy;
  const gem = raw[paths[3]];
  const budget = raw[paths[4]];
  const consensus = raw[paths[5]].policy;
  const stamina = raw[paths[6]];
  if (merge.price_revision !== crafting.revision) throw Error('Crafting revisions changed during export');
  const periods = value => value === null ? null : {
    ...fields(value, ['period', 'currency', 'amount', 'version', 'frozen']),
    allocations: value.allocations.map(row => fields(row, ['id', 'label', 'weight', 'share', 'amount']))
  };
  const saved = gem.rules.filter(row => row.effective_at <= gem.server_time).sort((a, b) => b.effective_at - a.effective_at)[0];
  return {
    crafting: {revision: crafting.revision, settings: {
      upgrade: rarity(crafting.settings.upgrade), evolve: rarity(crafting.settings.evolve, keys.slice(0, -1)),
      scrap: rarity(crafting.settings.scrap), maxout: fields(crafting.settings.maxout, ['cost']),
      reroll: rarity(crafting.settings.reroll, keys.slice(1)),
      merge: Object.fromEntries(['potion', 'gem', 'dice'].map(kind => [kind, rarity(crafting.settings.merge[kind], keys.slice(kind === 'dice' ? 1 : 0, -1))]))
    }},
    merge: {revision: merge.revision, inputs: Object.fromEntries(['potion', 'gem', 'dice'].map(kind => [kind, rarity(merge.inputs[kind], keys.slice(kind === 'dice' ? 1 : 0, -1))]))},
    lootboxes: {revision: loot.revision, potion_chance: loot.potion_chance,
      potion_frequencies: rarity(loot.potion_frequencies), clothing_frequencies: rarity(loot.clothing_frequencies)},
    gems: {revision: gem.config.revision, rules: rules(saved?.rules ?? gem.defaults),
      scheduled: gem.rules.filter(row => row.effective_at > gem.server_time).map(row => ({effective_at: row.effective_at, rules: rules(row.rules)}))},
    budget: {starts: budget.starts, current: periods(budget.current), selected: periods(budget.selected)},
    consensus: {revision: consensus.revision, curve: consensus.curve,
      rating: fields(consensus.rating, ['min_participants', 'min_trust']),
      moderation: Object.fromEntries(['initial', 'appeal_1', 'appeal_2'].map(key => [key, fields(consensus.moderation[key], ['min_participants', 'min_trust'])]))},
    stamina: {parameters: fields(stamina.parameters, ['quest_cost', 'overflow_decay_rate', 'recovery_minutes']),
      starter: fields(stamina.starter, ['max', 'recovery', 'quest_cost']),
      potions: Object.fromEntries(keys.map(key => [key, fields(stamina.parameters.potions.tiers[key], ['restore_percent', 'weight'])]))}
  };
}

export function render(snapshot) {
  if (snapshot.schema !== 1 || !['local release preparation', 'production'].includes(snapshot.source)) throw Error('Unknown settings snapshot format');
  if (!/^\d{4}-\d{2}-\d{2}T/.test(snapshot.captured_at)) throw Error('Missing snapshot date');
  const {values: s} = snapshot;
  if (s.consensus.curve !== 'sqrt-level-v1') throw Error('Review the new consensus trust curve');
  const p = s.crafting.settings;
  const section = (heading, body) => `## ${heading}\n\n${body}\n`;
  const prices = table(['Base Essence setting', ...keys.map(key => key.toUpperCase())], [
    ['Upgrade coefficient × target level', ...keys.map(key => number(p.upgrade[key]))],
    ['Evolve coefficient × √current level', ...keys.map(key => key === 'a' ? '—' : number(p.evolve[key]))],
    ['Guaranteed Scrap return', ...keys.map(key => number(p.scrap[key]))],
    ['Reroll one perk + one matching Dice', ...keys.map(key => key === 'f' ? '—' : number(p.reroll[key]))]
  ]);
  const merge = table(['Consumable', 'Transition', 'Inputs → output', 'Base Essence fee'],
    ['potion', 'gem', 'dice'].flatMap(kind => keys.filter(key => s.merge.inputs[kind][key] !== undefined).map(key => [
      kind, `${key.toUpperCase()} → ${keys[keys.indexOf(key) + 1].toUpperCase()}`,
      `${s.merge.inputs[kind][key]} → 1`, number(p.merge[kind][key])
    ])));
  const chances = frequencies => {
    const total = keys.reduce((sum, key) => sum + (frequencies[key] ? 1 / frequencies[key] : 0), 0);
    return key => frequencies[key] ? percent(1 / frequencies[key] / total) : 'Disabled';
  };
  const loot = table(['Rarity', 'Clothing frequency', 'Potion frequency', 'Conditional potion chance', 'Potion restore', 'Potion weight'],
    keys.map((key, i) => [key.toUpperCase(), number(s.lootboxes.clothing_frequencies[key]), number(s.lootboxes.potion_frequencies[key]),
      chances(s.lootboxes.potion_frequencies)(key), `${number(s.stamina.potions[key].restore_percent)}%`, `${number(s.stamina.potions[key].weight)} g`]));
  const ratio = value => `${value.numerator}/${value.denominator} ≈ ${percent(value.numerator / value.denominator)}`;
  const gems = value => {
    if (value.distribution !== 'shares') throw Error('Review historical Gem distribution before documenting it');
    return `No reward: **${ratio(value.excluded)}**. Each rarity percentage applies to the remaining buyers, rounded up; A takes the final remainder.\n\n` +
      table(['Rarity', 'Share of remaining buyers', 'First unique-buyer count'], keys.map((key, i) => [
        `${key.toUpperCase()} — ${names[i]}`, ratio(value.shares[i]), value.thresholds[i] ?? 'Disabled'
      ])) + `\n\nThe time multiplier falls linearly from **${number(1 + value.bonus)}×** at Monday 00:00 UTC to **1×** at week end. Trading Liquidity also applies.`;
  };
  const budgets = [s.budget.current, s.budget.selected].filter(Boolean).map(value => {
    if (value.allocations.reduce((sum, row) => sum + row.amount, 0) !== value.amount) throw Error('Reward allocations do not match the total');
    return `### ${value.period} — ${value.frozen ? 'opened, fixed' : 'planned, may change'}\n\nTotal: **${number(value.amount)} ${resource(value.currency)}**. New allocations exclude carry and previously promised pools.\n\n` +
      table(['Program', 'Share', 'New Gold allocation'], value.allocations.map(row => [row.label, percent(row.share), number(row.amount)]));
  }).join('\n\n');
  const quorum = table(['Scenario', 'Minimum participants', 'Minimum trust'], [
    ['Quest rating', s.consensus.rating], ['Initial moderation', s.consensus.moderation.initial],
    ['Appeal I / First Quest Review', s.consensus.moderation.appeal_1], ['Final appeal', s.consensus.moderation.appeal_2]
  ].map(([label, value]) => [label, value.min_participants, value.min_trust]));
  return `---\nicon: sliders\n---\n\n# Economy Settings\n\n<!-- Generated by scripts/sync-settings.js. Edit the exporter, not the tables. -->\n\n` +
    `Snapshot date: **${snapshot.captured_at.slice(0, 10)}**. Source: **${snapshot.source}**.\n\n` +
    (snapshot.source === 'local release preparation' ? '{% hint style="warning" %}\nThis is a local draft for the next release, not a confirmation of current production settings. Refresh from production after release activation and before publishing documentation.\n{% endhint %}\n\n' : '') +
    'These are static reference values. The application shows current quotes, reward pools and eligibility. Admin changes may take effect immediately, for a new opening, or at a future period boundary. Existing decisions and reward periods retain their captured rules.\n\n' +
    section('Crafting', `Price revision: **${s.crafting.revision}**.\n\n${prices}\n\nMax Out: **${number(p.maxout.cost)} Essence + one Mythical Gem** for the whole clothing item. This fee has no Crafting or Luck discount. Evolution rounds the base coefficient × √level up before applying Rarity. See [Crafting](../quest-mining/completion/rpg-attributes/crafting.md).`) +
    '\n' + section('Merge Recipes', `Quantity revision: **${s.merge.revision}**; fees use price revision **${s.crafting.revision}**.\n\n${merge}\n\nIngredients must have the same kind and source rarity. Merging discounts Essence only; A cannot merge further. See [Potions](../quest-mining/completion/rpg-items/potions.md), [Gems](../quest-mining/completion/rpg-items/gems.md) and [Dice](../quest-mining/completion/rpg-items/dice.md).`) +
    '\n' + section('Lootboxes And Potions', `Drop-policy revision: **${s.lootboxes.revision}** (0 uses the server defaults). Common-box won item cards have a **${number(s.lootboxes.potion_chance)}%** potion branch. Higher boxes contain clothing only.\n\n${loot}\n\nLarger frequency means lower probability; 0 disables a potion rarity. The potion chance in the table is conditional on the potion branch. Clothing uses its integer ticket calculation above the box rarity floor; see [Potions](../quest-mining/completion/rpg-items/potions.md#acquisition).`) +
    '\n' + section('Gem Leaderboard', `Settings revision: **${s.gems.revision}**; rules version: **${s.gems.rules.version}**.\n\n${gems(s.gems.rules)}\n\n` +
      s.gems.scheduled.map(row => `### Scheduled from ${date(row.effective_at)}\n\n${gems(row.rules)}\n\n`).join('') +
      'Activation and sales availability are separate from these prize percentages. See [Gems](../quest-mining/completion/rpg-items/gems.md).') +
    '\n' + section('Reward Budget', `Unified funding starts: **${date(s.budget.starts)}**.\n\n${budgets}\n\nThese are period-specific settings, not a permanent reward promise. Future totals and Gold shares are configurable. See [Unified Reward Budget](reward-budget.md) and [Gold Freezing](../infrastructure/gold-freezing.md).`) +
    '\n' + section('Consensus', `Revision: **${s.consensus.revision}**. Each voter contributes **√level** trust. Both quorum requirements must be met.\n\n${quorum}\n\nChanges apply to new cases and rating rounds. See [Consensus](../quest-mining/moderation/consensus.md).`) +
    '\n' + section('Stamina Reference', `A fresh unequipped character has **${number(s.stamina.starter.max)} Stamina**, recovers **${number(s.stamina.starter.recovery)}/minute**, and has a base quest cost of **${number(s.stamina.starter.quest_cost)}**. Overflow decays at **${number(s.stamina.parameters.overflow_decay_rate * 100)}% of Maximum Stamina/hour**. These server parameters are separate from Admin crafting prices. See [Stamina](../quest-mining/completion/rpg-attributes/stamina.md).`);
}

async function capture(base) {
  if (!['http://127.0.0.1:8090', 'https://api.questfall.xyz'].includes(base)) throw Error('Use the local or production Questfall API origin');
  const identity = process.env.POCKETBASE_SUPERUSER_EMAIL;
  const password = process.env.POCKETBASE_SUPERUSER_PASSWORD;
  if (!identity || !password) throw Error('Load the private PocketBase environment file');
  const request = async (path, token = '', body) => {
    const response = await fetch(base + path, {method: body ? 'POST' : 'GET', redirect: 'error',
      headers: {'content-type': 'application/json', authorization: token},
      body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(30000)});
    if (!response.ok) throw Error(`Settings export failed: ${path} (HTTP ${response.status})`);
    return response.json();
  };
  const auth = await request('/api/collections/_superusers/auth-with-password', '', {identity, password});
  // The budget overview initializes an absent budget. Refuse that path here:
  // initialization belongs to release startup, not a documentation export.
  const budgets = await request('/api/collections/reward_settings/records?perPage=1&fields=id', auth.token);
  if (!budgets.items?.length) throw Error('Initialize the reward budget through the release flow before exporting documentation');
  const read = async () => project(Object.fromEntries(await Promise.all(paths.map(async path => [path, await request(path, auth.token)]))));
  const values = await read();
  if (!equal(values, await read())) throw Error('Settings changed during export; retry after saving is complete');
  return {schema: 1, captured_at: new Date().toISOString(),
    source: base.startsWith('http:') ? 'local release preparation' : 'production', values};
}

if (import.meta.main) {
  try {
    const {values} = parseArgs({options: {refresh: {type: 'boolean'}, check: {type: 'boolean'},
      base: {type: 'string', default: 'http://127.0.0.1:8090'}}});
    if (values.refresh && values.check) throw Error('Use --refresh and --check separately');
    const saved = values.refresh ? await capture(values.base) : JSON.parse(await readFile(snapshot, 'utf8'));
    const text = render(saved); // Validate every section before changing files.
    if (values.check) {
      if (await readFile(page, 'utf8') !== text) throw Error('Economy Settings is stale; regenerate it');
      console.log('Economy Settings matches the saved snapshot (no API requests).');
    } else {
      await mkdir(new URL('.gitbook/assets/', root), {recursive: true});
      if (values.refresh) await writeFile(snapshot, JSON.stringify(ordered(saved), null, 2) + '\n');
      await writeFile(page, text);
      console.log(`Prepared ${fileURLToPath(page)}; nothing published.`);
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
