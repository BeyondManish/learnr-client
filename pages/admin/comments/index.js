import AdminLayout from "../../../components/layout/AdminLayout";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { loadAllComments } from '../../../functions/load';

export default function AdminCommentPage() {
  const router = useRouter();
  const [comments, setComments] = useState([]);
  const headings = ["post", "content", "author", "action"];

  useEffect(() => {
    loadAllComments().then(({ data }) => {
      console.log(data.comments);
      setComments(data.comments);
    }).catch(
      err => console.log(err)
    );
  }, []);

  console.log(comments);


  const deleteUser = async (id) => {
    console.log(id);
    const answer = confirm("Are you sure you want to delete this comment?");
    if (!answer) return;
    await axios.delete(`/comment/${id}`);
    setComments(comments.filter((comment) => comment._id !== id));
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="mb-4 text-lg font-medium">All Users</h1>
        <div className="overflow-hidden border border-gray-300 dark:border-gray-900 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-900">
            <thead className="bg-gray-50">
              <tr>
                {/* get all the table head */}
                {
                  headings.length > 0 && headings.map(heading => (<th className="py-3 pl-4 pr-3 text-sm font-medium tracking-wide text-left text-gray-600 uppercase dark:bg-gray-900 dark:text-gray-200 sm:pl-6">{heading}</th>))
                }
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300 dark:bg-gray-800 dark:divide-gray-900">
              {comments?.map((comment) => (
                <tr key={comment._id} className="">
                  <td className="px-4 py-4"><a className='hover:underline' href={`/${comment.author?.username}/${comment.post?.slug}`}>{comment.post?.title}</a></td>
                  <td className="px-4 py-4">{comment.comment}</td>
                  <td className="px-4 py-4">{comment.author.username}</td>
                  <td className="flex items-center px-4 py-4">
                    <div>
                      <button className="w-5 h-5 cursor-pointer" onClick={() => deleteUser(comment._id)}>
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </AdminLayout >
  );
}