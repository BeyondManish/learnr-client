import Head from 'next/head';
import PostCard from '../components/posts/Card';
import { useState, useEffect } from "react";
import HomeLayout from '../components/layout/HomeLayout';
import EmptyCard from '../components/cards/Empty';
import { loadPosts } from '../functions/load';
import { Button } from '../components/Buttons';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
  });

  useEffect(() => {
    loadPosts().then((data) => {
      setPosts(data.posts);
      setPagination({ page: data.page, totalPages: data.totalPages });
      setLoading(false);
    }
    ).catch((err) => console.log(err));
  }, []);

  const loadMore = () => {
    loadPosts(pagination.page + 1).then((data) => {
      // add the post to the array
      setPosts(prev => prev.concat(data.posts));
      setPagination({ page: data.page, totalPages: data.totalPages });
    }).catch(err => console.log(err));
  };

  return (
    <div>
      <Head>
        <title>Learnr | A community for Learnr</title>
        <meta name="description" content="Learnr is a community of the learners. You can learn web development.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout showSearch={true}>
        <div className='md:px-4'>
          <InfiniteScroll
            dataLength={posts.length}
            next={loadMore}
            hasMore={pagination.page < pagination.totalPages}
            endMessage={<EmptyCard text={"Phew!!! End of the universe"} />}
            loader={<EmptyCard text={"Loading..."} />}
          >
            {loading ? ("") : (
              posts.length > 0 ? (
                <div className='w-full h-full text-gray-900 dark:text-gray-100'>
                  {
                    posts.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))
                  }
                </div>
              ) :
                (<EmptyCard text={"Wow, Such Empty!"} />))
            }
          </InfiniteScroll>
        </div>

      </HomeLayout>
    </div >
  );
};
