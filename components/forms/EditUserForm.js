import { useState } from 'react';
import classNames from '../../utils/classNames';
import { uploadImage } from '../../functions/upload';

export default function EditUserForm({ onSubmit, editUser, onCancel, className, showRole = showRole || false }) {
  const [user, setUser] = useState(editUser);

  return (
    <form className={classNames(className, "p-8 space-y-8 bg-white rounded-md dark:bg-gray-900")}>
      <div>
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={user?.firstname}
                onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                autoComplete="given-name"
                className="block w-full border-gray-300 rounded-md shadow-sm dark:bg-gray-600 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={user?.lastname}
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                className="block w-full border-gray-300 rounded-md shadow-sm dark:bg-gray-600 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="block w-full border-gray-300 rounded-md shadow-sm dark:bg-gray-600 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          {
            showRole && (
              <div className="sm:col-span-3">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                  Role
                </label>
                <div className="mt-1">
                  <select
                    id="role"
                    name="role"
                    value={user?.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    className="block w-full border-gray-300 rounded-md shadow-sm dark:bg-gray-600 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="admin">Admin</option>
                    <option value="author">Author</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Username
            </label>
            <div className="flex mt-1 rounded-md shadow-sm dark:bg-gray-600 dark:border-gray-600">
              <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md sm:text-sm">
                @
              </span>
              <input
                type="text"
                name="username"
                id="username"
                value={user?.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="flex-1 block w-full min-w-0 border-gray-300 rounded-none dark:disabled:text-gray-300 dark:bg-gray-600 dark:border-gray-600 disabled:text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                disabled={true}
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Photo
            </label>
            <div className="flex items-center mt-1">
              <span className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <input type="file" id="myFile" name="filename" onChange={(e) => {
                uploadImage(e.target.files[0]).then((res) => {
                  setUser({ ...user, photo: res.url });
                });
              }} />
            </div>
          </div>
        </div>
      </div>
      <pre>{JSON.stringify(user, null, 4)}</pre>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onCancel={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => { e.preventDefault(); console.log(user); onSubmit(user); }}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
