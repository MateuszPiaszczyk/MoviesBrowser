import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { Navigation } from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
import { GlobalStyle } from "./GlobalStyle";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";

export const App = () => (
  <HashRouter>
    <GlobalStyle />
    <Navigation />
    <Normalize />
    <MoviesList />
    <Switch>
      <Route path={toMovies()} element={<MoviesList />} />
      <Route path={toMovie()}>test</Route>
      <Route path={toPeople()}>test</Route>
      <Route path={toPerson()}>test</Route>
      <Route path="">
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);
