import { ReactComponent as NoResultPicture} from "../../assets/NoResultPicture.svg"
import { Wrapper } from "./styled"

export const NoResult = () => {
    return (
        <>
        <Message title={"Sorry,there are no results for this movie"} />
        <Wrapper>
            <NoResultPicture />
        </Wrapper>
        </>
    )
}