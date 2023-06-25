import styled from "styled-components";

export const BackdropWrapper = styled.div`
  justify-content: center;
  animation: eclipse 0.75s ease-in-out;
  animation-fill-mode: forwards;

  @keyframes eclipse {
    100% {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
`;

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

  @keyframes reveal {
    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
    margin: 4px 0;
  }
`;

export const BackdropContent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-bottom: 10px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  aspect-ratio: 16 / 9;
  background: linear-gradient(
      270deg,
      #000000 0%,
      rgba(0, 0, 0, 0.873268) 0.97%,
      rgba(0, 0, 0, 0.720529) 2.4%,
      rgba(0, 0, 0, 0.294577) 5.8%,
      rgba(0, 0, 0, 0.159921) 7.77%,
      rgba(0, 0, 0, 0) 14.11%
    ),
    linear-gradient(
      90deg,
      #000000 0%,
      rgba(0, 0, 0, 0.984059) 0.98%,
      rgba(0, 0, 0, 0.967732) 1.84%,
      rgba(0, 0, 0, 0.865569) 2.7%,
      rgba(0, 0, 0, 0.230315) 9.27%,
      rgba(0, 0, 0, 0) 13.04%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    background: linear-gradient(
        192.09deg,
        rgba(0, 0, 0, 0) 65%,
        rgba(0, 0, 0, 0.106473) 69.25%,
        rgba(0, 0, 0, 0.235359) 74.4%,
        rgba(0, 0, 0, 0.492821) 82.77%,
        rgba(0, 0, 0, 0.740286) 89.82%,
        #000000 96.18%
      ),
      linear-gradient(
        90.09deg,
        #000000 8.05%,
        rgba(0, 0, 0, 0.984059) 9.4%,
        rgba(0, 0, 0, 0.967732) 10.59%,
        rgba(0, 0, 0, 0.865569) 11.79%,
        rgba(0, 0, 0, 0.230315) 20.89%,
        rgba(0, 0, 0, 0) 26.12%
      ),
      linear-gradient(
        269.75deg,
        #000000 8.69%,
        rgba(0, 0, 0, 0.873268) 10.09%,
        rgba(0, 0, 0, 0.720529) 12.16%,
        rgba(0, 0, 0, 0.294577) 17.19%,
        rgba(0, 0, 0, 0.159921) 19.93%,
        rgba(0, 0, 0, 0) 25.43%
      ),
      linear-gradient(
        180deg,
        #000000 -2.7%,
        rgba(0, 0, 0, 0.689555) 2.36%,
        rgba(0, 0, 0, 0.439033) 7.46%,
        rgba(0, 0, 0, 0.20628) 13.79%,
        rgba(0, 0, 0, 0) 23.65%
      );
  }
`;
