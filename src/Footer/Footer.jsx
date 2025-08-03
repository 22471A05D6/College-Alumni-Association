import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-about">
          <h3>NEC Alumni Association</h3>
          <p>
            Connecting alumni and fostering lifelong relationships with NEC College. Stay in touch and make a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <strong>Address:</strong> Alumni Association, NEC College,Narasaraopeta, 522603
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:alumni@xyzcollege.com">alumni@NECcollege.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+1234567890">+91 84736375674</a>
          </p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="facebook" title="Facebook">Facebook</a>
            <a href="#" className="twitter" title="Twitter">Twitter</a>
            <a href="#" className="linkedin" title="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NEC Alumni Association. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
