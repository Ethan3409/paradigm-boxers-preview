# Paradigm Boxers — New Website

A 7-page static site (plain HTML/CSS/JS, no build step). Open `index.html`
directly in a browser, or upload the whole folder to any static host
(Weebly's file manager won't work for this — you'll want something like
Netlify, GitHub Pages, or standard web hosting with FTP).

## Pages
- `index.html` — Home
- `about.html` — About Us / founder story
- `our-dogs.html` — Current girls & boys
- `upcoming-litters.html` — Planned pairings & waitlist process
- `puppies.html` — Contract, raw feeding, guardian homes, FAQ
- `legacy.html` — Retired dogs / foundation lines
- `contact.html` — Contact form & details

## What to replace before publishing

**Photos** — every image in `/images` is a real boxer photo used as a
stand-in (sourced from a public dog photo dataset), warm-toned to match
the site. Swap each file for your own photo of the matching dog, keeping
the same filename and it'll drop right in. File names tell you what
they're for (e.g. `girl-riddleigh.jpg`, `hero-main.jpg`).

**Text** — anything in *italics with [brackets]* or marked "Placeholder"
is example copy. Search each HTML file for the word "Placeholder" to find
every spot that needs a real detail: dog bios, health testing results,
litter dates, pricing, deposit amounts.

**Contact info** — email, phone, and social links are currently fake
(`hello@paradigmboxers.example`, `(403) 555-0123`, `#` for social).
Find-and-replace these across all 7 files.

**Contact form** — the form on `contact.html` doesn't send anywhere yet.
Wire it up to a service like Formspree or Netlify Forms (both have free
tiers and just need a form action URL — no server needed).

**Legacy page** — only 6 retired dogs are shown as a sample. Copy a
`.retired-card` block in `legacy.html` to add the rest of your roster.

## Notes
- Fully responsive (phone/tablet/desktop), with a mobile hamburger menu.
- Fonts (Fraunces + Work Sans) load from Google Fonts — needs internet
  access to render correctly; for a fully offline build, self-host the
  font files instead.
- The banner at the top of `index.html` (the "Placeholder site" note) is
  meant to be deleted once real content is in — just remove that one
  `<div class="editnote wrap">...</div>` block.
