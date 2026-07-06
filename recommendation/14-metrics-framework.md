# Metrics Framework

*Design constraints honored: Bitwarden's minimal-telemetry privacy posture (a degraded-measurement path is specified, not assumed away), and the principle that guidance features are measured on outcomes, never on engagement with warnings.*

---

## North star

> **At-risk items resolved per monthly active user**, reused, weak, and breach-exposed credentials actually fixed, plus protective methods (2FA, passkeys) actually adopted.

It is the mission ("stay safe online") in numeric form, immune to engagement theater (dismissals and warning-views don't count), and computable client-side within zero-knowledge constraints.

## The tree

```
At-risk items resolved per MAU
├── Flagship program (Vault Health)
│   ├── Resolution rate per flagged item (by rule type)
│   ├── Dismissal-with-resolution vs dismissal-only ratio   ← the agency hypothesis, H1
│   ├── Enhanced Premium renewal, months 12–13 (Jan 2027 cohort; loyalty-step-up split)
│   ├── Renewal-survey value attribution by bundle item
│   ├── Support volume: warning-confusion theme (↓)
│   └── RFC health: participation, adopted community proposals (count ≥ 1)
├── Portfolio leading indicators (other briefs, tracked from day one)
│   ├── Brief 1: save-prompt display→accept rate; fill success by platform; regression escapes per train
│   ├── Brief 3: post-import week-4 retention; duplicates per imported vault
│   ├── Brief 4: unlock failure rate by method; master-password entry frequency on mobile (↓)
│   └── Brief 5: passkey success rate top-50 apps; bug-passkey inflow (↓); competitor mentions in reports (↓)
└── Guardrails (trust must not be spent)
    ├── Warning-thread forum sentiment volume (↓)
    ├── App/extension store rating trend (no regression)
    ├── Feature-disable rates on any new guidance surface (< 15%)
    └── Zero data-loss incidents; zero silent dismissal-resets
```

## Definitions that prevent metric theater

- **Resolved** = the underlying state changed (password rotated, 2FA enabled), verified client-side, never "warning interacted with."
- **Renewal cohort reads** are split: loyalty-discount users stepping to full price vs. always-full-price vs. new subscribers. The step-up group is the bellwether.
- **Dismissal is data, not failure.** A healthy surface shows high resolution *and* nonzero dismissal; zero dismissal after Phase 1 would mean the control is hidden, not that users are happy.
- **Regression escape** = a fill/unlock/passkey defect reaching a stable train that a top-50-site/app test corpus would have caught. Counted publicly (brief 1's accountability experiment).

## The degraded-measurement path (privacy-first reality)

Where client telemetry is unavailable or unwelcome, in order of preference:

1. **Server-visible facts** (no client events needed): renewals, plan mix, 2FA-on-account rates, emergency-access setup, storage use.
2. **Cohort A/B on server-visible outcomes:** flag assignment is server-side; compare renewal/conversion across arms without behavioral events.
3. **Client-side aggregates, opt-in, coarse:** resolution counts reported as banded, anonymized buckets.
4. **External proxies:** support-theme volume, store ratings, forum sentiment, duplicate-issue rates.

The explicit trade, wider confidence intervals and slower reads in exchange for the privacy posture, is accepted and stated in every readout. Deciding *which* tier each metric uses is a week-one conversation with the security team, not a discovery at analysis time.

## Reporting cadence

Weekly during Phase 1 rollout (decision metrics + guardrails, one page). Monthly steady-state (tree snapshot; the resolution trend chart doubles as the board-legible mission-progress chart). Quarterly: north-star review + methodology changelog published with the same discipline as a release note.
