import { getLatestNews } from '@/lib/news-helpers';
import classes from './latest.module.css';
import NewsList from '@/app/components/news-list/news-list';

export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();

  return (
    <div className={classes.section}>
      <h3 className={classes.heading}>Latest News</h3>
      <NewsList news={latestNews} />
    </div>
  );
}
