# Personal Portfolio Website

A modern, multilingual personal website built with Next.js, TypeScript, Tailwind CSS, and Vitest.

[![My Skills](https://skillicons.dev/icons?i=nextjs,ts,tailwind,vitest,vercel)](https://skillicons.dev)

**Live Demo:** [agustin.spaccesi.com](https://agustin.spaccesi.com)

## Features

- **Dark/Light Mode**: Theme switching with `next-themes`
- **Internationalization**: Multi-language support (🇬🇧 English, 🇪🇸 Spanish, 🇮🇹 Italian, 🇩🇪 German)
- **Particle Effects**: Interactive particle animations using `react-particle-image`
- **Responsive Design**: Fully responsive layout built with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Social Links**: Integrated social media icons and links
- **Testing**: Comprehensive test suite with Vitest and React Testing Library
- **SEO Optimized**: Multi-language sitemap and SEO components
- **Performance Monitoring**: Vercel Speed Insights integration

## Tech Stack

- **Framework**: [Next.js 16.2.0](https://nextjs.org/)
- **Language**: [TypeScript 5.9.3](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.19](https://tailwindcss.com/)
- **UI Components**: React 19.2.4
- **i18n**: next-translate 2.6.2
- **Icons**: react-icons 5.6.0
- **Testing**: Vitest 4.1.0 + React Testing Library 16.3.2
- **Theme**: next-themes 0.4.6
- **Analytics**: @vercel/speed-insights 2.0.0
- **Deployment**: [Vercel](https://vercel.com/)

## Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-page-nextjs.git
cd personal-page-nextjs
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
EMAIL=your.email@example.com
GITHUB=your-github-username
LINKEDIN=your-linkedin-username
```

### Development

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the application for production:
```bash
pnpm build
```

### Production

Start the production server:
```bash
pnpm start
```

### Linting

Run ESLint to check code quality:
```bash
pnpm lint
```

### Testing

Run the test suite:
```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test -- --watch

# Run tests with UI interface
pnpm test:ui

# Generate coverage report
pnpm test:coverage
```

All tests are located in the `__test__/` directory with subdirectories mirroring the source structure. See `__test__/README.md` for more details on writing and running tests.

## Project Structure

```
personal-page-nextjs/
├── __test__/         # Test files (Vitest + React Testing Library)
│   ├── components/   # Component tests
│   ├── hooks/        # Hook tests
│   ├── constants/    # Constant validation tests
│   └── setup.tsx     # Test environment configuration
├── components/       # React components
├── constants/        # Application constants (locales, social links)
├── hooks/            # Custom React hooks
├── locales/          # Translation files (en, es, de, it)
├── pages/            # Next.js pages and API routes
├── public/           # Static assets (images, favicon)
├── styles/           # Global styles and Tailwind configuration
├── types/            # TypeScript type definitions
└── ...
```

## Code Quality

This project follows modern React and TypeScript best practices:

- **Type Safety**: Full TypeScript coverage with strict mode enabled
- **Path Aliases**: Clean imports using `@/` aliases configured in `tsconfig.json`
- **Component Architecture**: Modular, reusable components with proper separation of concerns
- **Constants**: Centralized configuration in dedicated constant files
- **Testing**: 32 tests covering components, hooks, and utilities
- **Accessibility**: ARIA labels and semantic HTML throughout
- **Performance**: Optimized with Next.js features and monitored with Vercel Speed Insights

## Deployment

This project is configured for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments on every push.

## License

This project is private and maintained by Agustin Spaccesi.