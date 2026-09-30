# Questfall product documentation

Follow the workspace [AGENTS.md](../AGENTS.md). Read [CONTRIBUTING.md](CONTRIBUTING.md)
before refreshing settings or preparing documentation publication.

The changes prepared on 30 September 2026 are local drafts for the next App
release. Fedor explicitly requested no documentation publication before that
release. Preserve existing draft changes; do not push while doing local edits.

Product documentation covers the fundamental progression, RPG, consensus and
economy mechanics. Daily tasks and their rapidly changing rewards, Chat and
Tracker are auxiliary interface features; do not add separate documentation
pages or settings exports for them. Their current content belongs in the app.

The generated numerical reference is `assets/economy-settings.md`, backed by
`.gitbook/assets/economy-settings.json` and `scripts/sync-settings.js`. Refresh it
through the supported API exporter; never read or write live production SQLite.
Keep credentials, raw Admin responses, user records and audit details out of this
repository. A local snapshot does not confirm current production configuration.

At release, refresh from the activated production API, review related examples
and remove obsolete draft-status wording before publishing. The offline exporter
check covers its generated page only. It does not verify every prose example,
the release activation or live production data.
