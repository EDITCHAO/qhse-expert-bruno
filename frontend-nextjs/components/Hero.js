import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.firstName}>Etey</span>
          <span className={styles.lastName}>BRUNO</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Expert QHSE - Qualité, Hygiène, Sécurité & Environnement
        </p>
        <p className={styles.heroDescription}>
          Spécialisé en génie civil avec 12+ ans d'expérience
        </p>
        <a href="#contact-form" className={styles.ctaButton}>
          Me Contacter
        </a>
      </div>
    </section>
  );
}
