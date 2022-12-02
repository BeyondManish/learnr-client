import { useContext, useEffect, useState } from "react";
import AuthorLayout from "../../../components/layout/AuthorLayout";
import { ErrorBanner, SuccessBanner } from "../../../components/Banner";
import axios from "axios";
import CategoryTable from "../../../components/table/CategoryTable";
import { loadCategories } from "../../../functions/load";
import { PostContext } from "../../../context/Post";
import { useRouter } from "next/router";

export default function CategoriesAdminPage() {
  const [state, setState] = useState({
    name: "",
    error: "",
    success: ""
  });

  const [postData, setPostData] = useContext(PostContext);

  const { name, error, success } = state;
  const router = useRouter();

  const updateValues = (e) => {
    setState({ ...state, name: e.target.value, error: "", success: "" });
  };

  useEffect(() => {
    loadCategories().then((res) => {
      setPostData((prev) => ({ ...prev, categories: res.data.categories }));
    });
  }, []);

  const submitFrom = (e) => {
    e.preventDefault();
    axios.post(`category/create`, { name })
      .then((response) => {
        setState({ ...state, success: response.data.message, error: "" });
        router.push("/author/categories");
      })
      .catch((err) => {
        console.log(err.response);
        setState({ ...state, error: err.response.data.message || err.response.data.errors[0], success: "" });
      });
  };

  return (
    <AuthorLayout>
      <h1 className="mb-4 text-xl font-semibold">Create Category</h1>
      <div className="p-6 bg-white dark:bg-gray-900 dark:text-gray-100 rounded-md w-[50%]">
        {/* Create category form */}
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
            <label htmlFor="category" className="block mb-2 font-medium">
              Category Name
            </label>
            <input
              type="text"
              value={name}
              onChange={updateValues}
              name="category"
              id="category"
              className="block w-full border-gray-300 rounded-md shadow-sm dark:border-gray-900 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
      <h1 className="my-4 text-xl font-semibold">All Categories</h1>
      <div>
        <CategoryTable headings={["name", "slug"]} data={postData.categories} showActions={false} />
      </div>

    </AuthorLayout>
  );
}