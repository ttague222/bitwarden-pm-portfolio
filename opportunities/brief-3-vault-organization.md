# Discovery Brief 3: The Vault-Organization Backlog
### Tags, sorting, duplicates, item types: deliver eight years of demand without a data-loss event

**Executive summary.** The oldest and largest demand cluster in Bitwarden's history, organizing a mature vault, carries ~2,800 combined votes across six 2018-era threads and is finally moving (tags announced in progress; archive and a passport item type shipped 2026). The remaining pieces are the riskiest (duplicate merge was explicitly halted by Product over data-loss concerns) and land amid a collections-architecture re-examination. The opportunity is not discovering demand; it is sequencing delivery so eight years of goodwill gets collected instead of squandered.

**Problem definition.** Users with mature vaults, enlarged deliberately by Bitwarden's eight new importers, cannot sort, tag, de-duplicate, or classify their data. The import-acquisition strategy manufactures exactly the vaults this gap hurts most.

**Historical context.** Sorting (672 votes), item types (674), tags (487), duplicates (466), drag-and-drop (314), custom icons (212), all opened 2018, all open into 2026. The delivery lag is systemic (4–7 years on top asks), and the community knows it. Movement began in 2026: archive (Feb, a 2019 request), passport type (Jun), tags in progress (staff-confirmed). One community dedup PR (clients#15967) passed code review and died at Product clearance: "the potential for unintended data loss is a serious concern."

**Customer evidence.** The vote record above (~400k combined thread views); "Collections are a disaster, what am I missing?" (35 posts) on the org side.

**Community evidence.** Staff engagement is active and positive here (tags confirmation; the June 2026 collections survey soliciting structural input), this cluster has an open, cooperative channel, unusual among the five.

**Competitive context.** 1Password's item-type richness and organization tooling is a durable differentiator in paid comparisons; Apple/Google set a low bar (this moat runs against paid competitors, not defaults). No competitor pressure forces urgency, the pressure is internal consistency: importers keep making vaults messier.

**Engineering considerations.** Item-model changes propagate across five-plus clients, sync, and encrypted data, schema work rides the same delivery pipeline the encryption-v2 program constrains (research/07). Dedup/merge carries genuine data-destruction risk, the stated reason it remains unshipped. The flags-first machinery supports staged rollout well.

**Business impact.** Post-import retention (converts the acquisition strategy into kept users); visible community wins at a trust-sensitive moment (the meta-narrative of "Bitwarden ships its backlog" has independent value); paid differentiation vs. 1Password for switchers.

**Security considerations.** Merge operations touch item history, TOTP seeds, and passkeys, retention priorities were explicitly enumerated by Product in the PR episode (OTP codes, passkeys, notes first). Any tool must be conservative-by-default.

**Open-source considerations.** The halted community PR is a relationship artifact: the contributor did competent work and got a six-month stall. Re-engaging that history honestly (explain the retention bar, invite the contributor into the spec) models the public-prioritization behavior the contributor community wants.

**Risks.** A data-loss incident in a merge tool would be the worst self-inflicted trust event available to the company; tags landing mid-collections-re-architecture could require rework; cluster scope creep (six features) invites a multi-year program where staged wins are needed.

**Tradeoffs.** Conservative sequencing (report before merge) is slower and will disappoint some of the 466 voters; aggressive sequencing risks the catastrophic case. Given the maintainers' revealed non-negotiables, conservative is the only viable path, the tradeoff is really about how loudly to narrate it.

**Unknowns / research gaps.** Internal tags scope/timeline; collections-survey findings and their interaction with personal-vault organization; whether the dedup posture is "never destructive" or "not until designed properly"; duplicate prevalence per imported vault (sizing data Bitwarden can compute client-side).

**Product hypotheses.** H1: a read-only duplicate *report* (no merge) satisfies a large share of the 466-vote demand at near-zero risk. H2: tags adoption will be rapid and concentrated among large-vault users (the retention-critical segment). H3: post-import users offered organization tooling in week one retain materially better at week four.

**Success metrics.** Tags/sort adoption per MAU (large-vault segment split); duplicate count per imported vault before/after tooling; post-import week-4 retention; vote-thread closure milestones (community-visible); zero data-loss incidents (absolute guardrail).

**Potential experiments.** Ship duplicate *report* behind a flag; measure demand satisfaction vs. merge-demand persistence. Offer organization onboarding to fresh importers (A/B) and read week-4 retention. Publish the tags rollout plan on the 487-vote thread and measure sentiment (narration experiment).

**Priority assessment.** Impact: high, realized over quarters. Confidence: high on demand, medium on delivery risk. Effort: medium-high, cross-client. Time to value: medium-long.

**Recommendation.** Support the in-flight tags work with staged, narrated delivery; sequence dedup as report-first; align item-type expansion with the collections-survey outcome. Right owner: the existing vault/item-model team's PM, with the community-narration discipline as this assessment's specific contribution.
