import { v4 as uuidv4 } from 'uuid';
const initialState = {
    todos:[
        {
            title:'gym',
            status:false,
            id:uuidv4()
        },
        {
            title:'swimming',
            status:true,
            id:uuidv4()
        },
        {
            title:'running',
            status:true,
            id:uuidv4()
        },
        {
            title:'diet',
            status:false,
            id:uuidv4()
        },
        {
            title:'veggies',
            status:false,
            id:uuidv4()
        }
    ]
}
function todoReducer(state=initialState,action) {
  
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,{...action.payload}]}
    }
    if(action.type==='DELETETODO'){
        var temp = [...state.todos];
        temp = temp.filter((task)=>{
            if(task.id===action.payload.id){
                return false
            }
            else{
                return true
            }
        })
        return {...state,todos:[...temp]}
    }
    if(action.type==='TOGGLE_TODO_STATUS'){
        var temp = [...state.todos];
        temp = temp.map((task)=>{
            if(task.id===action.payload.id){
                task.status=!task.status;
                return task
            }
            else{
                return task
            }
        })
        return {...state,todos:[...temp]}
    }
    return {...state}
}
export function selectTodos(state){
    return state.todo
}
export default todoReducer