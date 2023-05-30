import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeopleList,
  selectPopularPeopleStatus,
} from "./popularPeopleSlice";
import { useEffect } from "react";
import { MainHeader } from "../../../common/MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import { Container } from "../../../common/Container/styled";
import { PersonTile } from "../../../common/PersonTile";
import { ErrorPage } from "../../../common/ErrorPage";
import { Pagination } from "../../../common/Pagination";
import { toPerson } from "../../../core/App/routes";

export const PeopleList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, []);

  const status = useSelector(selectPopularPeopleStatus);
  const fetchResult = useSelector(selectPopularPeopleList);
  if (status === "success") {
    if (status === "error") return <ErrorPage />;
    return (
      <Container>
        <MainHeader title="Popular People" />
        <List>
          {fetchResult.results.map((person) => (
            <ListItem key={person.id}>
              <StyledLink to={toPerson({ personId: person.id })}>
                <PersonTile person={person} />
              </StyledLink>
            </ListItem>
          ))}
        </List>
        <Pagination />
      </Container>
    );
  }
};
