import React, { Component } from 'react'
import { Head, AboutMe, Service, SKill, Projects/* , Testimonial */, Contact, Foot } from '../../components'
// import styled from "styled-components"

// const layout = styled.section
export default class Main extends Component {
    render() {
        return (
            <>
               <Head/>

               <AboutMe/>

               <Service/>

               <SKill/>

               <Projects/>

               {/* <Testimonial/> */}

               <Contact/>
               
               <Foot/>
            </>
        )
    }
}
