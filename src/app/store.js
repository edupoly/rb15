import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice'
import todoReducer from '../features/Todolist/todoSlice'
import countriesReducer from '../features/Countries/countriesSlice'
import booksReducer from '../features/Books/booksSlice'

export default configureStore({
    reducer:{
        counter:counterReducer,
        todolist:todoReducer,
        countries:countriesReducer,
        books:booksReducer
    }
})