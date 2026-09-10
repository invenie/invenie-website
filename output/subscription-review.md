# Subscription catalogue update: local review

Implemented locally. Not deployed.

| Plan | Monthly | Annual |
| --- | --- | --- |
| Starter | Free forever | Free forever; no annual plan |
| Growth | NGN 10,000 | NGN 108,000 |
| Full Operations | NGN 15,000 | NGN 162,000 |

One Starter card stays unchanged by the billing toggle. It shows 50 inventory items, one owner, one location, core inventory, stock-in, sales, low-stock visibility, basic dashboard and basic sales history. No credit card or checkout is required. Growth retains the middle-tier operational features; Full Operations retains branch/distribution features. Annual paid savings are 10%.

## Audit and changed files

- `pricing.html`: old catalogue occurred in SEO descriptions, hero copy and price summary, entry/middle plan cards, inherited feature lists, comparison headers, FAQs, CTAs and trial-toggle copy. Updated these; removed Starter packages/AI and active Storefront claims. Added permanent-free positioning, limits, upgrade path, paid-trial eligibility and a separate Storefront Coming Soon FAQ.
- `faqs.html`: updated plan availability, starting prices, annual billing, trial answer, supplier/approval/role answers and closing plan-selection copy. Restricted AI claims to Growth and Full Operations; linked Start Free to signup.
- `solutions.html`: updated description metadata, solution-map tier list and entry-tier label. First solution card now describes confirmed Starter functionality without implying packages are included.
- `blog-posts.json`: corrected present-tense plan claims in “Connecting sales activity to live stock visibility” and “Supplier records are part of inventory memory”. Corrected the all-plans AI claim in “How AI can help teams ask better inventory questions”. These articles present current guidance, not historical pricing records.
- `index.html`: no obsolete catalogue was found. Changed the existing free-start CTA to Start Free, linked verified signup and added permanent-free limits/no-card copy beside the hero action.
- `styles.css`: made the pricing hero-card heading white on its existing teal background. Preserved layout, typography, navigation and responsive styling.

Also audited article.html, blog.html, shared navigation/footer, all CSS/JS/JSON and public assets. No additional catalogue definitions, intentionally historical pricing references or unused plan constants were found. No obsolete commercial references were retained. General inventory and product-pricing terminology in articles remains valid.

## Product evidence and outstanding decision

Read-only verification used the sibling `InvenieAPI - Copy` repository: `SubscriptionPlanCatalog.cs`, `SubscriptionBillingPolicy.cs` and `SubscriptionService.cs`. These confirm prices, Starter limits and AI exclusion, monthly paid 14-day trials and eligibility checks that exclude permanent-free history. No API/application files changed.

The backend retains Storefront capability flags on paid tiers. The explicit brief overrides those for marketing: Storefront is only Coming Soon in the App/Plugin Store. Its future commercial model remains undecided. No tier assignment or price is advertised.

## CTA destinations

- Starter card, homepage and FAQ Start Free: `https://app.invenie.com/create-account`. Followed the application's existing Create account link and confirmed the business/owner signup form.
- Choose Growth and Choose Full Operations: `https://app.invenie.com/`, preserving the existing app entry flow and upgrading HTTP to HTTPS. Confirmed it opens `/login` with account-creation access. No plan query parameters were invented.
- View plans and Compare features remain local anchors. Demo links remain `https://zcal.co/pelumi/30min`.
- No account was submitted, subscription activated or payment initiated. End-to-end activation was not tested.

## SEO and structured data

Pricing title: “Invenie Pricing: Free Inventory Plan & Paid Plans for Growth”. Description and Open Graph/Twitter descriptions state free forever, 50 items, one owner, one location, the three tiers and 10% annual paid savings. Social titles name the tiers. Added canonical `https://invenie.com/pricing.html`. Solutions description replaces obsolete terminology.

No JSON-LD/Product/Offer structured data existed in the six HTML pages; none was introduced. No sitemap files exist in the repository.

## Validation

- Static website: no package.json or build script. Served locally using `python -m http.server 8000 --bind 127.0.0.1`. Build: not applicable.
- Playwright at 1440px desktop and 390px mobile: both billing states and switching back passed. Exact paid amounts verified; Starter remained Free. Final annual check also passed at 320px. No page-level horizontal overflow; the existing comparison table scrolls on small screens.
- Desktop/mobile screenshots inspected. Artifacts: `output/playwright/`.
- Internal page/anchor links resolve across all six HTML pages. App entry/signup routes verified live; pricing CTA hrefs inspected.
- Inline JavaScript syntax, blog JSON parsing and `git diff --check` passed.
- Final source search found no obsolete catalogue names or entry prices. Storefront occurs only in its Coming Soon FAQ, outside comparisons.
- One pre-existing local console 404 remains: `/public/main.umd.js`, referenced by all six pages but absent from the repository. No JavaScript runtime exception was observed. The pricing toggle and shared navigation have their own scripts. The missing shared runtime was not fabricated or removed because its original behavior is unknown.
- Design detector warnings concern incumbent fonts, copy and a pre-existing homepage image without src; retained to respect the narrow design scope.

Local serving and pricing checks passed, subject to the existing missing shared asset. No deployment performed.
