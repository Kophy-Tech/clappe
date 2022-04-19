import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
export default function Contact() {
    return (
        <>
        <Navbar />
            <div className="container">
                <div className="row">
                    <h3 className='first'>Contact us</h3>
                </div>
                <div className="row">
                    <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
                </div>
                <div className="row input-container">
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <input type="text" required />
                            <label>Name</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input">
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="styled-input" style={{ float: 'right' }}>
                            <input type="text" required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="styled-input wide">
                            <textarea required defaultValue={""} />
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="btn-lrg submit-btn">Send Message</div>
                    </div>
                </div>
            </div>
<Footer />

        </>
    )
}
