import { ThemeProvider } from "styled-components";
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