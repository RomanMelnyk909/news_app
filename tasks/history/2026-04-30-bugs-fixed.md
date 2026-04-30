# Bugs Fixed — Apr 30, 2026

## CSS filename typo
Deleted `app/news/page.modele.css` — the file was unused and `page.module.css` already existed with the correct name.

## Single news page showed raw slug
- Created `lib/news.js` with shared `mockNews` array and `getNewsById(id)` helper
- Updated `app/news/[newsSlug]/page.jsx` to look up the article by slug and render full content (title, image, category, date, excerpt, body)
- Added "← Back to News" link and a fallback "Article not found" state

## Empty single news CSS
Filled `app/news/[newsSlug]/single-news.module.css` with full article page styles — back link, meta row, hero image, blockquote-style excerpt, and body text.

## Setup tasks
- Created `CLAUDE.md` at project root with project overview, tech stack, dev commands, conventions, and known issues
- Removed suspicious auto-executing code (`printSecretMessage`) and unused `axios`/`cheerio` imports from `app/components/main-header/main-header.jsx`

## Design work
- Redesigned `app/components/main-header/main-header.jsx` — sticky frosted-glass header with logo, gradient text, and animated nav underlines
- Redesigned `app/news/page.jsx` — featured hero card + responsive card grid with images, category badges, dates, and hover effects
