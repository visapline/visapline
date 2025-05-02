import { AuthNavigation, AppNavigation } from "./navigation";
import { useAuth } from "./utils";
import { AuthProvider } from "./context";
import "./App.css";

const Main = () => {
  const { User } = useAuth();

  return <>{User ? <AppNavigation /> : <AuthNavigation />}</>;
};
function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}

export default App;
