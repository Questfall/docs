# Updating the next release documentation

The current documentation changes are local drafts. Fedor requested on
30 September 2026 that they stay unpublished until the next production release.
Do not push or publish this repository as part of local documentation edits.

## Static settings snapshot

`assets/economy-settings.md` is generated from the allowlisted public values in
`.gitbook/assets/economy-settings.json`. Readers make no API requests. The exporter
uses existing Admin endpoints; it creates no settings, orders or payments and
does not change prices or activate programs. Keep credentials in the private
PocketBase environment file. Raw Admin responses, tokens, receiver records,
audit entries and user data must never be copied into the documentation.

From this repository, refresh the local release draft:

```bash
bun --env-file=../questfall-pocketbase/.env.local scripts/sync-settings.js --refresh
```

Regenerate or check the saved snapshot without any API request:

```bash
bun scripts/sync-settings.js
bun scripts/sync-settings.js --check
```

The exporter checks prices and quantity revisions, reads all settings twice and
aborts if public values changed between reads. It documents saved prices, merge
quantities, lootbox frequencies, current and scheduled Gem rules, the selected
reward week, consensus minima and Stamina reference
values. API/schema errors stop the export rather than substituting guessed
defaults. Historical Gem policies need review before replacing the current
percentage-based documentation.

The reward-budget overview can initialize an absent budget. The exporter first
checks that a saved budget exists and aborts otherwise, so initialization remains
part of the normal release flow rather than documentation generation.

The generated page is the dated numerical reference. Descriptive pages explain
the mechanics and retain illustrative calculations. After changing settings,
refresh this snapshot and review related tables, examples and trait charts;
`--check` verifies the generated page only, not every example or live server state.
Changes to fixed formulas, Gold packages, progression rules or eligibility also
require a source-code review. There is no automatic publication on Admin save.

## At the production release

1. Complete the application/backend release and its activation steps first.
   Keep the documentation unpublished while those are being verified.
2. Read the now-active production settings using the same exporter:

   ```bash
   bun --env-file=../questfall-pocketbase/.env.local scripts/sync-settings.js --refresh --base https://api.questfall.xyz
   ```

3. Review the diff. Confirm reward week and whether it is planned or opened,
   scheduled Gem rules, prices, recipes and quorum minima. Do not
   present local test values as production promises. Preserve historical rewards
   and policy snapshots. Remove draft release wording only after actual activation.
4. Update related examples and run the offline snapshot check plus local Markdown
   link checks. Refresh generated trait charts if their underlying formulas changed.
5. Publish documentation with Fedor's authorized production release, and verify
   the published pages and settings date.

For future Admin changes, the same refresh → review → documentation publication
flow avoids database requests from readers. An automatic job could later run
this exporter and propose a Git diff after relevant saves; publication should
still follow review, especially for rules scheduled for a future period.
