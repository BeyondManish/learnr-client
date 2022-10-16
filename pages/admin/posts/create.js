import AdminLayout from "../../../components/layout/AdminLayout";
import Editor from "rich-markdown-editor";
import { useState } from "react";
import MultiSelect from "../../../components/forms/MultiSelect";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../components/Buttons";
import Link from "next/link";


export default function CreatePostPage() {

  const categories = [
    { id: 1, name: 'React' },
    { id: 2, name: 'C' },
    { id: 3, name: 'C++' },
    { id: 4, name: 'WordPress' },
    { id: 5, name: 'Game Theory' },
    { id: 6, name: 'Personality' },
  ];

  // check if there is any saved data
  const localData = (value) => {
    if (process.browser) {
      if (localStorage.getItem(value)) {
        return JSON.parse(localStorage.getItem(value));
      } else {
        return "";
      }
    }
  };

  const [title, setTitle] = useState(localData('postTitle'));
  const [content, setContent] = useState(localData('postContent'));

  return (
    <>
      <AdminLayout>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5">
            <div>
              <h1 className="mb-4 text-xl font-medium">Create a new post</h1>
            </div>
            <div className="mb-8">
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
            </div>
            <Editor placeholder="Write something..."
              defaultValue={content}
              onChange={(value) => {
                setContent(value());
                localStorage.setItem("postContent", JSON.stringify(value()));
              }} />
          </div>
          <div className="w-full mt-5 lg:ml-8 lg:w-2/5">
            <div className="mb-4">
              <MultiSelect label="Categories" values={categories} />
            </div>
            <div className="mb-4">
              <Button className="w-full" icon={<ArrowUpTrayIcon />} text="Add Featured Image" />
            </div>
            <div className="flex ">
              <Button text="Publish" />
              <Link href=''>
                <a
                  className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save as draft
                </a>
              </Link>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
