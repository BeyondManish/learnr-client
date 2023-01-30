import Stats from '../../components/dashboard/Stats';
import UserLayout from "../../components/layout/UserLayout";
import PostTable from '../../components/table/PostTable';
import { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../context/Post';
import { loadPosts } from '../../functions/load';
import { useRouter } from 'next/router';
import { loadStatsData } from '../../functions/load';

export default function DashboardPage() {

  const router = useRouter();

  const [postData, setPostData] = useContext(PostContext);
  const [stats, setStats] = useState([]);

  useEffect(async () => {
    await loadStatsData().then(({ data }) => {
      setStats(data);
    });
  }, []);


  useEffect(async () => {
    await loadPosts().then(({ data }) => {
      setPostData(prev => ({ ...prev, posts: data.posts }));
    });
  }, []);

  console.log(stats);

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
  return (
    <>
      <UserLayout>
        <div>
          <Stats stats={stats} />
        </div>
        <div>
          <h2 className="my-8 text-lg font-medium">Recent Posts</h2>
          <PostTable onDelete={deletePost} onEdit={editPost} postData={postData} />
        </div>
      </UserLayout>
    </>
  );
}
