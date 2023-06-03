import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getMovieId, selectCast, selectCredits, selectCrew, selectDetails, selectStatus } from "./movieDetailsSlice";
import { MainContainer } from "../../../common/Container";
import { ErrorPage } from "../../../common/ErrorPage";
import { MovieDetailsTile } from "../../../common/DetailsTiles";
import { Loading } from "../../../common/Loading";
import { Backdrop } from "./Backdrop";
import { Subtitle } from "../../../common/Title";
import { PersonTile } from "../../../common/PersonTile";
import { List, Item, StyledLink } from "./styled";
import { toPerson } from "../../../core/App/routes";


export const MovieDetails = () => {
  const dispatch = useDispatch();
  const {movieId} = useParams();
  const details = useSelector(selectDetails);
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const status = useSelector(selectStatus);
  const credits = useSelector(selectCredits)

  useEffect(() => {
        dispatch(getMovieId({movieId: movieId}));
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

      <MainContainer
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
              release={details.release_date}

            />
            {credits.cast.length > 0 && (
              <>
                <Subtitle subtitle="Cast" />
                <List>
                  {credits.cast.map((person) => (
                    <Item key={person.credit_id}>
                      <StyledLink to={toPerson({ personId: person.id })}>
                      <PersonTile
                        id={person.id}
                        name={person.name}
                        role={person.character}
                        poster={person.profile_path}
                      />
                      </StyledLink>

                    </Item>
                  ))}
                </List>
              </>
            )}
            {credits.crew.length > 0 && (
              <>
                <Subtitle subtitle="Crew" />
                <List>
                  {credits.crew.map((person) => (
                    <Item key={person.credit_id}>
                      <StyledLink to={toPerson({ personId: person.id})}>
                      <PersonTile
                        id={person.id}
                        name={person.name}
                        role={person.job}
                        poster={person.profile_path}
                      />
                      </StyledLink>
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
