import Link from "next/link";
import Image from "next/image";

import classes from "./news-item.module.css";

export default function NewsItem({ slug, title, excerpt, category, date, image }) {
  return (
    <Link href={`/news/${slug}`} className={classes.card}>
      <div className={classes.imageWrapper}>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className={classes.content}>
        <div className={classes.meta}>
          <span className={classes.category}>{category}</span>
          <span className={classes.date}>{new Date(date + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.excerpt}>{excerpt}</p>
      </div>
    </Link>
  );
}
