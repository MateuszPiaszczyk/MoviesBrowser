import { Container } from "../../../common/Container/styled"
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
import personPhoto from "../../../common/img/person.png";

export const PersonPage = () => {
    return (
        <Container>
            <PersonTileWrapper>
                <PersonPhoto src={personPhoto} />
                <PersonData>
                    <PersonName>Liu Yifei</PersonName>
                    <BasicInfo>
                        <Birth>Date of birth: </Birth>
                        <BirthDetails>25.08.1987 </BirthDetails>
                    </BasicInfo>
                    <BasicInfo>
                        <Birth>Place of birth: </Birth>
                        <BirthDetails>Wuhan, Hubei, China </BirthDetails>
                    </BasicInfo>
                </PersonData>
                <Biography>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</Biography>
            </PersonTileWrapper>
        </Container>

    );
};



