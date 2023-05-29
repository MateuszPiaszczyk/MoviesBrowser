import styled from "styled-components";

export const BackdropWrapper = styled.div`
justify-content: center;
animation: eclipse 0.75s ease-in-out;
animation-fill-mode: forwards;
`

export const Wrapper = styled.section`
max-width: 1400px;
margin: 0 auto;
padding: 0 16px;
position: relative;
`;

export const BackdropBody = styled.div`
position: relative;
padding: 0 16px;
aspect-ratio: 16 / 9;
background-image: ${({ background }) => `url(${background})`};
background-position: center;
background-repeat: no-repeat;
background-size: cover;
animation: reveal 2s ease-in-out 0.75s;
animation-fill-mode: forwards;
opacity: 0;
`;

export const Title = styled.h1`
color: ${({ theme }) => theme.colors.white};
font-size: 64px;
font-weight: 600;
line-height: 1.2;
margin: 24px 0;
`;

export const BackdropContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 56px;
  `;

export const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
inset: 0;
aspect-ratio: 16 / 9;
`;
