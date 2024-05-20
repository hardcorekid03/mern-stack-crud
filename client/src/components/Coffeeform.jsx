import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Coffeeform.css";
import Itemcoffee from "./items/Itemcoffee";
import { useEffect, useState } from "react";
import axios from "axios";
import Addform from "./items/Addform";

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

  // delete item
  const handleDelete = async (itemId) => {
    try {
      // Send a delete request to the backend API
      await axios.delete(`/api/coffee/${itemId}`);
      toast.success("Item deleted successfully!");
      
    } 
    catch (error) {
      console.error('Error deleting item:', error);
    }
    };
// end of delete item


  return (
    <div className="main-container">
      <div className="left-content">
        <div className="card-container">
          <Itemcoffee dataCoffee={dataCoffee} setReload={setReload} handleDelete={handleDelete}/>
        </div>
      </div>
      <div className="right-content">
        <Addform   setReload={setReload}/>
      </div>
    </div>
  );
}

export default Coffeeform;
