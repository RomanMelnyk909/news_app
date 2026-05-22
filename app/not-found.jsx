import Link from 'next/link';

import classes from '@/app/news/[slug]/single-news.module.css';

export default function NotFound() {
  return (
    <main className={classes.page}>
      <p className={classes.notFound}>Page not found.</p>
      <Link href="/" className={classes.back}>
        ← Back to home page
      </Link>
    </main>
  );
}
