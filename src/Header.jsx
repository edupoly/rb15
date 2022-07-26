import React from 'react';
import {Link} from 'react-router-dom'
function Header(){
    return(
        <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/aboutus">Aboutus</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contactus">Contactus</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/products">Products</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;