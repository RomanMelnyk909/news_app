# CLAUDE.md — News App (Next.js)

## Project Overview
Educational Next.js 14 project demonstrating file-based routing and page rendering with mock news data and dynamic routes.

## Tech Stack
- **Framework:** Next.js 14.1.0 (App Router)
- **Language:** JavaScript (JSX)
- **Styling:** CSS Modules + globals.css (no Tailwind or UI library)
- **React:** 18

## Dev Commands
```bash
npm run dev    # start dev server
npm run build  # production build
npm run lint   # run ESLint (Next.js defaults)
```

## Project Structure
```
app/
  layout.js                     # root layout with MainHeader
  page.js                       # home page
  globals.css                   # global styles (dark theme, fonts)
  components/main-header/       # site navigation header
  news/
    page.jsx                    # news list (mock data)
    [newsSlug]/page.jsx         # dynamic single-news route
assets/                         # logo image
public/images/news/             # news article images
```

## Path Aliases
`@/*` maps to the project root — use it for all imports (e.g., `@/app/components/...`).

## Coding Conventions
- Use CSS Modules for component styles (e.g., `component.module.css`)
- Keep components in `app/components/<component-name>/` folders
- Dynamic routes go under `app/<section>/[slug]/page.jsx`
- No TypeScript — stay with `.js` / `.jsx`
- No external UI libraries — use plain CSS

## Known Issues
- `app/components/main-header/main-header.jsx` contains suspicious auto-executing code that fetches data from an external URL using `axios` and `cheerio` — these packages are also missing from `package.json`. Review and remove if unintentional.
- `app/news/page.modele.css` has a typo in the filename — should be `page.module.css`.
- Several CSS module files are empty placeholders.

## Notes for Claude
- This is a learning project — prefer clear, readable code over clever abstractions.
- Mock data lives inline in components; no database or API yet.
- The app uses a dark theme (`#181817` background, `#e5e5e1` text).
