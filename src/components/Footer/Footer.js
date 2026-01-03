import React from 'react';
import logoDark from '../../assets/image/logo-rustic-marinara.webp'
import { ReactComponent as FacebookIcon } from '../../assets/icons/ic_baseline-facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/mdi_instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/mdi_twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/mdi_youtube.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/basil_location-solid.svg';
import { ReactComponent as ClockIcon } from '../../assets/icons/tdesign_time-filled.svg';
import { ReactComponent as ContactCall } from '../../assets/icons/fluent_call-28-filled.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-section">
        <div className="rustic-marinara-logo" data-aos="fade-up">
          <img src={logoDark} alt="Rustic Marinara Logo" />
        </div>

        <div className="customer-service" data-aos="fade-up" data-aos-delay="100">
          <h3>CUSTOMER SERVICE</h3>
          <a href="#">Order Information</a>
          <a href="#">Product Halal Certificate</a>
          <a href="#">Our product history</a>
        </div>

        <div className="information" data-aos="fade-up" data-aos-delay="200">
          <h3>INFORMATION</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">FAQs</a>
        </div>

        <div className="contact-us" data-aos="fade-up" data-aos-delay="300">
          <h3>CONTACT US</h3>

          <p className="contact-item">
            <LocationIcon />
            <span>Universitas Araya, United States</span>
          </p>

          <p className="contact-item">
            <ClockIcon />
            <span>Monday - Sunday, 08.00 - 22.00</span>
          </p>

          <p className="contact-item">
            <ContactCall />
            <span>(+62) 812 3456 789</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © {new Date().getFullYear()} Rustic Marinara. All rights reserved.
        </div>

        <div className="social-media">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
