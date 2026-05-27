import fs from 'node:fs';

import { mockNews } from '@/lib/mock-news';
import sql from 'better-sqlite3';

function createDb() {
  const db = sql('data.db');
  db.exec(`
    CREATE TABLE news (
      id       TEXT PRIMARY KEY,
      slug     TEXT NOT NULL,
      title    TEXT NOT NULL,
      excerpt  TEXT NOT NULL,
      body     TEXT NOT NULL,
      category TEXT NOT NULL,
      date     TEXT NOT NULL,
      image    TEXT NOT NULL
    )
  `);
  const insert = db.prepare(
    'INSERT INTO news (id, slug, title, excerpt, body, category, date, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
  );
  for (const item of mockNews) {
    insert.run(
      item.id,
      item.slug,
      item.title,
      item.excerpt,
      item.body,
      item.category,
      item.date,
      item.image
    );
  }
  return db;
}

const db = fs.existsSync('data.db') ? sql('data.db') : createDb();

export async function getAllNews() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare('SELECT * FROM news').all();
}

export function getLatestNews() {
  return mockNews.slice(0, 3);
}

export function getAvailableNewsYears() {
  return mockNews
    .reduce((years, news) => {
      const year = new Date(news.date).getFullYear();
      if (!years.includes(year)) years.push(year);
      return years;
    }, [])
    .sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return mockNews
    .reduce((months, news) => {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === +year) {
        const month = new Date(news.date).getMonth() + 1;
        if (!months.includes(month)) months.push(month);
      }
      return months;
    }, [])
    .sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return mockNews.filter((news) => new Date(news.date).getFullYear() === +year);
}

export function getNewsForYearAndMonth(year, month) {
  return mockNews.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
