import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,reset} from './counterSlice'
function Counter() {
    var count = useSelector(state=>state.counter.count);
    var dispatch = useDispatch();
  return (
    <div className='betterview'>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>Inc</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{dispatch(decrement())}}>Dec</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{dispatch(reset())}}>Reset</button>&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default Counter