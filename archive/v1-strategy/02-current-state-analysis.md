# Current State Analysis
## Bitwarden Mobile, July 2026

*Basis: structured walkthrough of the current native iOS app, Bitwarden release notes and help documentation, community forum themes, and app store review patterns. External analysis; no internal data. Where a claim could not be verified, it is flagged.*

---

## 1. Platform context

- **Native apps GA'd January 2025** (Swift on iOS, Kotlin on Android), replacing the Xamarin-era clients. Public positioning emphasized performance, smoother UX, and deeper platform integration (biometrics, passkeys).
- **2026 release cadence** has focused on encryption strengthening, sync reliability, sign-in reliability (app links on Android), refreshed password/account screens, and premium checkout/upgrade flow updates.
- Strategic read: the platform-debt era is over. The mobile team's constraint has shifted from *maintaining parity* to *choosing what differentiated experience to build*. That window is the premise of this document set.

## 2. Feature inventory (what exists today)

| Capability | Mobile status | Encounter point today |
|---|---|---|
| Vault CRUD, folders, search | Core | Home surface |
| Autofill (iOS/Android) | Full | Onboarding step (OS-settings handoff); Settings thereafter |
| Biometric unlock | Full | Onboarding prompt; Settings |
| Passkey save & sign-in | Full | In-context when a site offers it |
| Integrated TOTP authenticator | Full (sync w/ Premium features) | Per-item setup; separate Authenticator app exists |
| Vault health (weak/reused/exposed) | Exists in platform; richest in web vault | User-initiated; low mobile visibility |
| Send (secure text/file share) | Full (files = Premium) | Tab/menu; name assumes prior knowledge |
| Emergency access | Premium (web-configured) | Effectively undiscoverable from mobile flow |
| Import | Full (web-centric; mobile improving) | Onboarding mention; help docs |
| Self-host / enterprise policies | Full | Config-level |

**The inventory finding:** nothing important is missing. Every recommendation in this document set is therefore about *encounter design* — when and how users meet capabilities that already exist — per the analysis constraint that existing features must not be "recommended into existence."

## 3. What works well (and must not change)

1. **The core loop.** Biometric unlock → search → autofill/copy is fast on the native apps. This loop is the product. Nothing proposed may sit in front of it.
2. **Onboarding exists and is competent.** Account creation, biometric offer, autofill offer, import pointer. The gap is not the absence of onboarding — it is that onboarding is the *only* guidance system in the product.
3. **Visual identity.** Dark-mode-first, rounded cards, restrained palette, no promotional noise. Reads as trustworthy — correct for the category.
4. **Honest settings.** Comprehensive, accurately labeled, no manipulative placement.
5. **No dark patterns anywhere.** This is a brand asset with enterprise-sales value and must be treated as a design constraint on everything proposed.

## 4. Friction inventory (grounded observations)

| # | Observation | Grounding |
|---|---|---|
| F1 | Guidance is an event (first session), while security posture is a months-long process | Habit formation requires repeated cue→action→reward loops; a one-time tour cannot produce them |
| F2 | Autofill deferral is silent and permanent — no detection of "returned without enabling," no contextual re-approach | OS-settings handoffs are a documented drop-off point; autofill setup is a persistent support/community theme |
| F3 | Powerful features rely on recall, not recognition — "Send," "Emergency access," "Authenticator sync" are accurate labels that presume prior knowledge | Nielsen heuristic #6 (recognition over recall) |
| F4 | Security state is invisible — the app can compute reused/weak/exposed counts and knows enablement states, but no surface summarizes posture | Nielsen #1 (visibility of system status); goal-gradient effect |
| F5 | Premium is encountered as settings lock icons rather than as experienced value | Value-first monetization principle; at $10/yr the barrier is comprehension, not price |
| F6 | First-session cognitive load is maximal exactly when user capacity is minimal (new master password + import + autofill + biometrics at once) | Progressive disclosure principle |

## 5. The population this matters for

Directional segmentation (to be replaced with internal cohort data):

- **Setup completers** — enabled autofill + biometrics in week 1. Retained by the OS itself (autofill re-invokes the product daily). The app already serves them well.
- **Partial activators** — created a vault, deferred autofill or import. **The strategic population.** They experience Bitwarden as a manual copy-paste tool, which is strictly worse than their browser's built-in manager. Churn risk is structural, not attitudinal.
- **Dormant vaults** — imported once, rarely return. Reachable only via external triggers (breach news) unless the product earns a between-lookups visit.

The document set's core claim: the partial-activator population is large (support-theme volume around autofill suggests it), recoverable (the moment of manual password copy is a high-motivation trigger), and currently unaddressed by any product mechanism.

## 6. Verification gaps (honest list)

- I cannot see internal funnel data: actual autofill-enablement %, D7/D30 retention, Premium conversion by surface, or support ticket taxonomies. All targets in the metrics framework are structured as *deltas against internal baselines*.
- Mobile vault-health surface details vary by release; the strategy depends only on the platform's existing ability to compute weak/reused/exposed — which is verified.
- Telemetry availability under Bitwarden's minimal-collection posture is unknown externally; the metrics framework includes a degraded-measurement path (cohort outcomes + opt-in analytics) for this reason.
