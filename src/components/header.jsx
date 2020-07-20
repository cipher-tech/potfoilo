import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import logo from "../images/logo.jpg"
import personSvg from "../images/personSvg.svg"
import { Diamond, Triangle, Circle } from './styledComponents'
import breakPoint from './breakPoints'
import { ReactComponent as MenuIcon } from "../images/svgIcons/menu.svg"
import { DataAos} from '.'
import { useSpring, animated } from 'react-spring'

const bounce = keyframes`
    0% {
        transform: translateY(-500px)
    }
    50% {
        transform: translateY(0px); 
    }
    60% {
        transform: translateY(-60px); 
    }
    70% {
        transform: translateY(0px); 
    }
    80% {
        transform: translateY(-30px); 
    }
    90% {
        transform: translateY(0px); 
    }
    95% {
        transform: translateY(-10px); 
    }
    100% {
        transform: translateY(0px); 
    }
`
let Container = styled.div`
    background:  ${props => props.theme.colorSecondary} ;
    grid-column: 1/-1;
    display: grid;
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 65%;
    font-size: 1.6rem;
    animation: ${bounce} 1.5s cubic-bezier(0.1, -0.6, 0.2,0);
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
        grid-template-columns: minmax(30rem, 1fr) 50%;
        }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
        grid-template-columns: minmax(30rem, 1fr) 50%;
        }
    @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
        grid-template-columns: minmax(30rem, 1fr) 32%;
        }
        .navbar-mobile{
            position: fixed;
            top: 0rem;
            right: 0rem;
            display: grid;
            align-items: center;
            place-items: center;
            padding: 2rem;
            z-index: 1200;
            display: none; 
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                display: grid; 
            }
            &__icon{
                display: grid;
                align-items: center;
                place-items: center;
                align-self: center;
                height: 4rem;
                width: 4rem;
                padding: 0rem .1rem;
                transition: all .3s ease-in-out .1s;
                z-index: 1300;
                cursor: pointer;
                justify-self: ${props => props.sidenavIsOpen ? "center" : "flex-start"};

                path{
                    height: 100%;
                    fill: white;
                    color: white;
                }
            }
            &__overlay{
                content: "";
                position: fixed;
                top: 3rem;
                right: 3rem;
                height: 2rem;
                width: 2rem;
                border-radius: 50%;
                background: linear-gradient(to bottom , ${props => props.theme.colorPrimary} 40% ,  ${props => props.theme.colorSecondary} ) ;
                /* transform: scale(0); */
                transition: all 1s cubic-bezier(.04,1.44,.91,-0.33);
            }
        }
        .navbar-mobile__list{
            position: fixed;
            top: 50%;
            /* left: -50%; */
            /* width: 25rem; */
            transform: translate(-50%, -50%);
            list-style: none;
            z-index: 1203;
            display: flex;
            flex-direction: column;
            &--item{
                text-transform: capitalize;
                padding: 1rem 5rem;
                margin: 1rem 0;
                cursor: pointer;
                text-align: center;
                background-image: linear-gradient(125deg,  transparent 50%,  ${props => props.theme.colorSecondary} 50% ) ;
                font-size: ${props => props.theme.font.small};
                transition: all .4s ease-in-out .1s;
                background-size: 230%;
                color: ${props => props.theme.colorBg};
                text-decoration: none;

                &:hover{
                    background-position: 100%;
                    transform: translateX(1rem);
                }
            }            

        }
    .header--logo{
        height: 5.6rem;
        width: 5.6rem;
        margin: 1rem;
       
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .header-nav{
        grid-row: 1;
        grid-column: 2;
        justify-self: right;
        z-index: 10;
        width: auto;

        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            display: none;
        }
        .nav-wrapper{
            /* display: flex;
            width: 45rem;
           
            align-content: center;
            justify-content: space-around;
            flex-wrap: nowrap; */
            
            display: flex;
            justify-content: space-around;
            justify-self: flex-end;
            align-content: center;
            align-self: center;
            padding: 2rem;
            margin-right: 3rem;
            /* padding-right: 4rem;  */
            width: 45rem;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                display: none; 
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                margin-right: 0rem;
                width: 45rem;
             }

            &--items,a{
                display: flex;
                position: relative;
                cursor: pointer;
                justify-content: center;
                text-align: center;
                /* text-align: left; */
                list-style: none;
                color: ${props => props.theme.colorInfo};
                padding: 1rem 1rem;
                list-style-type: none;
                height: 100%;
                width: 100%;
                text-decoration: none;
                transition: all .1s ease;
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                    font-size: ${props => props.theme.font.xsmall}
                }
                &::before{
                    display: flex;
                    content: " ";
                    justify-content: center;
                    position: absolute;
                    bottom: .2rem;
                    width: 0%;
                    height: .2rem;
                    transition: all .2s ease-in;
                    background: ${props => props.theme.colorInfo};
                }

                &:hover::before{
                    width: 65%;
                }
            }
        }
    }
    .header-text{
        height: 50%;
        position:relative;
        min-width: 35rem;
        width: 90%;
        color: ${props => props.theme.colorDark};
        align-self: center;
        justify-self: center;
        @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
            align-self: center ;
            min-width: 25rem;
            align-self: flex-start;
            margin-top: 2rem;
        }
        
        &--svgIcon-1{
            width: 3rem;
            height: 3rem;
         
            position: absolute;
            top: -5rem;
            left: 7rem
        }
        &--svgIcon-2{
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 12rem;
            transform: translate(-50% -50%);
            right: -2rem
        }
        &--svgIcon-3{
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 32rem;
            left: 1rem;
            ${props => {
        let style = css`
                    top: 33rem;
                `
        return breakPoint`
                900px
                ${style}
            `
    }}
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                top: 20rem;
             }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                top: 20rem;
             }
            
            
        }

        h3{
            font-weight: 400;
            font-size: 2.5rem;
            text-shadow: 0 .15rem .2rem ${props => props.theme.colorDark};
            margin-bottom: 3rem;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                font-weight: 500;
                font-size: 2.5rem;
                margin-bottom: 2rem;
             }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                margin-bottom: 1rem;
            }
        }
        p{
            font-size: 1.9rem;
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                font-size: 1.6rem;
             }

            span {
                display: inline-block;
                font-size: 2.3rem;
                margin-top: 5rem;

                @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                font-size: 1.9rem;
             }
                @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                    margin-top: 2rem;
                    margin-top: 2rem;
             }
             
        }
        }
        
    }
    .header-svg{
        background: ${props => props.theme.colorLight};
        grid-row: 1/ span 2;
        grid-column: 2;
        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
        &--person{
            height: 100%;
            width: 100%;
            padding-left: 4rem;
            padding-bottom: 4rem;

            
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpLarge}) {
                
                padding-left: 3.8rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpMedium}) {
                
                padding-left: 2.5rem;
            }
            @media only screen and (max-width: ${props => props.theme.breakPoints.bpSmall}) {
                
                padding-left: 1.4rem;
            }
            
        }
    }
    
`
function Header(props) {
    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(!true)
    const toggleMobileNav = () => {
        setMobileNavIsOpen(!mobileNavIsOpen)
    }
    // const closeMobileNav = () => {
    //     setMobileNavIsOpen(false)
    // }
    const spring = useSpring({
        transform: mobileNavIsOpen ? "scale(170)" : "scale(0)"
    })
    const springMove = useSpring({
        left: mobileNavIsOpen ? "50%;" : "-50%"
    })
    return (
        <Container>
            <div className="navbar-mobile">
                <MenuIcon className="navbar-mobile__icon" onClick={toggleMobileNav} />
                <animated.div style={{ transform: spring.transform }} className="navbar-mobile__overlay"></animated.div>
            </div>
            <animated.ul style={{ left: springMove.left }} onClick={toggleMobileNav} className="navbar-mobile__list">
                <a href='/' className="navbar-mobile__list--item">home</a>
                <a href='#about' className="navbar-mobile__list--item">About</a>
                <a href='#skills' className="navbar-mobile__list--item">Skills</a>
                <a href='#project' className="navbar-mobile__list--item">project</a>
                <a href='#contact' className="navbar-mobile__list--item">contact</a>
            </animated.ul>

            <div className="header--logo">
                <DataAos aos="fade-right" aosOffset="100" aosDelay="1000"
                    aosDuration="400" aosEasing="ease-in-out" aosOnce="true">
                    <img src={logo} alt="logo" />
                </DataAos>
            </div>
            {/* <DataAos aos="fade-right" aosOffset="100" aosDelay="1500"
                aosDuration="400" aosEasing="ease-in-out" aosOnce="true"> */}
            <div className="header-text"
                // data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="1000"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                <div className="header-text--svgIcon-1">
                    <Triangle />
                </div>
                <div className="header-text--svgIcon-2">
                    <Circle />
                </div>
                <div className="header-text--svgIcon-3">
                    <Diamond />
                </div>
                <h3>
                    Hi, <br />
                    I'm Onubogu Chibuikem
                </h3>
                <p>
                    I'm a Computer science graduate,
                    Programmer and web desinger
                    <br />
                    <span>
                        Nice to meet you
                    </span>
                </p>


            </div>
            {/* </DataAos> */}
            <div className="header-nav nav"
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="1000"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-once="true">
                <ul className="nav-wrapper">
                    <a href="/" className="nav-wrapper--items">Home</a>
                    <a href="#about" className="nav-wrapper--items">About</a>
                    <a href="#skills" className="nav-wrapper--items">Skills</a>
                    <a href="#projects" className="nav-wrapper--items">Projects</a>
                    <a href="#contact" className="nav-wrapper--items">Contact</a>
                </ul>
            </div>
            <div className="header-svg">
                <img src={personSvg} alt="person svg" className="header-svg--person" />

            </div>
        </Container>
    )
}

export default Header
