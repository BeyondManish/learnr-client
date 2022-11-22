import dayjs from 'dayjs';
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Badge } from "../Badges";

export default function PostTable({ postData, onDelete, onEdit }) {
  const headings = ["Title", "Author", "Categories", "Date", "Actions"];

  return (
    <div className="overflow-y-auto border border-gray-300 dark:border-gray-900 md:rounded-lg" >
      <table className="min-w-full overflow-y-auto divide-y divide-gray-300 dark:divide-gray-900">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>
            {/* get all the table head */}
            {
              headings.length > 0 && headings.map(heading => (<th key={heading} className="py-3 pl-4 pr-3 text-sm font-medium tracking-wide text-left text-gray-600 uppercase dark:bg-gray-900 dark:text-gray-200 sm:pl-6">{heading}</th>))
            }
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 dark:bg-gray-800 dark:divide-gray-900">
          {
            postData.posts.map((post) => (
              <tr key={post.slug} className="">
                <td className="px-4 py-4"><a className='hover:underline' href={`/admin/posts/edit/${post.slug}`}>
                  {post.title}
                </a></td>
                <td>{post.author.firstname + " " + post.author.lastname}</td>
                <td>{post.categories.map((category) => (<Badge className="mr-1" key={category.slug} title={category.name} />))}</td>
                <td>{dayjs(post.createdAt).format("MMM D, YYYY")}</td>
                <td className="flex items-center px-4 py-4">
                  <div>
                    <button className="w-5 h-5 cursor-pointer" onClick={(e) => { e.preventDefault(); onEdit(post.slug); }}>
                      <PencilSquareIcon />
                    </button> |
                    <button className="w-5 h-5 cursor-pointer" onClick={(e) => { e.preventDefault(); onDelete(post._id); }}>
                      <TrashIcon />
                    </button>
                  </div>
                </td>
              </tr>
            )
            )
          }
        </tbody>
      </table>
    </div>
  );
}