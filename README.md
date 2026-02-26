# Sumedh Milind Halbe - Portfolio

Personal portfolio website for Sumedh Milind Halbe, Energy Consultant and Power Systems Researcher.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS 4
- **Linting/Formatting:** Biome
- **Package Manager:** Bun
- **Deployment:** Vercel-ready (standalone output)

## Getting Started

```bash
# Install dependencies
make install

# Start development server
make dev

# Build for production
make build

# Start production server
make start
```

## Code Quality

```bash
# Format code
make format

# Lint code
make lint

# Format + lint (auto-fix)
make check
```

## Sections

- Hero: Introduction with animated energy-grid background
- About: Bio, expertise areas, and quick facts
- Experience: Career timeline at LCG Consulting and UNC Charlotte
- Publications: Peer-reviewed papers in IEEE and Renewable Energy journals
- Education: MS in Electrical Engineering from UNC Charlotte
- Contact: LinkedIn and ORCID links

## Deployment

Configured for Vercel deployment with `output: "standalone"` in `next.config.ts`. Push to a connected GitHub repository or use the Vercel CLI:

```bash
bunx vercel
```
