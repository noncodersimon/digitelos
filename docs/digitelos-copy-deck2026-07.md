# Digitelos - Repositioning Brief & Homepage Copy Deck

Prepared July 2026. This document is the brief for reworking the Digitelos site
(github.com/noncodersimon/digitelos). It contains the positioning, site structure,
full homepage copy, and notes for the remaining pages. Hand this to Claude Code as-is.

---

## 1. Positioning

**One-line pitch:**
Websites and practical digital tools for charities, clubs and small organisations - built quickly, priced plainly, and looked after by someone local.

**Who we serve:** charity trustees, village hall committees, parish groups, sports clubs, and small owner-run businesses in Devon and the South West. The reader is a committee member or volunteer, not an IT buyer. They want a number they can take to a meeting and a person they can phone.

**What makes Digitelos different (in priority order):**
1. Custom interactive tools to meet most specific needs - rota systems, schedulers, booking widgets, calculators. No local competitor offers these.
2. Ongoing care - sites are looked after, not launched and abandoned.
3. A named local person with 20+ years in professional IT service management - things are done properly (backups, security, accessibility, data protection).

**Deliberate omissions:** no AI language in customer-facing copy. No agency jargon ("transform", "digital journey", "solutions"). No stock-photo energy. Plain English throughout.

**Tone:** warm, direct, capable. Short sentences. Use "you/your" and "I" (sole practitioner honesty is a strength with this audience). Short hyphens only - never em dashes.

---

## 2. Site structure

Five pages:

1. **Home** - full copy below
2. **Work** - portfolio, one entry per project
3. **Services & prices** - packages with real numbers
4. **About** - Simon, Slapton, background
5. **Contact** - form + email + phone

Navigation: Work / Services & Prices / About / Contact. Logo links home.

---

## 3. Homepage copy

### Hero

**Headline:** Websites and digital tools for charities, clubs and small organisations.

**Subhead:** Built in weeks, not months. Priced so your committee can say yes. Looked after by someone local.

**Primary button:** See the work
**Secondary button:** Get in touch

### Section: What I do (three columns)

**Websites**
A clean, fast website your organisation can be proud of - and update yourselves. In most cases built on WordPress, so you're never locked in to me or anyone else. From £950.

**Tools & widgets**
The things a normal web designer can't build: booking rotas, session schedulers, sign-up systems, calculators. The small tools that end the laminated-sheet arguments. From £300.

**Care & upkeep**
Updates, backups, security, and a real person to email when something breaks. Most sites fail through neglect, not bad design. Care plans from £40 a month.

**Consulting**
General consulting on how best small and medium businesses can optimise their processes and benefit from technology

### Section: Recent work (proof strip)

*Four entries, each with a screenshot, one line, and a link to the Work page.*

**Save our Shoreline** - a full website rebuild for the Slapton coastal charity: news, campaigns, donations, all manageable by the committee.

**Slapton Village Hall** - a live pickleball rotation scheduler used every week: fair rotations, shared live state, works on any phone. No more paper.

**Totnes & Kingsbridge Catholic parishes** - a complete website serving three churches: Mass times, newsletters, donations, and interactive volunteer rotas the coordinators run themselves.

**Carlane Court** - a holiday let website that takes enquiries and showcases the property, maintained year-round.

### Section: How it works (three steps)

**1. We talk.** A phone call or a cup of tea. You tell me what the organisation needs and what budget the committee has. I tell you honestly what's possible - and if you don't need me, I'll say so.

**2. I build.** Most websites take two to three weeks. Tools often less. You see progress as it happens and nothing goes live without your say-so.

**3. I look after it.** Launch isn't the end. Updates, backups, tweaks and a real person on the end of an email - so the site keeps working long after the launch meeting.

### Section: Why Digitelos

I'm Simon, and I've spent over twenty years managing IT services professionally - including for NHS organisations, councils and schools across the South West. I bring that same care for doing things properly (security, backups, accessibility, data protection) to small organisations that can't afford an agency and shouldn't have to gamble on one.

I live in Slapton, near Start Bay. If you're anywhere in South Devon, we can meet in person.

**Button:** More about me

### Final call to action

**Headline:** Got a website that needs rescuing, or a rota that needs taming?

**Text:** Tell me what's going on. First conversations are free, and honest.

**Button:** Get in touch

---

## 4. Notes for the remaining pages

### Work page
One section per project. Format for each: name, organisation type, the problem in one sentence, what was built, one outcome sentence, screenshot(s), and a testimonial quote where available. Ask each client for a two-line testimonial - committee names carry weight locally. Projects to include: Save our Shoreline, Slapton Village Hall pickleball scheduler, Totnes & Kingsbridge parish website (full site plus rota tools - totneskingsbridgerc.uk), Carlane Court, Desktops for Peace.

Note: ensure every client site carries a discreet "Created by DigiTelos" footer credit linking to digitelos.co.uk (the parish site already has one) - these backlinks matter while the domain is unindexed.

### Services & prices page
Three packages plus care plans. Suggested framing (adjust numbers as Simon prefers):

- **Charity & club website** - from £950. Up to six pages, mobile-friendly, editable by you, training included.
- **Business website** - from £1,400. As above plus enquiry forms, maps, booking or e-commerce basics.
- **Custom tools & widgets** - from £300. Scoped and quoted individually after a conversation.
- **Care plans** - Essentials £40/month (updates, backups, security, small text changes). Standard £75/month (adds an hour of changes monthly and priority response). Setup of hosting/domains included on any plan.

Add a short FAQ: Do I have to use your hosting? (No.) Can we update it ourselves? (Yes - that's the point.) What if we already have a site? (I can rescue, rebuild or migrate it.) Do you work with grant-funded projects? (Yes - and I can help with the application.)

### About page
Simon's story in first person: career in IT service management, the move into building for local charities, why small organisations deserve properly run digital services. Photo. Mention Slapton and Devon repeatedly (good for local search). Note professional background: ITIL-certified service management, NHS/council environments.

### Contact page
Form (name, organisation, what you need, budget range dropdown - helps qualify), plus a direct email address and phone number. Line: "Prefer to talk? Call me, or if you're local we can meet."

---

## 5. Implementation notes for Claude Code

- Keep the existing Fibonacci spiral logo and the cobalt / azure / vermilion / amber palette, but let cobalt/azure dominate; use vermilion sparingly for buttons and amber for highlights only.
- Update the existing page where needed to complement the new pages, and make the overall site slick and beautiful.
- Mobile-first: this audience reads on phones.
- Fast and light: no heavy frameworks needed for a five-page brochure site; static output preferred.
- Basic local SEO: proper titles/descriptions per page, LocalBusiness schema (Slapton, Devon), and location words naturally in copy. Submit to Google Search Console after deploy - the site is not currently indexed.
- Accessibility: semantic headings, alt text, sufficient contrast (check vermilion on white).
- Typography: no em dashes anywhere in rendered copy - short hyphens only.
- Add a simple footer: Digitelos, Slapton, Devon | email | phone | privacy note.
