import HomeIcon from '../icons/HomeIcon';
import Link from 'next/link';
import ListIcon from '../icons/ListIcon';
import CourseIcon from '../icons/CourseIcon';
import HashtagIcon from '../icons/HashtagIcon';
import QuizIcon from '../icons/QuizIcon';
import BooksIcon from '../icons/BooksIcon';

const sideNavItems = [{ "title": "Home", "icon": HomeIcon, "href": "/" }, { "title": "Saved List", "icon": ListIcon, "href": "/saved-list" }, { "title": "Courses", "icon": CourseIcon, "href": "/courses" }, { "title": "Tags", "icon": HashtagIcon, "href": "/tags" }, { "title": "Quizzes", "icon": QuizIcon, "href": "/quizzes" }, { "title": "Bookism", "icon": BooksIcon, "href": "https://bookism.learnr.app" }];

const SideNavItem = ({ title, icon, href }) => {
  const Icon = icon;
  return (
    <Link href={href}>
      <a className='flex items-center w-full px-4 py-2 rounded-lg hover:bg-indigo-100 hover:text-indigo-600 hover:underline'>
        <div className='w-6 h-6'>
          <Icon />
        </div>
        <span className='px-3 font-medium'>{title}</span>
      </a>
    </Link>
  );
};

export default function SideNav() {
  return (
    <div className='w-full'>
      <nav>
        {
          sideNavItems.map((item) => (
            <SideNavItem key={item.title} title={item.title} icon={item.icon} href={item.href} />
          ))
        }
      </nav>
    </div >
  );
};