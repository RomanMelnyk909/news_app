import NewsItem from "@/app/components/news-item/news-item";

import classes from "./news-list.module.css";

export default function NewsList({ news }) {
  return (
    <ul className={classes.list}>
      {news.map((item) => (
        <li key={item.id}>
          <NewsItem {...item} />
        </li>
      ))}
    </ul>
  );
}
