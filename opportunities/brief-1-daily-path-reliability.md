# Discovery Brief 1: Daily-Path Reliability
### The save/update/fill loop and release-regression quality

**Executive summary.** The core daily loop, save a credential, fill a credential, is Bitwarden's top complaint generator across a decade and its top current pain. The extension has failed to reliably prompt users to save/update credentials since 2021; the popup is measurably slow; and successive releases have shipped regressions that broke autofill or passkeys at scale. This is the highest-total-leverage opportunity in the assessment because it compounds through activation, retention, trust, support load, and the margin for error the January 2026 price increase consumed.

**Problem definition.** Two intertwined problems: (a) *capture reliability*, new and existing users don't consistently get save/update prompts, so vaults grow slower and stay staler than user behavior warrants; (b) *release quality on the fill path*, autofill/passkey regressions escape to production repeatedly, each producing a high-engagement trust event.

**Historical context.** Autofill failure is the top mobile issue class continuously from 2016 (accessibility-service era) through 2026 (native era). The save-prompt gap (#1620) has been open since February 2021, surviving four major release waves and the extension redesign. Bitwarden has invested here (autofill customization Jan 2025, click-anywhere-fill Apr 2026, fill assist Jun 2026), awareness is established; resolution is not.

**Customer evidence.** GitHub: #1620 (75👍, `ux`, open 5 years); #12286 popup delay (93👍, 238 comments); #17405 "update existing login" (139👍, 327 comments); regression cluster, Firefox passkeys v2025.11 (202👍), Android autofill 2025.10 (166👍, largest mobile issue ever), Chrome slowdown 2026.4 (130👍), Brave 2026.6 (87👍).

**Community evidence.** "Frequent 'Update existing login' nags" thread (96 posts, 8,913 views), the prompt problem cuts both ways (absence and excess); official "Important Android Autofill Updates" notice (79 posts, 13,146 views); Windows Hello unlock megathread (215 posts) shows the same regression dynamic on adjacent paths.

**Competitive context.** Apple Passwords and Google PM set the reliability bar at "invisible"; every Bitwarden failure at the save/fill moment is churn exposure to defaults, and Proton Pass collects the values-aligned defectors (named in Bitwarden's own bug reports).

**Engineering considerations.** Heterogeneous: capture heuristics live in content scripts across arbitrary sites; fill sits on OS/browser frameworks where Bitwarden defers to vendor constraints; regression prevention is process (flag discipline, canary cohorts, an autofill test corpus across top-N sites/browsers) on already-paved infrastructure (ADR-0018). The 2021 age of #1620 suggests architecture-level blockage, a week-one internal question.

**Business impact.** Capture reliability is an activation lever (vault establishment predicts retention); fill reliability is the retention surface itself; regression quality is the trust account the repricing now draws on. Support/notice threads with 13k+ views indicate measurable ticket deflection value.

**Security considerations.** Save prompts touch credential interception surfaces; the Aug 2025 clickjacking fix (inline menu forced above page content) shows this path is security-sensitive. Any heuristic expansion needs security review, an argument for the curated fill-assist pattern over global heuristics.

**Open-source considerations.** Fill assist's curated problem-site approach is a natural community-contribution surface (the browser allow-list precedent shows community-maintained compatibility data works at Bitwarden).

**Risks.** Heuristic changes historically swing between under- and over-prompting, both punished; the investigation may conclude the highest-leverage fix is release *process*, which is organizationally harder to land than features; OS framework shifts can invalidate work.

**Tradeoffs.** Investing here trades roadmap novelty for compounding quality, invisible when it works. Conversely, every feature shipped onto an unreliable fill path inherits its failure rate.

**Unknowns / research gaps.** Internal fill-success and prompt-acceptance telemetry (existence and fidelity under the privacy posture); root-cause taxonomy of "autofill broken" reports (Bitwarden-side vs. upstream); why #1620 has survived five years (priority vs. architecture); regression escape rate per release train.

**Product hypotheses.** H1: a meaningful share of new-install churn traces to failed capture in week one. H2: users who experience ≥1 successful save prompt in week one retain at materially higher D30 rates. H3: a curated compatibility corpus (fill-assist pattern) reduces "broken" reports faster per engineer-week than heuristic rewrites.

**Success metrics.** Save-prompt display→accept rate; fill success rate by platform/browser; time-to-first-saved-credential for new installs; regression escapes per release; reaction-weighted issue inflow post-release; D30 retention of prompt-experienced vs. not.

**Potential experiments.** Instrument the capture funnel (measure before building); A/B a scoped save-prompt fix on a single browser cohort; expand fill assist to the top-20 complained-about sites and measure issue inflow; pilot a public "autofill compatibility" dashboard (community-visible quality accountability).

**Priority assessment.** Impact: highest in portfolio. Confidence: high (problem), medium (solution shape). Effort: medium-high, spread across teams. Time to value: medium.

**Recommendation.** Treat as the company's cross-team quality program, championed by existing autofill/platform owners with executive sponsorship, not assigned to a new PM as a feature area. A new Senior PM contributes by instrumenting the capture funnel (the measurement gap is the actionable piece) while owning brief 2.
