import React from 'react'
// import '../../assets/css/style.css'
import Navbar from '../Navbar/Navbar';
import '../LandingPage/LandingPageCss.css'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
// import {faFile} from '@fortawesome/fontawesome-free'
import { Animated } from 'react-animated-css'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

function LandingPage() {
    const cards = [
        {
            id: 1,
            title: 'Accounting',
            content: 'Record all invoices in your books and keep track of payments.',
            footer: '2 Days ago',
            img:'fa-solid fa-calculator fa-2x',
            color:'red'
        },
        {
            id: 2,
            title: 'Sales',
            content: 'Easily select your invoicing method for every product and service.',
            footer: '5 Days ago',
            img: 'fa-solid fa-money-bills-simple',
            color:'cyan'
        },
        {
            id: 3,
            title: 'Purchase',
            content: 'Obtain meaningful information about supplier invoices.',
            footer: '2 weeks ago',
            img:'fa-solid fa-cart-shopping fa-2x',
            color:'purple'
        },
        {
            id: 4,
            title: 'Project',
            content: 'Enable your project right way. Step by step get work done.',
            footer: '1 month ago',
            img:'fa-solid fa-diagram-project fa-2x',
            color:'orange'
        }
    ]
    return (
        <>
            <Navbar />
            <div className='landing'>
                <div className='content d-flex flex-column align-items-start justify-content-center p-5'>
                    <Animated animationIn="bounceInLeft" animationInDelay="2" animationOut="fadeOut" isVisible={true}>
                        <h1 className='display-4'>Clappe <span className='fw-bold'> made invoicing
                        </span>
                            <br />   easy and simple</h1>
                    </Animated>
                    <Animated animationIn="bounceInLeft" animationInDelay="2" animationOut="fadeOut" isVisible={true}>
                        <p className='lead fs-4'>Manage contracts, create recurring invoices,
                            <br /> bill timesheets, get paid faster.</p>
                    </Animated>

                    <Link to="" className='btn btn-primary'>Generate Invoice</Link>
                </div>
            </div>
            <div className="container-fluid bg-light p-5" >
                <img src={require('../../../assets/img/Invoicing-Invoices.png')} style={{ width: "90%" }} alt="" />
            </div>
            <div className="invoice container my-5">
                <h1 className='text-center'>Turn <b> Quotes into Invoices </b> with minimal effort</h1>
                <p className='lead text-center fw-bold'>Bill automatically based on sales orders, delivery orders, contracts, or time and material.</p>
                <div className="icons row d-flex justify-content-around mt-5">
                    <div className="content1 col-md-4 justify-content-center align-items-center">
                        <i className="fa-regular fa-file fa-2x my-2 ml-4 pl-4 text-center align-self-center"></i>
                        <p className='text-center'>Easily create invoices based on the quotes you <br /> have sent to your clients.</p>
                    </div>
                    <div className="content2 col-md-4">
                        <i className="fa-solid fa-arrow-rotate-right fa-2x my-2"></i>
                        <p className='text-center'>Send professional looking invoices directly to <br /> your clients in just a click.</p>
                    </div>
                    <div className="content3 col-md-4">
                        <i className="fa-solid fa-file-pdf fa-2x my-2"></i>
                        <p className='text-center'>Automatically send them by email as a PDF <br /> attachment or print and send them by mail.</p>
                    </div>
                </div>



            </div>
            <div className="container-fluid d-flex">
                <div className="row gx-0">
                    <div className="paid col-md-6 p-5 bg-light">
                        <h1 className='mt-4'>Get paid faster</h1>
                        <p className='mt-4'>Cappe Accept online payments via Paypal, Ingenico, Buckaroo, Stripe, Authorize.net,
                            Atos Worldline or Adyen. Eliminate the hassle of sending reminders for late
                            or outstanding payments. Automated follow-ups are simple to configure
                            and help to streamline billing to make payments quick and easy.</p>
                        <Link to="/" className="btn btn-primary">Start now</Link>
                    </div>
                    <div className='col-md-6 '>
                        <img src={require('../../../assets/img/about.jpg')} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div className="container my-5 d-flex justify-content-center">
                <div className="row gx-0">
                    <div className='col-md-6'>
                        <img src={require('../../../assets/img/phone1.jpg')} style={{ width: "70%" }} className='img-fluid ps-5' alt="" />
                    </div>
                    <div className="paid col-md-6 p-5">
                        <h1 className='mt-4'>Simplify your accounting</h1>
                        <p className='lead fw-bold'>Keep track of bank account movements and the status of invoices.</p>
                        <p className='mt-2'>Use the status overview to help keep track of drafts, paid and unpaid invoices.</p>
                        <p className=''>Automatically record all transactions from your bank accounts by importing and reconciling your bank statements.</p>
                    </div>

                </div>
            </div>
            <div className="container-fluid my-5 d-flex justify-content-center bg-light">
                <div className="row gx-0">

                    <div className="paid col-md-6 p-5">
                        <h1 className='mt-4 fw-bold'>Analyze your sales</h1>
                        <p className='lead fw-bold'>Access insightful data to get the big picture.</p>
                        <p className='mt-2'>Get direct access to key information with dynamic and customizable dashboards. Make your own definition and analyze your invoicing by product, customer, salesperson, etc.</p>
                        <Link to="/" className="btn btn-primary">Business Intelligence</Link>

                    </div>
                    <div className='col-md-6 p-5'>
                        <img src={require('../../../assets/img/Invoicing-Dashboard.png')} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div className="container-fluid carrd my-5 p-5 bg-light">
                <div className="d-flex row">
                    {
                        cards.map(card => {
                            return (
                                <div className="card me-4 col-md-3" style={{ width: '18rem' }}>
                                   <i className={`${card.img}`} style={{color:`${card.color}`}} ></i>
                                    <div className="card-body">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text">{card.content}</p>
                                        <div className="card-footer text-muted">
                                            {card.footer}
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

<Footer />
        </>

    )
}
export default LandingPage;
