import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>About us</Link></li>
            <li><Link to='/jobs'>Jobs</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
        </ul>
    </div>
  )
}
