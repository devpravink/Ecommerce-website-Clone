import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Asset/logo.png'
import cart_icon from '../Asset/cart_icon.png'
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src= {logo} alt="" />
            <p>PRAVINMART</p>
        </div>
        
        {/* Mobile menu toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        {/* Desktop menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li onClick={()=>{setMenu("shop"); closeMobileMenu();}}>
                <Link style={{ textDecoration: 'none '}} to='/'>Shop</Link>
                {menu==="shop"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("mens"); closeMobileMenu();}}>
                <Link style={{ textDecoration: 'none '}} to='/mens'>Men</Link>
                {menu==="mens"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("womens"); closeMobileMenu();}}>
                <Link style={{ textDecoration: 'none '}} to='/womens'>Women</Link>
                {menu==="womens"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("kids"); closeMobileMenu();}}>
                <Link style={{ textDecoration: 'none '}} to='/kids'>Kids</Link>
                {menu==="kids"?<hr/>:<></>}
            </li>
        </ul>
        
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
} 

export default Navbar