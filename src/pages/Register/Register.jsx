import React from 'react'
import {
    Link
} from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import './Register.scss'


function Register() {
    return (
        <>
            <Navbar />
            <div className='register'>
                <div className='login__container'>
                    <div className='login__head text-primary'>
                        Signup
                    </div>
                    <div className='login_form__container pe-4'>
                        <div className='login_form__image__container'>
                            <img src="./images/key.png" alt="key" className='login_form__image' height="100%" width='100%' />
                        </div>
                        <div>
                        <form className='mt-4'>
                            <div className="form-group">
                              <b> <label htmlFor="exampleInputEmail1">Email address</label> </b>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                               <b> <label htmlFor="exampleInputPassword1">Password</label> </b>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                           
                            <button type="submit" className="mt-2 btn btn-primary">Submit</button>
                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register