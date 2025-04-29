import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Importing the custom CSS for styling

const Navbar = ({ setIsAuthenticated }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  const navigate = useNavigate(); // Hook for navigation

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear authentication state
    setIsAuthenticated(false); // Update parent state
    navigate('/'); // Redirect to login page
  };

  return (
    <header>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="sidebar-links">
          <li>
            <Link to="/Gallery" onClick={toggleSidebar} className="sidebar-link">
              <i className="fas fa-home"></i> Glimpses
            </Link>
          </li>
          <li>
            <Link to="/Contact" onClick={toggleSidebar} className="sidebar-link">
              <i className="fas fa-envelope"></i> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" onClick={toggleSidebar} className="sidebar-link">
              <i className="fas fa-info-circle"></i> AboutUs
            </Link>
          </li>
          <li>
            <Link to="/Events" onClick={toggleSidebar} className="sidebar-link">
              <i className="fas fa-calendar-alt"></i> Events
            </Link>
          </li>
          <li>
  <button onClick={handleLogout} className="logout-btnn">
    <i className="fas fa-sign-out-alt"></i> Logout
  </button>
</li>

          
        </ul>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" onClick={toggleSidebar}>
            <img
              src="https://cdn-icons-png.freepik.com/256/4824/4824124.png?ga=GA1.1.265899329.1699275873&semt=ais_hybrid"
              alt="Alumni"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/Home" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="nav-link">
              <i className="fas fa-info-circle"></i> AboutUs
            </Link>
          </li>
          <li>
            <Link to="/Events" className="nav-link">
              <i className="fas fa-calendar-alt"></i> Events
            </Link>
          </li>
          <li>
            <Link to="/Member" className="nav-link">
              <i className="fas fa-id-card"></i> Membership
            </Link>
          </li>
          
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
