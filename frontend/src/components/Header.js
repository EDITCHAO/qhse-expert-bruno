import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import authAPI from '../api/auth';
import './Header.css';

const Header = ({ isAdmin = false }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    authAPI.logout();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <div className="logo-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="logo-text">
              <span className="logo-main">QHSE</span>
              <span className="logo-pro">PRO</span>
            </div>
          </Link>
          
          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" className="nav-link" onClick={closeMobileMenu}>
              <i className="fas fa-briefcase"></i>
              <span>Services</span>
            </a>
            <a href="#about" className="nav-link" onClick={closeMobileMenu}>
              <i className="fas fa-user"></i>
              <span>À propos</span>
            </a>
            <a href="#projects" className="nav-link" onClick={closeMobileMenu}>
              <i className="fas fa-folder-open"></i>
              <span>Projets</span>
            </a>
            <a href="#contact-form" className="nav-link" onClick={closeMobileMenu}>
              <i className="fas fa-envelope"></i>
              <span>Contacte</span>
            </a>
          </nav>

          <button className="admin-btn" onClick={() => navigate('/admin/login')}>
            <i className="fas fa-user-circle"></i>
            <span>Admin</span>
          </button>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
