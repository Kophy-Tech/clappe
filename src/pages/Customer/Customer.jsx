import React from 'react'
import '../Customer/CustomerCss.css'
import Navbar from '../Navbar/Navbar'

export default function Customer() {
    return (
        <> 
<Navbar />
        <div>
            <div className="container">
                <div className="mb-4">
                    {/* Customer title */}
                    <h3 className="h3 fw-bold text-secondary my-4 ">Customers</h3>
                    <h5 className="color fs-5 mt-4 mx-5">Search</h5>
                </div>
                {/* Input field for Customer */}
                <div className="container-margin">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-sm-3 mx-4">
                            <form action="/">
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
                            </form>
                        </div>
                        {/* Column 2 for Customer Input Field */}
                        <div className="col-sm-3 mx-4">
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
                    </div>
                </div>
            </div>
            {/* Search and Reset Button */}
            <div className="text-center mt-4 mb-5">
                <button className="mybtn">Search</button>
                <button className="mx-4 mybtn"> Reset</button>
            </div>
            {/* Add Customer button */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="d-flex flex-row justify-content-between">
                            <div className>
                                <a href='/newcustomer' className="mybtn">[+] Add Customer</a>
                            </div>
                            {/* Select input for Add Customer */}
                            <div className="form-group d-flex  justify-content-center align-items-center">
                                <span className="mx-3">Show:</span>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>50</option>
                                    <option value={3}>100</option>
                                </select>
                                <span className="mx-3">Records</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Customer Table */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="table-responsive-sm">
                            <table className="table">
                                <thead className="table-light">
                                    {/* Table Heads  */}
                                    <tr>
                                        <th>
                                            <select name="Company" className>
                                                <option value=" Company Name" selected>
                                                    Company Name
                                                </option>
                                            </select>
                                        </th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Invoice No.</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Email Address</th>
                                        <th scope="col">Taxable</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                {/* Table Body  */}
                                <tbody>
                                    {/* First Table Row */}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Amazon Legal
                                            </a>
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
                                    {/* Second Table Row */}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Applelaw
                                            </a>
                                        </td>
                                        <td>12/45, Park avenue</td>
                                        <td>105</td>
                                        <td>450.00</td>
                                        <td>irshad@gmail.com</td>
                                        <td>Yes</td>
                                        <td>Paid</td>
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
                                    {/* Third Table Row */}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                ABC Coperation
                                            </a>
                                        </td>
                                        <td>10th floor, smith street</td>
                                        <td>200</td>
                                        <td>400.00</td>
                                        <td>abdual@abcorp.com</td>
                                        <td>No</td>
                                        <td>Paid</td>
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
                                    {/* Fourth Table Row */}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Al Qatar Coperation
                                            </a>
                                        </td>
                                        <td>154, James street</td>
                                        <td>201</td>
                                        <td>800.00</td>
                                        <td>noor@alqtr.com</td>
                                        <td>No</td>
                                        <td>Emailed</td>
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
                                    {/* Fifth Table Row */}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Al Jehaaz Inc.
                                            </a>
                                        </td>
                                        <td>12/45, Park avenue</td>
                                        <td>202</td>
                                        <td>1,500.00</td>
                                        <td>ameena@alzeha.com</td>
                                        <td>No</td>
                                        <td>Paid</td>
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
                                    {/* Sixth Table Row */}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Bin Laden Corp.
                                            </a>
                                        </td>
                                        <td>10th floor, smith street</td>
                                        <td>300</td>
                                        <td>200.00</td>
                                        <td>naz@ladencorp.com</td>
                                        <td>Yes</td>
                                        <td>Overdue</td>
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
                                    {/* Seventh Table Row */}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Plamlegal Corp.
                                            </a>
                                        </td>
                                        <td>154, James street</td>
                                        <td>304</td>
                                        <td>605.00</td>
                                        <td>parvez@plegal.com</td>
                                        <td>Yes</td>
                                        <td>Emailed</td>
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
                                    {/* Eighth Table Row */}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Dubai Consultants
                                            </a>
                                        </td>
                                        <td>12/45, Park avenue</td>
                                        <td>305</td>
                                        <td>708.00</td>
                                        <td>yaseen@gmail.com</td>
                                        <td>Yes</td>
                                        <td>Emailed</td>
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
                                    {/* Ninth Table Row*/}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Dubailegals
                                            </a>
                                        </td>
                                        <td>10th floor, smith street</td>
                                        <td>306</td>
                                        <td>900.00</td>
                                        <td>bella@gmail.com</td>
                                        <td>No</td>
                                        <td>Paid</td>
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
                                    {/* Tenth Table Row*/}
                                    <tr>
                                        <td>
                                            <a href="/" className="text-decoration-underline">
                                                Kureshi Law firm
                                            </a>
                                        </td>
                                        <td>500 shop no, baker house</td>
                                        <td>400</td>
                                        <td>1,000.00</td>
                                        <td>kureshi@kureslaw.com</td>
                                        <td>Yes</td>
                                        <td>Paid</td>
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
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <div className="container">
                <nav className="Page navigation example">
                    <ul className="pagination pagination-md justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">4</a></li>
                        <li className="page-item"><a className="page-link" href="/">5</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}
