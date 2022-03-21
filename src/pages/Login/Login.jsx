import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Login.css'
// import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
            <Navbar />
        <div className="row">
  <div className="colm-logo">
    {/* <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo" /> */}
    <h1 className='text-primary '> Turn Quotes into Invoices with minimal effort</h1>
    <h1 className=''>Clappe helps you Create and share with Customers.</h1>
  </div>
  <div className="colm-form">
    <div className="form-container">
      <input type="text" placeholder="Email address or phone number" />
      <input type="password" placeholder="Password" />
      {/* <Link> */}
      <a href='/dashboard'> 

      <button className="btn-login">Login</button>

      </a>
      
      {/* </Link> */}
      <a href="/">Forgotten password?</a>
      <a href='/register'> 

      <button className="btn-new">Create new Account</button>
      </a>
    </div>
  </div>
</div>

        </>
    )
}

export default Login