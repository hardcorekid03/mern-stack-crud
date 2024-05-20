import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Coffeeform.css";
import Itemcoffee from "./items/Itemcoffee";
import Addform from "./items/Addform";
function Coffeeform() {
  return (
    <div className="main-container">
      <div className="left-content">
        <div className="card-container">
          <Itemcoffee />
        </div>
      </div>
      <div className="right-content">
        <Addform />
      </div>
    </div>
  );
}

export default Coffeeform;
