import Link from "next/link";
import Avatar from "../Avatar";
import Image from 'next/image';
import dayjs from 'dayjs';
import classNames from '../../utils/classNames';

export default function PostCard({ post, showAuthor = true, className }) {
  post.author === null ? post.author = { username: "anonymous", firstname: "Anonymous", lastname: null, photo: null } : post.author = post.author;
  return (
    <div className={classNames("w-full mb-4 overflow-hidden bg-white border border-gray-300 md:rounded-lg dark:border-gray-700 dark:bg-gray-900", className)}>
      {
        post.featuredImage && (
          <Image className="object-cover w-full" src={post.featuredImage.url} loading="lazy" layout="responsive" width={720} height={400} />
        )
      }
      <div className="p-5">
        <Link href={`/${post.author.username}/${post.slug}`}>
          <a><h1 className="text-2xl font-semibold hover:text-indigo-600">{post.title}</h1></a>
        </Link>
        {/* Author box */}
        {
          showAuthor && (
            <div className="flex mt-2">
              <Avatar image={post.author?.photo} />
              <div className="flex flex-col ml-2">
                <Link href={`/${post.author?.username}`}>
                  <a>
                    <span className="block text-sm font-medium truncate hover:text-indigo-500">{post.author.firstname + " " + (post.author.lastname ? post.author.lastname : "")}</span>
                  </a>
                </Link>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">@{post.author.username} • {dayjs(post.createdAt).format("MMM D, YYYY")}</span>
              </div>
            </div>
          )
        }
        {/* Author box ends */}
      </div>
    </div>
  );
}