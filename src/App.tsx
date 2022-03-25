import React from "react";
import "./styles.css";
import "antd/dist/antd.css";
import AuthContext, { User } from "./common/AuthContext";
import SignIn from "./pages/SignIn/SignIn";
import Main from "./pages/Main/Main";

export default function App() {
  const [user, setUser] = React.useState<User | undefined>(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">{user ? <Main /> : <SignIn />}</div>
    </AuthContext.Provider>
  );
}
