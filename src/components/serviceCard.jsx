import React from 'react'
import styled from 'styled-components'
// import programmerSvg from "../images/servicesSvg.svg"

const Container = styled.div`
    .services-description{
        z-index: 10;
        margin: .3rem 1rem;
        background: ${props => props.theme.colorBg};
        display: grid;
        /* grid-column: 1/-1; */
        /* width: 33.3333%; */
        box-shadow: 0.3rem 0.3rem .7rem #ffffff26,
                -0.3rem -0.3rem .7rem rgba(94,104,121, .288);
        grid-template-columns: 1fr;
        justify-self: center;
        justify-items: center;
        font-size: 1.3rem;
        line-height: 1.5;
        border-radius: 1rem;
        &--svg{
            margin-top: 1rem;
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
            text-align: center;
        }
        &--subtitle{
            text-align: center;
            font-size: 1.5rem;
            grid-column: 1/-1;
            padding: 1rem;
            text-transform: capitalize;
            color: ${props => props.theme.colorPrimary}
        }
        &--tools{
            width: 70%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            padding: 1rem;
            text-transform: capitalize;

            &-item{
                list-style-type: square;
                list-style-position: inside;
                text-align: left;
                width: 100%;
                text-transform: capitalize;

            }
        }
    }
`
export default function card(props) {
    return (
        <Container
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay={props.delay}
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            >
            <div className="services-description">
                <img src={props.img} alt="svg icon" className="services-description--svg" />

                <p className="services-description--title">
                    {/* <br/> */}
                    <span className="services-description--title-text">
                        {props.title}
                    </span>
                </p>
                <p className="services-description--content">
                    {props.content}
                </p>
                <p className="services-description--subtitle">
                    {props.subtitle}
                </p>
                <p className="services-description--content">
                    {props.stack}
                </p>
                <p className="services-description--subtitle">
                    {props.subtitle2}
                </p>
                <ul className="services-description--tools">
                    {
                        props.tools.map(item=> (
                    
                            <li  key={item} className="services-description--tools-item"> {item} </li>
                        ))
                    }
                </ul>
            </div>
        </Container>
    )
}
