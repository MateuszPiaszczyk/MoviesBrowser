import { Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "../../common/Navigation";
import { MoviesList } from "../../features/movies/MoviesList";
import { PeopleList } from "../../features/people/PeopleList";
import { MovieDetails } from "../../features/movies/MovieDetails";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";

export const App = () => (
  <>
    <Navigation />
  <Switch>
      <Route path={toMovies()}>
        <MoviesList />
      </Route>
      <Route path={toMovie({ movieId: ":movieId" })}>
        <MovieDetails />
      </Route>
      <Route path={toPeople()}>
        <PeopleList />
      </Route>
      <Route path={toPerson()}>test</Route>
      <Route path="/">
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </>
);
