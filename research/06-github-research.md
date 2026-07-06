# GitHub Research
## Issue and repository findings (GitHub API, fetched 2026-07-06)

*Focused extract. Full evidence: [04-full-research-report.md](04-full-research-report.md), sections 2, 5, 6.*

---

## Scale examined

64 repos in the `bitwarden` org; issues mined by 👍-reaction ranking across `clients` (6,455 issues), `android` (2,199), `ios` (267), `server` (1,268), all-time and currently-open; label-class counts; issue templates and closing comments read on the high-engagement items.

## The engagement hierarchy

**All-time leaders are regressions, not requests.** Firefox passkeys broken in v2025.11 (202👍, 108 comments), Android autofill regression 2025.10 (166👍, the highest-engagement mobile issue ever), Chrome slowdown 2026.4 (130👍), extension memory/crash 2025.7 (72👍), Brave autofill 2026.6 (87👍). The community's dominant negative mode is "you broke what worked."

**The top *open* issues are the daily path.** Extension popup delay (#12286, 93👍, 238 comments, since Dec 2024); **no save/update prompt (#1620, 75👍, labeled `ux`, open since 2021**, a five-year-old activation defect); Windows clipboard retains copied passwords (#2621, since 2020); extension slowing the browser (Jun 2026). Android: WhatsApp passkey creation (39👍), biometric settings lost on every app start (#4650), post-redesign autofill breakage. iOS's #1: autofill demanding the master password based on timeout/biometric combinations (#1167).

**Passkey compatibility is a labeled, countable class:** 50 `bug-passkey` issues on Android, 19 open, WhatsApp, Revolut, X, OKX, Grid, Google flows, with competitor defection stated inside reports ("Had to use Proton Pass, which worked fine").

## The process signals

- Feature requests are **disabled on GitHub** (`blank_issues_enabled: false`) and routed to the forum; GitHub is bug intake.
- Every triaged issue gets an internal Jira mirror (`PM-xxxxx`, assigned by bot); templates state work is tracked outside GitHub.
- The org-wide `not-planned` closure count is 2,670, overwhelmingly bugs; exactly **one** `wontfix` label exists in `clients` history (Windows 7). Public "no" is rare by design.
- New-repo creation telegraphs strategy: `mcp-server` (May 2025), `ai-plugins` (Oct 2025), `agent-access` (Dec 2025), the AI-agent credential line was visible in the repo graph before most of it was announced.

## What I take from it

GitHub measures the vocal technical base, and what that base measures is *reliability of the core loop* and *release quality*. The five-year-open save-prompt issue is the single most striking artifact: a defect at the exact point where new users build the vault that retains them, outliving four major release waves.
