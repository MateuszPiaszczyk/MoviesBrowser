import { img } from "../../../../core/apiCodes";
import {
    BasicInfo,
    PersonData,
    PersonTileWrapper,
    PersonName,
    PersonPhoto,
    Birth,
    BirthDetails,
    Biography
} from "./styled";
import personPhoto from "../../../../common/img/person.png";

export const MainPersonTile = ({ poster, name, birthday, birthplace, biography }) => {
    return (
        <PersonTileWrapper>
            {poster && <PersonPhoto src={`${img}${poster}`} />}
            <PersonData>
                <PersonName>{name}</PersonName>
                {birthday && (
                <BasicInfo>
                    <Birth>Date of birth: </Birth>
                    <BirthDetails>{birthday}</BirthDetails>
                </BasicInfo>
                )}
                {birthplace && (
                <BasicInfo>
                    <Birth>Place of birth: </Birth>
                    <BirthDetails>{birthplace}</BirthDetails>
                </BasicInfo>
                )}
            </PersonData>
            {biography && <Biography>{biography}</Biography>}
        </PersonTileWrapper>
    );
};



