import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => navigate('/home')}>
        <img src="/Logo.jpg" alt="Logo" className="logo-image" />
      </div>

      <ul className="nav-links" data-aos="zoom-in-up" data-aos-duration="2000">
        <li onClick={() => navigate('/home')}>Home</li>
        <li onClick={() => navigate('/about')}>About Us</li>
        <li onClick={() => navigate('/slots')}>Slot Status</li>
        <li onClick={() => navigate('/search')}>Search Slots</li>
        <li onClick={() => navigate('/contact')}>Contact Us</li>
        <li onClick={() => navigate('/add-new')}>Admin panel</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
