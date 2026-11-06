# Adapa SriVatsav — Portfolio

A personal portfolio site for my software development work, projects, skills, experience, and resume.

**Live site:** [adapasrivatsav.in](https://adapasrivatsav.in)

## Deployment

The production site is deployed on Vercel from the `main` branch. The custom domain `adapasrivatsav.in` is registered with GoDaddy and connected to the Vercel project.

## Features

- Responsive portfolio with light and dark themes
- Filterable technology groups
- Project cards with custom visuals and links
- GitHub contribution activity
- One-page resume preview with open and download links
- Page title, description, canonical URL, Open Graph metadata, and custom favicon

## Built with

Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

Install Node.js and npm, then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Check TypeScript types |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run resume:pdf` | Compile the LaTeX resume (requires Tectonic) |

## Resume source

The resume source of truth is [`resume/resume.tex`](resume/resume.tex). The compiled PDF is served from `public/resume/resume.pdf`; the on-page image preview is `public/resume/resume-preview.png`. After changing the resume, rebuild the PDF and refresh the preview image so both stay in sync. See [`resume/README.md`](resume/README.md) for details.
