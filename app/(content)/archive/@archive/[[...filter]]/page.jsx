import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news-helpers';
import Link from 'next/link';

import NewsList from '@/app/components/news-list/news-list';
import classes from '../../archive.module.css';
import { Suspense } from 'react';

async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for selected period</p>;

  if (news && news.length > 0) {
    newsContent = (
      <p>
        <NewsList news={news} />
      </p>
    );
  }

  return newsContent;
}

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error('Invalid filter.');
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  } else if (year && month) {
    links = [];
  }

  return (
    <div className={classes.section}>
      <h2 className={classes.sectionHeading}>Archive</h2>
      <nav>
        <ul className={classes.navList}>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
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
  );
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>

      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
