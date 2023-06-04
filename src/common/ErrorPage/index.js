import { Link } from "react-router-dom";
import { toMovies } from "../../core/App/routes";
import { ErrorWrapper, ErrorMessage, ErrorInfo, Button, ErrorIcon,} from "./styled";

export const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <ErrorIcon />
      <ErrorMessage>Ooops! Something went wrong... </ErrorMessage>
      <ErrorInfo>Please check your network connection and try again</ErrorInfo>
      <Link to={toMovies()}>
        <Button>Back to home page</Button>
      </Link>
    </ErrorWrapper>
  );
};