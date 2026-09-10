# CTA update review

Implemented locally; not deployed.

## Placement audit and changes

| Page / location | Exact action copy | Destination |
| --- | --- | --- |
| Shared desktop/mobile header, all six page types | Start Free (replaces Schedule a Demo) | https://app.invenie.com/create-account |
| Homepage hero | Start Free; See How It Works (replaces unlinked Explore Features) | Signup; index.html#slz7vd7 |
| Homepage after value section | Start Free; See Pricing | Signup; pricing.html |
| Homepage after grouped key features | Start Free; See Pricing | Signup; pricing.html |
| Homepage before footer | Start Free; See Pricing | Signup; pricing.html |
| Solutions hero | Start Free (replaces Explore solutions); View pricing retained | Signup; pricing.html |
| Solutions after solution map | Start Free; See Pricing | Signup; pricing.html |
| Solutions and blog final bands | Start Free; See Pricing (replace demo-only action) | Signup; pricing.html |
| Pricing and FAQs final bands | Start Free; Schedule a Demo (demo is now secondary) | Signup; https://zcal.co/pelumi/30min |
| Each successfully loaded article, after body | Start Free; See Pricing | Signup; pricing.html |
| Pricing cards, retained | Start Free; Choose Growth; Choose Full Operations | Signup; https://app.invenie.com for both paid plans |

“Signup” above always means https://app.invenie.com/create-account, the existing route verified in a live browser. No Starter links go to payment checkout.

The homepage previously had no acquisition action after its value/features or at its ending. Solutions lacked a next action after its solution map. Most other pages ended with demo-only actions. Articles had no contextual next step. Added actions address those decision points, not individual feature cards.

Hero supporting copy: “Free forever · Up to 50 inventory items · No credit card required”. New bands use “Still tracking inventory manually?”, “Start with the essentials.”, “Ready to simplify your inventory?” and “Put these ideas into practice.” Article copy starts “Put this into practice with Invenie.” Free-plan copy distinguishes core inventory from advanced paid workflows.

## Links, mobile and accessibility

- Fixed the missing homepage feature href and removed the hidden placeholder About Us link to #.
- Header CTA sits outside the collapsible menu, visible on desktop and mobile. Compact logo, 44px minimum controls and a consistent 1024px menu breakpoint keep mobile/tablet navigation usable; the previous toggle/menu breakpoints differed.
- Reused pricing-button and pricing-button-white. Darker existing brand teal gives primary labels sufficient contrast; secondary actions use underlined text or existing outline styling. Added keyboard focus outlines.
- All acquisition actions are actual links with visible descriptive labels. Paid plan routes are unchanged.

## Analytics and exclusions

No analytics/event provider or event tracking exists in the available source. No provider or events were added. The pre-existing missing main.umd.js cannot be inspected, so any behavior that once lived there is unknown.

All six public page types now have an acquisition route. Article not-found/load-error states retain recovery content and the shared header CTA; no article-end promotion is rendered in those states. No standalone privacy, terms, about or features pages exist. Navigation, social links and contact-form submission retain their original purpose.

## Files and validation

Changed: index.html, solutions.html, pricing.html, faqs.html, blog.html, article.html, site-header.js, styles.css. Screenshots: output/playwright/cta-*.png.

- Served the static site with Python on localhost:8000; no package.json or build command exists, so build is not applicable.
- Browser checks across all six page types at 1440, 390 and 768px: no page overflow, visible header acquisition CTA, mobile/tablet menu opens and closes. Also checked the header at 320px.
- Inspected desktop/mobile screenshots. Verified keyboard focus styling and the header CTA's computed white-on-teal colors and 46px height. Clicked it and confirmed the signup destination.
- Static internal links and fragment targets resolve. No placeholder acquisition links. All inline JavaScript and site-header.js syntax checks passed; git diff --check passed.
- One pre-existing local console error remains: /public/main.umd.js returns 404 because it is absent from the repository. No new runtime exception observed.
- Design detector ran in degraded regex mode due to missing optional parser modules; browser checks supplied layout verification.

No deployment, account creation or payment was performed.
