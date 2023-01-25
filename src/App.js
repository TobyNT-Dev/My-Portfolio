import { ThemeProvider } from "styled-components";
import { NavBar } from "./Components/NavBar/NavBar";
import { AppRouter } from "./Router/AppRouter";
import { GlobalStyles } from "./Styles/Global";
import { Theme } from "./Styles/Theme"

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;