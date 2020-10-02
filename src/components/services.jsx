import React from 'react'
import styled from 'styled-components'
// import programmerSvg from "../images/servicesSvg.svg"
import programmerSvg from "../images/servicesSvg.svg"
import laravelSvg from "../images/svgIcons/laravelUndraw.svg"
import undrawReact from "../images/svgIcons/undrawReact.svg"
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
            right: 30%;
        }
        &--SvgXIcon{
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            top: 9rem;
            left: 30%;
        }
    }
`
function Services() {
    const services = [
        {
            img: programmerSvg,
            title: "Designer",
            content: `I appreciate clean and simplistic design patters, 
                including material design and neo-morphism, 
                and incorporate thoughtful interactions and animations.`,
            subtitle: "Things I Design",
            stack: "UX, UI, Web apps, Mobile apps.",
            subtitle2: "Design Tools:",
            tools: ["Balsamiq","AdobeXD","Invision","pen&Paper"]
        },
        {
            img: undrawReact,
            title: "Front-End ",
            content: `i enjoy building project from scratch 
                and make designs come alive using clean code.`,
            subtitle: "Language Stack",
            stack: "HTML, SCSS, JavaScript, Typescript, React, NextJs.",
            subtitle2: "Design Tools:",
            tools: ["VsCode",
                "Bootstrap",
                "GitHub",
                "terminal",
                "apollo",
                "barbel"
            ]
        },
        {
            img: laravelSvg,
            title: "Back-End",
            content: `I build server side apps optimized for performance 
                and continuous integration as well as  efficiency.`,
            subtitle: "stack",
            stack: "PHP, NodeJS, MySQL, GraphQl, MongoDB.",
            subtitle2: "Frameworks:",
            tools: ["Express", 
                "Laravel",
                "Sequelize",
                "Mongoose",
            ]
        },
    ]
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
            
            {
                services.map((item, index) => (
                    <ServiceCard 
                    key={item.title}
                    img={item.img}
                    title={item.title}
                    content={item.content}
                    subtitle={item.subtitle}
                    stack={item.stack}
                    subtitle2={item.subtitle2}
                    tools={item.tools}
                    delay={index * 400} />
                ))
            }    
        </Container>
        <img src={bgSvg} className="aboutMeSvg" alt="aboutSvg" />
        </Overlay>
    )
}

export default Services
