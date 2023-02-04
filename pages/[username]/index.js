import MainLayout from '../../components/layout/MainLayout';
import MainNav from '../../components/layout/MainNav';
import Image from 'next/image';
import Card from '../../components/posts/Card';
import { loadUserPost, loadUser } from '../../functions/load';

export default function AuthorPage({ user, posts }) {
  return (
    <>
      <MainNav></MainNav>
      <MainLayout>
        {/* user profile page */}
        <div className='flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center w-1/3'>
            <div className='flex flex-col items-center justify-center'>
              <div className='my-2'>
                <Image
                  className='w-32 h-32 rounded-full'
                  src={user?.photo}
                  alt={user?.username}
                  width={100}
                  height={100}
                />
              </div>

              <h2 className='text-2xl font-bold'>@{user?.username}</h2>
              {/* TODO: Add the bio field */}
              <p className='text-gray-500 dark:text-gray-300'>BIO will be added soon.</p>
            </div>
            <div className='w-full my-4'>
              <h2 className='mb-2 text-xl font-bold'>Posts by {user.firstname}</h2>
              {posts?.length > 0 ?
                posts.map((post) => (
                  <Card key={post.slug} post={post} />
                )) : <p>{user.firstname} has no post yet.</p>
              }
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { username } = params;
  const user = await loadUser(username).then((data) => data.user).catch(err => null);
  // const posts = await axios.get(`/${username}/posts`).then(({ data }) => data.posts).catch(err => null);
  const posts = await loadUserPost(username).then((data) => data.posts).catch(err => null);
  console.log(posts);
  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user, posts
    },
  };
};