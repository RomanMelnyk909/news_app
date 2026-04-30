import Link from 'next/link';
import Image from 'next/image';
import { mockNews } from '@/lib/news';
import classes from './page.module.css';

const [featured, ...rest] = mockNews;

export default function NewsPage() {
  return (
    <main className={classes.page}>
      <p className={classes.heading}>Latest News</p>

      <Link href={`/news/${featured.id}`} className={classes.featured}>
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
        {rest.map(({ id, title, excerpt, category, date, image }) => (
          <Link key={id} href={`/news/${id}`} className={classes.card}>
            <div className={classes.cardImageWrapper}>
              <Image
                src={image}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={classes.cardContent}>
              <div className={classes.meta}>
                <span className={classes.category}>{category}</span>
                <span className={classes.date}>{date}</span>
              </div>
              <h3 className={classes.title}>{title}</h3>
              <p className={classes.excerpt}>{excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
