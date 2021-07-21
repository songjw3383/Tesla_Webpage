import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';
import CyberTruck from './CyberTruck'
import { Link, Route } from 'react-router-dom';
import { selectCars } from '../features/car/carSlice'
import { useSelector} from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars)

    return (
        <div>
            <Container>
                <a>
                    <Link to="/">
                        <img src="/images/logo.svg" alt="" />
                    </Link>
                </a>
                <Menu>
                    {cars && cars.map((car, index) =>
                        <a key={index} href="#">{car}</a>
                    )}
                    
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    <CustomMenu onClick={()=>setBurgerStatus(true)}/>
                </RightMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={()=>setBurgerStatus(false)}/>
                    </CloseWrapper>
                    {cars && cars.map((car, index) =>
                        <li key={index}><a href="#">{car}</a></li>
                    )}
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><Link to ="/cybertruck">CyberTruck</Link></li>
                    <li><a href="#">Roadster</a></li>
                    <li><a href="#">Semi</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <LanguageContainer>
                        <LanguageIcon />
                            <li>
                                <strong>United States</strong>
                                <small>English</small>
                            </li>
                            </LanguageContainer>
                </BurgerNav>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items : center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        padding: 0 30px;
        flex-wrap: nowrap;
        font-size: 1rem;
    }

    @media(max-width: 1024px) {
        display: none;
    }
`

const RightMenu = styled.div `
    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 15px;
        padding: 0 10px;
        font-size: 0.9rem;

        @media(max-width: 1024px) {
            display: none;
        }
    }

`

const CustomMenu = styled(MenuIcon) `
    cursor: pointer;
`

const BurgerNav = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 280px;
    z-index: 100;
    list-style: none;
    padding: 20px 20px 20px 40px;
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: 0.8rem;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform  0.2s ease-in-out;

    li {
        padding: 15px 15px;
        a {
            font-weight: 600;
            color: black;
            opacity: 1;
        }
    }
    
    li:hover {
        background-color: lightgrey;
        // opacity: 0.4;
        border-radius: 15px;
        transition: transform 0.2s ;
    }
    
`

const CustomClose = styled(CloseIcon) `
    cursor: pointer;
`

const CloseWrapper = styled.div `
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;
`

const LanguageContainer = styled.div `
    display: flex;
    align-items: center;
    
    li {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
    }
    strong {
        margin-bottom: 5px;
    }
`