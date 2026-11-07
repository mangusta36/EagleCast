# EagleCast SEO implementation report — November 2026

**Work date:** November 6, 2026  
**Scope:** verified, low-risk technical SEO and accessibility improvements only.  
**Deployment:** not deployed by this work.

## 1. Executive summary

The production site is crawlable and its broad branded homepage remains appropriately targeted to `eaglecast tv`. No critical indexability or canonical-host defect was confirmed. Two semantic heading fixes were implemented without changing visual design or business content:

- About-page feature-card headings now follow the page H1 at H2 level.
- Shared footer navigation group labels now use H2 rather than H4, avoiding an otherwise skipped heading level on every route.

The principal ranking constraints remain external and identity-dependent: likely navigational/entity preference for `eaglecast.tv`, the supplied dated authority/link gap, and unverified cross-domain email ownership. These were deliberately not “fixed” with unsupported claims, schema, pages, or content.

## 2. Initial baseline

### Evidence matrix

| Classification          | Finding                                                                                                                        | Evidence / implication                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Confirmed               | Homepage contains the exact brand phrase in title, H1, opening copy, structured data, navigation, and CTAs                     | Source and deployed HTML; H1 remains unchanged.                                                           |
| Confirmed               | Preferred host is `https://www.eaglecastv.online`                                                                              | HTTP redirects to HTTPS; HTTPS apex redirects 308 to `www`.                                               |
| Confirmed               | Production `robots.txt` and `sitemap.xml` return 200                                                                           | Sitemap crawl performed November 6.                                                                       |
| Confirmed               | Current sitemap has **39** URLs, not the prior audit’s approximate 41                                                          | 15 static routes + 3 tutorials + 21 blog URLs.                                                            |
| Confirmed               | All 39 sitemap URLs returned HTTP 200, with one H1, unique title, parseable JSON-LD, and no broken internal destinations found | Bounded production crawl.                                                                                 |
| Confirmed               | Next.js 16.2.12 defaults to slashless route URLs; production canonicals use slashless paths                                    | `next.config.ts` has no `trailingSlash: true`; installed Next.js documentation confirms default behavior. |
| Likely                  | Branded SERP weakness is primarily navigational/entity and authority related                                                   | Dated supplied SERP and SEMrush snapshot; requires GSC query-to-page data to prove.                       |
| Unverified              | Which URLs Google shows for `eaglecast tv` / `eagle cast tv`                                                                   | No authorized GSC export was present.                                                                     |
| Requires owner approval | Whether `support@eaglecast.tv` / `contact@eaglecast.tv` are authorized for this separately canonicalized `.online` site        | Source identifies those addresses, but repository contains no ownership authorization.                    |
| Requires external data  | Backlink quality, exact SERP position, field CWV, index coverage, manual actions, and mobile usability                         | SEMrush/GSC/private account data not available.                                                           |

### Canonical decision

The initial report noticed that source constructs the root canonical with a terminal slash (`lib/seo.ts:24-25`), while production emits `https://www.eaglecastv.online`. This is not a confirmed production inconsistency: Next.js normalizes the metadata URL under its default slashless routing convention, and sitemap non-root URLs and deployed canonicals use that same convention. No source change was made because it would not produce a user-visible or deployed correction. Re-check in GSC URL Inspection after any routing/configuration change.

## 3. Changes implemented

| File                           | Change                                                 | Why                                                                                                                    |
| ------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `app/about/page.tsx`           | Changed the three feature-card labels from H3 to H2    | The document previously went H1 → H3 before its first H2. The cards are top-level sections of this page.               |
| `components/layout/footer.tsx` | Changed `Explore`, `Guides`, and `Legal` from H4 to H2 | The shared footer was a sitewide H2 → H4 skip. The change preserves all classes, copy, links, and visual presentation. |

No pricing, policies, trial terms, contact data, Organization schema facts, brand claims, redirects, sitemap entries, or commercial content changed.

## 4. Technical SEO results

| Area             | Result                                                                                                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Redirects        | HTTP → HTTPS; apex HTTPS → `www` with 308. No host change made.                                                                                                                         |
| Canonicals       | Production sitemap URLs self-canonicalize to slashless preferred URLs; root is slashless in rendered HTML.                                                                              |
| Robots / sitemap | Both available at their expected paths; robots permits crawling and references sitemap.                                                                                                 |
| Indexability     | No normal-route `noindex` found in source or crawler output. 404 remains correctly noindex in source.                                                                                   |
| Metadata         | No duplicate production titles in the 39-URL sitemap crawl.                                                                                                                             |
| Structured data  | All discovered JSON-LD blocks parsed as JSON. Existing Organization/WebSite, FAQPage, BlogPosting, and BreadcrumbList were left unchanged because identity fields require verification. |
| Server rendering | Titles, headings, navigation links, and JSON-LD were present in fetched production HTML.                                                                                                |
| Links            | Every distinct internal target discovered in production HTML returned 200.                                                                                                              |
| Images           | No `<img>` without an `alt` attribute was found in the bounded production crawl.                                                                                                        |

## 5. Homepage and content improvements

No homepage copy or metadata was changed. The existing title, H1, commercial explanation, plans, device coverage, trial and support paths already satisfy the broad branded/service intent without keyword stuffing. The homepage remains the intended destination for the broad `eaglecast tv` and `eagle cast tv` queries.

The About-page heading correction improves screen-reader document navigation; it does not alter copy, claims, CTA behavior, or visual layout.

## 6. Keyword-to-page map

| Keyword cluster / intent                                          | Preferred route                                             | Governance                                                                                                              |
| ----------------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Broad brand: `eaglecast tv`, `eagle cast tv`, `eaglecast tv iptv` | `/`                                                         | Homepage owns broad brand/service evaluation.                                                                           |
| Pricing / subscription                                            | `/pricing`                                                  | Transactional plan terms.                                                                                               |
| Service features                                                  | `/services`                                                 | Feature explanation; supports homepage.                                                                                 |
| Free trial                                                        | `/free-trial`                                               | Distinct trial conversion intent.                                                                                       |
| Contact / support                                                 | `/contact`                                                  | Customer-support intent.                                                                                                |
| Login                                                             | `/login-help`                                               | Narrow account-access support.                                                                                          |
| Portal                                                            | `/portal-help`                                              | Narrow portal/access support.                                                                                           |
| Service status                                                    | `/blog/is-eaglecast-tv-down`                                | Troubleshooting/status intent; not a live monitor.                                                                      |
| Getting started                                                   | `/tutorials/getting-started-with-eaglecast-tv`              | Onboarding/setup intent.                                                                                                |
| Device setup                                                      | Applicable Smart TV, Fire TV, Apple, TiviMate, or app guide | Informational device/app intent.                                                                                        |
| Reviews, legality, legitimacy, app download                       | No new route published                                      | Requires independently verifiable facts and owner approval; do not imply affiliation or publish thin reassurance pages. |

No page is classified as cannibalizing another merely for mentioning the brand. The supplied duplicated SEMrush keyword record remains unresolved until an Organic Positions export includes landing URL, database/device, date, and SERP features.

## 7. Internal linking

The production crawl found 39 unique internal destinations across the sitemap pages; each returned 200. Existing relationships are appropriate: homepage to pricing/services/trial/support; pricing to payment guidance; support to login/portal/status; and device/troubleshooting guides to contextual resources.

No links were added or removed because no broken or clearly unhelpful link was verified.

## 8. Brand and identity issues

**Blocked pending owner confirmation:**

1. Confirm legal/business ownership or authorization for `eaglecast.tv` email addresses used by the `.online` site.
2. Confirm the business’s legal/display name, support email(s), phone/address if any, service geography, and approved social profiles.
3. Confirm whether any app download destination is owned and supported.
4. Provide authentic, permissioned review/reference sources before adding any review or `sameAs` schema.

Until these facts exist, do not change Organization schema, replace emails with invented addresses, state affiliation with `eaglecast.tv`, or use competitor visual/reputation assets.

## 9. Competitor and backlink strategy

The supplied November 4 SEMrush snapshot reports a substantial numerical gap (943 vs. 150 referring domains; 6,800 vs. 248 backlinks). These are estimates, not Google ranking factors or verified sessions, and link quality is unknown.

Safe next steps are to obtain referring-domain, backlink, anchors, target URLs, follow/nofollow, linking-page relevance, quality, and new/lost-link exports. Build links only through relevant editorial coverage, genuine partnerships, useful referenceable resources, verified citations, and authentic customer-feedback processes. No acquisition activity was performed.

## 10. Performance and accessibility

No field CWV claim is made. No Lighthouse/Playwright setup is configured in the repository, so no synthetic browser performance result is reported.

The production HTML check confirmed rendered content and image alt attributes. The two implemented heading-level fixes improve document outline semantics. Mobile layout, keyboard navigation, contrast, real-user CWV, and browser console behavior require a bounded browser test plus field data and remain outstanding.

## 11. QA

| Command / check                                                        | Result                                                                                                                  |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Production sitemap crawl (39 URLs)                                     | Pass: 39/39 HTTP 200; unique titles; one H1 per page; parseable JSON-LD.                                                |
| Production internal-target crawl                                       | Pass: all 39 discovered distinct internal targets returned 200.                                                         |
| `npx prettier --check app/about/page.tsx components/layout/footer.tsx` | Pass.                                                                                                                   |
| `npm run lint`                                                         | Pass.                                                                                                                   |
| `npm run typecheck`                                                    | Pass.                                                                                                                   |
| `npm run build`                                                        | Production compilation completed successfully with Next.js 16.2.12.                                                     |
| Repository-wide `npm run format:check`                                 | Not clean due to pre-existing formatting warnings in `AGENTS.md` and `app/faq/page.tsx`; those files were not modified. |

## 12. Outstanding work

- Request GSC Performance exports (3- and 16-month, US, desktop/mobile) with Query + Page + Date, especially for `eaglecast tv` and `eagle cast tv`.
- Request URL Inspection, Indexing, Sitemaps, CWV, Mobile Usability, Manual Actions/Security, and Links reports.
- Request the SEMrush Organic Positions and backlink-level exports described above.
- Obtain owner confirmations listed in section 8.
- Run a bounded browser/mobile accessibility and performance test once an approved test environment is available.

## 13. Deployment readiness

The two code changes are ready for review: they are small, scoped accessibility-semantic corrections and pass formatter, lint, typecheck, and production-build compilation checks. They have **not** been deployed. Identity- or off-site-dependent SEO work remains blocked pending owner confirmation and external data.
