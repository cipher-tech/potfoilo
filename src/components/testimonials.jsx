import React from 'react'
import styled from 'styled-components'
import bg2 from "../images/avatar1.jpg"
import { OffsetText, XIcon, Triangle } from './styledComponents'
import "swiper/css/swiper.css"
import Swiper from "react-id-swiper"

let Container = styled.div`
    /* background: orange; */
    grid-column: 2/10;
    margin:5rem;

    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        grid-column: 1/-1;
        margin:.5rem;
    }
    .offsetText{
        margin: 3rem 1rem;
        &--SvgIcon{
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            top: 8rem;
            /* top: 2rem; */
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
            width: 1rem;
            height: 1rem;
            top: 1rem;
            /* top: 8rem; */
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
       
        padding: 2rem 0rem;

        &-mainContent{
            display: grid;
    
            grid-template-rows: 1fr min-content max-content;
            
            justify-items: center;
            align-items: center;

            &-imgContainer{
                width:100%;
                display: flex;
                justify-content: center;
                &--avater{
                    height: 8rem;
                    width: 8rem;
                    border-radius: 1.5rem;
                    margin: 2rem 0; 
                }
            }
            &--text{
                font-size: 1.5rem;
                width: 80%;
                /* text-overflow:eli */
                text-align: center;
                line-height: 1.5;
            }
            &--profile{
                display: flex;
                justify-content: center;
                width: 80%;
                align-self: flex-start;
                padding: 2rem 1rem;
                font-size: 1.5rem; 
                font-weight: 600;
                height: 3rem;
            }
        }
    }  
`
function Testimonials() {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: false,
        // effect: 'fade',
        // cssMode: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }
    return (
        <Container
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true">
        
            <OffsetText className="offsetText" offset="Kind Words">
                Testimonials
                <div className="offsetText--SvgIcon">
                    <Triangle />
                </div>
                <div className="offsetText--SvgXIcon">
                    <XIcon />
                </div>
            </OffsetText>

            <Swiper {...params} className="swiper-wrapper">
                {/* <TestimonialCard img={bg2} /> */}
                {/* <TestimonialCard img={bg2} /> */}
                <div className="swiper-wrapper-mainContent">
                    <div className="swiper-wrapper-mainContent-imgContainer">
                        <img className="swiper-wrapper-mainContent-imgContainer--avater" src={bg2} alt="testimonial pic" />
                    </div>
                    <p className="swiper-wrapper-mainContent--text">
                    I am a skilled programmer that likes writing modular codes that are easily maintainable 
                    and supports continuous integration. I'm skilled in the art of 
                    translating design mock-ups and prototypes in tools like figma and.

                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                <div className="swiper-wrapper-mainContent">
                    <div className="swiper-wrapper-mainContent-imgContainer">
                        <img className="swiper-wrapper-mainContent-imgContainer--avater" src={bg2} alt="testimonial pic" />
                    </div>
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                <div className="swiper-wrapper-mainContent">
                    <div className="swiper-wrapper-mainContent-imgContainer">
                        <img className="swiper-wrapper-mainContent-imgContainer--avater" src={bg2} alt="testimonial pic" />
                    </div>
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
                <div className="swiper-wrapper-mainContent">
                    <div className="swiper-wrapper-mainContent-imgContainer">
                        <img className="swiper-wrapper-mainContent-imgContainer--avater" src={bg2} alt="testimonial pic" />
                    </div>
                    <p className="swiper-wrapper-mainContent--text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo non voluptatum neque eos assumenda consequatur deserunt tempora eveniet
                    </p>
                    <p className="swiper-wrapper-mainContent--profile">
                        -kacnam ojvom avjm 'sdodmv' am kbd
                    </p>
                </div>
            </Swiper>
        </Container>
    )
}

export default Testimonials



// slidesPerView: 1,
// spaceBetween: 30,
// // centeredSlides: false,
// // effect: 'fade',
// // cssMode: true,
// loop: true,

// navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
// },
// pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
// },