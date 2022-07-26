import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Products() {
    const [products, setproducts] = React.useState([
        {
            title:'samsung s20',
            price:50000
        },
        {
            title:'vivo x60',
            price:35000
        },
        {
            title:'oneplus 11',
            price:40000
        },
        {
            title:'iPhone 14',
            price:5000
        },
    ])
  return (
    <div className='betterview'>
        <h1>Products</h1>
        {
            products.map((product)=>{
                return(
                    <li><Link to="productdetails" state={{product}}>{product.title}</Link></li>
                )
            })
        }
        <Outlet></Outlet>
    </div>
  )
}
