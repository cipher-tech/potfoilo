import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    /* align-items: center; */
    background-image: linear-gradient(to right bottom, rgba(0,0,0, .8),rgba(0,0,0, .8)), 
        url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.5rem;
    overflow: hidden;
`
export default Container

export function WorksCardS(props) {
    return (
        <Container>
                
        </Container>
    )
}
