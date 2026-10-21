# AETHER BIOTEC catalogue

A fast, accessible pharmaceutical catalogue built with Next.js, TypeScript and Tailwind CSS. Product content is maintained locally in `lib/products.ts`; there is no CMS account or server connection to configure.

## Local setup

1. Install dependencies with `npm install`.
2. Optionally copy `.env.example` to `.env.local` and set your public site URL, WhatsApp number in international digits (without `+`), and contact email.
3. Start the website with `npm run dev` and open `http://localhost:3000`.

To add or edit a product, update the `products` array in `lib/products.ts`. Each item has a name, URL slug, category, active ingredient, strength, dosage form, and short description. Add `featured: true` to highlight a product and `imageUrl` to use an image. Keep the catalogue under 20 products, then rebuild and redeploy the site.

## Cloudflare Pages static deployment

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Build output directory: `out`
- Set the optional values from `.env.example` in the Pages project if you use them.

The site uses `output: "export"` and `trailingSlash: true`. The contact form opens a pre-addressed email draft and also offers WhatsApp. Since this is a static site, form submissions are not stored; connect a form service or a Cloudflare Worker if you need submission storage.

## Product information

Product descriptions are sample catalogue copy. Have a qualified regulatory reviewer approve all product names, claims, indications, ingredient details, dosage information, and public-facing disclosures before launch. The site does not give medical advice or provide a purchase mechanism.

## Commands

- `npm run dev` — local website
- `npm run build` — static production build in `out/`
- `npm run lint` — lint the project
