import { createSlice } from "@reduxjs/toolkit";
import { GetBooks } from "../../app/services/countries.service";

export const booksSlice = createSlice({
    name:'books',
    initialState:{
        books:[]
    },
    extraReducers:{
        [GetBooks.fulfilled]:(state,action)=>{
            state.books=action.payload
        }
    }
})

export default booksSlice.reducer;