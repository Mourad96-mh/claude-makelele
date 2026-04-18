# CLAUDE.md — ClaudeMakélélé.com

> Guide de développement pour Claude Code.
> Site officiel de Claude Makélélé — légende du football mondial.

---

## 🎯 Vue d'ensemble du projet

**Nom du projet :** ClaudeMakélélé.com  
**Type :** Site officiel d'athlète (React JS SPA)  
**Domaine :** ClaudeMakélélé.com  
**Langue principale :** Français (contenu bilingue FR/EN possible)  
**Sujet :** Claude Makélélé — footballeur professionnel français, icône du Real Madrid, Chelsea, PSG et de l'équipe de France

---

## 🏗️ Stack technique

```
Framework        : React 18 + Vite
Routing          : React Router v6
Styling          : Pure CSS (CSS custom properties + CSS Modules)
State management : Zustand (panier boutique, UI)
Formulaires      : React Hook Form + Zod
i18n             : react-i18next (FR/EN)
Icônes           : SVG inline (aucune lib externe)
Images           : Lazy loading natif (loading="lazy")
SEO              : React Helmet Async
Galerie médias   : Lightbox maison en CSS + JS natif
Carrousel        : CSS Scroll Snap natif
Animations       : CSS uniquement (@keyframes, transitions, custom properties)
```

> **Règle absolue :** Aucune lib de style externe.
> Pas de Tailwind, pas de Bootstrap, pas de Framer Motion, pas de styled-components.
> Tout le design est écrit en CSS natif avec des custom properties et des CSS Modules.

---

## 📁 Structure du projet

```
claudemakelele.com/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg              # Image Open Graph (1200×630)
│   ├── noise.png                 # Texture grain (200×200, très légère)
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── videos/
│   │   └── fonts/                # Bebas Neue, DM Sans, Playfair Display (.woff2)
│   │
│   ├── styles/
│   │   ├── globals.css           # Variables CSS, reset, typo
│   │   ├── animations.css        # Tous les @keyframes du projet
│   │   ├── layout.css            # Grids & containers réutilisables
│   │   └── utilities.css         # Classes utilitaires CSS
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx + Navbar.module.css
│   │   │   ├── Footer.jsx + Footer.module.css
│   │   │   └── PageWrapper.jsx + PageWrapper.module.css
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx + Button.module.css
│   │   │   ├── Badge.jsx + Badge.module.css
│   │   │   ├── Card.jsx + Card.module.css
│   │   │   ├── Modal.jsx + Modal.module.css
│   │   │   ├── Loader.jsx + Loader.module.css
│   │   │   └── SectionTitle.jsx + SectionTitle.module.css
│   │   │
│   │   └── shared/
│   │       ├── HeroSection.jsx + HeroSection.module.css
│   │       ├── NewsCard.jsx + NewsCard.module.css
│   │       ├── ProductCard.jsx + ProductCard.module.css
│   │       └── SocialFeed.jsx + SocialFeed.module.css
│   │
│   ├── pages/
│   │   ├── Accueil/
│   │   │   ├── index.jsx + Accueil.module.css
│   │   │   └── sections/
│   │   │       ├── HeroBanner.jsx + HeroBanner.module.css
│   │   │       ├── KeyStats.jsx + KeyStats.module.css
│   │   │       ├── LatestNews.jsx + LatestNews.module.css
│   │   │       ├── QuoteSection.jsx + QuoteSection.module.css
│   │   │       └── CTASection.jsx + CTASection.module.css
│   │   │
│   │   ├── Actualites/
│   │   │   ├── index.jsx + Actualites.module.css
│   │   │   ├── ArticleDetail.jsx + ArticleDetail.module.css
│   │   │   └── PressKit.jsx + PressKit.module.css
│   │   │
│   │   ├── Biographie/
│   │   │   ├── index.jsx + Biographie.module.css
│   │   │   └── sections/
│   │   │       ├── Timeline.jsx + Timeline.module.css
│   │   │       ├── Clubs.jsx + Clubs.module.css
│   │   │       ├── Palmares.jsx + Palmares.module.css
│   │   │       └── StyleTactique.jsx + StyleTactique.module.css
│   │   │
│   │   ├── Media/
│   │   │   ├── index.jsx + Media.module.css
│   │   │   └── sections/
│   │   │       ├── PhotoGallery.jsx + PhotoGallery.module.css
│   │   │       ├── VideoGallery.jsx + VideoGallery.module.css
│   │   │       └── PressPhotos.jsx + PressPhotos.module.css
│   │   │
│   │   ├── Boutique/
│   │   │   ├── index.jsx + Boutique.module.css
│   │   │   ├── ProductDetail.jsx + ProductDetail.module.css
│   │   │   ├── Cart.jsx + Cart.module.css
│   │   │   └── Checkout.jsx + Checkout.module.css
│   │   │
│   │   ├── ReseauxSociaux/
│   │   │   └── index.jsx + ReseauxSociaux.module.css
│   │   │
│   │   └── Contact/
│   │       └── index.jsx + Contact.module.css
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   ├── useIntersectionObserver.js  # Animations au scroll
│   │   ├── useMediaQuery.js
│   │   └── useCart.js
│   │
│   ├── store/
│   │   ├── cartStore.js
│   │   └── uiStore.js
│   │
│   ├── data/
│   │   ├── timeline.js
│   │   ├── clubs.js
│   │   ├── trophies.js
│   │   ├── products.js
│   │   └── news.js
│   │
│   ├── utils/
│   │   ├── formatDate.js
│   │   ├── formatPrice.js
│   │   └── seo.js
│   │
│   ├── i18n/
│   │   ├── fr.json
│   │   └── en.json
│   │
│   ├── router/
│   │   └── index.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── index.html
├── vite.config.js
├── package.json
└── CLAUDE.md
```

---

## 🗺️ Pages & routes

| Page                     | Route               | Description                                            |
| ------------------------ | ------------------- | ------------------------------------------------------ |
| Accueil                  | `/`                 | Hero animé, stats clés, dernières actus, citation, CTA |
| Actualités & Presse      | `/actualites`       | Blog / fil presse, articles, dossier presse            |
| Article                  | `/actualites/:slug` | Détail article                                         |
| Biographie & Parcours    | `/biographie`       | Timeline carrière, clubs, palmarès, analyse tactique   |
| Médias & Galerie         | `/media`            | Photos HD, vidéos, galerie lightbox CSS                |
| Boutique & Merchandising | `/boutique`         | Catalogue produits officiels                           |
| Produit                  | `/boutique/:id`     | Fiche produit détaillée                                |
| Réseaux Sociaux          | `/reseaux-sociaux`  | Agrégateur feeds sociaux                               |
| Contact & Booking        | `/contact`          | Formulaire contact, demandes booking                   |

---

## 🎨 Direction artistique & Design System CSS

### `globals.css` — Variables, reset, typographie

```css
/* ============================================
   VARIABLES GLOBALES
   ============================================ */
:root {
  /* Couleurs */
  --color-black: #0a0a0a;
  --color-white: #f5f5f0;
  --color-gold: #c9a84c;
  --color-gold-light: #e8c97a;
  --color-gold-dark: #9a7a30;
  --color-blue-deep: #0d1b3e;
  --color-blue-royal: #1a3a8f;
  --color-grey: #2a2a2a;
  --color-grey-light: #6b6b6b;
  --color-grey-pale: #3d3d3d;

  /* Typographie */
  --font-display: "Bebas Neue", "Impact", sans-serif;
  --font-body: "DM Sans", "Helvetica Neue", sans-serif;
  --font-accent: "Playfair Display", "Georgia", serif;

  /* Espacements */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;

  /* Layout */
  --container-max: 1280px;
  --container-pad: 1.5rem;

  /* Transitions */
  --tr-fast: 150ms ease;
  --tr-base: 300ms ease;
  --tr-slow: 600ms ease;
  --tr-reveal: 800ms cubic-bezier(0.16, 1, 0.3, 1);

  /* Bordures */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;

  /* Ombres */
  --shadow-gold: 0 0 40px rgba(201, 168, 76, 0.15);
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.4);

  /* Breakpoints (usage JS via getComputedStyle) */
  --bp-md: 768px;
  --bp-lg: 1024px;
}

/* ============================================
   RESET
   ============================================ */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  font-size: 16px;
}
body {
  background: var(--color-black);
  color: var(--color-white);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
img,
video {
  display: block;
  max-width: 100%;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
}
ul,
ol {
  list-style: none;
}

/* ============================================
   POLICES LOCALES
   ============================================ */
@font-face {
  font-family: "Bebas Neue";
  src: url("../assets/fonts/BebasNeue-Regular.woff2") format("woff2");
  font-display: swap;
  font-weight: 400;
}

@font-face {
  font-family: "DM Sans";
  src: url("../assets/fonts/DMSans-Variable.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: "Playfair Display";
  src: url("../assets/fonts/PlayfairDisplay-Italic.woff2") format("woff2");
  font-style: italic;
  font-display: swap;
}

/* ============================================
   TYPOGRAPHIE GLOBALE
   ============================================ */
h1 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 10vw, 9rem);
  letter-spacing: 0.02em;
  line-height: 0.92;
  color: var(--color-white);
}
h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 4.5rem);
  color: var(--color-white);
}
h3 {
  font-family: var(--font-body);
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 600;
  color: var(--color-white);
}
p {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-grey-light);
}
.quote {
  font-family: var(--font-accent);
  font-style: italic;
}

/* ============================================
   CONTAINER
   ============================================ */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
  width: 100%;
}

/* ============================================
   ACCESSIBILITE — prefers-reduced-motion
   ============================================ */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus visible (navigation clavier) */
:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 3px;
}
```

---

## 🎞️ Animations CSS — `animations.css`

```css
/* ============================================
   KEYFRAMES GLOBAUX
   ============================================ */

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Révélation de texte par clip-path */
@keyframes revealUp {
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(0% 0 0 0);
  }
}

/* Grain texture animé */
@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-2%, -3%);
  }
  30% {
    transform: translate(2%, 2%);
  }
  50% {
    transform: translate(-1%, 3%);
  }
  70% {
    transform: translate(3%, -1%);
  }
  90% {
    transform: translate(-3%, 1%);
  }
}

/* Shimmer (bouton or au hover) */
@keyframes shimmer {
  from {
    background-position: -200% center;
  }
  to {
    background-position: 200% center;
  }
}

/* Croissance ligne timeline */
@keyframes growLine {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

/* Pulsation douce (badges "Live") */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.85;
  }
}

/* Rotation loader */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ============================================
   CLASSES REVEAL AU SCROLL
   Appliquées par useIntersectionObserver
   ============================================ */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity var(--tr-reveal),
    transform var(--tr-reveal);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Délais cascade sur grids */
.reveal:nth-child(1) {
  transition-delay: 0ms;
}
.reveal:nth-child(2) {
  transition-delay: 100ms;
}
.reveal:nth-child(3) {
  transition-delay: 200ms;
}
.reveal:nth-child(4) {
  transition-delay: 300ms;
}
.reveal:nth-child(5) {
  transition-delay: 400ms;
}
.reveal:nth-child(6) {
  transition-delay: 500ms;
}
```

---

## 🧩 CSS Modules — Patterns clés

### Navbar — `Navbar.module.css`

```css
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem var(--container-pad);
  background: transparent;
  border-bottom: 1px solid transparent;
  transition:
    background var(--tr-base),
    border-color var(--tr-base),
    padding var(--tr-base);
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: rgba(201, 168, 76, 0.2);
  padding: 1rem var(--container-pad);
}

.logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-white);
  letter-spacing: 0.1em;
}

.links {
  display: flex;
  gap: 2.5rem;
}

.link {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 245, 240, 0.65);
  position: relative;
  transition: color var(--tr-fast);
}

.link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--tr-base);
}

.link:hover,
.link.active {
  color: var(--color-white);
}

.link:hover::after,
.link.active::after {
  transform: scaleX(1);
}

/* Hamburger mobile */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  cursor: pointer;
}

.burger span {
  display: block;
  height: 1.5px;
  background: var(--color-white);
  transition:
    transform var(--tr-base),
    opacity var(--tr-base);
}

.burger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .burger {
    display: flex;
  }
  .links {
    display: none;
    position: fixed;
    inset: 0;
    background: var(--color-black);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    z-index: 99;
  }
  .links.open {
    display: flex;
  }
  .link {
    font-size: 1.25rem;
  }
}
```

### Hero Banner — `HeroBanner.module.css`

```css
.hero {
  position: relative;
  height: 100dvh;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--color-black);
}

.image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.1);
  opacity: 0.55;
  transition:
    filter var(--tr-slow),
    opacity var(--tr-slow);
}

.hero:hover .image {
  filter: grayscale(30%) contrast(1.05);
  opacity: 0.65;
}

.gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 10, 10, 1) 0%,
    rgba(10, 10, 10, 0.6) 40%,
    transparent 70%
  );
}

/* Grain animé */
.grain {
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("/noise.png");
  background-repeat: repeat;
  opacity: 0.04;
  animation: grain 0.8s steps(2) infinite;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 2;
  padding: var(--space-xl) var(--container-pad);
  max-width: var(--container-max);
  margin: 0 auto;
  width: 100%;
}

.eyebrow {
  font-family: var(--font-body);
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-md);
  animation: fadeIn 0.6s ease both;
}

.title {
  font-family: var(--font-display);
  font-size: clamp(5rem, 14vw, 12rem);
  line-height: 0.9;
  color: var(--color-white);
  margin-bottom: var(--space-lg);
  clip-path: inset(100% 0 0 0);
  animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}

.tagline {
  font-family: var(--font-accent);
  font-style: italic;
  font-size: clamp(1rem, 2vw, 1.375rem);
  color: var(--color-grey-light);
  margin-bottom: var(--space-xl);
  animation: fadeUp 0.8s ease 0.6s both;
}

.scrollIndicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-grey-light);
  font-size: 0.6875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  animation: fadeUp 0.8s ease 1.2s both;
}

.scrollLine {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--color-gold), transparent);
  animation: growLine 1s ease 1.4s both;
  transform-origin: top;
}
```

### Stats animées — `KeyStats.module.css`

```css
.section {
  padding: var(--space-2xl) 0;
  border-top: 1px solid rgba(201, 168, 76, 0.2);
  border-bottom: 1px solid rgba(201, 168, 76, 0.2);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1px;
  background: rgba(201, 168, 76, 0.15);
}

.stat {
  padding: var(--space-xl) var(--space-lg);
  background: var(--color-black);
  text-align: center;
  transition: background var(--tr-base);
}

.stat:hover {
  background: var(--color-grey);
}

.number {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  color: var(--color-gold);
  line-height: 1;
}

.label {
  display: block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-grey-light);
  margin-top: var(--space-sm);
}
```

### Timeline biographie — `Timeline.module.css`

```css
.timeline {
  position: relative;
  padding: var(--space-xl) 0;
  max-width: 900px;
  margin: 0 auto;
}

/* Ligne centrale or */
.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--color-gold) 10%,
    var(--color-gold) 90%,
    transparent
  );
  transform: translateX(-50%);
  transform-origin: top;
  animation: growLine 1.5s ease both;
}

.item {
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  align-items: start;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-gold);
  border: 2px solid var(--color-black);
  box-shadow: 0 0 0 4px rgba(201, 168, 76, 0.2);
  justify-self: center;
  margin-top: 8px;
  transition: box-shadow var(--tr-base);
}

.item:hover .dot {
  box-shadow: 0 0 0 10px rgba(201, 168, 76, 0.12);
}

.content {
  padding: var(--space-lg);
  background: var(--color-grey);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition:
    border-color var(--tr-base),
    transform var(--tr-base);
}

.content:hover {
  border-color: rgba(201, 168, 76, 0.3);
  transform: translateY(-4px);
}

.year {
  display: block;
  font-family: var(--font-display);
  font-size: 2.25rem;
  color: var(--color-gold);
  margin-bottom: var(--space-sm);
}

.clubName {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--space-xs);
}

.desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-grey-light);
}

/* Alternance gauche/droite */
.item:nth-child(odd) .content {
  grid-column: 1;
}
.item:nth-child(odd) .dot {
  grid-column: 2;
}
.item:nth-child(odd) .spacer {
  grid-column: 3;
}

.item:nth-child(even) .spacer {
  grid-column: 1;
}
.item:nth-child(even) .dot {
  grid-column: 2;
}
.item:nth-child(even) .content {
  grid-column: 3;
}

/* Mobile : une seule colonne */
@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  .item {
    grid-template-columns: 40px 1fr;
  }
  .item:nth-child(odd) .content,
  .item:nth-child(even) .content {
    grid-column: 2;
    grid-row: 1;
  }
  .item:nth-child(odd) .dot,
  .item:nth-child(even) .dot {
    grid-column: 1;
    grid-row: 1;
  }
  .spacer {
    display: none;
  }
}
```

### Galerie Photo — `PhotoGallery.module.css`

```css
/* Masonry CSS natif */
.grid {
  columns: 3 280px;
  gap: var(--space-sm);
}

.item {
  break-inside: avoid;
  margin-bottom: var(--space-sm);
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.item img {
  display: block;
  width: 100%;
  filter: grayscale(100%);
  transition:
    filter var(--tr-slow),
    transform var(--tr-slow);
}

.item:hover img {
  filter: grayscale(0%);
  transform: scale(1.04);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--tr-base);
}

.item:hover .overlay {
  background: rgba(10, 10, 10, 0.35);
}

/* Icône loupe SVG inline */
.zoomIcon {
  opacity: 0;
  transform: scale(0.7);
  transition:
    opacity var(--tr-base),
    transform var(--tr-base);
  color: var(--color-white);
}

.item:hover .zoomIcon {
  opacity: 1;
  transform: scale(1);
}

/* Lightbox CSS */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.96);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--tr-base);
}

.lightbox.open {
  opacity: 1;
  pointer-events: all;
}

.lightbox img {
  max-width: 92vw;
  max-height: 90vh;
  object-fit: contain;
  filter: none;
}

.lightboxClose {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: var(--color-white);
  font-size: 1.5rem;
  opacity: 0.6;
  transition: opacity var(--tr-fast);
  background: none;
  border: none;
  cursor: pointer;
}

.lightboxClose:hover {
  opacity: 1;
}
```

### Produit Card — `ProductCard.module.css`

```css
.card {
  background: var(--color-grey);
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  transition:
    border-color var(--tr-base),
    transform var(--tr-base);
  cursor: pointer;
}

.card:hover {
  border-color: rgba(201, 168, 76, 0.4);
  transform: translateY(-6px);
}

.imageWrap {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: var(--color-grey-pale);
}

.imageWrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--tr-slow);
}

.card:hover .imageWrap img {
  transform: scale(1.06);
}

.body {
  padding: var(--space-md);
}

.badge {
  display: inline-block;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
  padding: 0.2rem 0.6rem;
  margin-bottom: var(--space-sm);
}

.name {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--space-xs);
}

.price {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-gold);
}

.btn {
  width: 100%;
  margin-top: var(--space-md);
  padding: 0.75rem;
  background: transparent;
  border: 1px solid var(--color-gold);
  color: var(--color-gold);
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    background var(--tr-fast),
    color var(--tr-fast);
}

.btn:hover {
  background: var(--color-gold);
  color: var(--color-black);
}
```

### Bouton global — `Button.module.css`

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition:
    background var(--tr-fast),
    color var(--tr-fast),
    transform var(--tr-fast),
    box-shadow var(--tr-fast);
}

.btn:active {
  transform: translateY(1px);
}

/* Variantes */
.primary {
  background: var(--color-gold);
  color: var(--color-black);
}
.primary:hover {
  background: var(--color-gold-light);
  box-shadow: var(--shadow-gold);
}

.outline {
  background: transparent;
  color: var(--color-gold);
  border: 1px solid var(--color-gold);
}
.outline:hover {
  background: var(--color-gold);
  color: var(--color-black);
}

.ghost {
  background: transparent;
  color: var(--color-white);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.ghost:hover {
  border-color: var(--color-white);
  background: rgba(255, 255, 255, 0.05);
}

/* Shimmer or */
.primary::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 60%
  );
  background-size: 200% auto;
  opacity: 0;
}

.primary:hover::after {
  opacity: 1;
  animation: shimmer 0.6s linear;
}
```

### Carrousel CSS Scroll Snap — `Carousel.module.css`

```css
.wrapper {
  position: relative;
  overflow: hidden;
}

.track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: var(--space-md);
  scrollbar-width: none;
}

.track::-webkit-scrollbar {
  display: none;
}

.slide {
  flex: 0 0 calc(33.333% - var(--space-md));
  scroll-snap-align: start;
}

.controls {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin-top: var(--space-md);
}

.dot {
  width: 6px;

  height: 6px;
  border-radius: 50%;
  background: var(--color-grey-light);
  border: none;
  cursor: pointer;
  transition:
    background var(--tr-fast),
    transform var(--tr-fast);
}

.dot.active {
  background: var(--color-gold);
  transform: scale(1.4);
}

@media (max-width: 768px) {
  .slide {
    flex: 0 0 85%;
  }
}
```

---

## 🪝 Hook `useIntersectionObserver.js`

```js
import { useEffect, useRef } from "react";

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// Usage dans un composant :
// const ref = useIntersectionObserver();
// <div ref={ref} className="reveal">...</div>
```

---

## 📄 Contenu par page

### `/` — Accueil

- **HeroBanner** : Photo full-height N&B → couleur au hover, titre Bebas Neue monumental, tagline Playfair italic, grain animé
- **KeyStats** : `651` matchs en club · `36` sélections France · `3` Ligues des Champions · Ballon d'Or FIFA XI 2003
- **LatestNews** : 3 dernières actus en cards (reveal au scroll)
- **QuoteSection** : Citation de Zidane — fond bleu France, typo Playfair, barre or gauche
- **CTASection** : Boutons Boutique (primary) + Contact (outline)

### `/actualites` — Actualités & Presse

- Filtres CSS (input radio stylisés avec `label`) : Toutes | Presse | Événements | Partenariats
- Grid `auto-fit minmax(320px, 1fr)` pour les articles
- Section logos médias en N&B → couleur au hover (filter: grayscale)
- Bouton téléchargement dossier de presse PDF

### `/biographie` — Biographie & Parcours

- Intro : né le 18 février 1973 à Kinshasa, Congo
- **Timeline CSS** : Brest → Marseille → Celta Vigo → Real Madrid → Chelsea → PSG → Retraite 2011
- **Palmarès** : Champions League (2002), La Liga ×2, Premier League ×1, Ligue 1, Coupe du Monde 1998, UEFA Nation's League 2021
- **Section tactique** : Le "rôle Makélélé" — explication du milieu récupérateur moderne
- Après-carrière : coach Chelsea, staff France, ambassadeur

### `/media` — Médias & Galerie

- Tabs CSS natifs (`:checked` sur radio + label adjacent) : Photos | Vidéos | Documents
- Photos : `columns` CSS masonry + lightbox CSS/JS natif
- Vidéos : Embeds YouTube (`aspect-ratio: 16/9`)
- Documents : Liens téléchargement (PDF)

### `/boutique` — Boutique

- Catégories : Maillots | Accessoires | Livres & Biographies | Éditions limitées
- Filtres CSS (checkboxes stylisés)
- Panier via Zustand
- Checkout : redirect Stripe

### `/reseaux-sociaux` — Réseaux Sociaux

- Liens : Instagram, X (Twitter), Facebook, YouTube, LinkedIn
- Feed Instagram (widget SnapWidget embed ou lien direct)
- Compteurs stylisés CSS

### `/contact` — Contact & Booking

- Formulaire : React Hook Form + Zod + envoi EmailJS
- Section Booking : Type d'événement, Date, Lieu, Budget estimé
- Section Presse : email dédié
- Infos agent et attaché de presse

---

## ⚙️ Variables d'environnement

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_STRIPE_PUBLIC_KEY=pk_live_...
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_CMS_API_URL=https://...
VITE_CMS_API_KEY=your_key
```

---

## 🚀 Installation & démarrage

```bash
git clone https://github.com/your-org/claudemakelele.git
cd claudemakelele

npm install
cp .env.example .env

npm run dev      # localhost:5173
npm run build    # Build production dans /dist
npm run preview  # Prévisualiser le build
npm run lint
```

---

## 📦 Dépendances — `package.json`

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.26.0",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.53.0",
    "react-i18next": "^15.0.0",
    "i18next": "^23.14.0",
    "zustand": "^5.0.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.9.0",
    "emailjs-com": "^3.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.4.0",
    "eslint": "^9.9.0"
  }
}
```

> Aucune dépendance de style : pas de Tailwind, pas de Framer Motion, pas de styled-components.

---

## 🧩 Conventions de code CSS

```
Un fichier .module.css par composant.
Classes en camelCase dans JSX : styles.heroTitle
Valeurs toujours via var(--...) — jamais de couleurs hardcodées hors globals.css
Pas de styles inline sauf valeurs JS dynamiques (hauteur calculée, offset)
Mobile first : écrire la version mobile d'abord, @media pour élargir
```

### Commits Git

```
feat:     nouvelle fonctionnalité
fix:      correction de bug
style:    CSS / visuels
content:  ajout de contenu
refactor: refactoring
docs:     documentation
chore:    config, dépendances
```

---

## 🔍 SEO & Performance

```jsx
/* React Helmet Async — chaque page */
<Helmet>
  <title>Claude Makélélé — [Page] | Site Officiel</title>
  <meta name="description" content="..." />
  <meta property="og:title" content="..." />
  <meta property="og:image" content="/og-image.jpg" />
  <link rel="canonical" href="https://claudemakelele.com/..." />
</Helmet>
```

```
Images   : WebP + loading="lazy" + width/height explicites
Fonts    : font-display: swap + <link rel="preload"> dans index.html
Split    : React.lazy() + Suspense par route
CSS      : Vite gère automatiquement l'extraction et le code-split des CSS Modules
```

---

## 📱 Responsive

```
Mobile first — breakpoints :
  480px  : grands mobiles
  768px  : tablettes (rupture principale)
  1024px : laptops
  1280px : desktop
  1536px : grands écrans

Unités : clamp() pour la typo, fr + auto-fit pour les grids, dvh pour le hero
```

---

## 🌐 Déploiement

### Vercel

```bash
npm i -g vercel && vercel
# Configurer le domaine dans le dashboard Vercel
```

### Netlify

```toml
[build]
  command = "npm run build"
  publish = "dist"
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## ✅ Checklist avant mise en ligne

- [ ] Toutes les pages créées et responsives
- [ ] Formulaire de contact fonctionnel (EmailJS testé)
- [ ] Meta tags SEO sur chaque page
- [ ] Sitemap.xml + robots.txt
- [ ] Google Analytics connecté
- [ ] Images WebP, lazy loading, dimensions explicites
- [ ] Polices locales + font-display: swap
- [ ] HTTPS actif sur le domaine
- [ ] Redirections www → non-www
- [ ] Page 404 personnalisée
- [ ] prefers-reduced-motion respecté
- [ ] Test Lighthouse ≥ 90
- [ ] Test iOS Safari + Chrome Android
- [ ] Politique de confidentialité + CGV + Mentions légales
- [ ] Cookie banner RGPD

---
