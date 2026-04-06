# LIFETOUR — Mountain Tourism Landing Page

A responsive one-page website for a hiking and mountain tourism company. The site presents upcoming tours, instructors, company info, customer reviews, and a contact form, with full Russian/English language switching.

## Stack

- **HTML5** — semantic markup, BEM methodology
- **SCSS** — modular styles, BEM naming
- **JavaScript (ES modules)** — vanilla JS, no frameworks
- **Vite** — dev server, bundling, image optimization
- **Swiper** — touch-friendly sliders
- **PostCSS / Autoprefixer** — CSS post-processing
- **BackstopJS** — Pixel Perfect visual regression testing

## Features

- **Responsive layout** — mobile (320px), tablet (768px), desktop (1440px)
- **Hero slider** — full-screen slides with Caucasus, Kamchatka, and Altai tours; custom animated bullets
- **Tours section** — swipeable cards with difficulty, dates, and group size
- **Instructors slider** — trainer profiles with photos and social links
- **Reviews slider** — customer testimonials
- **Advantages section** — safety, expertise, equipment, custom routes, eco-responsibility
- **Photo gallery** — responsive image grid
- **Contact form** — client-side validation
- **i18n (RU / EN)** — JSON-driven language switcher; translates text content, attributes (`alt`, `aria-label`, `content`), and Swiper bullets; persists preference in `localStorage`
- **WebP images** — `<picture>` elements with WebP + JPEG/PNG fallbacks, 1x/2x srcsets
- **SVG sprite** — icon system assembled from `source/img/sprite/`
- **Font preloading** — Montserrat (Regular → ExtraBold) via `<link rel="preload">`

## Getting Started

Requirements: Node.js 18+

```shell
npm install
npm run dev        # start dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Additional Commands

| Command | Description |
|---|---|
| `npm run convert-rastr` | Convert raster images to WebP |
| `npm run test` | Pixel Perfect testing (requires dev server on port 3000) |
| `npm run w3c` | W3C HTML validation |
| `npm run linthtml` | HTML lint |
| `npm run html-validate` | HTML validate |
| `npm run lint-bem` | BEM compliance check |
| `npm run stylelint` | SCSS lint (auto-fix) |
| `npm run lint-js` | ESLint (auto-fix) |
| `npm run ls-lint` | File/folder naming check |
| `npm run editorconfig` | EditorConfig compliance check |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Project Structure

```
source/
├── index.html          # single page entry point
├── js/
│   ├── main.js
│   └── modules/
│       ├── translate-page.js   # i18n logic
│       ├── burger-menu.js
│       ├── form-validate.js
│       ├── swiper-hero.js
│       ├── swiper-tours.js
│       ├── swiper-gallery.js
│       ├── swiper-reviews.js
│       └── swiper-trainers.js
├── sass/               # SCSS styles (BEM blocks)
├── img/                # images and SVG sprite sources
├── fonts/              # Montserrat woff/woff2
└── public/
    └── translations.json   # RU/EN translation strings
```
