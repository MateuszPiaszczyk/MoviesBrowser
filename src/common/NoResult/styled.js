import styled from "styled-components";
import { ReactComponent as NoResult } from "../img/noResult.svg";

export const Wrapper = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoResultIcon = styled(NoResult)`
  @media (max-width: 767px) {
    height: 200px;
  }
`;

export const Message = styled.div`
  display: flex;
  justify-content: left;
  margin: 0 0 150px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
`;