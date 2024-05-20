import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addform() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    temp: "",
    price: "",
  });

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
          name: "",
          description: "",
          temp: "",
          price: "",
        });
        toast.success("Item added successfully!");
      })
      .catch(
        (err) =>
          console.log(err) +
          toast.error("Form submission failed. Please try again.")
      );
  };

  return (
    <div className="card shadow p-4">
      <ToastContainer />
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
            <option selected>---</option>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addform;
