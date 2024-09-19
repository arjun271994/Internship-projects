import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [isLogged, setisLogged] = useState({
    flag: false,
    user: "",
  });
  return (
    <AuthContext.Provider value={{ isLogged, setisLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
