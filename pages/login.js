import LoginForm from "../components/forms/LoginForm";
import MainLayout from "../components/layout/MainLayout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../context/Auth';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (auth.user) return router.push('/');
    setLoading(false);
  }, [auth?.token]);


  return (
    <MainLayout>
      {
        !loading && (
          // Login form
          <LoginForm />
        )
      }
    </MainLayout>
  );
}