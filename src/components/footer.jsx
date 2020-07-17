import React from 'react'
import styled from 'styled-components'

let Container = styled.div`
    grid-column: 1/-1;
    height: 6rem;
    display: grid;
    justify-content: center;
    align-content: flex-end;

    .footer{
        display: flex;
        align-content: center;
        justify-content: center;
        height: 100%;
        color: ${props => props.theme.colorPrimary};
        font-size: 2rem;
        padding: 1rem;
    }
`
function Footer() {
    return (
        <Container
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay="300"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-once="true">
            <p className="footer">
                © Cipher-Tech 2020 All rights reserved.
           </p>
        </Container>
    )
}

export default Footer
