import React from "react";
import { Link } from "react-router-dom";
import "../Footer/FooterCss.css";

export default function Footer() {
  return (
    <div>
      <footer className="foot text-white p-5">
        <h1 className="fw-bold fs-2 text-center">Clappe</h1>
        <div className="row mt-5">
          <div className="col-md-2">
            <h4>Community</h4>
            <ul>
              <li>
                <Link to="/">Tutorials</Link>
              </li>
              <li>
                <Link to="/">Documentations</Link>
              </li>
              <li>
                <Link to="/">Forums</Link>
              </li>
            </ul>
            <h4>Open source</h4>
            <ul>
              <li>
                <Link to="/">Download</Link>
              </li>
              <li>
                <Link to="/">Github</Link>
              </li>
              <li>
                <Link to="/">Runbot</Link>
              </li>
              <li>
                <Link to="/">Translations</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/">Clappe Hosting</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
              <li>
                <Link to="/">Upgrade</Link>
              </li>
              <li>
                <Link to="/">Education</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>About us</h4>
            <ul>
              <li>
                <Link to="/">Our Company</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Jobs</Link>
              </li>
              <br />
              <li>
                <Link to="/">Events</Link>
              </li>
              <li>
                <Link to="/">Blogs</Link>
              </li>
              <li>
                <Link to="/">Customers</Link>
              </li>
              <li>
                <Link to="/">Patners</Link>
              </li>
              <br />
              <li>
                <Link to="/">Legal</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Security</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                style={{ color: "white" }}
                aria-expanded="false"
              >
                English
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" href="/">
                    Spanish
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    French
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    Yoruba
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/">
                    Hausa
                  </Link>
                </li>
              </ul>
            </li>
            <hr />
            <p>
              Clappe is a suite of open source business apps that cover all your
              company needs: CRM, eCommerce, accounting, inventory, point of
              sale, project management, etc.
            </p>
            <p>
              Clappe's unique value proposition is to be at the same time very
              easy to use and fully integrated.
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
        <p className="text-center text-white p-2 text-muted">
          Made by &copy; Kophy Technologies - All rights reserved.
        </p>
      </div>
    </div>
  );
}
