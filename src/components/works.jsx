import React from 'react'
import styled from 'styled-components'

import coinAppImage1 from "../images/projectImages/coinApp1.png"
import coinAppImage2 from "../images/projectImages/coinApp2.png"
import coinAppImage3 from "../images/projectImages/coinApp3.png"

import medNg from "../images/projectImages/medng.jpg"
import medNg1 from "../images/projectImages/medng1.png"
import medNg2 from "../images/projectImages/medng2.png"

import movieAppImage1 from "../images/projectImages/movieApp1.png"
import movieAppImage2 from "../images/projectImages/movieApp2.png"
import movieAppImage3 from "../images/projectImages/movieApp3.png"

import portfolio1 from "../images/projectImages/portfolio1.png"
import portfolio2 from "../images/projectImages/portfolio2.png"
import portfolio3 from "../images/projectImages/portfolio3.png"

import animatedCheckOut1 from "../images/projectImages/animatedCheckOut1.png"
import animatedCheckOut2 from "../images/projectImages/animatedCheckOut2.png"
import animatedCheckOut3 from "../images/projectImages/animatedCheckOut3.png"

import { ReactComponent as GitSvg } from "../images/svgIcons/gitSvg.svg"
import { ReactComponent as LinkSvg } from "../images/svgIcons/link.svg"
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"
import { OffsetText, XIcon, Diamond, WorksCard, } from './styledComponents'

let Container = styled.div`
    /* background: black; */
    grid-column: 2/10;
    /* height: 50vh; */
    /* padding: 2rem; */
    margin-bottom: 2rem;
    padding: 1rem;
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
        margin: 1rem 1rem;
        max-width: 36rem;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            max-width: 33rem;
        }
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
        slidesPerView: "3",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    const Projects = [
        {
            title: "Medng",
            role: "front end designer",
            text: `A mobile app that enables Patients to book appointments, have an eCard, and have access to medical records and test results,
            -A website (responsive) that enables hospitals and Doctors have access to their database, 
            and patient history, and also enables patients without the mobile app to access their eCard, 
            medical records and test results and book appointments.
            `,
            tags: ["html", 'css', 'javascript', 'react', "NextJs", 'TypeScript'],
            links: {
                demo: "https://blackjack-lilac.vercel.app/",
                // repo: "https://github.com/cipher-tech/coin-app",
            },
            image: medNg1,
            previews: [medNg, medNg1, medNg2]
        },

        {
            title: "Coin App",
            role: "front end designer",
            text: ` A crypto-currency web app built for CJGrandExchange company and also serves as their official website,
                enables users trade various crypto-currencies and giftcards  easily across various african countries. 
                Features include: PWA, automatic currency conversion, intuitive user dashboard, user authentication etc.
            `,
            tags: ["html", 'css', 'javascript', 'react', "redux", 'webpack'],
            links: {
                demo: "https://cjgrandexchange.com/",
                // repo: "https://github.com/cipher-tech/coin-app",
            },
            image: coinAppImage1,
            previews: [coinAppImage1, coinAppImage2, coinAppImage3]
        },
        {
            title: "Coin App Backend",
            role: "back-end designer",

            text: `The server side backend code that powers the Coin app, It's a fast API based system built on top of
                Laravel and utilizes a MySql database. It was built with security in mind and includes features such as 
                support for email push notification, user authentication and validation.
            `,
            tags: ["php", 'apache', 'laravel', 'mysql', 'webpack'],
            links: {
                // demo: "/",
                // repo: "/",
            },
            image: coinAppImage2,
            previews: [coinAppImage2, coinAppImage1, coinAppImage3]
        },
        {
            title: "My Portfolio",
            role: "full stack developer",
            text: ` My personal web site built with React, it contains information about me including my various projects
                and working experience. Also contained in the web site is information about my programming skills like 
                the various services i render as well as the programming languages and frameworks i use. `,
            tags: ["html", 'css', 'javascript', 'react', "redux", 'webpack'],
            links: {
                demo: "https://cipher-tech.github.io/potfoilo/",
                repo: "https://github.com/cipher-tech/potfoilo",
            },
            image: portfolio1,
            previews: [portfolio1, portfolio2, portfolio3]
        },

        {
            title: "Animated Check Out Button",
            role: "front end designer",
            text: `A fun side project built HTML and css alone. Aimed at improving, displaying and creating cool animations with css alone,
                no javascript, libraries or frameworks included.`,
            tags: ["html", 'css', "SCSS"],
            links: {
                demo: "https://cipher-tech.github.io/animated_check_out_button/",
                repo: "https://github.com/cipher-tech/animated_check_out_button"
            },
            image: animatedCheckOut1,
            previews: [animatedCheckOut1, animatedCheckOut2, animatedCheckOut3]
        },
        {
            title: "Dependable Orientals ",
            role: "fullstack developer",
            text: `Dependable Orientals is a job recruitment web application platform built for Dependable orientals Ltd.
                The platform was built on top of the PHP framework Laravel with it's blade template engine.
                The app is focused on connecting recruiters with job seekers. 
            `,
            tags: ["php", 'laravel', 'mysql'],
            links: {
                repo: "https://github.com/cipher-tech/dependable-orientals",
            },
            // image: coinAppImage2,
            // previews: [coinAppImage2, coinAppImage1, coinAppImage3]
        },
        {
            title: "Movie App",
            role: "front end designer",
            text: ` A concept movie streaming app, it enables users view details of top rated movies including the details,
                popular actors and date of release. Movie app was built on top React and Redux. 
            `,
            tags: ["html", 'css', 'javascript', "redux", 'react', 'webpack'],
            links: {
                demo: "https://cipher-tech.github.io/movie_app/",
                repo: "https://github.com/cipher-tech/movie_app",
            },
            image: movieAppImage1,
            previews: [movieAppImage1, movieAppImage2, movieAppImage3]
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
                            <div className='text'>
                                {/* <h3 className="project-subheader">Project Stack</h3> */}
                                <strong>Role: {item.role}</strong>
                                {item.text}
                            </div>
                            <h3 className="project-subheader">Project Stack</h3>
                            <ul className="project-tags">
                                {
                                    item.tags.map((tag, index) => <li key={index} className="project-tags__item">{tag}</li>)
                                }
                            </ul>
                            <div className="btn-wrapper">
                                {item.links.repo ? <a href={item.links.repo} className="btn-wrapper__item"> <GitSvg /> </a> : null}
                                {item.links.demo ? <a href={item.links.demo} className="btn-wrapper__item"> <LinkSvg /> </a> : null}
                            </div>
                        </WorksCard>
                    ))
                }
            </Swiper>
        </Container>
    )
}

export default Works
