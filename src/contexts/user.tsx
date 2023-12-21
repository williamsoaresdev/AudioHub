import React, { createContext, useContext } from "react";

type TypeUser = {
  children: React.ReactNode;
};

export interface IItem {
  username: string;
  token: string;
}

interface IUser {
  user: IItem;
  setUser: (value: any) => void;
}

const initialValue = {
  user: {
    username: "",
    token: "",
  },
  setUser: () => {},
};

export const UserContext = createContext<IUser>(initialValue);

function UserProvider({ children }: TypeUser) {
  const [user, setUser] = React.useState(initialValue.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
