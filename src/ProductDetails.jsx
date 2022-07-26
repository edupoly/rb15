import React, { useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

function ProductDetails() {
    var loc = useLocation()
    
    useEffect(()=>{
        console.log(loc)
    },[loc]);
    
  return (
    <div>
        <h1>ProductDetails</h1>
    </div>
  )
}

export default ProductDetails