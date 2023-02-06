import classNames from '../../utils/classNames';
import Link from 'next/link';

export default function DashboardPostCard({ post, className }) {
  return (
    <div className={classNames("w-full mb-4 overflow-hidden bg-white border border-gray-300 md:rounded-lg dark:border-gray-700 dark:bg-gray-900", className)}>
      <div className="p-5">
        <Link href={`/${post.author.username}/${post.slug}`}>
          <a><h1 className="text-2xl font-semibold hover:text-indigo-600">{post.title}</h1></a>
        </Link>
      </div>
    </div>
  );
}