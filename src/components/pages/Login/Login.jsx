import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Affect, handleForm } from "../../../redux/shared";
import { loginUser } from "../../../redux/thunks";
import Navbar from "../Navbar/Navbar";
import "./Login.css";
// import { Link } from 'react-router-dom'
function Login() {
  const [effect, setEffect] = React.useState({});
  const navigate = useNavigate();
  const user = useSelector((s) => s.user);
  const handleSubmit = async (e) => {
    const data = handleForm(e);
    try {
      setEffect({ load: true });
      const res = await loginUser(data);
      console.log("res", res);
      // setEffect({ load: false, error: false, message: res.message });
      e.target.reset();
    } catch (error) {
      setEffect({ load: false, error: true, message: error.message });
    }
  };
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";



  React.useEffect(() => {
    if (user.loggedIn) {
      const thePath = localStorage.getItem("path");
     
      // navigate(from, { replace: true });
      if (thePath) {
        localStorage.removeItem("path")
        navigate(thePath, { replace: true });
        // return null;
        // return <Navigate to={thePath} replace />;
      } else {
        navigate("/dashboard", { replace: true });
        // return null;
        // return <Navigate to="/dashboard" replace />;
      }
      // console.log(location, history, "datasss")
      // history.go(2)
    }
  
  }, [user.loggedIn]);

  return (
    <>
      <Navbar />
      <Affect effect={effect} />
      <div className="therow">
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
