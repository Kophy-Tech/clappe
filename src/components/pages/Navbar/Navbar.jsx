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
          <Link className="navbar-brand fw-bold ms-5" to="/">
            Clappe
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Features
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Tour
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Tour
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact us
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button
                to="/login"
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
                <div className="px-4">   {user.loggedIn ? "Sign Out" : "Sign in"}</div>
              
              </button>
              {!user.loggedIn ? (
                <Link
                  to="/register"
                  className="btn btn-primary me-3"
                  type="submit"
                >
                  Register
                </Link>
              ) : (
                <span className="mt-2">{user.user.first_name}</span>
              )}
              {user.loggedIn && (
                <Link
                  to="/dashboard"
                  className="btn btn-primary me-3 mx-4"
                >
                  Dashboard
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
