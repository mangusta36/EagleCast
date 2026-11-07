# Two premium blog articles — final content gate

## Final result

**PASS.** Both specified articles meet the mandatory rendered editorial minimum, helpful-content review, and exact contextual homepage-link requirement. No homepage, commercial configuration, contact destination, WhatsApp, payment, trial flow, existing article URL, or unrelated article was changed.

| Article title                                                     | Rendered editorial words | Helpful Content review                                                                                                                                                                         | Exact brand anchor found                            | Homepage link destination        | Final |
| ----------------------------------------------------------------- | -----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------- | ----- |
| IPTV Login Formats Explained: M3U, Xtream Codes, and Portal Setup |                    2,664 | PASS — format recognition, decision guidance, field handling, controlled troubleshooting, verification, and account-security limits are practical and non-speculative                          | PASS — one body link with exact text `EagleCast TV` | `https://www.eaglecastv.online/` | PASS  |
| How to Reduce Mobile Data Use When Streaming IPTV                 |                    2,673 | PASS — bitrate estimates, worked calculations, adaptive-streaming limits, Android/iPhone measurement guidance, hotspot and roaming checks, and a monthly worksheet are practical and qualified | PASS — one body link with exact text `EagleCast TV` | `https://www.eaglecastv.online/` | PASS  |

Word counts were taken from production-rendered `<article>` HTML after excluding scripts, navigation, asides, markup, and sitewide UI. They exceed the required 2,500 visible editorial words per article.

## Content and link verification

- Each article has exactly one H1, a practical table, visible FAQ content, natural calls to action, relevant internal links, and reliable technical-source links already present in the articles.
- The exact-match `EagleCast TV` link is inside the main article body in each route. It renders as a normal HTML anchor to the canonical homepage, with no `target` and no `nofollow`.
- The login article distinguishes playlist URLs, server credentials, and portal workflows without inventing provider endpoints, player support, ownership, or authorization. It directs readers to a legitimate provider when account information is incomplete or contradictory.
- The mobile-data article qualifies every data-use calculation as an estimate. Its formula is `GB per hour ≈ Mbps × 0.45`, supported by worked examples and device-specific measurement guidance rather than unsupported universal claims.
- The two articles remain distinct from existing player-comparison, login-help, portal-help, buffering, and internet-speed pages.

## Image manifest

Each article retains one `1200×630` WebP hero and eight `800×500` WebP section assets. Every section asset is rendered immediately below its associated H2 with descriptive non-empty alt text.

| Article       | Hero (`1200×630`)                 | Section images (`800×500`)                                                                                                                                                                                                                 |
| ------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Login formats | `iptv-login-formats-hero.webp`    | `m3u-playlist-setup.webp`, `xtream-codes-login.webp`, `portal-setup-compatible-player.webp`, `credential-safety.webp`, `login-error-check.webp`, `setup-testing-method.webp`, `account-detail-security.webp`, `login-format-overview.webp` |
| Mobile data   | `mobile-data-streaming-hero.webp` | `mobile-plan-data-check.webp`, `video-quality-data-use.webp`, `wifi-versus-cellular.webp`, `hotspot-streaming.webp`, `app-update-wifi.webp`, `background-data-check.webp`, `unexpected-data-use.webp`, `travel-streaming-checklist.webp`   |

All 18 listed assets were dimension-checked as WebP. Prior visual inspection confirmed distinct, relevant editorial compositions; no working image was regenerated in this final content pass.

## QA completed

| Check                              | Result                                                                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Changed-file Prettier              | PASS                                                                                                                        |
| ESLint                             | PASS                                                                                                                        |
| TypeScript (`tsc --noEmit`)        | PASS                                                                                                                        |
| Full production build              | PASS — 49 routes generated; both article routes are listed as static SSG output                                             |
| Production route responses         | PASS — both article routes returned HTTP 200                                                                                |
| Rendered metadata and canonical    | PASS — canonical URLs match the preserved article URLs                                                                      |
| Rendered JSON-LD                   | PASS — `BlogPosting`, `FAQPage`, and `BreadcrumbList` present on both routes                                                |
| Sitemap                            | PASS — both canonical article URLs present and sitemap returned HTTP 200                                                    |
| Internal article links             | PASS — all checked unique internal article links returned HTTP 200                                                          |
| Image references and alt text      | PASS — hero plus eight section assets per article; all rendered article images had non-empty alt text                       |
| `git diff --check`                 | PASS                                                                                                                        |
| Mobile/desktop Chromium smoke test | NOT RUN — Chromium/Playwright is not installed in this workspace; production HTML was checked through the local Next server |

## Files modified for this task

- `components/blog/rich-text.tsx`
- `data/blog-posts/login-formats.ts`
- `data/blog-posts/mobile-data.ts`
- `docs/audits/EAGLECAST_TWO_PREMIUM_BLOG_ARTICLES.md`

The surrounding article implementation and image assets remain as previously established: `data/blog.tsx`, `app/blog/[slug]/page.tsx`, and the 18 listed files in `public/images/blog/`.
