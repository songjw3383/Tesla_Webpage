import React from 'react'
import styled from 'styled-components'
import CyberTruckSlider from './CyberTruckSlider';
import SpecInfo from './SpecInfo';
import Footer from './Footer';
import Fade from 'react-reveal' // importing react-reval effect

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

                    <Fade bottom>

                    <img src="https://www.tesla.com/xNVh4yUEc3B9/02_Desktop.jpg" alt="" />
                    <First>
                        <span>EXOSKELETON</span>
                        <p>Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.</p>
                        </First>
                    
                    <img src="https://www.tesla.com/xNVh4yUEc3B9/03_Desktop.jpg" alt="" />
                    <First>
                        <h2>ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL</h2>
                        <p>If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection.</p>
                    </First>
                    <img src="https://www.tesla.com/xNVh4yUEc3B9/04_Desktop.jpg" alt="" />
                    <First>
                        <h2>TESLA ARMOR GLASS</h2>
                        <p>Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.</p>
                    </First>
                    
                    {/* Carousel Section */}
                    <CyberTruckSlider />

                    <video autoplay="autoplay" muted="muted" loop="loop" src="https://www.tesla.com/xNVh4yUEc3B9/performance_video_desktop.mp4"></video>
                    <First>
                        <span>PERFORMANCE AND EFFICIENCY</span>
                        <p>Now entering a new class of strength, speed and versatility—only possible with an all-electric design. The powerful drivetrain and low center of gravity provides extraordinary traction control and torque—enabling acceleration from 0-60 mph in as little as 2.9 seconds and up to 500 miles of range.</p>
                    </First>
                    <SpecInfo />

                    </Fade>   
                    
                </Description>
                
                <OrderBottom>
                    
                    <img src="https://www.tesla.com/xNVh4yUEc3B9/13_Desktop_Order.png" alt="" />
                </OrderBottom>
            <Footer/>
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
    color: white;
    font-weight:600;
    margin-top: 5vh;
    border: 4px solid white;
    padding: 5px;
    width: 150px;
    height: 40px;
    
`

const Description = styled.div `
    // border : 1px solid white; //for template
    
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 70vw;

    @media(max-width: 1280px) {
        width: 90vw
    }
    
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        padding-top: 3rem;
        margin: 0px auto;
    }
    
`

const First = styled.div `
    padding: 2rem 5rem 0rem 5rem;
    margin-bottom: 5rem;
    @media (max-width: 1280px) {
        padding: 1rem 5rem 0rem 0rem;
    }
    span {
        color: white;
        font-weight: 600;
        font-size: 1.5rem;
        text-shadow: 1px 1px 3px ;
        letter-spacing: 5px;
        text-transform: uppercase;
    }

    h2 {
        font-size: 1rem;
        color: rgb(185,185,185);
        letter-spacing: 3px;
    }

    p {
        color: rgb(185,185,185);
        margin-top: 1rem;
    }
`

const OrderBottom = styled.div `
    margin: 5rem 0 5rem 0;
    display: flex;
    align-item: center;
    justify-content: center;

`