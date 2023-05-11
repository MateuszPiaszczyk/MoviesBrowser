import { HashRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";

export const App = () => (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toMovies()}>
          <MoviesListPage />
        </Route>
        <Route path={toMovie()}>
          <MoviePage />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
        </Route>
        <Route path={toPerson()}>
          <PersonPage />
        </Route>
        <Route path="/">
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </HashRouter>
);
