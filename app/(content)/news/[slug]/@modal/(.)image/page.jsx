'use client';

import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';

import { getNewsBySlug } from '@/lib/mock-news';

export default function InterceptedImagePage({ params }) {
  const router = useRouter();

  const newsItemSlug = params.slug;

  const newsItem = getNewsBySlug(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div>
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            height={800}
            width={800}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </dialog>
    </>
  );
}
