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
        
        .title{
            display: flex;
            width: 100%;
            font-size: 2rem;
            justify-content: center;
            align-items: center;
            color: #fff;
        }
        .text{
            display: flex;
            flex-wrap: wrap;
            line-height: 1.6;
            font-size: ${props => props.theme.font.xxxsmall};
            text-align: center;
            justify-content: center;
            align-items: center;
            padding: 1rem 1.5rem;
            color: #fff;
        }
        .project-tags{
            /* width: 80%; */
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin: .5rem 0;
            padding: .5rem 2rem;
            font-size: ${props => props.theme.font.xxxsmall};
            &__item{
                list-style-type: square;
                list-style-position: inside;
                padding: .5rem 0rem;
                text-align: left;
                width: 100%;
            }
        }
        .btn-wrapper{
            display: flex;
            justify-content: space-around;
            padding: 1rem 2remm;
            &__item{
                border: solid 2px ${props => props.theme.colorPrimary};
                border-radius: 1rem;
                background: transparent;
                display: block;
                padding: .5rem 1.5rem;
                cursor: pointer;
                transition: all .5s ease;
                text-decoration: none;
                color: ${props => props.theme.colorLight};
                font-size: ${props => props.theme.font.xxsmall};
                &:focus{
                    outline: none;
                }
                &:hover{
                    border: solid 2px ${props => props.theme.colorLight};
                    background: ${props => props.theme.colorLight};
                    color: ${props => props.theme.colorPrimary};
                }
            }
        }
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

    const Projects = [
        {
            title: "Coin App",
            text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            `,
            tags: ["html", 'css', 'javascript', 'react', 'webpack'],
            links: {
                demo: "/",
                repo: "/",
            },
            image: bg1
        },
        {
            title: "Coin App",
            text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            `,
            tags: ["html", 'css', 'javascript', 'react', 'webpack'],
            links: {
                demo: "/",
                repo: "/",
            },
            image: bg2
        },
        {
            title: "Coin App",
            text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            `,
            tags: ["html", 'css', 'javascript', 'react', 'webpack'],
            links: {
                demo: "/",
                repo: "/",
            },
            image: bg3
        },
        {
            title: "Coin App",
            text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            `,
            tags: ["html", 'css', 'javascript', 'react', 'webpack'],
            links: {
                demo: "/",
                repo: "/",
            },
            image: bg1
        },
        {
            title: "Coin App",
            text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            `,
            tags: ["html", 'css', 'javascript', 'react', 'webpack'],
            links: {
                demo: "/",
                repo: "/",
            },
            image: bg3
        },
    ]
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
                {
                    Projects.map((item, index) => (
                        <WorksCard key={index} img={item.image}>
                            <p className="title">
                               {item.title}
                            </p>
                            <p className='text'>
                                {item.text}
                            </p>
                            <ul className="project-tags">
                                {
                                    item.tags.map((tag, index) =>  <li key={index} className="project-tags__item">{tag}</li> )
                                }
                            </ul>
                            <div className="btn-wrapper">
                                <a href={item.links.demo} className="btn-wrapper__item">Demo</a>
                                <a href={item.links.repo} className="btn-wrapper__item">Repo</a>
                                <a href={'/#projectss'}className="btn-wrapper__item">More</a>
                            </div>
                        </WorksCard>
                    ))
                }
            </Swiper>
        </Container>
    )
}

export default Works
