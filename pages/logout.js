import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth";

export default function Logout() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // remove token from localstorage
    localStorage.clear('auth');
    // remove from the context
    setAuth({ user: null, token: "" });
    // redirect to homepage
    router.push('/');
  }, []);
  return (<></>);
}