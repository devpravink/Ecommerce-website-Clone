import React from 'react'
import './Hero.css'
import hand_icon from '../Asset/hand_icon.png'
import arrow_icon from'../Asset/arrow.png'
import hero_imae from '../Asset/hero_image.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEEW ARRIVAIS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for evryone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        <div className="hero-right">
            <img src={hero_imae} alt="" />
        </div>
    </div>
  )
}

export default Hero