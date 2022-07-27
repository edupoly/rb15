import React from 'react'
import {connect} from 'react-redux'
function Counter(props) {
    console.log(props)
  return (
    <div className='betterview'>
        <h1>Counter:{props.counter.count}</h1>
        
    </div>
  )
}

export default connect(function(store){return store})(Counter)