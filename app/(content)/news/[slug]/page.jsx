import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import classes from './single-news.module.css';
import { getNewsItem } from '@/lib/news-helpers';

export default async function SingleNewsPage({ params }) {
  const newsItem =  await getNewsItem(params.slug);

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
        <span className={classes.date}>{new Date(newsItem.date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
