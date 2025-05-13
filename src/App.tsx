import { AuthNavigation, AppNavigation } from "./navigation";
import { useAuth } from "./utils";
import { AuthProvider } from "./context";
import { ThemeProvider } from "./context";
import "@fontsource/poppins/400.css";       // Regular
import "@fontsource/poppins/500.css";       // Medium (para h3, subtítulos)
import "@fontsource/poppins/600.css";       // Semi-bold (para h2, títulos)
import "./App.css";

const Main = () => {
  const { User } = useAuth();

  return <>{User ? <AppNavigation /> : <AuthNavigation />}</>;
};
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
