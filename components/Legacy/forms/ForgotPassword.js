export default function ForgotPasswordForm() {
  return (
    // wrapper
    <div className="absolute inset-0 flex h-auto mt-24 bg-gray-100 -z-10 md:mt-0 md:items-center md:justify-center">
      {/* login form */}
      <div className="w-full p-4 bg-white rounded-md md:p-8 md:w-4/5 lg:w-3/5">
        <form className="rounded-md">
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email</label>
            <input className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="email" name="email" id="email" />
          </div>
          <div>
            <button type="submit" className="px-3 py-2 font-semibold bg-green-500 rounded-md cursor-pointer text-gray-50 hover:bg-green-700 hover:text-white">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}