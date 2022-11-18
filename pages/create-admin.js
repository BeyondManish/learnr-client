import MainLayout from '../components/layout/MainLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { checkAdmin } from '../functions/check';
import CreateAdminForm from '../components/forms/CreateAdminForm';

export default function CreateAdminPage() {
  const router = useRouter();
  // check if the admin exists
  useEffect(() => {
    checkAdmin().then(({ data }) => {
      if (data.hasAdmin) {
        router.push('/login');
      }
    });
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>
          Create Admin
        </title>
      </Head>
      <div>
        <h1>Create Admin</h1>
        <CreateAdminForm />
      </div>
    </MainLayout>
  );
};