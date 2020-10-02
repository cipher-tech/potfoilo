import React from 'react'
import bg1 from "../images/p1-1.jpg"
import styled from 'styled-components'

let Container = styled.div`
    /* background: purple; */
    grid-column: 1/-1;
    /* height: 25rem; */
    justify-items: center;
    align-items: center;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    background-image: linear-gradient(to bottom, rgba(50 47 85 / 78%) 100%, rgba(47,137,252, .6)), url('${bg1}');
    background-repeat: no-repeat;
    background-size: cover;
    color: ${props => props.theme.colorLight};
    .stats{
        display: flex;
        width: 80%;
        margin: 2rem auto;
        justify-content: space-around;
        
        p{
            font-size: 2rem;
            text-align: center;
            span{
                width: 100%;
                word-break: break-all;
                box-decoration-break: clone;
            }
        }
    }
    h2{
        font-weight: bold;
        width: 100%;
        text-align: center;
    }
    .message{
        font-size: 2rem;
        padding: 2rem 3rem;
        border-bottom: 2px solid ${props => props.theme.colorLight};
    }
    .contact-msg{
        padding: 1rem;
        text-align: center;
        font-size: ${props => props.theme.font.xxsmall};
    }
    .hireButton{
        font-size: 1.5rem;
        border: 2px solid ${props => props.theme.colorLight};
        padding: 1rem 4rem;
        border-radius: 2rem;
        color: ${props => props.theme.colorLight};
        cursor: pointer;
        margin: 1rem;
        display: flex;
        transition: all .5s ease-in-out;
        text-decoration: none;
        &:hover{
            background: ${props => props.theme.colorLight};
            color: ${props => props.theme.colorPrimary};
        }
    }
`
function Contacts() {
    return (
        <Container
            id="contact"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="300"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            data-aos-once="true">

            {/* <div className="stats"> */}
                {/* <p>10 
                <br/>
                    <span>Projects</span>
                </p>
                <p>3  
                <br/>
                    <span>
                     Years
                    </span>
                </p>
                <p>5 
                <br/>
                    <span> Clients</span>
                </p>
                <p>3 
                <br/>
                    <span>
                        Languages
                    </span>
                </p> */}

            {/* </div> */}
            <h2>
                WOW HOO!!!
            </h2>
            <p className="contact-msg">
                Look who's here.
                    <br /><br/>
                    You made it this far, <br/> you're just one click away from making it all the way.
                </p>
            <div className="message">
                LET'S WORK TOGETHER!
            </div>
            <a href="mailto:nickchibuikem@gmail.com" className="hireButton">
                Hire Me
            </a>
        </Container>
    )
}

export default Contacts
