import React, { useState } from "react";
import axios from "axios";
import "../items/Delete.css";
import { Alert, Button } from "react-bootstrap";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function Itemcoffee({ dataCoffee, setReload }) {
  
  const [showAlert, setShowAlert] = useState(false);
  const [showEditAlert, setEditShowAlert] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (coffees) => {
    setEditedData({ ...coffees });
  };

  const handleSave = async () => {
    try {
      await axios.patch(`/api/coffee/${editedData._id}`, editedData);
      setEditShowAlert(true);
      setTimeout(() => {
        setEditShowAlert(false);
      }, 2000);
      setReload(true);
      handleCancelEdit();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleCancelEdit = () => {
    setEditedData({});
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/coffee/${itemId}`);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      setReload(true);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      {dataCoffee ? (
        <div className="loading" >
          <div>
            <Alert
              className="card"
              show={showAlert}
              key="danger"
              variant="danger"
              height="20px"
            >
              Item deleted successfully!
            </Alert>
          </div>
          <div>
            <Alert
              className="card"
              show={showEditAlert}
              key="danger"
              variant="info"
              height="20px"
            >
              Item updated successfully!
            </Alert>
          </div>
          {dataCoffee.map((coffees) => (
            <div className="card shadow-sm" key={coffees._id} onDoubleClick={handleCancelEdit}>
              <h3 className="card-title">
                {editedData._id === coffees._id ? (
                  <input className="inline-input"
                    type="text"
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  coffees.name
                )}
              </h3>
              <p>
                Description:{" "}
                {editedData._id === coffees._id ? (
                  <input className="inline-input"
                  
                    type="text"
                    name="description"
                    value={editedData.description}
                    onChange={handleInputChange}
                  />
                ) : (
                  coffees.description
                )}
              </p>
              <p>
                Serving:{" "}
                {editedData._id === coffees._id ? (
                  <input className="inline-input"
                  type="text"
                    name="temp"
                    value={editedData.temp}
                    onChange={handleInputChange}
                  />
                ) : (
                  coffees.temp
                )}
              </p>
              <p>
                Price: Php{" "}
                {editedData._id === coffees._id ? (
                  <input className="inline-input"
                  type="text"
                    name="price"
                    value={editedData.price}
                    onChange={handleInputChange}
                  />
                ) : (
                  coffees.price
                )}
              </p>
              <p>
                {formatDistanceToNow(new Date(coffees.createdAt), {
                  addSuffix: true,
                })}
              </p>
              <div className="card-button-group">
                {editedData._id === coffees._id ? (
                  <React.Fragment>
                    <button
                      className="btn card-button btn-outline-success"
                      onClick={handleSave}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                      </svg>
                    </button>
                    <button
                      className="btn card-button btn-outline-secondary"
                      onClick={handleCancelEdit}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                      </svg>
                    </button>
                  </React.Fragment>
                ) : (
                  <div>
                    <button
                      className="btn card-button btn-outline-primary"
                      onClick={() => handleEdit(coffees)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
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
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                      </svg>
                    </button>
                  </div>
                )}
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
