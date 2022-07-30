import React from 'react'
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {addTodo,toggleTodoStatus,deleteTodo} from './store/actions'
function Todolist(props) {
    console.log("todos",props)
    const [task, settask] = React.useState({title:'',status:false,id:uuidv4()})
    const [filteredtodos, setfilteredtodos] = React.useState([]);
    const [filterKey, setfilterKey] = React.useState('completed')
    React.useEffect(()=>{},[])
    React.useEffect(()=>{})
    React.useEffect(()=>{
        if(filterKey==='all')
        {
            setfilteredtodos(props.todo.todos)
        }
        if(filterKey==='completed'){
            var temp = props.todo.todos.filter((task)=>{
                return task.status===true
            })
            setfilteredtodos([...temp])
        }
        if(filterKey==='notcompleted'){
            var temp = props.todo.todos.filter((task)=>{
                return task.status===false
            })
            console.log("temp",temp)

            setfilteredtodos([...temp])
        }
    },[props.todo,filterKey])
    function handleTask(e){
        settask({...task,title:e.target.value})
    }
    return (
        <div className='betterview'>
            <h1>Todolist({filteredtodos && filteredtodos.length})</h1>
            <input type='text' onChange={handleTask} />
            <button onClick={()=>{props.dispatch(addTodo(task))}}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <input type="radio" name="filter" value="all" onChange={(e)=>{
                    setfilterKey(e.target.value)
                }}/> All &nbsp;&nbsp;&nbsp;
                <input type="radio" name="filter" value="completed" onChange={(e)=>{
                    setfilterKey(e.target.value)
                }}/> Completed &nbsp;&nbsp;&nbsp;
                <input type="radio" name="filter" value="notcompleted" onChange={(e)=>{
                    setfilterKey(e.target.value)
                }}/> Not Completed &nbsp;&nbsp;&nbsp;
            </div>
            <ul>
                {
                    //console.log(filteredtodos)
                    filteredtodos && filteredtodos.map(task=>{
                        return (<li className={task.status?'completed':'notcompleted'}>
                            {task.title}
                            {(task.status===false) && <button onClick={()=>{props.dispatch(toggleTodoStatus(task))}}>Done</button>}
                            {(task.status===true) && <button onClick={()=>{props.dispatch(toggleTodoStatus(task))}}>Undo</button>}
                            <button onClick={()=>{props.dispatch(deleteTodo(task))}}>Delete</button>
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}
export default connect(function(store){return store})(Todolist)