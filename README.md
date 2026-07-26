# Wang Bohan Portfolio

Independent Astro portfolio for Wang Bohan / 王泊翰.

Positioning: Supply Chain Operations, Analytics & Automation.

## Stack

- Astro static site generation
- TypeScript data files
- Semantic HTML
- Modern CSS with documented design tokens
- Minimal vanilla JavaScript
- Cloudflare Pages target
- No Wix dependencies
- No external fonts, icon CDNs, social embeds, analytics, CAPTCHA or remote production assets

## Local Commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run qa:static
pnpm run audit:china
```

Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

## Editable Content

All résumé and bilingual content lives in:

`src/data/profile.ts`

Update these exports:

- `siteMeta`: page titles, descriptions and sharing image path
- `contact`: email, LinkedIn, GitHub and resume URL
- `hero`: hero wording in English and Chinese
- `about`: About section copy
- `experiences`: timeline entries
- `projects`: case studies
- `capabilities`: capability matrix
- `education`: education entries

## Common Updates

Change wording:

Edit English and Chinese strings in `src/data/profile.ts`.

Add an experience:

Add one object to the `experiences` array. Do not add unverified dates, companies, titles or metrics.

Add a project:

Add one object to the `projects` array and choose a `visual` value. The current visual values are styled with CSS, so no external image is required.

Add contact information:

Replace `contact.email` with a real public professional email. Add `contact.linkedin` and `contact.github` only when ready; empty links are hidden.

Replace the résumé:

Add the verified PDF under `public/downloads/`, then update `contact.resumeUrl`.

Replace project or hero images:

Put optimized images under `public/assets/`, then update the relevant component or `siteMeta.image`. Keep images self-hosted.

Change the domain:

Update `siteMeta.baseUrl` in `src/data/profile.ts`, the fallback `site` in `astro.config.mjs`, and the sitemap URL in `public/robots.txt`. Rebuild and redeploy.

Trigger a new deployment:

Commit and push to `main` after GitHub-connected Cloudflare Pages is configured, or run a direct Cloudflare Pages deployment with Wrangler.

## Design Tokens

The design-token system is in:

`src/styles/tokens.css`

It defines color, typography, layout and motion tokens.

## Motion Code

Motion CSS:

`src/styles/global.css`

Interaction and scroll motion:

`public/scripts/main.js`

Reduced-motion handling is implemented in both files.

## China Compatibility

Run:

```bash
pnpm run build
pnpm run audit:china
```

The generated report is:

`audits/china-compatibility.md`

The production site intentionally avoids Wix, Google services, video embeds, third-party form providers, external font calls, icon CDNs, JavaScript CDNs, social embeds, CAPTCHA and remote images.

## Deployment

Suggested Cloudflare Pages project name:

`wang-bohan-portfolio`

The default production URL should be:

`https://wang-bohan-portfolio.bohan391.workers.dev`

When a custom domain is available, add it in Cloudflare Pages > Custom domains, configure DNS, wait for SSL, then set the custom domain as canonical in the files listed above.
