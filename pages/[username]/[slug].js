import Content from "../../components/posts/Content";
import MainLayout from "../../components/layout/MainLayout";
import CommentForm from "../../components/forms/CommentForm";
import { AuthContext } from '../../context/Auth';
import { useState, useContext, useEffect } from 'react';
import axios from "axios";
import Head from 'next/head';
import Link from 'next/link';
import { loadComments } from '../../functions/load';

export default function BlogPost({ post }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  // for comment section
  useEffect(async () => {
    await loadComments(post._id).then(({ data }) => {
      console.log(data);
      setComments((comments) => [...comments, data.comments]);
    }).catch(err => console.log(err));
  }, []);


  const submitComment = async (comment, postId) => {
    await axios.post("/comment/create", { comment, postId }).then(({ data }) => {
      setComments((comments) => [...comments, data.comments]);
      setSuccess("Comment posted successfully");
      setError("");
    }).catch((err) => {
      setError(err.response.data.message || err.response.data.errors[0]);
      setSuccess("");
    });
  };

  return (
    <MainLayout>
      <Head>
        <title>
          {post.title} | Learnr
        </title>
      </Head>
      <div className="flex flex-col max-w-3xl mx-auto">
        <div className="">
          <Content post={post} />
        </div>
        <h2 className="my-4 text-xl font-medium">Comments</h2>
        <div className="px-8 py-4 mb-4 bg-white border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700">
          <h2 className="my-4 text-xl font-medium">Leave a comment</h2>
          {
            auth?.token ? (
              <CommentForm postId={post._id} error={error} success={success} onSubmit={submitComment} />
            ) : (<p>Please <Link href={'/login'}><a className='text-indigo-600 hover:underline'>login</a></Link> to leave a comment</p>)}
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ params }) {
  const post = await axios.get(`/post/${params.slug}`).then(({ data }) => data.data.post).catch((err) => null);
  console.log(post);
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    }
  };
}