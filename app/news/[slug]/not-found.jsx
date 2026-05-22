import Link from 'next/link';

import classes from './single-news.module.css';

export default function NotFoundArticle() {
  return (
    <main className={classes.page}>
      <p className={classes.notFound}>Article not found.</p>
      <Link href="/news" className={classes.back}>
        ← Back to News
      </Link>
    </main>
  );
}
