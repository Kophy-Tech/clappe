//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../redux/thunks";


//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiCreditCard, FiPenTool, FiUser, FiDollarSign, FiSettings, FiActivity, FiList } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import NavBarToggler from "./NavBarToggler";


const Sidebar = () => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();


  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <NavBarToggler menuClick={menuIconClick} />
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse} >
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Clp" : ""}</p>
            </div>

            <div className="text-center">
              <p>{menuCollapse ? "" : user.user.first_name}</p>


            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                <FiArrowLeftCircle />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent onMouseEnter={menuIconClick}>
            <Menu iconShape="square">


              <MenuItem className="text-cl my-4" active={true} icon={<FiHome />}>
                Dashboard
                <Link to="/dashboard" />

              </MenuItem>


              <MenuItem className="text-cl" active={false} icon={<FiUser />}>
                Customers
                <Link to="/customer" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiList />}>
                Items
                <Link to="/item" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiCreditCard />}>
                Invoices
                <Link to="/invoice" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiCreditCard />}>
                Proforma Invoices
                <Link to="/proformalInvoice" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiDollarSign />}>
                Purchase Order
                <Link to="/purchase" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiActivity />}>
                Estimates
                <Link to="/Estimate" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiHome />}>
                Quotes
                <Link to="/quotes" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiCreditCard />}>
                Receipts
                <Link to="/receipt" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiPenTool />}>
                Credit Notes
                <Link to="/creditnotes" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiHome />}>
                Delivery Notes
                <Link to="/deliverynotes" />

              </MenuItem>

              <MenuItem className="text-cl" active={false} icon={<FiSettings />}>
                Settings
                <Link to="/settings" />

              </MenuItem>
              <MenuItem className="text-cl" active={false} icon={<FiActivity />}>
                Reports
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <button className="btn btn-text"
                onClick={async () => {
                  if (user.loggedIn) {
                    await logoutUser();
                  }

                  //go to login page
                  // window.location.href = "/login";
                  navigate("/login");
                }}
              >
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>

              </button>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;