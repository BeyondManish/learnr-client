import Stats from '../../components/cards/Stats';
import UserLayout from "../../components/layout/UserLayout";
import { useContext, useEffect, useState } from 'react';
import { loadUserPost } from '../../functions/load';
import { useRouter } from 'next/router';
import { loadStatsData } from '../../functions/load';
import { AuthContext } from '../../context/Auth';
import InfiniteScroll from 'react-infinite-scroll-component';
import DashboardPostCard from '../../components/cards/DashboardPostCard';
import EmptyCard from '../../components/cards/Empty';

export default function DashboardPage() {

  const router = useRouter();
  const [auth, setAuth] = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStatsData().then(({ data }) => {
      setStats(data);
    });
    loadUserPost(auth.user.username).then((data) => {
      setPosts(posts.concat(...data.posts));
    });
    setLoading(false);
  }, []);

  const loadMore = () => {
    loadUserPost(auth.user.username, pagination.page + 1).then((data) => {
      // add the post to the array
      setPosts(prev => prev.concat(data.posts));
      setPagination({ page: data.page, totalPages: data.totalPages });
    }).catch(err => console.log(err));
  };

  const deletePost = async (id) => {
    const answer = confirm("Are you sure you want to delete this post?");
    if (!answer) return;
    await axios.delete(`/post/${id}`);
    setPostData(prev => ({ ...prev, posts: prev.posts.filter(post => post._id !== id) }));
  };

  const editPost = async (slug) => {
    console.log(slug);
    router.push(`/user/posts/edit/${slug}`);
  };
  return (
    <>
      <UserLayout>
        <div>
          <Stats stats={stats} />
        </div>
        <div>
          <h2 className="my-8 text-lg font-medium">Recent Posts</h2>
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
                      <DashboardPostCard key={post.slug} post={post} onDelete={() => deletePost(post._id)} onEdit={() => editPost(post.slug)} />
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
};
