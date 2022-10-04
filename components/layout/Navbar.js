import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [{
  "name": "Home",
  "link": "/"
}, {
  "name": "About us",
  "link": "/about-us"
}, {
  "name": "Contact",
  "link": "/contact"
}];

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMobileMenu = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  };


  return (<nav className="z-50 py-4 shadow-md">
    {/* wrapper */}
    <div className="flex items-center justify-between px-4 mx-auto md:container">
      {/* logo */}
      <div className="">
        <Link href="/">
          <a>
            <h1 className="text-3xl font-bold">LEARNR<span className="text-4xl text-green-600">.</span></h1>
          </a>
        </Link>
      </div>
      {/* end logo */}
      {/* mobile bar3 menu */}
      <button onClick={toggleMobileMenu} className="w-10 h-10 p-2 rounded-full lg:hidden hover:bg-gray-200">
        <Bars3Icon />
      </button>
      {/* end mobile bar3 menu */}
      {/* mobile side nav */}
      {showMenu &&
        <div id="mobileMenu" className="absolute inset-0 flex flex-col items-center justify-center w-4/5 h-full bg-white border-r">
          <button onClick={toggleMobileMenu} className="absolute w-10 h-10 p-2 rounded-full right-2 top-4 hover:bg-gray-200">
            <XMarkIcon />
          </button>
          <nav className="text-center">
            <ul>
              {navItems.map((item) => (<li className="px-4 py-2 text-xl font-semibold rounded-lg hover:bg-gray-200">
                <Link key={item.name} href={item.link}>
                  <a>{item.name}</a>
                </Link>
              </li>))}
            </ul>
            <div>
              <button type="submit" className="px-3 py-2 font-semibold bg-green-500 rounded-md cursor-pointer text-gray-50 hover:bg-green-700 hover:text-white">Login</button>
              <button href="/register" className="px-3 py-2 ml-2 font-semibold text-gray-900 rounded-md cursor-pointer">Register</button>
            </div>
          </nav>
        </div>
      }
      {/* end mobile side nav */}
      {/* desktop menu */}
      <div className="hidden lg:flex">
        <nav className="flex">
          <ul className="flex">
            {navItems.map((item) => (<li className="px-4 py-2 mx-2 text-xl font-semibold rounded-lg hover:bg-gray-200 hover:text-gray-900">
              <Link key={item.name} href={item.link}>
                <a>{item.name}</a>
              </Link>
            </li>))}
          </ul>
          <div>
            <button type="submit" className="px-3 py-2 text-xl font-semibold bg-green-500 rounded-md cursor-pointer text-gray-50 hover:bg-green-700 hover:text-white"><a href="/login">Login</a></button>
            <button className="px-3 py-2 ml-2 text-xl font-semibold text-gray-900 rounded-md cursor-pointer hover:bg-gray-200"><a href="/register">Register</a></button>
          </div>
        </nav>
      </div>
      {/* end desktop menu */}
    </div>
    {/* end wrapper */}
  </nav>);
}