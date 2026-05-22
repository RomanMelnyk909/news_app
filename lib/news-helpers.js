import { mockNews } from '@/lib/mock-news';

export function getAllNews() {
  return mockNews;
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
  return mockNews.filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return mockNews.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
