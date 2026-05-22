import Image from 'next/image';
import Link from 'next/link';
import { getNewsBySlug } from '@/lib/mock-news';
import { notFound } from 'next/navigation';

import classes from './single-news.module.css';

export default function SingleNewsPage({ params }) {
  const newsItem = getNewsBySlug(params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <main className={classes.page}>
      <Link href="/news" className={classes.back}>
        ← Back to News
      </Link>
      <div className={classes.meta}>
        <span className={classes.category}>{newsItem.category}</span>
        <span className={classes.date}>{newsItem.date}</span>
      </div>
      <h1 className={classes.title}>{newsItem.title}</h1>
      <div className={classes.imageWrapper}>
        <Link href={`/news/${params.slug}/image`}>
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>
      <p className={classes.excerpt}>{newsItem.excerpt}</p>
      <p className={classes.body}>{newsItem.body}</p>
    </main>
  );
}
