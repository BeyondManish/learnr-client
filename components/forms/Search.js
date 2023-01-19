import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ placeholder = "Search" }) {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:border-gray-600 dark:placeholder-gray-400 dark:bg-gray-600 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm active:dark:border-gray-600 active:dark:placeholder-gray-400 active:dark:bg-gray-600"
          placeholder={placeholder}
          type="search"
        />
      </div>
    </div>
  );
}