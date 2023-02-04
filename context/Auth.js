import axios from "../utils/axios";
import { createContext, useState } from "react";
import localData from "../utils/localData";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(localData('auth') || { user: null, token: "" });

  // configure the default header if auth
  axios.defaults.headers.common = {
    "Authorization": `Bearer ${auth.token}`
  };

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}