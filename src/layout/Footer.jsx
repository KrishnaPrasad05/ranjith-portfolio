import React from "react";
import { FaWhatsapp, FaLinkedin, FaBehance, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="portfolio-footer text-center text-white py-5">
      
      {/* First row */}
      <p className="footer-row footer-text-32">Let's Work</p>

      {/* Second row */}
      <p className="footer-row footer-text-48">Together</p>

      {/* Third row */}
      <p className="footer-row footer-text-18 ">
        ranjithhr2923@gmail.com
      </p>

      {/* Fourth row - button */}
      <div className="footer-row mt-3">
        <button className="btn btn-light footer-btn">Connect with me</button>
      </div>

      {/* Fifth row - horizontal line */}
      <div className="footer-row mt-4">
        <div className="footer-line"></div>
      </div>

      {/* Sixth row - social icons */}
      <div className="footer-row mt-3 social-icons">
        <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:ranjithhr2923@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.behance.net/your-profile" target="_blank" rel="noreferrer">
          <FaBehance />
        </a>
      </div>

    </footer>
  );
};

export default Footer;