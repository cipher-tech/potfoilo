import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family:${props => props.theme.font.mainFont};
  }  
  html{
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px;
    @media only screen and (min-width: 1700px) {
      font-size: 80%; 
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
      font-size: 50%; 
    }
  }
  body {
    display: grid;
    max-width: 2000px;
    justify-content: center;
    margin: auto;
    justify-items: center;
    background: ${props => props.theme.colorBg};
    align-content: center;
    box-sizing: border-box;
    min-height: 100vh;
    color: ${props => props.theme.colorSecondary};
    ${'' /* font-family: montserrat, sans-serif; */}
}
`
export default GlobalStyle  //DefaultStyle