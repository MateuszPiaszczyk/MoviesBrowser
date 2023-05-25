import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container/styled";
import { MainHeader } from "../../../common/MainHeader";
import { List, StyledLink } from "./styled";
import { useEffect } from "react";
import { goToPage, setQuery, selectPage, selectPopularMovies, selectTotalPages, selectTotalResults, selectStatus } from "./popularMoviesSlice";
import { MovieTile } from "../../../common/MovieTile";
import { ErrorPage } from "../../../common/ErrorPage";
import { toMovie } from "../../../core/App/routes";
import { Pagination } from "../../../common/Pagination";
import { Loading} from "../../../common/Loading";
import { NoResult} from "../../../common/NoResult";
import { useQueryParameter } from "../../../queryParameters";
import { pageQueryParamName, searchQueryParamName } from "../../../searchQueryParamName";

export const MoviesList = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const popularMovies = useSelector(selectPopularMovies);
  const pageNumber = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages)
  const totalResults = useSelector(selectTotalResults);
  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(pageQueryParamName);


  useEffect(() => {
    dispatch(setQuery(query
      ? { query: query }
      : { query: "" }));
    dispatch(goToPage(page
      ? { page: page }
      : { page: 1 }));
  }, [query, page, dispatch]);

    return (
      status === "loading" ?
    <Loading /> :
    status === "error" ?
    <ErrorPage /> :
    <>
    {pageNumber > totalPages ?
      <ErrorPage /> : totalResults === 0 ?
      <NoResult /> :
      
      <Container>
        <MainHeader title={
                query
                  ? `Search results for “${query}” (${totalResults})`
                  : `Popular Movies`
              } />
        <List>
          {popularMovies.map((movie) => (
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
        <Pagination pageNumber={pageNumber} totalPages={totalPages}/>
      </Container>
};
</>
    );
}
