import { Name, StyledLink, Person, Role } from "./styled";
import { toPerson } from "../../core/App/routes";
import { PersonImage } from "../Images";


export const PersonTile = ({ name, role, poster, personId }) => (
  <>
    <Person>
      <PersonImage poster={poster} personId={personId} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Person>
  </>
);
