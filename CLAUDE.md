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
    [id]/page.jsx               # dynamic single-news route
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

## Import Order
Order imports in components as follows, with one blank line between each group:
1. Hooks (React hooks, Next.js hooks)
2. Components
3. Styles

```js
import { useState } from "react";

import MyComponent from "@/app/components/my-component/MyComponent";

import classes from "./component.module.css";
```

## Change History
After every change, append a short description to the current history file in `tasks/history/` (e.g., `tasks/history/2026-04-30-bugs-fixed.md`). Add a `##` heading for the topic and one or a few bullet points describing what changed.

## Notes for Claude
- This is a learning project — prefer clear, readable code over clever abstractions.
- Mock data lives inline in components; no database or API yet.
- The app uses a dark theme (`#181817` background, `#e5e5e1` text).
- **Never add `Co-Authored-By` lines to git commit messages.**
