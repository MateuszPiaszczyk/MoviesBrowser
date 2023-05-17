import { Link } from "react-router-dom"
import { ReactComponent as ErrorIcon} from "../img/error.svg";
import { ErrorWrapper, ErrorMessage, ErrorInfo, Button } from "./styled";
export const ErrorPage = () => {
    <ErrorWrapper>
        <ErrorIcon />
        <ErrorMessage>Ooops! Something went wrong... </ErrorMessage>
        <ErrorInfo>Please check your network connection and try again</ErrorInfo>
        <Link to="/">
            <Button>Back to home page</Button>
        </Link>
    </ErrorWrapper>
}