# Discovery Brief 2: Vault Health Value Realization
### Make the shipped coaching surface earn Enhanced Premium: before the renewal cohort votes

**Executive summary.** Bitwarden shipped vault health alerts and password coaching in December 2025 as a pillar of the ~2x Premium repricing (January 2026). The community's immediate response was to file the two top feature requests of the year: make the warnings dismissible (51 votes) and explain why items are flagged (40 votes). Staff have acknowledged a fix is in flight. This is the highest-confidence, most time-boxed opportunity in the assessment: the feature that must justify the new price is currently generating irritation, the market has written the exact spec for fixing it, and the first full-price renewal cohort decides in January 2027. It is also the flagship recommendation (recommendation/13), where the full program design lives.

**Problem definition.** The paid coaching surface violates the two properties this user base demonstrably requires of security guidance, user agency and published reasoning, and Bitwarden currently has no visible instrumentation connecting the Enhanced Premium bundle to perceived value at renewal.

**Historical context.** Vault health reports existed in the web vault for years with low visibility (my v1 research). The Dec 2025 launch moved health into the daily experience as persistent at-risk warnings, paid-only. The community reaction reproduces, inside Bitwarden's own base, the trust dynamic that Keeper's and Dashlane's advice-plus-upsell patterns created in the broader market.

**Customer evidence.** Forum: dismissal request (51 votes, 47 posts, top FR of the trailing year); explain-why request (40 votes); "what's the reason for the warning?" support thread (13,291 views). Staff (dwbit): "The team is working on an update that allows you to dismiss the warning, while also providing more context for the alert."

**Community evidence (meta).** This base's revealed values, agency and show-your-work, are consistent across the redesign episodes (compact-mode resolution), the SDK license event, and the demand that flagged items carry reasons. The spec is pre-registered.

**Competitive context.** 1Password Watchtower and Dashlane Password Health ship per-item reasons and dismissal as table stakes; Bitwarden launched below that bar while moving price toward their range. The move *beyond* the bar, publishing the methodology, is available only to Bitwarden (open-source analysis, research/08).

**Engineering considerations.** Low-to-medium: dismissal state and reason display draw on vault analysis that already computes the reasons; no crypto-migration entanglement; the work is UX, state, copy, and instrumentation. The acknowledged internal work must be discovered and joined, not duplicated, week-one task.

**Business impact.** Enhanced Premium renewal defense (the January 2027 cohort includes the 25% loyalty-discount group stepping to full price); conversion quality (users who understand what they bought churn less); support deflection on the 13k-view confusion theme; and a compounding asset, a trusted coaching surface is distribution for every future security feature.

**Security considerations.** Dismissal must not become silent risk-blindness: dismissed ≠ resolved in any reporting; at-risk logic remains computed client-side per zero-knowledge constraints; published methodology must not create attacker-useful signals about individual vaults (it describes rules, never data).

**Open-source considerations.** The centerpiece: publish the at-risk methodology as versioned public documentation, RFC'd with the community before GA, converting the year's loudest complaint into the "security guidance you can audit" story only Bitwarden can tell. Community contribution surface: an open rules corpus with community-proposed detections.

**Risks.** Over-correcting into dismiss-all silence guts the feature's security value; renewal attribution is confounded (price, competition, macro); an RFC invites criticism of current rules, manageable only with genuine willingness to adopt community input; internal work in flight may partially moot external recommendations (good outcome, coordinate).

**Tradeoffs.** Measurement under minimal telemetry means slower, cohort-level reads; transparency constrains future rule changes (versioned methodology = public changelog obligations); shipping agency features first delays visible "new value" additions to the bundle.

**Unknowns / research gaps.** Premium churn/renewal baseline post-increase; loyalty-cohort conversion intent; warning dismissal vs. resolution behavior (does irritation correlate with fixing or muting?); which Enhanced Premium bundle items actually drive perceived value; scope/timeline of the acknowledged internal update.

**Product hypotheses.** H1: warnings with reasons + dismissal produce *more* resolved at-risk items than permanent warnings (agency increases action, not less). H2: published methodology measurably improves community sentiment and becomes a differentiating story. H3: coaching engagement (≥1 resolved item/quarter) predicts renewal.

**Success metrics.** At-risk items resolved per paying user (the mission metric); dismissal-with-resolution vs. dismissal-only rates; Enhanced Premium renewal at months 12–13 (cohort vs. any available holdout); forum sentiment volume on warning threads; support ticket volume on the theme; RFC participation quality.

**Potential experiments.** Ship the acknowledged dismissal+context update behind a flag with a holdout, measuring resolution behavior (the H1 test); publish the methodology RFC and measure sentiment shift + participation; A/B first-run value framing of the Enhanced Premium bundle; instrument value-attribution by bundle item via renewal-time survey (cheap, telemetry-light).

**Priority assessment.** Impact: high, concentrated, time-boxed. Confidence: highest in portfolio. Effort: low-medium. Time to value: fastest.

**Recommendation.** This is the opportunity a newly hired Senior PM should own end-to-end. The full twelve-month program, repair → transparency → measurement → extension, is specified in the flagship recommendation (recommendation/13).
