import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect } from 'react';
import { ThemeContext } from "../context/Theme";
import classNames from '../utils/classNames';

export function Button({ className, icon, text, onClick, type }) {
  return (<button
    onClick={onClick}
    type={type || "button"}
    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500` + className}
  > {
      icon ? <span className={classNames(text ? "mr-3" : "", `w-[18px] h-[18px]`)}>
        {icon}
      </span> : null
    }
    {text ? text : null}
  </button>);
}

export function ToggleButton() {

  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className='w-8 h-8 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700'>
      {
        theme == "light" ? <SunIcon />
          : <MoonIcon />
      }
    </button>
  );
}