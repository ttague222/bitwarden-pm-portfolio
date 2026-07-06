# Repository Backlog And Roadmap

*Purpose: manage this assessment like a product. These are the highest-value improvements remaining after the July 2026 executive-edit pass, ordered by expected hiring-manager impact.*

---

## Suggested Implementation Order

1. Add an evidence map to the Executive Summary.
2. Tighten the presentation deck around the central thesis.
3. Add source links to the five opportunity briefs.
4. Create one visual opportunity matrix.
5. Compress the full research report into a sharper appendix.
6. Add "Questions I'd Ask Internally" to each opportunity brief.
7. Strengthen the metrics and validation docs with confidence tiers.
8. Add a short "Why Not Reliability?" sidebar to the flagship recommendation.
9. Produce a PDF-ready executive packet.
10. Run a final external-reader review.

## Backlog

| Order | Improvement | Effort | Impact | Dependencies | Definition of Done |
|---|---|---:|---|---|---|
| 1 | **Evidence map for the executive argument** | M | High | Current Executive Summary, research/04, opportunity briefs | `00-executive-summary.md` includes a compact table mapping each major claim to customer/community evidence, competitive evidence, engineering evidence, business evidence, and confidence. Every recommendation has at least three evidence types or explicitly states the gap. |
| 2 | **Presentation deck thesis pass** | M | High | Revised README and Executive Summary | `communication/18-presentation-deck.md` opens with the central thesis, reduces repeated setup, sharpens the reliability-vs-Vault-Health tradeoff, and makes slide 11 the memorable "auditable guidance" move. Speaker notes still fit a 25-minute talk. |
| 3 | **Inline source-link pass for opportunity briefs** | M | High | Research citations already captured in `research/04-full-research-report.md` | Each of the five briefs links directly to the most relevant source or research section for its top 3-5 claims. No brief relies only on unsourced summary statements. |
| 4 | **Visual opportunity matrix** | S | High | `opportunities/11-executive-opportunity-comparison.md` | Add one scan-friendly matrix showing leverage vs. ownability, with Vault Health in the "best new-PM charter" quadrant and Reliability in the "executive quality program" quadrant. The matrix must make the flagship tradeoff understandable in under 30 seconds. |
| 5 | **Research appendix compression** | L | Medium | All focused research extracts | `research/04-full-research-report.md` becomes less repetitive and easier to scan: stronger headings, fewer repeated PM implications, and a front-loaded "Top 10 evidence artifacts" section. No evidence is deleted unless it is duplicated elsewhere. |
| 6 | **Internal-questions sections for briefs** | S | Medium | Current five opportunity briefs | Each opportunity brief ends with a concise "Questions I'd Ask Internally" section containing 3-5 questions. Questions must be specific enough to show operating judgment, not generic discovery prompts. |
| 7 | **Confidence-tier upgrade for metrics and validation** | M | Medium | `recommendation/14-metrics-framework.md`, `recommendation/15-validation-strategy.md` | Metrics are labeled by measurement tier: server-visible, opt-in client aggregate, external proxy, or qualitative. Validation strategy states which decisions can be made with each tier and which require internal data. |
| 8 | **"Why Not Reliability?" flagship sidebar** | S | Medium | `opportunities/11-executive-opportunity-comparison.md`, `recommendation/13-flagship-recommendation.md` | The flagship recommendation includes a short sidebar explaining why the biggest lever is not the recommended first charter. It should read as a hard tradeoff, not a defensive footnote. |
| 9 | **PDF-ready executive packet** | M | Medium | Finalized README, Executive Summary, Comparison, Flagship, Reflection | Create a clean export packet from existing content: Executive Summary, Comparison, Flagship Recommendation, and Reflection. It should be readable as a standalone 8-10 page package without the full repository. |
| 10 | **External-reader review pass** | M | High | All previous items | A reviewer unfamiliar with the project can answer five questions after 15 minutes: thesis, recommendation, why now, why this PM charter, and what could change the conclusion. Any missed answer becomes a targeted edit. |

## Roadmap

| Phase | Items | Goal |
|---|---|---|
| **Phase 1 - Executive clarity** | 1, 2, 4, 8 | Make the core argument unforgettable and skimmable. |
| **Phase 2 - Evidence credibility** | 3, 5, 7 | Make every major claim easier to audit. |
| **Phase 3 - PM operating signal** | 6, 9, 10 | Show how the repository would be managed, presented, and improved in a real product setting. |

## Backlog Hygiene

- Re-rank this list after each major edit.
- Remove items that no longer improve hiring-manager comprehension.
- Prefer fewer, sharper documents over more coverage.
- Treat this backlog as part of the work sample: the repository should demonstrate judgment not only in the recommendation, but in how the recommendation artifact is managed.
