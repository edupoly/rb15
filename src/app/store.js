import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice'
import todoReducer from '../features/Todolist/todoSlice'
export default configureStore({
    reducer:{
        counter:counterReducer,
        todolist:todoReducer
    }
})