# Aggie EWOP Website

Source for the Aggie EWOP (Texas A&M's Empowering Women Out of Prison chapter)
website. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) —
a fast, mostly-static site with no backend to maintain.

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build      # outputs a static site to /dist
npm run preview    # preview the production build locally
```

## Where everything lives

This project is set up so that **updating content never means touching page
layout code.** Almost everything an officer would need to change lives in
`src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/team.ts` | Directors, co-chairs, and the faculty advisor. Add/remove people by editing this array — the `/team` page updates automatically. |
| `src/data/pillars.ts` | The four pillars: descriptions, directors, co-chairs, and meeting requirements. |
| `src/data/content.ts` | Impact stats, the recruitment timeline, membership requirements, meeting dates, and the "Why Aggie EWOP" list. |
| `src/data/links.ts` | Email, Instagram/LinkedIn URLs, the application form link, and meeting location. **Update `applicationUrl` before launch** — it's currently a placeholder. |

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
`QuoteBlock`, `StatBand`, `Button`). Layout/structure changes happen here;
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

## Known placeholders to fill in before launch

- `src/data/links.ts` → `applicationUrl` needs the real 5-minute
  application form link (currently a placeholder Google Form URL).
- `src/data/links.ts` → `linkedinUrl` needs to be confirmed.
- The "history" copy on `/about` (both the national EWOP history and the
  Aggie EWOP founding story) is marked `[in brackets]` — replace with the
  real story.
- Team headshots: only Dr. Shannon Deer's photo is wired up currently.
  Drop the rest into `public/images/team/` (see filenames in
  `src/data/team.ts`).

## Deploying

This is a static site, so any static host works. Recommended: **Vercel**
or **Netlify**, both free at this scale, both auto-deploy on every push to
`main`:

1. Push this repo to GitHub (see below if you haven't yet).
2. Go to [vercel.com/new](https://vercel.com/new) (or netlify.com), sign in
   with GitHub, and import this repo.
3. Framework preset: **Astro** (auto-detected). Build command:
   `npm run build`. Output directory: `dist`.
4. Deploy. Every future push to `main` redeploys automatically — no manual
   steps.
5. (Optional) Add a custom domain under the host's project settings once
   you have one.

## Getting this into GitHub for the first time

```bash
cd aggie-ewop-site
git init
git add .
git commit -m "Initial site"
gh repo create aggie-ewop-website --public --source=. --remote=origin --push
```

(No `gh` CLI? Create an empty repo at github.com/new, then:)

```bash
git remote add origin https://github.com/<your-org-or-username>/aggie-ewop-website.git
git branch -M main
git push -u origin main
```

## Making changes going forward

Standard GitHub flow works well even for a small team:

1. `git checkout -b update-team-roster`
2. Edit the relevant file in `src/data/`
3. `git commit -am "Update team roster for Spring 2027"`
4. `git push` and open a pull request (or push straight to `main` if your
   team is small and comfortable with that)
5. Vercel/Netlify auto-builds a preview link for every PR, so you can see
   the change live before merging.
