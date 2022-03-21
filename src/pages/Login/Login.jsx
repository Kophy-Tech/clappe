import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Login.scss'

function Login() {
    return (
        <>
            <Navbar />
            <div className='login'>
                <div className='login__container'>
                    <div className='login__head text-primary'>
                        Login
                    </div>
                    <div className='login_form__container pe-4'>
                        <div className='login_form__image__container'>
                            <img src="./images/key.png" alt="key" className='login_form__image' height="100%" width='100%' />
                        </div>
                        <form className='mt-4'>
                            <div className="form-group">
                              <b> <label htmlFor="exampleInputEmail1">Email address</label> </b>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                               <b> <label htmlFor="exampleInputPassword1">Password</label> </b>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                           
                            <a type="submit" href='/dashboard' className="mt-2 btn btn-primary">Login</a>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login