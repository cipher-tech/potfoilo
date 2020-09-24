import React from 'react'
import styled from 'styled-components'

import coinAppImage1 from "../images/projectImages/coinApp1.png"
import coinAppImage2 from "../images/projectImages/coinApp2.png"
import coinAppImage3 from "../images/projectImages/coinApp3.png"
import movieAppImage1 from "../images/projectImages/movieApp1.png"
import movieAppImage2 from "../images/projectImages/movieApp2.png"
import movieAppImage3 from "../images/projectImages/movieApp3.png"

import { ReactComponent as GitSvg} from "../images/svgIcons/gitSvg.svg"
import { ReactComponent as LinkSvg} from "../images/svgIcons/link.svg"
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
        /* height: 50rem; */
        margin: 1rem 2rem;
        width: 35rem;
        
        .previews{
            display: grid;
            place-items: center;
            padding: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
            /* height: 10rem; */
            /* width: 100%; */
            img{
                border-radius: 1rem;
                overflow: hidden;
                height: 9rem;
                width: 9rem;
                object-fit: cover;
            }
        }
        .title{
            display: flex;
            width: 100%;
            padding: 2rem 0;
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
        .project-subheader{
            display: flex;
            width: 100%;
            justify-content: center;
            font-size: ${props => props.theme.font.xsmall};
            padding: 1rem;
        }
        .project-tags{
            /* width: 80%; */
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin: .5rem 0;
            padding: .5rem 2rem;
            text-transform: capitalize;
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
            justify-content: space-between;
            padding: 2rem 2rem;
            
            &__item{
                /* border: solid 2px ${props => props.theme.colorPrimary}; */
                border-radius: 1rem;
                background: transparent;
                display: block;
                padding: .5rem .5rem;
                cursor: pointer;
                transition: all .5s ease;
                text-decoration: none;
                color: ${props => props.theme.colorLight};
                font-size: ${props => props.theme.font.xxsmall};
                path, svg{
                    fill: currentColor;
                    height: 3rem;
                    width: 3rem;
                }
                &:focus{
                    outline: none;
                }
                &:hover{
                    /* border: solid 1px ${props => props.theme.colorLight};
                    background: ${props => props.theme.colorLight}; */
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
            depth: 150,
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
            text: ` A crypto-currency web app built for CJGrandExchange company and also serves as their official website,
                enables users trade various crypto-currencies and giftcards  easily across various african countries. 
                features include: PWA, automatic currency conversion, intuitive user dashboard, user authentication etc.
            `,
            tags: ["html", 'css', 'javascript', 'react',"redux",'webpack'],
            links: {
                demo: "/",
                repo: "/",
            },
            image: coinAppImage1,
            previews: [coinAppImage1, coinAppImage2, coinAppImage3]
        },
        {
            title: "Movie App",
            text: ` A concept movie streaming app, it enables users view details of top rated movies including, the details include:
                popular actors and date of release. Movie app was built on top React and Redux. 
            `,
            tags: ["html", 'css', 'javascript', 'react', 'webpack'],
            links: {
                demo: "/",
                repo: "/",
            },
            image: movieAppImage1,
            previews: [movieAppImage1, movieAppImage2, movieAppImage3]
        },
        {
            title: "Coin App Backend",
            text: `The server side backend code that powers the Coin app, is a fast API based system built on top of
                Laravel and utilizes a MySql database. It was built with security in mind and includes features such as 
                support for email push notification, user authentication and validation.
            `,
            tags: ["php", 'apache', 'laravel', 'mysql', 'webpack'],
            links: {
                demo: "/",
                repo: "/",
            },
            image: coinAppImage2,
            previews: [coinAppImage2, coinAppImage1, coinAppImage3]
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
                            <div className="previews">
                                {
                                    item?.previews?.map((preview, index) => (
                                        <img key={index} src={preview} alt="preview" />
                                    ))
                                }
                            </div>
                            <p className='text'>
                                {item.text}
                            </p>
                            <h3 className="project-subheader">Project Stack</h3>
                            <ul className="project-tags">
                                {
                                    item.tags.map((tag, index) => <li key={index} className="project-tags__item">{tag}</li>)
                                }
                            </ul>
                            <div className="btn-wrapper">
                                {item.links.repo ? <a href={item.links.repo} className="btn-wrapper__item"> <GitSvg/> </a> : null}
                                {item.links.demo ? <a href={item.links.demo} className="btn-wrapper__item"> <LinkSvg/> </a> : null}
                            </div>
                        </WorksCard>
                    ))
                }
            </Swiper>
        </Container>
    )
}

export default Works
