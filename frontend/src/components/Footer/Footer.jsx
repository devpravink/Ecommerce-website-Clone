import React from 'react'
import './Footer.css'
import footer_logo from '../Asset/logo_big.png'
import instagram_icon from '../Asset/instagram_icon.png'
import pintest_icon from '../Asset/pintester_icon.png'
import whatsapp_icon from '../Asset/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>PRAVINMART</p>
      </div>
      <ul className="footer-link">
        <li>Compnay</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2025 - All Right Pravin</p>
      </div>
    </div>
  )
}

export default Footer
