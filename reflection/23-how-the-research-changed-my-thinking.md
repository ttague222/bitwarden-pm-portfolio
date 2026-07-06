# How the Research Changed My Thinking

*This is the document I most wanted to write, because "evidence-based product management" is easy to claim and expensive to demonstrate. The demonstration requires showing the before. The v1 documents are preserved unedited in `archive/v1-strategy/`, including the mistakes.*

---

## What I believed before the research

I began with the standard candidate move: a structured product walkthrough, a competitive read, and a flagship concept. The concept was **Bitwarden Security Coach**, a post-onboarding progression layer for mobile: on-device security score, recommended-action queue, and quiet progress mechanics.

The v1 package was coherent, but it rested on assumptions I had not earned:

1. **Bitwarden has no guidance layer; the opportunity is to build one.**
2. **Premium is still a ~$10/year impulse product.**
3. **The main gap is post-onboarding discovery.**
4. **The community's demand is best understood through competitive feature gaps.**
5. **Mobile UX is where an external candidate can add the most value, because it is what I can observe directly.**

## What the evidence said

**1. Wrong by six months.**  
Bitwarden shipped vault health alerts and password coaching in December 2025. My flagship, as originally framed, proposed building a version of something that already existed.

**2. Wrong by pricing model.**  
Enhanced Premium launched in January 2026 at $19.80/year. The question was no longer "how do we help users discover a cheap upgrade?" It became "how does a paid bundle prove value before renewal?"

**3. Half right, wrong center of gravity.**  
Discovery still matters, but the community response to coaching revealed the deeper issue: consent. Users did not primarily ask for more guidance. They asked to dismiss warnings and understand why items were flagged.

**4. Misweighted.**  
The forum's peak engagement is trust events: redesigns, regressions, licensing. Competitor comparison still matters because Watchtower sets the guidance bar, but the sharper lens is community-as-governance.

**5. Wrong surface.**  
Mobile was observable, not necessarily highest leverage. The research moved the opportunity map toward daily-path reliability, a shipped-but-wounded paid feature, vault organization, unlock, and passkey compatibility.

## What surprised me

The most surprising finding was not that Bitwarden had old backlog. It was that the backlog was so stable and so publicly legible. The community has not been asking for a mystery roadmap. It has been repeating the same durable needs while also protecting the company's trust model.

That changed how I read every complaint. A dismissal request on at-risk warnings is not just "make this less annoying." In this community, it means: do not confuse security guidance with control over the user.

## What Survived

Three v1 ideas survived because the evidence strengthened them:

- **Published methodology as differentiation.** V1 proposed "the first security score you can audit" on brand-fit intuition. The research found direct demand for the reason an item is flagged, plus a company precedent in the published ETH Zurich audit.
- **No dark patterns.** V1 rejected guilt mechanics, urgency, and upsell-flavored security advice. The at-risk warning response showed why that restraint is not aesthetic preference; it is product-market fit for Bitwarden's user base.
- **Outcome metrics over engagement.** V1's north star was security debt resolved per user. The final version keeps the principle: measure resolved risk, not warning views or taps.

## How the recommendation changed

| | v1 | Final |
|---|---|---|
| Flagship | Build a Security Coach layer for mobile | Steward the shipped Vault Health surface |
| Framing | New product concept | Value realization of an existing paid feature |
| Urgency | Activation and discovery | January 2027 renewal accountability |
| Primary lens | Competitive habit-formation patterns | Community governance and trust economics |
| Top opportunity | Post-onboarding discovery | Daily-path reliability, with Vault Health as the best new-PM charter |
| Monetization | Contextual Premium discovery at $10 | Renewal defense at $19.80 with value attribution |
| Mobile | The whole assessment | One surface among several |

## PM perspective

The important decision was not "keep or discard Security Coach." It was separating the insight from the artifact.

The artifact was wrong: a new mobile coaching layer.  
The insight was right: Bitwarden can differentiate through auditable security guidance.

The final recommendation keeps the insight and changes the artifact. That is the part I would want a hiring manager to notice.

## What could change my mind again

The final recommendation is still external analysis. Inside Bitwarden, I would immediately look for the facts that could overturn it:

- Premium renewal/churn since the price increase.
- Scope and timing of the acknowledged warning fix.
- Whether warning frustration shows up in support, cancellation reasons, or only forum volume.
- Whether the at-risk methodology is already documented internally and defensible externally.
- Whether daily-path reliability has an ownership vacuum that actually needs the new PM more.

If those facts contradict the public read, the ranking should change. The point of the work is not to defend my first conclusion. It is to keep improving the conclusion as the evidence improves.

## What this demonstrates

I did not hide the first version. It sits in the archive because the delta is the work sample: assumptions stated, evidence gathered, a favorite idea revised, and the surviving pieces rebuilt into a better recommendation.

If I bring one working habit to Bitwarden, it is this loop: state the assumption, find the data that could change it, and treat that change as progress.
