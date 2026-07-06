# User Personas
## Four evidence-derived personas, and how the recommendation changes for each

*Method note: these personas are not invented demographics. Each one is a behavioral segment that surfaced repeatedly in the primary research (research/04), named by what the person does, anchored to the evidence that proves they exist, and carried through the flagship program and PLG concepts. The assessment deliberately scopes to consumer personas; the enterprise employee and admin variants belong to the Access Intelligence surface and are noted at the end.*

---

## P1: The Switcher

**Who they are.** Recently left Chrome's password manager, 1Password, or Keeper, usually after a breach headline, a price change, or a recommendation. Arrived through one of the eight direct importers Bitwarden shipped in the last 19 months. Now owns a large, messy, unfamiliar vault: hundreds of imported items, duplicates, and no autofill configured yet.

**Evidence they exist.** The importer investment itself (8 new importers, 2025-2026); the five-year-open save-prompt defect (#1620) that stalls their capture loop; duplicate-tool demand (466 votes) concentrated in exactly this situation; the partial-activator segment in the research.

**What they need.** To reach "working product" fast: autofill on, vault trustworthy, mess reduced. Every day of friction is a day closer to sliding back to the browser default.

**Vault Health for them.** At-risk warnings on day 2 against 400 imported items would read as an attack, not coaching. Warnings must be sequenced (top three, highest-value accounts first) and arrive after setup basics, not instead of them.

**PLG concepts for them.** The Security Progress Checklist is *their* surface: state-aware setup recovery that notices autofill never got enabled and returns at a moment of demonstrated need, not on a timer. The Premium Value Summary is irrelevant to them for months; showing it early would be noise.

**The metric that matters.** Time-to-autofill; week-4 retention of importers.

## P2: The Daily Retriever

**Who they are.** The silent majority. Opens Bitwarden several times a week for one reason: get a credential, get out. Has never opened Reports, doesn't know what Send is, and experiences the product entirely through unlock, search, and fill.

**Evidence they exist.** The top open issues are all daily-path friction (popup delay #12286, save prompts, unlock re-prompts); retrieval-dominant behavior is the usage pattern every reliability complaint assumes; feature-discovery demand ("full mobile search," "persistent filter") comes from people living in the retrieval loop.

**What they need.** Reliability, speed, and to be left alone. They are the persona most damaged by regressions and most annoyed by un-dismissible anything.

**Vault Health for them.** One warning at the right moment with a reason and a dismissal control. If guidance interrupts retrieval, they will rate the app one star before they file a feature request.

**PLG concepts for them.** Contextual and rare: the checklist only if their setup is objectively incomplete; the value summary once a year at renewal. The guardrails (no urgency mechanics, nothing in front of the fill path) exist mostly to protect this persona.

**The metric that matters.** Fill success rate; unlock friction; warning dismissal honored permanently.

## P3: The Community Auditor

**Who they are.** Self-hosts or reads release notes for fun. Votes on the forum, reads the source, files detailed GitHub issues, and screenshots anything that smells like a dark pattern. A small fraction of the user base and the majority of its public voice.

**Evidence they exist.** The 973-post redesign megathread; the SDK license episode reaching international press in days; 890 votes patiently accumulated on auto-type; the demand that at-risk warnings state their reasons (40 votes).

**What they need.** Agency, reasons, and inspectable logic. They do not object to guidance; they object to guidance that cannot explain itself.

**Vault Health for them.** The published methodology is *their* feature. The RFC makes them co-authors instead of critics; a rule that cannot survive their review should not ship. They are also the persona that will verify, within hours, whether "dismissal is permanent" is true.

**PLG concepts for them.** Community-voted concept validation is aimed here: let them tell Bitwarden which growth mechanics feel useful versus manipulative before anything scales.

**The metric that matters.** RFC participation and sentiment; at least one community proposal shipped.

## P4: The Household Steward

**Who they are.** The person who pays. Runs Enhanced Premium or a Families plan, managed the family's migration, fields the "I'm locked out" texts, and will sit in front of a renewal screen in January 2027 deciding whether roughly double the old price was worth it.

**Evidence they exist.** The repricing itself (loyalty-discount cohort stepping to full price); emergency access and family-sharing demand in the forum record; the value-communication investment visible in checkout and upgrade flows through 2026.

**What they need.** Proof. They bought protection for people they love; the product has never once shown them what it actually did.

**Vault Health for them.** Warnings across family members' vaults need summarizing, not multiplying. The measurement phase of the flagship exists to answer their question before they ask it at renewal.

**PLG concepts for them.** The Premium Value Summary is *their* surface: a factual annual account (items resolved, alerts reviewed, people protected), no inflated claims, shown ahead of the renewal window.

**The metric that matters.** Enhanced Premium renewal at months 12-13; value attribution by bundle item.

---

## How the personas change the program

| Flagship phase | P1 Switcher | P2 Daily Retriever | P3 Community Auditor | P4 Household Steward |
|---|---|---|---|---|
| 1 Repair | Sequenced warnings, never a wall of red | Dismissal that sticks, reasons in one line | Verifiable dismissal behavior | Family-level warning summary |
| 2 Transparency | Plain-language reasons | "How we decide" one tap away | The RFC and versioned methodology | Trustworthy enough to explain to family |
| 3 Measurement | Time-to-autofill, week-4 retention | Fill success, zero interruption cost | Public metric definitions | The renewal dashboard and value summary |
| 4 Extension | Post-import cleanup path | Contextual, rare, evidence-gated | Community-validated mechanics only | Guided fixes for the family's riskiest items |

**The design point:** one guidance surface, four different correct behaviors. A checklist that is essential for the Switcher is noise for the Daily Retriever; a value summary that answers the Steward's renewal question means nothing to a day-2 importer. State-awareness is not polish here; it is what makes the same feature respectful for all four.

## Deliberately out of scope

The enterprise employee (onboarded by mandate, motivated by compliance) and the org admin (buys posture visibility) are real personas the research surfaced, but they belong to the Access Intelligence and Admin Console surfaces, and public evidence about them is thin (enterprise demand flows through sales channels invisible to this research). They are flagged as future work in the opportunity analysis rather than treated superficially here.
