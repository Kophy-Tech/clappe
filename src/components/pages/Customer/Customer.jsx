import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Card, Image, Table } from "react-bootstrap";
import "./CustomerCss.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteCustomer, fetchAllCustomers } from "../../../redux/thunks";
import {
  Affect,
  ConfirmComp,
  FlatList,
  searchData,
} from "../../../redux/shared";

export default function Customer() {
  const store = useSelector((state) => state.store);
  const [allCustomers, setAllCustomers] = React.useState([]);
  const [confirmP, setConfirmP] = React.useState({});
  const [effect, setEffect] = React.useState({});
  const navigate = useNavigate();
  React.useEffect(() => {
    fetchAllCustomers();
  }, []);
  React.useEffect(() => {
    setAllCustomers(store.customers);
    console.log("store.customers", store.customers);
  }, [store.customers]);

  const handleDelete = async (id) => {
    try {
      setEffect({ load: true });
      const res = await deleteCustomer(id);
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
                    <label htmlFor="customer">Customer Name:</label>
                    <input
                      type="text"
                      className="form-control w-50 h-2 "
                      onChange={(e) => {
                        const value = e.target.value;
                        setAllCustomers(
                          searchData(value, "business_name", store.customers)
                        );
                      }}
                    />
                  </div>
                  {/* Amount Input Field  */}
                  <div className="form-group d-flex mb-3 justify-content-between">
                    <label htmlFor="customer">Amount:</label>
                    <input
                      type="text"
                      className="form-control w-50"
                      onChange={(e) => {
                        const value = e.target.value;
                        setAllCustomers(
                          searchData(value, "amount", store.customers)
                        );
                      }}
                    />
                  </div>
                  {/* Invoice Input Field  */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="customer">Invoice No:</label>
                    <input
                      type="text"
                      className="form-control w-50"
                      onChange={(e) => {
                        const value = e.target.value;
                        setAllCustomers(
                          searchData(value, "invoice_number", store.customers)
                        );
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="mx-5">
                  {/* Customer Address Input Field  */}
                  <div className="form-group d-flex mb-3 justify-content-between">
                    <label htmlFor="customer">Address:</label>
                    <input
                      type="text"
                      className="form-control w-50"
                      onChange={(e) => {
                        const value = e.target.value;
                        setAllCustomers(
                          searchData(value, "address", store.customers)
                        );
                      }}
                    />
                  </div>
                  {/* Customer Status Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="status">Status</label>
                    <select
                      className="form-select w-50"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === "All") {
                          setAllCustomers(store.customers);
                        } else {
                          setAllCustomers(
                            searchData(value, "status", store.customers)
                          );
                        }
                      }}
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
<button className="mybtn" type="reset"
onClick={
  () => {
    setAllCustomers(store.customers);
  }
}
> Search</button>
</div>
</Col>
<Col  sm={4} md={6} xs={4}>
<div className="text-center  mb-5">
<button className="mybtn" type="reset" 
onClick={
  () => {
    setAllCustomers(store.customers);
  }
}

> Reset</button>
</div>
</Col>

</Row>
</div>



           
          </Container>
          </form>

          
          <Row>
            <div className="d-flex flex-row justify-content-between">
              
              <div className='mx-auto'>
                <Link to="/newcustomer" className="mybtn">
                  [+] Add Customer
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
                <FlatList
                  items={allCustomers}
                  RenderItem={({ item }) => {
                    console.log("item", item);
                    return (
                      <tr key={item.id}>
                        <td>{item.business_name}</td>
                        <td>{item.address}</td>
                        <td>{item.invoice_number}</td>
                        <td>{item.amount}</td>
                        <td>{item.email}</td>
                        <td>{item.taxable ? "Yes" : "No"}</td>
                        <td>{item.status}</td>
                        <td>
                          <select
                            className="form-select"
                            onChange={(e) => {
                              const value = e.target.value;
                              // console.log("value", value);
                              if (value === "Edit Customer") {
                                navigate(`/customer/${item.id}`);
                              } else if (value === "Delete Customer") {
                                setConfirmP((s) => ({
                                  ...s,
                                  show: true,
                                  title: "Delete Customer?",
                                  message:
                                    "Are you sure you want to delete this customer? This action cannot be undone.",
                                  handleYes: () => handleDelete(item.id),
                                  func: setConfirmP,
                                }));
                                // console.log("Delete Customer");
                              }
                            }}
                          >
                            <option value="Action" selected disabled>
                              Action
                            </option>
                            <option value="Edit Customer">Edit Customer</option>
                            <option value="Delete Customer">
                              Delete Customer
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
                      <option value="Edit Customer">Edit Customer</option>
                      <option value="Delete Customer">Delete Customer</option>
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
