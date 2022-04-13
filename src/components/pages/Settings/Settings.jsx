import React, { useState } from 'react'

const Settings = () => {

    const [step, setStep] = useState(0)

    
    return (
        <>
            <div className="container">
                <h1 className="display-4 my-4">Settings</h1>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row">
                            <div className="col-10 col-md-3">
                                <button onClick={(e) => setStep(0)} className={`${step === 0 ? 'bg-primary text-light border-0' : 'button-outlined text-dark '} w-100 py-2`}>Profile</button>
                            </div>
                            <div className="col-10 col-md-3">
                                <button onClick={(e) => setStep(1)} className={`${step === 1 ? 'bg-primary text-light border-0' : 'button-outlined text-dark '} w-100 py-2`}>Password</button>
                            </div>
                            <div className="col-10 col-md-3">
                                <button onClick={(e) => setStep(2)} className={`${step === 2 ? 'bg-primary text-light border-0' : 'button-outlined text-dark '} w-100 py-2`}>Preference</button>
                            </div>
                            <div className="col-10 col-md-3">
                                <button onClick={(e) => setStep(3)} className={`${step === 3 ? 'bg-primary text-light border-0' : 'button-outlined text-dark '} w-100 py-2`}>Payment Info</button>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="card p-5 my-4 card-border">

                            {/* Profile */}
                            {
                                step === 0 && (
                                    <>
                                        <h1 className='mb-'>Profile</h1>
                                        <form onSubmit={(e) => e.preventDefault(e)}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="">Profile photo</label>
                                                <input className='form-control' type="file" placeholder='Business Name' />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="text" placeholder='First Name' />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="text" placeholder='Last Name' />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="text" placeholder='Address' />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="email" placeholder='Email' />
                                            </div>
                                            <div className="form-group mb-3 d-flex">
                                                <input className='form-control' type="tel" placeholder='Phone Number' />
                                                <div className="mx-4"></div>
                                                <select className='px-4' name="" id="">
                                                    <option value="mobile">mobile</option>
                                                    <option value="work">work</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="tel" placeholder='Other phone number' />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="tel" placeholder='Fax' />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="tel" placeholder='Business Number' />
                                            </div>

                                            <div className="my-3 card-border py-2 d-flex justify-content-center align-items-center" style={{ width: 200 }}>
                                                <img src="../images/img-holder.png" height={20} width={40} alt="" className="img-fluid" />
                                                <p className='mx-3 mb-0'>+ </p>
                                                <p className='mb-0'>color</p>

                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="d-flex">

                                                    <label htmlFor="" className='mr-4'>color</label>
                                                    <div className="colors d-flex">
                                                        <div className="bg-primary mx-1" style={{ height: 20, width: 20 }}></div>
                                                        <div className="bg-warning mx-1" style={{ height: 20, width: 20 }}></div>
                                                        <div className="bg-secondary mx-1" style={{ height: 20, width: 20 }}></div>
                                                        <div className="bg-success mx-1" style={{ height: 20, width: 20 }}></div>
                                                    </div>
                                                </div>
                                                <input className='form-control' type="color" placeholder='Business Number' />
                                            </div>
                                            <div className="form-group mb-3">
                                                <select name="" id="">
                                                    <option value="Tax Type">Tax Type</option>
                                                    <option value="On total">On total</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="number" placeholder='Tax Rate' />
                                            </div>
                                            <div className="button-group d-flex">
                                                <button className="bg-primary round-1 w-100 py-2 border-0 text-white">Save</button>
                                                <button className="bg-primary round-1 w-100 py-2 border-0 mx-3 text-white">Cancel</button>
                                                <button className="bg-primary round-1 w-100 py-2 border-0 text-white">Close Account</button>
                                            </div>
                                        </form>
                                    </>
                                )
                            }

                            {/* Password */}

                            {
                                step === 1 && (
                                    <>
                                        <h1 className='mb-'>Password</h1>

                                        <form onSubmit={(e) => e.preventDefault(e)}>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="password" name='old-password' placeholder='Old password' required />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="password" name='new-password' placeholder='New password' required />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input className='form-control' type="password" name='confirm-password' placeholder='Confirm password' required />
                                            </div>
                                            <div className="button-group d-flex">
                                                <button className="bg-primary round-1 w-100 py-2 border-0 text-white">Save</button>
                                                <button className="bg-primary round-1 w-100 py-2 border-0 mx-3 text-white">Cancel</button>
                                            </div>

                                        </form>
                                    </>
                                )
                            }

                            {/* Preferences */}
                            {
                                step === 2 && (
                                    <>
                                        <h1 className='mb-'>Preference</h1>

                                        <form onSubmit={(e) => e.preventDefault(e)}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="" className='d-block'>Language Preference</label>
                                                <select name="" id="" style={{ width: 200 }}>
                                                    <option value="English">English</option>
                                                    <option value="French">French</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="" className='d-block'>Region</label>
                                                <select name="" id="" style={{ width: 200 }}>
                                                    <option value="US">US</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="On total">France</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="" className='d-block'>Email Reports</label>
                                                <select name="" id="" style={{ width: 200 }}>
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Quarterly">Quarterly</option>
                                                    <option value="Yearly">Yearly</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-5">
                                                <label htmlFor="" className='d-block'>Currency</label>
                                                <select name="" id="" style={{ width: 200 }}>
                                                    <option value="Dollar">Dollar</option>
                                                    <option value="Pounds">Pounds</option>
                                                    <option value="Rupees">Rupees</option>
                                                </select>
                                            </div>
                                            <div className="button-group mt-3 d-flex">
                                                <button type="submit" className="bg-primary round-1 w-100 py-2 border-0 text-white">Save</button>
                                                <button type="submit" className="bg-primary round-1 w-100 py-2 border-0 mx-3 text-white">Cancel</button>
                                            </div>
                                        </form>
                                    </>
                                )
                            }

                            {/* Payment */}
                            {
                                step === 3 && (
                                    <>
                                        <h1 className='mb-'>Payment</h1>

                                        <form onSubmit={(e) => e.preventDefault(e)}>
                                            <div className="form-group mb-3">
                                                <label htmlFor="">PayPal</label>
                                                <input className='form-control' name="paypal" type="text" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="">Bank Transfer</label>
                                                <input className='form-control' name="bank-transfer" type="text" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="">e-Transfer</label>
                                                <input className='form-control' name="e-transfer" type="text" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="">Other</label>
                                                <input className='form-control' type="text" />
                                            </div>
                                            <div className="button-group mt-3 d-flex">
                                                <button className="bg-primary round-1 w-100 py-2 border-0 text-white">Save</button>
                                                <button className="bg-primary round-1 w-100 py-2 border-0 mx-3 text-white">Cancel</button>
                                            </div>
                                        </form>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings