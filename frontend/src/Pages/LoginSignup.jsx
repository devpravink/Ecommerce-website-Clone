import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsinup'>
      <div className="login-contaner">
        <h1>Sign Up</h1>
        <div className="loginsignup-fileds">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email'/>
          <input type="passworld" placeholder='Passworld'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Allredy have an acount <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continue, i agree to the terms of use privacy and policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup