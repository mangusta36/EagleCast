# EagleCast GSC and SEMrush data request

## Google Search Console

Provide exports for **last 3 months** and **last 16 months**, segmented where available by **United States**, **desktop**, and **mobile**.

| Report         | Required dimensions / columns                                                                             | Required filters                                                                                                                                              |
| -------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Performance    | Query, Page, Date, Device, Country, Clicks, Impressions, CTR, Average position                            | Exact queries: `eaglecast tv`, `eagle cast tv`, `eaglecast tv iptv`, `eaglecast tv login`, `eaglecast tv portal`, `is eaglecast tv down`                      |
| URL Inspection | Google-selected canonical, user-declared canonical, index status, crawl/index dates, rich-result findings | `/`, `/pricing`, `/free-trial`, `/contact`, `/login-help`, `/portal-help`, `/blog/is-eaglecast-tv-down`, and every page appearing for the exact brand queries |
| Indexing       | Indexed/not indexed counts, reasons, examples, validation status                                          | Entire property                                                                                                                                               |
| Sitemaps       | Submitted sitemap status, discovered URLs, errors                                                         | `https://www.eaglecastv.online/sitemap.xml`                                                                                                                   |
| Experience     | Core Web Vitals and Mobile Usability issue exports                                                        | Entire property; retain device dimension                                                                                                                      |
| Security       | Manual Actions and Security Issues status                                                                 | Entire property                                                                                                                                               |
| Links          | Top linked pages, linking sites, top linking text                                                         | Entire property                                                                                                                                               |

Do not infer query performance from page-level averages. Keep export dates, filters, and timezone with each file.

## SEMrush

| Export             | Required columns                                                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Organic Positions  | Keyword, position, previous position, landing URL, date, country/database, device, search volume, intent, SERP features |
| Position history   | Same query/URL detail for `eaglecast tv` and `eagle cast tv` over time                                                  |
| Referring domains  | Domain, linking page, target URL, authority/quality fields, first/last seen, new/lost state, topical category           |
| Backlinks          | Source URL, target URL, anchor, follow/nofollow, type, first/last seen, status, authority/quality fields                |
| Competitor overlap | Shared/missing/weak domains and target URLs                                                                             |

The Organic Positions export is required to determine whether the two dated `eaglecast tv` records are different URL rankings, database/device rows, or duplicated data. SEMrush estimates must remain labeled as third-party snapshots, not actual GSC traffic or Google ranking factors.
