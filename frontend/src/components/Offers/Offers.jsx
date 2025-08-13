import React from 'react'
import './Offers.css'
import exclucive_image from '../Asset/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="Offers-left">
            <h1>Exlusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="Offers-right">
            <img src={exclucive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers