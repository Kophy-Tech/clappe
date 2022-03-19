import React from 'react'
import {
    Link
} from "react-router-dom";
import './Register.scss'
function Register() {
    return (
        <div className='register'>
            <nav>
                <span>Clappe</span>
            </nav>
            <div className='login__container'>
                <div className='login__head'>
                  Signup
                </div>
                <div className='login_form__container'>
                    <div className='login_form__image__container'><img src="./images/key.png" alt="key" className='login_form__image' height="100%" width='100%' /></div>
                    <div>
                        <form className='form'>
                            <div classname="container">
                                <div className='login_container_form'>
                                    <label htmlFor="uname" className='name'>Email Address:</label>
                                    <input type="text" placeholder="Enter Username" name="uname" required className='input' />
                                </div>
                                <div className='login_container_form2'>
                                    <label htmlFor="psw">Password:</label>
                                    <input type="password" placeholder="Enter Password" name="psw" required />
                                </div>

                                <div className='forgot_password'>
<Link to='/login'>
                                        <span classname="psw">Forgot <a >password?</a></span>

</Link>
                                </div>
                                <div className='submit'>
                                    <button type="submit">signup</button>
                                </div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register