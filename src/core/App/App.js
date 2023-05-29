import { Redirect, Route, Switch, HashRouter } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { MoviesList } from "../../features/movies/MoviesList";
import { PeopleList } from "../../features/people/PeopleList";
import { MovieDetails } from "../../features/movies/MovieDetails";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";

export const App = () => (
  <>
  <HashRouter>
    <Navigation />
    <Switch>
    <Route path={toMovie()}>
        <MovieDetails />
      </Route>
      <Route path={toMovies()}>
        <MoviesList />
      </Route>
      <Route path={toPeople()}>
        <PeopleList />
      </Route>
      <Route path="/">
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
    </HashRouter>
  </>
  
);
