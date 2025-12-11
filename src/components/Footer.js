import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
                <li>Order information</li>
                <li>Product Halal Certification</li>
                <li>Our products history</li>
            </ul>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>FAQs</li>
            </ul>
        </div>

        <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Universitas Araya</p>
            <p>Monday - Sunday, 08.00 - 22.00</p>
            <p>(+62) 213 5456 269</p>
        </div>
        </footer>
    );
}