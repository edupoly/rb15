import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {addTodo,deleteTodo} from './todoSlice'
function Todolist() {
    var tasks = useSelector(state=>state.todolist.todos);
    var dispatch = useDispatch()
    const [newtask, setNewtask] = React.useState('')
    function handleNewTask(e){
        setNewtask(e.target.value)
    }
  return (
    <div className='betterview'>
        <h1>Todolist</h1>
        <input type="text" onKeyUp={handleNewTask}/>
        <button onClick={()=>{dispatch(addTodo(newtask))}}>Add Todo</button>
        {
            tasks && tasks.map((t,i)=>{
                return <li>
                    {t}&nbsp;&nbsp;<button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
                    </li>
            })
        }
    </div>
  )
}

export default Todolist