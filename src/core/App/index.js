import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { MovieList } from "../../features/MoviesList";
import { Navigation } from "../../common/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <MovieList />
    </ThemeProvider>
  );
}

export default App;
