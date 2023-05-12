import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPerson,
  selectPopularPersonList,
  selectPopularPersonStatus,
} from "./popularPersonSlice";
import { useEffect } from "react";
import { img } from "../../core/apiCodes";

export const PersonList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularPerson());
  });

  const status = useSelector(selectPopularPersonStatus);
  const fetchResult = useSelector(selectPopularPersonList);
  if (status === "success") {
    console.log(fetchResult.results);
    return (
      <ul>
        {fetchResult.results.map((person) => (
          <li key={person.id}>
            {person.name}
            <img src={`${img}${person / profile_path}`} alt=""></img>
          </li>
        ))}
      </ul>
    );
  }
};
