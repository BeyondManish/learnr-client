import Head from "next/head";
import AdminLayout from "../../../components/layout/AdminLayout";
import { useEffect, useContext } from "react";
import { PostContext } from "../../../context/Post";
import { loadPosts } from "../../../functions/load";
import axios from "axios";
import { useRouter } from 'next/router';
import PostTable from '../../../components/table/PostTable';



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
        <div>
          <h2 className="mb-4 text-lg font-medium">All Posts</h2>
          <PostTable postData={postData} onDelete={deletePost} onEdit={editPost} />
        </div>
      </AdminLayout>
    </>
  );
}