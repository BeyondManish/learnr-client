import AdminLayout from "../../../components/layout/AdminLayout";
import Editor from "rich-markdown-editor";
import { useState, useEffect, useRef, Fragment } from "react";
import MultiSelect from "../../../components/forms/MultiSelect";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../components/Buttons";
import Link from "next/link";
import { uploadImage } from "../../../functions/upload";
import axios from "axios";
import { loadCategories } from "../../../functions/load";
import { ErrorBanner, SuccessBanner } from "../../../components/Banner";
import localData from "../../../utils/localData";
import { Dialog, Transition } from '@headlessui/react';
import Media from "../../../components/media";
import { useRouter } from "next/router";
import Head from 'next/head';

export default function CreatePostPage() {

  const router = useRouter();

  const [title, setTitle] = useState(localData('postTitle') || "");
  const [content, setContent] = useState(localData('postContent') || "");
  const categories = localData('Categories') || [];
  const [featuredImage, setFeaturedImage] = useState(localData('postFeaturedImage') || "");
  const [categoriesValue, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetFields = () => {
    setTitle("");
    setContent("");
    setCategories([]);
    setFeaturedImage("");
    setCategories([]);
    setError("");
    setSuccess("");
  };

  // featured image upload modal
  const [uploadModalVisible, setUploadModalVisible] = useState(false);


  useEffect(() => {
    loadCategories().then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  // publish post
  const publishPost = async () => {
    console.table({ title, content, categories, isPublished: true });
    axios.post('/posts/create-post', { title, content, categories: categories, isPublished: true })
      .then(res => {
        console.log(res.data);
        setSuccess(res.data.message);
        // resetFields();
        router.push("/admin/posts");
      })
      .catch(err => { console.log(err); setError(err.response.data.message || err.response.data.errors[0]); });
  };

  // save post as draft
  const savePost = async () => {
    console.table({ title, content, categories, featuredImage: featuredImage ? featuredImage : "", isPublished: false });
    // await axios.post('/posts/create-post', { title, content, categories: categories, featuredImage: featuredImageURL ? featuredImage : "", isPublished: false });
  };

  return (
    <>
      {/* Head for the page */}
      <Head>
        <title>
          Create Post | Learnr
        </title>
      </Head>
      {/* End of Head */}
      <AdminLayout>
        {/* modal for upload image */}
        <Transition.Root show={uploadModalVisible} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 z-40 overflow-y-auto" onClose={setUploadModalVisible}>
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setUploadModalVisible(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Upload Image
                      </Dialog.Title>
                      <div className="mt-2">
                        <Media />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setUploadModalVisible(false)}
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setUploadModalVisible(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* end modal for upload image */}


        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5">
            {error && (
              <ErrorBanner message={error} />
            )}
            {success && (
              <SuccessBanner message={success} />
            )}
            <div>
              <h1 className="mb-4 text-xl font-medium">Create a new post</h1>
            </div>
            <div className="mb-8">
              {/* post title */}
              <label htmlFor="postTitle" className="sr-only">
                Post Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  localStorage.setItem('postTitle', JSON.stringify(e.target.value));
                }}
                name="postTitle"
                id="postTitle"
                className="block w-full text-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Create a post title" required
              />
              {/* post title end */}
            </div>
            <Editor placeholder="Write something..."
              defaultValue={content}
              onChange={(value) => {
                setContent(value());
                localStorage.setItem("postContent", JSON.stringify(value()));
              }}
              uploadImage={(file) => uploadImage(file)}
            />
          </div>
          <div className="w-full mt-5 lg:ml-8 lg:w-2/5">
            {/* categories multiselect */}
            <div className="mb-4">
              <MultiSelect label="Categories" values={categoriesValue} />
            </div>
            {/* categories multiselect end */}
            {/* upload featured image */}
            <div className="mb-4">
              <Button className="w-full" onClick={() => setUploadModalVisible(true)} icon={<ArrowUpTrayIcon />} text="Add Featured Image" />
            </div>
            {/* upload featured image end */}
            {/* publish button */}
            <div className="flex ">
              <Button text="Publish" onClick={publishPost} />
              <Link href=''>
                <a
                  className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save as draft
                </a>
              </Link>
            </div>
            {/* publish button end */}
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
