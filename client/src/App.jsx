import { useState } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Coffeeform from './components/Coffeeform/Coffeeform'
import Login from './components/Login/Login';

function App() {
  return (
    <>
     <Coffeeform/>
     {/* <Login/> */}
    </>
  )
}

export default App
