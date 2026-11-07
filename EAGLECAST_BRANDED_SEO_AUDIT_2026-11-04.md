# EagleCast branded SEO audit and ranking analysis

**Snapshot supplied:** November 4, 2026 (SEMrush / GSC).  
**Repository and deployed-site inspection:** November 6, 2026.  
**Scope:** audit only. No application code, metadata, configuration, deployment setting, or content was changed.

## Part 1 — Executive summary

`eaglecastv.online` is technically capable of being indexed and its homepage is clearly about EagleCast TV. It has an exact-match brand phrase in the title, H1, opening copy, structured data, canonical, internal navigation, and visible conversion paths. The supplied position 18/20 records therefore should **not** be explained as a missing primary-keyword H1.

The more credible explanation is a combination of (1) strongly navigational intent that appears to favor the established `eaglecast.tv` entity, (2) the supplied, substantially larger competitor referring-domain/backlink footprint, (3) lower demonstrated external entity signals for this domain, and (4) less mature commercial and support information architecture. The domains must be treated as separate businesses unless ownership/affiliation is independently verified. SEO work must not blur that distinction.

The homepage is the appropriate canonical destination for the broad commercial/navigational query **“eaglecast tv”** for this site. `/pricing`, `/free-trial`, `/contact`, `/login-help`, `/portal-help`, and the branded support articles serve narrower intents; they should not be optimized as alternate broad-brand landing pages. Current shared brand usage is not, by itself, cannibalization.

The immediate technical risk is modest but material: source uses one canonical form with a trailing slash while the deployed rendered canonical observed on November 6 omits it. This does not prove an indexing problem, but it merits a single canonical-form decision and GSC URL Inspection confirmation. The highest-leverage non-code work is evidence-based entity/trust building and legitimate, relevant citations—not more repetitions of “EagleCast TV.”

## Part 2 — Verified findings

### Evidence categories

* **Source-confirmed:** repository files and line numbers below.
* **Deployed-confirmed:** `https://www.eaglecastv.online/` and HTTP headers checked November 6, 2026.
* **Supplied snapshot:** figures and SERP/GSC observations in the audit brief, dated November 4; not re-presented as live measurements.
* **Hypothesis:** an interpretation that needs GSC, server, or backlink-level data to validate.

### Homepage and metadata

| Check | Finding | Evidence | Status |
|---|---|---|---|
| Title | `EagleCast TV \| IPTV Streaming, Plans & Setup` | `app/page.tsx:17-22`; deployed `<title>` | Confirmed |
| Meta description | Exact brand plus IPTV, content, setup, trial and plans | `app/page.tsx:19-20` | Confirmed |
| H1 | `EagleCast TV IPTV Streaming for Live TV, Sports & Entertainment` | `components/sections/home-hero.tsx:35-37`; deployed page | Confirmed |
| Keyword use | Exact phrase appears in title, H1, opening copy, H2s, CTAs, navigation and footer | `home-hero.tsx:32-47`, `iptv-home-sections.tsx`, `header.tsx:46-60`, `footer.tsx:14-35` | Confirmed; broad-page relevance is strong |
| Heading structure | One H1, then topical H2s and feature H3s in deployed HTML | `app/page.tsx:24-43`; deployed page | Confirmed; sample-level accessibility review only |
| Canonical | Source builds `https://www.eaglecastv.online/` for `/`; deployed canonical observed without terminal `/` | `lib/seo.ts:24-25`; deployed HTML | Needs normalization decision |
| Open Graph / X | Title, description, canonical URL, 1200×630 image, `website`, and `summary_large_image` are emitted | `lib/seo.ts:35-55` | Confirmed |
| Robots | Global allow-all and sitemap declaration; deployed `/robots.txt` returns 200 | `app/robots.ts:4-11`; deployed response | Confirmed |
| Calls to action | Trial via WhatsApp and subscription pricing link appear above the fold | `home-hero.tsx:50-67`; deployed page | Confirmed |
| Structured data | Organization, WebSite, FAQPage; articles additionally use BlogPosting and BreadcrumbList | `site-json-ld.tsx:4-27`, `page-json-ld.tsx:24-52`, `app/blog/[slug]/page.tsx:40-69` | Confirmed in source |

### Crawlability, rendering, and deployment checks

* HTTP redirects to HTTPS; apex HTTPS redirects with 308 to `https://www.eaglecastv.online/`. The preferred host is therefore consistent in deployed redirects.
* `https://www.eaglecastv.online/`, `/robots.txt`, and `/sitemap.xml` returned 200; a deliberately nonexistent URL returned 404. These are point checks, not a full crawl.
* The deployed homepage returned title, headings, links, and JSON-LD in crawlable HTML. The main content is not dependent on a client-only render. The header is client-side for menu state (`components/layout/header.tsx:1-19`), but that does not remove its server-rendered nav text from the observed document.
* Sitemap is generated from 15 static routes, 3 tutorials, and the blog array (`app/sitemap.ts:6-41`) and was available at deployment. It includes no explicit `changeFrequency`/priority; that is optional, not a defect.
* No source-level `noindex` was found for normal routes. The 404 metadata is noindex (`app/not-found.tsx:4-13`). Actual indexing state, CWV, mobile usability, and all redirect variants require GSC/crawl evidence.

### Important brand-identity inconsistency to verify

The canonical website is `eaglecastv.online`, while source data preserves `support@eaglecast.tv` and `contact@eaglecast.tv` (`data/content-inventory.ts:33-36`) and the footer prints the former (`components/layout/footer.tsx:22-26`). This is not proof of an affiliation with the competing site. It is, however, a potentially confusing cross-domain identity signal that should be validated by the business owner before publication/structured-data changes.

## Part 3 — Competitive gap analysis

### Supplied dated metrics (do not treat as live)

| Metric | `eaglecast.tv` | `eaglecastv.online` | Reading |
|---|---:|---:|---|
| Authority Score | 24 | 9 | Third-party comparative indicator only |
| Estimated organic traffic | 2,100 | 15 | Estimate, not verified sessions |
| Organic keywords | 206 | 127 | Competitor has broader measured footprint |
| Referring domains | 943 | 150 | Large quantitative gap; quality unknown |
| Backlinks | 6,800 | 248 | Large quantitative gap; quality unknown |
| AI visibility / mentions | 14 / 4 | 0 / 0 | Tool metric, not a Google ranking factor |

The supplied SERP snapshot has `eaglecast.tv` at positions 1, 2, 4 and 5 for the query, plus Facebook and Trustpilot. That pattern is consistent with Google recognizing a destination/entity and offering multiple navigational paths: homepage/commercial plan, getting-started, access plan, channel list, and independent review. It is not evidence that a similarly named separate domain can or should displace the entity result.

Current public inspection also shows the competitor advertising an app ecosystem, plan pages, help/knowledge content, free trial, testimonials, and external Trustpilot presentation. These are observations about its public page, not a finding that its claims or reviews are verified. Do not copy its language, identity, reviews, app naming, or imply a relationship.

### Why the homepage likely does not dominate

1. **High-confidence:** the query is supplied as navigational + transactional, and the competitor owns the shorter exact `.tv` domain and occupies several snapshot results.
2. **High-confidence from supplied data:** materially more referring domains/backlinks likely give the competitor a stronger ability to rank many URLs. Value cannot be assessed without link exports.
3. **Moderate-confidence:** Google may associate the phrase primarily with the competitor’s entity. A search query report and brand/entity checks are required to confirm how often Google chooses each domain.
4. **Moderate-confidence:** the site’s exact-brand commercial coverage is spread across homepage, plans, trial, reseller, service, login, portal, contact, and status content. This is useful for users, but broad generic title patterns across many pages require query-to-URL monitoring.
5. **Not supported:** “the H1 lacks the keyword.” It plainly contains it.

### Content and trust gap

Our repo contains robust general IPTV education, product/pricing, trial, devices, support and legal pages. The competitor’s public footprint appears more mature in app/ecosystem and third-party-reference signals. Legitimate gaps worth evaluating after business verification are: a transparent ownership/about profile, verifiable support/service policies, independently collectable reviews, clearly sourced device/app documentation, and a channel/service-availability explanation that makes no unsupported rights claims. New pages are justified only when the business can provide accurate, distinct information.

## Part 4 — Technical SEO audit

| Severity | Issue / observation | Affected route(s) | Evidence | Recommended validation / remediation |
|---|---|---|---|---|
| P1 | Canonical trailing-slash representation differs between source construction and deployed HTML observation | `/` and likely all routes | `lib/seo.ts:24-25`; deployed homepage canonical | Select one convention, confirm each URL resolves/canonicals consistently, then use GSC URL Inspection. Code access can implement only after approval. |
| P1 | Business/contact identity uses a competitor-looking `.tv` mail domain while public canonical host is `.online` | Sitewide footer/schema/contact surfaces | `data/content-inventory.ts:33-36`, `footer.tsx:22-26`, `site-json-ld.tsx:8-15` | Business owner must verify legal ownership and intended identity before changing claims, email, Organization data, or `sameAs`. Code alone is insufficient. |
| P2 | Organization schema is sparse: only name, URL, SVG logo, email, Telegram; no verified legal identity/address/telephone or proven sameAs profile set | Sitewide | `site-json-ld.tsx:8-25` | Add only business-verified fields and assets that meet schema/search guidelines; test Rich Results/schema validation. |
| P2 | Sitemap static entries have no `lastModified`; this is not an error but makes update signaling weaker where meaningful | Static pages | `app/sitemap.ts:24-41` | Use accurate content-change dates if the editorial workflow can maintain them. Do not fabricate dates. |
| P2 | No source evidence of performance budgets, field CWV, or mobile test results | Sitewide | Repository inspection | Run PageSpeed Insights/CrUX and GSC CWV reports; do not infer performance from local source. |
| P3 | OG default image exists and metadata dimensions are declared, but social crawler fetch/render has not been tested | Sitewide | `lib/seo.ts:21-55`; `public/images/og-default.webp` | Validate a sample URL with platform debuggers. |
| P3 | Full route-status, duplicate-title, and crawl-depth audit was not possible from source alone | All sitemap URLs | `app/sitemap.ts` | Crawl production with a bounded authenticated-free crawl and compare final URL/title/canonical/robots/status. |

No confirmed `robots.txt`, sitemap availability, HTTPS, host redirect, primary 404, or server-rendered-homepage blocker was found. There is no basis here to label CWV, mobile usability, image compression, or duplicate content a confirmed production defect.

## Part 5 — Keyword-to-page map and cannibalization review

### Target clusters

| Cluster | Best page | Intent | Overlap decision / action |
|---|---|---|---|
| `eaglecast tv`, `eagle cast tv` | `/` | Broad brand + commercial navigation | Homepage owns it. Preserve current H1 and commercial summary; do not create a second broad brand page. |
| `eaglecast tv iptv` | `/` | Brand/service evaluation | Homepage is suitable; `/services` supports feature detail. Compare query-level URL selection in GSC before changes. |
| `eaglecast tv reviews`, `is eaglecast tv legit`, `is eaglecast tv legal` | Proposed transparent trust/verification resource only if claims can be substantiated | Commercial reassurance / informational | Do not manufacture a review page, reviews, affiliations, or legality assurance. Existing generic provider-selection content can support user education. |
| `eaglecast tv app download` | No confirmed appropriate page | Navigational/support | Do not create an app-download page unless an owned, safe, supported application and authoritative download path exist. `/login-help`, `/portal-help`, and app guides are not app-download equivalents. |
| `eaglecast tv login` | `/login-help` | Customer support/navigation | Purposefully differentiated; keep it narrow. |
| `eaglecast tv portal` | `/portal-help` | Customer support/navigation | Purposefully differentiated; keep it narrow. |
| `is eaglecast tv down` | `/blog/is-eaglecast-tv-down` | Service-status/troubleshooting | Correctly narrow, and it discloses it is not a live monitor. |
| Setup/device queries | Relevant setup blog/tutorial (e.g. Smart TV, Fire TV, Apple, TiviMate, app comparison) | Informational | Complement homepage; add contextual links from broad device/service pages where useful. |
| Buffering/VPN/error queries | Relevant dedicated articles | Informational/troubleshooting | Complement homepage; avoid re-optimizing homepage for these terms. |

### Relevant branded page inventory

The sitemap contains 41 indexable URLs: 15 static, 3 tutorials, and 23 blog posts. The exhaustive inventory of pages with an exact brand focus is below; general educational posts are intentionally not called cannibalizers merely because they contain branded CTAs.

| Route | Title / H1 evidence | Intent and primary theme | Link relationship / action |
|---|---|---|---|
| `/` | Title/H1 above | Broad brand/service | Hub: links to services, pricing, trial, tutorials, FAQ, blog, contact. Primary branded destination. |
| `/services` | `EagleCast TV IPTV Services & Streaming Features` | Service features | Linked from header/footer/home; supports homepage. |
| `/pricing` | `EagleCast TV IPTV Pricing & Subscription Plans` | Transactional plans | Linked home/header/footer; supports broad query, should own plan terms. |
| `/free-trial` | `EagleCast TV Free IPTV Trial \| Test Before You Choose` | Transactional trial | Linked home/header/footer; distinct trial intent. |
| `/contact` | `EagleCast TV Customer Service and IPTV Support` | Support/contact | Linked prominently sitewide; distinct support intent. |
| `/login-help` | `EagleCast TV Login Help & Account Access` | Login support | Footer/site content; distinct. |
| `/portal-help` | `EagleCast TV Portal Help \| IPTV Setup & Access Guide` | Portal support | Footer/site content; distinct. |
| `/blog/is-eaglecast-tv-down` | `Is EagleCast TV Down? Service Status & Troubleshooting Guide` | Status help | GSC supplied: 3 clicks / 17 impressions / position 3.2; high intent specificity explains performance better than homepage comparison. |
| `/blog/how-to-pay-for-eaglecast-tv-subscription` | Payment guide | Transactional support | Linked from pricing; distinct payment intent. |
| `/tutorials/getting-started-with-eaglecast-tv` | `Getting Started with EagleCast TV: IPTV Setup` | Onboarding | Potential competitor SERP counterpart; keep setup-specific rather than broad branding. |
| `/blog/best-iptv-apps-comparison-tivimate-smarters-xciptv` and device guides | Brand appears in title/CTA | Device/app education | Informational; link upward to service/trial only when contextually helpful. |

The provided duplicated SEMrush `eaglecast tv` rows (positions 18 and 20) cannot be diagnosed from the aggregate table. They might be different landing URLs, SERP feature/device/database rows, or export duplication; they must **not** be counted as two independent keywords. Required check: export Organic Positions with keyword, position, URL, date, database/device, SERP features, and previous position; then compare GSC Queries filtered to the exact query with Pages as the secondary dimension.

## Part 6 — Homepage ranking strategy

**Keep:** the exact-brand title/H1, visible service explanation, plans, device coverage, trial and support paths, strong HTML rendering, canonical host, and contextual internal links. The existing H1 is accurate and sufficiently direct.

**Improve only after validation:** standardize trailing-slash canonical behavior; reinforce one clearly owned business identity; add verified trust details; and make internal links from branded support pages point back to the homepage only with descriptive, natural anchors when a user needs service/pricing context.

**Do not do:** keyword stuffing, cloning competitor copy, creating a fake “official” comparison/alternative page, making affiliation claims, publishing invented reviews, using false Organization schema, or pursuing automated/spam links. None address navigational intent safely.

## Part 7 — Prioritized action plan

| Priority | Action | SEO mechanism / evidence | Complexity / risk | Validation | Code sufficient? |
|---|---|---|---|---|---|
| P0 | Verify whether the `.tv` email/domain is owned and whether all brand claims accurately identify this business | Resolves potentially confusing entity signal; source shows cross-domain email | Low technical / high business-claim risk | Owner documentation; legal/brand approval | No |
| P0 | Export GSC exact-query and URL data; inspect homepage and competing URLs | Determines actual page selection and whether duplicate SEMrush records map to distinct URLs | Low / low | Query+page export and URL Inspection | No |
| P1 | Choose and enforce one trailing-slash canonical/redirect convention | Reduces avoidable canonical ambiguity | Low / low | Production crawl, header test, GSC inspection | Yes, after decision |
| P1 | Build a verified entity/trust evidence plan: About, contact, policies, authentic review collection, authoritative social/citation profile consistency | Supports E-E-A-T-like trust/entity understanding without false affiliation | Medium / business and legal risk | Ownership evidence, profile audit, review-platform rules | Partly |
| P1 | Obtain backlink/referring-domain gap exports and execute editorial/partnership PR only where authentic and relevant | Addresses supplied authority/referring-domain gap | Medium / high spam risk if mishandled | Link trend, quality review, GSC links | No |
| P2 | Establish a query-to-URL governance sheet for broad brand, plans, trial, login, portal, status and device intents | Prevents future cannibalization | Low / low | Monthly GSC query-page review | No |
| P2 | Production crawl all sitemap routes for final URL, status, indexability, title, H1, canonical and duplicate metadata | Converts source inference into deployed evidence | Medium / low | Crawl diff and URL Inspection | No |
| P2 | Review/add schema fields only where independently true | Improves machine-readable identity/content | Low-medium / medium claim risk | Schema Validator, Rich Results Test, manual fact check | Yes, facts required |
| P3 | Assess a separate transparent brand trust/FAQ resource only if it can answer factual questions independently | Fills reassurance intent without thin content | Medium / high reputation/legal risk | Editorial/legal approval and GSC demand | No |

## Part 8 — Missing data

1. GSC Performance export: last 16 months and last 3 months, country US, desktop, Query + Page + Date; exact-query filters for `eaglecast tv`, `eagle cast tv`, login, portal, down, reviews, legal, legit, app/download.
2. GSC URL Inspection for `/`, `/pricing`, `/free-trial`, `/login-help`, `/portal-help`, `/blog/is-eaglecast-tv-down`, and all URLs returned for the exact query.
3. GSC Indexing, Sitemaps, Core Web Vitals, Mobile Usability, manual actions/security, and Links reports.
4. SEMrush Organic Positions export containing URL, keyword, date, database, device, SERP features, position and previous position—needed to reconcile duplicate keyword rows.
5. SEMrush referring-domain/backlink exports: referring domain, linking page, target URL, follow/nofollow, anchor, type, authority/quality measures, topical relevance, first/last seen, lost/new trends, and competitor overlap.
6. Business-verified legal name, ownership, service geography, support channels, social accounts, policies, app ownership/download destinations, and authentic review sources.
7. Field CWV/CrUX and a production crawl; source code cannot establish these.

The supplied GSC page table cannot attribute homepage average position 8.8 to `eaglecast tv`, because its query, date range, and filters were not supplied. Likewise, 1,300 and 1,900 SEMrush volumes are conflicting snapshots/measurements and must be preserved as separate reported values, not averaged or presented as fact.

## Part 9 — Implementation roadmap (no changes made)

**Phase 0 — Evidence and identity.** Obtain the GSC/SEMrush exports, establish business/domain/email ownership, and record approved factual claims. This phase gates all public trust/schema work.

**Phase 1 — Technical consistency.** Confirm canonical/redirect/trailing-slash behavior with a production crawl; approve and make any minimal normalization change; re-inspect in GSC.

**Phase 2 — Intent governance.** Confirm the broad brand homepage as the owner; retain narrow support URLs for login, portal, down, payment and setup; review query-to-page results monthly rather than changing pages based on shared brand mentions.

**Phase 3 — Content and entity credibility.** Improve only substantiated transparency and support resources; publish distinct pages only for verified unmet intent (for example, an owned app/support download path if one exists).

**Phase 4 — Off-site authority.** Pursue earned relevant coverage, partnerships, citations and genuine review processes. Measure referring-domain quality and branded query visibility; do not promise rank or traffic outcomes.

## Direct answers to the required questions

1. The homepage likely loses primarily to navigational/entity preference and authority disparity, with identity consistency and intent governance as secondary factors—not absent keyword use.
2. The homepage is the best page for the broad query; support and transaction URLs own narrower variants.
3. The limitation is likely a combination, led by entity/navigational intent and authority; no critical technical blocker is confirmed.
4. Yes, the competitor’s multi-URL branded SERP presence and shorter matching domain make brand/entity advantage a strong hypothesis, requiring GSC/SERP validation.
5. Specific support articles can satisfy narrow, lower-competition intent. The supplied status article metrics cannot be compared directly with the homepage’s aggregate page position.
6. Source intent differentiation is generally good; shared branding alone does not establish cannibalization.
7. First: homepage canonical/identity validation, then `/pricing`, `/free-trial`, `/contact`, login/portal help, and the status article based on query-page data.
8. Genuine gaps are verified trust/entity information and owned app/download/service documentation only where factual; no speculative pages.
9. Code can standardize canonicals, internal links, structured data, sitemap dates and approved content. It cannot create trust, legal ownership, GSC evidence, quality links, or entity recognition.
10. GSC access, backlink exports, business verification, real external references/reviews, and CWV data require external inputs.
