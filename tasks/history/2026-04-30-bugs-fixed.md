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

## Slug-based routing
- Added `slug` field to each item in `lib/news.js` (e.g., `ai-robots-everyday-life`)
- Renamed `getNewsById` → `getNewsBySlug`, now looks up by `slug`
- Renamed route folder `app/news/[id]` → `app/news/[slug]`; updated `params.id` → `params.slug` in the page
- Updated featured card link in `app/news/page.jsx` and `NewsItem` component to use `slug` instead of `id`

## NewsItem component extracted
- Created `app/components/news-item/news-item.jsx` — standalone card component receiving `{ id, title, excerpt, category, date, image }` as props
- Created `app/components/news-item/news-item.module.css` — moved all card styles (`.card`, `.imageWrapper`, `.content`, `.meta`, `.category`, `.date`) out of `page.module.css`
- Updated `app/news/page.jsx` to import and use `<NewsItem>` in the grid; removed inline card JSX

## Design work
- Redesigned `app/components/main-header/main-header.jsx` — sticky frosted-glass header with logo, gradient text, and animated nav underlines
- Redesigned `app/news/page.jsx` — featured hero card + responsive card grid with images, category badges, dates, and hover effects

## Parallel route slots added
- Created `app/@archive/page.jsx` — empty Archive slot component
- Created `app/@latest/page.jsx` — empty Latest slot component

## Archive nav link
- Added "Archive" link to `app/components/main-header/main-header.jsx` pointing to `/archive`

## not-found.jsx stale import
- Fixed `app/not-found.jsx` import: `@/app/news/[id]/single-news.module.css` → `@/app/news/[slug]/single-news.module.css` (route was renamed from `[id]` to `[slug]`)

## Archive page styles
- Created `app/archive/archive.module.css` — two-column layout (latest + archive sidebar), page wrapper, heading
- Created `app/archive/@latest/latest.module.css` — latest news item list with card hover, meta row, category badge, date
- Created `app/archive/@archive/archive-news.module.css` — date filter sidebar with link list, divider, and result list
- Updated layout and both slot pages to import and apply their CSS modules

## Added 3 news items to mock data
- `news-6` — "Scientists Discover Dozens of New Deep-Sea Species" (Nov 2025)
- `news-7` — "Solar Energy Hits Global Milestone" (Mar 2024)
- `news-8` — "Ancient Library Uncovered Beneath Egyptian Desert" (Jun 2023)

## Renamed lib/news.js → lib/mock-news.js
- Updated imports in `lib/news-helpers.js`, `app/news/page.jsx`, `app/news/[slug]/page.jsx`

## NewsList component
- Created `app/components/news-list/news-list.jsx` — renders a `<ul>` grid of `<NewsItem>` cards from a `news` prop array
- Created `app/components/news-list/news-list.module.css` — responsive auto-fill grid matching the news page layout
- Added import to `app/archive/@archive/[year]/paje.jsx`

## news-helpers.js adapted
- Replaced `DUMMY_NEWS` import from non-existent `@/dummy-news` with `mockNews` from `@/lib/news`
- All six helpers (`getAllNews`, `getLatestNews`, `getAvailableNewsYears`, `getAvailableNewsMonths`, `getNewsForYear`, `getNewsForYearAndMonth`) now work with the project's mock data

## Archive slots unified
- Extracted shared `app/archive/slot.module.css` used by both `@latest` and `@archive` pages
- Both slot headings share the same Inter uppercase style with a faint bottom border
- Layout columns changed to `1fr 1fr` so both sections are equal width

## Archive layout polish
- Added fading gradient divider between latest and archive columns (vertical on desktop, horizontal on mobile)
- Added subtle bottom border under the "News Archive" heading
- Wrapped slots in `.latest` / `.archive` classes with padding on each side of the divider
