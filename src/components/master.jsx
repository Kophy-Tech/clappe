import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Bar from './Bar'

  import Container from './Container'


import { fetchToken } from "../redux/thunks";
// import MainLoader from "./helpers/MainLoader";
// import DashboardLayout from "./layouts/DashboardLayout";

import { Loader } from "./shared";

import { useNProgress } from '@tanem/react-nprogress'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const LoginPage = React.lazy(() => import('./pages/Login/Login'));
const RegisterPage = React.lazy(() => import('./pages/Register/Register'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const LandingPage = React.lazy(() => import('./pages/LandingPage/LandingPage'));
const Navbar = React.lazy(() => import('./pages/Navbar/Navbar'));
const Footer = React.lazy(() => import('./pages/Footer/Footer'));
const DashBoard = React.lazy(() => import('./pages/DashBoard/DashBoard'));
const Customer = React.lazy(() => import('./pages/Customer/Customer'));
const NewCustomer = React.lazy(() => import('./pages/NewCustomer/NewCustomer'));




// const Progress = ({ isAnimating }) => {
//     const { animationDuration, isFinished, progress } = useNProgress({
//       isAnimating,
//     })
  
//     return (
//       <Container animationDuration={animationDuration} isFinished={isFinished}>
//         <Bar animationDuration={animationDuration} progress={progress} />
//         {/*
//         This example doesn't use a spinner component so the UI stays
//         tidy. You're free to render whatever is appropriate for your
//         use-case.
//         */}
//       </Container>
//     )
//   }

const Progress = ({ isAnimating }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
      isAnimating,
    })
  
    return (
      <Container animationDuration={animationDuration} isFinished={isFinished}>
        <Bar animationDuration={animationDuration} progress={progress} />
        {/*
        This example doesn't use a spinner component so the UI stays
        tidy. You're free to render whatever is appropriate for your
        use-case.
        */}
      </Container>
    )
  }

export const dontSave = ["/login"];

export const allRoutes = [
  {
    name: "Homepage",
    path: "/",
    exact: true,
    auth: false,
    component: LandingPage,
    noLayout: true,
  },
  {
    name: "Login",
    path: "/login",
    auth: false,
    component: LoginPage,
  },
  {
    name: "Register",
    path: "/register",
    auth: false,
    component: RegisterPage,
  },
  {
    name: "Forgotpassword",
    path: "/forgotpassword",
    auth: false,
    component: ForgotPassword
    
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    auth: true,
    component: DashBoard
    
  },
  {
    name: "NewCustomer",
    path: "/newcustomer",
    auth: true,
    component: NewCustomer
    
  },
  {
    name: "Customer",
    path: "/customer",
    auth: true,
    component: Customer
    
  },

//   {
//     name: "404",
//     path: "/404",
//     auth: false,
//     component: NotFound,
//   },
];

const Master = (props) => {
    const [isLoading, setIsLoading] = useState(false)
  const location = props.location;
  // const routeNames = allRoutes.map((route) => route.name);
  const routePaths = allRoutes.map((route) => route.path);
//   console.log(routePaths);

  const authRoutes = allRoutes.filter((route) => route.auth);
  const login = useSelector((s) => s.user.loggedIn);
  // console.log(login, "in master");

  const [showIcon, setShowIcon] = useState(false);
  const tryToLogin = async () => {
    try {
      setShowIcon(true);
      await fetchToken();
      setShowIcon(false);
    } catch (error) {
      setShowIcon(false);

      // console.log()
    }
  };
  useEffect(() => {
    tryToLogin();
  }, []);
  const AuthAdmin = ({ component: Component, ...rest }) => {
    if (login === false) {
      // console.log(location, "here");
      if (dontSave.includes(window.location.pathname) === false) {
        localStorage.setItem("path", window.location.pathname);
      }
    }
    return (
      <Route
        {...rest}
        render={(props) =>
          login === true ? (
            <Component {...props} />
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  };

  const Renderer = ({ Component }) => {
    return (
        

      <Suspense fallback={<Loader />}>
        <div>
          {/* <Nav /> */}
          <Component />
        </div>
      </Suspense>
     
  
    );
  };

  const ComposeRoutes = () => {
    if (authRoutes.includes(window.location.pathname) && login === false) {
      return (
        <React.Fragment>
          <Route path={"/login"} exact component={LoginPage}  />
          <Navigate to={"/login"} />
        </React.Fragment>
      );
    }
    let mappedRoutes = allRoutes.map((route, i) => {
      console.log(route);
      if (route.auth) {
        if (route.noLayout) {
          return (
            <AuthAdmin
              key={i}
              path={route.path}
              exact={route.exact}
              component={(props) => <route.component {...props} />}
            />
          );
        }
        return (
          <AuthAdmin
            key={i}
            path={route.path}
            exact={route.exact}
            component={(props) => (
              <DashBoard
                DashboardComponent={() => <route.component {...props} />}
              />
            )}
          />
        );
      } else {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        );
      }
    });
    if (routePaths.includes(window.location.pathname) === false) {
      // console.log(mappedRoutes, "mappedRoutes", allRoutes.length);
      return (
        <Routes>
          {mappedRoutes}
          <Route path="*" component={LoginPage} />
        </Routes>
      );
    }

    return mappedRoutes;
  };

  if (showIcon) {
    return <Loader />;
  }
  return (
    <Router>
      <Routes>
        <Suspense fallback={<Loader />}>
            

            {ComposeRoutes()}
            
            </Suspense>
        {/* <Suspense fallback={MainLoader()}>
          <Route path="/login" component={Login} />
          <AuthAdmin exact path="/" component={DashboardHome} />
          <AuthAdmin path="/grants" component={DashboardLayout(GrantHome)} />
          <AuthAdmin
            path="/grants/:id"
            component={DashboardLayout(SingleGrant)}
          />
          <AuthAdmin
            path="/applications"
            component={DashboardLayout(ApplicationHome)}
          />
          <AuthAdmin path="/profile" component={DashboardLayout(ProfileHome)} />
          <AuthAdmin path="/workshop" component={DashboardLayout(Workshop)} />
          <AuthAdmin path="/workshops" component={DashboardLayout(Workshops)} />
          <AuthAdmin
            path="/eligibility-test"
            component={DashboardLayout(EligibilityTest)}
          />
          
          <AuthAdmin
            path="/applicationsempty"
            component={DashboardLayout(ApplicationsEmpty)}
          />
          <AuthAdmin
            path="/workshopempty"
            component={DashboardLayout(WorkshopEmpty)}
          />
          <AuthAdmin
            path="/grantempty"
            component={DashboardLayout(GrantEmpty)}
          />

          <Navigate to="/login" />
        </Suspense> */}
      </Routes>
     </Router>
  );
};

export default Master;
