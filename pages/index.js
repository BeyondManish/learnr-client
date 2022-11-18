import Head from 'next/head';
import MainLayout from '../components/layout/MainLayout';
import Card from '../components/posts/Card';
import { useState, useEffect, useContext } from "react";
import { PostContext } from "../context/Post";
import { loadCategories, loadPosts } from '../functions/load';
import Link from 'next/link';

export default function Home() {

  const [postData, setPostData] = useContext(PostContext);

  useEffect(() => {
    loadPosts().then(({ data }) => {
      setPostData(prev => ({ ...prev, posts: data.posts }));
    });
    loadCategories().then(({ data }) => setPostData(prev => ({ ...prev, categories: data.categories })));
  }, []);

  console.log(postData);
  return (
    <div>
      <Head>
        <title>Learnr | A community for Learnr</title>
        <meta name="description" content="Learnr is a community of the learners. You can learn web development.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {
          postData.posts.length > 0 && postData.categories.length > 0 ? (
            <div className='flex justify-center w-full h-full text-gray-900 md:px-4 dark:text-gray-100'>
              <div className='w-full md:w-3/5 lg:w-2/5'>
                {
                  postData.posts.map((post) => (
                    <Card key={post.slug} post={post} />
                  ))
                }
              </div>
              <aside className='hidden md:block'>
                <div className='ml-6'>
                  {postData.categories.length > 0 ?
                    (<>
                      <h2 className='text-2xl font-semibold'>Categories</h2>
                      <ul className='flex flex-wrap max-w-xs mt-2'>
                        {postData.categories.map((category) => (
                          <Link key={category.slug} href={`/category/${category.slug}`}>
                            <a>
                              <li className='flex items-center justify-between px-4 py-2 my-2 mr-3 text-sm font-medium text-gray-700 bg-white rounded-md dark:bg-gray-900 dark:text-gray-100'>
                                <span>{category.name}</span>
                              </li>
                            </a>
                          </Link>
                        ))}
                      </ul>
                    </>
                    )
                    : ""
                  }
                </div>
              </aside>
            </div>
          ) :
            (<div>There is nothing here...</div>)
        }
      </MainLayout >
    </div >
  );
};
