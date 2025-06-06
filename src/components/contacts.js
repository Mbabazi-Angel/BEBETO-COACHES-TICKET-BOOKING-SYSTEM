import React from 'react';
import "../components/contacts.css";
import picture from "../assets/bebeto_logo.png";
import { useState } from "react";
import axios from "axios";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Define the API base URL as a relative path
  const API_BASE_URL = "http://localhost:8000";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/contact.php`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <nav className="contact-navbar">
        <div className="logo">
          <img src={picture} alt="Bebeto Coaches Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="#home" className="active">Contact Us</a></li>
        </ul>
        <a href="/booking" className="booking-btn">Booking</a>
      </nav>

      <div className="contact-us-info">
          <br></br><br></br><br></br><br></br><br></br>
          <h2>PLEASE CONTACT US</h2>
          <div className="features">
            <div className="feature">
              <div className="contact-icon">
              <i className="fas fa-building"></i>
             </div><br></br>
             <div className='contact-item'>
              <h3>Office</h3>
              <p>
                Ham Mukasa Road, Bulange - Mengo, Kampala, Uganda
              </p>
              </div>
            </div>
            <div className="feature">
              <div className="contact-icon">
              <i className="fas fa-phone"></i>
             </div><br></br>
             <div className='contact-item'>
              <h3>Booking</h3>
              <p>+256 766799 490</p>
              <p>+256 780 445 860</p>
              <p>inquiries@bebetocoachservice.com</p>
              </div>
            </div>
            <div className="feature">
              <div className="contact-icon">
              <i className="fas fa-clock"></i>
             </div><br></br>
             <div className='contact-item'>
              <h3>Work Time</h3>
              <p>
                Always open
              </p>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br>

      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" className="input-field" value={formData.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" className="input-field" value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="input-field" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" className="message-box" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div><br></br><br></br>

      {/* Footer Section */}
            <footer className="home-footer" id="contact">
                      <div className="footer-logo">
                        <img src={picture} alt="Bebeto Coaches Logo" />
                      </div>
            
                    <div className="footer-content">
                      <div className="footer-links">
                        <p><h3>QUICK LINKS</h3><a href="#home">Home</a><br></br><a href="/services">Services</a><br></br><a href="#about">About Us</a><br></br><a href="/contact">Contacts</a></p>
                      </div>
            
                      <div className="footer-contact">
                        <p><h3>CONTACTS</h3>Ham Mukasa Road,<br />Bulange – Mengo, Kampala, Uganda <br />+256766799490<br />+256780445860 <br />inquiries@bebetocoachservice.com</p> 
                      </div>
            
                      <div className="socials">
                        <h3>SOCIALS</h3>
                        <div className="social-icons">
                          <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook fa-1x"></i>
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter fa-1x"></i>
                          </a>
                          <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-instagram fa-1x"></i>
                          </a>
                          <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                            <i className="fab fa-whatsapp fa-1x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
            
                    <div className="footer-bottom">
                      <p>© 2025 Bebeto Coaches. All rights reserved.</p>
                    </div>
                  </footer>
          </div>
        );
      }

export default ContactPage;


