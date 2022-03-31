import React from "react";
import Navbar from "../Navbar/Navbar";
import "./NewCustomerCss.css";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowLeft, FiArrowRightCircle, FiCreditCard, FiPenTool, FiUser, FiDollarSign, FiSettings, FiActivity, FiList } from "react-icons/fi";


import { Link, useParams, useNavigate } from "react-router-dom";
import { Affect, handleForm } from "../../../redux/shared";
import {
  addNewCustomer,
  editCustomer,
  searchStore,
  searchStoreHooks,
} from "../../../redux/thunks";
import { useSelector } from "react-redux";

export default function NewCustomer(props) {
  const navigate = useNavigate();

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
      <form onSubmit={handleSubmit}>
        <Affect effect={effect} />

        <div className="container bg-light pt-5">
          {/* Add New Customer */}
          <div className="bg-light p-2 border-bottom mb-4">
            <h3 className=" fs-3 "> < FiArrowLeft onClick={() => {
              navigate('/customer')
            }} /> Add New Customer</h3>
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
          <div className="row mb-3">
            <div className="col-sm-12">
              <div className="border h-auto">
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Customer Information
                </h5>
                <div className="border mx-4 mb-3 pb-5">
                  Payment due within 15 days
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Save, Save & Continue, Cancel Buttons  */}
        <div className="d-flex flex-row justify-content-center -2">
          <button className="mybtn">Save</button>
          {/* <button className="mybtn">Save &amp; Continue</button> */}
          <Link to="/customer" className="mybtn">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
}
