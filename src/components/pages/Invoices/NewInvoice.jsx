import React from "react";
import "./NewInvoice.css";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { FiArrowLeft } from "react-icons/fi";
import { Table } from "react-bootstrap";
// import { Button } from 'bootstrap';
import {
  Affect,
  FlatList,
  handleForm,
  searchData,
} from "../../../redux/shared";
import Button from "react-bootstrap/Button";
import {
  FiHome,
  FiEdit,
  FiDelete,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiCreditCard,
  FiPenTool,
  FiUser,
  FiDollarSign,
  FiSettings,
  FiActivity,
  FiList,
} from "react-icons/fi";

import {
  addNewItem,
  createInvoice,
  editInvoice,
  searchStoreHooks,
} from "../../../redux/thunks";
import { useSelector } from "react-redux";
import CenteredModal from "../Common/Modal";
import CurrencyModal from "../Common/CurrencyModal";
import SignatureModal from "../Common/SignatureModal";
import BrowseGallery from "../Common/BrowseGallary";

export default function NewInvoice(props) {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = React.useState(false);
  const [cmodalShow, setCModalShow] = React.useState(false);
  const [itemList, setItemList] = React.useState(true);
  const [sigModalShow, setSigModalShow] = React.useState(false);
  const [galleryModalShow, setGalleryModalShow] = React.useState(false);



  const [effect, setEffect] = React.useState({});
  const [invoice, setinvoice] = React.useState({});
  const [items, setItems] = React.useState([]);
  const { id } = useParams();
  const store = useSelector((state) => state.store);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [dueDate, setDueDate] = React.useState();
  const [itemTotal, setItemTotal] = React.useState(0);
  const [state, setState] = React.useState({
    discountType: "percentage",
    discount_amount: 0,
  });

  const handleDropDown = (e) => {
    const itemValue = e.target.value;
    setItemList(false);
    if (itemValue.length === 0) {
      setItemList(true);
    }
  };

  const handleSubmit = async (e, send_email, download) => {
    const data = handleForm(e);
    data.logo_path =
      "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg";
    data.item_total = itemTotal;
    data.grand_total = state.grand_total;
    data.sub_total = state.sub_total;
    data.send_email = send_email;
    data.download = download;
    data.item_list = selectedItems.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
      };
    });
    console.log("data", data);
    try {
      setEffect({ load: true });
      let res;
      if (id) {
        res = await editInvoice(data, id);
      } else {
        res = await createInvoice(data);
        console.log(res);
        e.target.reset();
      }

      setEffect({ load: false, error: false, message: res.message });
    } catch (error) {
      setEffect({ load: false, error: true, message: error.message });
    }
  };

  React.useEffect(() => {
    const foundinvoice = searchStoreHooks(store.invoices, id, "id") || {};
    setinvoice(foundinvoice);

    console.log("foundinvoice", foundinvoice);
    setDueDate(foundinvoice.due_date);
    setSelectedItems((s) => {
      if (foundinvoice.item_list) {
        return foundinvoice.item_list.map((item) => {
          const foundItem = searchStoreHooks(store.items, item.id, "id") || {};
          
          return {
            ...foundItem,
            quantity: item.quantity,
          };
        });
      }
      return s;
    });
  }, [store.invoices, store.items, id]);

  const handleAddNewItem = async (e) => {
    try {
      const theItems = handleForm(e);
      setEffect({ load: true });
      const res = await addNewItem(theItems);
      setEffect({ load: false, error: false, message: res.message });
      e.target.reset();
    } catch (error) {
      setEffect({ load: false, error: true, message: error.message });
    }
  };

  const handleRemoveItem = (id) => {
    const newItems = selectedItems.filter((item) => item.id !== id);
    setSelectedItems(newItems);
  };
  const handleItemSearch = (e) => {
    const itemValue = e.target.value;
    const search = searchData(itemValue, "name", store.items) || [];
    return search;
  };

  const handleItemQuantityChange = (e, id) => {
    const { value } = e.target;
    const newItems = selectedItems.map((item) => {
      //deep copy item
      console.log(value, id);
      const newItem = { ...item };
      if (newItem.id === id) {
        newItem.quantity = value;
      }
      return newItem;
    });
    setSelectedItems(newItems);
  };

  React.useEffect(() => {
    setItemTotal(
      selectedItems.reduce((acc, item) => {
        return acc + item.sales_price * (item.quantity || 1);
      }, 0)
    );
  }, [selectedItems]);

  React.useEffect(() => {
    //calculate sub total

    if (itemTotal <= 0) {
      setState({
        ...state,
        discount_amount: 0,
        discountType: "percentage",
        sub_total: 0,
        grand_total: 0,
      });
      return;
    }
    const sub_total =
      Number(itemTotal) +
      Number(state.tax || 0) +
      Number(state.add_charges || 0);
    setState((s) => {
      console.log(
        "s",
        s.discountType,
        sub_total - (Number(s.discount_amount) / 100) * sub_total,
        s.discount_amount
      );
      if (s.discountType === "percentage") {
        return {
          ...s,
          grand_total:
            sub_total - (Number(s.discount_amount) / 100) * sub_total,
          sub_total,
        };
      } else {
        return {
          ...s,
          grand_total: sub_total - Number(s.discount_amount),
          sub_total,
        };
      }
    });
  }, [
    state.discountType,
    state.tax,
    state.add_charges,
    state.discount_amount,
    itemTotal,
  ]);

  const RenderItem = ({ item, key }) => {
    console.log("item", item);
    return (
      <tr key={item.id}>
        <td> {item.name}</td>
        <td>
          <input
            type="number"
            className="form-control"
            placeholder="QTY"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue={item.quantity}
            // name="quantity"
            min="1"
            onChange={(e) => handleItemQuantityChange(e, item.id)}
          />
        </td>
        <td>${item.sales_price}</td>
        <td>${item.quantity * item.sales_price || 0}</td>
        <td>{item.sales_tax}</td>
        <div className="d-flex ">
          {/* <div className="me-4">
              {" "}
              <FiEdit />{" "}
            </div> */}
          <div>
            {" "}
            <FiDelete onClick={(index) => handleRemoveItem(item.id)} />{" "}
          </div>
        </div>
      </tr>
    );
  };

  return (
    <>
      <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      <CurrencyModal show={cmodalShow} onHide={() => setCModalShow(false)} />
      <SignatureModal show={sigModalShow} onHide={() => setSigModalShow(false)}/>
      <BrowseGallery show={galleryModalShow} onHide={() => setGalleryModalShow(false)} />
      
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New items
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddNewItem}>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Item name</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                name="name"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Qty</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Amount </label>
              <input
                type="number"
                className="form-control"
                name="cost_price"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Tax </label>
              <input
                type="number"
                className="form-control"
                aria-describedby="emailHelp"
                name="sales_tax"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Sales Price </label>
              <input
                type="text"
                name="sales_price"
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="exampleInputEmail1">Description </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                name="description"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
      </Modal>
      <form onSubmit={handleSubmit}>
        <Affect effect={effect} />

        <div className="container bg-light pt-5">
          {/* Add New invoice */}
          <div className="bg-light p-2 border-bottom mb-4">
            <h3 className=" fs-3">
              {" "}
              <FiArrowLeft
                onClick={() => {
                  navigate("/invoice");
                }}
              />{" "}
              Add New Invoice
            </h3>
          </div>
          <div className="row mb-3">
            {/* invoice Information Box */}
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
                    defaultValue={invoice.first_name}
                  />
                </div>
                {/* Last Name Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    placeholder="Last Name"
                    defaultValue={invoice.last_name}
                  />
                </div>
                {/* Business Name Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    placeholder="Business Name"
                    name="business_name"
                    className="form-control"
                    defaultValue={invoice.business_name}
                  />
                </div>
                {/* Address Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Address"
                    defaultValue={invoice.address}
                  />
                </div>
                {/* Email Input */}
                <div className="form-group my-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    defaultValue={invoice.email}
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
                      defaultValue={invoice.phone_number}
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
                  defaultChecked={invoice.taxable}
                />{" "}
                Taxable?
                {/* Invoice Preferenc */}
                <div className="form-group mt-2 ">
                  <label htmlFor="invoice">Invoice Preference</label>
                  <select
                    className="form-select"
                    name="invoice_pref"
                    defaultValue={invoice.invoice_pref}
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
                    <div className="form-group my-2">
                      <label htmlFor="theme">Select Theme</label>

                      <input type="text" className="form-control w-100" />
                    </div>
                    <div>
                      <div style={{cursor:'pointer'}}  onClick={() => setGalleryModalShow(true)} className=" rounded mx-2 bg-primary text-white">Browser Gallery</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Invoice #"
                      className="form-control w-100"
                      name="invoice_number"
                      defaultValue={invoice.invoice_number}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="theme">Invoice Date</label>

                    <input
                      type="date"
                      placeholder="Invoice #"
                      className="form-control w-100"
                      name="invoice_date"
                      defaultValue={invoice.date}
                      onChange={(v) => {
                        //let the due date be one month from the invoice date
                        let due_date = new Date(v.target.value);
                        due_date.setMonth(due_date.getMonth() + 1);
                        //convrt to string YYYY-MM-DD
                        due_date = due_date.toISOString().split("T")[0];
                        setDueDate(due_date);
                      }}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <input
                      type="text"
                      placeholder="P.O #"
                      className="form-control w-100"
                      name="po_number"
                      defaultValue={invoice.po_number}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="theme">Due Date</label>

                    <input
                      type="date"
                      disabled
                      placeholder="Invoice #"
                      className="form-control w-100"
                      name="due_date"
                      value={dueDate}
                      defaultValue={invoice.due_date}
                    />
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
                      defaultValue={invoice.ship_to}
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Shipping address"
                      name="shipping_address"
                      defaultValue={invoice.shipping_address}
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bill to"
                      name="billing_address"
                      defaultValue={invoice.billing_address}
                    />
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Billing address"
                      name="bill_to"
                      defaultValue={invoice.billing_address}
                    />
                  </div>
                  <textarea
                    className="form-control"
                    rows={3}
                    name="notes"
                    defaultValue={invoice.notes}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <section className="container">
          <div className="row gx-0 p-2 mb-3">
            <div className="col-12 col-md-9">
              <div className="border" style={{ height: "55vh" }}>
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Item Information
                </h5>
                <div id="info-box" className="row">
                  <div className="col-12 col-md-3">
                    <div className="mb-3 d-flex flex-column px-3 py-2">
                      <input
                        // type="text"
                        className="form-control rounded"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onFocus={() => setItemList(true)}
                        // onBlur={() => setItemList(false)}
                        autoComplete="off"
                        onInput={(e) => {
                          const searched = handleItemSearch(e) || [];
                          console.log(searched, e.target.value, itemList);
                          setItems(searched);
                        }}
                      />
                      <div
                        className={`${
                          !itemList ? "d-none" : "d-flex"
                        }  card search-box`}
                      >
                        <ul onBlur={() => setItemList(false)}>
                          {items.map((item) => (
                            <li
                              key={item.id}
                              onClick={() => {
                                // alert(item.id);

                                setSelectedItems((s) => {
                                  //deep copy item
                                  let newItem = { ...item };
                                  newItem.quantity = 1;
                                  if (s.length === 0) {
                                    return [...s, newItem];
                                  }
                                  let toAdd = s.find((i) => i.id == item.id);
                                  if (toAdd) {
                                    return s;
                                  } else {
                                    return [...s, newItem];
                                  }
                                });
                                // setSelectedItems([...selectedItems, item]);
                                setItemList(false);

                                // setItems([]);
                              }}
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-2">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="QTY"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
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
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Taxable?
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <Button
                      className="btn btn-sm btn-primary"
                      onClick={() => setModalShow(true)}
                    >
                      [+]Add new item
                    </Button>
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
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {selectedItems.map()} */}

                        <FlatList
                          items={selectedItems}
                          RenderItem={RenderItem}
                        />
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border" style={{ height: "55vh" }}>
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Estimate Total
                </h5>
                <div className="row p-2">
                  <div className="col-md-6">
                    <p>Item Total</p>
                    <p>Tax</p>
                    <p>Additional taxes</p>

                    <p>Sub Total</p>

                    <select
                      className="form-select"
                      name="discount_type"
                      defaultValue={invoice.invoice_pref}
                      onChange={(e) => {
                        setState((s) => ({
                          ...s,
                          discountType: e.target.value,
                        }));
                      }}
                    >
                      <option value="percentage" selected>
                        DIscount Percentage
                      </option>
                      <option value="amount">Discount Amount</option>
                    </select>
                    <p className="mt-2">
                      Grand Total{" "}
                      {/* <span>
                        <div className="me-4">
                          CAD <FiEdit onClick={() => setCModalShow(true)} />{" "}
                        </div>
                      </span>{" "} */}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>${itemTotal}</p>
                    <input
                      type="number"
                      className="form-control mb-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) =>
                        setState((s) => ({ ...s, tax: e.target.value }))
                      }
                      name="tax"
                      defaultValue={invoice.tax}
                    />
                    <input
                      type="number"
                      className="form-control mb-2"
                      placeholder=""
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="add_charges"
                      defaultValue={invoice.add_charges}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          add_charges: e.target.value,
                        }))
                      }
                    />
                    {/* <input
                      type="number"
                      className="form-control mb-2"
                      name="discount_amount"
                      defaultValue={invoice.discount_amount}
                    /> */}
                    <p className="fw-bold">${state.sub_total}</p>
                    <input
                      type="number"
                      className="form-control mb-2"
                      name="discount_amount"
                      defaultValue={invoice.discount_amount}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          discount_amount: e.target.value,
                        }))
                      }
                    />
                    <p className="fw-bold">${state.grand_total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row gx-0 p-2 mb-3">
            <div className="col-12 col-md-9">
              <div className="border" style={{ height: "30vh" }}>
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Terms & condition
                </h5>
                <div className="form-floating m-2">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    defaultValue={invoice.terms}
                    name="terms"
                  />
                  <label htmlFor="floatingTextarea2">
                    Pay due within 15 days
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border" style={{ height: "30vh" }}>
                <h5 className="fs-5 text-center bg-color py-3 text-white fw-bold">
                  Sign Estimate
                </h5>
                <div className="d-flex justify-content-center">
                  <Button   onClick={() => setSigModalShow(true)} className="btn btn-lg btn-primary">
                    Add signature
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gx-0 p-2">
            <div className="border" style={{ height: "30vh" }}>
              <div className="col-12 col-md-8">
                <div className="d-flex justify-content-around mt-5">
                  <button
                    className="btn btn-primary btn-sm"
                    onSubmit={handleSubmit}
                  >
                    Save
                  </button>

                  <button
                    className="btn btn-primary btn-sm"
                    onSubmit={(e) => handleSubmit(e, true)}
                  >
                    Save & Email{" "}
                  </button>
                  <button onSubmit={(e) => handleSubmit(e, false, true)} className="btn btn-primary btn-sm">
                    Download
                  </button>
                  {/* <a href="" className="btn btn-primary btn-sm">
                    Cancel
                  </a>
                  <a href="" className="btn btn-primary btn-sm">
                    Recurring
                  </a> */}
                </div>
              </div>
              <div className="col-12 col-md-4"></div>
            </div>
          </div>
        </div>
        {/* Save, Save & Continue, Cancel Buttons  */}
        {/* <div className="d-flex flex-row justify-content-center -2">
          <button className="mybtn">Save</button>
          <Link to="/invoice" className="mybtn">
            Cancel
          </Link>
        </div> */}
      </form>
    </>
  );
}
