# Roadmap
## Now / Next / Later with Engineering Complexity and Decision Gates

*Sizing key: S = days–2 weeks, M = 2–6 weeks, L = 6+ weeks for a small native squad (2 iOS + 2 Android + design + PM). Sizes are external estimates to be re-planned with the team; the structure — small reversible bets gating larger ones — is the point.*

---

## Now (0–3 months) — prove the recovery loop

| Item | Description | Size | Rationale |
|---|---|---|---|
| Autofill state detection | Read OS-reported autofill-enabled state on both platforms | S | Foundation for everything; both platforms expose it |
| Contextual autofill re-prompt | Bottom sheet after manual copy event; caps: 1/session, 2 lifetime; permanent dismissal | S–M | The highest-confidence, highest-leverage single change in the funnel |
| Coach v0 — setup checklist card | Static card on vault home: 5 setup actions (autofill, biometrics, import, account 2FA, first passkey) with why/time, deep links, completion states. No score. | S–M | Proves users engage with guidance at all, before the score is built |
| Funnel instrumentation | D1/D7/D30 autofill %, checklist engagement, time-to-autofill — within existing privacy/telemetry posture | S | Can't manage what isn't measured; degraded path documented in Metrics doc |

**Gate 1 (end of Now):** checklist card tap-through and autofill D7 recovery show signal (targets set against week-1 baselines). If flat → revise or stop before the score build. Everything in "Now" is independently valuable even if the Coach concept ends here.

## Next (3–9 months) — the Coach proper

| Item | Description | Size | Notes |
|---|---|---|---|
| Security Score engine | On-device scoring over existing vault analysis; caching; change-diffing; encrypted state sync | M | Largest new logic; no server changes; publish methodology as community RFC *before* GA |
| Coach dashboard + action queue | Score ring, trend, "How is this calculated?", ranked recommendations (max 3), action detail pattern | M–L | New surfaces on the native codebase; design system already fits |
| Progress screen + milestones | 90-day score line, completed history, quiet milestone rows | M | GitHub-graph register, no confetti |
| Contextual trigger framework | Event plumbing (copy, save-with-reused, passkey-capable-site) with hard caps and cooldowns | M | The caps are product requirements, not polish |
| Contextual Premium moments (O3) | Premium value screen reached only from user-initiated gated actions; per-surface conversion instrumentation | S | Plugs into 2026's checkout-flow investment |
| A/B evaluation | Flagged rollout, ~10% holdout, 8-week read | S (process) | Decision metrics below |

**Gate 2 (GA decision):** vs holdout — D30 autofill % up, actions/user meaningful, security-debt trend down, Coach disable rate < 15%, no uninstall or rating regression. Community RFC sentiment qualitatively net-positive.

## Later (9–18 months) — extend the moat

| Item | Description | Size |
|---|---|---|
| Breach-driven coaching | Premium: breach match → push + top-of-queue guided fix | M |
| Passkey migration campaigns | Per-site "this login could be a passkey" sequences as ecosystem support grows | M |
| Cross-client Coach | Same queue/score in browser extension + desktop; encrypted state sync | L |
| Family coach | Families plan: consent-based visibility for the family organizer; help the least technical member | M |
| Enterprise hygiene dashboards (O4) | Aggregate, k-anonymized org-level activation/hygiene reporting; policy controls; employee disclosure UX | L (+ security co-design) |

## Sequencing logic (why this order)

1. **Reversibility first.** "Now" is small, independently valuable, and doesn't commit the brand to a score.
2. **The score is gated, not assumed.** The largest build (engine + dashboard) proceeds only after checklist engagement proves demand for guidance.
3. **Monetization follows trust surfaces.** Contextual Premium ships inside a Coach that has already demonstrated free-first behavior.
4. **Enterprise last.** Highest sensitivity (surveillance perception) rides on a consumer-proven, community-accepted foundation.

## Dependencies and open questions for week 1 inside

- Telemetry: what does the current opt-in analytics posture actually permit? (Determines whether Gate 1 reads from telemetry or cohort/store/support proxies.)
- Vault-health engine surface area on mobile today vs web — reuse boundary for the score engine.
- Security team review of on-device score storage + encrypted sync design.
- Community/DevRel plan for the scoring-methodology RFC.
