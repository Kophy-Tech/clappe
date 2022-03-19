import React from 'react'
import './Login.scss'
function Login() {
    return (
        <div className='login'>
            <nav>
                <span>Clappe</span>
            </nav>
            <div className='login__container'>
                <div className='login__head'>
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
                                    <button type="submit">Login</button>
                               </div>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login