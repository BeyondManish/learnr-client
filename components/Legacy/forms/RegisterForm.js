import Link from "next/link";
import { useState, useEffect } from "react";

export default function RegisterForm() {

  let [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    buttonText: "Register",
    error: "User doesn't exist",
  });

  let { firstname, lastname, email, password, confirmPassword, buttonText } = state;

  const updateValue = (value) => {
    return (e) => {
      console.log(e.target.value);
      setState({ ...state, [value]: e.target.value, error: "", success: "", buttonText: "Register" });
    };
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Registering...");
    console.table({ firstname, lastname, email, password, confirmPassword });
  };

  return (
    // wrapper
    <div className="absolute inset-0 flex h-auto mt-24 bg-gray-100 border-4 border-gray-800 md:mt-0 md:items-center md:justify-center">
      {/* login form */}
      <div className="w-full p-4 bg-white rounded-md md:p-8 md:w-4/5 lg:w-3/5">
        {
          state.error && (
            //  Error box if error
            < div className="flex justify-between w-full p-4 mb-4 font-semibold text-white bg-red-400 rounded-md">
              <p>{state.error}</p>
            </div>
          )
        }
        <form className="rounded-md">
          <div className="mt-2">
            <label className="block" htmlFor="firstname">Firstname</label>
            <input onChange={updateValue('firstname')} className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="text" name="firstname" id="firstname" />
          </div>
          <div className="mt-2">
            <label className="block" htmlFor="lastname">Lastname</label>
            <input onChange={updateValue('lastname')} className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="text" name="lastname" id="lastname" />
          </div>
          <div className="mt-2">
            <label className="block" htmlFor="username">Username</label>
            <input onChange={updateValue('username')} className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="text" name="username" id="username" />
          </div>
          <div className="mt-2">
            <label className="block" htmlFor="email">Email</label>
            <input onChange={updateValue('email')} className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="email" name="email" id="email" />
          </div>
          <div className="mt-2">
            <label className="block" htmlFor="password">Password</label>
            <input onChange={updateValue('password')} className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="password" name="password" id="password" />
          </div>
          <div className="mt-2">
            <label className="block" htmlFor="password">Confirm Password</label>
            <input onChange={updateValue('confirmPassword')} className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="password" name="confirmPassword" id="confirmPassword" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link href="/forgot-password">
              <a className="hover:text-green-600">
                Forgot Password?
              </a>
            </Link>
            <div>
              <button onClick={submitForm} type="submit" className="px-3 py-2 font-semibold bg-green-500 rounded-md cursor-pointer text-gray-50 hover:bg-green-700 hover:text-white">Register</button>
              <a href="/login" className="px-3 py-2 ml-2 font-semibold text-gray-900 rounded-md cursor-pointer">Login</a>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
}