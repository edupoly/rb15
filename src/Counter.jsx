import React from 'react'
import {connect} from 'react-redux';
import {increment,decrement,reset} from './store/actions'
function Counter(props) {
    console.log("counter",props)
    return (
      <div className="betterview">
          <h1>Counter:{props.count}</h1>
          <button onClick={props.inc}>Increment</button>
          <button onClick={props.decrementing}>Decrement</button>
          <button onClick={props.reset}>Reset</button>
      </div>
    )
}
function mapStateToProps(state){
  return state.counter
}
function mapDispatchToProps(dispatch){
  return {
    inc:()=>{dispatch(increment())},
    decrementing:()=>{dispatch(decrement())},
    reset:()=>{dispatch(reset())},
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)