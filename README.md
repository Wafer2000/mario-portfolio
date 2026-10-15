# Mario Gonsalvez — Senior Software Engineer Portfolio

[**View live portfolio**](https://mario-portfolio-r8la.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/mariofernandogonsalvezarias/) · [GitHub profile](https://github.com/Wafer2000)

Professional portfolio presenting work across **Mobile, Backend, Cloud and Applied AI**.

## About this repository

This repository contains the source of my bilingual (English/Spanish) professional website. It presents professional experience, selected project case studies, certifications and downloadable resumes.

Some projects are commercial or private: the examples and demonstrations on the portfolio are **illustrative**, not live connections to those production systems. Proposed projects are labeled as such.

## Technology

- **Framework:** Next.js 16 and React 19.
- **Language:** TypeScript.
- **UI:** Tailwind CSS and React UI components.
- **Quality checks:** TypeScript type checking, ESLint and production build.
- **Deployment:** Vercel.

The portfolio does **not** require an application database, API credentials or backend secrets.

## Run locally

Requires Node.js 22+ and pnpm compatible with `packageManager` in `package.json`.

```powershell
npm install --global pnpm@11.25.0
pnpm install
pnpm run typecheck
pnpm run lint
pnpm run build
pnpm run dev
```

Visit `http://localhost:3000` for local development.

## Deployment

Import this repository into Vercel as a **Next.js** project and use the build configuration from the repository.

> Note: The app uses Next.js deployment. Do not assume a static `out/` export unless the Next.js configuration explicitly enables it.

## Project structure

| Path | Purpose |
|---|---|
| `app/` | Pages, app shell and global styles |
| `components/` | Reusable UI |
| `lib/portfolio-data.ts` | Projects, experience, technologies and certifications |
| `lib/portfolio-content.ts` | Bilingual profile and content |
| `public/assets/` | Public images and illustrative graphics |
| `public/cv/` | Resume files |
| `vendor/` | Bundled assets and associated licenses |

## Contact

For engineering opportunities, connect on [LinkedIn](https://www.linkedin.com/in/mariofernandogonsalvezarias/) or see the [portfolio](https://mario-portfolio-r8la.vercel.app/).

---

Built to present verifiable engineering work. Client source code and credentials are not included.
