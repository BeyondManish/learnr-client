import MainLayout from '../components/layout/MainLayout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { checkAdmin } from '../functions/check';
import CreateAdminForm from '../components/forms/CreateAdminForm';

export default function CreateAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  // check if the admin exists
  useEffect(() => {
    checkAdmin().then(({ data }) => {
      if (data.hasAdmin) {
        router.push('/login');
      }
      setTimeout(() => setLoading(false), 3000);
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
        {
          !loading && (<CreateAdminForm />)
        }
      </div>
    </MainLayout>
  );
};