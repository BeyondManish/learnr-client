import Content from "../../components/posts/Content";
import MainLayout from "../../components/layout/MainLayout";
import CommentForm from "../../components/forms/CommentForm";
import axios from "axios";
import Head from 'next/head';

export default function BlogPost({ post }) {
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
        <div className="px-8 mb-4 bg-white border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700">
          <h2 className="my-4 text-xl font-medium">Leave a comment</h2>
          <CommentForm postId="asb" />
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps({ params }) {
  const post = await axios.get(`/post/${params.slug}`).then(({ data }) => data.data.post).catch((err) => null);

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