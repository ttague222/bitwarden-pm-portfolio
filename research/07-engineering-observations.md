# Engineering Observations
## Constraints and culture, read from PRs, ADRs, and contributing docs

*Focused extract. Full evidence: [04-full-research-report.md](04-full-research-report.md), sections 3, 4, 10.*

---

## The four constraints that shape every roadmap conversation

**1. Encryption migrations dominate.** A live "encryption v2" program (KDF floor forced to 600k, PIN internals rework, key-rotation UI, "stronger encryption for new accounts") consumes platform capacity through 2026. The organization has scar tissue here: a prior key migration locked legacy users out of login entirely (clients#6195), and current migrations ship with client-version fencing (server#6588) and explicit exclusion lists (clients#20831). Anything touching unlock methods, KDF, or key material inherits this program's sequencing. *PM consequence: unlock-adjacent proposals compete for the scarcest capacity in the company; everything else should be designed to avoid the crypto path.*

**2. Per-feature carrying cost is a multiple of the visible diff.** Every PR must ship behind a feature flag (ADR-0018), localized, WCAG AA, tested, documented, across five-plus clients. This is why "small" community features die in review and why cross-client parity arrives in waves (SDK consolidation visible as identical features landing web→extension→desktop→mobile in consecutive months). *PM consequence: sizing instincts calibrated elsewhere will run ~3x low here; scoping single-client pilots is often the right de-risking move.*

**3. Platform vendors are deferred to, not fought.** Google's passkey API policy shaped the allow-list mechanism (community-maintained, a governance pattern worth reusing); Chrome MV3 drove an ADR; the Windows passkey provider was built *with* Microsoft. *PM consequence: mobile capability boundaries are OS-set; honest user communication about upstream constraints is part of the product surface.*

**4. Product holds a real merge gate.** Staff hold even fully code-reviewed community PRs for Product clearance ("leave it a draft until Product has cleared the ticket for merge", clients#15967, the dedup tool, held over data-loss retention priorities and closed after six months). *PM consequence: the Senior PM role includes exercising a public veto with diplomatic cost; the dedup episode is the case study.*

## The two stated non-negotiables

Every maintainer rejection that came with a public reason cited one of two principles: **unintended-data-loss risk** (dedup PR) or **cryptographic soundness** (WebAuthn-via-URI-redirect PR, closed in favor of a native Rust implementation because PRF-based decryption must not transit keys through redirects). Proposals framed to visibly honor these two principles move; proposals that fight them die regardless of demand.

## Culture reading (inference, flagged as such)

The engineering organization optimizes for *never having a catastrophic trust event* over shipping speed, correct for a vault company, and the deep explanation for the 4–7-year lag on popular requests. The failure mode isn't caution itself but *silent* caution: community contributors watch competent PRs age out without a stated "no," which converts engineering discipline into perceived disrespect. A PM who narrates prioritization honestly in public (the way staff did on tags, shared unlock, and the at-risk warnings) buys goodwill the stale-bot spends.
