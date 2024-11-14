import React from 'react';
import Footer from '../components/footer';
import './homePage.css'; // Custom styles for HomePage
import bebeto_logo from '../assets/bebeto_logo.png';

function HomePage() {
    return (
        <div className="home-page">
            {/* Header section included directly in the HomePage */}
            <header className="header">
                <div className="logo">
                    <img src={bebeto_logo} alt="Bebeto Coaches" />
                </div>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/schedule">Schedule</Link>
                    <Link to="/booking">Book Now</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            {/* Main content area */}
            <main className="main-content">
                <section className="hero-section">
                    <h1>Welcome to Babeto Coaches</h1>
                    <p>Book your next trip with ease and comfort!</p>
                    <button>Book Now</button>
                </section>
                <section className="features">
                    <h2>Why Choose Us?</h2>
                    <p>Comfortable seating, affordable prices, reliable service.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default HomePage;

