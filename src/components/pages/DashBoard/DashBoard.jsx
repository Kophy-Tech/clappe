import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./DashBoardCss.css";
import {dashboardCards} from "../data"
import { useSelector } from "react-redux";

export default function DashBoard() {
  const user = useSelector((state) => state.user);
  // const navigate = useNavigate();
console.log(dashboardCards);
  return (
    <>
      <Navbar />
      <div>
        <div>
          <div className="container">
          <h3 className="fw-bold my-4 text-primary">Welcome Back ! {user.user.first_name}</h3>
         
            <h3 className="fw-bold my-4"> Revenue</h3>
            {/* Chart */}
            <div className="mb-5">Chart Here ...</div>
            {/*Invoice and Customer Container */}
            <div className="row">
          
{
  dashboardCards.map(item=>{
return(

  <div className="col-sm-6">
  {/* Customer  */}
  <div className="alert alert-secondary alert-width">
    <div className="d-flex flex-row justify-content-between align-items-center mb-2">
      <h4 className="h5 fw-bold">{item.title}s</h4>
      <Link to={item.url} className="mybtn">
        Add New {item.title}
      </Link>
    </div>
    {/* */}
    <div className="grid">
      <h6 className="fw-bold">{item.actions.item1}</h6>
      <h6 className="fw-bold">{item.actions.item2}</h6>
      <h6 className="fw-bold">{item.actions.item3}</h6>
      <h6 className="fw-bold">{item.actions.item4}</h6>
      <h6 className="fw-bold">{item.actions.item5}</h6>

      <div className="text-decoration-underline" to="/">
        10
      </div>
      <div className="text-decoration-underline" to="/">
        150
      </div>
      <div className="text-decoration-underline" to="/">
        140
      </div>
      <div className="text-decoration-underline" to="/">
        10
      </div>
      <div className="text-decoration-underline" to="/">
        2
      </div>

    </div>
  </div>
</div>
)

  })
}

          
            </div>
          </div>
          {/* Estimate and Recepits container*/}
         
        </div>
        {/* Quote and Proforma Invoice */}
    
      </div>
    </>
  );
}
