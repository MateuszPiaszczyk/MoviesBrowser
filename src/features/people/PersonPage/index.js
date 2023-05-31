import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPersonDetails,
  fetchPersonDetailsError,
  getPersonId,
  selectCast,
  selectCrew,
  selectDetails,
  selectStatus
} from "./personSlice";
import { MainPersonTile } from "./MainPersonTile";
import { MainHeader } from "../../../common/MainHeader";
import { Container } from "../../../common/Container/styled";
import { Loading } from "../../../common/Loading";
import { ErrorPage } from "../../../common/ErrorPage";


export const PersonPage = () => {
  const dispatch = useDispatch();
  const { personId } = useParams();
  const details = useSelector((state) => {
    const details = selectDetails(state);
    console.log("Details:", details); // Dodaj ten console.log
    return details;
  });
  const cast = useSelector((state) => {
    const cast = selectCast(state);
    console.log("Cast:", cast); // Dodaj ten console.log
    return cast;
  });
  const crew = useSelector((state) => {
    const crew = selectCrew(state);
    console.log("Crew:", crew); // Dodaj ten console.log
    return crew;
  });
  const status = useSelector(selectStatus);

  useEffect(() => {
    console.log("personId:", personId);
    const fetchData = async () => {
      try {
        dispatch(getPersonId({ personId: personId }));
        dispatch(fetchPersonDetails());
      } catch (error) {
        dispatch(fetchPersonDetailsError());
      }
    };

    fetchData();
  }, [personId, dispatch]);

  if (status === "loading" || !details || !cast || !crew) {
    return <Loading />;
  }

  if (status === "error") {
    return <ErrorPage />;
  }

  return (
    <Container>
      <MainPersonTile
        poster={details.profile_path}
        name={details.name}
        birthday={details.birthday}
        birthplace={details.place_of_birth}
        biography={details.biography}
      />
      <MainHeader title="Movies - cast (4)" />
      <MainHeader title="Movies - crew (4)" />
    </Container>
  );
};
