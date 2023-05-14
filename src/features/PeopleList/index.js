import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeopleList,
  selectPopularPeopleStatus,
} from "./popularPeopleSlice";
import { useEffect } from "react";
import { img } from "../../core/apiCodes";

export const PeopleList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularPeople());
  });

  const status = useSelector(selectPopularPeopleStatus);
  const fetchResult = useSelector(selectPopularPeopleList);
  if (status === "success") {
    console.log(fetchResult.results);
    return (
      <ul>
        {fetchResult.results.map((person) => (
          <li key={person.id}>
            {person.name}
            <img src={`${img}${person.profile_path}`} alt=""></img>
          </li>
        ))}
      </ul>
    );
  }
};
