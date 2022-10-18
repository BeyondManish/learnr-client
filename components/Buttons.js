import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect } from 'react';
import { ThemeContext } from "../context/Theme";

export function Button({ className, icon, text }) {
  return (<button
    type="button"
    className={`inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500` + className}
  > {
      icon ? <span className="w-[18px] h-[18px] mr-3">
        {icon}
      </span> : null
    }
    {text}
  </button>);
}

export function ToggleButton() {

  const [theme, toggleTheme] = useContext(ThemeContext);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  }, [theme]);


  return (
    <button onClick={toggleTheme} className='w-8 h-8 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700'>
      {
        theme == "light" ? <SunIcon />
          : <MoonIcon />
      }
    </button>
  );
}