# Flagship Recommendation
## Vault Health Value Realization

> **One sentence:** make the shipped coaching surface trustworthy, auditable, and measurable before Enhanced Premium's January 2027 renewal test.

This is not a proposal to build a new product layer. It is a value-realization program for something Bitwarden already shipped, already monetized, and already heard clear feedback on.

## Decision Snapshot

| Decision | Recommendation |
|---|---|
| **First charter** | Vault Health Value Realization |
| **Primary user problem** | Security guidance is less useful when users cannot control it or understand why it fired. |
| **Primary business problem** | Enhanced Premium needs evidence of delivered value before the January 2027 renewal moment. |
| **Primary brand opportunity** | Turn warning logic into an auditable trust surface competitors cannot easily copy. |
| **Time horizon** | 12 months, with a 0-3 month repair milestone |
| **First-week posture** | Discover internal scope and baselines before committing to build. |

## Mobile + PLG Fit

This recommendation is intentionally useful for both the mobile and PLG role conversations.

| Role lens | Why Vault Health matters |
|---|---|
| **Mobile** | Vault health, unlock, autofill, passkeys, and warnings are experienced in the daily path, often under platform constraints Bitwarden does not fully control. A mobile PM has to understand why a small guidance surface can become a cross-client, OS-mediated trust problem. |
| **PLG** | Enhanced Premium already contains real value: vault health, phishing protection, storage, integrated authenticator, emergency access, and Families premium features. The PLG question is whether users reach that value, understand it, and remember it at renewal without feeling manipulated. |

**Operating frame:** mobile is the surface, PLG is the business model, trust is the constraint.

## Product Read

The product mistake would be to treat at-risk warning feedback as a UX polish backlog. It is more important than that.

Bitwarden raised Premium pricing, attached vault health coaching to the new bundle, and then learned that its most engaged users will not accept security guidance unless they can control it and understand it.

That makes Vault Health a small surface with executive stakes:

| Stakeholder | What is at stake |
|---|---|
| **Customer** | Users want agency, reasons, and guidance that respects prior decisions. |
| **Business** | Enhanced Premium needs receipts before renewal. |
| **Brand** | Bitwarden's trust advantage depends on showing its work. |
| **Product** | Every future guidance surface will inherit this precedent. |

## Program Roadmap

| Phase | Timing | Outcome | Definition of done |
|---|---:|---|---|
| **1. Repair** | Months 0-3 | Users can control warnings and understand why they appear. | Dismissal, snooze, and item-level reasons ship with guardrail metrics. |
| **2. Transparency** | Months 2-5 | The at-risk methodology is public, versioned, and community-reviewable. | Every rule has trigger logic, rationale, source, resolution path, and changelog. |
| **3. Measurement** | Months 3-9 | Leadership can see whether Enhanced Premium is delivering value. | Renewal dashboard and value readout are ready before the January 2027 cohort. |
| **4. Earned Extension** | Months 9-12+ | Coaching expands only where repair and measurement prove value. | Guided resolution, setup recovery, or value summaries ship behind flags with holdouts. |

## Phase 1: Repair

**Goal:** join the internally acknowledged fix and make it excellent.

**Build:**

- Per-item dismissal.
- Snooze, defaulting to 90 days.
- Plain-language reason on every flagged item: breach source/date, reuse count, or strength rule.
- Dismissed items remain visible as dismissed in reports, so agency does not become silent risk-blindness.

**Why first:** no methodology, measurement, or guided-resolution work matters if users resent the base warning surface.

**Exit criteria:**

- Warning-confusion support volume falls.
- Warning-related forum sentiment volume falls.
- Dismissal-with-resolution is greater than or equal to dismissal-only, proving agency did not reduce action.

## Phase 2: Transparency

**Goal:** publish the at-risk methodology.

The public document should include every rule's trigger logic, data source, rationale, resolution path, and changelog. It should be posted first as a community RFC with a real comment window and a disposition table: adopted, deferred, declined, and why.

**Why Bitwarden:** competitors can explain their warnings, but Bitwarden can let users audit the logic. This turns a catch-up feature into a category-differentiating trust surface.

**Exit criteria:**

- The methodology page is linked from every warning.
- RFC participation is substantive.
- At least one community-proposed improvement ships.
- The methodology becomes the canonical reference in forum and support answers.

## Phase 3: Measurement

**Goal:** build the Enhanced Premium value readout.

Measure within Bitwarden's privacy posture:

- At-risk items resolved per paying user.
- Dismissal-with-resolution vs. dismissal-only.
- Renewal-time one-question survey: "What did Premium do for you this year?"
- Bundle-level value attribution for vault health, phishing blocker, storage, and security keys.
- Annual value summary for subscribers: a factual recap, not marketing copy.

**Why now:** the January 2026 price increase created a January 2027 accountability moment. Product should not arrive there with anecdotes.

**Exit criteria:**

- Leadership has a January 2027 renewal dashboard.
- Results are split by loyalty step-up cohort, always-full-price subscribers, and new subscribers.
- Readouts state confidence limits and measurement tier honestly.

## Phase 4: Earned Extension

**Goal:** extend coaching only where Phases 1-3 prove value.

Candidate extensions, in priority order:

| Priority | Extension | Why it belongs after repair |
|---:|---|---|
| 1 | Guided resolution paths for the highest-value at-risk items | Guidance should optimize for resolved risk, not warning engagement. |
| 2 | Post-import health onboarding for large, messy vaults | New importers may need structure, but only if warnings are trusted. |
| 3 | 2FA/passkey coverage guidance | Helpful only where adoption data shows user value and fixability. |
| 4 | Premium Value Summary | A factual recap can reinforce renewal value without pressure mechanics. |
| 5 | Security Progress Checklist | A state-aware setup recovery path can help users who skipped onboarding. |

Each extension ships behind a flag with a holdout and is measured on resolved risk, not clicks.

**Why last:** my original v1 assessment started here. The research showed that was backwards. Guidance built on an untrusted surface compounds irritation. Extension is the reward for repair, not the substitute.

## PLG Guardrails

| Guardrail | Reason |
|---|---|
| Dismissal is honored permanently unless the underlying risk materially changes. | Agency cannot feel temporary or fake. |
| Every warning has a reason. | Guidance without explanation erodes trust. |
| Every rule is publishable, or it does not ship. | Auditable guidance is the differentiation. |
| Free actions outrank paid suggestions. | Security progress must come before upsell. |
| Nothing blocks unlock, find, save, or fill. | Daily-path utility is sacred. |
| No urgency mechanics, streaks, guilt copy, or disguised upsell. | Bitwarden's community will reject manipulative growth mechanics. |

## Team And Dependencies

| Area | Need |
|---|---|
| **Product** | One PM accountable for sequencing, metrics, RFC disposition, and renewal readout. |
| **Design** | One designer for warning states, dismissal/snooze UX, methodology entry points, and value summary concepts. |
| **Engineering** | 2-3 client-side engineers for Phases 1-2; billing/data partnership for Phase 3. |
| **Community / DevRel** | RFC process, comment synthesis, public response table, and forum/support alignment. |
| **Security** | Methodology language, rule defensibility, and privacy posture review. |

The first week is discovery, not execution: understand the internal warning-fix scope, current renewal baseline, telemetry constraints, and who already owns vault-health decisions.

## Tradeoffs I Am Accepting

| Tradeoff | Why I would accept it |
|---|---|
| **Scoped program over biggest lever** | Daily-path reliability is more important in total, but it is not cleanly ownable by a newly hired PM. |
| **Transparency despite criticism risk** | An RFC will surface disagreement with current rules. That is not a side effect; it is the mechanism. |
| **Slower measurement over privacy shortcuts** | Wider confidence intervals are better than violating Bitwarden's trust posture. |
| **Experiment-first PLG over invented certainty** | Public evidence shows value exists and onboarding surfaces exist; the next PLG move should be community-validated before heavier mechanics ship. |

## What Could Change Or Shrink The Program

This program should be falsifiable early.

| Finding | How the plan changes |
|---|---|
| Internal fixes already cover dismissal, reasons, methodology, and measurement. | Shift from repair to measurement/readout or choose another charter. |
| Renewal data shows Enhanced Premium value is obvious and warning complaints do not affect churn. | Shrink Phase 3 and prioritize daily-path reliability. |
| The methodology RFC reveals rules are not defensible as written. | Pause extension and repair the rule set first. |
| Phase 1 shows dismissal reduces resolution instead of increasing it. | Rework dismissal defaults and education before scaling. |
| Phase 3 shows users want clear warnings, not guided paths. | Stop before guided coaching and invest in transparency instead. |

## Final Position

Vault Health Value Realization is the right first charter because it connects the product, business, and brand problem in one bounded surface.

It would let a new Senior PM demonstrate the kind of judgment Bitwarden needs: repair what shipped, show the work publicly, measure whether paid value is real, and let evidence decide what comes next.
