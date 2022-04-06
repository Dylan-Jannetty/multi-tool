import AuthPage from "../components/auth";
import { useAuthValue } from "../context/AuthContext";

export default function Home() {
  const currentUser = useAuthValue();
  return (
    <>
      {currentUser ? (
        <>
          <div>Hello World {currentUser.email}!</div>
        </>
      ) : (
        <>
          <AuthPage />
        </>
      )}
    </>
  );
}
