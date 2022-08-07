import {createSlice} from '@reduxjs/toolkit'
export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:1
    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count=0
        }
    }
})
export const { increment,decrement,reset } = counterSlice.actions;
export default counterSlice.reducer