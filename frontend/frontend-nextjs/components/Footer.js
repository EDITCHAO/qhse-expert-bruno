import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>QHSE PRO</h3>
            <p>Expert en Qualité, Hygiène, Sécurité et Environnement</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projets</a></li>
              <li><a href="#contact-form">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>Email: contact@qhsepro.com</p>
            <p>Téléphone: +1 234 567 8900</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Etey BRUNO - QHSE Expert. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
