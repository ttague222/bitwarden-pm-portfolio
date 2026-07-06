# Top Five Opportunities for a Senior PM to Investigate
## Derived strictly from the July 2026 primary research (doc 12)

*Rules honored: no invented features. Every opportunity is anchored in GitHub, community, product (shipped-release), and competitive evidence already gathered. These are investigation briefs — each ends in unknowns to resolve, not solutions to build. Ranked by impact.*

---

## #1 — Daily-path reliability: autofill, the save/update loop, and release regressions

**Problem.** The product's core daily loop — save a credential, fill a credential — is the top complaint generator across a decade and the top *current* pain: the extension does not reliably prompt to save/update credentials (open since 2021), the popup is slow to open, and major releases repeatedly ship regressions that break autofill and passkeys at scale.

**Evidence.**
- GitHub: #1620 "does not prompt to save or update credentials" — 75👍, open since **2021**, labeled `ux`; #12286 popup delay (93👍, 238 comments); #17405 "update existing login" (139👍, 327 comments); regression cluster: Firefox passkeys broken v2025.11 (202👍), Android autofill regression 2025.10 (166👍 — highest-engagement Android issue ever), Chrome slowdown 2026.4 (130👍), Brave autofill 2026.6 (87👍).
- Community: "Frequent 'Update existing login' / 'Save login' nags" (96 posts, 8,913 views) — note the duality: both *absence* and *excess* of prompts generate backlash; official "Important Android Autofill Updates" notice (79 posts, 13,146 views).
- Product: Bitwarden is already investing here (fill assist Jun 2026, click-anywhere-to-autofill Apr 2026, autofill customization Jan 2025) — confirming internal awareness, not resolution.
- Competitive: Apple Passwords and Google PM win the do-nothing user precisely because OS-default save/fill "just works"; every Bitwarden regression is churn exposure toward defaults.

**Why users care.** This is the product. A password manager that misses saves or fails fills is worse than the browser default the user gave up.

**Why Bitwarden should care.** (a) Regressions are the single largest driver of negative public engagement — a trust tax paid at exactly the moment pricing doubled; (b) the save/update gap is an *activation* defect: new users who don't get capture prompts never build the vault that retains them — directly undermining the shipped switching-cost strategy (importers for 8 competitors); (c) support/notice threads with 13k views are measurable support load.

**Engineering complexity.** High and heterogeneous: autofill sits on OS/browser frameworks (MV3, Android Autofill Framework, iOS Credential Provider) where Bitwarden defers to vendor constraints (research F4.3); save-prompt detection is content-script heuristics across arbitrary sites. Regression *process* work (flag discipline, canary cohorts, autofill test corpus) is medium and mostly already-paved (ADR-0018 flags-first).

**Risks.** Heuristic changes swing between under- and over-prompting (the community has punished both); investigation may conclude the highest-leverage fix is process (release quality gates) rather than product — organizationally harder to land.

**Metrics.** Save-prompt display→accept rate; fill success rate per platform/browser; regression escape rate per release; reaction-weighted GitHub issue velocity post-release; support-thread volume on autofill themes; D30 retention of new installs that received ≥1 successful save prompt vs none.

**Alternative solutions (all evidence-anchored).** Expand fill assist's curated problem-site approach; invest in the regression-prevention pipeline instead of features; prioritize the 2021 save-prompt issue as an activation project; per-browser compatibility telemetry before heuristic rewrites.

**Unknowns.** Internal fill-success and prompt-acceptance telemetry (if it exists under the privacy posture); what fraction of "broken autofill" reports are upstream OS changes; whether the 2021 issue is blocked by architecture (content-script rewrite) or priority.

**Confidence: High** — richest multi-source evidence base of any opportunity; the open question is solution shape, not problem existence.

---

## #2 — Make the shipped coaching feature earn the new price: at-risk warnings UX and Enhanced Premium value

**Problem.** Bitwarden shipped vault health alerts + password coaching (Dec 2025) as a flagship justification for a ~2x Premium price increase (Jan 2026) — and the feature's launch UX immediately generated the top feature requests of the period: users demand the ability to dismiss warnings and an explanation of why items are flagged. The paid feature meant to demonstrate value is currently producing measurable irritation.

**Evidence.**
- Community: "Option to dismiss permanent 'Change at-risk password' warnings" (51 votes, top FR of the trailing year); "warnings should state reason flagged" (40 votes); "what's the reason for the warning?" support thread (13,291 views). Staff: "The team is working on an update that allows you to dismiss the warning, while also providing more context" — acknowledged, in flight, unshipped as of research date.
- Product: Enhanced Premium launch bundle (phishing blocker, vault health coaching, 5GB, 10 keys) at $19.80/yr, first increase in ~a decade; "price increase callout" still being added to billing UI Jun 2026; tier-feature previews shown to free orgs (May 2025) — monetization comms are an active workstream.
- Competitive: 1Password Watchtower and Dashlane Password Health are category-standard, dismissible, item-level-explained; Keeper demonstrates the trust cost of pushy security-advice monetization. Bitwarden's own community has now written the same spec in vote form.
- GitHub/community meta-evidence: this user base's revealed values are agency + transparency (redesign compact-mode episode; published scoring demanded of everything; SDK license episode).

**Why users care.** Un-dismissible, unexplained warnings violate the two things this community demonstrably demands — control and show-your-work — inside a feature they are now paying double for.

**Why Bitwarden should care.** Renewal risk at first anniversary of the price increase (Jan 2027) concentrates precisely on "was Enhanced Premium worth it"; the coaching feature is the bundle's most visible daily surface. Fixing its UX is likely the cheapest available lever on paid retention. It also compounds: a trusted coaching surface is distribution for every future security feature.

**Engineering complexity.** Low-to-medium for the acknowledged fixes (dismissal state, reason display — vault analysis already computes the reasons); medium for value-measurement instrumentation by entry surface. No crypto-migration entanglement.

**Risks.** Over-correcting into silence (dismiss-all) hollows the feature's security value; conversion attribution is hard under minimal telemetry; the in-flight internal work may already cover part of this (coordinate, don't duplicate).

**Metrics.** Warning dismissal vs. resolution rate (did users fix or mute?); at-risk-password count trend per paying user; Enhanced Premium renewal rate at month 12–13; forum sentiment volume on warning threads; free→Premium conversion touched by vault-health surfaces.

**Alternative solutions (evidence-anchored).** Ship the staff-acknowledged dismissal+context update and measure before anything else; apply the published-methodology pattern (ETH-audit-style transparency) to how "at-risk" is computed; rebalance which Enhanced Premium features get first-run visibility.

**Unknowns.** Actual Premium churn/renewal data post-increase; how much of the loyalty-discount cohort converts at full price; the internal roadmap for the acknowledged warning update; whether coaching engagement correlates with retention (the thesis to test).

**Confidence: High** on problem and stakes; **Medium** on sizing (renewal data is internal).

---

## #3 — Deliver the vault-organization backlog without breaking anything: tags, sorting, duplicates, item types

**Problem.** The largest and oldest demand cluster in community history — organizing a mature vault — is finally moving (tags "in progress", archive and passport type shipped 2026), but the hardest pieces (duplicate merge, sorting, item-type expansion) remain open, and the one community attempt to ship dedup was halted by Product over data-loss risk. Delivery risk, not demand discovery, is the problem.

**Evidence.**
- Community: sorting 672 votes / tags 487 / duplicates 466 / item types 674 / drag-and-drop 314 / custom icons 212 — all 2018-era, ~2,800 combined votes, 400k+ combined views; staff: "The team is currently working on support for tags."
- GitHub: dedup PR clients#15967 passed review, held at Product clearance ("potential for unintended data loss is a serious concern"), closed unmerged — the constraint is codified.
- Product: archive shipped Mar 2026 (7-year-old request), passport item type Jun 2026 — item-model work has begun; import investment (8 competitor importers) keeps enlarging exactly the messy vaults this cluster serves.
- Competitive: 1Password's item-type richness and organization are long-standing differentiators; Apple/Google set a low bar here — this is a moat *against paid competitors*, not defaults.

**Why users care.** Eight years of votes say it plainly; every import Bitwarden makes easier creates another user with 400 disorganized items and no merge tool.

**Why Bitwarden should care.** (a) Largest pent-up goodwill reservoir available — visible community wins at a moment when trust events dominate sentiment; (b) directly converts the import/acquisition strategy into retention; (c) the 4–7-year-lag pattern is itself a community grievance — landing this cluster faster changes the meta-narrative.

**Engineering complexity.** Medium-high: item-model changes propagate across 5+ clients, sync, and encrypted data (every schema change rides the encryption-v2-constrained pipeline, F4.1); dedup/merge carries genuine data-destruction risk — the reason it's still open.

**Risks.** Data-loss incident in a merge tool would be the worst possible trust event; scope creep (the cluster is six features); shipping tags into the middle of a collections-architecture re-examination (Jun 2026 survey) could create rework.

**Metrics.** Tags/sort adoption per MAU; duplicate count per imported vault before/after tooling; post-import week-4 retention; vote-thread closure as community-visible milestones; support volume on "how do I organize" themes.

**Alternative solutions (evidence-anchored).** Sequence conservatively: read-only duplicate *report* before destructive merge (mirrors maintainers' retention-priority feedback on #15967); land tags fully cross-client before sorting; align the item-type roadmap with the collections survey outcome.

**Unknowns.** Internal tags timeline and scope; how the collections re-architecture interacts with personal-vault organization; whether the dedup risk posture is "never destructive" or "not until designed properly."

**Confidence: High** on demand (strongest numbers in the dataset); **Medium** on the delivery-risk assessment (internal architecture unseen).

---

## #4 — Unlock friction and cross-client unlock state

**Problem.** Unlocking — the highest-frequency interaction in the product — generates persistent friction across every surface: desktop↔extension unlock is separate (324-vote request since 2018), Windows Hello broke for months (215-post megathread), Android biometric settings reset on app start, and the top iOS issue is autofill demanding the master password. A "Shared Unlock" item just appeared in Jun 2026 client releases — the investigation window is now.

**Evidence.**
- Community: shared unlock state /t/1635 (324 votes, staff "actively researching client to client authentication"); Windows Hello regression /t/88182 (215 posts, 17,896 views, 216 likes); biometrics+PIN request /t/34416.
- GitHub: ios#1167 (top iOS issue, 28👍, open — autofill forces master password based on timeout/biometric combinations); android#4650 (biometrics setting lost every app start, 67 comments, open); desktop Windows Hello fixes shipped Nov 2025.
- Product: passkey *unlock* shipped Jan 2026; PIN internals reworked Dec 2025; "Shared Unlock" in Jun 2026 GitHub release notes — unlock is an active, crypto-entangled workstream.
- Competitive: OS-default managers have zero unlock friction (biometric-native); 1Password's desktop↔extension shared unlock has existed for years and is a visible UX gap in direct comparisons.

**Why users care.** Users unlock many times daily; every friction event is felt at the moment of intent, and unlock failure reads as "my passwords are unavailable."

**Why Bitwarden should care.** Unlock friction is the most frequently *experienced* quality gap (even if organization is the most-voted); it drives both the regression megathreads and the daily competitive comparison against defaults. With Shared Unlock landing, the PM opportunity is ensuring the 2018-vintage demand is actually satisfied — cross-platform, including mobile state bugs — rather than partially shipped.

**Engineering complexity.** High: unlock state is key-material handling, entangled with the encryption-v2 program (KDF changes, PIN rework, passkey unlock) and per-OS secure-storage APIs; the research shows this exact area produced lockout incidents in past migrations (clients#6195).

**Risks.** Security posture: shared unlock enlarges the attack surface of a single unlock event (expect community scrutiny); migration risk is documented history here; mobile state bugs (#4650) may be platform-specific rabbit holes.

**Metrics.** Unlocks per user per day (by method); unlock failure/re-prompt rate; master-password entry frequency on mobile (should fall as biometric/PIN/passkey unlock stabilize); reopen rate of the 2018 thread post-ship; Windows Hello-class regression escapes.

**Alternative solutions (evidence-anchored).** Fix the open mobile unlock-state bugs (#4650, #1167) as a reliability track independent of Shared Unlock; extend passkey unlock (shipped on web/BE) toward the surfaces where friction is measured; treat unlock-method regression testing as a release gate given the megathread history.

**Unknowns.** Shared Unlock's shipped scope (desktop↔extension only? mobile?); whether iOS #1167 is a design constraint or defect; how encryption v2 sequencing gates further unlock work.

**Confidence: Medium-High** — demand and activity are verified; impact sizing depends on unlock telemetry and the unknown scope of what just shipped.

---

## #5 — Passkey reliability on mobile: compatibility triage and expectation management

**Problem.** Passkeys are a top strategic bet (login, unlock, Windows provider, portability all shipped within 12 months), but the mobile experience of that bet is a steady stream of per-app compatibility failures — 50 labeled issues on Android, 19 open (WhatsApp 39👍, Revolut, X, OKX, Grid, Google flows) — with users reporting defection at the failure moment ("Had to use Proton Pass, which worked fine").

**Evidence.**
- GitHub: `bug-passkey` label class (50 total/19 open, Android); recurring "Passkeys not supported for this app" errors; ios passkey issues (#1186, #4669-class); Firefox not prompting for passkeys (forum, 57 posts).
- Product: the passkey lifecycle investment sequence (Sep 2025 CXP → Nov 2025 login GA → Jan 2026 unlock → Mar 2026 Windows provider → Feb 2026 portability) confirms this is a flagship bet whose success criteria include mobile working.
- Community/competitive: passkeys-on-mobile was a 157-vote, 32,501-view request before shipping; competitor mentions inside failure reports are direct churn evidence; Bitwarden's own `passkeys-index` repo shows it curates ecosystem readiness.
- Constraint evidence: maintainers defer to Google's passkey API security policy (mobile#3315) — part of this class is upstream.

**Why users care.** A passkey that fails at sign-in is a lockout, the scariest failure a credential manager can produce — and it happens inside *other apps*, where Bitwarden gets blamed regardless of fault.

**Why Bitwarden should care.** The strategic narrative ("your cross-platform passkey home") is being invalidated one app at a time in public issues; each failure is a churn moment toward Proton Pass/OS defaults; and because Bitwarden bet on passkey *portability* (CXP), being the manager passkeys leave is the nightmare scenario.

**Engineering complexity.** Medium per-issue, unbounded as a class: each app failure is its own investigation across Bitwarden ↔ Credential Manager API ↔ app implementation; some fixes are Bitwarden-side, some are upstream advocacy (Google/FIDO relationships already exist — Windows provider, FIDO Alliance work).

**Risks.** Whack-a-mole without a triage system; over-promising fixes for upstream defects burns trust (community allow-list precedent shows a workable middle path); investigation may reveal the bottleneck is app developers, limiting Bitwarden's unilateral leverage.

**Metrics.** Passkey creation/auth success rate by app (top-50 apps); `bug-passkey` open-issue age and inflow rate; passkey count per mobile user (adoption proxy); mentions of competitor defection in failure reports; time-to-resolution per compatibility class (Bitwarden-side vs upstream).

**Alternative solutions (evidence-anchored).** Extend the community allow-list mechanism (already proven for browser trust) to compatibility triage; a curated compatibility approach analogous to fill assist (Jun 2026) which does exactly this for autofill problem sites; upstream advocacy through the existing FIDO/Microsoft relationships.

**Unknowns.** What fraction of the 50 issues are Bitwarden-fixable vs. app/OS-side; internal passkey success telemetry; whether iOS 26 CXP changes the compatibility landscape; actual churn attributable to passkey failures.

**Confidence: Medium-High** — the complaint class and strategic exposure are verified; the leverage question (how much Bitwarden can unilaterally fix) is the core unknown the investigation must answer.

---

## Ranking rationale (impact ordering)

1. **Daily-path reliability** ranks first because it compounds into everything: activation (save prompts), retention (fill success), trust (regressions), and the price increase's margin for error. Largest evidence base in the research.
2. **Coaching/Premium value** ranks second on urgency: the Jan 2027 renewal cohort makes this time-boxed, the fix is cheap relative to stakes, and staff acknowledgment means the door is open.
3. **Vault organization** ranks third: biggest raw demand, but value realizes over quarters and is entangled with the collections re-architecture.
4. **Unlock friction** ranks fourth: high frequency and active investment, but the crypto entanglement means a PM's near-term leverage is scoping and reliability, not speed.
5. **Passkey compatibility** ranks fifth today — but it is the ranking most likely to rise, because it sits at the intersection of the company's loudest strategic bet and its most visible competitive churn evidence.

*A note on what did NOT make the list and why: desktop auto-type (890 votes) is already tagged in-progress — the PM opportunity there is delivery quality, folded into the organization/reliability lenses; redesign-cycle management is real but is process, not a product opportunity; AI-agent credentials is strategically fascinating but pre-product — no user-demand evidence exists yet to rank it against these five.*
