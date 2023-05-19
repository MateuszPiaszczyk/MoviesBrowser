import { Wrapper, Button, ButtonText, Text, PageText } from "./styled"

export const Pagination = () => {
    return (
      <Wrapper>
        <Button>
          <ButtonText>
            First
          </ButtonText>
        </Button>
        <Button>
          <ButtonText>
            Previous
          </ButtonText>
        </Button>
        <Text>
          Page
        </Text>
        <PageText>
          1
        </PageText>
        <Text>
          of
        </Text>
        <PageText>
          500
        </PageText>
        <Button>
          <ButtonText>
            Next
          </ButtonText>
        </Button>
        <Button>
          <ButtonText>
            Last
          </ButtonText>
        </Button>
      </Wrapper>
    )
  };