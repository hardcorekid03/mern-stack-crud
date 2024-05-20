import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Coffeeform.css";
import Itemcoffee from "./items/Itemcoffee";
import Addform from "./items/Addform";
import { useEffect, useState } from "react";
import axios from "axios";

function Coffeeform() {
  const [reload, setReload] = useState(false);
  const [dataCoffee, setDataCoffee] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/coffee/");
        setDataCoffee (response.data);
        if (reload) setReload(false);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [reload]);
  
  return (
    <div className="main-container">
      <div className="left-content">
        <div className="card-container">
          <Itemcoffee setDataCoffee={setDataCoffee} />
        </div>
      </div>
      <div className="right-content">
        <Addform />
      </div>
    </div>
  );
}

export default Coffeeform;
