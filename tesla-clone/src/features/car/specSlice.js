import { createAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    specsName: 
        ["0-60 MPH","Range","DRIVETRAIN","STORAGE","VAULT LENGTH","TOWING CAPACITY","AUTOPILOT","ADAPTIVE AIR SUSPENSION","GROUND CLEARANCE","APPROACH ANGLE","DEPARTURE ANGLE"],
    Single: 
        ["under 6.5 SECONDS","250+ MILES (EPA EST.)","REAR-WHEEL DRIVE","100 CU FT","6.5 FT","7,500+ LBS","STANDARD","STANDARD","UP TO 16","35 DEGREES","28 DEGREES"],
    Dual :
        ["under 4.5 SECONDS","300+ MILES (EPA EST.)","DUAL MOTOR ALL-WHEEL DRIVE","100 CU FT","6.5 FT","10,00+ LBS","STANDARD","STANDARD","UP TO 16","35 DEGREES","28 DEGREES"]
    }

const specSlice = createSlice({
    name: "spec",
    initialState,
    reducers: {
        specsName:(state) => {
            state.push(initialState.specsName)
        },
        Single:(state, action) => {
            state.push(initialState.Single)
        },
        Dual:(state,action) => {
            state.push(initialState.Dual);
        }
        
    }
})

export const selectSpecs = state => state.spec.specsName;
export const Single = state => state.spec.Single;
export const Dual = state => state.spec.Dual;

export default specSlice.reducer