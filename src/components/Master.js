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
const NewCustomer = React.lazy(() => import("./pages/NewCustomer/NewCustomer"));

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
    return <Element {...rest} component={element} />;
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
