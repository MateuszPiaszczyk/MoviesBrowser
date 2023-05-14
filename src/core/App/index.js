import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { MoviesList } from "../../features/MoviesList";
import { Navigation } from "../../common/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation />
      <MoviesList />
    </ThemeProvider>
  );
}

export default App;