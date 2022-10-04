import Link from "next/link";

export default function Loginform() {
  return (
    // wrapper
    <div className="absolute inset-0 flex h-auto mt-24 bg-gray-100 -z-50 md:mt-0 md:items-center md:justify-center">
      {/* login form */}
      <div className="w-full p-4 bg-white rounded-md md:p-8 md:w-4/5 lg:w-3/5">
        <form className="rounded-md">
          <div>
            <label className="block mb-2 text-xl" htmlFor="email">Email</label>
            <input className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="email" name="email" id="email" />
          </div>
          <div className="mt-4">
            <label className="block text-xl" htmlFor="password">Password</label>
            <input className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="email" name="email" id="email" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link href="/forgot-password">
              <a>
                Forgot Password?
              </a>
            </Link>
            <div>
              <button type="submit" className="px-3 py-2 font-semibold bg-green-500 rounded-md cursor-pointer text-gray-50 hover:bg-green-700 hover:text-white">Login</button>
              <button href="/register" className="px-3 py-2 ml-2 font-semibold text-gray-900 rounded-md cursor-pointer">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}