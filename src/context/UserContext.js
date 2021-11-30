import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const initiateUser = currentUser ? currentUser : null;
  const [user, setUser] = useState(initiateUser);

  return <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>;
};
