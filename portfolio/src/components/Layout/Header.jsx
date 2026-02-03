import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { profileData } from "../../data/profileData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="masthead">
      <div className="masthead-inner">
        <Link to="/" className="site-title">
          {profileData.name}
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/experience" onClick={closeMenu}>
            Experience
          </NavLink>
          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>
          <NavLink to="/cv" onClick={closeMenu}>
            CV
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
