import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Card, Image, Table } from "react-bootstrap";
import "./CustomerCss.css";
import { Link,  } from "react-router-dom";

export default function Customer() {
  return (
    <>
      <Navbar />

      <div className="my-5">
        <Container>
          <form action="/">
            <Row>
              <Col sm={12} md={6}>
                <div className="mx-5">
                  {/* Customer Name Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3 ">
                    <label htmlFor="customer">Customer Name:</label>
                    <input type="text" className="form-control w-50 h-2 " />
                  </div>
                  {/* Amount Input Field  */}
                  <div className="form-group d-flex mb-3 justify-content-between">
                    <label htmlFor="customer">Amount:</label>
                    <input type="text" className="form-control w-50" />
                  </div>
                  {/* Invoice Input Field  */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="customer">Invoice No:</label>
                    <input type="text" className="form-control w-50" />
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="mx-5">
                  {/* Customer Address Input Field  */}
                  <div className="form-group d-flex mb-3 justify-content-between">
                    <label htmlFor="customer">Address:</label>
                    <input type="text" className="form-control w-50" />
                  </div>
                  {/* Customer Status Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="status">Status</label>
                    <select className="form-select w-50">
                      <option selected>All</option>
                      <option value={1}>Paid</option>
                      <option value={2}>Unpaid</option>
                      <option value={3}>Overdue</option>
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
          </form>

          <Container>
            <Row>
              <div className="text-center  mb-5">
                <button className="mybtn">Search</button>
                <button className="mx-4 mybtn"> Reset</button>
              </div>
            </Row>
          </Container>
          <Row>
            <div className="d-flex flex-row justify-content-between">
              <div className>
                <a href="/newcustomer" className="mybtn">
                  [+] Add Customer
                </a>
              </div>
              {/* Select input for Add Customer */}
              <div className="form-group d-flex  justify-content-center align-items-center">
                <span className="mx-3">Show:</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>10</option>
                  <option value={1}>20</option>
                  <option value={2}>50</option>
                  <option value={3}>100</option>
                </select>
                <span className="mx-3">Records</span>
              </div>
            </div>
          </Row>

          <Row>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Address</th>
                  <th>Invoice No</th>
                  <th>Amount</th>
                  <th>Email Address</th>
                  <th>Taxable</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <Link to='/newcustomer'>
             Amazon Legal
                
                </Link>
                      
                  </td>
                  <td>154, James street</td>
                  <td>100</td>
                  <td>500.00</td>
                  <td>abdul45@gmail.com</td>
                  <td>No</td>
                  <td>New</td>
                  <td>
                    <select className="form-select" name id>
                      <option value="Action" selected disabled>
                        Action
                      </option>
                      <option value="Edit Customer">Edit Customer</option>
                      <option value="Delete Customer">Delete Customer</option>
                      <option value="Invoice">Invoice</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  );
}
