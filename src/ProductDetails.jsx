import React, { useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

function ProductDetails() {
    var {state:{product:{title,price}}} = useLocation()
    
    // useEffect(()=>{
    //     console.log(state)
    // },[state]);
    
  return (
    <div>
        <h1>ProductDetails</h1>
        <h2>{title}</h2>
        <h2>{price}</h2>
    </div>
  )
}

export default ProductDetails