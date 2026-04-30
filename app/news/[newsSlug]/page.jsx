import Image from "next/image";
import Link from "next/link";
import { getNewsById } from "@/lib/news";
import classes from "./single-news.module.css";

export default function SingleNewsPage({ params }) {
  const article = getNewsById(params.newsSlug);

  if (!article) {
    return (
      <main className={classes.page}>
        <p className={classes.notFound}>Article not found.</p>
        <Link href="/news" className={classes.back}>← Back to News</Link>
      </main>
    );
  }

  return (
    <main className={classes.page}>
      <Link href="/news" className={classes.back}>← Back to News</Link>
      <div className={classes.meta}>
        <span className={classes.category}>{article.category}</span>
        <span className={classes.date}>{article.date}</span>
      </div>
      <h1 className={classes.title}>{article.title}</h1>
      <div className={classes.imageWrapper}>
        <Image src={article.image} alt={article.title} fill style={{ objectFit: "cover" }} />
      </div>
      <p className={classes.excerpt}>{article.excerpt}</p>
      <p className={classes.body}>{article.body}</p>
    </main>
  );
}
