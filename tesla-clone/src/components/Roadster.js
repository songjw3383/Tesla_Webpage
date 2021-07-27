import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
import SpeedIcon from '@material-ui/icons/Speed';
import RoadsterInfo from './RoadsterInfo'

function Roadster() {
    return (
        <Roadster_CT>
            <Main>
                <Fade clear>
                    <ItemText>
                        <header>Roadster</header>
                        <p>The quickest car in the world, with record-setting acceleration, range and performance.</p>
                    </ItemText>
                <Stats>
                    <li>
                        <StatsTop>
                            <div><SpeedMeter /></div>
                            <div>1.9</div>
                            <div>s</div>
                        </StatsTop>
                        <div>
                            0-60 mph
                        </div>
                    </li>
                    <li>
                        <StatsTop>
                        <div>+</div>
                        <div>250</div>
                        <div>mph</div>
                        </StatsTop>
                        <div>
                            Top Speed
                        </div>
                    </li>
                    <li>
                        <StatsTop>
                        <div>620</div>
                        <div>mi</div>
                        </StatsTop>
                        <div>
                            Range
                        </div>
                    </li>
                    <li>
                        <span>RESERVE NOW</span>
                    </li>
                </Stats>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Main>
            <RoadsterInfo />
            </Roadster_CT>
    )
}

export default Roadster

const Roadster_CT = styled.div `
    background-color: black
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
    align-items: center;
    background-image: url("https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero@2.jpg?")
`

const ItemText = styled.div `
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
    width: 380px;

    header {
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: 3px;
    }

    p{
        font-size: 1.1rem;
        color: white;
        font-weight: 500;
    }
`

const Stats = styled.ul `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin: 5vh 0 5vh 0;
    width: 900px;
    height: 45px;
    
    li {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        div:last-child{
            color: white;
            font-size: 1rem;
            padding-left: 5px;
        }

        span {
            border: 2px solid white;
            border-radius: 999px;
            padding: 0.5rem 2rem 0.5rem 2rem;
            color: white;
            font-weight: 400;
            
        }
    }

`

const StatsTop = styled.div `
    display: flex;
    align-items: center;
    div{
        color: white;
        font-size: 2rem;
        font-weight: 600;
    }
    
`

const SpeedMeter = styled(SpeedIcon)`
    
`


const DownArrow = styled.img `
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`