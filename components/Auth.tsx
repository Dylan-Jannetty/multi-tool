import { useState } from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <>
          <button onClick={() => setShowLogin(false)}>SignUp page</button>{" "}
          <Login />
        </>
      ) : (
        <>
          <button onClick={() => setShowLogin(true)}>Login Page</button>
          <SignUp />
        </>
      )}
    </>
  );
};

export default AuthPage;
