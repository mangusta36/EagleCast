# New visual direction

EagleCast presents as a calm, established consumer entertainment brand. The design system
borrows discipline from premium consumer companies (Apple, Stripe, Wise, Shopify, Airbnb)
for spacing, typography, product presentation, and conversion flow — never their layout.

## Principles

1. **Typography carries the brand.** Strong heading font, readable body font, confident
   hierarchy. No uppercase tracking spam; sentence-case labels with a small accent dot.
2. **The product is shown, not decorated.** Every visual on the site is a real interface
   (TV guide, EPG rows, live sports, replay timeline, support window, device stage) that
   explains a concrete customer benefit.
3. **Light, warm, and calm.** Warm off-white canvas, soft cream alternating sections,
   white panels, deep navy ink, calm blue action color, fresh green for trust/confirmation,
   a small warm-gold detail. No full-page black, no purple/blue gradients, no neon.
4. **Fewer containers.** Whitespace and editorial rhythm do the work. Cards appear only
   where a discrete surface adds meaning (plans, FAQ, contact form, product screen).
5. **One primary action per stage.** CTAs are placed where the visitor has been given
   enough reason to act. No fake urgency, no countdowns, no invented statistics.
6. **Restrained motion.** Entrance only on the hero, hover/active feedback, smooth menu
   and accordion transitions. `prefers-reduced-motion` is respected globally.

## Color system

| Token            | Value      | Role                                                  |
| ---------------- | ---------- | ----------------------------------------------------- |
| `--color-canvas`   | `#FAF8F3` | Page background, warm off-white                        |
| `--color-canvas-alt`| `#F2EEE6` | Alternate section background, soft cream               |
| `--color-panel`    | `#FFFFFF` | Card / form surface                                    |
| `--color-panel-soft`| `#F6F1E9`| Raised or inset surface                                |
| `--color-ink`      | `#17324F` | Headings and primary text, deep navy                   |
| `--color-ink-muted`| `#5C6B7A` | Secondary text                                         |
| `--color-line`     | `#E7E0D2` | Hairline borders and dividers                          |
| `--color-brand`    | `#2662C6` | Calm blue — primary CTA, links, focus                  |
| `--color-brand-strong`| `#1D4E9E`| Brand hover state                                      |
| `--color-brand-soft`| `#EAF1FB`| Blue tint for subtle highlights                         |
| `--color-mint`     | `#2E8B62` | Fresh green — success/confirmation/trust accents       |
| `--color-mint-soft`| `#E9F3EE` | Green tint                                             |
| `--color-gold`     | `#C07E25` | Warm detail — small highlight only                     |
| `--color-gold-soft`| `#F7EEDC` | Gold tint                                              |
| `--color-coral`    | `#D9644F` | Small warm accent (rare)                               |

Every color has one job. Blue = action. Green = trust/verified. Gold/coral = tiny warm
moments. Navy = reading. Warm neutrals = the space around everything.

## Typography

- **Display:** Instrument Sans (variable, 400–700) — warm, human, geometric. Used for
  headlines and emphasis.
- **Body:** Inter — readable, neutral, industrial counterpoint to Instrument Sans.
- Scale: `40–56px` H1 → `32px` H2 → `24px` H3 → `17–18px` body (1.7 line-height), with
  `13px` muted meta text. Paragraphs capped near `60ch`.
- No uppercase tracking on eyebrows. Labels are sentence-case semibold with a small
  brand-colored dot.

## Layout system

- Wide `max-w-7xl` containers with consistent `px-6 / lg:px-12` gutters and `py-24`-ish
  vertical rhythm. Sections alternate between `canvas` and `canvas-alt` — no `border-t`
  gridlines.
- Variety: editorial split hero → slim trust strip → alternating feature rows (copy +
  real UI visual) → device stage → process timeline → pricing → one large testimonial →
  divider-less FAQ → magazine-style article previews → final CTA band.
- Cards are reserved for plans, FAQ items, the contact form, and on-screen UI mockups.

## Motion

- Hero entrance: one 500ms fade/rise, `prefers-reduced-motion` aware.
- Buttons: color/bg transitions. FAQ: gentle height/rotate. Mobile menu: soft fade/slide.
- Nothing floats, pulses, or loops.

## Accessibility

- Visible `:focus-visible` rings on every interactive element.
- Mobile menu wired with `aria-expanded`/`aria-controls` and Escape close.
- Accordion uses `aria-expanded`, `aria-controls`, `region`.
- Sufficient contrast for all text, including muted and label styles.
- Touch targets ≥ 44px.
