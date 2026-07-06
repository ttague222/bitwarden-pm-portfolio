# Discovery Brief 4: Unlock Friction and Cross-Client Unlock
### The highest-frequency interaction, mid-transformation

**Executive summary.** Unlocking is the product's most frequent touchpoint, and friction there is both the oldest persistent request (shared desktop↔extension unlock, 324 votes, 2018) and the freshest quality pain (Windows Hello regression megathread; Android biometric state loss; iOS autofill forcing master-password entry). Bitwarden is actively investing, passkey unlock shipped January 2026, "Shared Unlock" appeared in June 2026 releases, PIN internals were reworked, all entangled with the encryption-v2 program. The PM opportunity is scoping and reliability assurance during an active transformation, not net-new invention.

**Problem definition.** Users unlock many times daily across five clients with inconsistent state, method availability, and reliability; every friction event lands at the moment of intent, and unlock failure reads as "my passwords are unavailable."

**Historical context.** The shared-unlock request has been open since 2018 with staff "actively researching client to client authentication." The 2025–2026 window added regression pain: Windows Hello broken for months (215 posts, 17,896 views), Android biometrics setting resets on every app start (#4650, open, 67 comments), iOS autofill demands master password under specific timeout/biometric combinations (#1167, the top iOS issue, open). Meanwhile unlock *methods* multiplied: PIN rework (Dec 2025), passkey unlock (Jan 2026), Shared Unlock (Jun 2026).

**Customer evidence.** GitHub: ios#1167 (28👍), android#4650 (67 comments), desktop Windows Hello issues (#13655, #5287, dialogs opening in background). Forum: /t/1635 (324 votes); Windows Hello megathread /t/88182; biometrics+PIN request /t/34416.

**Community evidence.** The megathread demonstrates that unlock regressions produce the same guardianship spikes as autofill regressions, unlock is a trust surface, not a convenience surface.

**Competitive context.** OS-default managers have zero perceived unlock friction; 1Password has shipped shared desktop↔extension unlock for years, a visible line in switcher comparisons. Bitwarden's passkey-unlock work is differentiated and ahead of most rivals; the gap is consistency and reliability, not ambition.

**Engineering considerations.** The heaviest-constrained brief: unlock state is key-material handling inside the encryption-v2 program's blast radius; the org's own history includes migration lockouts (clients#6195) and current migrations ship with version fencing and exclusion lists. Mobile unlock-state bugs may be OS-specific (keystore/keychain behavior). Nothing here is cheap.

**Business impact.** Frequency × friction: even small per-unlock improvements compound across every session of every user; regression prevention protects the trust account; Shared Unlock closing a 2018 thread is a community-narrative win if delivered completely (including mobile expectations management).

**Security considerations.** Shared unlock enlarges the consequence of a single unlock event, expect and welcome community scrutiny; the design must be explainable publicly. Method proliferation (PIN/biometric/passkey/master password) multiplies state-machine complexity, historically the source of the mobile bugs in evidence.

**Open-source considerations.** Publishing the Shared Unlock security model proactively (before the community demands it) follows the pattern that works here; the unlock state machine is exactly the kind of design ADRs exist for.

**Risks.** Migration-induced lockouts are the documented catastrophic case; partial delivery (desktop↔extension only) against a 324-vote thread that imagined more will read as unfulfilled; crypto-program sequencing makes timelines unreliable, over-promising publicly would be self-inflicted.

**Tradeoffs.** Speed vs. the two non-negotiables (crypto soundness, no lockouts): safety wins, correctly, which means the deliverable a PM can actually own near-term is *reliability of what exists* (fix #4650, #1167-class state bugs) and *honest scoping of what's shipping*, not acceleration.

**Unknowns / research gaps.** Shared Unlock's actual shipped scope (clients covered? mobile?); whether ios#1167 is design constraint or defect; unlock telemetry (frequency by method, failure rates), existence unknown under the privacy posture; encryption-v2 sequencing for further unlock work.

**Product hypotheses.** H1: mobile unlock-state defects (#4650-class) account for a disproportionate share of "app feels broken" sentiment relative to their bug count. H2: master-password entry frequency on mobile is a measurable friction proxy that biometric/PIN/passkey stability improvements will visibly reduce. H3: completing and *narrating* Shared Unlock closes the oldest open trust-adjacent thread with outsized goodwill.

**Success metrics.** Unlock failure/re-prompt rate by method and platform; master-password entry frequency on mobile (should fall); reopen/complaint rate on the shared-unlock thread post-ship; Windows Hello-class regression escapes (zero tolerance); time-to-resolution on open unlock-state defects.

**Potential experiments.** Instrument unlock funnel (method mix, failure points) within privacy constraints; prioritized fix sprint on the two open mobile unlock-state defects with public issue narration; publish the Shared Unlock security model and measure community response.

**Priority assessment.** Impact: high (frequency-weighted). Confidence: medium-high. Effort: high, crypto-entangled. Time to value: slow for the program, fast for the open defects.

**Recommendation.** Own the *reliability track* (open unlock-state defects, regression prevention, telemetry) as near-term work; treat Shared Unlock completion and further unlock evolution as encryption-v2-sequenced program work with disciplined public expectation-setting. Not the right first assignment for a new PM; right second-year territory.
