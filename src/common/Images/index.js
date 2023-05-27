import { Wrapper, Poster } from "./styled";
export const DetailsImage = ({ poster }) => {
    const URL = "https://image.tmdb.org/t/p/w500";
  
    return (
      <Wrapper movieDetails>
        <Poster noMovie />
        {poster && <Poster background={`${URL}${poster}`} />}
      </Wrapper>
    );
  };

  export const MovieImage = ({ poster }) => {
    const URL = "https://image.tmdb.org/t/p/w300";
  
    return (
      <Wrapper>
        <Poster noMovie />
        {poster && <Poster background={`${URL}${poster}`} />}
      </Wrapper>
    );
  };