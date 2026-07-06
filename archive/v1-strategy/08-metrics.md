# Metrics Framework
## Measuring the Guided Security Companion

*All targets are structured as deltas against internal baselines I don't have access to. The framework is designed to survive Bitwarden's minimal-telemetry posture — a degraded-measurement path is included.*

---

## North star

> **Security debt resolved per monthly active user** — reused/weak/exposed credentials fixed plus protective features (autofill, biometrics, 2FA, passkeys) enabled, per MAU, per month.

Chosen because it is simultaneously the user outcome, the company mission, and the engagement driver — the team never has to trade "engagement" against "user benefit."

## Metric tree

```
Security debt resolved per MAU
├── Activation (new users reach protected state)
│   ├── Autofill enabled % @ D1 / D7 / D30   ← the flagship metric
│   ├── Time-to-autofill (median hrs, install → enabled)
│   ├── Biometric unlock adoption %
│   ├── Import completion % (≥1 credential, week 1)
│   ├── Vault establishment % (≥5 items, week 1)
│   └── Account 2FA enabled %
├── Engagement (users act on guidance)
│   ├── Coach card tap-through %
│   ├── Actions completed / user / month
│   ├── % MAU with ≥1 completed action
│   └── Contextual prompt → completion conversion
├── Security outcomes (posture actually improves)
│   ├── Mean reused-password count per active vault (↓)
│   ├── 2FA coverage % on supported logins (↑)
│   ├── Passkeys per user (↑)
│   └── Score distribution shift (population moves up bands)
├── Business
│   ├── Free → Premium conversion, by entry surface
│   ├── Contextual-convert 12-mo retention vs settings-convert
│   ├── D7 / D30 new-install retention; WAU (mobile)
│   └── Support tickets: autofill/setup themes (↓)
└── Guardrails (the coach must not cost trust)
    ├── Coach disable rate (< 15%)
    ├── Contextual prompt dismissal rate (< 60%)
    ├── Uninstall rate (no regression)
    ├── App Store rating trend (no regression)
    └── Community sentiment on the RFC (qualitative, net-positive)
```

## Key definitions (to prevent metric theater)

- **Autofill D7/D30 vs D1 gap** — the *recovery* effect is the D7/D30 lift among users who did NOT enable at D1. Reporting only aggregate enablement would hide the mechanism being tested.
- **Actions completed** counts only deep-link-completed state changes (autofill actually on, password actually changed), never card taps. Taps are diagnostic, not success.
- **Security debt fixed** is measured on-device and reported in aggregate/cohort form consistent with privacy posture — never as per-user server-side vault analytics.
- **Premium conversion by surface** requires tagging entry points now (settings row vs Coach action vs gated-feature tap); this is the single most important instrumentation addition for the monetization question.

## Experiment design

- **Rollout:** feature flag; ~10% holdout retains current experience; 8-week primary read.
- **Primary decision metrics:** D30 autofill-enabled % (new installs), actions completed/user (existing users).
- **Secondary:** D30 retention, Premium conversion, support-theme volume.
- **Guardrails:** disable rate, uninstall, ratings — any regression pauses rollout.
- **Segments read separately:** new consumer / partial activator (deferred autofill) / dormant vault / power user — the Coach should help the middle two most; a win driven only by power users would falsify the strategy.
- **Qualitative:** 8–10 moderated sessions per segment pre-GA; scoring-methodology RFC runs in parallel and its sentiment is a formal launch input.

## Degraded-measurement path (if telemetry is constrained)

Bitwarden's privacy posture may limit event collection. The strategy remains measurable, more slowly, via:

1. **Server-visible facts:** Premium conversion, account 2FA enablement, emergency-access configuration, Send usage counts — no client telemetry needed.
2. **Cohort A/B outcomes:** flag assignment is server-side; compare server-visible outcomes across arms.
3. **On-device aggregates with opt-in reporting:** score-band distribution reported as coarse, anonymized buckets, opt-in.
4. **External signals:** App Store rating/review themes, support ticket taxonomy volume, community forum sentiment.

The explicit trade: slower reads and wider confidence intervals in exchange for keeping the privacy posture intact. That trade should be made consciously with the security team in week 1 — not discovered at analysis time.

## Reporting cadence

- Weekly during rollout: decision metrics + guardrails, one page.
- Monthly steady-state: metric tree snapshot + security-outcomes trend (this is also the board-legible "mission progress" chart).
- Quarterly: north-star review; re-weighting of score factors proposed via public changelog (methodology changes are versioned and announced, like any open-source release).
