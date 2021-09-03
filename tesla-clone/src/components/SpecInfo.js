import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {options, selectSpecs, Single} from '../features/car/specSlice'

function SpecInfo() {
    const [inputStatus, setInputStatus] = useState("");

    const handleClickRadioButton = (radioBtnName) => {
        setInputStatus(radioBtnName)
        
    };
    
    const specs = useSelector(selectSpecs);
    return (
        <Spec>
            <CarPicture src="https://tesla-cdn.thron.com/delivery/public/image/tesla/cybertruck_top/bvlatuR/std/0x0/cybertruck_top" alt="" />
            <Form>
            <h2>SPECS</h2>
                <form>
                    <label><input type="radio" name="option" id="Single" value="Single" onClick={() =>handleClickRadioButton("Single")}/>Single Motor RWD</label>
                    <label><input type="radio" name="option" id="Dual"  onClick={() =>handleClickRadioButton("Dual")} />Dual Motor RWD</label>
                    <label><input type="radio" name="option" id="Tri"  onClick={() =>handleClickRadioButton("Tri")} />Tri Motor RWD</label>
                </form>
            <SpecTable>
                
                    <ul>
                        {specs && specs.map((spec, index) =>
                        <li key={index}>{spec}</li>)}
                    </ul>

                    <ul>
                        {options && options.map((options, index) =>
                            <li key={index}>{options}</li>)}
                    </ul>
                
            </SpecTable>

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
        display: flex;
    }
    
    h2 {
        color: white;
        letter-spacing: 5px;
    }

    img {
        width: 20vw;
    }
    
`

const Form = styled.div `
    margin-top : 1rem;
    flex: 0.7;
    margin-left: 5rem;
    
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
    span {
        color: grey;
        font-weight: 600;
    }
    
`
const SpecTable = styled.div `
    margin: 2rem 0 2rem 0;
    border-top: 1px solid white;
    border-bottom: 1px solid white;

    display: flex;
    justify-content: space-between;
    
    
    ul {
        padding: 1rem 0 1rem 0;
        list-style: none;
    }
    li {
        color : lightgrey;
        margin: 0.5rem 0 1rem 0 ;
        letter-spacing: 2px;
        font-weight: 600;
    }
`

const CarPicture = styled.img `
  padding: 2rem;
  max-height: 800px;
  max-width: 350px;
  
  @media (max-width: 1280px) {
      max-height: 450px;
      max-width: 200px;
  }

`