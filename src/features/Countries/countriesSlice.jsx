import { createSlice } from "@reduxjs/toolkit";
import { GetCountries } from "../../app/services/countries.service";

export const countriesSlice = createSlice({
    name:'countries',
    initialState:{
        countries:[]
    },
    extraReducers:{
        [GetCountries.fulfilled]:(state,action)=>{
            state.countries=action.payload
        }
    }
})

export default countriesSlice.reducer