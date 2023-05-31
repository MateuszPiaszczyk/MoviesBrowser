import { Name, Photo, PhotoWrapper, Tile } from "./styled";
import { IMG_URL } from "../../core/apiCodes";
import noPhoto from "../img/no-photo.svg";
import {toPerson} from "../../core/App/routes";
import { PersonImage } from "../Images";

export const PersonTile = ({ person }) => {
    return (
        <Tile>
            <PhotoWrapper>
                {person.profile_path ? (
                    <Photo src={`${IMG_URL}${person.profile_path}`} alt={person.name} />
                ) : (
                    <img src={noPhoto} alt="Picture is not available" />
                )}

            </PhotoWrapper>
            <Name>{person.name}</Name>
        </Tile>
    )
};

export const PersonCastTile = ({ name, role, poster, personId}) => (
    <StyledLink to={toPerson({personId: personId})}>
        <Person>
            <PersonImage poster={poster} personId={personId} />
            <Name>{name}</Name>
            <Role>{role}</Role>
        </Person>
    </StyledLink>
)