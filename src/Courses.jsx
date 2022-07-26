import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Courses() {
    const [courses,setCourses] = React.useState([
        'Javascript','ReactJS','Angular'
    ])
  return (
    <div>
        <h1>Courses</h1>

        <ul>
            {
                courses.map((course)=>{
                    return(
                        <li>
                            <Link to={`coursedetails/${course}`}>{course}</Link>
                        </li>
                    )
                })
            }
        </ul>
        <Outlet />
    </div>
  )
}
