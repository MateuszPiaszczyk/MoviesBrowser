import search from "../../../assets/search.svg";
import { SearchBox,SearchInput, StyledSearchIcon, Wrapper } from "./styled";

export const Search = () => {
    return (
        <Wrapper>
            <SearchBox >
            <StyledSearchIcon />
          <SearchInput
            
            placeholder="Search for movies..."
          />
          </SearchBox>
        </Wrapper>
      );
};