import React, { createContext, useContext, useState } from 'react';

// 1️⃣ Create the context
const AuthContext = createContext();

// 2️⃣ AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to handle login
  const login = (userData) => {
    setUser(userData);
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook for easier access
export const useAuth = () => useContext(AuthContext);
