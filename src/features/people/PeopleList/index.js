import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeopleList,
  selectPopularPeopleStatus,
} from "./popularPeopleSlice";
import { useEffect } from "react";
import { MainHeader } from "../../../common/MainHeader";
import { List, ListItem } from "./styled";
import { Container } from "../../../common/Container/styled";
import { PersonTile } from "../../../common/PersonTile";
import { ErrorPage } from "../../../common/ErrorPage";
import { Pagination } from "../../../common/Pagination";

export const PeopleList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, []);
  

  const status = useSelector(selectPopularPeopleStatus);
  const fetchResult = useSelector(selectPopularPeopleList);
  if (status === "success") 
  {
   if (status === "error") return <ErrorPage />
    return (
      <Container>
        <MainHeader
          title="Popular People"
        />
        <List>
          {fetchResult.results.map((person) => (
            <ListItem key={person.id}>
              <PersonTile
                person={person}
              />
            </ListItem>
          ))}
        </List>
        <Pagination />
      </Container>
    );
  }
};
