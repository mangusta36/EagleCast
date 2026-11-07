# EagleCast TV — GSC-driven homepage actions

**Date:** November 7, 2026  
**Scope:** local homepage improvement; no deployment, URL, price, payment, WhatsApp, contact, or trial-destination changes.

## Confirmed weaknesses

The supplied homepage GSC export records 997 impressions, 16 clicks, 1.6% CTR, and average position 11.48 over the last three months. It establishes opportunity, not a historical decline: the comparison period is zero and cannot support a trend conclusion.

The homepage already addressed broad brand, plans, devices, setup, help, and blog intent. The remaining confirmed discovery gap was narrower:

| GSC query / intent                                                                  |                         Evidence | Homepage action                                                                                                             |
| ----------------------------------------------------------------------------------- | -------------------------------: | --------------------------------------------------------------------------------------------------------------------------- |
| `app.eaglecast.tv` / app guidance                                                   |    34 impressions; position 9.32 | Added a direct link to the existing player-app comparison guide, not an app-download claim.                                 |
| `eaglecast app` / app guidance                                                      |     6 impressions; position 7.83 | Added clear player-app guidance and a FAQ boundary explaining that this site does not host or claim third-party downloads.  |
| `eaglecast tv getting started` / first-use guidance                                 |     6 impressions; position 9.33 | Renamed the setup resource to “Getting started & setup guides.”                                                             |
| `eaglecast tv`, `eaglecast`, `eaglecast iptv`, `eaglecasttv` / brand identification | 185 visible impressions combined | Preserved the existing clear title, H1, canonical, and brand-focused introductory structure; they were already appropriate. |

## Exact implemented changes

In `components/sections/iptv-home-sections.tsx`:

- Added a “Player-app guidance” resource card linking to the existing `/blog/best-iptv-apps-comparison-tivimate-smarters-xciptv` article.
- Renamed “Setup Guides” to “Getting started & setup guides” while retaining the existing `/tutorials` destination.
- Added a homepage FAQ explaining that visitors can use the player-app comparison guide for availability, login compatibility, and publisher checks, while this site does not host or claim third-party app downloads.

These are server-rendered standard internal links. No new page, download, affiliation claim, or commercial path was created.

## Already-correct elements preserved

- Title: `EagleCast TV | IPTV Streaming, Plans & Setup`
- Description: `Explore EagleCast TV IPTV streaming for live TV, sports, movies, catch-up, device setup, trial access, and subscription plans.`
- One clear H1, canonical `https://www.eaglecastv.online`, indexable HTML, Open Graph metadata, and parseable homepage JSON-LD.
- Existing contextual links to plans, tutorials, login help, portal help, FAQ, and blog resources from the prior homepage recovery.
- Next Image hero priority behavior and existing image assets; no dependencies or external assets were added.

## Test results

| Check                 | Result                                                                                               |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| Changed-file Prettier | PASS                                                                                                 |
| ESLint                | PASS                                                                                                 |
| TypeScript            | PASS                                                                                                 |
| Production build      | PASS — Next.js 16.2.12; 47 routes generated                                                          |
| `git diff --check`    | PASS                                                                                                 |
| Local homepage        | PASS — HTTP 200; one H1; expected title, canonical, JSON-LD, and all relevant internal links present |
| JSON-LD parsing       | PASS                                                                                                 |
| Browser automation    | Not run — Playwright/Chromium is unavailable in this workspace                                       |

## Remaining uncertainties

- The supplied GSC data does not establish a decline, exact cause, device split, or canonical-selection issue. Average position is not a fixed rank and visible query rows are not exhaustive.
- The current local changes are not deployed and therefore cannot have affected the reported historical performance.
- No ranking improvement is claimed. US performance remains limited in the supplied export (130 impressions, 5 clicks, position 22.63), but this does not authorize unverified US service, licensing, or rights claims.

## Post-deployment GSC measurement

After the updated homepage is indexed, compare matched periods for the exact homepage URL and Web Search. Segment by United States, device, and the brand variants (`eaglecast tv`, `eaglecast`, `eaglecast iptv`, `eaglecasttv`) plus app/getting-started queries. Track impressions, clicks, CTR, and average position separately; do not infer impact before sufficient post-deployment data exists.
