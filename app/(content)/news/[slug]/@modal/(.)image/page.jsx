import Image from 'next/image';
import { notFound } from 'next/navigation';
import ModalBackdrop from '@/app/components/modal-backdrop/modal-backdrop';
import { getNewsItem } from '@/lib/news-helpers';

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;

  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
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
