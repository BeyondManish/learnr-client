import { Badge } from "../Badges";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function PostTable({ headings, data }) {
  return (
    <div className="overflow-hidden border border-gray-300 dark:border-gray-900 md:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-900">
        <thead className="bg-gray-50">
          <tr>
            {/* get all the table head */}
            {
              headings.length > 0 && headings.map(heading => (<th key={heading} className="py-3 pl-4 pr-3 text-sm font-medium tracking-wide text-left text-gray-600 uppercase dark:bg-gray-900 dark:text-gray-200 sm:pl-6">{heading}</th>))
            }
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 dark:bg-gray-800 dark:divide-gray-900">
          {
            data.map((data) => (
              <tr key={data.slug} className="">
                <td className="px-4 py-4">{data.title}</td>
                <td>{data.author.firstname + " " + data.author.lastname}</td>
                <td>{data.categories.map((category) => (<Badge key={category.slug} title={category.name} />))}</td>
                <td>{data.createdAt}</td>
                <td className="flex items-center px-4 py-4">
                  <div>
                    <button className="w-5 h-5 cursor-pointer">
                      <PencilSquareIcon />
                    </button> |
                    <button className="w-5 h-5 cursor-pointer">
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