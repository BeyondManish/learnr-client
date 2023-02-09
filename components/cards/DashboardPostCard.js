import classNames from '../../utils/classNames';
import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function DashboardPostCard({ post, className }) {

  return (
    <div className={classNames("w-full mb-4 overflow-hidden bg-white border border-gray-300 md:rounded-lg dark:border-gray-700 dark:bg-gray-900", className)}>
      <div className="relative p-5">
        <Link href={`/user/posts/edit/${post.slug}`}>
          <a><h1 className="text-2xl font-semibold hover:text-indigo-600">{post.title}</h1></a>
        </Link>
        <div className='absolute text-gray-500 right-6 top-6'>
          <button className='w-5 h-5 mr-4 hover:text-indigo-500'>
            <a href={`/user/posts/edit/${post.slug}`} >
              <PencilIcon className="w-5 h-5" />
            </a>
          </button>
          <button href={`/user/posts/edit/${post.slug}`} className='w-5 h-5 hover:text-indigo-500'>
            <a href={`/user/posts/edit/${post.slug}`} >
              <TrashIcon className="w-5 h-5" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}