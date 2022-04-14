import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Card, Image, Table } from "react-bootstrap";
import "./Reports.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteCustomer, fetchAllInvoices } from "../../../redux/thunks";
import {
  Affect,
  ConfirmComp,
  FlatList,
  searchData,
} from "../../../redux/shared";

export default function Reports() {
//   const store = useSelector((state) => state.store);
//   const [allReports, setAllReports] = React.useState([]);
//   const [confirmP, setConfirmP] = React.useState({});
//   const [effect, setEffect] = React.useState({});
//   const navigate = useNavigate();
//   React.useEffect(() => {
//     fetchAllReports();
//   }, []);
//   React.useEffect(() => {
//     setAllReports(store.Reports);
//     console.log("store.Reports", store.Reports);
//   }, [store]);

//   const handleDelete = async (id) => {
//     try {
//       setEffect({ load: true });
//       const res = await deleteReports(id);
//       setEffect({ load: false, error: false, message: res.message });
//     } catch (error) {
//       setEffect({ load: false, error: true, message: error.message });
//     }
//   };

  return (
    <>

      <div className="pt-5">
        <Container>
          {/* <Affect effect={effect} /> */}
          {/* <ConfirmComp {...confirmP} /> */}
          <form 
          // onSubmit={
          //   (e) => {
          //     e.target.reset();
          //   }
          // }
          >
                  <h3 className="my-4">Report</h3>

<div className="mx-4">

<Row>
            <Col sm={12} md={3}>
                <div className="mx-5">
                  {/* Customer Address Input Field  */}
                  {/* Customer Status Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="DateRange" className="px-2">start</label>
                    <input
                      type="date"
                      className="form-control w-100"
                      name="daterange"
                    />
                  </div>
                </div>
              </Col>
        
            <Col sm={12} md={3}>
                <div className="mx-5">
                  {/* Customer Address Input Field  */}
                  {/* Customer Status Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="DateRange" className="px-2">End</label>
                    <input
                      type="date"
                      className="form-control w-100"
                      name="daterange"
                    />
                  </div>
                </div>
              </Col>
        
              <Col sm={12} md={3}>
                <div className="mx-5">
                  {/* Customer Address Input Field  */}
                  {/* Customer Status Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="status">Report Type</label>
                    <select
                      className="form-select w-50"
                    //   onChange={(e) => {
                    //     const value = e.target.value;
                    //     if (value === "All") {
                    //       setAllReports(store.Reports);
                    //     } else {
                    //       setAllReports(
                    //         searchData(value, "status", store.Reports)
                    //       );
                    //     }
                    //   }}
                    >
                      <option selected>Select</option>
                      <option value="Paid">Purchased Summary</option>
                      <option value="Unpaid">Statement Balance</option>
                      <option value="Overdue">Customer Statement</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={3}>
                <div className="mx-5">
                  {/* Customer Address Input Field  */}
                  {/* Customer Status Input Field */}
                  <div className="form-group d-flex justify-content-between mb-3">
                    <label htmlFor="status">Measure</label>
                    <select
                      className="form-select w-50"
                    //   onChange={(e) => {
                    //     const value = e.target.value;
                    //     if (value === "All") {
                    //       setAllReports(store.Reports);
                    //     } else {
                    //       setAllReports(
                    //         searchData(value, "status", store.Reports)
                    //       );
                    //     }
                    //   }}
                    >
                      <option selected>Select</option>
                      
                    </select>
                  </div>
                </div>
              </Col>
            </Row>
</div>
           
            <Container>
                <div className="my-4">

                <Row>
                <Col sm={4} xs={4} md={6}>
                <div className="text-center  mb-5 justify-content-center">
                <button className="mybtn" type="reset"
              
                > Search</button>
              </div>
                </Col>
        <Col  sm={4} md={6} xs={4}>
        <div className="text-center  mb-5">
                <button className="mybtn" type="reset" 
            
                
                > Reset</button>
              </div>
        </Col>
           
            </Row>
                </div>
           
          </Container>
          </form>

          
          <Row>
            <div className="d-flex flex-row justify-content-between">
              {/* <div className>
                <Link to="/newreports" className="mybtn">
                  [+] Add New Reports 
                </Link>
              </div> */}
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
         
                      <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                       
                        <td>
                          <select
                            className="form-select"
                            // onChange={(e) => {
                            //   const value = e.target.value;
                            //   // console.log("value", value);
                            //   if (value === "Edit Customer") {
                            //     navigate(`/customer/${item.id}`);
                            //   } else if (value === "Delete Customer") {
                            //     setConfirmP((s) => ({
                            //       ...s,
                            //       show: true,
                            //       title: "Delete Customer?",
                            //       message:
                            //         "Are you sure you want to delete this customer? This action cannot be undone.",
                            //       handleYes: () => handleDelete(item.id),
                            //       func: setConfirmP,
                            //     }));
                            //     // console.log("Delete Customer");
                            //   }
                            // }}
                          >
                            <option value="Action" selected disabled>
                              Action
                            </option>
                            <option value="Edit Customer">Edit Customer</option>
                            <option value="Delete Customer">
                              Delete Customer
                            </option>
                            <option value="Reports">Reports</option>
                          </select>
                        </td>
                      </tr>
                    
                
                
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
                      <option value="Reports">Reports</option>
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
