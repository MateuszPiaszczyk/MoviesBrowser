import { ErrorPage } from "../ErrorPage";
import { Loading } from "../Loading";
import { NoResult } from "../NoResult";
import { OutputResultList, SearchInfo, Wrapper } from "./styled";

export const SearchResultPage = ({ status, title }) => {
  switch (status) {
    case "initial":
      return null;

    case "loading":
      return <Loading />;

    case "error":
      return <ErrorPage />;

    case "success":
      return (
        <Wrapper>
          <SearchInfo>Search result for {title}</SearchInfo>
          <OutputResultList />
        </Wrapper>
      );

      case "noresult": 
      return <NoResult />;

    default:
      throw new Error(`ENG: INCORRECT STATUS: ${status}`);
  }
};
