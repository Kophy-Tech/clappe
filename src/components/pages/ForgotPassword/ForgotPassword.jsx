import React from 'react'
import './ForgotPassword.scss'
function ForgotPassword() {
    return (
        <div className='forgot'>
            <nav>
                <span>Clappe</span>
            </nav>
            <div className='login__container'>
                <div className='login__head'>
                   Forgot Password
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
                                
                                <div className='submit'>
                                    <button type="submit">Resend</button>
                                </div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;