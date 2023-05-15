import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toMovies, toPeople } from "../../../core/App/routes";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../queryParameters";
import { searchQueryParamName } from "../../../searchQueryParamName";
import { SearchBox, SearchInput, StyledSearchIcon, Wrapper } from "./styled";

export const Search = () => {
  const queryURL = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();
  const location = useLocation();
  const [isWaiting, setWaiting] = useState(true);
  const [query, setQuery] = useState(queryURL);

  const onInputChange = ({ target }) => {
    setQuery(target.value);

    if (isWaiting) {
      setWaiting(false);
      setTimeout(() => {
        replaceQueryParameter({
          basicURL: location.pathname.includes("movie")
            ? toMovies()
            : toPeople(),
          key: searchQueryParamName,
          value: target.value.trim() !== "" ? target.value : undefined,
        });
        setWaiting(true);
      }, 500);
    }
  };

  return (
    <Wrapper>
      <SearchBox>
        <StyledSearchIcon />
      </SearchBox>
      <SearchInput
        value={query || ""}
        placeholder={`${
          location.pathname.includes("movie")
            ? "Search for movies..."
            : "Search for people..."
        }`}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
