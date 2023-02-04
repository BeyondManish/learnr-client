import EmptyCard from '../../components/cards/Empty';
import TagCard from '../../components/cards/Tag';
import MainLayout from '../../components/layout/MainLayout';
import { loadTags } from '../../functions/load';

export default function TagsPage({ tags }) {
  return (
    <MainLayout>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-wrap justify-center w-full gap-4'>
          {
            tags.length != 0 ?
              (
                tags.map((tag) => (
                  <div className='w-[90%] lg:w-[30%] md:w-[40%]'>
                    <TagCard key={tag.slug} name={tag.name} href={"/tag/" + tag.slug} isFollowing={true} />
                  </div>
                ))
              ) : (<EmptyCard text={"Wow! Such Empty"} />)
          }
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  const { tags } = await loadTags();
  console.log(tags);
  if (!tags) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      tags
    }
  };
};