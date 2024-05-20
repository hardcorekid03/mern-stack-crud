import React, { useState } from "react";
import axios from "axios";
import "../items/Delete.css";
import { Alert, Button } from "react-bootstrap";

function Itemcoffee({ dataCoffee, setReload }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = async (itemId) => {
    try {
      // Send a delete request to the backend API
      await axios.delete(`/api/coffee/${itemId}`);

      // Show the alert
      setShowAlert(true);

      // Automatically close the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    setReload(true);
  };
  return (
    <div>
      {dataCoffee ? (
        <div className="loading">
          <div >
            <Alert className="card" show={showAlert} key= "danger" variant="danger">
              Item deleted successfully!
            </Alert>
          </div>
          {dataCoffee.map((coffees) => (
            <div className="card shadow-sm" key={coffees._id}>
              <h3 className="card-title"> {coffees.name}</h3>
              <p>Description: {coffees.description}</p>
              <p> Serving: {coffees.temp}</p>
              <p>Price: Php {coffees.price}.00</p>
              <p>{coffees.createdAt}.00</p>
              <div className="card-button-group">
                <button className="btn card-button btn-outline-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                  </svg>
                </button>
                <button
                  className="btn card-button btn-outline-danger"
                  onClick={() => handleDelete(coffees._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Itemcoffee;
