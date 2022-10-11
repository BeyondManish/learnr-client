import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function Loginform() {

  const [state, setState] = useState({
    email: "",
    password: "",
    buttonText: "Login",
    error: "",
  });

  const { email, password, buttonText } = state;

  const updateValues = (value) => {
    return (e) => {
      setState({ ...state, [value]: e.target.value, error: "", success: "", buttonText: "Login" });
    };
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.table({ email, password });
    axios.post(`http://localhost:8000/api/v1/auth/login`, { email, password }).then(response => console.log(response.data)).catch(err => console.log(err.response.data));
  };

  return (
    // wrapper
    <div className="absolute inset-0 flex h-auto mt-24 bg-gray-100 md:mt-0 md:items-center md:justify-center">
      {/* login form */}
      <div className="w-full p-4 bg-white rounded-md md:p-8 md:w-4/5 lg:w-3/5">
        <form className="rounded-md" onSubmit={submitForm}>
          <div>
            <label className="block mb-2" htmlFor="email">Email</label>
            <input value={email} onChange={updateValues('email')} className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="email" name="email" id="email" />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">Password</label>
            <input value={password} minLength="8" onChange={updateValues('password')} className="w-full p-2 border-2 border-gray-100 rounded-lg outline-none" type="password" name="password" id="password" />
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link href="/forgot-password">
              <a className="hover:text-green-600">
                Forgot Password?
              </a>
            </Link>
            <div>
              <button type="submit" className="px-3 py-2 font-semibold bg-green-500 rounded-md cursor-pointer text-gray-50 hover:bg-green-700 hover:text-white">{state.buttonText}</button>
              <a href="/register" className="px-3 py-2 ml-2 font-semibold text-gray-900 rounded-md cursor-pointer">Register</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}