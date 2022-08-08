import { createSlice } from "@reduxjs/toolkit";
export const todolistSlice = createSlice({
    name:'todo',
    initialState:{
        todos:['gym','swimming']
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})
export const {addTodo,deleteTodo} = todolistSlice.actions;
export default todolistSlice.reducer;