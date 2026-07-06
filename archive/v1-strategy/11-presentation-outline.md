# Presentation Outline
## "From Secure Toolbox to Guided Security Companion" — 20 minutes + discussion

*Format: 14 slides, executive register. Designed for a panel that includes product leadership, an engineer, and possibly someone from the community/security side — each has a slide aimed at them. Timings assume 20 minutes of speaking.*

---

**1. Title (30s)**
"Bitwarden Mobile: From Secure Toolbox to Guided Security Companion." One line of method honesty: external analysis, no internal data, all targets framed as deltas — here to be corrected by your baselines.

**2. What Bitwarden got right (90s)**
Trust as a moat (open source, audits, zero-knowledge), the category's most credible free tier, honest pricing, complete mobile toolbox, the native rewrite. *Spoken note: this section is sincere, not throat-clearing — the strategy only works because these assets exist.*

**3. The observation (90s)**
The toolbox is complete; the burden of discovering and sequencing it falls on the user. Guidance is an event (onboarding); security posture is a process (months). One concrete story: the user who defers autofill on day 1 and is never asked again.

**4. Evidence (2 min)**
Six frictions, each grounded: autofill deferral is silent and permanent; features rely on recall not recognition; security state is invisible; Premium discovered by browsing, not experiencing; first-session cognitive overload. Heuristics cited (Nielsen #1/#6, goal-gradient, progressive disclosure) — one line each, no lecture.

**5. Competitive picture (2 min)**
The one-table slide: every credible competitor has posture visibility (Watchtower, Password Health, Security Audit, Apple Recommendations, Checkup, Secure Score); Bitwarden's is the least visible. Two lessons named: Apple wins the user who does nothing; Keeper shows the trust cost of upsell-flavored advice. The corridor between them is Bitwarden-shaped.

**6. The recommendation (90s)**
Security Coach: a progression layer, not features. Three questions always answered: done / next / how much safer. Continues after onboarding; never in front of the vault loop; dismissible forever.

**7. How it works (2 min)**
Score (on-device, published methodology, "stronger" never "safe") + action queue (max 3; each card = why / time / impact; deep links into existing flows) + quiet progress (contribution-graph register, no streak-loss). Walk one loop: copy-password trigger → autofill education → OS settings → completion moment (+10).

**8. The judo move (90s)** — *aimed at the community-minded panelist*
Open source means building in public — competitors see it early and the community debates it. Answer: publish the scoring model as an RFC *first*. The community becomes co-author; the launch story becomes "the first security score you can audit." Copyable feature, uncopyable transparency.

**9. Why now (60s)**
Native apps bought the velocity; the category normalized posture scores; growth is shifting from acquisition to activation — and Bitwarden's free-tier funnel makes activation the highest-leverage dollar.

**10. What it's worth (90s)**
Five levers, one layer: activation (autofill D7/D30 recovery), retention (a between-lookups reason to open), security outcomes (debt fixed per MAU — the mission metric), Premium (contextual, honest), support deflection. North star named: security debt resolved per MAU.

**11. Roadmap (90s)**
Now: autofill recovery + checklist card (small, reversible, independently valuable). Next: score + dashboard + contextual triggers, A/B with holdout. Later: breach coaching, cross-client, enterprise aggregate dashboards. The gates: checklist engagement unlocks the score build; guardrails (disable rate <15%, no uninstall delta) can pause everything.

**12. Tradeoffs I'd want challenged (2 min)** — *aimed at the skeptic; the most important slide*
Gamification vs sobriety (mitigation: quiet-pride register, no guilt mechanics). Score honesty (published weights, "stronger" language). Telemetry tension (degraded-measurement path exists; resolve with security team in week 1). Opportunity cost vs platform work (Now-phase is deliberately S/M). Enterprise surveillance risk (aggregate-only, later, co-designed). *Spoken: "These are where I'd expect this room to push — and where internal data should overrule me."*

**13. How I'd validate (60s)**
Flagged rollout, 10% holdout, 8-week read; segments read separately (a win driven only by power users falsifies the strategy); moderated sessions per segment; RFC sentiment as a formal launch input.

**14. Close (30s)**
"Bitwarden already built the toolbox and earned the trust. The Coach converts both into outcomes users can see — measured by the metric that is the mission. I'd love to know where this collides with what you already know."

---

## Anticipated Q&A (prepare, don't slide)

- *"Our telemetry posture won't support this measurement."* → Degraded path: server-visible outcomes + cohort A/B + opt-in aggregates; slower reads, same decisions; week-1 conversation with security.
- *"The community will hate gamification."* → So would I. This is posture visibility with an auditable methodology, shipped RFC-first; the register is GitHub, not Duolingo.
- *"Why not just improve onboarding?"* → Onboarding is competent; concentrating more into the first session raises cognitive load exactly when capacity is lowest. The gap is after.
- *"What would make you kill this?"* → Gate 1: flat checklist engagement and no autofill D7 recovery. The design spends almost nothing before that read.
- *"Score gets criticized as false precision?"* → Bands over digits in marketing, factor breakdown in-app, versioned public methodology; "stronger," never "safe."
- *"Doesn't Apple make this moot?"* → Apple wins defaults, not care. Cross-platform users, families, and enterprises need what a default can't be — and the Coach is exactly the layer Apple doesn't attempt.
