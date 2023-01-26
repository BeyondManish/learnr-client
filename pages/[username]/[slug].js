import Content from "../../components/posts/Content";
import MainLayout from "../../components/layout/MainLayout";
import CommentForm from "../../components/forms/CommentForm";
import { AuthContext } from '../../context/Auth';
import { useState, useContext, useEffect } from 'react';
import axios from "axios";
import Head from 'next/head';
import Link from 'next/link';
import Avatar from '../../components/Avatar';
import { loadComments } from '../../functions/load';
import dayjs from 'dayjs';

export default function BlogPost({ post }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [comments, setComments] = useState([]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  // for comment section
  useEffect(async () => {
    await loadComments(post._id).then(({ data }) => {
      setComments(data.comments);
    }).catch(err => console.log(err));
  }, []);


  const submitComment = async (comment, postId) => {
    await axios.post("/comment/create", { comment, postId }).then(({ data }) => {
      console.log(data);
      comments.push(data.comment);
      setSuccess("Comment posted successfully");
      setError("");
    }).catch((err) => {
      setError(err.response.data.message || err.response.data.errors[0]);
      setSuccess("");
    });
  };
  console.log(comments);

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
          {(comments.length > 0) && comments.map((comment) => (
            <div key={comment._id} className="flex flex-col mb-4">
              <div className="flex items-center mb-2">
                <Avatar image={comment.author.photo} />
                <div className="flex flex-col ml-2">
                  <div>
                    <Link href={`/${comment.author.username}`}>
                      <a className="text-xs font-medium text-gray-900 dark:text-gray-100">{comment.author.firstname}</a>
                    </Link>
                    <span className="ml-0.5 text-xs text-gray-500 dark:text-gray-400">@{comment.author.username} • {dayjs(comment.createdAt).format("D MMM, YYYY")}</span>
                    <div>
                      <span className="text-sm dark:text-gray-400">{comment.comment}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
          }

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
  const post = await axios.get(`${process.env.API}/post/${params.slug}`).then(({ data }) => data.data.post).catch((err) => console.log(err));
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