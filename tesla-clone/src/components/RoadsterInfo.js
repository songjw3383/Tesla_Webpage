import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { baseSpecs, specsInfo } from '../features/car/roadsterSlice'

function RoadsterInfo() {
    const specs = useSelector(baseSpecs);
    const info = useSelector(specsInfo);
    console.log(specs);
    return (
        <Description>
            <video autoplay="autoplay" muted="muted" loop="loop" src="https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329"></video>
        
            
            <SpecTable>
                <span>Base Specs</span>
                <div>
                    <ul>
                        {specs && specs.map((spec, index) =>
                        <li key={index}>{spec}</li>)}
                    </ul>
                    <ul>
                    {info && info.map((info, index) =>
                        <li key={index}>{info}</li>)}

                    </ul>
                </div>
            </SpecTable>

            <FirstSection>
                <img src="https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/back.jpg" alt="" />
                <div>
                    <h1>Designed for Performance and Aero Efficiency</h1>
                    <p>As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.</p>
                </div>
            </FirstSection>

            <SecondSection>
                <img src="https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/interior.jpg" alt="" />
                <div>
                    <h3>Interior</h3>
                    <p>The first supercar to set every performance record and still fit seating for four.
</p>
                </div>
            </SecondSection>

            <ThirdSection>
            <img src="https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/top.jpg" alt="" />
            <div>
                    <h3>Glass Roof</h3>
                    <p>A lightweight, removable Glass Roof stores in the trunk for an open-air, convertible driving experience.
</p>
            </div>
            </ThirdSection>
            
        </Description>

    )
}

export default RoadsterInfo

const Description = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    video {
        margin-top: 5rem;
        max-width: 100%;
        width: 1280px;
        height: 350px;
        
        @media (max-width: 1280px) {
            width: 768px;
            height: 216px;
        }
    }
    
`
const SpecTable = styled.div `
    margin: 5rem 0 0 0;
    z-index: 100;
    span {
        color: lightgrey;
        font-weight: 600;
        letter-spacting: 2px;
    }
    
    div {
        display: flex;
        justify-content: center;
        
        ul {
            padding: 1rem 0 1rem 0;
            list-style: none;
            width: 300px;   
        }
        ul:last-child {
            text-align:end;
        }
        li {
            border-top: 1px solid white;
            color : lightgrey;
            padding: 1rem 0rem 1rem 0;
            letter-spacing: 2px;
            font-weight: 600;
        }
    }
`

const FirstSection = styled.div `
    position: relative;
    
    img {
        position: relative;
        top: -10rem;
        width: 100%;
        background-size: cover;
        @media(max-width: 1280px) {
            top: -5rem;
        }
    }
    div {
        z-index: 100;
        color: white;
        position: absolute;
        top: 60%;
        width: 60%;
        display: flex;
        left: 50%;
        transform: translateX(-50%);

        @media(max-width: 1280px) {
            display: flex;
            flex-direction: column;
            width: 80%;
            
        }
        h1 {
            color: white;
            flex: 0.5;
            font-size: 1.5rem;
            @media(max-width: 1280px){
                padding-bottom: 0.5rem;
                font-size: 1.5rem;
                font-weight: 600;
            }
        }
        p{
            color: white;
            flex: 0.5;
            font-size: 1.1rem;
        }
    }
`

const SecondSection = styled.div `
    position: relative;
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 1240px;

        @media(max-width: 1280px) {
            width: 768px;
            height: 375px;
        }
    }
    div {
        margin-top: 1rem;
        display: flex;
        align-items: center;

        @media(max-width: 1280px) {
            display: flex;
            flex-direction: column;
            align-items: end;
            width: 40%;
            margin-left: 8rem;
        }
        h3 {
            flex:0.2;
            color: white;
            font-size: 1.5rem;
            font-weight: 600;

            @media(max-width: 1280px) {
                margin-bottom: 1rem;
            }
        }
        p {
            color: white;
        }
    }
`

const ThirdSection = styled.div `
    position: relative;
    img {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;

        @media(max-width: 1280px) {
            width: 768px;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        width: 20%;
        align-items: end;
        position: relative;
        left: 15%;
        transform: translateY(-200%);

        @media(max-width: 1280px) {
            width: 40%;
            top: 50%;
            left: 40%;
            transform: translateX(-50%);
        }
        h3 {
            flex:0.2;
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            padding-bottom: 1rem;
            @media(max-width: 1280px) {
                margin-bottom: 1rem;
            }
        }
        p {
            color: white;
            font-size: 1.1rem;
        }
    }

`
