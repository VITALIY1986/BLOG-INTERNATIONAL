import Link from 'next/link';
import Avatar from '../components/avatar';
import DateComponent from '../components/date';
import CoverImage from './cover-image';

export default function PostPreview({
  title = 'Untitled Post',  // Значение по умолчанию
  coverImage = { url: '/default-image.jpg' },  // URL изображения по умолчанию
  date = '1970-01-01',  // Дата по умолчанию
  excerpt = 'No excerpt available.',  // Описание по умолчанию
  author = { name: 'Anonymous', picture: '/default-avatar.jpg' },  // Автор по умолчанию
  slug = '#',
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage  slug={slug} url={coverImage?.url || '/default-image.jpg'} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
        
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={date || '1970-01-01'} />
      </div>
      <p className="text-lg leading-relaxed mb-4">
        {excerpt || 'No excerpt available.'}
      </p>
      {author && (
        <Avatar name={author?.name || 'Anonymous'} picture={author?.picture || '/default-avatar.jpg'} />
      )}
    </div>
  );
}
