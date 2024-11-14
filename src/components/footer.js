import React from 'react';
import './footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 Babeto Coaches. All rights reserved.</p>
            <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
            </div>
        </footer>
    );
}

export default Footer;
