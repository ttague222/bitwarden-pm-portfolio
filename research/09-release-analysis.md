# Release Analysis
## Where the engineering actually went, Jan 2025 – Jul 2026

*Focused extract; the month-by-month timeline with sources is preserved in the full research record. Proportions are judgments from shipped-item density, labeled as inference.*

---

## Investment allocation (inferred shares)

| Theme | Share | Anchor evidence |
|---|---|---|
| Enterprise / Admin Console | ~25% | Access Intelligence intro→GA→dashboards; claimed domains; ~10 policies; SIEMs: Sumo Logic, Huntress, Blumira; bulk invites; My Items |
| Passkeys / passwordless | ~15% | Login GA (Nov 25), vault unlock (Jan 26), Windows 11 native provider w/ Microsoft (Mar 26), CXP (Sep 25), portability (Feb 26) |
| Autofill + import/switching | ~15% | 8 new direct importers; click-anywhere fill; fill assist (Jun 26); Android Chrome/Brave integration; card scanning |
| Security hardening / crypto | ~12% | KDF floor 600k; PIN rework; key rotation UI; "encryption v2 preparation"; ETH Zurich audit response; clickjacking fix |
| Platform / rewrite / infra | ~10% | SDK migration across clients; desktop UI overhaul; ARM64; Bitwarden lite GA; Helm v2; AWS/Azure marketplaces |
| Monetization / packaging | ~8% (high strategic weight) | Enhanced Premium at ~2x (Jan 26); paid-only gating (archive, vault health); billing enforcement; in-app subscriptions |
| Developer identity + Secrets Manager | ~8% | SSH agent→org keys→ECDSA; SM got integrations only (Terraform, K8s 1.0, Jenkins) |
| AI-agent security | ~4%, accelerating | MCP server; Agent Access SDK (Jun 26) |
| Authenticator / Send / CLI | minimal | 4 minor Authenticator items; Send feature *removals*; CLI capability removed |

## Cadence observations

- **Monthly trains, year.month versioning, flags-first**, the delivery machine is disciplined and continuous; there is no "big release" culture.
- **Regression escapes cluster on the autofill/passkey path**, 2025.8, 2025.10, 2025.11, 2026.4, 2026.6 each produced a high-engagement breakage. The trains run on time; the brakes on the daily path are the visible quality gap.
- **The 2018 backlog started moving in this window**, archive (Feb 2026), passport item type (Jun 2026), Shared Unlock (Jun 2026), tags announced in progress. Whoever is driving this deserves the community credit; the sequencing question is whether it accelerates.
- **June 2026 was the strategy-density month:** Agent Access SDK, Shared Unlock, key rotation, passport type, fill assist, and the founder's "Accelerating innovation at Bitwarden" post, signals of an organization that believes its platform investments are starting to pay velocity dividends.

## What did NOT ship (absence-of-evidence caveats apply)

No new Secrets Manager core capability; no standalone Authenticator growth; no Send investment (net removals); no offline-editing movement; no dedup/merge tooling (the community PR was closed); no sorting options. The first three read as intentional portfolio focus; the last three read as backlog still awaiting its turn, the distinction matters for prioritization and is drawn from maintainer statements where available.
