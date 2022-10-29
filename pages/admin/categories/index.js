import { useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { ErrorBanner, SuccessBanner } from "../../../components/Banner";
import axios from "axios";

export default function CategoriesAdminPage() {
  const [state, setState] = useState({
    name: "",
    error: "",
    success: ""
  });

  const { name, error, success } = state;

  const updateValues = (e) => {
    setState({ ...state, name: e.target.value, error: "", success: "" });
  };

  const submitFrom = (e) => {
    e.preventDefault();
    axios.post(`category/create`, { name })
      .then((response) => setState({ ...state, success: response.data.message, error: "" }))
      .catch((err) => {
        console.log(err.response.data);
        setState({ ...state, error: err.response.data.message || err.response.data.errors[0], success: "" });
      });
  };

  return (
    <AdminLayout>
      <h1 className="mb-4 text-xl font-semibold">Categories</h1>
      {/* Create categories form */}
      <div className="p-6 bg-white rounded-md w-[50%]">
        <form>
          <div className="w-full">
            {error && (
              <ErrorBanner message={state.error} />
            )}
            {success && (
              <SuccessBanner message={state.success} />
            )}
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              value={name}
              onChange={updateValues}
              name="category"
              id="category"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Data Science"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              onClick={submitFrom}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}