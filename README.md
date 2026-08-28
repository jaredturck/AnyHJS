# ANYHJS

AnyHJS is an AI-powered fashion marketplace and styling platform that transforms outfit inspiration into instant, shoppable looks across many brands. Discover the latest on-trend outfits, explore virtual styling concepts, and browse complete looks through a fully implemented frontend demo.

## Frontend-only architecture

AnyHJS is a React and TypeScript website built with Vite. It does not require a backend or database.

- `frontend/src/` contains the application source, components, styling, assets, and static content.
- `frontend/src/data/` contains authored frontend data such as FAQs and blog posts.
- Interactive forms use client-side demo states so submitting, saving, login, registration, and account flows can be demonstrated without sending or storing user-entered data.
- Demo authentication stores only a boolean authenticated flag in the browser. Usernames, emails, passwords, and profile form values are not persisted.
- `frontend/build/` is generated production output and is deployed through GitHub Actions.

## Development

Install dependencies and start the Vite development server:

```bash
cd frontend
npm ci
npm start
```

The development server runs on port 3000.

## Production build

Build and prerender the site with:

```bash
cd frontend
npm run build
```

The generated static site is written to `frontend/build/`.

## Deployment

Pushes to `main` run the GitHub Pages workflow. The workflow builds the current `main` commit, updates `static-deployment` with the generated static output, and deploys the same build to GitHub Pages.
