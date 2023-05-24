import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container/styled";
import { MainHeader } from "../../../common/MainHeader";
import { List, StyledLink } from "./styled";
import { useEffect } from "react";
import {
  fetchPopularMovies,
  selectPopularMoviesList,
  selectPopularMoviesStatus,
} from "./popularMoviesSlice";
import { MovieTile } from "../../../common/MovieTile";
import { ErrorPage } from "../../../common/ErrorPage";
import { toMovie } from "../../../core/App/routes";
import { Pagination } from "../../../common/Pagination";

export const MoviesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  if (status === "success") {
    console.log(fetchResult.results);
    if (status === "error") return <ErrorPage />;
    return (
      <Container>
        <MainHeader title="Popular Movies" />
        <List>
          {fetchResult.results.map((movie) => (
            <div key={movie.id}>
              <StyledLink to={toMovie({ movieId: movie.id })}>
                <MovieTile
                  movie={movie}
                  id={movie.id}
                  genres={movie.genre_ids}
                />
              </StyledLink>
            </div>
          ))}
        </List>
        <Pagination />
      </Container>
    );
  }
};
