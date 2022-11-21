import AdminLayout from "../../../components/layout/AdminLayout";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function AdminUserPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const headings = ["username", "name", "email", "role", "action"];

  useEffect(() => {
    axios.get("/users")
      .then(res => {
        console.log(res.data.data.users);
        setUsers(res.data.data.users);
      })
      .catch(err => console.log(err));
  }, []);


  const deleteUser = async (id) => {
    console.log(id);
    const answer = confirm("Are you sure you want to delete this user?");
    if (!answer) return;
    await axios.delete(`/user/${_id}`);
    setPostData(prev => (prev.users.filter(user => user._id !== id)));
  };

  const editUser = async (username) => {
    router.push(`/admin/users/edit/${username}`);
  };


  return (
    <AdminLayout>
      <div>
        <h1 className="mb-4 text-lg font-medium">All Users</h1>
        <div className="overflow-hidden border border-gray-300 dark:border-gray-900 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-900">
            <thead className="bg-gray-50">
              <tr>
                {/* get all the table head */}
                {
                  headings.length > 0 && headings.map(heading => (<th className="py-3 pl-4 pr-3 text-sm font-medium tracking-wide text-left text-gray-600 uppercase dark:bg-gray-900 dark:text-gray-200 sm:pl-6">{heading}</th>))
                }
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300 dark:bg-gray-800 dark:divide-gray-900">
              {
                users.map((user) => (
                  <tr key={user.username} className="">
                    <td className="px-4 py-4"><a className='hover:underline' href={`/admin/users/edit/${user.username}`}>{user.username}</a></td>
                    <td>{user.firstname + " " + user.lastname}</td>
                    <td className="px-4 py-4">{user.email}</td>
                    <td>{user.role}</td>
                    <td className="flex items-center px-4 py-4">
                      <div>
                        <button className="w-5 h-5 cursor-pointer" onClick={() => editUser(user.username)}>
                          <PencilSquareIcon />
                        </button> |
                        <button className="w-5 h-5 cursor-pointer" onClick={() => deleteUser(user._id)}>
                          <TrashIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
                )
              }
            </tbody>
          </table>
        </div>

      </div>
    </AdminLayout >
  );
}