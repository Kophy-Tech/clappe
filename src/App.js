

import React, { useState, Suspense } from 'react'

import {
  Routes, Route, useLocation,
} from "react-router-dom";
import Bar from './Bar'
import Container from './Container'

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
const App = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)


return(
  <>
    <Progress isAnimating={isLoading} key={location.key} />



    < TransitionGroup >
      {/*
            Timeout has been increased by 4x from the original version
            for demo purposes.
            */}
      < CSSTransition
        classNames="fade"
        key={location.key}
        onEnter={() => {
          setIsLoading(true)
        }}
        onEntered={() => {
          setIsLoading(false)
        }}
        timeout={1200}
      >
        <Suspense fallback={<Progress isAnimating={isLoading} key={location.key} />}>
          <Routes location={location}>

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="LandingPage" element={<LandingPage />} />
            <Route path="Navbar" element={<Navbar />} />
            <Route path="Footer" element={<Footer />} />
            <Route path="DashBoard" element={<DashBoard />} />
            <Route path="Customer" element={<Customer />} />
            <Route path="NewCustomer" element={<NewCustomer />} />


          </Routes>
        </Suspense>
       
      </CSSTransition >
    </TransitionGroup >
      
  </>
)
}

export default App


