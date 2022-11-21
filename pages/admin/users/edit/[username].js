import axios from 'axios';
import EditUserForm from '../../../../components/forms/EditUserForm';
import AdminLayout from '../../../../components/layout/AdminLayout';
import { loadUser } from '../../../../functions/load';

export default function EditUser({ user }) {

  const submitForm = (user) => {
    axios.put(`/admin/user/${user.username}`, user).then(() => {
      alert('User updated successfully');
    }).catch((err) => {
      console.log(err);
      alert('Error updating user');
    });
  };

  return (
    <AdminLayout>
      <div className='flex flex-col'>
        <h2 className='my-2 text-xl font-medium'>Edit User</h2>
        <div className='flex justify-center'>
          <EditUserForm className="w-2/3 my-10" editUser={user} onSubmit={submitForm} showRole={true} />
        </div>
      </div>
    </AdminLayout >
  );
}

export const getServerSideProps = async ({ params }) => {
  const user = await loadUser(params.username).then(({ data }) => data.user).catch(err => null);
  if (!user) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      user,
    },
  };
};