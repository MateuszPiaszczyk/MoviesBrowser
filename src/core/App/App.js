import { Redirect, Route, Switch } from "react-router-dom";

import { Navigation } from "../../common/Navigation";
import { MoviesList } from "../../features/MoviesList";
import { PeopleList } from "../../features/PeopleList";

import { toMovie, toMovies, toPeople, toPerson } from "./routes";


export const App = () => (
  <>
    <Navigation />
    <Switch>
      <Route path={toMovies()}>
        <MoviesList />
      </Route>
      <Route path={toMovie()}>test</Route>
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
