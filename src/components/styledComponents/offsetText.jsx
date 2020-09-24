import styled from "styled-components";

let StyledText = styled.h4`
    text-align: center;
    /* position: relative; */
    display: flex;
    place-content: center;
    position: relative;
    font-size: 4rem;
    font-weight: bold;
    /* font-family: "Mongolian Baiti"; */
    padding-top:4rem;
    text-decoration: underline;
    color: ${props => props.white ? props.theme.colorLight: props.theme.colorPrimary};

    &::after{
        content: "${props => props.offset}";
        position: absolute;
        top: 2rem;
        opacity: .2;
        left: 48%;
        color: currentColor;
        transform: translate(-45%, 0%);
        font-size: 5rem;

        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            height: 2rem;
            font-size: 4.5rem;
            top: 1.6rem;
            left: 45%;
        }
    }
`

export default  StyledText