import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { GetCountries } from '../../app/services/countries.service'
function Countries() {
    var x = useSelector(state=>state.countries);
    var dispatch = useDispatch();
    React.useEffect(() => {
      
        dispatch(GetCountries())
    
    }, [])
    
  return (
    <div className='betterview'>
        Countries
        <ul>
            {JSON.stringify(x)}
        </ul>
    </div>
  )
}

export default Countries