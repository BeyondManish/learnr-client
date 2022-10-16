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