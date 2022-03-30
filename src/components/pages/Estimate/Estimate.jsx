import React from 'react'
import {
    Affect,
    ConfirmComp,
    FlatList,
    searchData,
} from "../../../redux/shared";
import { Container, Row, Col, Card, Image, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export default function Estimate() {
    return (
        <>
            <div className="container">
                <h3 className='fw-bold'>Estimate</h3>
                <p className='my-3 fw-bold'>Search</p>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="row g-3 mb-2 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label">Customer Name:</label>
                            </div>
                            <div className="col-auto">
                                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 mb-2 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label">Amount:</label>
                            </div>
                            <div className="col-auto">
                                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 mb-2 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label">Estimate No:</label>
                            </div>
                            <div className="col-auto">
                                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-5 ms-3">
                        <div className="row g-3 mb-2 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label">Items:</label>
                            </div>
                            <div className="col-auto">
                                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                            </div>
                        </div>
                        <div className="row g-3 mb-2 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="inputPassword6" className="col-form-label">Status:</label>
                            </div>
                            <div className="col-auto">
                                <select id="Select" class="form-select">
                                    <option>All</option>
                                    <option>Unpaid</option>
                                    <option>Overdue</option>
                                    <option>Emailed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <a href="#" className="btn btn-sm btn-primary me-2">Search</a>
                <a href="#" className="btn btn-sm btn-primary">Select</a>
            </div>
            <div className="container d-flex justify-content-start mt-3">
                <Link to="/NewEstimateinvoice" className="btn btn-primary">
                    [+] Add new Estimate
                </Link>
            </div>
            <div className="container mt-5">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Estimate No.</th>
                            <th>Amount</th>
                            <th>Email Address</th>
                            <th>Taxable</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            <Link to="/newcustomer">Amazon Legal</Link>
                        </td>
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
                    </tbody>
                </Table>
            </div>
        </>
    )
}
