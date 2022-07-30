//TODOLIST ACTIONS

export function addTodo(newtask){
    return {type:'ADDTODO',payload:newtask}
}
export function toggleTodoStatus(task){
    return {type:'TOGGLE_TODO_STATUS',payload:task}
}
export function deleteTodo(task){
    return {type:'DELETETODO',payload:task}
}

//counter actions

export function increment(){
    return {type:'INC'}
}
export function decrement(){
    return {type:'DEC'}
}
export function reset(){
    return {type:'RESET'}
}