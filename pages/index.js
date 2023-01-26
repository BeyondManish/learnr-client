import Head from 'next/head';
import Card from '../components/posts/Card';
import { useState, useEffect, useContext } from "react";
import { PostContext } from "../context/Post";
import { loadCategories, loadPosts } from '../functions/load';
import HomeLayout from '../components/layout/HomeLayout';
import EmptyCard from '../components/cards/Empty';

export default function Home() {

  const [postData, setPostData] = useContext(PostContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts().then(({ data }) => {
      setPostData(prev => ({ ...prev, posts: data.posts }));
      setLoading(false);
    });
    loadCategories().then(({ data }) => setPostData(prev => ({ ...prev, categories: data.categories })));
  }, []);

  return (
    <div>
      <Head>
        <title>Learnr | A community for Learnr</title>
        <meta name="description" content="Learnr is a community of the learners. You can learn web development.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout showSearch={true}>
        <div className='w-full'>
          {loading ? ("") : (
            postData.posts.length > 0 && postData.categories.length > 0 ? (
              <div className='w-full h-full text-gray-900 md:px-4 dark:text-gray-100'>
                {
                  postData.posts.map((post) => (
                    <Card key={post.slug} post={post} />
                  ))
                }
              </div>
            ) :
              (<EmptyCard text={"Wow, Such Empty!"} />))
          }
        </div>
      </HomeLayout>
    </div >
  );
};
