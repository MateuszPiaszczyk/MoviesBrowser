import styled from "styled-components";

export const ErrorWrapper = styled.section`
text-align: center;
@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 140px;
  }
`;

export const ErrorMessage = styled.p`
font-weight: 600px;
font-size: 36px;
line-height: 43px;
margin: 24px 0 0 0;
`

export const ErrorIcon = styled(Error)`
width: 100px;
height: 90px;
margin:0 0 38px;
`

export const ErrorInfo = styled.h2`
font-weight: 500px;
font-size: 22px;
line-height: 130%;
text-align:center;
margin: 24px 0 0 0;
`

export const Button = styled.button`
background-color: ${({ theme }) => theme.color.scienceBlue};
`