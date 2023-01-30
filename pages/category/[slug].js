import Head from 'next/head';
import MainLayout from '../../components/layout/MainLayout';
import Card from '../../components/posts/Card';
import { loadCategoryPost } from '../../functions/load';

export default function CategoryPostPage({ posts, category }) {
  return (
    <div>
      <Head>
        <title>Learnr | A community for Learnr</title>
        <meta name="description" content="Learnr is a community of the learners. You can learn web development.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        {
          posts?.length > 0 ? (
            <div className='flex justify-center w-full h-full text-gray-900 md:px-4 dark:text-gray-100'>
              <div className='w-full md:w-3/5 lg:w-2/5'>
                <h2 className='my-2 text-2xl font-semibold'>Post for {category.name}</h2>

                {
                  posts.map((post) => (
                    <Card key={post.slug} post={post} />
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
  const { data } = await loadCategoryPost(params.slug);
  return {
    props: {
      posts: data.posts,
      category: data.category
    }
  };
};