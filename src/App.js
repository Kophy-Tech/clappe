

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

          </Routes>
        </Suspense>
       
      </CSSTransition >
    </TransitionGroup >
      
  </>
)
}

export default App


