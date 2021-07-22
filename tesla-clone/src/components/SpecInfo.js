import React from 'react'
import styled from 'styled-components'

function SpecInfo() {
    const onChangeValue = (event) => {
        console.log(event.target.value);
    }
    return (
        <Spec>
            <CarPicture src="https://tesla-cdn.thron.com/delivery/public/image/tesla/cybertruck_top/bvlatuR/std/0x0/cybertruck_top" alt="" />
            <Form>
            <h2>SPECS</h2>
                <form onChange={onChangeValue}>
                    <label><input type="radio" name="Single" value="Single" checked/>Single Motor RWD</label>
                    <label><input type="radio" name="Dual" value="Dual"/>Dual Motor RWD</label>
                    <label><input type="radio" name="Tri" value="Tri"/>Tri Motor RWD</label>
                </form>
            
                
            <ul><li>0-60 MPH</li><li>UNDER 6.5 SECONDS</li></ul>
            <ul><li>Range</li><li>250+ MILES (EPA EST.)</li></ul>
            <ul><li>DRIVETRAIN</li><li>REAR-WHEEL DRIVE</li></ul>
            <ul><li>STORAGE</li><li>100 CU FT</li></ul>
            <ul><li>VAULT LENGTH</li><li>6.5 FT</li></ul>
            <ul><li>TOWING CAPACITY</li><li>7,500+ LBS</li></ul>
            <ul><li>AUTOPILOT</li><li>STANDARD</li></ul>
            <ul><li>ADAPTIVE AIR SUSPENSION</li><li>STANDARD</li></ul>
            <ul><li>GROUND CLEARANCE</li><li>UP TO 16"</li></ul>
            <ul><li>APPROACH ANGLE</li><li>35 DEGREES</li></ul>
            <ul><li>DEPARTURE ANGLE</li><li>28 DEGREES</li></ul>

            <span>*All configurations are US specification only. Global specifications will be developed at a later date based on demand.</span>
            </Form>
        </Spec>
    )
}

export default SpecInfo

const Spec = styled.div `
    margin-top: 5rem;
    display: flex;

    @media (max-width: 1280px) {
        flex-direction: column;
    }
    
    h2 {
        color: white;
        letter-spacing: 5px;
    }

    img {
        width: 10vw;
    }
    
`

const Form = styled.div `
    margin-top 1rem;
    flex: 0.6;
    form {
        align-item: center;
        justify-content: center;
        margin-top: 1rem;
        display: flex;
        justify-content: space-evenly;
    }
    label {
        display: flex;
        font-size: 1rem;
        font-weight: 600;
        color: white;

        input[type="radio"] {
            border: 2px solid #fff;
            -webkit-appearance: none;
            padding: 0.5rem;
            margin-right: 0.5rem;
            cursor: pointer;
        }
        input[type="radio"]:checked {
            border: 2px solid #fff;
            -webkit-appearance: none;
            padding: 0.5rem;
            margin-right: 0.5rem;
            cursor: pointer;
            background-color: white;
        }
    }
    ul {
        border-top: 1px solid white;
        margin: 1rem 0 1rem 0;
        padding: 1rem 0 0rem 0;
        display: flex;
        list-style: none;
        justify-content: space-between;
        li {
            color: white;
            letter-spacing: 2px;
            font-weight: 600;
            color: grey;
        }
    }
    span {
        color: grey;
        font-weight: 600;
    }
    
`

const CarPicture = styled.img `
    flex: 0.2;
    max-width: 100%;
`