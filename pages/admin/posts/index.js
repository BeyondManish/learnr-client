import Head from "next/head";
import AdminLayout from "../../../components/layout/AdminLayout";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Button } from "../../../components/Buttons";
import { useRouter } from 'next/router';

export default function PostPage() {

  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then(res => {
        console.log(res.data.data.posts);
        setPosts(res.data.data.posts);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>
          All Posts | Learnr
        </title>
      </Head>
      <AdminLayout>
        {posts.length > 0 ?
          posts.map(post => (
            <div key={post._id}>
              <h1>{post.title}</h1>
              <p>{post.author.firstname}</p>
              <p>{post.content}</p>
              <br />
            </div>
          )) :
          (<div>
            <h1 className="mb-4 text-lg font-medium">No posts yet</h1>
            <Button text="Create post" onClick={() => router.push("/admin/posts/create")} />
          </div>
          )}
      </AdminLayout>
    </>
  );
}