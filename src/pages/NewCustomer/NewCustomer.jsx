import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../NewCustomer/NewCustomerCss.css'


export default function NewCustomer() {
    return (
        <> 
        <Navbar />
        <div>
            <div className="container bg-light">
                {/* Add New Customer */}
                <div className="bg-light p-2 border-bottom mb-4">
                    <h3 className="fw-bold fs-3">Add New Customer</h3>
                </div>
                <div className="row mb-3">
                    {/* Customer Information Box */}
                    <div className="col-md-4 gx-3 gx-sm-4">
                        <div className="border h-100">
                            <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">Customer Information</h5>
                            {/* Customer Information Form */}
                            <form action="#" className="p-2">
                                {/* First Name Input */}
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                {/* Last Name Input */}
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                {/* Business Name Input */}
                                <div className="form-group my-2">
                                    <input type="text" placeholder="Business Name" className="form-control" />
                                </div>
                                {/* Address Input */}
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Address" />
                                </div>
                                {/* Email Input */}
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                {/* Phone Number  Input */}
                                <div className="d-flex mb-2">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                    <div className="mx-3">
                                        <select className="form-select" name>
                                            <option value="mobile" selected>
                                                Mobile
                                            </option>
                                            <option value="work">
                                                Work
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <input type="checkbox" /> Taxable?
                                {/* Invoice Preferenc */}
                                <div className="form-group mt-2 ">
                                    <label htmlFor="invoice">Invoice Preference</label>
                                    <select name className="form-select">
                                        <option value="Email" selected>Email PDF</option>
                                        <option value="physical">
                                            Physical
                                        </option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Business Details */}
                    <div className="col-md-4">
                        <div className="border h-100">
                            <h4 className="h4 text-center bg-color py-3 text-white fw-bold fs-5">Business Details</h4>
                            {/* Inner Box */}
                            <div className="border w-50 m-5 p-5">
                                <div>Select Logo</div>
                                <div className="border p-4">
                                </div>
                                <div>Logo Gallery</div>
                            </div>
                            <div className="px-3">
                                <form action="#">
                                    <label htmlFor="theme">Select Theme</label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-group">
                                            <input type="text" className="form-control w-100" />
                                        </div>
                                        <div>
                                            <button className="mybtn mx-3">Browser Gallery</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Shipping & Billing */}
                    <div className="col-md-4">
                        <div className="border h-100">
                            <h4 className="h4 text-center bg-color py-3 text-white fw-bold fs-5">Shipping &amp; Billing</h4>
                            {/* Shipping & Billing Form  */}
                            <form action="#" className="p-2">
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Shipping to" />
                                </div>
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Shipping address" />
                                </div>
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Bill to" />
                                </div>
                                <div className="form-group my-2">
                                    <input type="text" className="form-control" placeholder="Billing address" />
                                </div>
                                <textarea className="form-control" rows={3} defaultValue={""} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="container">
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <div className="border h-auto">
                            <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">Customer Information</h5>
                            <div className="border mx-4 mb-3 pb-5">
                                Payment due within 15 days
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Save, Save & Continue, Cancel Buttons  */}
            <div className="d-flex flex-row justify-content-center -2">
                <button className="mybtn">Save</button>
                <button className="mybtn">Save &amp; Continue</button>
                <button className="mybtn">Cancel</button>
            </div>
        </div>
        </>
    )
}
