import Image from "next/image";
import Avatar from "../Avatar";
import { Badge } from "../Badges";
import Editor from "rich-markdown-editor";
import Link from "next/link";
import dayjs from 'dayjs';
import { ThemeContext } from '../../context/Theme';
import { useContext } from 'react';

import YouTubeEmbed from '../../components/embed/YoutubeEmbed';

export default function Content({ post }) {
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <div className="mb-6 overflow-hidden bg-white border border-gray-300 rounded-lg dark:border dark:border-gray-900 dark:bg-gray-900">
      {
        post.featuredImage && (
          <Image className="object-cover w-full" src={post.featuredImage.url} layout="responsive" width={720} height={400} />
        )
      }
      <div className='px-8'>
        {/* Author box */}
        <div className="flex pt-6">
          <Avatar image={post.author.photo} />
          <div className="flex flex-col ml-2">
            <Link href={`/${post.author.username}`}>
              <span className="block text-sm font-medium truncate cursor-pointer hover:text-indigo-600">{post.author.firstname + " " + post.author.lastname}</span>
            </Link>
            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">@{post.author.username} • {dayjs(post.createdAt).format("MMM D, YYYY")}</span>
          </div>
        </div>
        {/* Author box ends */}

        <h1 className="mt-4 text-2xl font-medium md:text-3xl">
          {post.title}
        </h1>
        <div className="my-3">
          {post.tags.map(item => (<Link key={item.slug} href={`/tag/${item.slug}`}><a><span className="mr-1.5"><Badge title={item.name} /></span></a></Link>))}
        </div>
      </div>
      <Editor dark={theme === "dark" ? true : false} defaultValue={post.content} readOnly={true} readOnlyWriteCheckboxes={true} embeds={[
        {
          title: 'YouTube',
          icon: () => <DocumentTextIcon />,
          keywords: 'youtube video',
          defaultHidden: false,
          matcher: (url) => {
            return url.match(
              /^https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/
            );
          },
          component: YouTubeEmbed,
        },
      ]} />

    </div>
  );
}
