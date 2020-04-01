import styled from "styled-components";

let StyledText = styled.h4`
    text-align: center;
    /* position: relative; */
    display: flex;
    place-content: center;
    font-size: 4rem;
    font-weight: bold;
    font-family: "Mongolian Baiti";
    padding-top:4rem;
    text-decoration: underline;
    color: ${props => props.theme.colorPrimary};

    &::after{
        content: "About me"; /* ${props => props.offset} */
        position: absolute;
        top: .4rem;
        opacity: .2;
        left: 50%;
        transform: translate(-50%, 0%);
        font-size: 7rem;

        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            height: 2rem;
            font-size: 5rem;
            top: 1.6rem
        }
    }
`

export default  StyledText