import { useState } from "react";

export default function ForgotPasswordForm() {

  const [state, setState] = useState({
    email: "",
    error: "",
    buttonText: "Send Reset Link"
  });

  const { email, error, buttonText } = state;

  const updateValues = (e) => {
    setState({
      ...state, email: e.target.value, error: "", buttonText: "Send Reset Link"
    });
  };


  const submitForm = (e) => {
    e.preventDefault();
    console.table({ email });
    axios.post(`http://localhost:8000/api/v1/auth/forgot-password`, { email }).then(response => console.log(response.data))
      .catch(err => {
        console.log(err.response.data);
        setState({ ...state, error: err.response.data.message, buttonText: "Send Reset Link" });
      });
  };

  return (
    // wrapper
    <div className="flex items-center justify-center h-full">
      <div className="w-full md:w-[80%] lg:w-[60%] p-6 md:bg-white rounded-md">
        <div>
          <h1 className="mb-4 text-2xl font-semibold text-gray-700">Forgot Password</h1>
        </div>
        <div className="w-full">
          {error && <ErrorBanner message={error} />}
        </div>
        <form>
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={updateValues}
              name="email"
              id="email"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@email.com"
            />
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={submitForm}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {state.buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}