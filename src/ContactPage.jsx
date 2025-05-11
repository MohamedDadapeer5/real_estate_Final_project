import React, { useState } from 'react';
import './ContactPage.css';
import { FaBuilding, FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes, FaRegAddressBook, FaHome, FaChartLine } from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlineContacts } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const [form, setForm] = useState({ email: '', name: '' });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const menuItems = [
    { icon: <FaHome />, text: 'Home', action: () => navigate('/home') },
    { icon: <FaChartLine />, text: 'Prediction Dashboard', action: () => navigate('/dashboard') },
    { icon: <AiOutlineInfoCircle />, text: 'About', action: () => navigate('/about') },
    { icon: <FaRegAddressBook />, text: 'Contact', action: () => navigate('/contact') },
    { icon: <BiLogOut />, text: 'Logout', action: () => { localStorage.removeItem('currentUser'); navigate('/'); } },
  ];

  return (
    <div className="contact-full-bg">
      <header className="contact-header">
        <div className="logo">
          <FaRegAddressBook className="logo-icon" />
          <h1>Contact Page</h1>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>
      <nav className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <span>Contact Menu</span>
        </div>
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li 
              key={index}
              onClick={() => {
                item.action();
                setMenuOpen(false);
              }}
              className="menu-item"
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="contact-page-bg contact-full-width">
        <div className="contact-container contact-wide">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">Any questions or remarks? Just write us a message!</p>
          <form
            className="contact-form"
            action="https://getform.io/f/adrnekra"
            method="POST"
          >
            <div className="contact-inputs">
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
              />
            </div>
            <button type="submit" className="contact-submit">SUBMIT</button>
          </form>
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon real-estate-icon">
                <FaBuilding />
              </div>
              <h3>ABOUT US</h3>
              <p>EstateHub - Your trusted real estate partner.<br />Buy, Sell, Rent, Invest.</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon phone-icon">
                <FaPhoneAlt />
              </div>
              <h3>PHONE (LANDLINE)</h3>
              <p>+91 82170 27213<br />+91 73539 83159</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon location-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>OUR OFFICE LOCATION</h3>
              <p>Crest stone properties and builders<br />No 74, Sumeru towers, Brigade road , near St. joseph's college of commerce , Bangalore 560025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 