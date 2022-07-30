
const initialState = {
    todos:[
        {
            title:'gym',
            status:false
        },
        {
            title:'swimming',
            status:true
        },
        {
            title:'running',
            status:true
        },
        {
            title:'diet',
            status:false
        },
        {
            title:'veggies',
            status:false
        }
    ]
}
function todoReducer(state=initialState,action) {
  
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,{...action.payload}]}
    }
    return {...state}
}
export default todoReducer