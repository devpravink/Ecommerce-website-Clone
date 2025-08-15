import React from 'react'
import './NewsLater.css'

const NewsLater = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Ofeers On your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='your Email Id' />
        <button>Subscrbe</button>
      </div>
    </div>
  )
}

export default NewsLater
