# Opportunity Analysis
## Ranked Opportunities with Full PM Treatment

*Constraint honored throughout: no opportunity proposes building a capability Bitwarden already has. Every opportunity is about discoverability, activation timing, engagement, or education around existing capabilities.*

*Prioritization method: RICE-style reasoning with confidence discounted for external-analysis uncertainty; sequencing also weighs strategic compounding (does this make later bets cheaper?).*

---

## O1 — Post-Onboarding Progression Layer ("Security Coach") — **P0 / Flagship**

**Problem.** Guidance ends when onboarding ends. Users have no persistent answer to "what should I do next, and am I okay?" — so activation of high-value existing features (autofill, 2FA, vault cleanup, emergency access) depends on self-directed discovery.

**Evidence.**
- Feature inventory confirms the capabilities exist but are encountered once or on user initiative only (Current State Analysis §2, §4).
- Every credible competitor ships posture visibility (Watchtower, Password Health, Security Audit, Security Recommendations, Checkup, Secure Score) — category-level proof that the pattern drives engagement and outcomes (Competitive Analysis).
- Behavioral grounding: goal-gradient effect, visibility of system status, recognition over recall (Strategy doc §5).

**User impact.** Non-expert users get the thing no password manager currently gives them: a trustworthy answer to "am I okay?" plus a short, always-current path to "better." Measurable: reused/weak credentials fixed, protective features enabled.

**Business impact.** One layer moves activation, retention, security outcomes, Premium conversion, support deflection, and the enterprise story simultaneously. It also *compounds*: every future feature Bitwarden ships gains a distribution channel (the recommendation queue).

**Engineering considerations.** Vault analysis (weak/reused/exposed) exists in the platform. New work: on-device scoring model, client-side rules engine for recommendations, three new UI surfaces, event triggers with strict caps. No server-side changes required for v1; zero-knowledge preserved (score computed and stored on-device / encrypted-synced).

**Risks.** Tone (gamification skepticism), score anxiety, prompt fatigue, opportunity cost vs. platform work. Mitigations: quiet-pride register, published methodology, hard caps + permanent dismissal, checklist-first sequencing that gates the big build behind demonstrated engagement.

**Metrics.** North star: security debt resolved per MAU. Decision metrics: D30 autofill %, actions completed/user, Coach disable rate (<15% guardrail).

**Priority rationale.** Highest reach (all mobile users), highest strategic compounding, medium effort after the native rewrite, and the checklist-first path keeps initial cost small. **P0.**

---

## O2 — Autofill Activation Recovery — **P0 (ships first; subset of O1)**

**Problem.** Users who defer the OS-settings autofill step at onboarding are never re-approached. They experience Bitwarden as a copy-paste tool — worse than their browser's built-in manager — and are structurally likely to churn.

**Evidence.** Autofill configuration is a persistent top theme in community forums and app-store reviews; OS-settings handoffs are a documented mobile drop-off pattern; both platforms expose autofill-enabled state to the app, so the deferred population is *detectable*.

**User impact.** Autofill is the single feature that most changes daily experienced value; it converts the product from "vault I visit" to "layer that's just there."

**Business impact.** Autofill-enabled users are re-invoked by the OS daily — the strongest retention mechanism available to a password manager (stronger than any in-app engagement loop; see Competitive Analysis §strategic synthesis). Likely the highest-leverage single metric in the mobile funnel.

**Engineering considerations.** Small and bounded: enabled-state detection, a manual-copy event hook, one bottom-sheet education surface, frequency caps. No new flows — deep-links into the existing setup path.

**Risks.** Prompt fatigue → hard caps (once/session, twice ever), permanent dismissal honored. Trigger precision matters: fire *after* the user experienced the pain (manual copy), not on a timer.

**Metrics.** Autofill % at D7/D30 (vs D1); time-to-autofill; manual-copy events per user (should fall); prompt→enablement conversion; dismissal rate.

**Priority rationale.** Highest confidence, smallest effort, independently valuable even if the Coach concept is later revised. **Ships in "Now."**

---

## O3 — Contextual Premium Value Moments — **P1**

**Problem.** Premium is discovered by browsing settings (lock icons), not by experiencing value. At ~$10/year, the conversion barrier is comprehension, not price — a lock icon asks users to go research what they'd get.

**Evidence.** Current encounter points for Premium features (breach monitoring, file Send, emergency access, advanced 2FA) are settings rows and gated taps; 2026 release notes show checkout/upgrade flow investment — indicating monetization is an active company priority this proposal plugs into.

**User impact.** Users who would happily pay learn what Premium does at the moment it's relevant to them (e.g., tapping a breach-report recommendation) rather than never.

**Business impact.** Direct conversion lever with unusually low risk: the price point means volume, not persuasion, is the constraint. Also improves conversion *quality* (users who understood what they bought churn less).

**Engineering considerations.** Entitlement checks and upgrade flows exist. Work = placement, copy, and instrumentation by entry surface. Optional: time-boxed feature previews (more effort, higher conversion evidence in category).

**Risks.** The Keeper failure mode — upsell pressure woven into security advice — would spend Bitwarden's core brand asset. Hard rules: Premium prompts only inside user-initiated flows; free actions always rank first in the Coach queue; Premium items labeled before the tap; no countdowns or fake discounts.

**Metrics.** Free→Premium conversion by entry surface; contextual-converts' 12-month retention vs settings-converts; prompt dismissal rates.

**Priority rationale.** High value, small effort, but sequenced after O2/Coach-v0 because contextual surfaces need the Coach's trigger plumbing to exist. **P1.**

---

## O4 — Enterprise Hygiene Visibility — **P2 (Later)**

**Problem.** Org admins can enforce policy but cannot see or encourage employee-side mobile hygiene (autofill %, biometric %, reused-password trends). Security teams buy tools they can show dashboards for.

**Evidence.** Admin reporting today centers on vault/org structure; Microsoft Secure Score demonstrates that numeric posture metrics are already procurement language (Competitive Analysis).

**User impact.** Employees get the same Coach; organizations get aggregate progress visibility. Done right, employees experience encouragement, not surveillance.

**Business impact.** Differentiator in enterprise deals; expansion story ("measurably raise credential hygiene org-wide"); renewals defense.

**Engineering considerations.** The large one: server-side aggregate reporting, k-anonymization, org policy controls, employee disclosure UX. Requires security-team co-design from day one.

**Risks.** Perceived surveillance is radioactive — aggregate-only by default, individual scores never admin-visible, employees see exactly what is shared, org policy can disable Coach entirely.

**Metrics.** Org-level activation deltas; sales win-rate citations; expansion/renewal influence.

**Priority rationale.** Highest revenue ceiling, highest sensitivity, dependent on consumer Coach maturity. **P2 / Later.**

---

## Explicit non-recommendations

Considered and rejected — included to show the prioritization boundary:

- **Redesigning onboarding.** It exists and is competent; the gap is what happens after. Rebuilding it is effort without a hypothesis.
- **New engagement notifications campaign.** Notifications without a user-visible progress model read as nagging; the habit hierarchy is autofill > coach surface > notifications. Only breach alerts (Premium) clear the bar for push.
- **Social/leaderboard mechanics.** Categorically wrong for a security product's tone and privacy posture.
- **A separate "coach" app.** Fragments the experience; the Authenticator companion app already carries the multi-app complexity budget.
