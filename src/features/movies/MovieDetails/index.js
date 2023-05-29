import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetails, getMovieId, selectCast, selectCrew, selectDetails, selectMovie, selectMovieState, selectStatus } from "./movieDetailsSlice";
import { MainHeader } from "../../../common/MainHeader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieDetailsTile } from "../../../common/DetailsTiles";
import { Loading } from "../../../common/Loading";
import { Backdrop } from "./Backdrop";
import { Subtitle } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { List, Item } from "./styled";
import { NoResult} from "../../../common/NoResult";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieId({ movieId: id }));
  }, [id, dispatch]);

  const movieDetails = useSelector(selectMovieState);
  const cast = useSelector((state) => selectCast(state));
  const crew = useSelector((state) => selectCrew(state));
  const status = useSelector((state) => selectStatus(state));
  const details = useSelector(selectDetails);

  
  
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
{details.backdrop_path && (
<Backdrop 
background={details.backdrop_path}
title={details.original_title}
vote={details.vote_average}
votes={details.vote_count}
/>
)}
<MainHeader>
  <>
  <MovieDetailsTile
              poster={details.poster_path}
              title={details.original_title}
              year={details.release_date}
              genres={details.genres}
              vote={details.vote_average}
              votes={details.vote_count}
              overview={details.overview}
              production={details.production_countries}
              release={details.release_date}
            />
  </>
</MainHeader>
</>
  )
}

