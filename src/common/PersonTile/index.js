import { Name, Photo, PhotoWrapper, Tile } from "./styled";
import { img } from "../../core/apiCodes";
import noPhoto from "../img/no-photo.svg";

export const PersonTile = ({ person }) => {
    return (
        <Tile>
            <PhotoWrapper>
                {person.profile_path ? (
                    <Photo src={`${img}${person.profile_path}`} alt={person.name} />
                ) : (
                    <img src={noPhoto} alt="Picture is not available" />
                )}

            </PhotoWrapper>
            <Name>{person.name}</Name>
        </Tile>
    )
};