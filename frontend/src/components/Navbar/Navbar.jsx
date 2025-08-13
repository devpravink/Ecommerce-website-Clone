import React from 'react'
import './Navbar.css'

import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src= {logo} alt="" />
            <p>SHOPER</p>
        </div>
        <ul className="nav-menu">
            <li>Shop <hr/></li>
            <li>Men</li>
            <li>Wom</li>
            <li>Kid</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
} 

export default Navbar