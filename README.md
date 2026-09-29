# Aggie EWOP Website

Source for the [Aggie EWOP](https://aggieewop.org) (Texas A&M's Empowering Women Out of Prison chapter)
website. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) —
a fast, static site deployed on [Cloudflare Workers](https://workers.cloudflare.com/).

**Live site:** [https://aggieewop.org](https://aggieewop.org)

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build      # outputs a static site to /dist
npm run preview    # preview the production build locally
npm run deploy     # build + publish to Cloudflare (aggieewop.org)
```

## Where everything lives

This project is set up so that **updating content never means touching page
layout code.** Almost everything an officer would need to change lives in
`src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/team.ts` | Directors, co-chairs, and the faculty advisor. Add/remove people by editing this array — the `/team` page updates automatically. |
| `src/data/pillars.ts` | The four pillars: descriptions, directors, co-chairs, and meeting requirements. |
| `src/data/content.ts` | Impact stats, the recruitment timeline, membership requirements, meeting dates, the "Why Aggie EWOP" list, About-page history milestones, and the applications open/closed flag. |
| `src/data/links.ts` | Email, Instagram/LinkedIn URLs, the application form link, and meeting location. **Update `applicationUrl` before Spring recruiting** — it's currently a placeholder. |

To change a name, a date, a meeting time, or a link: open the relevant file
in `src/data/`, edit the value, save, commit, and push. No other file needs
to change.

### Adding or updating a headshot

Drop the photo into `public/images/team/` using the filename referenced in
`src/data/team.ts` (e.g. `sadie-bubeck.jpg`). If a photo is missing, the
site automatically falls back to a colored initials avatar instead of
breaking — so it's safe to add a new team member before you have their
photo.

### Adding a new page section or component

Page files live in `src/pages/` (one file per route: `index.astro` is the
homepage, `about.astro` is `/about`, etc.) and pull in shared pieces from
`src/components/` (`Nav`, `Footer`, `PillarCard`, `TeamCard`, `Timeline`,
`HistoryTimeline`, `QuoteBlock`, `StatBand`, `Button`). Layout/structure changes happen here;
content changes should still go through `src/data/` wherever possible.

## Design system

Brand colors, fonts, and the signature gradient are defined once in
`tailwind.config.mjs` under `theme.extend` — change a hex value there and
it updates everywhere it's used.

- **Fonts**: Bricolage Grotesque (display/headlines), Karla (body/UI),
  Newsreader italic (pull-quotes) — loaded from Google Fonts in
  `src/layouts/BaseLayout.astro`.
- **Colors**: `rose` (#E9267C), `violet` (#7B3F9E), `sky` (#1C99C2),
  `ink` (#18131C), plus tint/wash variants for backgrounds.

## Known placeholders to fill in before Spring launch

- `src/data/links.ts` → `applicationUrl` needs the real 5-minute
  application form link (currently a placeholder Google Form URL).
- `src/data/links.ts` → `linkedinUrl` needs to be confirmed.
- `src/data/content.ts` → set `applicationsOpen` to `true` when recruiting reopens.

## Deploying

The site is hosted on **Cloudflare Workers** with static assets, on the
custom domain **aggieewop.org** (and `www`). Config lives in `wrangler.jsonc`.

### Deploy from your machine

```bash
npx wrangler login    # once per machine
npm run deploy        # builds to /dist and publishes
```

That publishes to:

- https://aggieewop.org
- https://www.aggieewop.org
- https://aggie-ewop-site.hasnain-rizvi.workers.dev

### After content changes

1. Edit files in `src/data/` (or pages/components as needed)
2. Commit and push to `main` on GitHub
3. Run `npm run deploy` so Cloudflare picks up the new build

(Optional later: wire [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
so every push to `main` deploys automatically.)

## Making changes going forward

1. `git checkout -b update-team-roster`
2. Edit the relevant file in `src/data/`
3. `git commit -am "Update team roster for Spring"`
4. `git push` and open a pull request (or push straight to `main` if your
   team is small and comfortable with that)
5. Run `npm run deploy` after merging so the live site updates
