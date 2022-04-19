import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Card, Image, Table } from "react-bootstrap";
// import "./Invoice.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  fetchAllProformaInvoices,
  deleteProformaInvoice,
} from "../../../redux/thunks";
import {
  Affect,
  ConfirmComp,
  FlatList,
  searchData,
} from "../../../redux/shared";

export default function Invoice() {
  const store = useSelector((state) => state.store);
  const [allInvoices, setAllInvoices] = React.useState([]);
  const [confirmP, setConfirmP] = React.useState({});
  const [effect, setEffect] = React.useState({});
  const navigate = useNavigate();
  React.useEffect(() => {
    fetchAllProformaInvoices();
  }, []);
  React.useEffect(() => {
    setAllInvoices(store.proformaInvoices);
    console.log("store.proformaInvoices", store.proformaInvoices);
  }, [store.proformaInvoices]);

  const handleDelete = async (id) => {
    try {
      setEffect({ load: true });
      const res = await deleteProformaInvoice(id);
      setEffect({ load: false, error: false, message: res.message });
    } catch (error) {
      setEffect({ load: false, error: true, message: error.message });
    }
  };

  return (
    <>
      <div className="pt-5">
        <Container>
          <Affect effect={effect} />
          <ConfirmComp {...confirmP} />
          <form
          // onSubmit={
          //   (e) => {
          //     e.target.reset();
          //   }
          // }
          >
            <Row>
              <Col sm={12} md={6}>
                <div className="mx-5">
                  {/* Customer Name Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3 ">
                    <label htmlFor="invoice">Customer Name:</label>
                    <input
                      type="text"
                      className="form-control w-50 h-2 "
                      //   onChange={(e) => {
                      //     const value = e.target.value;
                      //     setAllInvoices(
                      //       searchData(value, "business_name", store.proformaInvoices)
                      //     );
                      //   }}
                    />
                  </div>
                  {/* Amount Input Field  */}
                  <div className="form-group d-flex mb-3 justify-content-between">
                    <label htmlFor="invoice">Amount:</label>
                    <input
                      type="text"
                      className="form-control w-50"
                      //   onChange={(e) => {
                      //     const value = e.target.value;
                      //     setAllInvoices(
                      //       searchData(value, "amount", store.proformaInvoices)
                      //     );
                      //   }}
                    />
                  </div>
                  {/* Invoice Input Field  */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="invoice">Invoice No:</label>
                    <input
                      type="text"
                      className="form-control w-50"
                      //   onChange={(e) => {
                      //     const value = e.target.value;
                      //     setAllInvoices(
                      //       searchData(value, "invoice_number", store.proformaInvoices)
                      //     );
                      //   }}
                    />
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="mx-5">
                  {/* Invoice Address Input Field  */}
                  <div className="form-group d-flex mb-3 justify-content-between">
                    <label htmlFor="invoice">Item:</label>
                    <input
                      type="text"
                      className="form-control w-50"
                      //   onChange={(e) => {
                      //     const value = e.target.value;
                      //     setAllInvoices(
                      //       searchData(value, "address", store.proformaInvoices)
                      //     );
                      //   }}
                    />
                  </div>
                  {/* Invoice Status Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="status">Status</label>
                    <select
                      className="form-select w-50"
                      //   onChange={(e) => {
                      //     const value = e.target.value;
                      //     if (value === "All") {
                      //       setAllInvoices(store.proformaInvoices);
                      //     } else {
                      //       setAllInvoices(
                      //         searchData(value, "status", store.proformaInvoices)
                      //       );
                      //     }
                      //   }}
                    >
                      <option selected>All</option>
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Overdue">Overdue</option>
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
            <Container>
              <div className="my-4">
                <Row>
                  <Col sm={4} xs={4} md={6}>
                    <div className="text-center  mb-5 justify-content-center">
                      <button className="mybtn" type="reset">
                        {" "}
                        Search
                      </button>
                    </div>
                  </Col>
                  <Col sm={4} md={6} xs={4}>
                    <div className="text-center  mb-5">
                      <button className="mybtn" type="reset">
                        {" "}
                        Reset
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </form>

          <Row>
            <div className="d-flex flex-row justify-content-between">
              <div className>
                <Link to="/NewProformalInvoice" className="mybtn">
                  [+] Add New Proformal  invoice
                </Link>
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
                  <th>Customer Name</th>
                  <th>Invoice No</th>
                  <th>Amount</th>
                  <th>Email Address</th>
                  <th>Taxable</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <FlatList
                  items={allInvoices}
                  RenderItem={({ item }) => {
                    console.log("item", item);
                    return (
                      <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.invoice_number}</td>
                        <td>{item.grand_total}</td>

                        <td>{item.email}</td>
                        <td>{item.taxable ? "Yes" : "No"}</td>
                        <td>{item.status}</td>
                        <td>
                          <select
                            className="form-select"
                            onChange={(e) => {
                              const value = e.target.value;
                              console.log("value", value);
                              if (value === "Edit Invoice") {
                                navigate(`/ProformalInvoice/${item.id}`);
                              } else if (value === "Delete Invoice") {
                                setConfirmP((s) => ({
                                  ...s,
                                  show: true,
                                  title: "Delete Invoice?",
                                  message:
                                    "Are you sure you want to delete this invoice? This action cannot be undone.",
                                  handleYes: () => handleDelete(item.id),
                                  func: setConfirmP,
                                }));
                                console.log("Delete Invoice");
                              }
                            }}
                          >
                            <option value="Action" selected disabled>
                              Action
                            </option>
                            <option value="Edit Invoice">Edit Invoice</option>
                            <option value="Delete Invoice">
                              Delete Invoice
                            </option>
                            <option value="Invoice">Invoice</option>
                          </select>
                        </td>
                      </tr>
                    );
                  }}
                />

                {/* <td>
                    <Link to="/newcustomer">Amazon Legal</Link>
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
                      <option value="Edit Invoice">Edit Invoice</option>
                      <option value="Delete Invoice">Delete Invoice</option>
                      <option value="Invoice">Invoice</option>
                    </select>
                  </td> */}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  );
}
