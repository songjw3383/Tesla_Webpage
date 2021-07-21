import React from 'react'
import styled from 'styled-components'

function CyberTruck() {
    return (
        <div>
            <CyberTruck_CT>
                <Main>
                    <Title src="/images/cybertruck_logo.png" />
                    <TitleBottom>
                        <p>Better Utility than a truck with More Performance than a sports car</p>
                        <TitleBottomBtn>ORDER NOW</TitleBottomBtn>
                    </TitleBottom>
                </Main>
                <Description>
                    <img src="https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg" alt="" />
                    <h1>EXOSKELETON</h1>
                </Description>

            </CyberTruck_CT>
        </div>
    )
}

export default CyberTruck

const CyberTruck_CT = styled.div `
    height: 100vh;
`
const Main = styled.div `
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    background-image: url("https://www.tesla.com/xNVh4yUEc3B9/01_Main_Hero_Desktop.jpg")

`

const Title = styled.img `
    margin-top: 2rem;
    width: 50vh;
    height: 35vh;
`

const TitleBottom = styled.div `
padding-bottom: 10vh;
letter-spacing: 2px;
display: flex;
flex-direction: column;
align-items: center;
p{
    font-size: 0.9rem;
    color: white;
    font-weight: 600;
    text-shadow: 1px 1px 10px ;
    text-transform: uppercase;
}

`

const TitleBottomBtn = styled.p `
    margin-top: 5vh;
    border: 4px solid white;
    padding: 5px;
    width: 150px;
    
`

const Description = styled.div `
    background-color: black;
    
    img {
        display: block;
        padding-top: 3rem;
        margin: 0px auto;
    }
    
`