import Head from "next/head";
import AdminLayout from "../../../components/layout/AdminLayout";
import { useEffect, useContext } from "react";
import { PostContext } from "../../../context/Post";
import PostTable from "../../../components/table/PostTable";
import { loadPosts } from "../../../functions/load";

export default function PostPage() {

  const [postData, setPostData] = useContext(PostContext);
  useEffect(() => {
    loadPosts().then(({ data }) => {
      setPostData(prev => ({ ...prev, posts: data.posts }));
      console.log(postData);
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          All Posts | Learnr
        </title>
      </Head>
      <AdminLayout>
        <PostTable headings={["title", "author", "categories", "date", "action"]} data={postData.posts} />
      </AdminLayout>
    </>
  );
}