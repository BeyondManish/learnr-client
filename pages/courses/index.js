import Search from '../../components/forms/Search';
import MainLayout from '../../components/layout/MainLayout';

export default function CoursePage() {
  return (
    <MainLayout showSearch={false}>
      <div className="flex justify-center w-full h-full mt-[-10px]">
        {/* heading and course search banner */}
        <div className='w-full py-8 bg-white dark:bg-gray-900 max-h-60'>
          <div className='mx-auto max-w-7xl'>
            <h1 className="text-4xl font-bold">Courses</h1>
            <p className="text-lg">This is the courses page</p>
          </div>
          <div className='flex items-center justify-center w-full py-10'>
            <div className='w-4/5 md:w-2/3 lg:w-2/5'>
              <Search placeholder='Search for the courses you are looking for ...' />
            </div>
          </div>
        </div>
        {/* heading and course search banner ends */}
      </div>
    </MainLayout>
  );
}