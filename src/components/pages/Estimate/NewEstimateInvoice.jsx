import React from "react";
import Navbar from "../Navbar/Navbar";
import "./NewEstimateInvoice.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaList, FaRegHeart, FaArrowLeft } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowLeft, FiArrowRightCircle, FiCreditCard, FiPenTool, FiUser, FiDollarSign, FiSettings, FiActivity, FiList } from "react-icons/fi";
import { Container, Row, Col, Card, Image, Table } from "react-bootstrap";
import CenteredModal from "../Modal";
import Button from 'react-bootstrap/Button'
import { Affect, handleForm } from "../../../redux/shared";
import {
  addNewCustomer,
  editCustomer,
  searchStore,
  searchStoreHooks,
} from "../../../redux/thunks";
import { useSelector } from "react-redux";

export default function NewEstimateInvoice(props) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  const [effect, setEffect] = React.useState({});
  const [customer, setCustomer] = React.useState({});
  const { id } = useParams();
  const store = useSelector((state) => state.store);

  const handleSubmit = async (e) => {
    const data = handleForm(e);
    data.logo_path =
      "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg";
    console.log("data", data);
    try {
      setEffect({ load: true });
      let res;
      if (id) {
        res = await editCustomer(data, id);
      } else {
        res = await addNewCustomer(data);
        e.target.reset();
      }

      setEffect({ load: false, error: false, message: res.message });
    } catch (error) {
      setEffect({ load: false, error: true, message: error.message });
    }
  };

  React.useEffect(() => {
    const foundCustomer = searchStoreHooks(store.customers, id, "id");
    setCustomer(foundCustomer || {});
    // console.log("foundCustomer", foundCustomer);
  }, [store]);
  return (
    <>
      <CenteredModal show={modalShow}
        onHide={() => setModalShow(false)} />
      <form onSubmit={handleSubmit}>
        <Affect effect={effect} />

        <div className="container bg-light pt-5">
          {/* Add New Customer */}
          <div className="bg-light p-2 border-bottom mb-4">
            <h3 className=" fs-3 fw-bold"> < FiArrowLeft onClick={() => {
              navigate('/Estimate')
            }} /> Add New Estimate</h3>
          </div>
          <div className="row mb-3">
            {/* Customer Information Box */}
            <div className="col-md-4 gx-3 gx-sm-4">
              <div className="border h-100">
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Customer Information
                </h5>
                {/* Customer Information Form */}
                {/* First Name Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    placeholder="First Name"
                    defaultValue={customer.first_name}
                  />
                </div>
                {/* Last Name Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Last Name"
                    defaultValue={customer.last_name}
                  />
                </div>
                {/* Business Name Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    placeholder="Business Name"
                    name="business_name"
                    className="form-control"
                    defaultValue={customer.business_name}
                  />
                </div>
                {/* Address Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Address"
                    defaultValue={customer.address}
                  />
                </div>
                {/* Email Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    defaultValue={customer.email}
                  />
                </div>
                {/* Phone Number  Input */}
                <div className="d-flex mb-2">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone_number"
                      defaultValue={customer.phone_number}
                    />
                  </div>
                  <div className="mx-3">
                    <select className="form-select">
                      <option value="mobile" selected>
                        Mobile
                      </option>
                      <option value="work">Work</option>
                    </select>
                  </div>
                </div>
                <input
                  type="checkbox"
                  name="taxable"
                  defaultChecked={customer.taxable}
                />{" "}
                Taxable?
                {/* Invoice Preferenc */}
                <div className="form-group mt-2 ">
                  <label htmlFor="invoice">Invoice Preference</label>
                  <select
                    className="form-select"
                    name="invoice_pref"
                    defaultValue={customer.invoice_pref}
                  >
                    <option value="Email" selected>
                      Email PDF
                    </option>
                    <option value="physical">Physical</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Business Details */}
            <div className="col-md-4">
              <div className="border h-100">
                <h4 className="h4 text-center bg-color py-3 text-white fw-bold fs-5">
                  Business Details
                </h4>
                {/* Inner Box */}
                <div className="border w-50 justify-content-center text-center ms-5 p-2">
                  <div>Select Logo</div>
                  <div className="border p-4"></div>
                  <div>Logo Gallery</div>
                </div>
                <div className="px-3">

                  <div className="d-flex align-items-center">
                    <div className="form-group">
                      <label htmlFor="theme">Select Theme</label>

                      <input type="text" className="form-control w-100" />
                    </div>
                    <div>
                      <button className="mybtn mx-3">Browser Gallery</button>
                    </div>

                  </div>
                  <div className="form-group">

                    <input type="text" placeholder="Estimate #" className="form-control w-100" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="theme">Estimate Date</label>

                    <input type="date" placeholder="Invoice #" className="form-control w-100" />
                  </div>
                  <div className="form-group mt-2">


                    <input type="text" placeholder="P.O #" className="form-control w-100" />
                  </div>
            



                </div>
              </div>
            </div>
            {/* Shipping & Billing */}
            <div className="col-md-4">
              <div className="border h-100">
                <h4 className="h4 text-center bg-color py-3 text-white fw-bold fs-5">
                  Shipping &amp; Billing
                </h4>
                {/* Shipping & Billing Form  */}
                <div className="p-2">
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shipping to"
                      name="ship_to"
                      defaultValue={customer.ship_to}
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shipping address"
                      name="shipping_address"
                      defaultValue={customer.shipping_address}
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bill to"
                      name="billing_address"
                      defaultValue={customer.billing_address}
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Billing address"
                      name="billing_address"
                      defaultValue={customer.billing_address}
                    />
                  </div>
                  <textarea
                    className="form-control"
                    rows={3}
                    name="notes"
                    defaultValue={customer.notes}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="container">
          <div className="row gx-0 p-2 mb-3">
            <div className="col-12 col-md-9">
              <div className="border" style={{ height: '55vh' }}>
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Item Information
                </h5>
                <div className="row">
                  <div className="col-12 col-md-3">
                    <div className="mb-3">
                      <input type="email" className="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-2">
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="QTY" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                  </div>
                  <div className="col-12 col-md-2">
                    <div className="mb-3">
                      <select id="Select" className="form-select">
                        <option>All</option>
                        <option>Unpaid</option>
                        <option>Overdue</option>
                        <option>Emailed</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-2">
                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Taxable?</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <Button className="btn btn-sm btn-primary" onClick={() => setModalShow(true)}>[+]Add new item</Button>

                  </div>
                  <div className="container">
                    <Table striped bordered hover size="sm" className="m-1">
                      <thead>
                        <tr>
                          <th>Item Name</th>
                          <th>Qty</th>
                          <th>Amount</th>
                          <th>Total</th>
                          <th>Tax</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> Fabrics  shield
                          </td>
                          <td>4</td>
                          <td>$100</td>
                          <td>$500.00</td>
                          <td>0.00</td>
                          <td>No</td>
                        </tr>
                        <tr>
                          <td> Tope shield
                          </td>
                          <td>4</td>
                          <td>$100</td>
                          <td>$500.00</td>
                          <td>0.00</td>
                          <td>No</td>
                        </tr>

                      </tbody>
                    </Table>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border" style={{ height: '55vh' }}>
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Estimate Total
                </h5>
                <div className="row p-2">
                  <div className="col-md-6">
                    <p>Item Total</p>
                    <p>Tax</p>
                    <p>Additional taxes</p>
                    <p className="mt-2">Grand Total  <span> <a href="#">CAD</a> </span> </p>
                  </div>
                  <div className="col-md-6">
                    <p>$10000.00</p>
                    <input type="email" className="form-control mb-2" placeholder="" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <input type="email" className="form-control mb-2" placeholder="" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <p className="fw-bold">$10000.00</p>
                  </div>
                </div>

              </div>



            </div>
          </div>
        </div>



        <div className="container">
          <div className="row gx-0 p-2 mb-3">
            <div className="col-12 col-md-9">
              <div className="border" style={{ height: '30vh' }}>
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Terms & condition
                </h5>
                <div className="form-floating m-2">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                  <label htmlFor="floatingTextarea2">Pay due within 15 days</label>
                </div>

              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border" style={{ height: '30vh' }}>
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Sign Estimate
                </h5>
                <div className="d-flex justify-content-center">
                  <a href="#" className="btn btn-lg btn-primary">Add signature</a>

                </div>

              </div>



            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-0 p-2">
            <div className="border" style={{ height: '30vh' }}>
              <div className="col-12 col-md-8">
                <div className="d-flex justify-content-around mt-5">
                  <a href="" className="btn btn-primary btn-sm">Save</a>
                  <a href="" className="btn btn-primary btn-sm">Save & Email</a>
                  <a href="" className="btn btn-primary btn-sm">Download</a>
                  <a href="" className="btn btn-primary btn-sm">Cancel</a>
                  <a href="" className="btn btn-primary btn-sm">Recurring</a>
                </div>
              </div>
              <div className="col-12 col-md-4"></div>
            </div>
          </div>
        </div>
        {/* Save, Save & Continue, Cancel Buttons  */}
        {/* <div className="d-flex flex-row justify-content-center -2">
          <button className="mybtn">Save</button>
          <Link to="/customer" className="mybtn">
            Cancel
          </Link>
        </div> */}
      </form>
    </>
  );
}
