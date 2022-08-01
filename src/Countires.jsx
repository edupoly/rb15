import React from 'react'
import {connect} from 'react-redux'
import { getAllCountries } from './store/reducers/actions'
function Countires(props) {
    console.log("countries::",props)
  return (
    <div className='betterview'>
        <h1>Countires</h1>
        <button onClick={()=>{props.dispatch(getAllCountries())}}>get all Countries</button>
        {
            props.countries && props.countries.countries.map((country)=>{
                return <li>{country.name}</li>
            })
        }
    </div>
  )
}

export default connect((store)=>{return store})(Countires)