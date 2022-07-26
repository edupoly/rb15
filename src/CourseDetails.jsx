import React from 'react'
import {useParams} from 'react-router-dom'
function CourseDetails() {
    var params = useParams();
  return (
    <div className='betterview'>
        <h1>CourseDetails</h1>
        <h1>{params.coursename}</h1>
    </div>
  )
}

export default CourseDetails