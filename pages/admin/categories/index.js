import { useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { ErrorBanner } from "../../../components/Banner";
import axios from "axios";

export default function CategoriesAdminPage() {
  const [state, setState] = useState({
    name: "",
    error: "",
  });

  const { name, error } = state;

  const updateValues = (e) => {
    setState({ ...state, name: e.target.value, error: "" });
  };

  const submitFrom = (e) => {
    e.preventDefault();
    console.table({ name });
    axios.post(`http://localhost:8000/api/v1/category/create`, { name }).then((response) => console.log(response.data))
      .catch((err) => { console.log(err.response.data); setState({ ...state, error: err.response.data.message }); });
  };

  return (
    <AdminLayout>
      <h1 className="mb-4 text-xl font-semibold">Categories</h1>
      {/* Create categories form */}
      <div className="p-6 bg-white rounded-md">
        <form>
          <div className="w-full lg:max-w-[70%]">
            {error && <ErrorBanner message={error} />}
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
              className="block border-gray-300 rounded-md shadow-sm w-full lg:max-w-[70%] focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Data Science"
            />
          </div>
          <div className="mt-4">
            <button
              type="button"
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