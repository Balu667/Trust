import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>
        NOPA
      </div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/donations">Donations</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div>
        <button className="primary-btn donate-btn">Donate Now</button>
      </div>
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {isOpen && (
        <div className="nav-menu">
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/services" onClick={toggleMenu}>
            Services
          </NavLink>
          <NavLink to="/donations" onClick={toggleMenu}>
            Donations
          </NavLink>
          <NavLink to="/gallery" onClick={toggleMenu}>
            Gallery
          </NavLink>
          <NavLink to="/events" onClick={toggleMenu}>
            Events
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
