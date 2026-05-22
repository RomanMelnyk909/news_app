import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getNewsBySlug } from '@/lib/mock-news';

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = getNewsBySlug(newsItemSlug);

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
