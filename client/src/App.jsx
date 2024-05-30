import { useState } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/components/Routes"

function App() {
  return (
    <>
<Router>
  <AppRoutes/>
</Router>

    </>
  )
}

export default App
