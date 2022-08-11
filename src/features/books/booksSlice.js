import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetBooks = createAsyncThunk('/getbooks',async function(){
    var res = await fetch("http://localhost:4000/books")
    return res.json()
})

export const booksSlice = createSlice({
    name:'books',
    initialState:{
        books:[]
    },
    extraReducers:{
        [GetBooks.fulfilled]:(state,action)=>{
            console.log(action.payload,"payload")
            state.books=action.payload
        }
    }
})
export default booksSlice.reducer