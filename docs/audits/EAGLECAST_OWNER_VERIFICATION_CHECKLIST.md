# EagleCast owner verification checklist

**Purpose:** obtain the facts required before changing public identity, contact, schema, legal, review, or app-related information. This checklist does not assume that `eaglecastv.online` and `eaglecast.tv` are affiliated.

## Required confirmations

| Topic               | Owner question                                                                                                                               | Affected files / fields                                                                    | Status until confirmed |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---------------------- |
| Website domain      | Who owns or is authorized to operate `eaglecastv.online`? What display name should identify that business?                                   | `data/seo.ts`, `components/seo/site-json-ld.tsx`, `app/about/page.tsx`                     | BLOCKED                |
| `.tv` email domains | Is the business authorized to use `support@eaglecast.tv` and `contact@eaglecast.tv`? Are they official support addresses for this website?   | `data/contact.ts`, `data/content-inventory.ts`, footer, contact pages, Organization schema | BLOCKED                |
| Contact channels    | Which email, phone, messaging, and support-hours claims are approved and currently monitored?                                                | `data/contact.ts`, `app/contact/page.tsx`, header/footer, schema                           | BLOCKED                |
| Service regions     | Which countries/regions are actually supported and approved for public claims?                                                               | `data/seo.ts`, homepage, About, services, plans                                            | BLOCKED                |
| Legal identity      | Is there an approved legal business name, jurisdiction, address, or registered entity to publish?                                            | Organization schema, About, policies                                                       | BLOCKED                |
| Social profiles     | Which official profiles may be linked or added to `sameAs`? Provide the exact URLs and account ownership evidence.                           | `components/seo/site-json-ld.tsx`, footer/header                                           | BLOCKED                |
| Reviews             | Which reviews are authentic, permissioned, and attributable under the platform’s rules?                                                      | Any future review content or Review/AggregateRating schema                                 | BLOCKED                |
| Apps/downloads      | Is there an owned/supported app? Provide the official download URL, supported platforms, publisher, version/update policy, and support path. | Any future app-download page, FAQ, navigation, schema                                      | BLOCKED                |
| Commercial claims   | Which service features, support claims, trial terms, payments, refunds, and device compatibility statements are approved and current?        | Homepage, services, pricing, trial, FAQ, policies                                          | BLOCKED for changes    |
| Rights/licensing    | Which rights/licensing statements, if any, have legal approval for public publication?                                                       | Educational/legal content and future schema                                                | BLOCKED                |

## Approval record

For each confirmation, record the approving owner, date, source documentation, exact approved wording, and expiry/review date. Do not treat an email address, a domain match, or a competitor page as ownership evidence.
