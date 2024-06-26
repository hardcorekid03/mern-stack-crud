import React, { useState } from "react";
import { Alert} from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";

function Addform({ setReload }) {
  const {user} = useAuthContext();

  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    temp: "---",
    price: ""
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/coffee/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      } 
      const data = await response.json();
      console.log(data);

      setFormData({
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
      
    } catch (error) {
      // console.error('There was an error!', error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    
    }
  };

  return (
    <div className="card shadow p-4">
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
          <textarea
            rows= "2"
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
      <div className="div-alert">
      <Alert className="success-alert" show={showAlert} variant="success">
        Item added successfully!
      </Alert>
      <Alert className="error-alert" show={showError} variant="danger">
        Error adding item!      </Alert>
      </div>

    </div>
  );
}

export default Addform;
