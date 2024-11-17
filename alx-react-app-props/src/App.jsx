import ProfilePage from "./ProfilePage";
import { UserProvider } from "./UserContext"; // Import UserContext.Provider

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>
      {" "}
      {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
