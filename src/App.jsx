import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/darkTheme";
import Navbar from "./components/Navabar/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";

function App() {
  const user = true;
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {user ? (
          <div>
            <Navbar />
            <Home />
          </div>
        ) : (
          <Auth />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
