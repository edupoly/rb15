import React from 'react'
import Child from './Child'

export default function Parent(props) {
    const [first, setfirst] = React.useState('praveen')
  return (
    <div className='betterview'>

        <h1>Parent</h1>
        <h2>{first}</h2>
        <Child x={first} y={"hemanth"} h={props.j}></Child>
    </div>
  )
}
