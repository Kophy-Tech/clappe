import React from "react";
import Navbar from "../Navbar/Navbar";
import "./DashBoardCss.css";

export default function DashBoard() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <div className="container">
            <h3 className="fw-bold my-4"> Revenue</h3>
            {/* Chart */}
            <div className="mb-5">Chart Here ...</div>
            {/*Invoice and Customer Container */}
            <div className="row">
              <div className="col-sm-6">
                <div className="alert alert-secondary">
                  {/* Invoice */}
                  <div>
                    {/* First Container invoice and button */}
                    <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                      <h4 className="h5 fw-bold">Invoice</h4>
                      <button className="mybtn">Add New Invoice</button>
                    </div>
                    {/* Second Container invoice and button */}
                    <div className="grid">
                      <h6 className="fw-bold">New</h6>
                      <h6 className="fw-bold">Unpaid</h6>
                      <h6 className="fw-bold">Paid</h6>
                      <h6 className="fw-bold">Emailed</h6>
                      <h6 className="fw-bold">Overdue</h6>
                      <a className="text-decoration-underline" href="/">
                        120
                      </a>
                      <a className="text-decoration-underline" href="/">
                        30
                      </a>
                      <a className="text-decoration-underline" href="/">
                        500
                      </a>
                      <a className="text-decoration-underline" href="/">
                        500
                      </a>
                      <a className="text-decoration-underline" href="/">
                        2
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                {/* Customer  */}
                <div className="alert alert-secondary alert-width">
                  <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                    <h4 className="h5 fw-bold">Customer</h4>
                    <a href="/customer" className="mybtn">
                      Add New Customer
                    </a>
                  </div>
                  {/* */}
                  <div className="grid">
                    <h6 className="fw-bold">New</h6>
                    <h6 className="fw-bold">Unpaid</h6>
                    <h6 className="fw-bold">Paid</h6>
                    <h6 className="fw-bold">Emailed</h6>
                    <h6 className="fw-bold">Overdue</h6>
                    <a className="text-decoration-underline" href="/">
                      10
                    </a>
                    <a className="text-decoration-underline" href="/">
                      150
                    </a>
                    <a className="text-decoration-underline" href="/">
                      140
                    </a>
                    <a className="text-decoration-underline" href="/">
                      10
                    </a>
                    <a className="text-decoration-underline" href="/">
                      2
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Estimate and Recepits container*/}
         
        </div>
        {/* Quote and Proforma Invoice */}
    
      </div>
    </>
  );
}
