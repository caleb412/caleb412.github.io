# Caleb Chanda — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**, styled with the *Portfolio Template* design system (monochrome palette, diagonal hero split, display fonts).

## Run it

Requires Node.js 20.9+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # TypeScript only
```

## Where things live

| Path | What |
|---|---|
| `src/content.ts` | **All text and links.** Edit this first; search for `TODO`. |
| `src/app/globals.css` | Design tokens in Tailwind's `@theme` block, plus a few shared classes (`.glass`, `.bg-hero-split`, `.nav-link`, `.reveal`). |
| `src/app/fonts.ts` | Loads Poppins and the display fonts with `next/font/local`. |
| `src/app/layout.tsx` / `page.tsx` | Root layout and the single page that stacks the sections. |
| `src/components/` | One component per section: `Navbar`, `Hero`, `About`, `Experience`, `Skills`, `Projects`, `Contact`, `Footer`; helpers `Section`, `SectionHeading`, `Reveal`. |
| `src/components/canvas/TechBalls.tsx` | The floating 3D logo balls (three.js via React Three Fiber + drei). |
| `public/` | Logos, icons and background images. |

## How the tokens work

Tailwind v4 is configured in CSS, not in `tailwind.config.js`. Every variable in `@theme` becomes utilities:

```css
--color-eerie-black: #1f1f1f;   /* → bg-eerie-black, text-eerie-black, border-eerie-black */
--radius-card: 24px;            /* → rounded-card */
--shadow-project: …;            /* → shadow-project */
--font-beckman: …;              /* → font-beckman */
--breakpoint-xs: 450px;         /* → xs:… prefix */
```

The design system's camelCase names are kebab-cased here (`eerieBlack` → `eerie-black`, `timberWolf` → `timber-wolf`).

**Contrast rule:** on light surfaces (`flash-white`) use `eerie-black` for text and `dim` for muted text. `taupe` and `french` only pass on dark surfaces (`night`, `jet`, `eerie-black`).

## The 3D technology balls

`Skills.tsx` loads `canvas/TechBalls.tsx` on the client only (`next/dynamic` with `ssr: false`), because three.js needs WebGL in the browser.

- Each ball is an icosahedron with the logo applied as a `Decal`, wrapped in drei's `Float` for the bobbing animation, with `OrbitControls` so mouse users can drag to spin it (off on touch screens so swiping still scrolls the page) (ported from the original template's `Ball.jsx`).
- **One shared canvas.** The original template created one `<Canvas>` per ball. Browsers allow only about 16 WebGL contexts per page, and each one costs memory, so here every ball is a drei `<View>`: a normal DOM box whose scene is drawn into the matching rectangle of a single fixed, full-screen canvas.
- Animation runs only while the section is on screen, stops for visitors with reduced motion enabled, and falls back to flat logos if WebGL isn't available.
- Don't wrap `TechBalls` in `<Reveal>` or anything with a CSS `transform`: a transformed ancestor breaks `position: fixed` on the canvas.
- To add a technology: drop a white-on-transparent square PNG into `public/tech/` and add it to `technologies` in `src/content.ts`. The logos are from [Simple Icons](https://simpleicons.org) (CC0); the brands' trademarks belong to their owners.

## Fonts

All fonts are bundled in `src/app/fonts/`, so builds don't need network access to Google Fonts.

- **Poppins** — SIL Open Font License (`fonts/poppins/OFL.txt`), free for any use.
- **Mova, Beckman, Arenq, Overcame** — copied from the original template repo, which doesn't state their licenses. Many display fonts are free for personal use only. Before you publish, look up each font's license, or swap it for a Google Font with a similar feel (change one line in `fonts.ts`).

## Things to do next

1. Fill in the `TODO`s in `src/content.ts`: dates, GitHub/LinkedIn/CV links, project links.
2. Add project screenshots to `public/projects/` and set `image: '/projects/erva-learn.png'` on each project.
3. Replace the placeholder logo in `public/logos/` and `src/app/icon.png` (favicon) with your own mark.
4. **Wiring the contact form:** it currently opens the visitor's email app (`mailto:`). To send messages server-side, add a Route Handler (`src/app/api/contact/route.ts`) that validates the input and sends mail through a provider (Resend, Postmark, SMTP), and `fetch` it from `Contact.tsx`. Add rate limiting or a honeypot field against spam.
5. Deploy: Vercel works with zero config. Or, since you already run Docker + Nginx, set `output: 'standalone'` in `next.config.ts` and containerise it next to your other services.

## Credits

The visual design comes from [shaqdeff/Portfolio-Template](https://github.com/shaqdeff/Portfolio-Template) (MIT). This is a rewrite in Next.js/TypeScript with new content. Its author asks for credit if the design is used largely unmodified.
