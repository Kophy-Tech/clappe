import React from "react";
import { Link } from "react-router-dom";
import { Affect, handleForm } from "../../../redux/shared";
import { registerUSer } from "../../../redux/thunks";
import Navbar from "../Navbar/Navbar";
import "./Register.css";

function Register() {
  const [effect, setEffect] = React.useState({});
  const handleSubmit = async (e) => {
    const data = handleForm(e);
    try {
      setEffect({ load: true });
      const res = await registerUSer(data);
      setEffect({ load: false, error: false, message: res.message });
      e.target.reset();
    } catch (error) {
      setEffect({ load: false, error: true, message: error.message });
    }
  };
  return (
    <>
      <Navbar />
      <div className="therow">
        <Affect effect={effect} useModal={true} />
        <div className="colm-logo">
          {/* <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo" /> */}
          <h1 className="text-primary "> Create Accout with Clappe Invoice</h1>
          <h1 className="">
            Clappe helps you Create and share with Customers.
          </h1>
        </div>
        <div className="colm-form">
          <form className="form-container" onSubmit={handleSubmit}>
            <input name="first_name" type="text" placeholder="First Name" />
            <input name="last_name" type="text" placeholder="Last Name" />
            <input name="email" type="text" placeholder="Email" />
            <input name="phone_number" type="text" placeholder="Phone" />
            <input name="password" type="password" placeholder="Password" />
            <button className="btn-login">SignUp</button>
            <div>Already Have an Account?</div>
            <Link to="/login" className="btn-new">
              {" "}
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
