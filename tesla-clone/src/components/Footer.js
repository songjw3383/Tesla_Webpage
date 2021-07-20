import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal' // importing react-reval effect
function Footer() {
    return (
        <Fade bottom>
            <FooterContainer>
                <li><a href="#">Tesla clone &copy; 2021</a></li>
                <li><a href="#">Privacy & Legal</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Get Newsletter</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Engage</a></li>
                <li><a href="#">Locations</a></li>
            </FooterContainer>
        </Fade>
    )
}

export default Footer

const FooterContainer = styled.div `
    display: flex;
    width: 100%;
    justify-content: center;

    li {
        list-style: none;
        padding: 0 15px 25px; 10px;
        a {
            color: grey;
            font-size: 0.75rem;
            font-weight: 600;
        }
    }
`