import React from 'react'
import { Link } from 'react-router-dom' ;
function Nav() {
    return (
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

          
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Admin area</Link></li>


          </ul>
         </nav>
    )
}

export default Nav
