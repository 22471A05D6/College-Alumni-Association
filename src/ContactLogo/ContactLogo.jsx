import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ContactLogo.css";

const ContactLogo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };

  return (
    <div className="floating-contact-logo" onClick={handleClick}>
      <div className="contact-logo">
        <Link to="/Contact">
        <img
          src="https://cdn-icons-png.freepik.com/256/6156/6156186.png?ga=GA1.1.265899329.1699275873&semt=ais_hybrid" // Replace with your contact icon URL
          alt="Contact Logo"
          className="logo"
        /></Link>
        
      </div>
      <div className="arrow">
        <span>&#8594;</span>
      </div>
    </div>
  );
};

export default ContactLogo;
