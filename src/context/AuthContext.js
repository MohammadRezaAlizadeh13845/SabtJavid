import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignUp, setIsSignUp] = useState(() => {
    const saved = localStorage.getItem("isSignUp");
    return saved !== null ? JSON.parse(saved) : "false";
  });

  useEffect(() => {
    localStorage.setItem("isSignUp", JSON.stringify(isSignUp));
  }, [isSignUp]);

  return (
    <div>
      <AuthContext.Provider value={{ isSignUp, setIsSignUp }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export const useAuth = () => useContext(AuthContext);
