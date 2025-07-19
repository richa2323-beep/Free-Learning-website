// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBookOpen, FaInfoCircle, FaSignInAlt, FaSignOutAlt, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>LearnFree</h2>
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon"><FaBars /></label>

      <ul className="nav-links">
        <li><Link to="/"><FaHome className="icon" /> Home</Link></li>
        <li><Link to="/courses"><FaBookOpen className="icon" /> Courses</Link></li>
        <li><Link to="/about"><FaInfoCircle className="icon" /> About</Link></li>
        {
          isLoggedIn ? (
            <li>
              <button className="auth-btn" onClick={handleAuthToggle}>
                <FaSignOutAlt className="icon" /> Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login"><FaSignInAlt className="icon" /> Login</Link>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Navbar;
