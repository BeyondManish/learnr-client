import MainLayout from './MainLayout';
import Sidebar from './Sidebar';

export default function HomeLayout({ showSearch, children }) {
  return (
    <MainLayout showSearch={showSearch}>
      <div className="flex justify-center w-full h-full">
        <div className='flex justify-center md:w-[65%] w-full'>
          <aside className='hidden md:block md:w-1/5'>
            <Sidebar className="font-semibold" />
          </aside>
          <div className='w-3/5'>
            <div className="flex flex-col w-full">
              {children}
            </div>
          </div>
          <aside className='hidden lg:block lg:w-1/5'>
            <Sidebar className="font-semibold" />
          </aside>
        </div>
      </div>
    </MainLayout>
  );
}