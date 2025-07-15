
// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>LearnFree</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li> {/* fixed path */}
        <li> <Link to= "/Login">Login </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
