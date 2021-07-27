import {createSlice } from "@reduxjs/toolkit"

const initialState = {
    baseSpecs: 
        ["Accerleration 0-60mph", "Acceleration 0-100 mph", "Acceleration 1/4 mile", "Top Speed","Wheel Torque", "Mile Range", "Seating","Drive", "Base Price", "Base Reservation", "Founders Series Price", "Founders Series Reservation"],
    specsInfo: 
        ["1.9 sec", "4.2 sec", "8.8 sec", "Over 250 mph", "10,000 Nm", "620 miles", "4", "All-Wheel Drive", "$200,000","$50,000", "$250,000", "$250,000"]
    }

const roadsterSlice = createSlice({
    name: "spec",
    initialState,
    reducers: {
        baseSpecs:(state) => {
            state.push(initialState.baseSpecs)
        },
        specsInfo:(state) => {
           state.push(initialState.specInfo);
        }
    }
})

export const baseSpecs = state => state.roadster.baseSpecs;
export const specsInfo = state => state.roadster.specsInfo


export default roadsterSlice.reducer