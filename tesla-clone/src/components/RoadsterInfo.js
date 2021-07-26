import React from 'react'
import styled from 'styled-components'

function RoadsterInfo() {
    return (
        <Description>
            <video autoplay="autoplay" muted="muted" loop="loop" src="https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329"></video>
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