import MainLayout from '../../components/layout/MainLayout';
import PostCard from '../../components/cards/PostCard';
import { loadTagPosts } from '../../functions/load';
import { NextSeo } from 'next-seo';

export default function TagPostsPage({ posts, tag }) {
  return (
    <div>
      <NextSeo
        title='All tags'
      />
      <MainLayout>
        {
          posts?.length > 0 ? (
            <div className='flex justify-center w-full h-full text-gray-900 md:px-4 dark:text-gray-100'>
              <div className='w-full md:w-3/5 lg:w-2/5'>
                <h2 className='my-2 text-2xl font-semibold'>Post for {tag.name}</h2>

                {
                  posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))
                }
              </div>
            </div>
          ) :
            (<div>There is nothing here...</div>)
        }
      </MainLayout >
    </div >
  );
};

export const getServerSideProps = async ({ params }) => {
  const { data } = await loadTagPosts(params.slug);
  return {
    props: {
      posts: data.posts,
      tag: data.tag
    }
  };
};