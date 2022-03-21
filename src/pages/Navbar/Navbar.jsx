import React from 'react'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold ms-5" href="#">Clappe</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='ms-5'>
            </div>
            <div className='ms-5'>
            </div>
            <div className='ms-5'>
            </div>
            <div className='ms-5'>
            </div>
            <div className='ms-5'>
            </div>
            <div className='ms-5'>

            </div>
            <ul className="navbar-nav d-flex me-auto ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Invoicing
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex">
              <a href='/login' className="btn btn-outline-primary me-3" type="submit">Sign in</a>
              <a href='/dashboard' className="btn btn-primary me-3" type="submit">Try for free</a>
            </form>
          </div>
        </div>
      </nav>

    </div>

  )
}