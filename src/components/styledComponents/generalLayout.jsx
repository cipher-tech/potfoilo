import styled from "styled-components"

let Layout = styled.div`
    display: grid;
   
    grid-template-rows:70rem repeat(7, min-content);
    grid-template-columns: repeat(10, [col-start] minmax(min-content, 1fr) [col-end] );
    overflow: hidden;
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        grid-template-rows: 60rem repeat(7, min-content);
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
        grid-template-rows: 50rem repeat(7, min-content);
    }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
        grid-template-rows: 40rem repeat(7, min-content);
    }
`

export default Layout