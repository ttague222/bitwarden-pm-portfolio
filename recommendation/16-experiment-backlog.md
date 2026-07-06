# Experiment Backlog

*Ordered by information-per-dollar: cheapest decisive tests first. Each row names the hypothesis it tests, the decision it informs, and its measurement tier under the privacy posture.*

| # | Experiment | Tests | Design | Decision informed | Cost | Tier |
|---|---|---|---|---|---|---|
| 1 | Passkey failure taxonomy | B5-H1 | Classify existing public `bug-passkey` issues by root cause: Bitwarden, app, OS, or unclear | Shape of the passkey reliability program | Analysis only | External data |
| 2 | Warning-thread demand tagging | Flagship Phase 1 scope | Tag top warning threads by requested control: dismiss, snooze, explain, tune, or suppress | Phase 1 sub-feature ranking | Analysis only | External data |
| 3 | Community-voted PLG concepts | PLG trust fit | Publish 3-4 lightweight concepts for feedback: Premium Value Summary, Security Progress Checklist, earned Premium previews, Families setup path | Which PLG mechanic feels useful vs. manipulative before build | XS-S | Community sentiment |
| 4 | Dismissal + reasons flagged rollout | B2-H1 | Ship Phase 1 to a cohort with a holdout; compare resolution behavior and dismissal patterns | Does agency increase action? | S build | Cohort A/B |
| 5 | Renewal-time one-question survey | B2-H3, Phase 3 | Ask "What did Premium do for you this year?" at renewal touchpoint | Bundle value attribution without heavy telemetry | S | Server-visible + survey |
| 6 | Methodology RFC | B2-H2 | Publish at-risk rules as an RFC with pre-registered success criteria and a disposition table | Whether auditable guidance differentiates | S | External sentiment |
| 7 | Security Progress Checklist pilot | Mobile + PLG activation | Build a state-aware checklist for skipped setup actions: autofill, biometrics, import, account 2FA, first passkey. Honor completion and dismissal permanently. | Whether progress recovery improves activation without irritating users | M | Cohort A/B + support/forum guardrails |
| 8 | Premium Value Summary prototype | PLG value realization | Show a factual recap: at-risk items resolved, breach alerts handled, storage used, security keys configured, family members protected where applicable | Whether visible value improves renewal confidence and upgrade intent | M | Survey + renewal cohort |
| 9 | Capture-funnel instrumentation | B1-H1/H2 | Add save-prompt display/accept events, or an opt-in/coarse equivalent | Size of the five-year-old #1620 opportunity before building | S-M | Tier decided with security |
| 10 | Error-message rewrite on passkey failures | B5-H2 | Replace opaque "not supported" language with actionable status and a link to compatibility guidance | Whether transparency reduces duplicate reports and blame | XS | Duplicate-report rate |
| 11 | Fill-assist expansion to top-20 complained sites | B1-H3 | Curate sites from issue history; measure issue inflow delta | Curated corpus vs. heuristic rewrite strategy | M | External issue rates |
| 12 | Duplicate report, read-only | B3-H1 | Ship duplicate detection without merge; measure demand satisfaction vs. merge-demand persistence | Whether the risky merge feature is actually required | M | Cohort |
| 13 | Post-import organization onboarding | B3-H3 | A/B an organization step offered to fresh importers | Week-4 retention effect | M | Cohort A/B |
| 14 | Passkey compatibility matrix pilot | B5-H2 | Public per-app status page for top reported apps, community-maintainable | Transparency posture at scale | M | Duplicate reports + sentiment |
| 15 | Unlock-defect fix sprint with public narration | B4-H1/H3 | Fix #4650-class defects and narrate the work on public issues | Sentiment yield of visible reliability work | M | External sentiment |
| 16 | Public regression scorecard | B1 accountability | Per-train fill/unlock/passkey pass-fail against a top-50 corpus | Whether public quality accountability reduces backlash severity | M-L | External |
| 17 | Guided resolution paths | B2/Phase 4 | Pilot "fix your top 3" paths with flags and a holdout, measured only on resolved risk | Whether coaching extends beyond warnings | L | Cohort A/B |

## PLG Guardrails

- Do not use points, streaks, urgency, or scarcity unless community validation shows the framing feels useful rather than manipulative.
- Every PLG surface must be tied to real security progress or factual value delivered.
- Premium previews, if tested, must be clearly labeled and time-boxed without dark-pattern countdowns.
- Family-plan experiments should be framed as discovery until internal data confirms what onboarding and household-safety surfaces already exist.
- A dismissed or completed checklist item must stay dismissed or completed across sessions and devices.

## Stop Criteria Discipline

Every experiment ships with a pre-registered success threshold and a named decision it feeds. Experiments 3, 4, 6, 7, and 8 are the most important near-term tests: community fit for PLG mechanics, agency's effect on resolution, auditable-guidance differentiation, setup recovery, and visible Premium value.
