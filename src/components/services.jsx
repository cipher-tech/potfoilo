import React from 'react'
import styled from 'styled-components'
// import programmerSvg from "../images/servicesSvg.svg"
import bgSvg from "../images/aboutMeCurve.svg"
import { OffsetText, Triangle, XIcon } from './styledComponents'
import { ServiceCard } from '.'

const Overlay = styled.div`
    grid-column: 1/-1;
    position: relative;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    overflow: hidden;
    /* background-image: url(${bgSvg});
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-position-y: 10rem;
    background-size: 100%; */
     .aboutMeSvg{
        position: absolute;
        /* display: none; */
        /* visibility: hidden; */
        width: 100%;
        /* height: 100%; */
        object-fit: cover;
        display: block;
        padding: 0;
        z-index: -1;
        transform: rotateY(180deg);
        bottom: -30vh;
        @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
            bottom: -40%;
            /* height: 50%; */
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLargest}) {
            bottom: -25rem;
            /* height: 50%; */
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
            bottom: 0vh;
            height: 80%;
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
            bottom: 0vh;
            height: 90%;
            
        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
            bottom: 0vh;
            height: 100%;

        }
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            bottom: 0vh;
            height: 100%;

        }
    }
`
let Container = styled.div`
    /* background: skyblue; */
    grid-column: 2/10;
    position: relative;
    display: grid;    
    /* grid-template-rows: 100% ,auto; */
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    /* justify-items: center; */
    gap: 6rem;
    overflow: hidden;
    padding-bottom: 2rem;
    @media only screen and (min-width: ${props => props.theme.breakPoints.bpLargest}) {
        grid-template-columns: repeat(auto-fit, minmax(27.3333%, 1fr));
    }
    .services-title{
        /* background: blue; */
        margin-top: 8rem;
        grid-column: 1/-1;

        &--SvgIcon{
            position: absolute;
            width: 2rem;
            height: 2rem;
            top: 1rem;
            right: 40%;
        }
        &--SvgXIcon{
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            top: 9rem;
            left: 40%;
        }
    }
    .services-description{
        z-index: 10;
        margin: .3rem 1rem;
        background: white;
        display: grid;
        /* grid-column: 1/-1; */
        /* width: 33.3333%; */
        box-shadow: 0.3rem 0.3rem .7rem #ece7e773,
                -0.3rem -0.3rem .7rem rgba(94,104,121, .288);
        grid-template-columns: 1fr;
        justify-self: center;
        justify-items: center;
        font-size: 1.3rem;
        line-height: 1.5;

        &--svg{
            margin: 0rem;
            width: 16rem;
            height: 10rem;
            grid-column: 1/-1;
            }
        &--title{
            text-align: center;
            font-size: 1.5rem;
            grid-column: 1/-1;
            padding: 1rem;
            &-text{
                margin-top: 0;
            }
        }
        &--content{
            width: 80%;
        }
        &--subtitle{
            text-align: center;
            font-size: 1.5rem;
            grid-column: 1/-1;
            padding: 1rem;
            color: ${props => props.theme.colorPrimary}
        }
        &--tools{
            width: 80%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            padding:2rem;

            &-item{
                list-style-type: none;
            }
        }
    }
`
function Services() {
    return (
        <Overlay>
            <Container className="services">
            <OffsetText className="services-title" offset="Services">
                Services
                <div className="services-title--SvgIcon">
                    <Triangle />
                </div>
                <div className="services-title--SvgXIcon">
                    <XIcon />
                </div>
            </OffsetText>
            
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />

            
        </Container>
        <img src={bgSvg} className="aboutMeSvg" alt="aboutSvg" />
        </Overlay>
    )
}

export default Services
