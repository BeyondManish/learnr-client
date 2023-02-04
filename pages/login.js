import LoginForm from "../components/forms/LoginForm";
import MainLayout from "../components/layout/MainLayout";
import { useContext, useEffect } from 'react';
import { AuthContext } from "../context/Auth";
import { useRouter } from 'next/router';
import { loadCurrentUser } from '../functions/load';

export default function LoginPage() {
  const router = useRouter();

  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    loadCurrentUser().then((data) => {
      console.log(data);
      if (data.status === "success") {
        router.push("/");
      }
      else {
        router.push("/login");
      }
    });
  }, []);

  return (
    // Login form
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
}