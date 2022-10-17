import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: undefined,
    token: undefined
  });

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      JSON.parse(localStorage.getItem('auth'));
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}