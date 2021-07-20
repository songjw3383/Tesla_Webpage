import React from 'react'
import styled from 'styled-components'

function CyberTruck() {
    return (
        <div>
            <CyberTruck_CT>
                <Main>
                    <Title src="/images/cybertruck_logo.png" />
                </Main>
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