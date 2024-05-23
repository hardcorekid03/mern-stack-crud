import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Coffeeform.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Addform from "../items/Addform";
import Itemcoffee from "../items/Itemcoffee";

function Coffeeform() {
  const [dataCoffee, setDataCoffee] = useState(null);
  const [reload, setReload] = useState(false);

  // fetch data from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/coffee/");
        setDataCoffee(response.data);
        if (reload) setReload(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setReload(false);
    fetchData();
  }, [reload]);
  // end of fetch data from database

  return (
    <div className="main-container">
      <div className="left-content">

        <div className="card-container">
          <Itemcoffee dataCoffee={dataCoffee} setReload={setReload} />
        </div>
      </div>

      <div className="right-content">
        <Addform setReload={setReload} />
      </div>
    </div>
  );
}

export default Coffeeform;
