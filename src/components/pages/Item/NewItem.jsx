import React from "react";
import Navbar from "../Navbar/Navbar";
import "./NewItem.css";
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

export default function NewItem(props) {
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
    <div className="container "> 
     <div className="bg-light p-2 border-bottom mb-4">
            <h3 className=" fs-3 "> < FiArrowLeft onClick={() => {
              navigate('/item')
            }} /> Add New Item</h3>
          </div>
       <form>
         
        <div className="col-md-6 col-12 bg-light pt-5 mx-2 px-4 mb-4">
       
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Item name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Qty</label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Cost Price </label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Sales Price</label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Total </label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Tax </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Item Description</label>
            <textarea
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary mb-4">
            Submit
          </button>
          </div>
        </form>
</div>    </>
  );
}