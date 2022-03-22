import React from 'react'
import '../Footer/FooterCss.css'

export default function Footer() {
    return (
        <div>
            <footer className='foot text-white p-5'>
                <h1 className='fw-bold fs-2 text-center'>Clappe</h1>
                <div className="row mt-5">
                    <div className="col-md-2">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="/">Tutorials</a></li>
                            <li><a href="/">Documentations</a></li>
                            <li><a href="/">Forums</a></li>
                        </ul>
                        <h4>Open source</h4>
                        <ul>
                            <li><a href="/">Download</a></li>
                            <li><a href="/">Github</a></li>
                            <li><a href="/">Runbot</a></li>
                            <li><a href="/">Translations</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/">Clappe Hosting</a></li>
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Upgrade</a></li>
                            <li><a href="/">Education</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>About us</h4>
                        <ul>
                            <li><a href="/">Our Company</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Jobs</a></li>
                            <br />
                            <li><a href="/">Events</a></li>
                            <li><a href="/">Blogs</a></li>
                            <li><a href="/">Customers</a></li>
                            <li><a href="/">Patners</a></li>
                            <br />
                            <li><a href="/">Legal</a></li>
                            <li><a href="/">Privacy</a></li>
                            <li><a href="/">Security</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" style={{color:'white'}} aria-expanded="false">
                                English
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Spanish</a></li>
                                <li><a className="dropdown-item" href="/">French</a></li>
                                <li><a className="dropdown-item" href="/">Yoruba</a></li>
                                <li><a className="dropdown-item" href="/">Hausa</a></li>
                            </ul>
                        </li>
                        <hr />
                        <p>
                            Clappe is a suite of open source business apps that cover all your company needs: CRM, eCommerce, accounting, inventory, point of sale, project management, etc.
                        </p>
                        <p>
                            Clappe's unique value proposition is to be at the same time very easy to use and fully integrated.
                        </p>
                        <div className="ico">
                            <i class="fa-brands fa-facebook-f pe-4"></i>
                            <i class="fa-brands fa-linkedin pe-4"></i>
                            <i class="fa-brands fa-instagram pe-4"></i>
                            <i class="fa-solid fa-message pe-4"></i>
                            <i class="fa-brands fa-github-square pe-4"></i>
                            <i class="fa-brands fa-twitter pe-4"></i>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="bottom_footer bg-dark ">
                <p className='text-center text-white p-2 text-muted'>
                    Made by &copy; Kophy Technologies - All rights reserved.
                </p>
            </div>
        </div>
    )
}
