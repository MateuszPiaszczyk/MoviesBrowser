import styled from "styled-components";
import { ReactComponent as Error } from "../img/error.svg";

export const ErrorWrapper = styled.section`
  text-align: center;
  margin-top: 180px;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 140px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 600px;
  font-size: 36px;
  margin-top: 38px;
  margin-bottom: 0px;
  line-height: 1.2;
  font-style: normal;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const ErrorIcon = styled(Error)`
  width: 100px;
  height: 90px;
  margin: 0 0 38px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 80px;
  }

`;

export const ErrorInfo = styled.h2`
  font-weight: 500px;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;
  margin: 24px auto;
  max-width: 440px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    margin: 16px auto;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: white;
  padding: 16px 24px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  font-family:"Open Sans",sans-serif;
  transition: opacity 0.3s ease-in-out;
  &:hover{
        opacity: 0.7;
    };
`;
