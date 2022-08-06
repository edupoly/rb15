import React from 'react'
import {connect} from 'react-redux'
import { getAllCountries } from './store/reducers/actions'
function Countires(props) {
    console.log("countries::",props)
    React.useEffect(()=>{
        props.getCountries()
    },[])
  return (
    <div className='betterview'>
        <h1>Countires</h1>
        <button onClick={()=>{}}>get all Countries</button>
        {
            props.countries && props.countries.map((country,i)=>{
                return <li key={i}>{country.name}</li>
            })
        }
    </div>
  )
}
function mapStateToProps(state){
    return state.countries
}
function mapDispatchToProps(dispatch){
    return {
        getCountries:()=>{
            dispatch(getAllCountries())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Countires)