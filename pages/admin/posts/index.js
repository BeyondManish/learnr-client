import Head from "next/head";
import AdminLayout from "../../../components/layout/AdminLayout";
import { useEffect, useContext } from "react";
import { PostContext } from "../../../context/Post";
import { loadPosts } from "../../../functions/load";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Badge } from "../../../components/Badges";
import axios from "axios";
import { useRouter } from 'next/router';

const headings = ["Title", "Author", "Categories", "Date", "Actions"];


export default function PostPage() {
  const router = useRouter();

  const [postData, setPostData] = useContext(PostContext);
  useEffect(() => {
    loadPosts().then(({ data }) => {
      setPostData(prev => ({ ...prev, posts: data.posts }));
      console.log(postData);
    });
  }, []);

  const deletePost = async (id) => {
    console.log(id);
    const answer = confirm("Are you sure you want to delete this post?");
    if (!answer) return;
    await axios.delete(`/post/${id}`);
    setPostData(prev => ({ ...prev, posts: prev.posts.filter(post => post._id !== id) }));
  };

  const editPost = async (slug) => {
    console.log(slug);
    router.push(`/admin/posts/edit/${slug}`);
  };

  return (
    <>
      <Head>
        <title>
          All Posts | Learnr Admin
        </title>
      </Head>
      <AdminLayout>
        {/* Post table */}
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
                postData.posts.map((post) => (
                  <tr key={post.slug} className="">
                    <a className='hover:underline' href={`/admin/posts/edit/${post.slug}`}>
                      <td className="px-4 py-4">{post.title}</td>
                    </a>
                    <td>{post.author.firstname + " " + post.author.lastname}</td>
                    <td>{post.categories.map((category) => (<Badge className="mr-1" key={category.slug} title={category.name} />))}</td>
                    <td>{post.createdAt}</td>
                    <td className="flex items-center px-4 py-4">
                      <div>
                        <button className="w-5 h-5 cursor-pointer" onClick={() => editPost(post.slug)}>
                          <PencilSquareIcon />
                        </button> |
                        <button className="w-5 h-5 cursor-pointer" onClick={() => deletePost(post._id)}>
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
      </AdminLayout>
    </>
  );
}