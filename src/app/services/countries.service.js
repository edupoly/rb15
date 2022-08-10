import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCountries = createAsyncThunk('/countries',async ()=>{

    var res = await fetch('https://restcountries.com/v2/all');
    return res.json()
})

export const GetBooks = createAsyncThunk('/books',async ()=>{

    var res = await fetch('http://localhost:4000/books')
    return res.json()
})

export const AddBook = createAsyncThunk('/books',async (newbook)=>{
    
    var res = await fetch('http://localhost:4000/books',{
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newbook),
    })
    return res.json()
})