# EagleCast TV homepage SEO recovery

**Date:** November 7, 2026  
**Scope:** local implementation only; no deployment, contact, WhatsApp, pricing, payment, or trial destination changes.

## VERIFIED PROBLEMS

- The local homepage already covers plans, setup, devices, help, and the blog, but its resource hub omitted direct contextual links to pricing, login help, and portal help. Those are high-intent destinations for branded visitors and were therefore harder to discover from the homepage body.
- The hero's short supporting copy emphasized a support interaction rather than explaining the practical research paths available on this website. Its `4K` trust label was not necessary to satisfy intent and was not supported by a scoped product fact.
- The production page is reachable and Google has a current crawl of it, but local changes cannot establish what Google has indexed or why visibility changed. Search Console data was not available.

## IMPLEMENTED FIXES

- Revised the hero supporting copy to explain that visitors can compare published plans, use device/player guides, and find troubleshooting resources before selecting a term.
- Replaced the unscoped `4K` hero label with `Device & Playback Guides`.
- Reframed the service-introduction heading and copy around what visitors can explore on this website rather than a generic “why choose” claim.
- Expanded the existing resource hub from three to six contextual cards. It now links naturally to `/pricing`, `/tutorials`, `/login-help`, `/portal-help`, `/faq`, and `/blog`.
- Changed plan-card internal links from new-tab anchors to standard Next.js links. Destinations and CTA labels were preserved.

## BEFORE / AFTER

| Element                  | Before                                                                                                                           | After                                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Title                    | `EagleCast TV \| IPTV Streaming, Plans & Setup`                                                                                  | Unchanged — concise and intent-aligned               |
| Meta description         | `Explore EagleCast TV IPTV streaming for live TV, sports, movies, catch-up, device setup, trial access, and subscription plans.` | Unchanged — descriptive without an affiliation claim |
| H1                       | `EagleCast TV IPTV Streaming for Live TV, Sports & Entertainment`                                                                | Unchanged — one clear branded H1                     |
| Primary resource heading | `EagleCast TV Setup, Support & Resources`                                                                                        | `EagleCast TV Plans, Setup & Troubleshooting Guides` |
| Hero utility cue         | Included an unscoped 4K label                                                                                                    | Highlights device and playback guides instead        |

## ALREADY CORRECT

- The local homepage has one meaningful H1, static server-rendered primary content, indexable output, Open Graph metadata, valid JSON-LD, and a canonical of `https://www.eaglecastv.online`.
- The hero image uses Next Image with `priority`; its local source file is 139,290 bytes. The device image is 103,710 bytes. No new images, scripts, or dependencies were added.
- Existing homepage sections already expose plans, devices, FAQs, tutorials, and the blog. The change extends discovery rather than duplicating that content.
- Live-page inspection found the same public homepage title/H1 theme. Search results show multiple similarly named domains, so clear page purpose and useful on-site navigation are more defensible improvements than copied competitor claims.

## COMPETITIVE / SEARCH-INTENT FINDINGS

Current results for brand, plan, and setup queries indicate demand for brand identification, plan comparison, device/player setup, and account help. The separate `eaglecast.tv` site emphasizes plans and installation guidance, but its copy and commercial statements were not reused. The local homepage now exposes comparable informational paths using original site content and avoids “official” affiliation claims.

Google's guidance supports investigating traffic changes in Search Console by query, page, country, device, and comparison period; it also recommends helpful, people-first content and descriptive title/link text. See [Google's traffic-drop debugging guide](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops), [helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), and [title-link guidance](https://developers.google.com/search/docs/appearance/title-link).

## UNVERIFIED RANKING HYPOTHESES

- No Search Console access was available, so a decline cannot be attributed to ranking, CTR, search demand, canonical selection, indexing, country/device mix, or competitor visibility.
- Local checks do not prove Google's current indexed HTML, title selection, ranking position, or field Core Web Vitals.
- No claim is made that structured data directly improves rank.

## FILES MODIFIED

- `components/sections/home-hero.tsx`
- `components/sections/iptv-home-sections.tsx`
- `docs/audits/EAGLECAST_HOMEPAGE_SEO_RECOVERY.md`

## VALIDATION

| Check                             | Result                                                                        |
| --------------------------------- | ----------------------------------------------------------------------------- |
| Changed-file Prettier             | PASS                                                                          |
| ESLint                            | PASS                                                                          |
| TypeScript                        | PASS                                                                          |
| Production build                  | PASS — Next.js 16.2.12; 47 routes generated                                   |
| `git diff --check`                | PASS                                                                          |
| Local server-rendered homepage    | PASS — HTTP 200; title, description, H1, resource links, and JSON-LD verified |
| JSON-LD parsing                   | PASS                                                                          |
| Browser mobile/desktop automation | Not run — Playwright/Chromium is unavailable in this workspace                |

## OWNER REVIEW

The local homepage is ready for owner review. The next evidence-based step is a Search Console export segmented by the homepage, `eaglecast tv` and spelling variants, United States, device, clicks, impressions, CTR, and average position over matched periods. No commit, push, deployment, or external configuration change was made.
