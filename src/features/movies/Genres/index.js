import { useSelector } from "react-redux";
import { selectGenres } from "../MoviesList/popularMoviesSlice";
import { Wrapper, Genre } from "./styled";
import { getNames, extractNames } from "./utils";
export const Genres = [
  {"id":28,"name":"Action"},
  {"id":12,"name":"Adventure"},
  {"id":16,"name":"Animation"},
  {"id":35,"name":"Comedy"},
  {"id":80,"name":"Crime"},
  {"id":99,"name":"Documentary"},
  {"id":18,"name":"Drama"},
  {"id":10751,"name":"Family"},
  {"id":14,"name":"Fantasy"},
  {"id":36,"name":"History"},
  {"id":27,"name":"Horror"},
  {"id":10402,"name":"Music"},
  {"id":9648,"name":"Mystery"},
  {"id":10749,"name":"Romance"},
  {"id":878,"name":"Science Fiction"},
  {"id":10770,"name":"TV Movie"},
  {"id":53,"name":"Thriller"},
  {"id":10752,"name":"War"},
  {"id":37,"name":"Western"}
];

export const GenresDetails = ({ genres }) => {
  return (
    genres && (
      <Wrapper details>
        {extractNames(genres).map((genre) => (
          <Genre details key={genre}>{genre}</Genre>
        ))}
      </Wrapper>
    )
  );
};

export const GenresPerson = ({ genres }) => {
  const genresId = useSelector(selectPersonGenres);

  return (
    genres && (
      <Wrapper>
        {getNames(genres, genresId).map((genre) => (
          <Genre key={genre}>{genre}</Genre>
        ))}
      </Wrapper>
    )
  );
};