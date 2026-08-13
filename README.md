# Mudita Living — Website Project

**Client:** Radhika Avanthsa | ICF-Accredited Life Coach  
**Business:** Mudita Living  
**Tagline:** Ancient Wisdom, Modern Practices  
**Markets:** Singapore + India (global online)

---

## Project Structure

```
mudita-living/
├── CLAUDE.md              ← Claude Code reads this automatically
├── README.md              ← This file
├── index.html             ← Home page
├── assets/
│   ├── brand.css          ← All brand tokens (colors, fonts, spacing)
│   ├── images/            ← Client photos, logo files
│   ├── fonts/             ← Custom fonts if any
│   └── icons/             ← SVG icons
├── pages/
│   ├── about.html
│   ├── coaching.html
│   ├── yoga.html
│   ├── courses.html       ← Stripe payment integration here
│   ├── testimonials.html
│   ├── blog.html
│   ├── contact.html       ← Book a session + contact form
│   └── faq.html
├── components/            ← Reusable nav, footer snippets
└── docs/
    └── project-brief.md   ← Full project brief + checklists
```

## Brand Colors (quick ref)
| Token | Hex | Use |
|-------|-----|-----|
| `--burgundy` | #5C1A3A | Primary brand |
| `--dark-burgundy` | #3D1028 | Headers, hero |
| `--gold` | #B8882A | CTAs, accents |
| `--cream` | #F2E8DC | Page background |
| `--muted-brown` | #7A6E65 | Body text |

## Fonts
- **Cormorant Garamond** — Display/Headings (Google Fonts)
- **Jost** — Body/UI/Nav (Google Fonts)

## Payment
- **Stripe** — handles SGD + INR, no geo-blocking
- See `docs/project-brief.md` for Stripe implementation notes

## Deploying
Recommend **Netlify** — free, global CDN, works perfectly for SG + India audiences.

1. Push to GitHub (`snrdigitalmarketingindia-web/mudita-living`)
2. Connect repo to Netlify
3. Auto-deploys on every push

## Next Steps
See `docs/project-brief.md` for full checklist.
