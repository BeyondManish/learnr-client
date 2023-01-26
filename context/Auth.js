import axios from "axios";
import { createContext, useState } from "react";
import localData from "../utils/localData";
import https from "https";

//setup the header
const agent = new https.Agent({
  rejectUnauthorized: false
});

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(localData('auth') || { user: null, token: "" });

  // configure axios defaults
  if (process.server) {
    axios.defaults.baseURL = process.env.API; // the client is running in server
    // configure the ssl
    axios.defaults.httpsAgent = agent;
    axios.defaults.headers.common = {
      "Authorization": `Bearer ${auth.token}`
    };
  } else {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    axios.defaults.httpsAgent = agent;
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