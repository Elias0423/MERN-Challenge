import { createContext, useState, useEffect } from "react";
import { USER_KEY } from "../config/constants";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const userInfo = localStorage.getItem(USER_KEY);
  const initialState = userInfo ? JSON.parse(userInfo) : null;
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
