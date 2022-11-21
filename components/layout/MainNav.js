import { Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Logo from '../Logo';
import { ToggleButton } from '../Buttons';
import classNames from "../../utils/classNames";
import Search from '../forms/Search';
import Image from 'next/image';
import localData from '../../utils/localData';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/Auth';
import { loadCurrentUser } from '../../functions/load';
import Avatar from '../Avatar';
import { Menu, Transition, Fragment } from '@headlessui/react';

export default function MainNav() {

  const router = useRouter();
  const [auth, setAuth] = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    if (auth.token) {
      loadCurrentUser().then(({ data }) => {
        setUser(data.user);
        setUserLoading(false);
      }).catch(err => console.log(err));
    }
    setUserLoading(false);
  }, [auth?.token]);


  // some default nav links

  const navigation = [
    { name: 'Dashboard', href: '/#', current: true },
  ];
  const userNavigation = [
    { name: 'Your Profile', href: `/` },
    { name: 'Log out', href: '/logout' },
  ];



  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'absolute inset-0 z-40 overflow-y-auto' : '',
            'bg-white z-50 dark:bg-gray-900 absolute inset-x-0 top-0 lg:overflow-y-visible shadow-sm'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  {/* Logo starts */}
                  <div className="flex items-center flex-shrink-0">
                    <Logo />
                  </div>
                  {/* Logo ends */}
                </div>
                <div className="flex-1 min-w-0 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <Search />
                  </div>
                </div>
                <div className="flex items-center md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="inline-flex items-center justify-center p-2 -mx-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                {userLoading ? ("") : (
                  user ? (
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                      {/* notif, avatar and toggle button */}
                      <div className='flex items-center'>
                        {/* notification and avatar, show only on login */}
                        <div className="flex items-center ml-4 md:ml-6">

                          {/* Profile dropdown */}
                          <Menu as="div" className="relative mx-3">
                            <div>
                              <Menu.Button className="flex items-center max-w-xs text-sm bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500">
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
                              <Menu.Items className="absolute right-0 w-48 py-1 mt-2 text-gray-700 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg dark:border-gray-700 dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none dark:text-gray-300">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-sm hover:dark:bg-gray-700 hover:dark:text-gray-300'
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
                  ) : (
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                      <Link href="/login">
                        <a
                          className="inline-flex items-center px-4 py-2 ml-4 text-sm font-medium border border-transparent rounded-md hover:bg-gray-200 hover:dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Login
                        </a>
                      </Link>
                      <Link href="/register">
                        <a
                          className="inline-flex items-center px-4 py-2 ml-4 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Register
                        </a>
                      </Link>
                      <div className='ml-4'>
                        <ToggleButton />
                      </div>
                    </div>
                  )
                )
                }
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {
                user && (
                  <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center max-w-3xl px-4 mx-auto cursor-pointer sm:px-6" onClick={() => router.push(`/${user.username}`)}>
                      <div className="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full">
                        <Image className="object-cover" src={user.imageUrl} alt="" width={400} height={400} />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">{user.firstname + " " + user.lastname}</div>
                        <div className="text-sm font-medium text-gray-500">{user.email}</div>
                      </div>
                    </div>
                    <div className="max-w-3xl px-2 mx-auto mt-3 space-y-1 sm:px-4">
                      {userNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }
            </Popover.Panel>
          </>
        )
        }
      </Popover >
    </>
  );
}
