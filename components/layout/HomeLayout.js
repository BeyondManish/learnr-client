import TagCard from '../cards/Tag';
import MainLayout from './MainLayout';
import RecommendationSideBar from './RecommendationSidebar';
import SideNav from './SideNav';

export default function HomeLayout({ showSearch, children }) {
  return (
    <MainLayout showSearch={showSearch}>
      <div className="flex justify-center w-full h-full">
        <div className='flex justify-center lg:w-[70%] w-full'>
          <aside className='sticky top-0 hidden md:block md:w-[18%]'>
            <SideNav className="font-semibold" />
          </aside>
          <div className='w-full mx-4 md:w-4/5 lg:w-3/5'>
            <div className="flex flex-col w-full">
              {children}
            </div>
          </div>
          <aside className='hidden lg:block lg:w-[22%]'>
            <RecommendationSideBar className="font-semibold" />
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}