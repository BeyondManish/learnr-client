import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(JSON.parse(localStorage.getItem('auth')));
    }
  }, []);

  // configure axios defaults
  if (process.server) {
    axios.defaults.baseURL = process.env.API; // the client is running in server
    axios.defaults.headers.common = {
      "Authorization": `Bearer ${auth.token}`
    };
  } else {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    axios.defaults.headers.common = {
      "Authorization": `Bearer ${auth.token}`
    };
  };

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}