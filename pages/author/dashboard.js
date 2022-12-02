import Stats from '../../components/dashboard/Stats';
import AuthorLayout from "../../components/layout/AuthorLayout";
import PostTable from '../../components/table/PostTable';
import { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../context/Post';
import { loadUserPosts } from '../../functions/load';
import { useRouter } from 'next/router';
import { loadStatsData } from '../../functions/load';
import { AuthContext } from '../../context/Auth';

export default function DashboardPage() {
  const [auth, setAuth] = useContext(AuthContext);

  const router = useRouter();

  const [postData, setPostData] = useContext(PostContext);
  const [stats, setStats] = useState([]);

  useEffect(async () => {
    await loadStatsData().then(({ data }) => {
      console.log(data);
      setStats(data);
    });
  }, []);


  useEffect(async () => {
    await loadUserPosts(auth.user.username).then(({ data }) => {
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
    router.push(`/author/posts/edit/${slug}`);
  };
  return (
    <>
      <AuthorLayout>
        <h3 className="text-lg font-medium leading-6">Author Dashboard</h3>
        <div>
          <Stats stats={stats} />
        </div>
        <div>
          <h2 className="my-8 text-lg font-medium">Recent Posts</h2>
          <PostTable onDelete={deletePost} onEdit={editPost} postData={postData} />
        </div>
      </AuthorLayout>
    </>
  );
}
