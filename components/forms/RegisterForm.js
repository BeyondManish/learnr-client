import Link from "next/link";
import axios from "axios";
import { useContext, useState } from "react";
import { ErrorBanner, SuccessBanner } from "../Banner";
import { useRouter } from 'next/router';
import { AuthContext } from "../../context/Auth";
import SocialLogin from "../social media/SocialLogin";

export default function RegisterForm() {

  const router = useRouter();
  const [auth, setAuth] = useContext(AuthContext);

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    buttonText: "Register",
    error: "",
    success: ""
  });

  const { firstname, lastname, username, email, password, buttonText, error, success } = state;

  const updateValues = (value) => {
    return (e) => {
      setState({
        ...state, [value]: e.target.value, error: "", success: "", buttonText: "Register"
      });
    };
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`/auth/signup`, { firstname, lastname, username, email, password })
      .then(res => {
        console.log(res.data);
        const token = res.data.token;
        const user = res.data.data.user;
        setAuth({ token: token, user: user });
        setState({ ...state, success: res.data.message, error: "", buttonText: "Register" });
        localStorage.setItem("auth", JSON.stringify({ token: token, user: user }));
        if (user.role === "admin" || user.role === "author") router.push(`/${user.role}/dashboard`);
        else router.push(`/`);
      })
      .catch(err => {
        setState({ ...state, error: err.response.data.message || err.response.data.errors[0] || "", success: "", buttonText: "Register" });
      });
  };

  return (
    <>
      {/* wrapper */}
      <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow dark:bg-gray-900 sm:rounded-lg sm:px-10">
            {error && (
              <ErrorBanner message={state.error} />
            )}
            {success && (
              <SuccessBanner message={state.success} />
            )}
            <form className="space-y-6" method="POST">
              {/* firstname  */}
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Firstname
                </label>
                <div className="mt-1">
                  <input
                    onChange={updateValues('firstname')}
                    value={firstname}
                    id="firstname"
                    name="firstname"
                    type="firstname"
                    autoComplete="firstname"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none dark:bg-gray-600 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* lastname */}
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Lastname
                </label>
                <div className="mt-1">
                  <input
                    onChange={updateValues('lastname')}
                    value={lastname}
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    autoComplete="lastname"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none dark:bg-gray-600 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    onChange={updateValues('username')}
                    value={username}
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none dark:bg-gray-600 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    onChange={updateValues('email')}
                    value={email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none dark:bg-gray-600 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    value={password}
                    onChange={updateValues('password')}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none dark:bg-gray-600 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded dark:bg-gray-600 dark:border-gray-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900 dark:text-gray-200">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={submitForm}
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {buttonText}
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-500 bg-white dark:text-gray-300 dark:bg-gray-900">Or continue with</span>
                </div>
              </div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};