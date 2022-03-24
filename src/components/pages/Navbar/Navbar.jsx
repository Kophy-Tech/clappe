import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../redux/thunks";
export default function Navbar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold ms-5" href="/">
            Clappe
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="ms-5"></div>
            <div className="ms-5"></div>
            <div className="ms-5"></div>
            <div className="ms-5"></div>
            <div className="ms-5"></div>
            <div className="ms-5"></div>
            <ul className="navbar-nav d-flex me-auto ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  Tour
                </a>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Tour
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                 Contact us
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                href="/login"
                className="btn btn-outline-primary me-3"
                onClick={async () => {
                  if (user.loggedIn) {
                    await logoutUser();
                  }

                  //go to login page
                  // window.location.href = "/login";
                  navigate("/login");

                }}
              >
                {" "}
                {user.loggedIn ? "Sign Out" : "Sign in"}
              </button>
              {!user.loggedIn && (
                <Link
                  to="/register"
                  className="btn btn-primary me-3"
                  type="submit"
                >
                  Register
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
