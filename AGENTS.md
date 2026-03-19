# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 16 using the Pages Router (not App Router). The site is multilingual, supports dark/light themes, and is deployed on Vercel.

**Tech Stack:**
- Next.js 16.2.0 (Pages Router)
- React 19.2.4
- TypeScript 5.9.3
- Tailwind CSS 3.4.19
- next-translate 2.6.2 for i18n
- next-themes 0.4.6 for dark mode

## Essential Commands

```bash
pnpm dev         # Start development server (uses webpack, not Turbopack)
pnpm build       # Build for production (uses webpack)
pnpm start       # Start production server
pnpm lint        # Run ESLint
```

**Important:** This project explicitly uses webpack (not Turbopack) via the `--webpack` flag. This is required because `next-translate-plugin` modifies webpack config. Do not remove these flags.

## Architecture

### Internationalization (i18n)

The project supports 4 languages: English (default), Spanish, Italian, and German.

**Configuration:**
- `i18n.json` - defines locales and page-level namespaces
- `locales/{locale}/common.json` - translation files
- All pages use the `common` namespace by default

**Usage in components:**
```tsx
import useTranslation from "next-translate/useTranslation";

const { t, lang } = useTranslation();
const text = t('common:key-name');
```

**Language switching:**
The `LanguageSwitcher` component cycles through locales using Next.js router's locale parameter. It renders flag emojis (🇬🇧, 🇪🇸, 🇮🇹, 🇩🇪) and uses Next.js Link with `locale` prop to switch languages while preserving the current path.

### Theming

Dark/light theme support using `next-themes`:
- Configured in `_app.tsx` with `<ThemeProvider attribute="class" enableSystem={true}>`
- Uses Tailwind's dark mode class strategy
- `ThemeSwitcher` component toggles between themes
- System preference detection enabled

### Static Generation

The homepage (`pages/index.tsx`) uses Static Site Generation (SSG) with `getStaticProps` for all 4 locales. Next-translate automatically generates static pages for each locale.

### Script Loading Patterns

**Critical distinction:**
- `beforeInteractive` scripts MUST be in `pages/_document.tsx` (not `_app.tsx`)
- `afterInteractive` scripts (like Google Analytics) can be in `_app.tsx`

The mobile viewport height script (`--vh` CSS variable) is in `_document.tsx` because it needs to run before React hydration.

### Environment Variables

Expected environment variables:
- `NEXT_PUBLIC_ENV` - "production" to enable Google Analytics
- `NEXT_PUBLIC_GOOGLE_ANALYTIC_ID` - Google Analytics tracking ID
- `EMAIL` - Email address for contact link
- `GITHUB` - GitHub username for social link
- `LINKEDIN` - LinkedIn username for social link

Use `.env.local` for local development (see README.md).

## ESLint Configuration

The project uses ESLint 9 with flat config format (`eslint.config.mjs`), not the legacy `.eslintrc.json` format.

**Key points:**
- Flat config is required for Next.js 16 compatibility
- Config imports directly from `eslint-config-next`
- No custom rules or overrides currently defined

## Project Structure

```
pages/           # Next.js Pages Router
  _app.tsx       # App wrapper with ThemeProvider and analytics
  _document.tsx  # Document with beforeInteractive scripts
  index.tsx      # Homepage
  api/           # API routes (if needed)
components/      # React components
locales/         # Translation files organized by locale
  en/common.json
  es/common.json
  it/common.json
  de/common.json
styles/          # Global CSS
lib/             # Utility functions and custom hooks
public/          # Static assets
```

## Key Patterns

### Component Structure

Components are functional components using TypeScript. Most components are simple presentational components without complex state management.

**Social Icons Pattern:**
- Uses environment variables for URLs
- Icons from `react-icons/fa6` (FontAwesome) and `react-icons/si` (Simple Icons)
- LinkedIn uses `FaLinkedin` (not `SiLinkedin` - removed in react-icons 5.6.0)

### Styling

- Tailwind utility classes for all styling
- Dark mode via `dark:` prefix (class-based)
- Custom fonts via `font-` utilities (e.g., `font-archivoBlack`)
- Responsive breakpoints: mobile-first with `md:`, `lg:`, `xl:` prefixes

### Next.js Configuration

`next.config.js` uses `next-translate-plugin` wrapper:
```js
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  reactStrictMode: true,
  allowedDevOrigins: [...],
})
```

This plugin automatically configures webpack to handle translations and generate pages for each locale.

## Common Gotchas

1. **Webpack vs Turbopack:** Always use `--webpack` flag for dev and build. Turbopack is not compatible with next-translate-plugin.

2. **Script Loading:** Use `_document.tsx` for `beforeInteractive` scripts, not `_app.tsx`. This will cause ESLint warnings if placed incorrectly.

3. **LinkedIn Icon:** Use `FaLinkedin` from `react-icons/fa6`, not `SiLinkedin` from `react-icons/si` (removed in v5.6.0).

4. **Translation Keys:** All translation keys are in the `common` namespace. Reference as `common:key-name` when using `t()`.

5. **TypeScript Strict Mode:** The project uses strict TypeScript. All props and types must be properly defined.
