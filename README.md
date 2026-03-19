# Personal Portfolio Website

A modern, multilingual personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

[![My Skills](https://skillicons.dev/icons?i=nextjs,ts,tailwind,vercel)](https://skillicons.dev)

**Live Demo:** [agustin.spaccesi.com](https://agustin.spaccesi.com)

## Features

- **Dark/Light Mode**: Theme switching with `next-themes`
- **Internationalization**: Multi-language support (🇬🇧 English, 🇪🇸 Spanish, 🇮🇹 Italian, 🇩🇪 German)
- **Particle Effects**: Interactive particle animations using `react-particle-image`
- **Responsive Design**: Fully responsive layout built with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Social Links**: Integrated social media icons and links

## Tech Stack

- **Framework**: [Next.js 16.2.0](https://nextjs.org/)
- **Language**: [TypeScript 5.9.3](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.19](https://tailwindcss.com/)
- **UI Components**: React 19.2.4
- **i18n**: next-translate 2.6.2
- **Icons**: react-icons 5.6.0
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

## Project Structure

```
personal-page-nextjs/
├── components/        # React components
├── locales/          # Translation files
├── pages/            # Next.js pages
├── public/           # Static assets
├── styles/           # Global styles
└── ...
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments on every push.

## License

This project is private and maintained by Agustin Spaccesi.