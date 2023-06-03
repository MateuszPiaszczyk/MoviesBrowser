import { useDispatch, useSelector } from "react-redux";
import {
  selectPeoplePage,
  selectPopularPeople,
  selectPopularPeopleStatus,
  selectTotalPages,
  selectTotalResults,
  goToPage,
  setQuery,
} from "./popularPeopleSlice";
import { useEffect } from "react";
import { MainHeader } from "../../../common/MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import { Container } from "../../../common/Container/styled";
import { PersonTile } from "../../../common/PersonTile";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loading} from "../../../common/Loading";
import { NoResult} from "../../../common/NoResult";
import { Pagination } from "../../../common/Pagination";
import { toPerson } from "../../../core/App/routes";
import { useQueryParameter } from "../../queryParameters";
import { pageQueryParamName, searchQueryParamName } from "../../queryParamName";


export const PeopleList = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectPeoplePage);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const popularPeople = useSelector(selectPopularPeople);
  const status = useSelector(selectPopularPeopleStatus);

  const page = useQueryParameter(pageQueryParamName);
  const query = useQueryParameter(searchQueryParamName);

  useEffect(() => {
    dispatch(setQuery(query
      ? { query: query }
      : { query: "" }));
    dispatch(goToPage(page
      ? { page: page }
      : { page: 1 }));
  }, [query, page, dispatch]);

    return (
      status === "loading" ?
    <Loading /> :
    status === "error" ?
    <ErrorPage /> :
    <>
      {pageNumber > totalPages ?
      <ErrorPage /> : totalResults === 0 ?
      <NoResult /> :
      <Container>
        <MainHeader title={
                query
                  ? `Search results for “${query}” (${totalResults})`
                  : `Popular People`
              }/>
        <List>
          {popularPeople.map((person) => (
            <ListItem key={person.id}>
              <StyledLink to={toPerson({ personId: person.id })}>
              <PersonTile
                        id={person.id}
                        name={person.name}
                        role={person.character}
                        poster={person.profile_path}
                      />
              </StyledLink>
            </ListItem>
          ))}
        </List>
        <Pagination pageNumber={pageNumber} totalPages={totalPages}/>
      </Container>
};
</>
    );
};