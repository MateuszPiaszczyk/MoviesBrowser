import { OutputResultList, SearchInfo, Wrapper } from "./styled";

export const SearchResultPage = ({ title }) => {
  <Wrapper>
    <SearchInfo>Search result for {title}</SearchInfo>
    <OutputResultList />
  </Wrapper>
};
