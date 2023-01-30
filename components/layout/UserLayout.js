import { Fragment, useState, useContext } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { useEffect } from 'react';
import {
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
  PencilSquareIcon,
  ClipboardDocumentIcon,
  ChevronRightIcon,
  TagIcon,
  PhotoIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import Logo from '../Logo';
import { AuthContext } from '../../context/Auth';
import classNames from "../../utils/classNames";
import { ToggleButton } from "../Buttons";
import Search from '../forms/Search';
import { useRouter } from 'next/router';
import Avatar from "../Avatar";
import { loadCurrentUser } from '../../functions/load';

const navigation = [
  { name: 'Dashboard', href: '/user/dashboard', icon: HomeIcon },
  { name: 'Posts', href: '#', icon: ClipboardDocumentListIcon, children: [{ name: "Create Post", icon: PencilSquareIcon, href: "/user/posts/create" }, { name: "All Posts", icon: ClipboardDocumentIcon, href: "/user/posts" }] },
];
const userNavigation = [
  { name: 'Logout', href: '/logout' },
];

export default function UserLayout({ showSearch, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState('Dashboard');
  const router = useRouter();

  // protect page
  useEffect(() => {
    if (auth?.token) {
      loadCurrentUser().then(({ data }) => {
        setUser(data.user);
        setLoading(false);
      }).catch(err => {
        console.log(err);
        router.push('/login');
      });
    }
    else {
      router.push('/login');
    }
  }, [auth?.token]);


  return (
    <>
      {
        loading ?
          ""
          :
          (
            <div>
              <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-20 flex md:hidden dark:bg-gray-900" onClose={setSidebarOpen}>
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 dark:bg-gray-900">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 pt-2 -mr-12">
                          <button
                            type="button"
                            className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="w-6 h-6 text-white" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex items-center flex-shrink-0 px-4">
                        {/* Logo */}
                        <Logo />
                      </div>
                      <div className="flex-1 h-0 mt-5 overflow-y-auto">
                        <nav className="px-2 space-y-1">
                          {navigation.map((item) => (
                            < a
                              key={item.name}
                              href={item.href}
                              className={
                                classNames(
                                  item.href === router.asPath
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                  'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                )}
                            >
                              <item.icon
                                className={classNames(
                                  item.href === router.asPath
                                    ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                  'mr-4 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                  </div>
                </Dialog>
              </Transition.Root>

              {/* Static sidebar for desktop */}
              <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                {/* Sidebar component */}
                <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-200 dark:border-gray-900 dark:bg-gray-900">
                  <div className="flex items-center flex-shrink-0 px-4">
                    {/* logo */}
                    <Logo />
                  </div>
                  <div className="flex flex-col flex-grow mt-5">
                    <nav className="flex-1 px-2 pb-4 space-y-1">
                      {navigation.map((item) => (
                        item.children ?
                          <Disclosure key={item.name} defaultOpen={true}>
                            {({ open }) => (
                              <>
                                <Disclosure.Button className={`w-full`}>
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 dark:text-gray-100 dark:hover:text-gray-900 hover:bg-gray-50',
                                      'group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                  >
                                    <div className='flex items-center justify-center'>
                                      <item.icon
                                        className={classNames(
                                          item.href === router.asPath
                                            ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                          'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </div>

                                    <div className='flex items-center justify-center w-5 h-5'>
                                      <ChevronRightIcon className={classNames(open ? 'rotate-90 transform' : '', 'w-4 h-4')} />
                                    </div>
                                  </a>
                                </Disclosure.Button>
                                <Disclosure.Panel>
                                  {item.children.map(item => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className={classNames(
                                        item.href === router.asPath
                                          ? 'bg-gray-100 text-gray-900' : 'text-gray-600 dark:text-gray-100 dark:hover:text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                                        'group mt-1 flex items-center pl-6 pr-2 py-2 text-sm font-medium rounded-md'
                                      )}
                                    >
                                      <item.icon
                                        className={classNames(
                                          item.href === router.asPath
                                            ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                          'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}

                          </Disclosure> :
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.href === router.asPath
                                ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-900',
                              'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                item.href === router.asPath
                                  ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 flex-shrink-0 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
              {/* Sidebar ends */}
              <div className="flex flex-col flex-1 md:pl-64">
                {/* User nav */}
                <div className="sticky top-0 z-20 flex flex-shrink-0 h-16 bg-white shadow dark:bg-gray-900 dark:text-gray-100">
                  <button
                    type="button"
                    className="px-4 text-gray-500 border-r border-gray-200 dark:border-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                  </button>
                  {/* Search desktop */}
                  {
                    showSearch && (
                      <div className="flex justify-between flex-1 px-4">
                        <div className='flex items-center justify-center w-full'>
                          <div className="flex items-center justify-center flex-1 max-w-xl">
                            <Search />
                          </div>
                        </div>
                        {/* notif, avatar and toggle button */}
                        <div className='flex items-center'>
                          {/* notification and avatar, show only on login */}
                          <div className="flex items-center ml-4 md:ml-6">

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative mx-3">
                              <div>
                                <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  <span className="sr-only">Open user menu</span>
                                  <Avatar image={user.photo} />
                                </Menu.Button>
                              </div>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                      {({ active }) => (
                                        <a
                                          href={item.href}
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                        >
                                          {item.name}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                          {/* notification and avatar ends */}
                          {/* theme toggle button */}
                          <ToggleButton />
                          {/* end theme toggle */}
                        </div>
                        {/* end avatar and toggle button */}
                      </div>
                    )
                  }
                </div>
                {/* User nav ends */}
                {/* main of User */}
                <main className="flex-1 max-w-full min-h-full p-4 rounded-md md:p-8">
                  {children}
                </main>
                {/* main ends */}
              </div>
            </div>
          )
      }
    </>
  );
}
