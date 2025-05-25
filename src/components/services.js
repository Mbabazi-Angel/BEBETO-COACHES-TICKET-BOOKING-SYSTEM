import React from "react";
import "../components/services.css";
import photo from "../assets/bebeto_logo.png"
import photos from "../assets/buses.png"
import pic from "../assets/buss.webp"

const Services = () => {
    return (
      <div className="services-page">
        {/* Navigation Bar */}
        <nav className="services-navbar">
          <div className="logo">
              <img src= {photo} alt="Bebeto Coaches Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="#home" className="active">Services</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          <a href="/booking" className="booking-btn">Booking</a>
        </nav>
  
        {/* Services Section */}
        <div className="services-container">
          <br></br><br></br><br></br><br></br><h3>SERVICES</h3>
  
          {/* Send & Receive Parcels */}
          <div className="service-section">
            <div className="service-text left">
              <br></br><br></br><h2>Send & Receive Parcels</h2>
              <p>
                With Bebeto Coaches, sending and receiving parcels has never been easier.
                Our reliable parcel delivery service ensures your packages are transported safely and promptly 
                across our extensive East African network, providing you with peace of mind and convenience every step of the way.
                You can trust us to deliver your parcels quickly and securely across our wide network of routes, 
                ensuring a seamless and dependable service for all your shipping needs.
              </p>
            </div>
            <div className="service-image right">
              <img src= {photos} alt="Parcel Delivery" />
            </div>
          </div>
  
          {/* Fleet */}
          <div className="service-section">
            <div className="service-image left">
              <img src= {pic} alt="Modern Bus Fleet" />
            </div>
            <div className="service-text right">
              <h2>Fleet</h2>
              <p>
                Experience Comfort and Convenience with Our Modern Fleet. Our modern fleet of buses is equipped with all the amenities to make your journey comfortable and enjoyable.
                From spacious seating and air conditioning to onboard entertainment and rest stops, we aim to provide a travel experience that is second to none.
              </p>
              <p>
                With our commitment to safety, comfort, and affordability, we are here to ensure that your journey is as enjoyable as your destination.
                We look forward to traveling with you!
              </p>
            </div>
          </div>
        </div>
  
        {/* Footer Section */}
                    <footer className="home-footer" id="contact">
                      <div className="footer-logo">
                        <img src= {photo} alt="Bebeto Coaches Logo" />
                      </div>
                      <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="/services">Services</a>
                        <a href="#about">About Us</a>
                        <a href="/contact">Contacts</a>
                      </div>
                      <div className="footer-contact">
                        <div className="contact-info">
                          <h3>CONTACTS</h3>
                          <p>Ham Mukasa Road,<br />Bulange – Mengo, Kampala, Uganda</p>
                          <p>+256766799490<br />+256780445860</p>
                          <p>inquiries@bebetocoachservice.com</p>
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
  };
  
  export default Services;
  
