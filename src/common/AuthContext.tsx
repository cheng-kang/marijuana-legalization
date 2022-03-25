import React from "react";

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface AuthContextValue {
  user: User | undefined;
  setUser: (u: User) => void;
}

const AuthContext = React.createContext<AuthContextValue>({
  user: undefined,
  setUser: () => {}
});

export default AuthContext;
