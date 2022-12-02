import Link from "next/link";
import axios from "axios";
import { useState, useContext } from "react";
import { ErrorBanner, SuccessBanner } from "../Banner";
import { useRouter } from "next/router";
import SocialLogin from "../social media/SocialLogin";
import { AuthContext } from "../../context/Auth";

export default function Loginform() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  const [state, setState] = useState({
    email: "",
    password: "",
    buttonText: "Login",
    error: "",
    success: "",
  });

  const { email, password, error, success, buttonText } = state;

  const updateValues = (value) => {
    return (e) => {
      setState({
        ...state, [value]: e.target.value, error: "", success: "", buttonText: "Login"
      });
    };
  };

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`/auth/login`, { email, password })
      .then((res) => {
        const token = res.data.token;
        const user = res.data.data.user;
        setAuth({ token: token, user: user });
        localStorage.setItem("auth", JSON.stringify({ token: token, user: user }));
        setState({ ...state, success: res.data.message, error: "", buttonText: "Login" });
        console.log(user);
        if (user.role == "user") return router.push("/");
        router.push(`/${user.role}/dashboard`);
      })
      .catch(err => {
        setState({ ...state, error: err.response?.data.message || err.response?.data.errors[0] || "Something went wrong.", buttonText: "Login" });
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
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    onChange={updateValues('email')}
                    value={state.email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required={true}
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none dark:bg-gray-600 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    value={state.password}
                    onChange={updateValues('password')}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    minLength={8}
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
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded dark:border-gray-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900 dark:text-gray-50">
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
                  {state.buttonText}
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