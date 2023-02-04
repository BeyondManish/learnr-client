import LoginForm from "../components/forms/LoginForm";
import MainLayout from "../components/layout/MainLayout";
import { useContext, useEffect } from 'react';
import { AuthContext } from "../context/Auth";
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    if (auth.user) router.push('/');
  }, []);

  return (
    // Login form
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
}