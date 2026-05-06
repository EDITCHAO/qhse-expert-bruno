import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-shield-alt"></i>
              <div>
                <span className="logo-text">QHSE</span>
                <span className="logo-pro">PRO</span>
              </div>
            </div>
            <p className="footer-desc">
              Expert en Qualité, Hygiène, Sécurité et Environnement. 
              Accompagnement complet pour l'excellence opérationnelle.
            </p>
            <div className="social-links">
              <a href="https://wa.me/22892465477" className="social-link whatsapp" title="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://linkedin.com" className="social-link linkedin" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:contact@qhsepro.com" className="social-link email" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>
              <i className="fas fa-link"></i>
              Navigation
            </h4>
            <ul className="footer-links">
              <li><a href="#services"><i className="fas fa-chevron-right"></i>Services</a></li>
              <li><a href="#projects"><i className="fas fa-chevron-right"></i>Projets</a></li>
              <li><a href="#about"><i className="fas fa-chevron-right"></i>À propos</a></li>
              <li><a href="#contact"><i className="fas fa-chevron-right"></i>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              <i className="fas fa-briefcase"></i>
              Services
            </h4>
            <ul className="footer-links">
              <li><a href="#services"><i className="fas fa-chevron-right"></i>Audit QHSE</a></li>
              <li><a href="#services"><i className="fas fa-chevron-right"></i>Conformité</a></li>
              <li><a href="#services"><i className="fas fa-chevron-right"></i>Formation</a></li>
              <li><a href="#services"><i className="fas fa-chevron-right"></i>Certification</a></li>
            </ul>
          </div>

          <div className="footer-section contact-section">
            <h4>
              <i className="fas fa-phone"></i>
              Contact
            </h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-phone"></i>
                <a href="tel:+22892465477">+228 92465477</a>
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                <a href="mailto:contact@qhsepro.com">contact@qhsepro.com</a>
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <span>Lomé, Togo</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            <i className="fas fa-copyright"></i>
            {currentYear} QHSEPRO. Tous droits réservés.
          </p>
          <div className="footer-badges">
            <span className="badge">
              <i className="fas fa-certificate"></i>
              ISO 45001
            </span>
            <span className="badge">
              <i className="fas fa-certificate"></i>
              ISO 14001
            </span>
            <span className="badge">
              <i className="fas fa-award"></i>
              NEBOSH IGC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
