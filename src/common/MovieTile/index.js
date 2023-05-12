import { Tile, Poster, Content, Title, Year, Tags, Tag, Rating, Star, Rate, Votes } from "./styled"
import poster from "../../common/img/poster.png";

export const MovieTile = () => {
    return (
        <Tile>
            <Poster src={poster} alt="movie poster" />
            <Content>
                <Title>Mulan</Title>
                <Year>2020</Year>
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