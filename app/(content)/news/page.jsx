import Link from 'next/link';
import Image from 'next/image';
import { mockNews } from '@/lib/mock-news';
import NewsItem from '@/app/components/news-item/news-item';

import classes from './page.module.css';

const [featured, ...rest] = mockNews;

export default function NewsPage() {
  return (
    <main className={classes.page}>
      <p className={classes.heading}>Latest News</p>

      <Link href={`/news/${featured.slug}`} className={classes.featured}>
        <div className={classes.featuredImageWrapper}>
          <Image src={featured.image} alt={featured.title} fill />
        </div>
        <div className={classes.featuredContent}>
          <div className={classes.meta}>
            <span className={classes.category}>{featured.category}</span>
            <span className={classes.date}>{featured.date}</span>
          </div>
          <h2 className={classes.title}>{featured.title}</h2>
          <p className={classes.excerpt}>{featured.excerpt}</p>
        </div>
      </Link>

      <div className={classes.grid}>
        {rest.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
