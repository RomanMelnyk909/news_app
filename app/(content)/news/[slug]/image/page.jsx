import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getNewsItem } from '@/lib/news-helpers';

export default async function ImagePage({ params }) {
  const newsItem = await getNewsItem(params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <Image
        src={newsItem.image}
        alt={newsItem.title}
        height={800}
        width={800}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
