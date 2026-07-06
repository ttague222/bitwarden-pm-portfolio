# Discovery Brief 5: Passkey Reliability on Mobile
### Protect the flagship bet from retail failure

**Executive summary.** Bitwarden bet its next act on the passkey lifecycle, login, unlock, a Windows-native provider built with Microsoft, portability standards, and the strategy is visibly working everywhere except the moment that matters most: mobile sign-in inside third-party apps. Fifty passkey-compatibility issues on the Android repo (nineteen open) show the promise failing one app at a time, WhatsApp, Revolut, X, OKX, with users naming competitors in the bug reports. The investigation's core question: how much of this is Bitwarden-fixable versus upstream, and how should the product communicate the difference?

**Problem definition.** Passkey creation or sign-in fails per-app on mobile with opaque errors ("Passkeys not supported for this app"), at the exact moment a user is trying to adopt the more secure method Bitwarden's strategy promotes. Failure inside *other apps* means Bitwarden gets blamed regardless of fault.

**Historical context.** Passkeys-on-mobile was a 157-vote, 32,501-view request before shipping (2023). Since native-app GA, the complaint class has grown steadily: WhatsApp creation failure is the top open Android issue (39👍, 90 comments, June 2025), with a continuous stream through June 2026 (Revolut, X, OKX, Grid, Google account flows). Bitwarden previously navigated a related class via the community-maintained browser allow-list after initially declining on Google-policy grounds, a governance precedent.

**Customer evidence.** GitHub: the 50-issue `bug-passkey` class (19 open); "Passkey prompt defaults to Google Password Manager instead of Bitwarden" (#6850); explicit defection statements ("Had to use Proton Pass, which worked fine", android#7111). iOS parallels (#1186, passkey error classes). Forum: Firefox not prompting for passkeys (57 posts, 8,661 views).

**Community evidence.** Bitwarden curates `passkeys-index` (a public catalog of passkey-supporting services), ecosystem-readiness tracking already exists as a community-facing artifact; compatibility *status*, however, does not.

**Competitive context.** OS-default providers (Apple, Google) are presumed to work, every Bitwarden per-app failure argues for switching credentials to the platform. Proton Pass wins the values-aligned defector at the failure moment. Bitwarden's differentiated bet is portability (CXP): being the manager passkeys *leave* would invert the entire strategy.

**Engineering considerations.** Each failure is its own investigation across Bitwarden ↔ Android Credential Manager ↔ app implementation; some classes are Bitwarden-fixable, some are app-developer defects, some are OS-policy constraints (research/07: platform vendors are deferred to). Existing assets: the allow-list governance pattern, the fill-assist curated-corpus pattern (Jun 2026), FIDO Alliance and Microsoft relationships for upstream advocacy.

**Business impact.** Protects the company's most publicized strategic bet; reduces churn at high-intent moments; a visible compatibility posture (see experiments) converts an operational weakness into a transparency differentiator; passkey adoption per user is plausibly a retention correlate (a passkey stored is a switching cost).

**Security considerations.** Any compatibility workaround must not weaken attestation or origin-binding guarantees, the maintainers' crypto-soundness non-negotiable applies squarely; "make it work anyway" hacks are the failure mode to refuse.

**Open-source considerations.** A public, community-maintained passkey compatibility matrix (per-app status: works / Bitwarden fix in progress / upstream issue filed) extends two governance patterns Bitwarden already runs (allow-list, passkeys-index) and converts blame-opacity into shared visibility.

**Risks.** Whack-a-mole without triage taxonomy; over-promising fixes for upstream defects burns trust; public compatibility data could be read as admitting weakness (mitigated by the fact that the issues are already public, the matrix adds *status*, not *existence*); OS releases (iOS 26 CXP) may shift the landscape mid-program.

**Tradeoffs.** Engineering spent on per-app chase vs. systemic upstream advocacy; public transparency about upstream faults vs. partner relationships with app vendors; strict security posture vs. user-visible "just works" pressure.

**Unknowns / research gaps.** Root-cause taxonomy of the 50 issues (the central unknown, Bitwarden-fixable share); internal passkey success-rate telemetry; churn attributable to passkey failure moments; whether iOS 26 CXP changes creation-flow compatibility materially.

**Product hypotheses.** H1: a triage taxonomy will show a small number of failure classes explain most issues, making systematic fixes viable. H2: transparent per-app status (even "upstream issue, filed with vendor") measurably reduces blame-Bitwarden sentiment and duplicate reports. H3: passkey adoption per user correlates with retention (justifying continued investment).

**Success metrics.** Passkey creation/auth success rate for top-50 apps; `bug-passkey` inflow rate and open-issue age; duplicate-report rate (transparency proxy); competitor mentions in failure reports (should fall); passkeys per active mobile user.

**Potential experiments.** Build the root-cause taxonomy on the existing 50 issues (analysis, near-zero cost, do first); pilot a compatibility matrix for the top-20 reported apps and measure duplicate-report and sentiment change; upstream advocacy sprint through existing FIDO/Google channels on the top upstream class; error-message rewrite (from "not supported" to actionable status) as a cheap UX test.

**Priority assessment.** Impact: high and rising with ecosystem adoption. Confidence: medium-high (class verified; leverage unknown). Effort: medium, partly external. Time to value: medium.

**Recommendation.** Fund the taxonomy immediately (it converts an open-ended anxiety into a scoped program), pilot the transparency matrix, and route upstream classes through existing standards relationships. Natural owner: the passkeys PM; the transparency-matrix pattern is this assessment's specific contribution.
