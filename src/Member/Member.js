import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Member.css";

const Member = () => {
  const [formData, setFormData] = useState({
    name: "",
    passedoutyear: "",
    email: "",
    phonenumber: "",
  });

  const predefinedDetails = {
    name: "admin",
    passedoutyear: "1999",
    email: "admin@gmail.com",
    phonenumber: "9502302400",
  };

  const navigate = useNavigate();
  const API_URL = "http://localhost:4060/api/members";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phonenumber)) {
      alert("Phone number should contain exactly 10 digits.");
      return;
    }

    try {
      // Check if entered details match predefined values
      const isPredefined =
        formData.name === predefinedDetails.name &&
        formData.passedoutyear === predefinedDetails.passedoutyear &&
        formData.email === predefinedDetails.email &&
        formData.phonenumber === predefinedDetails.phonenumber;

      if (isPredefined) {
        navigate("/Direct");
      } else {
        await axios.post(API_URL, formData); // Save to backend
        navigate("/Cards"); // Navigate to Cards component
      }
    } catch (err) {
      console.error("Error submitting member data:", err);
    }
  };

  return (
    <div className="membership-form">
      <h2>Membership Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Passed Out Year:</label>
          <input
            type="text"
            name="passedoutyear"
            value={formData.passedoutyear}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
            maxLength={10}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Member;
