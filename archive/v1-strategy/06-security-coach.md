# Bitwarden Security Coach
## Flagship Product Concept — Full Treatment

*Positioning: Security Coach does not replace onboarding. It begins where onboarding ends and never really finishes. It is a progression layer over features Bitwarden already has — it builds no new security capability, only new encounters with existing ones.*

---

## 1. Concept in one paragraph

A persistent, dismissible layer in the mobile app that always answers three user questions — *What have I completed? What should I do next? How much safer am I becoming?* — via an on-device Security Score with published methodology, a prioritized queue of 1–3 recommended actions (each with why / time / impact), and a quiet progress history. Mental models: Apple Fitness rings for the score, GitHub's contribution graph for progress, Microsoft Secure Score for enterprise legibility, Duolingo for sequencing (one next thing, not a wall of tasks) — executed in Bitwarden's register: factual, calm, auditable.

## 2. Goals and non-goals

**Goals**
1. Raise activation of outcome-changing existing features: autofill, biometric unlock, import, 2FA, passkeys.
2. Reduce real credential debt: reused, weak, exposed passwords per active user.
3. Give users a reason to open Bitwarden between lookups (light habit loop).
4. Surface Premium value contextually and honestly.
5. Ship a methodology transparent enough to publish as an RFC — turning the launch into a trust story.

**Non-goals**
- Not a redesign; no changes to vault IA or the core loop.
- Not a notification strategy; push is reserved for breach alerts (Premium) only.
- Not gamification-as-cosmetics: no XP, no avatars, no leaderboards, no streak-loss.
- Not a new data pipeline: v1 requires no new server-side collection.

## 3. The Security Score

### Factors and weighting (v1 proposal — to be tuned, then published)

| Factor | Signal source | Max points |
|---|---|---|
| No reused passwords | on-device vault analysis | 20 (scaled by count) |
| Password strength profile | on-device strength distribution | 15 |
| No known-breach exposures | exposed-password check (existing capability; full monitoring = Premium) | 10 |
| Autofill enabled | OS-reported state | 10 |
| Biometric unlock enabled | app state | 6 |
| Two-step login on Bitwarden account | account state | 12 |
| 2FA/TOTP coverage on supported logins | vault analysis | 10 |
| Passkeys in use | vault analysis | 7 |
| Emergency access configured | account state (Premium) | 5 |
| Vault established (≥ N items, imported) | vault state | 5 |
| **Total** | | **100** |

### Principles

- **Computed on-device.** The server never learns the score. Synced across devices only as encrypted Coach state. This preserves zero-knowledge and becomes a headline differentiator ("your security score is none of our business — literally").
- **Published methodology.** Weightings and rationale documented at help.bitwarden.com; in-app "How is this calculated?" shows the user's own factor breakdown.
- **Honest language.** Copy says "stronger," never "safe." Bands: Getting started (0–39) / Building (40–69) / Strong (70–89) / Exceptional (90–100).
- **No punitive volatility.** The score only moves on real state changes; a newly-detected breach shows as a flagged action first, with the score change explained.
- **Free-tier complete.** A free user can reach "Strong." Premium factors (emergency access, continuous breach monitoring) are bonus paths, clearly labeled — the score must never be a paywall in disguise.

## 4. Recommendation engine

Client-side rules, evaluated on vault unlock (cheap, cached), producing a ranked queue. Ranking = (score impact × user proximity) with hard rules:

1. Never more than 3 visible recommendations.
2. Free actions always outrank Premium suggestions.
3. Blocked/deferred actions (user said "not now") cool down 14 days; "don't suggest again" is permanent.
4. In-progress state detected where possible (e.g., user opened OS settings but autofill still off → gentler follow-up copy, not repetition).
5. New-user sequencing: autofill → biometrics → import → account 2FA before any vault-cleanup items (foundation before optimization).

### Contextual triggers (the intelligence layer)

| Trigger event | Response | Cap |
|---|---|---|
| Manual password copy | Bottom sheet: autofill education | 1/session, 2 lifetime |
| Save login on passkey-capable site | Inline: "This site supports passkeys" | 1/site |
| Save login with reused password | Inline nudge on save (never blocks save) | always-on, inline only |
| Breach match (Premium) | Push + top-of-queue action | as-occurs |
| 30 days no Coach interaction | Nothing. Silence is the correct behavior. | — |

## 5. Surfaces (summary — full wireframes in strategy doc §8, spec in Prototype Specification)

1. **Coach card** on vault home, below search — score ring + top action. Collapsible to a chip; disable-able entirely.
2. **Coach dashboard** — score + trend, "How is this calculated?", action queue, progress tab.
3. **Action detail** — why / time / impact + deep link into the existing flow. Coach never rebuilds flows; it routes.
4. **Completion moment** — score delta animation, single haptic, next action. No confetti.
5. **Progress** — 90-day score line, completed-action history, quiet milestones ("All passwords unique — May 12").
6. **Settings** — Coach on/off, contextual suggestions on/off, reset dismissals.

## 6. UI copy (launch set — realistic, no marketing voice)

- Card, first run: "Security Coach — see where you stand and what's worth doing next. You can turn this off anytime."
- Autofill action: "Fill passwords in apps and websites without leaving them." · "About 2 minutes" · "+10"
- Reused passwords: "One breach shouldn't unlock five accounts. 3 of your passwords are reused."
- Account 2FA: "Protect the vault itself — the most important login you have."
- Emergency access: "If something happens to you, someone you trust can reach what matters."
- Send: "Share a password or file that self-destructs — instead of texting it."
- Score footer: "Scoring runs on your device. Bitwarden never sees your score."
- Premium screen: "Breach monitoring, advanced two-step login, and encrypted file sharing. $10 per year." (No urgency language anywhere.)

## 7. Why users would love it

- It answers "am I okay?" — the question every non-expert silently has and no product answers.
- Every suggestion is respectful: reasoned, time-boxed, dismissible forever.
- Progress is visible and durable — the fitness-ring satisfaction applied to something that actually matters.
- Power users get the first posture score they can audit line-by-line — and a say in its weightings via the RFC.

## 8. Why Bitwarden benefits

| Outcome | Mechanism |
|---|---|
| Activation | Deferred autofill/biometrics recovered at high-motivation moments |
| Retention | A between-lookups reason to open the app; autofill enablement compounds via OS re-invocation |
| Mission | The feature's KPI (credential debt reduced) is the company mission — no engagement/ethics tension |
| Premium | Contextual value exposure at the moment of relevance, honestly labeled |
| Support | Top setup ticket themes addressed proactively in-product |
| Enterprise (later) | Aggregate hygiene visibility becomes procurement language (Secure Score precedent) |
| Brand/PR | "The first security score you can audit" — a story only Bitwarden can tell |

## 9. Edge cases and hard questions (answered now, not at launch)

- **Huge imported vaults (500+ items, dozens reused):** never show raw debt counts as the first experience; recommend "fix your top 3" (highest-value accounts first — banks, email), chunked progress.
- **Self-hosted instances:** Coach works fully (on-device); server-dependent factors (breach monitoring) degrade gracefully with honest copy.
- **Org-managed devices:** org policy can disable Coach or specific recommendations; individual scores never reported to admins in v1 (aggregate-only in the O4 future, with disclosure).
- **Score decreases:** always explained inline ("New breach data affected 1 login") with the action attached; never a silent drop.
- **Accessibility:** score ring has full text equivalent ("Your security score is 72 of 100, up 4 this month"); all coach surfaces screen-reader-first, since security products serve users who depend on AT.

## 10. Future evolution

- **Phase 2:** breach-event coaching (Premium), per-site passkey migration campaigns, family coach (Families plan: help the least technical member, visible to the family organizer only with consent).
- **Phase 3:** enterprise aggregate dashboards (O4), admin-selected recommended actions, compliance framing.
- **Phase 4:** cross-client Coach (extension surfaces the same queue at the browser moment of relevance; desktop parity), fully synced encrypted Coach state.
