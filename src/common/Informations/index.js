import {
  reverseString,
  separateNamesByCommas,
  extractFirstWord,
} from "./utils";
import {
  Title,
  TitleDetails,
  Subtitle,
  SubtitleDetails,
  Value,
  Attribute,
  Paragraph,
  Wrapper,
} from "./styled";

export const MainInfo = ({ title, year }) => (
  <div>
    <Title>{title}</Title>
    {year && <Subtitle>{extractFirstWord(year)}</Subtitle>}
  </div>
);

export const AdditionalInfo = ({ production, release }) => (
  <Wrapper>
    {production && (
      <Paragraph>
        <Attribute mobile>Production:</Attribute>
        <Value>{separateNamesByCommas(production)}</Value>
      </Paragraph>
    )}
    {release && (
      <Paragraph>
        <Attribute mobile>Release date:</Attribute>
        <Value>{reverseString(release)}</Value>
      </Paragraph>
    )}
  </Wrapper>
);

export const PersonInfo = ({ dateOfBirth, placeOfBirth }) => (
  <Wrapper>
    {dateOfBirth && (
      <Paragraph>
        <Attribute mobile>Date of birth:</Attribute>
        <Value>{reverseString(dateOfBirth)}</Value>
      </Paragraph>
    )}
    {placeOfBirth && (
      <Paragraph>
        <Attribute mobile>Place of birth:</Attribute>
        <Value>{placeOfBirth}</Value>
      </Paragraph>
    )}
  </Wrapper>
);

export const MainInfoDetails = ({ title, year }) => (
  <>
    <TitleDetails>{title}</TitleDetails>
    {year && <SubtitleDetails>{extractFirstWord(year)}</SubtitleDetails>}
  </>
);
