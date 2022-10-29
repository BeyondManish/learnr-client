import Image from "next/image";
import AuthorAvatar from "../AuthorAvatar";
import { Badge } from "../Badges";

export default function Content({ title, categories, featuredImage }) {
  return (
    <div className="max-w-3xl mx-auto mb-16 overflow-hidden bg-white border border-gray-300 rounded-lg dark:border dark:border-gray-900 dark:bg-gray-900">
      {
        featuredImage && (
          <Image className="w-full" src={featuredImage} layout="responsive" width={720} height={400} />
        )
      }
      <div className="p-8">
        {/* Author box */}
        <div className="flex">
          <AuthorAvatar image={'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} />
          <div className="flex flex-col ml-2">
            <span className="block text-sm font-medium truncate">Manish Shivabhakti</span>
            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">@beyond • Oct 20, 2022</span>
          </div>
        </div>
        {/* Author box ends */}

        <h1 className="mt-4 text-2xl font-medium md:text-3xl">
          {title}
        </h1>
        <div className="my-3">
          {categories.map(item => (<span className="mr-1.5"><Badge title={item} /></span>))}
        </div>
        <p className="mt-8">
          “Big man in his suit of armor. Take that off and what are you?”
          “Genius, Billionaire, Playboy, Philanthropist.”
        </p>
        <p>
          “I told you, I don’t want to join your super secret boy band.”
        </p>
      </div >
    </div>
  );
}
