import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    /* align-items: center; */
    background-image: linear-gradient(to right bottom, rgba(0,0,0, .6),rgba(0,0,0, .6)), 
        url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
`
export default Container

export function WorksCardS(props) {
    return (
        <Container>
                
        </Container>
    )
}
