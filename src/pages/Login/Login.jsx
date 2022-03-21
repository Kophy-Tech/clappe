import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Login.scss'

function Login() {
    return (
        <> 
        <Navbar/>
        <div className='login'>
            <div className='login__container'>
                <div className='login__head text-primary'>
                    Login
                </div>
                <div className='login_form__container'>
                    <div className='login_form__image__container'><img src="./images/key.png" alt="key" className='login_form__image' height="100%" width='100%' /></div>
                    <div>
                        <form className='form'>
                            <div classname="container">
                                <div className='login_container_form'>
                                    <label htmlFor="uname" className='name'>Email Address:</label>
                                    <input type="text" placeholder="Enter Username" name="uname" required  className='input'/>
                                </div>
                                <div className='login_container_form2'>
                                    <label htmlFor="psw">Password:</label>
                                    <input type="password" placeholder="Enter Password" name="psw" required />
                                </div>

                                <div  className='forgot_password'>

                                    <span classname="psw">Forgot <a >password?</a></span>
                                </div>
                               <div className='submit'>
                                    <a href='/dashboard' type="submit" className='btn btn-primary'>Login</a>
                               </div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login