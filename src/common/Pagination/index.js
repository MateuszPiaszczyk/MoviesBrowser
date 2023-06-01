import { Wrapper, Button, ButtonText, Text, PageText } from "./styled";

import { pageQueryParamName } from "../../features/queryParamName";
import { useReplaceQueryParameter } from "../../features/queryParameters";

export const Pagination = ({ pageNumber, totalPages }) => {
  const replaceQueryParameter = useReplaceQueryParameter();

  const page = parseInt(pageNumber);

  const toPage = (currentPage) => {
    replaceQueryParameter([
      {
        key: pageQueryParamName,
        value: currentPage,
      },
    ]);
  };
  return (
    <Wrapper>
      <Button disabled={page === 1} onClick={() => toPage(1)}>
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={page === 1} onClick={() => toPage(page - 1)}>
        <ButtonText>Previous</ButtonText>
      </Button>
      <Text>Page</Text>
      <PageText>{page}</PageText>
      <Text>of</Text>
      <PageText>{totalPages}</PageText>
      <Button disabled={page === totalPages} onClick={() => toPage(page + 1)}>
        <ButtonText>Next</ButtonText>
      </Button>
      <Button disabled={page === totalPages}
        onClick={() => toPage(totalPages)}>
        <ButtonText>Last</ButtonText>
      </Button>
    </Wrapper>
  );
};
