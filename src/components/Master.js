import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Bar from "./Bar";
import Container from "./Container";

import { useNProgress } from "@tanem/react-nprogress";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { fetchToken } from "../redux/thunks";

import { InLoader } from "../redux/shared";
import { fetchProfile } from "../redux/thunks";
import Sidebar from "./layouts/partials/Sidebar";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"; 
import NavBarToggler from "./layouts/partials/NavBarToggler";



const Loader = InLoader;
const LoginPage = React.lazy(() => import("./pages/Login/Login"));
const RegisterPage = React.lazy(() => import("./pages/Register/Register"));
const ForgotPassword = React.lazy(() =>
  import("./pages/ForgotPassword/ForgotPassword")
);
const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));
const Navbar = React.lazy(() => import("./pages/Navbar/Navbar"));
const Footer = React.lazy(() => import("./pages/Footer/Footer"));
const DashBoard = React.lazy(() => import("./pages/DashBoard/DashBoard"));
const Customer = React.lazy(() => import("./pages/Customer/Customer"));
const NewCustomer = React.lazy(() => import("./pages/Customer/NewCustomer"));

const Invoice = React.lazy(() => import("./pages/Invoices/Invoice"));
const NewInvoice = React.lazy(() => import("./pages/Invoices/NewInvoice"));
const Estimate = React.lazy(() => import("./pages/Estimate/Estimate"));
const ProformalInvoice = React.lazy(() => import("./pages/ProformalInvoice/ProformalInvoice"));
const NewProformalInvoice = React.lazy(() => import("./pages/ProformalInvoice/NewProformalInvoice"));
const NewEstimateInvoice = React.lazy(() => import("./pages/Estimate/NewEstimateInvoice"));
const Purchase = React.lazy(() => import("./pages/Purchase/Purchase"));
const NewPurchase = React.lazy(() => import("./pages/Purchase/NewPurchase"));
const NewItem= React.lazy(() => import("./pages/Item/NewItem"));
const Item= React.lazy(() => import("./pages/Item/Item"));
const Quotes= React.lazy(() => import("./pages/Quotes/Quotes"));
const NewQuotes= React.lazy(() => import("./pages/Quotes/NewQuotes"));
const Receipt= React.lazy(() => import("./pages/Receipt/Receipt"));
const NewReceipt= React.lazy(() => import("./pages/Receipt/NewReceipt"));

const CreditNote= React.lazy(() => import("./pages/CreditNote/CreditNote"));
const NewCreditNote= React.lazy(() => import("./pages/CreditNote/NewCreditNote"));
const DeliveryNote= React.lazy(() => import("./pages/DeliveryNote/Delivery"));
const Reports= React.lazy(() => import("./pages/Reports/Reports"));

const NewDeliveryNote= React.lazy(() => import("./pages/DeliveryNote/NewDelivery"));



const Settings = React.lazy(() => import('./pages/Settings/Settings'));


const Modal = React.lazy(() => import("./pages/Common/Modal"));


const Progress = ({ isAnimating }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
      {/*
      This example doesn't use a spinner component so the UI stays
      tidy. You're free to render whatever is appropriate for your
      use-case.
      */}
    </Container>
  );
};

const NotFound = React.lazy(() => import("./pages/LandingPage/LandingPage"));
const Login = React.lazy(() => import("./pages/Login/Login"));

export const dontSave = ["/login", "/register", "/forgot-password"];

export const allRoutes = [
  {
    name: "Register",
    path: "/register",
    auth: false,
    element: RegisterPage,
    noLayout: true,
  },
  {
    name: "Dashboard",
    path: "/DashBoard",
    auth: true,
    element: DashBoard,
    noLayout: true,
  },
  {
    name: "Customer",
    path: "/Customer",
    auth: true,
    element: Customer,
    noLayout: true,
  },
  {
    name: "NewCustomer",
    path: "/newcustomer",
    auth: true,
    element: NewCustomer,
    // element: () => {
    //   return <Route path="/newcustomer" element={<NewCustomer />} children={
    //     <Route path=":id" element={<NewCustomer />} />
    //   } />;
    // },
    noLayout: false,
  },
  {
    name: "Edit Customer",
    path: "/customer/:id",
    auth: true,
    element: NewCustomer,
    noLayout: false,
  },
  {
    name: "Settings",
    path: "/settings",
    auth: true,
    element: Settings,
    noLayout: false,
  },
  {
    name: "Login",
    path: "/login",
    auth: false,
    element: LoginPage,
    noLayout: true,
  },
  {
    name: "LandingPage",
    path: "/",
    auth: false,
    element: LandingPage,
    noLayout: true,
  },
  {
    name: "Invoice",
    path: "/invoice",
    auth: true,
    element: Invoice,
    noLayout: false,
  },
  {
    name: "NewInvoice",
    path: "/newinvoice",
    auth: true,
    element: NewInvoice,
    noLayout: false,
  },
  {
    name: "EditInvoice",
    path: "/invoice/:id",
    auth: true,
    element: NewInvoice,
    noLayout: false,
  },
  {
    name: "Estimate",
    path: "/Estimate",
    auth: true,
    element: Estimate,
    noLayout: false,
  },
  {
    name: "ProformalInvoice",
    path: "/ProformalInvoice",
    auth: true,
    element: ProformalInvoice,
    noLayout: false,
  },
  {
    name: "NewProformalInvoice",
    path: "/NewProformalInvoice",
    auth: true,
    element: NewProformalInvoice,
    noLayout: false,
  },
  {
    name: "NewEstimateInvoice",
    path: "/NewEstimateInvoice",
    auth: true,
    element: NewEstimateInvoice,
    noLayout: false,
  },
  {
    name: "Purchase",
    path: "/Purchase",
    auth: true,
    element: Purchase,
    noLayout: false,
  },
  {
    name: "Modal",
    path: "/Modal",
    auth: true,
    element: Modal,
    noLayout: false,
  },
  {
    name: "NewPurchase",
    path: "/NewPurchase",
    auth: true,
    element: NewPurchase,
    noLayout: false,
  },
  {
    name: "Item",
    path: "/item",
    auth: true,
    element: Item,
    noLayout: false,
  },
  {
    name: "Edit Item",
    path: "/item/:id",
    auth: true,
    element: NewItem,
    noLayout: false,
  },
  {
    name: "NewItem",
    path: "/newitem",
    auth: true,
    element: NewItem,
    noLayout: false,
  },

  {
  name: "Quotes",
  path: "/quotes",
  auth: true,
  element: Quotes,
  noLayout: false,
  },
  
  {
    name: "NewQuotes",
  path: "/newquotes",
  auth: true,
  element: NewQuotes,
  noLayout: false,
  },
  
  {
    name: "Receipt",
    path: "/receipt",
    auth: true,
    element: Receipt,
    noLayout: false,
    },
    
    {
      name: "NewReceipt",
    path: "/newreceipt",
    auth: true,
    element: NewReceipt,
    noLayout: false,
    },
    
  {
    name: "CreditNote",
    path: "/creditnotes",
    auth: true,
    element: CreditNote,
    noLayout: false,
    },
    
    {
      name: "NewCreditNote",
    path: "/newcreditnote",
    auth: true,
    element: NewCreditNote,
    noLayout: false,
    },
      
  {
    name: "DeliveryNote",
    path: "/deliverynotes",
    auth: true,
    element: DeliveryNote,
    noLayout: false,
    },
    
    {
      name: "NewDeliveryNote",
    path: "/newdeliverynote",
    auth: true,
    element: NewDeliveryNote,
    noLayout: false,
    },
    {
      name: "Reports",
    path: "/reports",
    auth: true,
    element: Reports,
    noLayout: false,
    }


];

const Master = (props) => {
  // const location = props.location;
  const location = useLocation();
  // const routeNames = allRoutes.map((route) => route.name);
  const routePaths = allRoutes.map((route) => route.path);
  const authRoutes = allRoutes.filter((route) => route.auth);
  const login = useSelector((s) => s.user.loggedIn);
  const [load, setLoad] = useState(true);
  // console.log(login, "in master");

  const [showIcon, setShowIcon] = useState(false);
  const tryToLogin = async () => {
    try {
      await fetchProfile();
      // setShowIcon(false);
    } catch (error) {
      setLoad(false);
      // console.log()
    }
  };
  useEffect(() => {
    tryToLogin();
  }, []);

  const Element = (props) => {
    return (
      <Suspense fallback={<Loader />}>
        <props.component {...props} />
      </Suspense>
    );
  };

  const AuthAdmin = ({ element, ...rest }) => {
    if (login === false) {
      if (dontSave.includes(window.location.pathname) === false) {
        localStorage.setItem("path", window.location.pathname);
      }
      // console.log(location, "location");
      return (
        <Navigate to={{ pathname: "/login", state: { from: location } }} />
      );
    }
    return (
      <>
      <Sidebar/>
      <Element {...rest} component={element} />

      </>
    );
    
   
    // return (
    //   <React.Fragment
    //     children={
    //       login === true ? (
    //         <Element component={element} />
    //       ) : (
    //         <Navigate
    //           to={{
    //             pathname: "/login",
    //             state: { from: props.location },
    //           }}
    //           replace
    //         />
    //       )
    //     }
    //   />
    // );
  };

  const ComposeRoutes = () => {
    const finalReturn = [];

    if (authRoutes.includes(window.location.pathname) && login === false) {
      finalReturn.push(
        <React.Fragment key={3121}>
          <Route path={"/login"} element={Login} />
          <Navigate to={{ pathname: "/login" }} />
          {/* <Redirect to={"/login"} /> */}
        </React.Fragment>
      );
      return finalReturn;
    }
    let mappedRoutes = allRoutes.map((route, i) => {
      const theProps = {};
      //iterate route
      for (let key in route) {
        if (
          key !== "element" &&
          key !== "auth" &&
          key !== "noLayout" &&
          key !== "name"
        ) {
          theProps[key] = route[key];
        }
      }
      if (route.auth) {
        // if (route.noLayout) {
        // console.log(route, "route");
       
        // console.log(theProps, "theProps");
        return (
          <Route
            key={i}
            {...theProps}
            element={
             
              <AuthAdmin element={route.element} />

           
            }


            
          />
        );
        // }
        return (
          <AuthAdmin
            key={i}
            path={route.path}
            // Element={(props) => (
            //   <DashboardLayout
            //     DashboardComponent={() => <route.component {...props} />}
            //   />
            // )}
          />
        );
      } else {
        return (
          <Route
            key={i}
            path={route.path}
            {...theProps}
            element={<Element component={route.element} />}
          />
        );
      }
    });
    // console.log(window.location.pathname.split("/"), "path");
    if (
      routePaths.includes("/" + window.location.pathname.split("/")[1]) ===
      false
    ) {
      // console.log(mappedRoutes, "mappedRoutes", allRoutes.length);
      finalReturn.push(
        <React.Fragment key={31231}>
          {mappedRoutes}
          <Route path="*" element={<Element component={NotFound} />} />
        </React.Fragment>
      );
      return finalReturn;
    }
    // console.log(mappedRoutes, "mappedRoutes", allRoutes.length);

    return mappedRoutes;
  };

  if (showIcon) {
    return <Loader />;
  }
  // console.log(ComposeRoutes(), "location compose");
  return (
    <Routes>
      {ComposeRoutes()}
      {/* <Suspense fallback={<Loader />}>{ComposeRoutes()}</Suspense> */}
    </Routes>
  );
};

export default Master;
