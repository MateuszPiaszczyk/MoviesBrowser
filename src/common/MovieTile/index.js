import { Tile, Poster, Content, Title, Year, Tags, Tag, Rating, Star, Rate, Votes } from "./styled";
import { img } from "../../core/apiCodes";

export const MovieTile = ({ movie }) => {
    return (
        <Tile>
            <Poster src={`${img}${movie.poster_path}`} alt="movie poster" />
            <Content>
                <Title>{movie.title}</Title>
                <Year>{movie.release_date.slice(0, 4)}</Year>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Drama</Tag>
                </Tags>
                <Rating>
                    <Star />
                    <Rate>7,8</Rate>
                    <Votes>35 votes</Votes>
                </Rating>
            </Content>
        </Tile>
    )
}