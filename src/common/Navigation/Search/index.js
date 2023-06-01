import { useLocation } from "react-router-dom";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../features/queryParameters";
import {
  pageQueryParamName,
  searchQueryParamName,
} from "../../../features/queryParamName";
import { SearchBox, SearchInput, StyledSearchIcon, Wrapper } from "./styled";

export const Search = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);
  const location = useLocation();

  const onInputChange = ({ target }) => {
    replaceQueryParameter([
      {
        key: searchQueryParamName,
        value: target.value.trim() !== "" ? target.value : undefined,
      },
      {
        key: pageQueryParamName,
        value: 1,
      },
    ]);
  };

  return (
    <Wrapper>
      <SearchBox>
        <StyledSearchIcon />
      </SearchBox>
      <SearchInput
        onChange={onInputChange}
        value={query || ""}
        placeholder={`${
          location.pathname.includes("movie")
            ? "Search for movies..."
            : "Search for people..."
        }`}
      />
    </Wrapper>
  );
};
