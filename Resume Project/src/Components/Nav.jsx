import React from 'react'
import './Nav.css' 
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='main'>
      <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
        <li className="center"><Link to="/application">Create</Link></li>
        <li className="upward"><Link to="/about">About</Link></li>
        <li className="forward"><Link to="/login">Login</Link></li>
  </ul>
    </div>
  )
}

export default Nav;
