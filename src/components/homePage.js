import React from "react";
import "./homePage.css"; // Import the separate CSS file
import "./aboutUs";
import "./bookingPage";
import "./contacts";
import "./services";
import logo from "../assets/bebeto_logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="home-navbar">
        <div className="logo">
          <img src= {logo} alt="Bebeto Coaches Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <a href="/booking" className="home-booking-btn">Booking</a>
      </nav>

      {/* Hero Section */}
      <header className="hero-section" id="home">
        <div className="hero-content-left">
          <h1>
            WELCOME TO <br /> BEBETO COACHES
          </h1>
          <a href="/booking" className="book-us-btn">BOOK US</a>
        </div>
      </header>

      {/* Combined About Us and Why Choose Us Section */}
      <section className="about-why-section" id="about">
        <div className="about-us">
          <h2>ABOUT BEBETO COACHES</h2>
          <p>
            Welcome to Bebeto Bus! We primarily operate in the East African regions, serving
            routes from Uganda to Kenya, Congo, Kigali, South Sudan, Kagitumba, and Burundi.
            Our headquarters are located in Uganda. Our mission is to provide safe,
            dependable, and affordable intercity road-passenger transport in East Africa.
          </p>
          <a href="/about" className="about-us-btn">Learn More →</a>
        </div>

        <div className="why-choose-us">
          <h2>WHY CHOOSE US?</h2>
          <div className="features">
            <div className="feature">
              <h3>Best Price Guarantee</h3>
              <p>
                We offer the best rates in the market. When you book with us, rest assured that
                you are getting the most value for your money.
              </p>
            </div>
            <div className="feature">
              <h3>Wide Network Area</h3>
              <p>
                We connect major cities and towns across East Africa, making travel convenient
                and accessible.
              </p>
            </div>
            <div className="feature">
              <h3>Eco-Friendly</h3>
              <p>
                We are committed to sustainable practices and are continuously looking for ways
                to reduce our environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

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

export default HomePage;

