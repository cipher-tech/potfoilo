import React from 'react'
import styled from 'styled-components'
import bg1 from "../images/p2-2.jpg"
import bg2 from "../images/p3-3.jpg"
import bg3 from "../images/p5-5.jpg"
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"
import { OffsetText, XIcon, Diamond, WorksCard, } from './styledComponents'

let Container = styled.div`
    /* background: black; */
    grid-column: 2/10;
    /* height: 50vh; */
    padding: 2rem;
    margin-bottom: 2rem;
    /* -webkit-box-reflect: below .1rem linear-gradient(tranparent,tranparent,
    rgba(0,0,0, .2) ); */

    @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
        grid-column: 1/-1;
    }
    .projects-title{
        margin: 3rem 1rem;
        &--SvgIcon{
            position: absolute;
            width: 2rem;
            height: 2rem;
            top: 2rem;
            right: 36%;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpxxLarge}) {
                right: 34%;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
                right: 30%;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                right: 26%;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                right: 20%;
            }
        }
        &--SvgXIcon{
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            top: 8rem;
            left: 38%;
            
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpxLarge}) {
                left: 32%;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                left: 26%;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                left: 20%;
                top: 9rem;
            }
        }
    }
    .swiper-wrapper{ 
        height: 50rem;
        margin: 1rem 2rem;
        width: 35rem;
        
        /* @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
           width: 40px;
        } */
    }
`
function Works(props) {
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // pagination: {
        //     el: '.swiper-pagination',
        // }
    }

    return (
        <Container 
            id="projects" 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true">
            <OffsetText className="projects-title" offset="Projects" >
                Projects
            <div className="projects-title--SvgIcon">
                    <XIcon />
                </div>
                <div className="projects-title--SvgXIcon">
                    <Diamond />
                </div>
            </OffsetText>
            <Swiper {...params} className="swiper-wrapper">
                <WorksCard img={bg1}>
                    <p className="title">
                        Project Name
                    </p>
                    <p className='text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </WorksCard>
                <WorksCard img={bg2}>
                    <p className="title">
                        Project Name
                    </p>
                    <p className='text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </WorksCard>
                <WorksCard img={bg3}>
                    <p className="title">
                        Project Name
                    </p>
                    <p className='text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </WorksCard>
                <WorksCard img={bg2}>
                    <p className="title">
                        Project Name
                    </p>
                    <p className='text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </WorksCard>
                <WorksCard img={bg1}>
                    <p className="title">
                        Project Name
                    </p>
                    <p className='text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                </WorksCard>
            </Swiper>
        </Container>
    )
}

export default Works
