# EagleCast visual design audit

Audit date: August 2026
Scope: every route, layout component, and public visual in the EagleCast Next.js project.

## Summary

The site is functionally complete and content is well preserved, but the visual layer
reads as a generic, AI-assisted marketing template. The same few shapes, labels, and
section shells are repeated on every page, the brand accents are inconsistent (three
unrelated blue/cream values plus a disconnected dark + yellow theme on error, legal,
loading, and trial pages), and the hero — the highest-leverage surface on the site —
does not communicate a believable product.

## AI-generated patterns found

1. **Repeated rounded cards everywhere.**
   Every section is a `rounded-[24px]–[36px]` bordered panel on `--surface` with
   `shadow-sm`. Cards are nested inside cards inside cards (homepage device + services +
   about + pricing + blog + tutorials + FAQ + contact). This is the single strongest
   "template" signal on the site.

2. **Uppercase + `tracking-[0.3em]` micro-labels used as the only heading system.**
   The string `tracking-[0.3em]` appears in nearly every section and card ("PREMIUM IPTV
   SERVICE…", "INCLUDED", "SETUP IN MINUTES", "FREE TRIAL", "EXPLORE", "SUPPORT", "LEGAL"…).
   It is the default AI shortcut for "make it look designed" and adds noise, not hierarchy.

3. **Random gradients used as decoration.**
   - Body background: `radial-gradient(blue) over linear-gradient(cream)`.
   - Hero: `linear-gradient(135deg, …)`.
   - Free-trial, legal, loading, error, and 404 pages: hard-coded dark `#06070a / #05070b`
     panels with `#f2c94c` yellow — a completely different brand theme bolted on top of the
     light warm theme. The `manifest.ts` `theme_color` is also dark.
   - Hero product visual: a blurred blue→green gradient panel.
   These gradients have no meaning; they just suggest "decorate the empty space".

4. **Hero does not show a product.**
   The hero right column is a floating "TV-like" rounded box containing an abstract SVG
   of rectangles. It does not explain live TV, the guide, sports, or any real benefit.
   Trust is communicated with three pill badges that look like templated chips.

5. **Fake/meaningless dashboard widgets.**
   `hero-visual.svg` and `about-visual.svg` are abstract rectangles arranged to imitate a
   dashboard without representing a real screen.

6. **Identical section layouts.**
   Services, devices, pricing, testimonials, blog, tutorials, and FAQ all use the same
   three-card / bordered-panel pattern with the same padding and shadows. There is no
   editorial rhythm or alternation.

7. **Decorative blobs / floating glass chips.**
   The hero overlays translucent floating chips over the product visual; the product
   visual is a "floating glass panel" with a large blur.

8. **Empty marketing language.**
   "A calm, premium streaming experience built around trust and simplicity", "designed
   around convenience and confidence", "keeps the experience effortless and modern" —
   repeated adjectives with no concrete customer benefit. Several sections (FAQ, support,
   trial) restate the same vague promise.

9. **Button pattern is uniform and noisy.**
   Every `ButtonLink` is a pill with an auto-appended `ArrowRight`, used for both primary
   and secondary actions, including "Contact support" and "Read FAQ".

10. **Blog/tutorial cards look like pricing cards.**
    Same 28px-rounded bordered panel as plans; no featured article, no imagery, no
    editorial hierarchy.

11. **`border-t` gridline on every section.**
    A divider line above every section makes the page look like stacked strips rather than
    one composed page.

12. **Layout inconsistency.**
    Inner content uses `max-w-7xl` with `px-6 sm:px-8 lg:px-12` repeated verbatim, but page
    heroes, forms, and legal pages all re-declare their own widths.

13. **Accessibility gaps.**
    - Mobile menu button label never changes between "Open" and "Close".
    - FAQ accordion lacks `aria-controls`/region wiring and renders a single panel at a time.
    - `PageHero` wraps title/description in a card with no landmark improvements.
    - Focus rings are only visible on a few links.

## Visual inconsistencies

- Brand blue appears as `#3c6dd8` (accent) but also `#2f74ff` (BRAND_SYSTEM) and `#f2c94c`
  yellow on dark pages — three disconnected brand systems.
- Cards use three different background shades with no stated rule (`--surface`, `--surface-alt`,
  `--surface-strong`, `--section-bg`).
- The logo/favicon is a black rounded square with a yellow bolt on a dark `#05070b` tile —
  dark-theme styling that contradicts the light warm page.

## What to keep

All business content, routes, metadata, pricing data, contact information, blog/tutorial
content, forms, structured data, redirects, sitemap, and robots are correct and should be
preserved. The redesign must replace the visual layer only.
