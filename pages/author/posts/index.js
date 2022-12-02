import Head from "next/head";
import { useEffect, useContext } from "react";
import { PostContext } from "../../../context/Post";
import { loadUserPosts } from "../../../functions/load";
import axios from "axios";
import { useRouter } from 'next/router';
import PostTable from '../../../components/table/PostTable';
import AuthorLayout from '../../../components/layout/AuthorLayout';
import { AuthContext } from '../../../context/Auth';


export default function PostPage() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  const [postData, setPostData] = useContext(PostContext);
  useEffect(() => {
    loadUserPosts(auth.user.username).then(({ data }) => {
      setPostData(prev => ({ ...prev, posts: data.posts }));
      console.log(postData);
    });
  }, []);

  const deletePost = async (id) => {
    console.log(id);
    const answer = confirm("Are you sure you want to delete this post?");
    if (!answer) return;
    await axios.delete(`/user/post/${id}`);
    setPostData(prev => ({ ...prev, posts: prev.posts.filter(post => post._id !== id) }));
  };

  const editPost = async (slug) => {
    console.log(slug);
    router.push(`/author/posts/edit/${slug}`);
  };

  return (
    <>
      <Head>
        <title>
          All Posts | Learnr Author
        </title>
      </Head>
      <AuthorLayout>
        <div>
          <h2 className="mb-4 text-lg font-medium">All Posts</h2>
          <PostTable postData={postData} onDelete={deletePost} onEdit={editPost} roleURL="author" />
        </div>
      </AuthorLayout>
    </>
  );
}
