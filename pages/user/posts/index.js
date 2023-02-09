import Head from "next/head";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useContext, useEffect, useState } from 'react';
import axios from "../../../utils/axios";
import { useRouter } from 'next/router';

import UserLayout from "../../../components/layout/UserLayout";
import { loadUserPost } from '../../../functions/load';
import { AuthContext } from '../../../context/Auth';
import EmptyCard from '../../../components/cards/Empty';
import DashboardPostCard from '../../../components/cards/DashboardPostCard';
import { NextSeo } from 'next-seo';

export default function PostPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1
  });
  const [auth, setAuth] = useContext(AuthContext);


  useEffect(() => {
    loadUserPost(auth.user.username, pagination.page).then((data) => {
      setPosts(posts.concat(...data.posts));
      setPagination({ page: data.page, totalPages: data.totalPages });
      setLoading(false);
    });
    console.log(auth.user.username);
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
    router.push(`/user/posts/edit/${slug}`);
  };

  const loadMore = () => {
    loadUserPost(auth.user.username, pagination.page + 1).then((data) => {
      // add the post to the array
      setPosts(prev => prev.concat(data.posts));
      setPagination({ page: data.page, totalPages: data.totalPages });
    }).catch(err => console.log(err));
  };

  return (
    <>
      <Head>
        <NextSeo
          title="Posts"
        />
      </Head>
      <UserLayout>
        <div>
          <h2 className="mb-4 text-lg font-medium">All Posts</h2>
        </div>
        <div>
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
                      <DashboardPostCard key={post.slug} post={post} onDelete={deletePost} onEdit={editPost} />
                    ))
                  }
                </div>
              ) :
                (<EmptyCard text={"Wow, Such Empty!"} />))
            }
          </InfiniteScroll>
        </div>
      </UserLayout>
    </>
  );
}