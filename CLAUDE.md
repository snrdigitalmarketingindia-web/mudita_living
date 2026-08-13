# Mudita Living — Claude Code Project Context

## Client
- **Business:** Mudita Living (muditaliving.com)
- **Founder:** Radhika Avanthsa — ICF-Accredited Life Coach
- **Tagline:** "Ancient Wisdom, Modern Practices" / "Live from the inside out"
- **Based:** Singapore (expanding to India)
- **Audience:** High-performing professionals, executives, C-suite, entrepreneurs

## Project Type
Single-file HTML/CSS/JS website (CSR standard build)
- No frameworks — vanilla HTML, CSS, JS
- Mobile-first, responsive
- SEO optimised
- Payment gateway: Stripe (works in SG + India — no geo issues)

## Brand Colors
```
--burgundy:       #5C1A3A   /* Primary brand */
--dark-burgundy:  #3D1028   /* Headers, hero backgrounds */
--gold:           #B8882A   /* Accents, CTA buttons, icons */
--light-gold:     #D4A84B   /* Headings on dark backgrounds */
--pale-gold:      #E8D49A   /* Subtle accents */
--cream:          #F2E8DC   /* Primary page background */
--cream-2:        #F7F0E8   /* Secondary sections */
--off-white:      #FAF4ED   /* Cards, content blocks */
--muted-brown:    #7A6E65   /* Body text */
--warm-beige:     #DDD0BE   /* Dividers, borders */
```

## Typography
- **Display / Headings:** Cormorant Garamond (Google Fonts)
- **Body / UI / Nav:** Jost (Google Fonts)

### Type Scale
| Level | Font | Size |
|-------|------|------|
| Hero | Cormorant Garamond | 48–64px |
| H1 | Cormorant Garamond | 32–40px |
| H2 | Cormorant Garamond | 24–28px |
| H3 | Jost Bold | 14–16px |
| Body | Jost Regular | 14–16px |
| Caption | Jost Regular | 11–12px |

## Brand Voice
- Warm authority — trusted mentor
- Direct, not preachy
- Warm, not soft
- Intelligent, not academic
- Personal, not clinical
- Empowering, not prescriptive

### Avoid
- Corporate jargon
- Spiritual bypass ("just meditate!")
- Over-promising transformation
- Talking down to high-achievers
- Excessive Sanskrit without explanation

## Pages (9 pages)
1. **Home** — Hero, intro, pillars, social proof, CTA
2. **About** — Radhika's story, credentials, philosophy
3. **Coaching** — Executive Human Performance + Menopause Coaching
4. **Yoga** — Traditional Hatha Yoga & Therapy (online globally, in-person SG via team)
5. **Courses & Pricing** — Yoga Certification, Yoga Therapy, coaching packages
6. **Testimonials** — Client stories and results
7. **Blog** — Articles on wellness, performance, yoga
8. **Contact & Book** — Combined page with booking form + Stripe payment
9. **FAQ** — Common questions

## Services
- Executive Human Performance Coaching (primary)
- Menopause Coaching
- Traditional Hatha Yoga & Therapy
- 1:1 sessions, group sessions, corporate programs
- Courses: Yoga Certification Course, Yoga Therapy Courses
- Membership: TBD

## Payment
- Gateway: **Stripe** (handles SGD + INR, no geo-blocking)
- Installment payments needed
- Subscriptions: TBD
- One-time payments for courses

## Key Messaging
**Pain points:** Running on empty, high-functioning but hollow, burnout, autopilot living
**Outcomes:** Genuine wellbeing, inner clarity, performance without self-destruction

### Signature Phrases (use verbatim)
- "Not fixing — realigning."
- "High functioning on the outside, running on empty within."
- "Built from the inside out."
- "Perform at your best without burning through yourself."
- "Stop managing. Start thriving."

## Assets Location
- `/assets/images/` — client photos, session images
- `/assets/fonts/` — any custom fonts
- `/assets/icons/` — SVG icons
- `/components/` — reusable HTML snippets
- `/pages/` — individual page HTML files

## SEO Notes
- Primary keywords: executive coach Singapore, life coach Singapore, yoga therapy online, menopause coach, human performance coaching
- Target: Singapore + India search audiences
- Meta descriptions needed per page

## Pending Items
- [ ] Client email address
- [ ] Domain: check + buy muditaliving.com
- [ ] Stripe account setup for client
- [ ] Decision: merge Coaching + Yoga or keep separate
- [ ] Membership model decision
- [ ] Photo assets (client to provide or AI-enhance)
