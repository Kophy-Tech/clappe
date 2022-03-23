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

export const dontSave = ["/login"];

export const allRoutes = [
  {
    name: "Register",
    path: "/register",
    auth: false,
    element: RegisterPage,
    exact: true,
    noLayout: true,
  },
  {
    name: "Dashboard",
    path: "/DashBoard",
    auth: true,
    element: DashBoard,
    exact: true,
    noLayout: true,
  },
  {
    name: "Login",
    path: "/login",
    auth: false,
    element: LoginPage,
    exact: true,
    noLayout: true,
  },
];

const Master = (props) => {
  const location = props.location;
  // const routeNames = allRoutes.map((route) => route.name);
  const routePaths = allRoutes.map((route) => route.path);
  const authRoutes = allRoutes.filter((route) => route.auth);
  const login = useSelector((s) => s.user.loggedIn);
  // console.log(login, "in master");

  const [showIcon, setShowIcon] = useState(false);
  // const tryToLogin = async () => {
  //   try {
  //     setShowIcon(true);
  //     await fetchToken();
  //     setShowIcon(false);
  //   } catch (error) {
  //     setShowIcon(false);

  //     // console.log()
  //   }
  // };
  useEffect(() => {
    // tryToLogin();
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
    }
    return (
      <React.Fragment
        children={
          login === true ? (
            <Element component={element} />
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
              replace
            />
          )
        }
      />
    );
  };

  const ComposeRoutes = () => {
    const finalReturn = [];

    if (authRoutes.includes(window.location.pathname) && login === false) {
      finalReturn.push(
        <React.Fragment>
          <Route path={"/login"} exact element={Login} />
          <Navigate to={{ pathname: "/login" }} />
          {/* <Redirect to={"/login"} /> */}
        </React.Fragment>
      );
      return finalReturn;
    }
    let mappedRoutes = allRoutes.map((route, i) => {
      if (route.auth) {
        // if (route.noLayout) {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={
              <AuthAdmin element={route.element} component={route.element} />
            }
          />
        );
        // }
        return (
          <AuthAdmin
            key={i}
            path={route.path}
            exact={route.exact}
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
            exact={route.exact}
            element={<Element component={route.element} />}
          />
        );
      }
    });
    if (routePaths.includes(window.location.pathname) === false) {
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
  console.log(ComposeRoutes(), "location compose");
  return (
    <Routes>
      {ComposeRoutes()}
      {/* <Suspense fallback={<Loader />}>{ComposeRoutes()}</Suspense> */}
    </Routes>
  );
};

export default Master;
