import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { MovieList } from "../../features/MoviesList";
import { Navigation } from "../../common/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation />
      <MovieList />
    </ThemeProvider>
  );
}

export default App;
