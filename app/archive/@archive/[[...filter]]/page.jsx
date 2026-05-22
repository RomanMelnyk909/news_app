import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news-helpers';
import Link from 'next/link';

import NewsList from '@/app/components/news-list/news-list';
import classes from '../../archive.module.css';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;

  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for selected period</p>;

  if (news && news.length > 0) {
    newsContent = (
      <p>
        <NewsList news={news} />
      </p>
    );
  }

  return (
    <>
      <div className={classes.section}>
        <h2 className={classes.sectionHeading}>Archive</h2>
        <nav>
          <ul className={classes.navList}>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href} className={classes.navLink}>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {newsContent}
    </>
  );
}
