import { Tile, Poster, Content, Title, Year, Tags, Tag, TagName, Rating, Star, Rate, Votes } from "./styled";
import { img } from "../../core/apiCodes";
import { Genres } from "../../features/MoviesList/Genres";

export const MovieTile = ({ movie, genres}) => {
    const genresMovie = Genres.filter((genre) => genres.includes(genre.id));
    return (
        <Tile>
            <Poster src={`${img}${movie.poster_path}`} alt="movie poster" />
            <Content>
                <Title>{movie.title}</Title>
                <Year>{movie.release_date.slice(0, 4)}</Year>
                <Tags>
                {genres ? genresMovie.map((genre) => (
                    <Tag key={genre.id}>
                        <TagName>{genre.name}</TagName>
                    </Tag>
                )): null}
                </Tags>
                <Rating>
                    <Star />
                    <Rate>{movie.vote_average}</Rate>
                    <Votes>{movie.vote_count} votes</Votes>
                </Rating>
            </Content>
        </Tile>
    )
}