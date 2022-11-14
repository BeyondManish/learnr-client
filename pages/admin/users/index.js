import AdminLayout from "../../../components/layout/AdminLayout";

import axios from "axios";
import { useState, useEffect } from "react";
import UserTable from "../../../components/table/UserTable";

export default function AdminUserPage() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users")
      .then(res => {
        console.log(res.data.data.users);
        setUsers(res.data.data.users);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <AdminLayout>
      <div>
        <h1 className="mb-4 text-lg font-medium">All Users</h1>
        <UserTable headings={["username", "name", "email", "role", "action"]} data={users} />
      </div>
    </AdminLayout >
  );
}