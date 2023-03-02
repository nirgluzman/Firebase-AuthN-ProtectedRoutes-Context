import { createContext, useContext } from "react";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return <UserContext.Provider value={}></UserContext.Provider>;
};

export const UserAuth = () => {
    return useContext(UserContext);
  };