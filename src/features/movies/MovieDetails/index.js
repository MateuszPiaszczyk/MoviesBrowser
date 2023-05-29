import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchMovieDetails, fetchMovieDetailsError ,getMovieId, selectCast, selectCrew, selectDetails, selectStatus } from "./movieDetailsSlice";
import { MainHeader } from "../../../common/MainHeader";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieDetailsTile } from "../../../common/DetailsTiles";
import { Loading } from "../../../common/Loading";
import { Backdrop } from "./Backdrop";
import { Subtitle } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { List, Item } from "./styled";

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const {movieId} = useParams();
  const details = useSelector(selectDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);

  useEffect(() => {
    console.log("movieId:", movieId);
    const fetchData = async () => {
      try {
        dispatch(getMovieId({movieId: movieId})); 
        dispatch(fetchMovieDetails()); 
      } catch (error) {
        console.error(error);
        dispatch(fetchMovieDetailsError());
      }
    };


    fetchData();
  }, [movieId, dispatch]);

  

  return (
    status === "loading" ?
    <Loading /> :
    status === "error" ?
    <ErrorPage /> :
    <>
      {details.backdrop_path && (
        <Backdrop
          background={details.backdrop_path}
          title={details.original_title}
          vote={details.vote_average}
          votes={details.vote_count}
        />
      )}

      <MainHeader
        content={
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

            />
            {cast.length > 0 && (
              <>
                <Subtitle subtitle="Cast" />
                <List>
                  {cast.map((person) => (
                    <Item key={person.credit_id}>
                      <PersonTile
                        id={person.id}
                        name={person.name}
                        role={person.character}
                        poster={person.profile_path}
                      />
                    </Item>
                  ))}
                </List>
              </>
            )}
            {crew.length > 0 && (
              <>
                <Subtitle subtitle="Crew" />
                <List>
                  {crew.map((person) => (
                    <Item key={person.credit_id}>
                      <PersonTile
                        id={person.id}
                        name={person.name}
                        role={person.job}
                        poster={person.profile_path}
                      />
                    </Item>
                  ))}
                </List>
              </>
            )}
          </>
        }
      />
    </>
  );
};
