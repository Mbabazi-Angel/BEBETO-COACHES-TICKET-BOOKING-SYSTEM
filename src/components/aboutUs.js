import React from "react";
import "../components/aboutUs.css";
import image from "../assets/bebeto_bus.jpg"
import images from "../assets/buss.webp"
import logo from "../assets/bebeto_logo.png"


const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Navigation Bar */}
      <nav className="about-navbar">
        <div className="logo">
          <img src={logo} alt="Bebeto Coaches Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#home" className="active">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <a href="/booking" className="booking-btn">Booking</a>
      </nav>
      
      <div className="about-container">
        <br></br><br></br><h3>ABOUT US</h3>

        {/* First Section */}
        {/* About Us Section */}
      <div className="about-section">
        <div className="about-text left">
          <h2>Welcome to Bebeto Coach Services!</h2>
          <p>
            At Bebeto Coach Services, we pride ourselves on being one of the leading intercity road-passenger transport services in East Africa.
            Established with a vision to connect the diverse landscapes and cultures of the region, we operate routes that stretch across Uganda,
            Kenya, Congo, Kigali, South Sudan, Kagitumba, and Burundi. Our headquarters are strategically located in Uganda, enabling us to effectively 
            manage and optimize our operations across these regions.
          </p>
          <p>
            Our mission is simple: to provide safe, reliable, and affordable transportation solutions for everyone.
            Whether you’re traveling for business, leisure, or visiting family, Bebeto Bus is committed to ensuring your journey is comfortable and stress-free.
          </p>
        </div>
        <div className="about-image right">
          <img src={image} alt="Bebeto Bus Service" />
        </div>
      </div>

      {/* Comfort and Fleet Section */}
      <div className="about-section">
        <div className="about-image left">
          <img src={images} alt="Bebeto Bus Fleet" />
        </div>
        <div className="about-text right">
          <h2>Experience Comfort and Convenience with Our Modern Fleet</h2>
          <p>
            Our modern fleet of buses is equipped with all the amenities to make your journey comfortable and enjoyable.
            From spacious seating and air conditioning to onboard entertainment and rest stops, we aim to provide a travel experience that is second to none.
          </p>
          <p>
            Whether you’re traveling for business, leisure, or adventure, let Bebeto Bus be your trusted travel partner.
            With our commitment to safety, comfort, and affordability, we are here to ensure that your journey is as enjoyable as your destination.
          </p>
        </div>
      </div>
      </div>


      {/* Footer Section */}
            <footer className="home-footer" id="contact">
              <div className="footer-logo">
                <img src= {logo} alt="Bebeto Coaches Logo" />
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

export default AboutUs;