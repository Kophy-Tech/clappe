import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col, Card, Image, Table } from "react-bootstrap";
import "./Item.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  deleteCustomer,
  deleteItem,
  fetchAllCustomers,
  fetchAllItems,
} from "../../../redux/thunks";
import {
  Affect,
  ConfirmComp,
  FlatList,
  searchData,
} from "../../../redux/shared";

export default function Item() {
  const store = useSelector((state) => state.store);
  const [allItems, setAllItems] = React.useState([]);
  const [confirmP, setConfirmP] = React.useState({});
  const [effect, setEffect] = React.useState({});
  const navigate = useNavigate();
  React.useEffect(() => {
    fetchAllItems();
  }, []);
  React.useEffect(() => {
    setAllItems(store.items);
    console.log("store.items", store.items);
  }, [store]);

  const handleDelete = async (id) => {
    try {
      setEffect({ load: true });
      const res = await deleteItem(id);
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
                    <label htmlFor="customer">Item Name:</label>
                    <input type="text" className="form-control w-50 h-2 " />
                  </div>
                  {/* Amount Input Field  */}
                  <div className="form-group d-flex mb-3 justify-content-between">
                    <label htmlFor="customer">Sales Price:</label>
                    <input type="text" className="form-control w-50" />
                  </div>
                  {/* Invoice Input Field  */}
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="mx-5">
                  {/* Customer Address Input Field  */}
                  <div className="form-group d-flex mb-3 justify-content-between">
                    <label htmlFor="CostPrice">Cost Price:</label>
                    <input type="text" className="form-control w-50" />
                  </div>
                  {/* Customer Status Input Field */}
                </div>
              </Col>
            </Row>
            <Container>
              <div className="my-4">
                <Row>
                  <Col sm={4} xs={4} md={6}>
                    <div className="text-center  mb-5 justify-content-center">
                      <button
                        className="mybtn"
                        type="reset"
                        onClick={() => {
                          setAllItems(store.items);
                        }}
                      >
                        {" "}
                        Search
                      </button>
                    </div>
                  </Col>
                  <Col sm={4} md={6} xs={4}>
                    <div className="text-center  mb-5">
                      <button
                        className="mybtn"
                        type="reset"
                        onClick={() => {
                          setAllItems(store.items);
                        }}
                      >
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
              <div className="mx-auto">
                <Link to="/newitem" className="mybtn">
                  [+] Add Item
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
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Cost Price</th>
                  <th>Sales Price</th>
                  <th>Sales Tax</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <FlatList
                  items={allItems}
                  RenderItem={({ item }) => {
                    console.log("item", item);
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.cost_price}</td>
                        <td>{item.sales_price}</td>
                        {/* <td>{item.email}</td> */}
                        <td>{item.sales_tax}</td>
                        <td>
                          <select
                            className="form-select"
                            onChange={(e) => {
                              const value = e.target.value;
                              // console.log("value", value);
                              if (value === "Edit Item") {

                                navigate(`/item/${item.id}`);
                              } else if (value === "Delete Item") {
                                setConfirmP((s) => ({
                                  ...s,
                                  show: true,
                                  title: "Delete Item?",
                                  message:
                                    "Are you sure you want to delete this Item? This action cannot be undone.",
                                  handleYes: () => handleDelete(item.id),
                                  func: setConfirmP,
                                }));
                                // console.log("Delete Item");
                              }
                            }}
                          >
                            <option value="Action" selected disabled>
                              Action
                            </option>
                            <option value="Edit Item">Edit Item</option>
                            <option value="Delete Item">Delete Item</option>
                            <option value="Item">Item</option>
                          </select>
                        </td>
                      </tr>
                    );
                  }}
                />
                {/* <td>
                    <Link to="/newItem">Amazon Legal</Link>
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
                      <option value="Edit Item">Edit Item</option>
                      <option value="Delete Item">Delete Item</option>
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
