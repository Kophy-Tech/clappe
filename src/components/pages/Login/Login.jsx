import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Affect, handleForm } from "../../../redux/shared";
import { loginUser } from "../../../redux/thunks";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
// import { Link } from 'react-router-dom'
function Login() {
  const [effect, setEffect] = React.useState({});
  const user = useSelector((s) => s.user);
  const handleSubmit = async (e) => {
    const data = handleForm(e);
    try {
      setEffect({ load: true });
      const res = await loginUser(data);
      console.log("res", res);
      setEffect({ load: false, error: false, message: res.message });
      e.target.reset();
    } catch (error) {
      setEffect({ load: false, error: true, message: error.message });
    }
  };
  
  if (user.loggedIn) {
    console.log("micheal ~ file: Login.jsx ~ line 26 ~ Login ~ user", user)
    const thePath = localStorage.getItem("path");
    // if (thePath === "/admin/signout") {
    //   return <Redirect to="/admin/dashboard" />
    // }
    if (thePath) {
      // localStorage.removeItem("path")
      return <Navigate to={thePath} replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
    // console.log(location, history, "datasss")
    // history.go(2)
  }

  return (
    <>
      <Navbar />
      <Affect effect={effect} />
      <div className="row">
        <div className="colm-logo">
          {/* <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo" /> */}
          <h1 className="text-primary ">
            {" "}
            Turn Quotes into Invoices with minimal effort
          </h1>
          <h1 className="">
            Clappe helps you Create and share with Customers.
          </h1>
        </div>
        <div className="colm-form">
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email address or phone number"
            />
            <input type="password" name="password" placeholder="Password" />
            <button className="btn-login">Login</button>

            <Link to="/">Forgotten password?</Link>
            <Link to="/register">
              <button className="btn-new">Create new Account</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
