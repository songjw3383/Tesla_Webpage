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
                    <First>
                        <p>EXOSKELETON</p>
                        <span>Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.</span>
                        </First>
                </Description>

            </CyberTruck_CT>
        </div>
    )
}

export default CyberTruck

const CyberTruck_CT = styled.div `
    background-color: black;
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
        font-size: 0.8rem;
        color: white;
        font-weight: 600;
        text-shadow: 1px 1px 4px ;
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
    border : 1px solid white; //for template
    
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 75vw;
    max-width: 75vw;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        padding-top: 3rem;
        margin: 0px auto;
    }
    
`

const First = styled.div `
    padding: 1rem 5rem 0rem 5rem;
    p {
        color: white;
        font-weight: 600;
        font-size: 1.5rem;
        text-shadow: 1px 1px 3px ;
        letter-spacing: 5px;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    span {
        color: white;
    }

`