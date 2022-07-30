import React from 'react'
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {addTodo,toggleTodoStatus,deleteTodo} from './store/actions'
function Todolist(props) {
    console.log("todolist",props)
    const [task, settask] = React.useState({title:'',status:false,id:uuidv4()})
    const [filteredtodos, setfilteredtodos] = React.useState([]);
    const [filterKey, setfilterKey] = React.useState('completed')
    React.useEffect(()=>{},[])
    React.useEffect(()=>{})
    React.useEffect(()=>{
        if(filterKey==='all')
        {
            setfilteredtodos(props.todos)
        }
        if(filterKey==='completed'){
            var temp = props.todos.filter((task)=>{
                return task.status===true
            })
            setfilteredtodos([...temp])
        }
        if(filterKey==='notcompleted'){
            var temp = props.todos.filter((task)=>{
                return task.status===false
            })
            console.log("temp",temp)

            setfilteredtodos([...temp])
        }
    },[props.todos,filterKey])
    function handleTask(e){
        settask({...task,title:e.target.value})
    }
    return (
        <div className='betterview'>
            <h1>Todolist({filteredtodos && filteredtodos.length})</h1>
            <input type='text' onChange={handleTask} />
            <button onClick={()=>{props.addTask(task)}}>Add Task</button>
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
                            {(task.status===false) && <button onClick={()=>{props.toggleTaskStatus(task)}}>Done</button>}
                            {(task.status===true) && <button onClick={()=>{props.toggleTaskStatus(task)}}>Undo</button>}
                            <button onClick={()=>{props.deleteTask(task)}}>Delete</button>
                            </li>)
                    })
                }
            </ul>
        </div>
    )
}
function mapStateToProps(state){
    return state.todo
}
function mapDispatchToProps(dispatch){
    return {
        addTask:(task)=>{dispatch(addTodo(task))},
        toggleTaskStatus:(task)=>{dispatch(toggleTodoStatus(task))},
        deleteTask:(task)=>{dispatch(deleteTodo(task))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)