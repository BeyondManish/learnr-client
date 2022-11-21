import { AuthContext } from '../../context/Auth';
import { useState, useContext, useEffect } from 'react';
import MainLayout from "../../components/layout/MainLayout";
import EditUserForm from '../../components/forms/EditUserForm';
import { loadCurrentUser } from '../../functions/load';
import { useRouter } from 'next/router';

// TODO: redirect to the user's profile if the user is the same as the logged in user


export default function EditMyProfile() {
  const [auth, setAuth] = useContext(AuthContext);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (auth?.token) {
      loadCurrentUser()
        .then(({ data }) => {
          setAuthenticatedUser(data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      router.push('/');
    }
  }, [auth?.token]);

  useEffect(() => {
    // redirect to the user's profile if the user is not the same as the logged in user 
    if (authenticatedUser && router.query.username) {
      if (authenticatedUser.username == router.query.username) {
        setLoading(false);
      } else {
        router.push(`/${router.query.username}`);
      }
    }
  }, [authenticatedUser, router.query.username]);



  const submitForm = async (user) => {
    await axios.put(`/user/${user.username}`, authenticatedUser).then(({ data }) => data.user).catch(err => null);
    alert('Profile updated successfully!');
  };

  return (
    <MainLayout>
      {
        !loading && (authenticatedUser) ? (
          <div className='flex justify-center'>
            <div className='w-full md:w-3/5 lg:w-3/5'>
              <h2 className="my-4 text-xl font-medium">Edit Profile</h2>
              <EditUserForm editUser={authenticatedUser} onSubmit={submitForm} showRole={false} />
            </div>
          </div>
        ) : ""
      }
    </MainLayout>
  );
};
