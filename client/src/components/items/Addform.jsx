import React, { useState } from "react";
import axios from "axios";
import { Alert, Button } from "react-bootstrap";

function Addform({ setReload }) {
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    description: "",
    temp: "---",
    price: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFormData((prevState) => ({
        ...prevState,
        image: reader.result,
      }));
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/coffee/", formData)
      .then((res) => {
        console.log(res.data);
        setFormData({
          image: "",
          name: "",
          description: "",
          temp: "---",
          price: "",
        });
        setReload(true);

        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      })
      .catch((err) => console.log(err) + alert("Error adding item!" + err));
  };

  return (
    <div className="card shadow p-4">
      <Alert className="card" show={showAlert} variant="success">
        Item added successfully!
      </Alert>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="coffeeName" className="form-label">
            Coffee Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="coffeeName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="serving" className="form-label">
            Serving
          </label>
          <select
            type="text"
            name="temp"
            className="form-control"
            id="serving"
            value={formData.temp}
            onChange={handleChange}
            required
          >
            <option>---</option>
            <option>Hot</option>
            <option>Cold</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            name="price"
            className="form-control"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            name="image"
            className="form-control"
            id="image"
            type="file" 
            accept=".jpeg, .jpg, .png"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add item
        </button>
      </form>
    </div>
  );
}

export default Addform;
