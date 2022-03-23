import React, { Suspense } from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Master from "./components/Master"
import { store } from "./redux/store"
// import "./App.css"


const App = () => {
  return (
    <Provider store={store}>
      <Master />
    </Provider>
  )
}

export default App
