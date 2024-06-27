import React, { useState, useEffect } from "react";
import "./Coffeeform.css";
import Addform from "../Items/Addform";
import Itemcoffee from "../Items/Itemcoffee";
import { useAuthContext } from "../../hooks/useAuthContext";

function Coffeeform() {
  const { user } = useAuthContext();
  const [dataCoffee, setDataCoffee] = useState(null);
  const [reload, setReload] = useState(false);

  // fetch data from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/coffee/", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        setDataCoffee(data);

        if (reload) setReload(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user) {
      setReload(false);
      fetchData();
    }
  }, [reload, user]);
  // end of fetch data from database

  return (
    <>

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
    </>
  );
}

export default Coffeeform;
