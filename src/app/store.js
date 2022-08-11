import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import booksReducer from '../features/books/booksSlice'
export default configureStore({
    reducer:{
        counter:counterReducer,
        books:booksReducer
    }
})