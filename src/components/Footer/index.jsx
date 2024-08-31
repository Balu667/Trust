import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-content">
        <div className="quick-link-section">
          <h3>Contact Us</h3>
          <p>NOPA is charitable trust helps for children</p>
          <div className="location">
            <FaLocationDot className="icon" /> Taluka Police Station Backside{" "}
            <br></br>
            Near Rayalaseema University B.Thandrapadu, KURNOOL
          </div>
          <div className="call-section">
            <IoCall className="icon" />
            <div>
              <p>+91 7780368926</p>
              <p>+91 1234567878</p>
            </div>
          </div>
        </div>
        <div className="quick-link-section">
          <h3>Quick Links</h3>
          <Link className="link">Home</Link>
          <Link className="link">About</Link>
          <Link className="link">Donations</Link>
          <Link className="link">Gallery</Link>
          <Link className="link">Services</Link>
        </div>
        <div className="quick-link-section">
          <h3>Quick Links</h3>
          <Link className="link">Student Registration</Link>
          <Link className="link">Donations</Link>
          <Link className="link">Function Hall</Link>
          <Link className="link">Gallery</Link>
          <Link className="link">Gallery</Link>
        </div>
      </div>
      <div className="copyright-section">
        <div></div>
        <div>Copyright 2022 &copy; NOPA.com</div>
        <div className="icons-container">
          <FaFacebookSquare className="footer-icon" />
          <FaInstagram className="footer-icon" />
          <FaLinkedin className="footer-icon" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
