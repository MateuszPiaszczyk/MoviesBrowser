import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeopleList,
  selectPopularPeopleStatus,
} from "./popularPeopleSlice";
import { useEffect } from "react";
import { MainHeader } from "../../common/MainHeader";
import { List } from "./styled";
import { Container } from "../../common/Container/styled";
import { PersonTile } from "../../common/PersonTile";

export const PeopleList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, []);

  const status = useSelector(selectPopularPeopleStatus);
  const fetchResult = useSelector(selectPopularPeopleList);
  if (status === "success") {
    return (
      <Container>
        <MainHeader
          title="Popular People"
        />
        <List>
          {fetchResult.results.map((person) => (
            <li key={person.id}>
              <PersonTile
                person={person}
              />
            </li>
          ))}
        </List>
      </Container>
    );
  }
};
