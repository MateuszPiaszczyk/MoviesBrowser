import { Name, Photo, Tile } from "./styled";
import { img } from "../../core/apiCodes";

export const PersonTile = ({ person }) => {
  return (
    <Tile>
      <Photo src={`${img}${person.profile_path}`} alt={person.name} />
      <Name>{person.name}</Name>
    </Tile>
  );
};
