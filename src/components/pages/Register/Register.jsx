import React from 'react'
import {
    Link
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import './Register.css'


function Register() {
    return (
        <>
            <Navbar />
            <div className="row">
  <div className="colm-logo">
    {/* <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo" /> */}
    <h1 className='text-primary '> Create Accout with Clappe Invoice</h1>
    <h1 className=''>Clappe helps you Create and share with Customers.</h1>
  </div>
  <div className="colm-form">
    <div className="form-container">
      <input type="text" placeholder="Email address or phone number" />
      <input type="password" placeholder="Password" />
      <button className="btn-login">SignUp</button>
      <a href="/">Already Have an Account?</a>
      <a href='/login'> 

      <button className="btn-new"> Sign In</button>
      </a>
    </div>
  </div>
</div>
        </>
    )
}

export default Register