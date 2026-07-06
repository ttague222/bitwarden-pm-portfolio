# Product Investigation
## How the evidence selected these five opportunities: and what it rejected

*This document is the bridge between research and recommendation: the selection logic, stated so it can be challenged.*

---

## Selection method

Candidate opportunities were generated from four evidence streams (GitHub engagement, forum vote record, release archaeology, maintainer decisions) and admitted only if they satisfied all four filters:

1. **Multi-source:** demand or damage visible in at least two independent evidence streams.
2. **Persistent or time-boxed:** either a multi-year theme (not a transient complaint) or a dated catalyst that creates urgency.
3. **Strategy-aligned:** strengthens a commitment Bitwarden's shipping record shows it has already made (strategy/02), nothing that redirects the company.
4. **PM-shaped:** the binding constraint is prioritization, sequencing, trust, or measurement, not pure engineering invention. Per the assessment's core principle, where a capability already exists, the opportunity is adoption, reliability, education, or communication around it.

## The five that passed

| # | Opportunity | The one-line evidence case |
|---|---|---|
| 1 | Daily-path reliability (save/fill loop + regression quality) | Top complaint class for a decade; top *open* issues today; a five-year-old activation defect (#1620); regressions dominate all-time engagement |
| 2 | Vault Health value realization | Shipped Dec 2025 as a price-increase pillar; immediately generated the year's top feature requests (dismiss, explain); renewal cohort decides Jan 2027 |
| 3 | Vault-organization backlog delivery | ~2,800 votes across eight years; movement just began (tags, archive); the hard part (dedup) was halted by Product over data-loss risk, a sequencing problem |
| 4 | Unlock friction and cross-client unlock | 324-vote 2018 request shipping now as "Shared Unlock"; Windows Hello megathread; open mobile unlock-state defects; crypto-entangled |
| 5 | Passkey reliability on mobile | 50 labeled compatibility issues (19 open) against the company's loudest strategic bet; competitor defection named in reports |

Full discovery briefs follow (brief-1 … brief-5); head-to-head scoring in [11-executive-opportunity-comparison.md](11-executive-opportunity-comparison.md).

## Candidates considered and rejected (the filter working)

- **Desktop auto-type (890 votes, the single biggest ask).** Rejected as a standalone opportunity because it is already tagged in-progress; the PM value-add is delivery quality and expectation management, which fold into briefs 1 and 3 disciplines. Recommending "build the thing being built" is noise.
- **A new coaching/score layer (my own v1 flagship).** Rejected by the evidence: Bitwarden shipped coaching in December 2025. The surviving opportunity is brief 2, the difference between those two framings is the entire lesson of this project (reflection/23).
- **AI-agent credential productization.** Strategically live (three new repos, an SDK), but there is no user-demand evidence yet to weigh it against the five; it appears in the roadmap as a watch item, not an opportunity.
- **Redesign-cycle management.** Real, recurring, and expensive (three backlashes in three years), but it is an operating-process improvement, not a product opportunity. It appears inside briefs 1–3 as a delivery constraint (density/muscle-memory regressions are treated as regressions).
- **Enterprise admin features.** The heaviest current investment area, but public evidence adds little to what the company already knows from sales channels; an external assessment claiming enterprise insight from a forum with 10 enterprise-tagged topics would be overreach. Honest scope beats false completeness.
- **Send / Authenticator / Secrets Manager growth.** The release record shows deliberate keep-alive posture; proposing growth there contradicts observed strategy without evidence the strategy is wrong.

## Distinguishing the nature of each problem (as the mission requires)

| Opportunity | Customer demand | Engineering constraint | Product strategy | Technical debt | Intentional tradeoff |
|---|---|---|---|---|---|
| 1 Reliability | ✅ loud | OS/browser frameworks | defends funnel + repricing | content-script era heuristics | flags-first pace vs. regression escapes |
| 2 Vault Health | ✅ specified | low | defends Enhanced Premium |, | shipped fast, below UX bar |
| 3 Organization | ✅ loudest | cross-client item model, crypto pipeline | converts import strategy | 2018 item model | deferred behind platform work |
| 4 Unlock | ✅ persistent | encryption v2 sequencing | rides passkey/crypto programs | legacy unlock states | safety over speed (correct) |
| 5 Passkeys | ✅ growing | partly upstream (OS vendors) | protects flagship bet |, | portability bet accepts compat risk |
