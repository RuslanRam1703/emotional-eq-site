# Lithos Hero

Full-screen hero section for the Lithos geology brand, built with React 18, TypeScript, Vite, and Tailwind CSS. The signature effect is a cursor-following spotlight (`RevealLayer`) that reveals a second background image through a soft, glowing circular mask.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (Vite defaults to `http://localhost:5173/`).

```bash
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Structure

```
index.html
src/
  main.tsx              React entry point
  index.css             Fonts, Tailwind directives, hero animation keyframes
  App.tsx                Root layout (Nav + Hero)
  components/
    Nav.tsx               Fixed top navigation
    Hero.tsx              Hero section: base image, headline, copy blocks, CTA;
                          owns the smoothed cursor-tracking loop
    RevealLayer.tsx       Canvas-driven radial-gradient mask that reveals the
                          second image around the cursor
```

This was not verified with `npm install`/`npm run dev` in the environment it was written in (no Node/npm available there) — please run it locally and report back if anything doesn't compile or render as expected.
