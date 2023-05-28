import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails, getMovieId, selectCast, selectCrew, selectDetails, selectMovie, selectMovieState, selectStatus } from "./movieDetailsSlice";
import { MainHeader } from "../../../common/MainHeader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieDetailsTile } from "../../../common/DetailsTiles";
import { Loading } from "../../../common/Loading";
import { Backdrop } from "./Background";
import { Subtitle } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { List, Item } from "./styled";
import { NoResult} from "../../../common/NoResult"

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const movieDetails = useSelector((state) => selectMovieState(state));
  const cast = useSelector((state) => selectCast(state));
  const crew = useSelector((state) => selectCrew(state));
  const status = useSelector((state) => selectStatus(state));


  useEffect(() => {
    dispatch(fetchMovieDetails({ id: movieId }));
  }, [movieId, dispatch]);
  
  if (status === "loading") {
    return <Loading />;
}
if (status === "failed") {
  return <ErrorPage />;
}
if (status === "noresult") {
  return <NoResult />;
}
  return (
<>
{movieDetails && movieDetails.backdrop_path &&
                <Backdrop
                    title={movieDetails.original_title}
                    background={movieDetails.backdrop_path}
                    vote={movieDetails.vote_average}
                    votes={movieDetails.vote_count}
                />}
</>
  )
}
