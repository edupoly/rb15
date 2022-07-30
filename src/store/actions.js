export function addTodo(newtask){
    return {type:'ADDTODO',payload:newtask}
}
export function toggleTodoStatus(task){
    return {type:'TOGGLE_TODO_STATUS',payload:task}
}
export function deleteTodo(task){
    return {type:'DELETETODO',payload:task}
}