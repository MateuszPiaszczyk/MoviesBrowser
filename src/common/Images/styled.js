import styled,{ css } from "styled-components"

export const Wrapper = styled.div`
  background-color: silver;
  display: flex;
  justify-content: center;
  `

export const Poster = styled.div.attrs(
    ({ background }) =>
      background && {
        style: {
          backgroundImage: `url(${background})`,
        },
      }
  )`
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    background-size: cover;
    `