import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset } from './counterSlice';

function Counter() {
    var count = useSelector(state=>state.counter.count)
    var dispatch = useDispatch();
    return (
        <>
            <div>Counter:{count}</div>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(reset())}}>Decrement</button>
        </>
    )
}

export default Counter