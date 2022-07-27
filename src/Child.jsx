import React from 'react'

export default function Child(props) {
  console.log(props)
  return (
    <div className='betterview'>
      <h1>Child</h1>
      <h2>{props.x}</h2>
      <h2>{props.y}</h2>
      <h2>{props.h}</h2>
    </div>
  )
}
