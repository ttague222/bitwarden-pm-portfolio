# Prototype Specification
## Bitwarden Security Coach — Interactive Prototype

*Scope note: this workspace contains no React Native/Expo project, so per the project brief no code prototype is included. This specification is written to be handed to a designer or engineer (or built in Expo in a day) with zero additional product input required. Mock data only; no Bitwarden APIs; visual language matches the current native apps.*

---

## Global design rules

- **Theme:** dark-mode-first. Background `#121212`-family surfaces, elevated rounded cards (12–16px radius), Bitwarden blue for primary actions, teal→green arc for score progress, generous whitespace, SF Pro / Roboto per platform.
- **Never** block or precede the vault list; the prototype opens on a faithful vault home with the Coach card *below* search.
- **Motion:** one register — 250ms ease-out; score-delta animation is the only "celebration" (ring fills, number counts up, single haptic). No confetti, no bounces.
- **Copy:** exactly as specified per screen below; no marketing adjectives.
- **Mock user state:** "Alex" — 47 vault items, autofill OFF, biometrics ON, 3 reused passwords, 2 weak, no account 2FA, no passkeys, free tier. Starting score: **58 (Building)**.

---

## Screens

### S1. Welcome (prototype framing screen)
Purpose: orients a reviewer, not a user — one dark screen, Bitwarden logo, title "Security Coach — concept prototype," one line: "A progression layer that continues where onboarding ends." Button: **View the vault**.

### S2. Vault home + Coach card
Faithful vault list (mock items: Amazon, Chase, Gmail…) with search bar on top. Below search, the Coach card:
- Left: score ring, 58, sub-label "Building"
- Right: "Next: Enable autofill · 2 min · +10" with chevron
- Overflow menu: "Collapse" / "Turn off Security Coach"
Interactions: tap card → S3; collapse → card becomes a slim chip ("Security Coach · 58"); vault rows still tap-able (dead-end detail stub is fine).

### S3. Security Coach dashboard
- Header: large ring (58), trend sparkline beneath, caption "Up 6 in the last 30 days"
- Link: "How is this calculated?" → S4
- Section **Recommended** (3 cards max):
  1. "Enable autofill" · "Fill passwords in apps and websites without leaving them." · 2 min · +10
  2. "Set up two-step login" · "Protect the vault itself — the most important login you have." · 3 min · +12
  3. "Fix 3 reused passwords" · "One breach shouldn't unlock five accounts." · ~3 min each · +3 each
- Section **Completed (4)** — collapsed; expanding shows: Biometric unlock · Vault created · First import · First item added, with dates
- Tabs: **Actions** / **Progress** (→ S8)

### S4. Score detail — "How is this calculated?"
Plain table: factor / status (✓ or —) / points. All ten factors from the scoring model, Alex's actual states. Footer, verbatim:
> "Scoring runs on your device. Bitwarden never sees your score. Methodology: bitwarden.com/help/security-score"

### S5. Autofill education (action detail + contextual variant)
**Action-detail variant** (from S3): Title "Enable autofill." Body: "Fill passwords in apps and websites without leaving them. You'll be taken to Settings → Passwords → AutoFill." Meta row: "About 2 minutes · +10 to your score." Buttons: **Set up autofill** / Not now / (small) Don't suggest this again.
**Contextual variant** (bottom sheet, triggered in prototype by a "Copy password" button on a vault item): "You just copied a password. Autofill does this automatically — and more safely." **Show me** / No thanks.
Tapping "Set up autofill" simulates the OS settings trip (brief system-style interstitial) → returns to S6.

### S6. Completion moment
Return to dashboard: ring animates 58 → 68, "+10" counts in, single haptic. Toast: "Autofill enabled. Your logins now fill automatically." The next recommendation card slides up. This screen is the emotional core of the prototype — get the restraint right.

### S7. Simplified Add Login (supporting screen)
The existing add-login flow with one Coach-relevant addition to demonstrate inline coaching: when the mock user enters a password matching another item, a quiet inline row appears under the field: "This password is used on 2 other logins." Link: "Generate a unique one instead." Never blocks save.

### S8. Progress screen
- 90-day score line chart (mock: 41 → 68)
- "Completed actions" list with dates
- Milestone rows with checkmarks: "Every login autofills — today" · "Vault established — May 2"
- Locked milestone (grayed): "All passwords unique"

### S9. Achievement screen
Full-bleed dark card reached by tapping a milestone: single icon, one line "Every login autofills," date, **Share** button (share image contains milestone + score band only — no vault data). One per concept; understated.

### S10. Premium value screen
Reached only by tapping the (fourth, labeled) recommendation "Explore Premium — breach monitoring for your logins." Three rows, one sentence each: Breach monitoring ("Get alerted when a site you use is breached") / Advanced two-step login ("Hardware keys and more") / Encrypted file Send ("Share files that self-destruct"). Price line: "$10 per year." Buttons: **Upgrade** / Maybe later. No countdowns, no discount theater.

### S11. Improved Settings (Coach section)
Standard settings list with new group "Security Coach": toggle "Security Coach" (on), toggle "Contextual suggestions" (on), row "Reset dismissed suggestions," row "How scoring works." Demonstrates the exit ramp is first-class, not buried.

---

## Prototype flow map

```
S1 → S2 ⇄ S3 → S4
         S3 → S5(action) → [OS interstitial] → S6 → S3
         S2 → item → "Copy password" → S5(contextual)
         S3 → Progress tab → S8 → S9
         S3 → Premium rec → S10
         S2 → overflow → S11
```

## Build notes (if/when built in Expo)

- Single mock-state store (Zustand or context) holding the Alex state; every action mutates it so score/queue/progress stay consistent across screens — reviewers *will* poke at consistency.
- Score ring: `react-native-svg` arc; count-up via `Animated`.
- No network, no storage of anything real; state resets on relaunch.
- Estimated effort: 1–2 days for a functional walkthrough build.

## What the prototype is for

Three conversations, in order: (1) does the Coach card earn its place on the home surface without threatening the core loop? (2) does the why/time/impact card pattern make actions feel respectful rather than naggy? (3) does the completion moment land with Bitwarden-appropriate restraint? Everything else is scaffolding for those three questions.
