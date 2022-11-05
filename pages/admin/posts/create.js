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
import MediaModal from "../../../components/media/MediaModal";
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
  const [mediaModalVisible, setMediaModalVisible] = useState(false);

  const resetFields = () => {
    setTitle("");
    setContent("");
    setCategories([]);
    setFeaturedImage("");
    setCategories([]);
    setError("");
    setSuccess("");
  };

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
        <MediaModal visible={mediaModalVisible} onClick={() => setMediaModalVisible(false)} />
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
              <Button className="w-full" onClick={() => setMediaModalVisible(true)} icon={<ArrowUpTrayIcon />} text="Add Featured Image" />
            </div>
            {/* upload featured image end */}
            {/* publish button */}
            <div className="flex ">
              <Button text="Publish" onClick={publishPost} />
              <Link href=''>
                <a
                  className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium border border-transparent rounded-md hover:bg-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
