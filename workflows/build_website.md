# Workflow: Build Frontend Website

## Objective
Build and maintain the Pro Nails static website — a multi-page HTML/CSS/JS site for a nail salon in Queen Anne, Seattle.

## Required Inputs
- Brand Identity (colors, fonts, logo): `brand_assets/Brand_Identity.png`
- Wireframe / design reference: `brand_assets/Landing page.png`
- Logo file: `brand_assets/Pronails_logo.png`
- Nail art photos: `images/nail1.png` through `images/nail5.png`
- Local font files: `fonts/` (Instrument Serif, PT Sans Narrow, Sofia Sans Extra Condensed)

## Pre-Flight Checklist (run before every build session)
1. Invoke `/frontend-design` skill — read `SKILL.md` at `.claude/skills/frontend-design/SKILL.md`
2. Read `CLAUDE.md` — understand WAT framework constraints
3. Read this workflow — confirm inputs exist and directory structure is in place

## Directory Structure (per CLAUDE.md)
```
.tmp/           # Screenshots, intermediate exports — disposable
tools/          # Python scripts for any deterministic execution
workflows/      # This file and other SOPs
brand_assets/   # Client-supplied design files (read-only)
fonts/          # Local font files (read-only)
images/         # Client nail art photos (read-only)
```

## Site Structure
| File | Page | Status |
|------|------|--------|
| `index.html` | Home — hero + photo strip carousel | Built |
| `services.html` | Services & Pricing | Built |
| `booking.html` | Book an Appointment (static form + calendar) | Built |
| `about.html` | About Us | Built |
| `contact.html` | Contact | Built |
| `styles.css` | Global stylesheet | Built |
| `script.js` | Carousel, calendar, mobile nav, form handling | Built |

## Brand Rules (never deviate without client approval)
- **Red**: `#D40A06` — primary accent, CTAs, prices, eyebrow labels
- **Cream**: `#F3EFE7` — hero backgrounds, section alternates, nav
- **White**: `#FFFFFF` — cards, form fields, content backgrounds
- **Dark**: `#302828` — body text, footer, headings
- **Header font**: Instrument Serif (regular + italic) — h1 only; italics for highlighted words
- **H2/label font**: Sofia Sans Extra Condensed Black (900 weight) — ALL CAPS always
- **Body font**: PT Sans Narrow (400/700) — all body copy, form elements

## Key Design Decisions
- Hero text is exact from wireframe: "Generations of *nail care*, right in *Queen Anne*."
- Photo strip: 10 images (nail1–5 × 2), `translateX` driven by `scrollY * 0.6`
- Fonts loaded locally from `fonts/` — no Google Fonts CDN dependency
- Placeholder interior photos use `picsum.photos/seed/[name]/[w]/[h]` — replace with real salon photos before launch
- Calendar closes Sundays (salon closed), greys out past dates

## How to Preview the Site
```bash
open index.html
```

## Things to Do Before Launch
- [ ] Replace `picsum.photos` placeholder images with real salon interior photos (About page × 3)
- [ ] Replace placeholder address/phone/email with real contact info
- [ ] Connect booking form backend (backend TBD)
- [ ] Add real Google Maps embed to Contact page
- [ ] Add Instagram/Facebook/Yelp links to footer
- [ ] Confirm hours with client

## Edge Cases & Learned Constraints
- Font file path: must be relative from the HTML file location (all HTML at root, so `fonts/...` works)
- Sofia Sans Extra Condensed Black static file: `fonts/Sofia_Sans_Extra_Condensed/static/SofiaSansExtraCondensed-Black.ttf`
- Photo strip scroll math: `strip.scrollWidth - window.innerWidth` = max translate; multiply scrollY × 0.6 felt natural at this strip height
- Screenshots for verification go to `.tmp/` not `/tmp/`
