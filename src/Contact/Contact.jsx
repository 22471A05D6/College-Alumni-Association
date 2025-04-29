import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-intro">
          Reach out to the alumni association team for inquiries or support. We are here to assist you!
        </p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Type your message here" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <strong>Address:</strong> Alumni Association, NEC College, Narasaraopeta, 522601
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:alumni@xyzcollege.com">alumni@NECcollege.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+1234567890">+91 9392783467</a>
              </li>
              <li>
                <strong>Social Media:</strong>
                <ul className="social-links">
                  <li><img src="https://cdn-icons-png.freepik.com/256/2504/2504903.png?ga=GA1.1.265899329.1699275873&semt=ais_hybrid" alt="Facebook" /></li>
                  <li><img src="https://cdn-icons-png.freepik.com/256/2504/2504947.png?ga=GA1.1.265899329.1699275873&semt=ais_hybrid" alt="Twitter" /></li>
                  <li><img src="https://cdn-icons-png.freepik.com/256/2504/2504923.png?ga=GA1.1.265899329.1699275873&semt=ais_hybrid" alt="LinkedIn" /></li>
                </ul>
              </li>
            </ul>
            {/* Embed Google Map */}
            <h3>Find Us on the Map</h3>
            <div className="map-container">
  <iframe
    title="Narasaraopeta Engineering College"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.3051086645665!2d80.08565397468566!3d15.998897018622184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36a3d3a7f4fd3d%3A0x696c2c084d1e8c61!2sNarasaraopeta%20Engineering%20College!5e0!3m2!1sen!2sin!4v1679135810922!5m2!1sen!2sin"
    width="100%"
    height="250"
    style={{ border: "0", borderRadius: "8px" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
