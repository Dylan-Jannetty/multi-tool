import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthProvider from "../context/AuthContext";
import { auth } from "../firebase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setCurrentUser(user);
    });
  }, [currentUser, setCurrentUser]);
  return (
    <AuthProvider value={currentUser}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
