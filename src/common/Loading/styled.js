import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 17px;
    margin-top: 32px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.spinner.snuff};
  height: auto;
  margin: 120px auto 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 60px;
    margin-top: 32px;
  }
`;
