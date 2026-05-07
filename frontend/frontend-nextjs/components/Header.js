import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <div className={styles.logoIcon}>
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>QHSE</span>
              <span className={styles.logoPro}>PRO</span>
            </div>
          </Link>
          
          <nav className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ''}`}>
            <a href="#services" className={styles.navLink} onClick={closeMobileMenu}>
              <i className="fas fa-briefcase"></i>
              <span>Services</span>
            </a>
            <a href="#about" className={styles.navLink} onClick={closeMobileMenu}>
              <i className="fas fa-user"></i>
              <span>À propos</span>
            </a>
            <a href="#projects" className={styles.navLink} onClick={closeMobileMenu}>
              <i className="fas fa-folder-open"></i>
              <span>Projets</span>
            </a>
            <a href="#contact-form" className={styles.navLink} onClick={closeMobileMenu}>
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </a>
          </nav>

          <Link href="/admin/login" className={styles.adminBtn}>
            <i className="fas fa-user-circle"></i>
            <span>Admin</span>
          </Link>

          <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
