import { signOut } from "firebase/auth";
import AuthPage from "../components/auth";
import { useAuthValue } from "../context/AuthContext";
import { auth } from "../firebase";

export default function Home() {
  const currentUser = useAuthValue();

  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("you are logged out");
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
  return (
    <>
      {currentUser ? (
        <>
          <div>Hello World {currentUser.email}!</div>
          <button onClick={(e) => handleLogOut(e)}>Log Out</button>
        </>
      ) : (
        <>
          <AuthPage />
        </>
      )}
    </>
  );
}
